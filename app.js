// 主逻辑：渲染、过滤、搜索、暗色模式
(function () {
  'use strict';

  const CATEGORY_LABELS = {
    system: '🛠️ 系统工具',
    disk: '💾 磁盘分析',
    files: '📁 文件管理',
    productivity: '⚡ 效率',
    dev: '👨‍💻 开发',
    media: '🎬 多媒体',
    network: '🌐 网络下载',
    security: '🔒 安全',
    browser: '🧭 浏览器',
  };

  const OS_BADGES = {
    windows: '🪟 Win',
    macos: '🍎 Mac',
    cross: '🌐 跨平台',
  };

  const PRICE_LABELS = {
    free: '免费',
    oss: '开源',
    freemium: '免费版+',
    paid: '付费',
  };

  const state = {
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
  const $osTabs = document.querySelectorAll('.os-tab');

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

  function buildCategoryChips() {
    const counts = { all: SOFTWARE.length };
    SOFTWARE.forEach(s => { counts[s.category] = (counts[s.category] || 0) + 1; });

    const chips = [
      `<button class="chip active" data-cat="all">全部 <span class="chip-count">${counts.all}</span></button>`,
    ];
    Object.keys(CATEGORY_LABELS).forEach(cat => {
      if (!counts[cat]) return;
      chips.push(`<button class="chip" data-cat="${cat}">${CATEGORY_LABELS[cat]} <span class="chip-count">${counts[cat]}</span></button>`);
    });
    $chips.innerHTML = chips.join('');

    $chips.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        $chips.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        state.category = chip.dataset.cat;
        render();
      });
    });
  }

  function matches(item) {
    if (state.os !== 'all' && item.os !== state.os) return false;
    if (state.category !== 'all' && item.category !== state.category) return false;
    if (state.query) {
      const q = state.query.toLowerCase();
      if (!item.name.toLowerCase().includes(q) && !item.desc.toLowerCase().includes(q)) return false;
    }
    return true;
  }

  function cardHTML(item) {
    const osBadge = `<span class="badge badge-os">${OS_BADGES[item.os] || item.os}</span>`;
    const priceClass = `badge-price-${item.price}`;
    const priceBadge = `<span class="badge ${priceClass}">${PRICE_LABELS[item.price] || item.price}</span>`;
    const safeUrl = escapeHtml(item.url);
    return `
      <article class="card">
        <div class="card-head">
          <h3 class="card-name">${highlight(item.name, state.query)}</h3>
          <div class="card-badges">${osBadge}${priceBadge}</div>
        </div>
        <p class="card-desc">${highlight(item.desc, state.query)}</p>
        <a class="card-link" href="${safeUrl}" target="_blank" rel="noopener noreferrer">访问官网 →</a>
      </article>
    `;
  }

  function render() {
    const filtered = SOFTWARE.filter(matches);
    if (filtered.length === 0) {
      $grid.innerHTML = '';
      $empty.hidden = false;
    } else {
      $empty.hidden = true;
      $grid.innerHTML = filtered.map(cardHTML).join('');
    }
    $count.textContent = `共 ${filtered.length} 个软件 ${state.os !== 'all' || state.category !== 'all' || state.query ? '(已筛选)' : ''}`;
  }

  function bindOsTabs() {
    $osTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        $osTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        state.os = tab.dataset.os;
        render();
      });
    });
  }

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

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('theme', theme); } catch (e) {}
  }

  function initTheme() {
    let saved;
    try { saved = localStorage.getItem('theme'); } catch (e) {}
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(saved || (prefersDark ? 'dark' : 'light'));

    $themeToggle.addEventListener('click', () => {
      const current = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // Init
  $totalCount.textContent = SOFTWARE.length;
  buildCategoryChips();
  bindOsTabs();
  bindSearch();
  initTheme();
  render();
})();
