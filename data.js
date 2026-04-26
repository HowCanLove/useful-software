// 软件数据。新增软件直接在这里追加对象即可。
// os: 'windows' | 'macos' | 'cross'
// category: 'system' | 'disk' | 'productivity' | 'dev' | 'media' | 'network' | 'security' | 'files' | 'browser'
// price: 'free' | 'freemium' | 'paid' | 'oss' (开源)
// desc: { zh, en, ja }  (中文 / English / 日本語)

const SOFTWARE = [
  // ========== 系统工具 / System ==========
  {
    name: 'Revo Uninstaller',
    desc: {
      zh: '彻底卸载程序，扫描并清理注册表残留和遗留文件，比 Windows 自带的卸载强很多。',
      en: 'Thoroughly uninstall apps and scrub leftover registry entries and orphan files — much better than the Windows built-in uninstaller.',
      ja: 'アプリを徹底的にアンインストールし、レジストリの残骸や残ったファイルまでクリーンアップ。Windows標準より強力。'
    },
    url: 'https://www.revouninstaller.com/', os: 'windows', category: 'system', price: 'freemium'
  },
  {
    name: 'AppCleaner',
    desc: {
      zh: '在 Mac 上彻底卸载应用，找出所有相关文件一并删除。',
      en: 'Cleanly uninstall Mac apps by finding and removing all related files in one go.',
      ja: 'Macアプリを関連ファイルごとまとめて削除し、きれいにアンインストール。'
    },
    url: 'https://freemacsoft.net/appcleaner/', os: 'macos', category: 'system', price: 'free'
  },
  {
    name: 'PowerToys',
    desc: {
      zh: '微软官方出品的实用工具集：FancyZones 窗口分屏、PowerRename 批量改名、PowerToys Run 启动器、键盘重映射等。',
      en: 'Microsoft\'s official utility suite — FancyZones window tiling, PowerRename batch rename, PowerToys Run launcher, keyboard remapping and more.',
      ja: 'Microsoft公式ユーティリティ集。FancyZonesによるウィンドウ整列、PowerRename一括リネーム、PowerToys Runランチャー、キーバインド変更など。'
    },
    url: 'https://learn.microsoft.com/windows/powertoys/', os: 'windows', category: 'system', price: 'oss'
  },
  {
    name: 'Process Explorer',
    desc: {
      zh: 'Sysinternals 出品的"超级任务管理器"，看进程详细信息、句柄、DLL，定位资源占用。',
      en: 'A "super Task Manager" from Sysinternals — inspect processes, handles, DLLs and pinpoint resource hogs.',
      ja: 'Sysinternals製の「強化版タスクマネージャー」。プロセス、ハンドル、DLLの詳細を確認しリソース食いを特定。'
    },
    url: 'https://learn.microsoft.com/sysinternals/downloads/process-explorer', os: 'windows', category: 'system', price: 'free'
  },
  {
    name: 'Autoruns',
    desc: {
      zh: 'Sysinternals 出品，列出所有开机自启项（包括隐藏的服务、计划任务、驱动），关闭流氓自启。',
      en: 'Sysinternals tool that lists every autostart entry (services, scheduled tasks, drivers) so you can disable rogue startup items.',
      ja: 'Sysinternals製。サービス、タスク、ドライバを含むすべての自動起動項目を一覧化し、不要なものを無効化。'
    },
    url: 'https://learn.microsoft.com/sysinternals/downloads/autoruns', os: 'windows', category: 'system', price: 'free'
  },
  {
    name: 'AutoHotkey',
    desc: {
      zh: '强大的键盘/鼠标/窗口自动化脚本工具，自定义热键、文本扩展、宏。',
      en: 'Powerful scripting tool for keyboard, mouse and window automation — hotkeys, text expansion, macros.',
      ja: 'キーボード・マウス・ウィンドウ操作を自動化する強力なスクリプトツール。ホットキー、テキスト展開、マクロ。'
    },
    url: 'https://www.autohotkey.com/', os: 'windows', category: 'system', price: 'oss'
  },
  {
    name: 'Karabiner-Elements',
    desc: {
      zh: 'Mac 上最强的键盘重映射工具，CapsLock 改 Esc、组合键、复杂修饰。',
      en: 'The most powerful keyboard remapper on Mac — turn CapsLock into Esc, build complex modifier chords, and more.',
      ja: 'Mac最強のキーリマッパー。CapsLockをEscに、複雑な修飾キー組み合わせも自在。'
    },
    url: 'https://karabiner-elements.pqrs.org/', os: 'macos', category: 'system', price: 'oss'
  },
  {
    name: 'Hammerspoon',
    desc: {
      zh: 'Mac 上用 Lua 脚本控制系统的自动化框架，窗口管理、热键、自动化无所不能。',
      en: 'Lua-scripted automation framework for macOS — window management, hotkeys, and just about anything else.',
      ja: 'macOSをLuaで自動化するフレームワーク。ウィンドウ管理、ホットキー、何でもござれ。'
    },
    url: 'https://www.hammerspoon.org/', os: 'macos', category: 'system', price: 'oss'
  },
  {
    name: 'BetterTouchTool',
    desc: {
      zh: 'Mac 上自定义触控板手势、键盘快捷键、Touch Bar，可玩性极高。',
      en: 'Customise trackpad gestures, keyboard shortcuts and Touch Bar on Mac — endlessly tweakable.',
      ja: 'Macのトラックパッドジェスチャー、ショートカット、Touch Barを自由にカスタマイズ。'
    },
    url: 'https://folivora.ai/', os: 'macos', category: 'system', price: 'paid'
  },
  {
    name: 'iStat Menus',
    desc: {
      zh: 'Mac 菜单栏系统监控：CPU、内存、网络、温度、电池、风扇全都一目了然。',
      en: 'Mac menu-bar system monitor — CPU, memory, network, temperature, battery, fans, all at a glance.',
      ja: 'Macメニューバーのシステムモニター。CPU、メモリ、ネット、温度、バッテリー、ファンを一目で。'
    },
    url: 'https://bjango.com/mac/istatmenus/', os: 'macos', category: 'system', price: 'paid'
  },
  {
    name: 'Stats',
    desc: {
      zh: 'iStat Menus 的免费开源替代，菜单栏显示系统状态。',
      en: 'Free open-source alternative to iStat Menus — system stats in your menu bar.',
      ja: 'iStat Menusの無料オープンソース代替。メニューバーにシステム状態を表示。'
    },
    url: 'https://github.com/exelban/stats', os: 'macos', category: 'system', price: 'oss'
  },
  {
    name: 'Rectangle',
    desc: {
      zh: 'Mac 窗口分屏工具（替代已停更的 Spectacle），快捷键拖动窗口到屏幕一半/四分之一。',
      en: 'Mac window snapping tool (Spectacle\'s spiritual successor) — keyboard shortcuts to tile windows to halves or quarters.',
      ja: 'Macのウィンドウスナップツール（旧Spectacleの後継）。ショートカットで画面の半分や四分割に。'
    },
    url: 'https://rectangleapp.com/', os: 'macos', category: 'system', price: 'oss'
  },
  {
    name: 'AltTab',
    desc: {
      zh: '把 Windows 风格的 Alt+Tab 切换器带到 Mac，按窗口而非应用切换。',
      en: 'Brings Windows-style Alt+Tab to Mac — switch by window, not by app.',
      ja: 'Windows風のAlt+TabをMacに。アプリではなくウィンドウ単位で切り替え。'
    },
    url: 'https://alt-tab-macos.netlify.app/', os: 'macos', category: 'system', price: 'oss'
  },
  {
    name: 'Bartender',
    desc: {
      zh: 'Mac 菜单栏图标整理工具，把不常用的图标隐藏起来。',
      en: 'Mac menu bar tidier — hide icons you rarely use.',
      ja: 'Macメニューバーの整理ツール。よく使わないアイコンを隠してすっきり。'
    },
    url: 'https://www.macbartender.com/', os: 'macos', category: 'system', price: 'paid'
  },
  {
    name: 'CrystalDiskInfo',
    desc: {
      zh: '查看硬盘 SMART 健康状态、温度、通电时长，预警老化磁盘。',
      en: 'Check drive SMART health, temperature and power-on hours — warns you before disks die.',
      ja: 'ドライブのSMART情報、温度、通電時間を確認。寿命前に警告。'
    },
    url: 'https://crystalmark.info/en/software/crystaldiskinfo/', os: 'windows', category: 'system', price: 'oss'
  },
  {
    name: 'HWiNFO',
    desc: {
      zh: '极其详细的硬件信息和实时监控，CPU/GPU/主板/电源全覆盖。',
      en: 'Extremely detailed hardware info and live monitoring — covers CPU, GPU, motherboard and PSU.',
      ja: '極めて詳細なハードウェア情報とリアルタイム監視。CPU、GPU、マザーボード、電源まで。'
    },
    url: 'https://www.hwinfo.com/', os: 'windows', category: 'system', price: 'free'
  },
  {
    name: 'coconutBattery',
    desc: {
      zh: '查看 Mac 电池健康度、循环次数、原厂容量。',
      en: 'See your Mac battery health, cycle count and design capacity.',
      ja: 'Macバッテリーの健康度、サイクル数、設計容量を表示。'
    },
    url: 'https://www.coconut-flavour.com/coconutbattery/', os: 'macos', category: 'system', price: 'freemium'
  },

  // ========== 磁盘与文件 / Disk & Files ==========
  {
    name: 'TreeSize Free',
    desc: {
      zh: '可视化扫描磁盘占用，按文件夹大小排序，找出谁吃掉了你的磁盘空间。',
      en: 'Visualise disk usage — sort folders by size and find what\'s eating your space.',
      ja: 'ディスク使用量を可視化。フォルダをサイズ順にソートし、容量を食う犯人を特定。'
    },
    url: 'https://www.jam-software.com/treesize_free', os: 'windows', category: 'disk', price: 'freemium'
  },
  {
    name: 'WizTree',
    desc: {
      zh: '比 TreeSize 快得多的磁盘分析器，直接读 NTFS 文件表，几秒钟扫完整盘。',
      en: 'Way faster than TreeSize — reads NTFS MFT directly to scan a whole drive in seconds.',
      ja: 'TreeSizeより圧倒的に高速。NTFSのMFTを直接読み、数秒でドライブ全体をスキャン。'
    },
    url: 'https://diskanalyzer.com/', os: 'windows', category: 'disk', price: 'freemium'
  },
  {
    name: 'WinDirStat',
    desc: {
      zh: '经典磁盘可视化工具，方块图直观展示每个文件占用比例。',
      en: 'Classic disk visualiser — treemap shows each file\'s share of the disk at a glance.',
      ja: '定番のディスク可視化ツール。ツリーマップで各ファイルの占有率が一目瞭然。'
    },
    url: 'https://windirstat.net/', os: 'windows', category: 'disk', price: 'oss'
  },
  {
    name: 'DaisyDisk',
    desc: {
      zh: 'Mac 上颜值最高的磁盘可视化工具，环形图清晰展示空间分布。',
      en: 'Best-looking disk visualiser on Mac — radial chart shows your space layout beautifully.',
      ja: 'Mac屈指の美しいディスク可視化ツール。円形グラフで空間配分をクリアに表示。'
    },
    url: 'https://daisydiskapp.com/', os: 'macos', category: 'disk', price: 'paid'
  },
  {
    name: 'OmniDiskSweeper',
    desc: {
      zh: 'Mac 上免费的磁盘分析工具，列表式展示文件夹大小。',
      en: 'Free Mac disk analyser — lists folders by size in a clean column view.',
      ja: 'Mac向けの無料ディスク分析ツール。フォルダサイズをリスト表示。'
    },
    url: 'https://www.omnigroup.com/more', os: 'macos', category: 'disk', price: 'free'
  },
  {
    name: 'Everything',
    desc: {
      zh: 'Windows 上最快的文件搜索工具，毫秒级即时搜索，按名称、扩展名、大小过滤。',
      en: 'Fastest file search on Windows — millisecond results, filter by name, extension or size.',
      ja: 'Windows最速のファイル検索。ミリ秒で結果表示、名前・拡張子・サイズで絞り込み。'
    },
    url: 'https://www.voidtools.com/', os: 'windows', category: 'files', price: 'free'
  },
  {
    name: 'TeraCopy',
    desc: {
      zh: '替代 Windows 默认的文件复制，速度更快、可暂停、错误重试、校验完整性。',
      en: 'Replaces the default Windows copy — faster, pausable, retries on errors, verifies integrity.',
      ja: 'Windows標準のコピーを置き換え。高速・一時停止可・エラー再試行・整合性検証。'
    },
    url: 'https://www.codesector.com/teracopy', os: 'windows', category: 'files', price: 'freemium'
  },
  {
    name: 'FreeFileSync',
    desc: {
      zh: '强大的文件夹同步和备份工具，支持双向同步、镜像、版本控制。',
      en: 'Powerful folder sync and backup — two-way sync, mirroring, versioning.',
      ja: '強力なフォルダ同期・バックアップツール。双方向同期、ミラー、バージョン管理対応。'
    },
    url: 'https://freefilesync.org/', os: 'cross', category: 'files', price: 'oss'
  },
  {
    name: '7-Zip',
    desc: {
      zh: '压缩率最高的免费开源压缩工具，支持几乎所有格式。',
      en: 'Free open-source archiver with the best compression ratios — handles practically every format.',
      ja: '圧縮率最強の無料オープンソース圧縮ツール。ほぼすべての形式に対応。'
    },
    url: 'https://www.7-zip.org/', os: 'windows', category: 'files', price: 'oss'
  },
  {
    name: 'Bandizip',
    desc: {
      zh: '颜值在线的压缩工具，速度快、广告少、支持密码恢复。',
      en: 'Good-looking archiver — fast, low on ads, supports password recovery.',
      ja: 'デザインが洗練された圧縮ツール。高速、広告少なめ、パスワード復元対応。'
    },
    url: 'https://www.bandisoft.com/bandizip/', os: 'cross', category: 'files', price: 'freemium'
  },
  {
    name: 'Keka',
    desc: {
      zh: 'Mac 上的优秀压缩工具，支持 7z、Zip、Tar、RAR 等格式。',
      en: 'Excellent Mac archiver — handles 7z, Zip, Tar, RAR and more.',
      ja: 'Macの優秀な圧縮ツール。7z、Zip、Tar、RARなど多形式対応。'
    },
    url: 'https://www.keka.io/', os: 'macos', category: 'files', price: 'freemium'
  },
  {
    name: 'The Unarchiver',
    desc: {
      zh: 'Mac 上最受欢迎的免费解压工具，支持 RAR、7z 等多种格式。',
      en: 'Most popular free unarchiver on Mac — handles RAR, 7z and many other formats.',
      ja: 'Macで定番の無料解凍ツール。RAR、7zなど多形式対応。'
    },
    url: 'https://theunarchiver.com/', os: 'macos', category: 'files', price: 'free'
  },
  {
    name: 'Files',
    desc: {
      zh: '现代化的 Windows 文件管理器替代，支持多标签、暗色模式、Git 集成。',
      en: 'Modern Windows file manager replacement — tabs, dark mode, Git integration.',
      ja: 'モダンなWindowsファイルマネージャー代替。タブ、ダークモード、Git統合。'
    },
    url: 'https://files.community/', os: 'windows', category: 'files', price: 'oss'
  },
  {
    name: 'Listary',
    desc: {
      zh: 'Windows 文件管理器加速器，文件搜索 + 启动器二合一。',
      en: 'Windows file-manager accelerator — file search and app launcher in one.',
      ja: 'Windowsファイル管理を加速。ファイル検索とランチャーを一体化。'
    },
    url: 'https://www.listary.com/', os: 'windows', category: 'files', price: 'freemium'
  },
  {
    name: 'Snipaste',
    desc: {
      zh: '截图 + 贴图工具，可以把截图钉在屏幕上当参考。',
      en: 'Screenshot + pin tool — pin captures to your screen as floating references.',
      ja: 'スクリーンショット＋ピン留めツール。キャプチャを画面に貼り付けて参照可能。'
    },
    url: 'https://www.snipaste.com/', os: 'cross', category: 'files', price: 'freemium'
  },
  {
    name: 'ShareX',
    desc: {
      zh: '功能极其全面的截图、录屏、上传工具，全部免费开源。',
      en: 'Hugely feature-rich capture, screen-record and upload tool — all free and open source.',
      ja: '機能満載のスクショ・録画・アップロードツール。完全無料オープンソース。'
    },
    url: 'https://getsharex.com/', os: 'windows', category: 'files', price: 'oss'
  },
  {
    name: 'CleanShot X',
    desc: {
      zh: 'Mac 上颜值和功能都顶级的截图录屏工具。',
      en: 'Top-tier screenshot and screen-recording tool on Mac, beautiful and full-featured.',
      ja: '見た目も機能もトップクラスのMacスクショ・録画ツール。'
    },
    url: 'https://cleanshot.com/', os: 'macos', category: 'files', price: 'paid'
  },

  // ========== 效率 / Productivity ==========
  {
    name: 'Ditto',
    desc: {
      zh: '剪贴板历史管理器，记录每次复制的内容，按需粘贴。',
      en: 'Clipboard history manager — keeps everything you\'ve copied, paste any of it on demand.',
      ja: 'クリップボード履歴マネージャー。コピー内容をすべて記録、必要な時に貼り付け。'
    },
    url: 'https://ditto-cp.sourceforge.io/', os: 'windows', category: 'productivity', price: 'oss'
  },
  {
    name: 'Maccy',
    desc: {
      zh: 'Mac 上的剪贴板历史工具，简洁开源。',
      en: 'Lean open-source clipboard history app for Mac.',
      ja: 'Mac向けのシンプルなオープンソースのクリップボード履歴ツール。'
    },
    url: 'https://maccy.app/', os: 'macos', category: 'productivity', price: 'oss'
  },
  {
    name: 'Raycast',
    desc: {
      zh: 'Mac 上最强的启动器，可装大量插件做计算/翻译/管窗口/操作 GitHub 等。Windows 版已发布。',
      en: 'The most powerful launcher on Mac — extensions for calc, translate, window mgmt, GitHub and tons more. Windows version available.',
      ja: 'Mac最強のランチャー。計算・翻訳・ウィンドウ管理・GitHub操作など拡張機能が豊富。Windows版もリリース済。'
    },
    url: 'https://www.raycast.com/', os: 'cross', category: 'productivity', price: 'freemium'
  },
  {
    name: 'Alfred',
    desc: {
      zh: 'Mac 老牌启动器，工作流系统极其强大。',
      en: 'The veteran Mac launcher — its workflow system is incredibly powerful.',
      ja: 'Macの老舗ランチャー。ワークフローシステムが極めて強力。'
    },
    url: 'https://www.alfredapp.com/', os: 'macos', category: 'productivity', price: 'freemium'
  },
  {
    name: 'Flow Launcher',
    desc: {
      zh: 'Windows 上的开源启动器，类似 Alfred/Raycast，支持插件扩展。',
      en: 'Open-source launcher for Windows in the spirit of Alfred/Raycast — plugin-extensible.',
      ja: 'Windows向けのオープンソースランチャー。Alfred/Raycast風、プラグイン拡張対応。'
    },
    url: 'https://www.flowlauncher.com/', os: 'windows', category: 'productivity', price: 'oss'
  },
  {
    name: 'Wox',
    desc: {
      zh: 'Windows 经典开源启动器，Flow Launcher 的前身。',
      en: 'Classic open-source Windows launcher — predecessor to Flow Launcher.',
      ja: 'Windowsの定番オープンソースランチャー。Flow Launcherの前身。'
    },
    url: 'http://www.wox.one/', os: 'windows', category: 'productivity', price: 'oss'
  },
  {
    name: 'Obsidian',
    desc: {
      zh: '基于 Markdown 的笔记工具，支持双向链接、知识图谱、强大插件生态。',
      en: 'Markdown-based notes app — backlinks, knowledge graph, rich plugin ecosystem.',
      ja: 'Markdownベースのノートアプリ。バックリンク、ナレッジグラフ、豊富なプラグイン。'
    },
    url: 'https://obsidian.md/', os: 'cross', category: 'productivity', price: 'freemium'
  },
  {
    name: 'Logseq',
    desc: {
      zh: '开源大纲笔记，类似 Roam Research，本地文件、隐私优先。',
      en: 'Open-source outliner notes app like Roam Research — local files, privacy-first.',
      ja: 'オープンソースのアウトライナー。Roam Research風、ローカルファイル、プライバシー重視。'
    },
    url: 'https://logseq.com/', os: 'cross', category: 'productivity', price: 'oss'
  },
  {
    name: 'Notion',
    desc: {
      zh: '集笔记、看板、数据库于一体的全能工作空间。',
      en: 'All-in-one workspace combining notes, kanban boards and databases.',
      ja: 'ノート、カンバン、データベースを統合したオールインワン作業空間。'
    },
    url: 'https://www.notion.so/', os: 'cross', category: 'productivity', price: 'freemium'
  },
  {
    name: 'Joplin',
    desc: {
      zh: '开源的笔记工具，支持端到端加密、多端同步、Markdown 编辑。',
      en: 'Open-source notes app — end-to-end encryption, multi-device sync, Markdown editing.',
      ja: 'オープンソースのノートアプリ。エンドツーエンド暗号化、マルチデバイス同期、Markdown対応。'
    },
    url: 'https://joplinapp.org/', os: 'cross', category: 'productivity', price: 'oss'
  },
  {
    name: 'Anki',
    desc: {
      zh: '基于间隔重复算法的记忆卡片应用，背单词/学习的神器。',
      en: 'Spaced-repetition flashcards — the gold standard for memorising vocabulary and study material.',
      ja: '間隔反復アルゴリズムの暗記カードアプリ。単語学習・受験勉強の必須ツール。'
    },
    url: 'https://apps.ankiweb.net/', os: 'cross', category: 'productivity', price: 'oss'
  },
  {
    name: 'Zotero',
    desc: {
      zh: '免费的文献管理工具，自动抓取元数据、生成引用、协作。',
      en: 'Free reference manager — auto-grabs metadata, generates citations, supports collaboration.',
      ja: '無料の文献管理ツール。メタデータ自動取得、引用生成、共同編集対応。'
    },
    url: 'https://www.zotero.org/', os: 'cross', category: 'productivity', price: 'oss'
  },

  // ========== 开发 / Dev ==========
  {
    name: 'Visual Studio Code',
    desc: {
      zh: '现代代码编辑器之王，插件生态丰富，免费跨平台。',
      en: 'King of modern code editors — huge extension ecosystem, free, cross-platform.',
      ja: 'モダンなコードエディタの王者。豊富な拡張機能、無料、クロスプラットフォーム。'
    },
    url: 'https://code.visualstudio.com/', os: 'cross', category: 'dev', price: 'oss'
  },
  {
    name: 'Cursor',
    desc: {
      zh: '基于 VS Code 的 AI 编辑器，深度集成 LLM 写代码。',
      en: 'VS Code-based AI editor with deep LLM integration for writing code.',
      ja: 'VS Codeベースのai編集者。LLMを深く統合したコーディング体験。'
    },
    url: 'https://cursor.com/', os: 'cross', category: 'dev', price: 'freemium'
  },
  {
    name: 'Windows Terminal',
    desc: {
      zh: '微软官方现代化终端，支持多标签、GPU 加速、PowerShell/WSL/Cmd 都能装。',
      en: 'Microsoft\'s modern terminal — tabs, GPU acceleration, hosts PowerShell/WSL/Cmd.',
      ja: 'Microsoft公式のモダンターミナル。タブ、GPUアクセラレーション、PowerShell/WSL/Cmdに対応。'
    },
    url: 'https://github.com/microsoft/terminal', os: 'windows', category: 'dev', price: 'oss'
  },
  {
    name: 'iTerm2',
    desc: {
      zh: 'Mac 上替代默认 Terminal 的事实标准，分屏、热键、丰富配置。',
      en: 'De-facto standard Terminal replacement on Mac — split panes, hotkeys, deep configuration.',
      ja: 'Mac標準ターミナルの事実上の代替。分割画面、ホットキー、豊富な設定。'
    },
    url: 'https://iterm2.com/', os: 'macos', category: 'dev', price: 'oss'
  },
  {
    name: 'Warp',
    desc: {
      zh: '现代化的 AI 终端，自带 AI 助手、命令补全、协作。',
      en: 'Modern AI terminal — built-in AI assistant, command completion, collaboration.',
      ja: 'モダンなAIターミナル。AIアシスタント、コマンド補完、コラボレーション内蔵。'
    },
    url: 'https://www.warp.dev/', os: 'cross', category: 'dev', price: 'freemium'
  },
  {
    name: 'Git',
    desc: {
      zh: '版本控制系统标配，必装。',
      en: 'The standard version control system — mandatory.',
      ja: 'バージョン管理の標準。必須インストール。'
    },
    url: 'https://git-scm.com/', os: 'cross', category: 'dev', price: 'oss'
  },
  {
    name: 'GitHub Desktop',
    desc: {
      zh: 'GitHub 官方 Git GUI 客户端，新手友好。',
      en: 'GitHub\'s official Git GUI client — beginner-friendly.',
      ja: 'GitHub公式のGit GUIクライアント。初心者にやさしい。'
    },
    url: 'https://desktop.github.com/', os: 'cross', category: 'dev', price: 'oss'
  },
  {
    name: 'Sourcetree',
    desc: {
      zh: 'Atlassian 出品的免费 Git GUI 客户端，可视化分支、提交、合并。',
      en: 'Free Git GUI client from Atlassian — visualise branches, commits and merges.',
      ja: 'Atlassian製の無料Git GUIクライアント。ブランチ、コミット、マージを可視化。'
    },
    url: 'https://www.sourcetreeapp.com/', os: 'cross', category: 'dev', price: 'free'
  },
  {
    name: 'Docker Desktop',
    desc: {
      zh: '本地跑容器、做开发环境隔离的标配。',
      en: 'The standard for running containers locally and isolating dev environments.',
      ja: 'ローカルでコンテナを動かし開発環境を分離する定番。'
    },
    url: 'https://www.docker.com/products/docker-desktop/', os: 'cross', category: 'dev', price: 'freemium'
  },
  {
    name: 'Postman',
    desc: {
      zh: 'API 调试和测试工具，请求集合、环境变量、自动化测试。',
      en: 'API debugging and testing tool — request collections, environment variables, automated tests.',
      ja: 'APIのデバッグ・テストツール。リクエスト集、環境変数、自動テスト対応。'
    },
    url: 'https://www.postman.com/', os: 'cross', category: 'dev', price: 'freemium'
  },
  {
    name: 'Insomnia',
    desc: {
      zh: 'Postman 的开源替代，更轻、UI 更现代。',
      en: 'Open-source Postman alternative — lighter, more modern UI.',
      ja: 'Postmanのオープンソース代替。軽量でモダンなUI。'
    },
    url: 'https://insomnia.rest/', os: 'cross', category: 'dev', price: 'oss'
  },
  {
    name: 'Hoppscotch',
    desc: {
      zh: '轻量级 Web API 客户端，浏览器里就能用，开源免费。',
      en: 'Lightweight web-based API client — runs in your browser, open source and free.',
      ja: '軽量Web APIクライアント。ブラウザで動作、オープンソース無料。'
    },
    url: 'https://hoppscotch.io/', os: 'cross', category: 'dev', price: 'oss'
  },
  {
    name: 'DBeaver',
    desc: {
      zh: '通用数据库 GUI 客户端，支持几乎所有主流数据库。',
      en: 'Universal database GUI client — supports nearly every major database.',
      ja: '汎用データベースGUIクライアント。主要DBほぼすべてに対応。'
    },
    url: 'https://dbeaver.io/', os: 'cross', category: 'dev', price: 'oss'
  },
  {
    name: 'TablePlus',
    desc: {
      zh: '颜值高、性能好的多数据库 GUI，付费但好用。',
      en: 'Good-looking, fast multi-database GUI — paid but worth it.',
      ja: '美しく高速なマルチDB GUI。有料だが使いやすい。'
    },
    url: 'https://tableplus.com/', os: 'cross', category: 'dev', price: 'freemium'
  },
  {
    name: 'Sublime Merge',
    desc: {
      zh: '极快的 Git 客户端，搜索、diff、log 都顺滑。',
      en: 'Blazing-fast Git client — search, diff and log all feel snappy.',
      ja: '超高速なGitクライアント。検索、diff、ログがすべて快適。'
    },
    url: 'https://www.sublimemerge.com/', os: 'cross', category: 'dev', price: 'paid'
  },
  {
    name: 'WinSCP',
    desc: {
      zh: 'Windows 经典 SFTP/FTP 客户端，可视化上传下载。',
      en: 'Classic Windows SFTP/FTP client — drag-and-drop upload and download.',
      ja: 'Windowsの定番SFTP/FTPクライアント。GUIでアップロード・ダウンロード。'
    },
    url: 'https://winscp.net/', os: 'windows', category: 'dev', price: 'oss'
  },
  {
    name: 'Cyberduck',
    desc: {
      zh: '跨平台的 FTP/SFTP/S3/云存储客户端。',
      en: 'Cross-platform client for FTP/SFTP/S3 and many cloud storage providers.',
      ja: 'クロスプラットフォームのFTP/SFTP/S3・クラウドストレージクライアント。'
    },
    url: 'https://cyberduck.io/', os: 'cross', category: 'dev', price: 'oss'
  },
  {
    name: 'Transmit',
    desc: {
      zh: 'Mac 上颜值最高的 FTP/SFTP/云存储客户端。',
      en: 'Best-looking FTP/SFTP/cloud client on Mac.',
      ja: 'Mac屈指の美しいFTP/SFTP・クラウドクライアント。'
    },
    url: 'https://panic.com/transmit/', os: 'macos', category: 'dev', price: 'paid'
  },
  {
    name: 'Mockoon',
    desc: {
      zh: '本地 API mock 工具，几秒搭起一个假的接口服务。',
      en: 'Local API mock tool — spin up fake endpoints in seconds.',
      ja: 'ローカルAPIモックツール。数秒でダミーエンドポイントを構築。'
    },
    url: 'https://mockoon.com/', os: 'cross', category: 'dev', price: 'oss'
  },
  {
    name: 'Homebrew',
    desc: {
      zh: 'Mac/Linux 上的事实标准包管理器，brew install 一句搞定。',
      en: 'De-facto package manager for Mac/Linux — `brew install` and you\'re done.',
      ja: 'Mac/Linuxの事実上標準のパッケージマネージャー。`brew install`一発。'
    },
    url: 'https://brew.sh/', os: 'cross', category: 'dev', price: 'oss'
  },
  {
    name: 'Scoop',
    desc: {
      zh: 'Windows 上的命令行包管理器，绿色安装到用户目录。',
      en: 'Command-line package manager for Windows — installs portably to your user dir.',
      ja: 'Windowsのコマンドラインパッケージマネージャー。ユーザディレクトリへポータブルインストール。'
    },
    url: 'https://scoop.sh/', os: 'windows', category: 'dev', price: 'oss'
  },
  {
    name: 'Chocolatey',
    desc: {
      zh: 'Windows 老牌包管理器，软件库丰富。',
      en: 'Veteran Windows package manager with a vast software catalogue.',
      ja: 'Windows老舗のパッケージマネージャー。ソフトウェアカタログが豊富。'
    },
    url: 'https://chocolatey.org/', os: 'windows', category: 'dev', price: 'freemium'
  },
  {
    name: 'winget',
    desc: {
      zh: '微软官方包管理器（Windows 11 自带），命令行装软件。',
      en: 'Microsoft\'s official package manager (built into Windows 11) — install apps from the CLI.',
      ja: 'Microsoft公式のパッケージマネージャー（Windows 11標準搭載）。CLIでアプリをインストール。'
    },
    url: 'https://learn.microsoft.com/windows/package-manager/', os: 'windows', category: 'dev', price: 'oss'
  },

  // ========== 多媒体 / Media ==========
  {
    name: 'VLC',
    desc: {
      zh: '万能播放器，几乎支持所有视频/音频格式。',
      en: 'The universal media player — handles almost any video or audio format.',
      ja: '万能メディアプレーヤー。ほぼすべての動画・音声形式に対応。'
    },
    url: 'https://www.videolan.org/vlc/', os: 'cross', category: 'media', price: 'oss'
  },
  {
    name: 'mpv',
    desc: {
      zh: '极简但功能强大的命令行风格播放器，性能极佳。',
      en: 'Minimal yet powerful command-line-style player with excellent performance.',
      ja: 'シンプルだが強力なCLIスタイルプレーヤー。パフォーマンス抜群。'
    },
    url: 'https://mpv.io/', os: 'cross', category: 'media', price: 'oss'
  },
  {
    name: 'PotPlayer',
    desc: {
      zh: 'Windows 上功能最丰富的视频播放器，硬解、多音轨、字幕完美。',
      en: 'Most feature-rich video player on Windows — hardware decoding, multi-audio, perfect subtitle support.',
      ja: 'Windowsで最も多機能な動画プレーヤー。ハードウェアデコード、複数音声、字幕完全対応。'
    },
    url: 'https://potplayer.daum.net/', os: 'windows', category: 'media', price: 'free'
  },
  {
    name: 'IINA',
    desc: {
      zh: 'Mac 原生现代视频播放器，基于 mpv，颜值在线。',
      en: 'Modern native Mac video player built on mpv — and it looks great.',
      ja: 'mpvベースのモダンなネイティブMac動画プレーヤー。デザインも秀逸。'
    },
    url: 'https://iina.io/', os: 'macos', category: 'media', price: 'oss'
  },
  {
    name: 'foobar2000',
    desc: {
      zh: '轻量、高度可定制的音频播放器，烧友最爱。',
      en: 'Lightweight, highly customisable audio player — beloved by audiophiles.',
      ja: '軽量で高度にカスタマイズ可能な音楽プレーヤー。オーディオファン御用達。'
    },
    url: 'https://www.foobar2000.org/', os: 'cross', category: 'media', price: 'free'
  },
  {
    name: 'HandBrake',
    desc: {
      zh: '免费开源的视频转码工具，压片必备。',
      en: 'Free open-source video transcoder — essential for re-encoding videos.',
      ja: '無料オープンソースの動画変換ツール。圧縮・エンコードに必須。'
    },
    url: 'https://handbrake.fr/', os: 'cross', category: 'media', price: 'oss'
  },
  {
    name: 'OBS Studio',
    desc: {
      zh: '专业级直播和录屏软件，免费开源。',
      en: 'Professional-grade streaming and screen recording — free and open source.',
      ja: 'プロ仕様のライブ配信・画面録画ソフト。無料オープンソース。'
    },
    url: 'https://obsproject.com/', os: 'cross', category: 'media', price: 'oss'
  },
  {
    name: 'Audacity',
    desc: {
      zh: '免费开源的多轨音频编辑器。',
      en: 'Free open-source multi-track audio editor.',
      ja: '無料オープンソースのマルチトラック音声編集ツール。'
    },
    url: 'https://www.audacityteam.org/', os: 'cross', category: 'media', price: 'oss'
  },
  {
    name: 'DaVinci Resolve',
    desc: {
      zh: '好莱坞级别的视频剪辑/调色软件，免费版功能也极其强大。',
      en: 'Hollywood-grade video editor and colourist suite — even the free tier is incredibly powerful.',
      ja: 'ハリウッド級の動画編集・カラーグレーディングソフト。無料版でも極めて強力。'
    },
    url: 'https://www.blackmagicdesign.com/products/davinciresolve', os: 'cross', category: 'media', price: 'freemium'
  },
  {
    name: 'GIMP',
    desc: {
      zh: 'Photoshop 的免费开源替代，功能全面。',
      en: 'Free open-source Photoshop alternative — comprehensive feature set.',
      ja: 'Photoshopの無料オープンソース代替。機能は包括的。'
    },
    url: 'https://www.gimp.org/', os: 'cross', category: 'media', price: 'oss'
  },
  {
    name: 'Krita',
    desc: {
      zh: '免费开源的数字绘画软件，画师友好。',
      en: 'Free open-source digital painting software — artist-friendly.',
      ja: '無料オープンソースのデジタルペイントソフト。絵師にやさしい。'
    },
    url: 'https://krita.org/', os: 'cross', category: 'media', price: 'oss'
  },
  {
    name: 'Inkscape',
    desc: {
      zh: 'Illustrator 的开源替代，做矢量图。',
      en: 'Open-source Illustrator alternative for vector graphics.',
      ja: 'Illustratorのオープンソース代替。ベクター画像作成に。'
    },
    url: 'https://inkscape.org/', os: 'cross', category: 'media', price: 'oss'
  },
  {
    name: 'Paint.NET',
    desc: {
      zh: '比 Windows 画图强大、比 Photoshop 简单的图像编辑器。',
      en: 'More powerful than MS Paint, simpler than Photoshop — the sweet spot.',
      ja: 'Windowsペイントより強力でPhotoshopより簡単な画像エディタ。'
    },
    url: 'https://www.getpaint.net/', os: 'windows', category: 'media', price: 'free'
  },
  {
    name: 'IrfanView',
    desc: {
      zh: 'Windows 上极快的图片查看器和批量处理工具。',
      en: 'Lightning-fast image viewer and batch processor on Windows.',
      ja: 'Windows上で非常に高速な画像ビューアとバッチ処理ツール。'
    },
    url: 'https://www.irfanview.com/', os: 'windows', category: 'media', price: 'free'
  },
  {
    name: 'Sumatra PDF',
    desc: {
      zh: '极简轻量的 PDF/电子书阅读器，秒开。',
      en: 'Minimal, lightweight PDF/ebook reader — opens in an instant.',
      ja: '極めて軽量なPDF・電子書籍ビューア。瞬時に開く。'
    },
    url: 'https://www.sumatrapdfreader.org/', os: 'windows', category: 'media', price: 'oss'
  },

  // ========== 网络 / Network ==========
  {
    name: 'qBittorrent',
    desc: {
      zh: '免费开源无广告的 BT 下载工具，uTorrent 的最佳替代。',
      en: 'Free, open-source, ad-free BitTorrent client — best uTorrent replacement.',
      ja: '無料オープンソース・広告なしのBTクライアント。uTorrent最良の代替。'
    },
    url: 'https://www.qbittorrent.org/', os: 'cross', category: 'network', price: 'oss'
  },
  {
    name: 'aria2',
    desc: {
      zh: '命令行下载利器，支持多线程、HTTP/FTP/BT/磁力。',
      en: 'CLI download powerhouse — multi-threaded, supports HTTP/FTP/BT/magnet links.',
      ja: 'CLI最強のダウンローダー。マルチスレッド、HTTP/FTP/BT/マグネット対応。'
    },
    url: 'https://aria2.github.io/', os: 'cross', category: 'network', price: 'oss'
  },
  {
    name: 'Wireshark',
    desc: {
      zh: '专业网络协议分析器，抓包必备。',
      en: 'Professional network protocol analyser — essential packet-capture tool.',
      ja: 'プロフェッショナルなネットワークプロトコルアナライザ。パケットキャプチャ必須。'
    },
    url: 'https://www.wireshark.org/', os: 'cross', category: 'network', price: 'oss'
  },
  {
    name: 'Fiddler',
    desc: {
      zh: 'HTTP/HTTPS 抓包调试，前后端联调神器。',
      en: 'HTTP/HTTPS capture and debug — indispensable for front-end/back-end integration.',
      ja: 'HTTP/HTTPSのキャプチャ・デバッグ。フロント・バックエンド連携の決定版。'
    },
    url: 'https://www.telerik.com/fiddler', os: 'windows', category: 'network', price: 'freemium'
  },
  {
    name: 'Charles',
    desc: {
      zh: 'Mac 上的 HTTP 抓包工具，移动端调试也好用。',
      en: 'Mac HTTP capture tool — great for mobile debugging too.',
      ja: 'Mac向けのHTTPキャプチャツール。モバイルデバッグにも便利。'
    },
    url: 'https://www.charlesproxy.com/', os: 'cross', category: 'network', price: 'paid'
  },
  {
    name: 'Proxyman',
    desc: {
      zh: 'Mac 原生的现代化 HTTP 抓包工具，颜值高于 Charles。',
      en: 'Modern native Mac HTTP capture tool — better-looking than Charles.',
      ja: 'モダンなネイティブMac HTTPキャプチャツール。Charlesより美しい。'
    },
    url: 'https://proxyman.io/', os: 'macos', category: 'network', price: 'freemium'
  },
  {
    name: 'Rufus',
    desc: {
      zh: 'Windows 上做启动 U 盘的最快工具，比官方工具好用。',
      en: 'Fastest tool to make bootable USBs on Windows — beats the official utilities.',
      ja: 'Windowsでブータブルusbを作る最速ツール。公式ツールより使いやすい。'
    },
    url: 'https://rufus.ie/', os: 'windows', category: 'network', price: 'oss'
  },
  {
    name: 'balenaEtcher',
    desc: {
      zh: '跨平台的 USB/SD 卡镜像烧录工具，UI 友好。',
      en: 'Cross-platform USB/SD image flasher with a friendly UI.',
      ja: 'クロスプラットフォームのUSB/SDイメージ書き込みツール。UIが親切。'
    },
    url: 'https://etcher.balena.io/', os: 'cross', category: 'network', price: 'oss'
  },

  // ========== 安全 / Security ==========
  {
    name: 'KeePassXC',
    desc: {
      zh: '开源本地密码管理器，安全可控，社区活跃。',
      en: 'Open-source local password manager — secure, in your control, with an active community.',
      ja: 'オープンソースのローカルパスワード管理。安全で自分で管理可、活発なコミュニティ。'
    },
    url: 'https://keepassxc.org/', os: 'cross', category: 'security', price: 'oss'
  },
  {
    name: 'Bitwarden',
    desc: {
      zh: '云端密码管理器，免费版基本够用，支持自托管。',
      en: 'Cloud password manager — generous free tier, self-hostable.',
      ja: 'クラウドパスワード管理。無料版でも十分、セルフホスト可能。'
    },
    url: 'https://bitwarden.com/', os: 'cross', category: 'security', price: 'freemium'
  },
  {
    name: '1Password',
    desc: {
      zh: '颜值最高、体验最好的付费密码管理器。',
      en: 'The best-looking and most polished paid password manager.',
      ja: '見た目も使い勝手も最高峰の有料パスワード管理。'
    },
    url: 'https://1password.com/', os: 'cross', category: 'security', price: 'paid'
  },
  {
    name: 'VeraCrypt',
    desc: {
      zh: '免费开源的磁盘加密工具，TrueCrypt 的继承者。',
      en: 'Free open-source disk encryption — successor to TrueCrypt.',
      ja: '無料オープンソースのディスク暗号化ツール。TrueCryptの後継。'
    },
    url: 'https://www.veracrypt.fr/', os: 'cross', category: 'security', price: 'oss'
  },
  {
    name: 'Cryptomator',
    desc: {
      zh: '为云存储设计的加密工具，端到端加密同步盘里的文件。',
      en: 'Encryption tool designed for cloud storage — end-to-end encrypts files in your sync drive.',
      ja: 'クラウドストレージ向けの暗号化ツール。同期ドライブ内のファイルをE2E暗号化。'
    },
    url: 'https://cryptomator.org/', os: 'cross', category: 'security', price: 'oss'
  },
  {
    name: 'Malwarebytes',
    desc: {
      zh: '专业反恶意软件，作为 Windows Defender 的二次确认。',
      en: 'Professional anti-malware — a good second opinion on top of Windows Defender.',
      ja: 'プロ向けマルウェア対策。Windows Defenderのセカンドオピニオンとして。'
    },
    url: 'https://www.malwarebytes.com/', os: 'cross', category: 'security', price: 'freemium'
  },

  // ========== 浏览器 / Browser ==========
  {
    name: 'Brave',
    desc: {
      zh: '默认拦截广告和追踪的浏览器，基于 Chromium。',
      en: 'Browser that blocks ads and trackers by default — built on Chromium.',
      ja: '広告・トラッカーをデフォルトでブロックするブラウザ。Chromiumベース。'
    },
    url: 'https://brave.com/', os: 'cross', category: 'browser', price: 'oss'
  },
  {
    name: 'Arc',
    desc: {
      zh: '颠覆传统浏览器交互的新派浏览器，标签页、空间组织极有创意。',
      en: 'Disruptive new-school browser — creative reimagining of tabs and spaces.',
      ja: '従来のブラウザ操作を覆す新派のブラウザ。タブと空間の整理が独創的。'
    },
    url: 'https://arc.net/', os: 'cross', category: 'browser', price: 'free'
  },
  {
    name: 'Firefox',
    desc: {
      zh: '坚持隐私优先的非 Chromium 浏览器。',
      en: 'Privacy-first non-Chromium browser.',
      ja: 'プライバシー重視の非Chromiumブラウザ。'
    },
    url: 'https://www.mozilla.org/firefox/', os: 'cross', category: 'browser', price: 'oss'
  },
  {
    name: 'Vivaldi',
    desc: {
      zh: '高度可定制的浏览器，老 Opera 团队出品。',
      en: 'Highly customisable browser from the original Opera team.',
      ja: '高度にカスタマイズ可能なブラウザ。旧Operaチーム製。'
    },
    url: 'https://vivaldi.com/', os: 'cross', category: 'browser', price: 'free'
  }
];
