# 🛠️ 好软件清单 · Useful Software

精选 Windows 与 macOS 实用软件清单，附官网链接、按系统/分类筛选。

🌐 **在线访问：** https://howcanlove.github.io/useful-software/

## ✨ 特性

- 🎯 **按系统筛选** —— Windows / macOS / 跨平台
- 🏷️ **按分类筛选** —— 系统工具、磁盘、效率、开发、多媒体、网络、安全、浏览器
- 🔍 **即时搜索** —— 软件名 + 描述全文搜索，关键词高亮
- 🌙 **暗色模式** —— 跟随系统或手动切换，偏好持久化
- 📱 **响应式** —— 手机、平板、桌面都好看
- 🚀 **零依赖** —— 纯静态 HTML/CSS/JS，无需构建

## ➕ 添加新软件

直接编辑 [`data.js`](./data.js)，追加一个对象即可：

```js
{
  name: '软件名',
  desc: '一句话说清楚为什么值得装。',
  url: 'https://官网链接/',
  os: 'windows',         // 'windows' | 'macos' | 'cross'
  category: 'system',    // system | disk | files | productivity | dev | media | network | security | browser
  price: 'oss'           // free | oss(开源) | freemium | paid
}
```

提交 PR 或者直接 push 到 main 分支，GitHub Pages 会自动重新部署。

## 🛠️ 本地预览

不需要任何构建工具，用任意静态文件服务器都行：

```bash
# Python
python -m http.server 8000

# Node
npx serve

# 或者直接双击 index.html
```

## 📄 License

MIT
