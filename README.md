# 🛠️ Useful Software

精选 Windows 与 macOS 实用软件清单 / Curated Windows & macOS apps / 厳選Windows・macOSアプリ

🌐 **Live site / 在线访问 / オンライン:** https://howcanlove.github.io/useful-software/

## ✨ Features

- 🌍 **Multilingual** —— Auto-detects browser language. Supports 中文 / English / 日本語. User selection persists.
- 🎯 **Filter by OS** —— Windows / macOS / Cross-platform
- 🏷️ **Filter by category** —— System / Disk / Files / Productivity / Dev / Media / Network / Security / Browser
- 🔍 **Instant search** —— Full-text search by name and description, with highlighting
- 🌙 **Dark mode** —— Follows system preference, manual toggle, persisted
- 📱 **Responsive** —— Looks great on mobile, tablet and desktop
- 🚀 **Zero deps** —— Pure static HTML/CSS/JS, no build step
- 🖼️ **Detail modal** —— Click any card to see the full intro plus optional screenshots / videos
- 📥 **Direct download** —— A "Download" button next to "Official site". Powered by an updater script that pulls the latest GitHub release on demand.

## ➕ Adding software

Edit [`data.js`](./data.js) and append an object:

```js
{
  name: 'Software Name',
  desc: {
    zh: '一句话说清楚为什么值得装。',
    en: 'One sentence on why it\'s worth installing.',
    ja: '一言でなぜ入れるべきかを説明。',
  },
  url: 'https://official-site/',
  os: 'windows',         // 'windows' | 'macos' | 'cross'
  category: 'system',    // system | disk | files | productivity | dev | media | network | security | browser
  price: 'oss'           // free | oss | freemium | paid
}
```

Push to `main` and GitHub Pages redeploys automatically.

### Optional: add screenshots / videos to the detail modal

Each entry can carry a `media` array. The modal renders each item; cards show a small `📺 N` badge when media is present.

```js
{
  // ...other fields...
  media: [
    { type: 'image',   src: 'https://example.com/screenshot.png',                     caption: '主界面' },
    { type: 'video',   src: 'https://example.com/demo.mp4',                            caption: '功能演示' },
    { type: 'youtube', src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',              caption: '官方介绍' },
    // YouTube 也支持搜索结果嵌入（不需要具体的 video ID）：
    { type: 'youtube', src: 'https://www.youtube.com/embed?listType=search&list=tool+name+demo' }
  ]
}
```

For YouTube, **always** use the `https://www.youtube.com/embed/<id>` form (not `watch?v=<id>`).

## 📥 Auto-updating download URLs

`scripts/update-versions.mjs` walks `data.js`, finds GitHub-hosted projects, calls the GitHub API for each one, and writes the latest release info into `versions.json`. The frontend loads that file and shows a download button + version number.

```bash
# real run — writes versions.json
node scripts/update-versions.mjs

# preview only — no file write
node scripts/update-versions.mjs --dry-run
```

**Auth**: anonymous works (60 req/h limit) but if you have `gh` installed and authenticated the script picks up the token automatically (5000 req/h). Or set `GITHUB_TOKEN`.

**Hooking up a non-github project**:

- If the project is on GitHub but `url` points to a homepage, add `repo: 'owner/name'` to its entry — the script will discover it.
- If the project is *not* on GitHub, set `downloadUrl: 'https://...'` directly on the entry in `data.js`. That value is used as-is (until/unless `versions.json` later overrides it).

**Recommended cadence**: run weekly and commit `versions.json` so the deployed site stays current. Easy to wire into a GitHub Actions cron later.

## 🌐 Adding a new language

1. Open [`i18n.js`](./i18n.js), add a new entry to `SUPPORTED_LANGS`:
   ```js
   { code: 'ko', name: '한국어', htmlLang: 'ko' }
   ```
2. In the same file, copy one of the existing language objects (e.g. `en`) under `I18N` and translate all 35 keys.
3. Add the `ko` field to every entry's `desc` object in `data.js`.
4. Done. Browser will auto-detect Korean visitors and the language switcher will include it.

## 🛠️ Local preview

```bash
# Python
python -m http.server 8000

# Node
npx serve

# Or just open index.html directly
```

## 📄 License

MIT
