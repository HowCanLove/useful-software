// 主逻辑：渲染、过滤、搜索、暗色模式、多语言
(function () {
  'use strict';

  const LANG_STORAGE_KEY = 'lang';
  const THEME_STORAGE_KEY = 'theme';

  const state = {
    lang: DEFAULT_LANG,
    os: 'all',
    category: 'all',
    query: '',
  };

  const $grid = document.getElementById('softwareGrid');
  const $count = document.getElementById('resultCount');
  const $totalCount = document.getElementById('totalCount');
  const $empty = document.getElementById('emptyState');
  const $search = document.getElementById('searchInput');
  const $chips = document.getElementById('categoryChips');
  const $themeToggle = document.getElementById('themeToggle');
  const $langSwitch = document.getElementById('langSwitch');
  const $osTabs = document.querySelectorAll('.os-tab');

  // ---------- helpers ----------

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function highlight(text, query) {
    const safe = escapeHtml(text);
    if (!query) return safe;
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return safe.replace(new RegExp(escapedQuery, 'gi'), m => `<mark>${m}</mark>`);
  }

  function t(key, vars) {
    const dict = I18N[state.lang] || I18N[DEFAULT_LANG];
    let str = dict[key];
    if (str == null) {
      // 退化到默认语言
      str = (I18N[DEFAULT_LANG] || {})[key] || key;
    }
    if (vars) {
      for (const k in vars) {
        str = str.replace(new RegExp('\\{' + k + '\\}', 'g'), vars[k]);
      }
    }
    return str;
  }

  function descFor(item) {
    return (item.desc && (item.desc[state.lang] || item.desc[DEFAULT_LANG])) || '';
  }

  // ---------- language detection ----------

  function detectInitialLang() {
    let saved;
    try { saved = localStorage.getItem(LANG_STORAGE_KEY); } catch (e) {}
    if (saved && I18N[saved]) return saved;

    const supportedCodes = SUPPORTED_LANGS.map(l => l.code);
    const candidates = [].concat(navigator.languages || [], navigator.language || []);
    for (const raw of candidates) {
      if (!raw) continue;
      const lower = String(raw).toLowerCase();
      // 精确匹配
      const exact = supportedCodes.find(c => lower === c || lower.startsWith(c + '-'));
      if (exact) return exact;
      // zh-Hans / zh-Hant 等情形已被 startsWith('zh-') 覆盖
    }
    return DEFAULT_LANG;
  }

  function persistLang() {
    try { localStorage.setItem(LANG_STORAGE_KEY, state.lang); } catch (e) {}
  }

  function setLang(lang) {
    if (!I18N[lang]) return;
    state.lang = lang;
    persistLang();
    applyLangToDocument();
    buildLangSwitch();
    buildOsTabs();
    buildCategoryChips();
    applyStaticI18n();
    render();
  }

  function applyLangToDocument() {
    const langInfo = SUPPORTED_LANGS.find(l => l.code === state.lang) || SUPPORTED_LANGS[0];
    document.documentElement.setAttribute('lang', langInfo.htmlLang);
    document.title = t('meta.title');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t('meta.description'));
  }

  // ---------- UI builders ----------

  function applyStaticI18n() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      // 格式: "attr:key,attr:key"
      const pairs = el.dataset.i18nAttr.split(',');
      pairs.forEach(p => {
        const [attr, key] = p.split(':').map(s => s.trim());
        if (attr && key) el.setAttribute(attr, t(key));
      });
    });
  }

  function buildLangSwitch() {
    const buttons = SUPPORTED_LANGS.map(l => {
      const active = l.code === state.lang ? ' active' : '';
      return `<button class="lang-btn${active}" data-lang="${l.code}" title="${l.name}">${l.name}</button>`;
    }).join('');
    $langSwitch.innerHTML = buttons;
    $langSwitch.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });
  }

  function buildOsTabs() {
    const labels = {
      all:     t('os.all'),
      windows: t('os.windows'),
      macos:   t('os.macos'),
      cross:   t('os.cross'),
    };
    $osTabs.forEach(tab => {
      const key = tab.dataset.os;
      tab.textContent = labels[key] || key;
      tab.classList.toggle('active', key === state.os);
    });
  }

  function bindOsTabs() {
    $osTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        state.os = tab.dataset.os;
        $osTabs.forEach(t => t.classList.toggle('active', t.dataset.os === state.os));
        render();
      });
    });
  }

  function buildCategoryChips() {
    const counts = { all: SOFTWARE.length };
    SOFTWARE.forEach(s => { counts[s.category] = (counts[s.category] || 0) + 1; });

    const cats = ['system','disk','files','productivity','dev','media','network','security','browser'];
    const chips = [
      `<button class="chip${state.category === 'all' ? ' active' : ''}" data-cat="all">${t('category.all')} <span class="chip-count">${counts.all}</span></button>`,
    ];
    cats.forEach(cat => {
      if (!counts[cat]) return;
      const active = state.category === cat ? ' active' : '';
      chips.push(`<button class="chip${active}" data-cat="${cat}">${t('category.' + cat)} <span class="chip-count">${counts[cat]}</span></button>`);
    });
    $chips.innerHTML = chips.join('');

    $chips.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        state.category = chip.dataset.cat;
        $chips.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c.dataset.cat === state.category));
        render();
      });
    });
  }

  function matches(item) {
    if (state.os !== 'all' && item.os !== state.os) return false;
    if (state.category !== 'all' && item.category !== state.category) return false;
    if (state.query) {
      const q = state.query.toLowerCase();
      if (!item.name.toLowerCase().includes(q) && !descFor(item).toLowerCase().includes(q)) return false;
    }
    return true;
  }

  function cardHTML(item) {
    const osBadge = `<span class="badge badge-os">${t('os.badge.' + item.os) || item.os}</span>`;
    const priceClass = `badge-price-${item.price}`;
    const priceBadge = `<span class="badge ${priceClass}">${t('price.' + item.price) || item.price}</span>`;
    const safeUrl = escapeHtml(item.url);
    return `
      <article class="card">
        <div class="card-head">
          <h3 class="card-name">${highlight(item.name, state.query)}</h3>
          <div class="card-badges">${osBadge}${priceBadge}</div>
        </div>
        <p class="card-desc">${highlight(descFor(item), state.query)}</p>
        <a class="card-link" href="${safeUrl}" target="_blank" rel="noopener noreferrer">${t('card.visit')}</a>
      </article>
    `;
  }

  function render() {
    const filtered = SOFTWARE.filter(matches);
    if (filtered.length === 0) {
      $grid.innerHTML = '';
      $empty.hidden = false;
      $empty.textContent = t('empty.title');
    } else {
      $empty.hidden = true;
      $grid.innerHTML = filtered.map(cardHTML).join('');
    }
    const filteredFlag = (state.os !== 'all' || state.category !== 'all' || state.query)
      ? ' ' + t('count.filtered') : '';
    $count.textContent = t('count.total', { n: filtered.length }) + filteredFlag;

    // 页脚（用 innerHTML 因为含一个 <a>）
    const footer = document.getElementById('footerText');
    if (footer) {
      const linkHTML = `<a href="https://github.com/HowCanLove/useful-software/edit/main/data.js" target="_blank" rel="noopener">${t('footer.linkText')}</a>`;
      footer.innerHTML = t('footer.text', { link: linkHTML, n: SOFTWARE.length });
    }
  }

  // ---------- search ----------

  function bindSearch() {
    let timer;
    $search.addEventListener('input', e => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        state.query = e.target.value.trim();
        render();
      }, 80);
    });
  }

  // ---------- theme ----------

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem(THEME_STORAGE_KEY, theme); } catch (e) {}
  }

  function initTheme() {
    let saved;
    try { saved = localStorage.getItem(THEME_STORAGE_KEY); } catch (e) {}
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(saved || (prefersDark ? 'dark' : 'light'));

    $themeToggle.addEventListener('click', () => {
      const current = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // ---------- init ----------

  state.lang = detectInitialLang();
  $totalCount.textContent = SOFTWARE.length;
  applyLangToDocument();
  buildLangSwitch();
  buildOsTabs();
  bindOsTabs();
  buildCategoryChips();
  applyStaticI18n();
  bindSearch();
  initTheme();
  $search.setAttribute('placeholder', t('search.placeholder'));
  render();
})();
