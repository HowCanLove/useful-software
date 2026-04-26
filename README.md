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
