// 主逻辑：渲染、过滤、搜索、暗色模式、多语言、详情弹窗
(function () {
  'use strict';

  const LANG_STORAGE_KEY = 'lang';
  const THEME_STORAGE_KEY = 'theme';
  const OS_STORAGE_KEY = 'os';

  const state = {
    lang: DEFAULT_LANG,
    os: 'all',
    category: 'all',
    query: '',
    modalItem: null,
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

  // Modal elements
  const $modal = document.getElementById('modal');
  const $modalIcon = document.getElementById('modalIcon');
  const $modalName = document.getElementById('modalName');
  const $modalBadges = document.getElementById('modalBadges');
  const $modalDesc = document.getElementById('modalDesc');
  const $modalMedia = document.getElementById('modalMedia');
  const $modalMediaEmpty = document.getElementById('modalMediaEmpty');
  const $modalLink = document.getElementById('modalLink');

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
    if (str == null) str = (I18N[DEFAULT_LANG] || {})[key] || key;
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

  function faviconFor(url) {
    try {
      const host = new URL(url).hostname;
      return `https://www.google.com/s2/favicons?domain=${host}&sz=128`;
    } catch (e) {
      return '';
    }
  }

  function hostnameFor(url) {
    try { return new URL(url).hostname; } catch (e) { return ''; }
  }

  // ---------- OS detection ----------

  function detectOS() {
    const platform = (navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || '';
    const ua = navigator.userAgent || '';
    if (/Mac/i.test(platform) || /Mac/i.test(ua) || /iPhone|iPad|iPod/i.test(ua)) return 'macos';
    if (/Win/i.test(platform) || /Windows/i.test(ua)) return 'windows';
    return 'all';
  }

  function detectInitialOs() {
    let saved;
    try { saved = localStorage.getItem(OS_STORAGE_KEY); } catch (e) {}
    const valid = ['all', 'windows', 'macos', 'cross'];
    if (saved && valid.indexOf(saved) !== -1) return saved;
    const detected = detectOS();
    return valid.indexOf(detected) !== -1 ? detected : 'all';
  }

  function persistOs() {
    try { localStorage.setItem(OS_STORAGE_KEY, state.os); } catch (e) {}
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
      const exact = supportedCodes.find(c => lower === c || lower.startsWith(c + '-'));
      if (exact) return exact;
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
    if (state.modalItem) openModal(state.modalItem); // 重新渲染弹窗内容到新语言
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
        persistOs();
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

  function badgesHTML(item) {
    const osBadge = `<span class="badge badge-os">${t('os.badge.' + item.os) || item.os}</span>`;
    const priceClass = `badge-price-${item.price}`;
    const priceBadge = `<span class="badge ${priceClass}">${t('price.' + item.price) || item.price}</span>`;
    return osBadge + priceBadge;
  }

  function cardHTML(item, idx) {
    const hasMedia = Array.isArray(item.media) && item.media.length > 0;
    const mediaBadge = hasMedia
      ? `<span class="card-media-badge">📺 ${item.media.length}</span>`
      : '';
    const safeUrl = escapeHtml(item.url);
    return `
      <article class="card" data-idx="${idx}" tabindex="0" role="button" aria-label="${escapeHtml(item.name)}">
        <div class="card-head">
          <h3 class="card-name">${highlight(item.name, state.query)}</h3>
          <div class="card-badges">${badgesHTML(item)}</div>
        </div>
        <p class="card-desc">${highlight(descFor(item), state.query)}</p>
        <div class="card-actions">
          <a class="card-link" href="${safeUrl}" target="_blank" rel="noopener noreferrer" data-no-modal>${t('card.visit')}</a>
          ${mediaBadge}
        </div>
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
      // 渲染时把过滤后数组的索引映射回原 SOFTWARE 索引，便于点击查找
      $grid.innerHTML = filtered.map(item => {
        const realIdx = SOFTWARE.indexOf(item);
        return cardHTML(item, realIdx);
      }).join('');
    }
    const filteredFlag = (state.os !== 'all' || state.category !== 'all' || state.query)
      ? ' ' + t('count.filtered') : '';
    $count.textContent = t('count.total', { n: filtered.length }) + filteredFlag;

    const footer = document.getElementById('footerText');
    if (footer) {
      const linkHTML = `<a href="https://github.com/HowCanLove/useful-software/edit/main/data.js" target="_blank" rel="noopener">${t('footer.linkText')}</a>`;
      footer.innerHTML = t('footer.text', { link: linkHTML, n: SOFTWARE.length });
    }

    bindCardClicks();
  }

  function bindCardClicks() {
    $grid.querySelectorAll('.card').forEach(card => {
      const open = () => {
        const idx = parseInt(card.dataset.idx, 10);
        const item = SOFTWARE[idx];
        if (item) openModal(item);
      };
      card.addEventListener('click', e => {
        // 点击卡片上的"访问官网"按钮时不开弹窗，让链接正常跳转
        if (e.target.closest('[data-no-modal]')) return;
        open();
      });
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          open();
        }
      });
    });
  }

  // ---------- modal ----------

  function mediaItemHTML(m) {
    const captionHTML = m.caption
      ? `<div class="modal-media-caption">${escapeHtml(m.caption)}</div>`
      : '';
    if (m.type === 'image') {
      return `<div class="modal-media-item"><img src="${escapeHtml(m.src)}" loading="lazy" alt="${escapeHtml(m.caption || '')}" referrerpolicy="no-referrer">${captionHTML}</div>`;
    }
    if (m.type === 'video') {
      return `<div class="modal-media-item"><video controls preload="metadata" src="${escapeHtml(m.src)}"></video>${captionHTML}</div>`;
    }
    if (m.type === 'youtube') {
      return `<div class="modal-media-item"><div class="modal-media-iframe-wrap"><iframe src="${escapeHtml(m.src)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div>${captionHTML}</div>`;
    }
    return '';
  }

  function openModal(item) {
    state.modalItem = item;
    $modalIcon.src = faviconFor(item.url);
    $modalIcon.alt = item.name;
    $modalName.textContent = item.name;
    $modalBadges.innerHTML = badgesHTML(item);
    $modalDesc.innerHTML = '<p>' + escapeHtml(descFor(item)).replace(/\n\s*\n/g, '</p><p>') + '</p>';

    if (Array.isArray(item.media) && item.media.length) {
      $modalMedia.innerHTML = item.media.map(mediaItemHTML).join('');
      $modalMedia.hidden = false;
      $modalMediaEmpty.hidden = true;
    } else {
      $modalMedia.innerHTML = '';
      $modalMedia.hidden = true;
      const editUrl = 'https://github.com/HowCanLove/useful-software/edit/main/data.js';
      const noMediaText = state.lang === 'zh'
        ? `🖼️ 暂无截图或视频。可以 <a href="${editUrl}" target="_blank" rel="noopener">编辑 data.js</a> 给这条加 <code>media</code> 字段。`
        : state.lang === 'ja'
          ? `🖼️ スクリーンショット・動画は未登録。<a href="${editUrl}" target="_blank" rel="noopener">data.js</a> を編集して <code>media</code> フィールドを追加できます。`
          : `🖼️ No screenshots or videos yet. <a href="${editUrl}" target="_blank" rel="noopener">Edit data.js</a> to add a <code>media</code> field for this entry.`;
      $modalMediaEmpty.innerHTML = noMediaText;
      $modalMediaEmpty.hidden = false;
    }

    $modalLink.href = item.url;
    $modalLink.textContent = `${t('card.visit')}  ·  ${hostnameFor(item.url)}`;

    $modal.hidden = false;
    document.body.classList.add('modal-open');
    setTimeout(() => $modal.querySelector('.modal-close').focus(), 50);
  }

  function closeModal() {
    state.modalItem = null;
    $modal.hidden = true;
    document.body.classList.remove('modal-open');
    // 停止 iframe/video 的播放
    $modalMedia.querySelectorAll('iframe').forEach(f => { f.src = f.src; });
    $modalMedia.querySelectorAll('video').forEach(v => v.pause());
  }

  function bindModalEvents() {
    $modal.addEventListener('click', e => {
      if (e.target.closest('[data-close-modal]')) closeModal();
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !$modal.hidden) closeModal();
    });
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
  state.os = detectInitialOs();
  $totalCount.textContent = SOFTWARE.length;
  applyLangToDocument();
  buildLangSwitch();
  buildOsTabs();
  bindOsTabs();
  buildCategoryChips();
  applyStaticI18n();
  bindSearch();
  initTheme();
  bindModalEvents();
  $search.setAttribute('placeholder', t('search.placeholder'));
  render();
})();
