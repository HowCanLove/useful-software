// 软件数据。新增软件直接在这里追加对象即可。
// os: 'windows' | 'macos' | 'cross'
// category: 'system' | 'disk' | 'productivity' | 'dev' | 'media' | 'network' | 'security' | 'files' | 'browser'
// price: 'free' | 'freemium' | 'paid' | 'oss' (开源)
// desc: { zh, en, ja }  (中文 / English / 日本語)，建议 2–3 句，先说做什么，再说为什么值得装
// media (可选): [{ type, src, caption? }]，type 取值：
//   'image'   —— src 直接是 https 图片地址
//   'video'   —— src 是 mp4/webm 等可直接播放的视频地址
//   'youtube' —— src 是 https://www.youtube.com/embed/<videoId>
//                 也可以用 search-list embed: https://www.youtube.com/embed?listType=search&list=<query>
// 不写 media 字段时弹窗会显示一个引导用户提交补充的占位区

const SOFTWARE = [
  // ========== 系统工具 / System ==========
  {
    name: 'Revo Uninstaller',
    desc: {
      zh: '彻底卸载 Windows 程序，扫描并清理普通卸载留下的注册表残留、配置文件和文件夹。装过的软件多了你会发现系统里能多出几 GB 的垃圾，Revo 能扫出来一并清掉。免费版功能已经够日常使用。',
      en: 'Thoroughly uninstalls Windows programs and scrubs the registry entries, config files and orphan folders that ordinary uninstalls leave behind. After enough installs, your system can collect several gigs of cruft — Revo finds and cleans it. The free tier covers most everyday needs.',
      ja: 'Windowsアプリを徹底アンインストールし、通常のアンインストールでは消えないレジストリ残骸・設定ファイル・残存フォルダもまとめて除去。ソフトを多数入れると数GBのゴミが溜まりますが、Revoならそれをスキャンして一掃できます。無料版で日常用途は十分。'
    },
    url: 'https://www.revouninstaller.com/', os: 'windows', category: 'system', price: 'freemium'
  },
  {
    name: 'AppCleaner',
    desc: {
      zh: 'Mac 上彻底卸载应用的小工具——把 .app 拖进窗口，它会找出散落在 Library 各处的偏好设置、缓存、容器一并清掉。完全免费，没有冗余功能，是 macOS 必装。',
      en: 'A tiny Mac utility that deletes apps cleanly — drop a .app onto its window and it hunts down all the preferences, caches and containers scattered through your Library. Completely free, no bloat, an essential macOS install.',
      ja: 'Macアプリをきれいに削除する小さなツール。.appをドロップすると、Libraryに散らばる設定・キャッシュ・コンテナをまとめて検出して消去。完全無料で余計な機能もなく、macOSの定番ユーティリティ。'
    },
    url: 'https://freemacsoft.net/appcleaner/', os: 'macos', category: 'system', price: 'free'
  },
  {
    name: 'PowerToys',
    desc: {
      zh: '微软官方出品的实用工具集合，一次安装相当于装了十几个小工具：FancyZones 自定义窗口分屏、PowerRename 批量改名、PowerToys Run（Spotlight 风格的启动器）、键盘重映射、颜色取色器等等。开源免费，更新很活跃，Windows 用户必装。',
      en: 'Microsoft\'s official utility suite — a single install gets you a dozen power tools: FancyZones for custom window tiling, PowerRename for batch renames, PowerToys Run (a Spotlight-style launcher), keyboard remapping, a colour picker and more. Open source, actively maintained, mandatory for Windows power users.',
      ja: 'Microsoft公式のユーティリティ集。一度インストールすれば10以上のツールがまとめて入る：FancyZones（カスタムウィンドウ整列）、PowerRename（一括リネーム）、PowerToys Run（Spotlight風ランチャー）、キーバインド変更、カラーピッカーなど。オープンソースで更新も活発、Windowsパワーユーザー必須。'
    },
    url: 'https://learn.microsoft.com/windows/powertoys/', os: 'windows', category: 'system', price: 'oss',
    media: [
      { type: 'youtube', src: 'https://www.youtube.com/embed?listType=search&list=Microsoft+PowerToys+overview', caption: 'YouTube 上的 PowerToys 演示视频' }
    ]
  },
  {
    name: 'Process Explorer',
    desc: {
      zh: 'Sysinternals 出品的"超级任务管理器"，看进程详细的父子关系、句柄、加载的 DLL、网络连接，定位资源占用比 Windows 自带的强太多。排查"哪个程序占用了我的文件"特别好用。完全免费。',
      en: 'A "super Task Manager" from Sysinternals — see full process trees, open handles, loaded DLLs and network connections, pinpoint resource hogs better than the built-in tool ever could. Indispensable for answering "which process is locking this file?". Completely free.',
      ja: 'Sysinternals製の「強化版タスクマネージャー」。プロセスの親子関係、開いたハンドル、読み込まれたDLL、ネット接続まで詳細に確認でき、リソース食いの特定が標準ツールよりはるかに正確。「このファイルを掴んでいるのは誰？」という問題解決に最適。完全無料。'
    },
    url: 'https://learn.microsoft.com/sysinternals/downloads/process-explorer', os: 'windows', category: 'system', price: 'free'
  },
  {
    name: 'Autoruns',
    desc: {
      zh: 'Sysinternals 出品，列出 Windows 所有可能的开机自启项——服务、计划任务、注册表 Run 键、驱动、Shell 扩展、浏览器插件等几十个位置全覆盖。开机变慢或者怀疑被注入流氓启动项时，先开 Autoruns 排查最快。',
      en: 'Sysinternals tool that lists every conceivable autostart entry on Windows — services, scheduled tasks, registry Run keys, drivers, shell extensions, browser plugins, dozens of locations covered. When boot slows down or you suspect a rogue startup item, Autoruns is the fastest way to find it.',
      ja: 'Sysinternals製。Windowsで自動起動しうるあらゆる項目──サービス、タスク、レジストリRunキー、ドライバ、シェル拡張、ブラウザプラグインなど数十箇所──を一覧表示。起動が遅い、不審な自動起動が疑われる時、まず開けば原因特定が最速。'
    },
    url: 'https://learn.microsoft.com/sysinternals/downloads/autoruns', os: 'windows', category: 'system', price: 'free'
  },
  {
    name: 'AutoHotkey',
    desc: {
      zh: '强大到离谱的键盘/鼠标/窗口自动化脚本工具，几行脚本就能定义全局热键、文本扩展、宏、窗口操作。把它当作 Windows 上"想做什么键盘动作都能做"的瑞士军刀，社区有无数现成脚本可以直接用。开源免费。',
      en: 'Ridiculously powerful keyboard/mouse/window automation scripting — a few lines define global hotkeys, text expansions, macros and window manipulation. Think of it as the Swiss Army knife for "anything keyboard-related on Windows", with a huge community library of ready-made scripts. Free and open source.',
      ja: '異常に強力なキーボード・マウス・ウィンドウ自動化スクリプト。数行でグローバルホットキー、テキスト展開、マクロ、ウィンドウ操作が定義可能。Windowsで「キーボードでやりたいことは何でも」できる万能ナイフ的存在で、コミュニティが提供する既製スクリプトも豊富。無料オープンソース。'
    },
    url: 'https://www.autohotkey.com/', os: 'windows', category: 'system', price: 'oss'
  },
  {
    name: 'Karabiner-Elements',
    desc: {
      zh: 'Mac 上最强的键盘重映射工具：CapsLock 改 Esc、改 Hyper 键、复杂修饰组合、按住空格变方向键这种花活都能配。所有重映射在驱动层完成，Vim/IDE 这些关心 modifier 的软件也能正确识别。开源免费。',
      en: 'The most powerful keyboard remapper on Mac — turn CapsLock into Esc or a Hyper key, define complex modifier chords, even "hold space to use vim arrow keys" tricks. Remapping happens at the driver layer so Vim, IDEs and anything else that cares about modifiers see the correct events. Free and open source.',
      ja: 'Mac最強のキーリマッパー。CapsLockをEsc/Hyperキーに、複雑な修飾キー組み合わせ、「Space長押しで矢印キー」のような技まで設定可能。リマップはドライバ層で行われるので、Vim/IDEなどモディファイアを重視するアプリでも正しく認識される。無料オープンソース。'
    },
    url: 'https://karabiner-elements.pqrs.org/', os: 'macos', category: 'system', price: 'oss'
  },
  {
    name: 'Hammerspoon',
    desc: {
      zh: '用 Lua 脚本控制 macOS 的自动化框架，把"按 Cmd+1 切到 Chrome"、"半屏窗口靠右"、"周二早 9 点自动开会议"这种需求都能写成一行代码。学习曲线略陡，但一旦上手就回不去了。开源免费。',
      en: 'A Lua-scripted automation framework for macOS — single-line definitions for things like "Cmd+1 jumps to Chrome", "snap window to right half", "auto-open the meeting on Tuesday 9am". Learning curve is non-trivial but once it clicks, you can\'t go back. Free and open source.',
      ja: 'macOSをLuaで自動化するフレームワーク。「Cmd+1でChromeに切替」「ウィンドウを右半分に」「火曜9時に会議を自動起動」といったことを一行で書ける。学習コストはやや高いが、一度慣れると後戻りできない。無料オープンソース。'
    },
    url: 'https://www.hammerspoon.org/', os: 'macos', category: 'system', price: 'oss'
  },
  {
    name: 'BetterTouchTool',
    desc: {
      zh: 'Mac 上自定义触控板手势、键盘快捷键、Touch Bar 按钮、鼠标动作的全能工具。三指捏合、四指轻点这类系统不开放的手势都能配，加上窗口管理和脚本能力，是很多老 Mac 用户的"灵魂软件"。一次性付费或订阅。',
      en: 'A Mac power tool for customising trackpad gestures, keyboard shortcuts, Touch Bar buttons and mouse actions. Three-finger pinch, four-finger tap and other gestures macOS doesn\'t expose are all yours; combined with window management and scripting it\'s a "soul of the system" tool for many veteran Mac users. One-time purchase or subscription.',
      ja: 'Macのトラックパッドジェスチャー、ショートカット、Touch Barボタン、マウス操作を自由にカスタマイズできる万能ツール。3本指つまみ、4本指タップなどシステムが公開していないジェスチャーも設定可能で、ウィンドウ管理やスクリプト機能と合わせ、ベテランMacユーザーにとって「魂のソフト」的存在。買切またはサブスク。'
    },
    url: 'https://folivora.ai/', os: 'macos', category: 'system', price: 'paid'
  },
  {
    name: 'iStat Menus',
    desc: {
      zh: 'Mac 菜单栏系统监控的标杆产品，CPU、内存、网络速度、磁盘 IO、温度、电池、风扇、电压一应俱全，每项都可以单独配置显示样式。买回来就装着、几乎从不卸载，做开发或跑大任务时尤其有用。',
      en: 'The gold-standard menu-bar system monitor for Mac — CPU, memory, network speeds, disk IO, temperatures, battery, fans, voltages, all individually configurable. Buy it once, leave it installed forever; especially useful when you do development or run heavy tasks.',
      ja: 'Macメニューバーのシステムモニター決定版。CPU、メモリ、ネット速度、ディスクIO、温度、バッテリー、ファン、電圧をすべて個別に表示設定できる。一度買ったら入れっぱなしで、開発や重いタスクの時に特に役立つ。'
    },
    url: 'https://bjango.com/mac/istatmenus/', os: 'macos', category: 'system', price: 'paid'
  },
  {
    name: 'Stats',
    desc: {
      zh: 'iStat Menus 的免费开源替代，菜单栏显示 CPU/GPU/内存/网络/磁盘/电池等信息。功能比 iStat Menus 略少但日常够用，没有付费门槛。GitHub 上更新很积极。',
      en: 'A free open-source iStat Menus alternative that shows CPU/GPU/memory/network/disk/battery in your menu bar. Slightly less polished than iStat but plenty for daily use, with no paywall. Actively maintained on GitHub.',
      ja: 'iStat Menusの無料オープンソース代替。メニューバーにCPU/GPU/メモリ/ネット/ディスク/バッテリー情報を表示。iStat Menusよりやや控えめな機能だが日常用途には十分で、課金不要。GitHubで活発に更新されている。'
    },
    url: 'https://github.com/exelban/stats', os: 'macos', category: 'system', price: 'oss'
  },
  {
    name: 'Rectangle',
    desc: {
      zh: 'Mac 上的窗口分屏神器（已停更的 Spectacle 的精神继承者）：Ctrl+Opt+方向键把窗口对齐到屏幕一半/四分之一/三分之一。开源免费，付费版 Rectangle Pro 多了快照、贴边触发等功能。',
      en: 'The window-snapping must-have on Mac (spiritual successor to the abandoned Spectacle): Ctrl+Opt+arrow tiles windows to halves, quarters, thirds. Free and open source; Rectangle Pro adds snapshots and edge-trigger snapping.',
      ja: 'Macウィンドウスナップの定番（更新停止したSpectacleの後継）。Ctrl+Opt+矢印キーで画面の半分・四分割・三分割に整列。無料オープンソースで、有料版Rectangle Proではスナップショットや端へのドラッグスナップなどが追加。'
    },
    url: 'https://rectangleapp.com/', os: 'macos', category: 'system', price: 'oss'
  },
  {
    name: 'AltTab',
    desc: {
      zh: '把 Windows 风格的 Alt+Tab 切换器移植到 Mac，按窗口而不是按应用切换，预览缩略图比 Cmd+Tab 直观得多。可以配置过滤特定 App、跨桌面切换等。开源免费。',
      en: 'Brings Windows-style Alt+Tab to Mac — switch by window instead of by app, with thumbnail previews much more useful than Cmd+Tab\'s. Filter specific apps, switch across spaces, lots of tweaks. Free and open source.',
      ja: 'Windows風のAlt+TabをMacに移植。アプリ単位ではなくウィンドウ単位で切り替えでき、サムネイルプレビューがCmd+Tabより遥かに直感的。特定アプリの除外、デスクトップ間切り替えなど設定豊富。無料オープンソース。'
    },
    url: 'https://alt-tab-macos.netlify.app/', os: 'macos', category: 'system', price: 'oss'
  },
  {
    name: 'Bartender',
    desc: {
      zh: 'Mac 菜单栏图标整理工具，把不常用的图标隐藏到次级菜单，留出更整洁的顶部空间。MacBook 那块刘海屏空间寸土寸金，装了 5 个以上菜单栏 App 的话很需要它。一次性付费。',
      en: 'A Mac menu-bar tidier that tucks rarely-used icons into a secondary menu, keeping your top bar uncluttered. With the MacBook notch eating space, this gets essential the moment you have five or more menu-bar apps. One-time purchase.',
      ja: 'Macメニューバーの整理ツール。あまり使わないアイコンを二次メニューに収納し、上部をすっきり保つ。MacBookのノッチで領域が圧迫される中、メニューバーアプリが5個以上あるなら必須レベル。買切型。'
    },
    url: 'https://www.macbartender.com/', os: 'macos', category: 'system', price: 'paid'
  },
  {
    name: 'CrystalDiskInfo',
    desc: {
      zh: '查看硬盘 SMART 健康度、温度、通电时间、写入量等关键参数，给老化磁盘提前预警。装了之后定期跑一次，比硬盘突然挂掉再哭好多了。免费开源，支持中文。',
      en: 'Checks SMART health, temperature, power-on hours and total writes to warn you before drives fail. Run it occasionally — way better than crying after a sudden disk death. Free, open source, multilingual.',
      ja: 'ドライブのSMART健康度、温度、通電時間、総書込量などを確認し、寿命前に警告。定期的に実行する習慣をつけておけば、ディスクが突然死んでから泣くよりずっとマシ。無料オープンソース、多言語対応。'
    },
    url: 'https://crystalmark.info/en/software/crystaldiskinfo/', os: 'windows', category: 'system', price: 'oss'
  },
  {
    name: 'HWiNFO',
    desc: {
      zh: '硬件监控的瑞士军刀，把 CPU、GPU、主板、电源、风扇、电压、温度、各种传感器全都暴露出来。超频、装机、排查温度问题时它比 GPU-Z + CPU-Z 加起来还全。免费但不开源。',
      en: 'A Swiss Army knife for hardware monitoring — exposes CPU, GPU, motherboard, PSU, fans, voltages, temperatures and every sensor on the board. For overclocking, building or chasing thermal issues it covers more ground than GPU-Z + CPU-Z combined. Free but not open source.',
      ja: 'ハードウェア監視の万能ナイフ。CPU、GPU、マザーボード、電源、ファン、電圧、温度、ボード上のあらゆるセンサーをすべて表示。オーバークロック・自作・温度問題の追跡では、GPU-Z＋CPU-Zの合計よりもカバー範囲が広い。無料、ただしオープンソースではない。'
    },
    url: 'https://www.hwinfo.com/', os: 'windows', category: 'system', price: 'free'
  },
  {
    name: 'coconutBattery',
    desc: {
      zh: 'Mac 电池健康度专用工具：原厂设计容量、当前最大容量、循环次数、温度全展示。买二手 Mac 时一定要装这个先看电池——能直接看出商家有没有偷换电池。免费版功能就够用。',
      en: 'The dedicated Mac battery health tool — design capacity, current max capacity, cycle count, temperature all visible. When buying a used Mac, install this first; it tells you immediately if the seller swapped the battery. The free tier is sufficient.',
      ja: 'Macバッテリー健康度の専用ツール。設計容量、現在の最大容量、サイクル数、温度を表示。中古Mac購入時に必ず先に入れておきたい一本──電池交換の有無が一発でわかる。無料版で機能的には十分。'
    },
    url: 'https://www.coconut-flavour.com/coconutbattery/', os: 'macos', category: 'system', price: 'freemium'
  },

  // ========== 磁盘与文件 / Disk & Files ==========
  {
    name: 'TreeSize Free',
    desc: {
      zh: '可视化扫描磁盘占用，按文件夹大小递归排序，找出谁吃掉了你的硬盘。免费版扫单个目录够用，付费版支持云盘、定时任务等高级功能。Windows 老牌磁盘分析器，用了 20 多年。',
      en: 'Recursively visualises disk usage with folders sorted by size — find out what\'s eating your drive. Free tier handles single-folder scans; paid versions add cloud, scheduled scans and more. A 20+ year old veteran on Windows.',
      ja: 'ディスク使用量を再帰的にスキャンしフォルダをサイズ順に表示、容量を食う犯人を可視化。無料版は単一ディレクトリスキャンで十分、有料版でクラウド・定期実行などが追加。20年以上の歴史を持つWindowsの定番。'
    },
    url: 'https://www.jam-software.com/treesize_free', os: 'windows', category: 'disk', price: 'freemium'
  },
  {
    name: 'WizTree',
    desc: {
      zh: '比 TreeSize 快至少一个数量级的磁盘分析器，直接读取 NTFS 主文件表，几秒钟就能扫完整盘。如果你磁盘大到 TreeSize 要扫几分钟，换 WizTree 就对了。免费版个人使用足够。',
      en: 'A disk analyser at least an order of magnitude faster than TreeSize — reads the NTFS Master File Table directly to scan a full drive in seconds. If TreeSize takes minutes on your drive, switch to WizTree. Free for personal use.',
      ja: 'TreeSizeより一桁以上速いディスク解析ツール。NTFSのMFTを直接読み、ドライブ全体を数秒でスキャン。TreeSizeで数分かかるサイズなら即WizTreeに乗り換え推奨。個人利用は無料。'
    },
    url: 'https://diskanalyzer.com/', os: 'windows', category: 'disk', price: 'freemium'
  },
  {
    name: 'WinDirStat',
    desc: {
      zh: '经典磁盘可视化工具，方块图（treemap）按文件比例铺满屏幕，一眼就能看出"那块巨大的红色方块"是什么。免费开源，扫描比 WizTree 慢但视觉效果更直观。',
      en: 'A classic disk visualiser whose treemap fills the screen with rectangles sized by file — you can see "that huge red block" instantly. Free and open source; slower than WizTree but the visual is more striking.',
      ja: '定番のディスク可視化ツール。ツリーマップが画面いっぱいにファイル比率の長方形を敷き詰め、「あの大きな赤いブロック」が何かが一目瞭然。無料オープンソースで、スキャンはWizTreeより遅いが視覚効果は秀逸。'
    },
    url: 'https://windirstat.net/', os: 'windows', category: 'disk', price: 'oss'
  },
  {
    name: 'DaisyDisk',
    desc: {
      zh: 'Mac 上颜值最高的磁盘可视化工具，环形图把磁盘空间一层层展开，鼠标悬停就能看具体路径。一次性付费但用过就回不去免费工具——好看到你愿意每个月扫一次磁盘。',
      en: 'Best-looking disk visualiser on Mac — its radial chart unfolds disk space ring by ring, hover to see paths. One-time purchase but you won\'t go back; it\'s pretty enough to make you scan your disk monthly.',
      ja: 'Mac屈指の美しいディスク可視化ツール。円形グラフが空間を層ごとに展開し、ホバーでパス確認。買切型だが、これに慣れたら無料ツールには戻れない──見た目が良すぎて月一でスキャンしたくなる。'
    },
    url: 'https://daisydiskapp.com/', os: 'macos', category: 'disk', price: 'paid'
  },
  {
    name: 'OmniDiskSweeper',
    desc: {
      zh: 'OmniGroup 出品的免费 Mac 磁盘分析工具，列表式展示文件夹大小，操作简单直接。没有 DaisyDisk 那么炫，但完全免费而且非常稳定。',
      en: 'A free Mac disk analyser from OmniGroup with a clean column-list view of folder sizes. Less flashy than DaisyDisk but completely free and rock-solid.',
      ja: 'OmniGroup製のMac向け無料ディスク分析ツール。フォルダサイズをカラムリスト表示、操作はシンプル直球。DaisyDiskほど派手ではないが完全無料で安定。'
    },
    url: 'https://www.omnigroup.com/more', os: 'macos', category: 'disk', price: 'free'
  },
  {
    name: 'Everything',
    desc: {
      zh: 'Windows 上最快的文件搜索工具，毫秒级即时搜索几百万文件，秘诀是直接读 NTFS 文件索引。装了之后 Windows 自带搜索基本可以遗忘。免费、轻量、几乎所有 Windows 用户的必装。',
      en: 'The fastest file search on Windows — millisecond results across millions of files, by reading the NTFS index directly. Once installed you\'ll forget Windows\' built-in search exists. Free, lightweight, near-universal must-install on Windows.',
      ja: 'Windows最速のファイル検索ツール。数百万ファイルでもミリ秒で結果表示、秘訣はNTFSインデックスを直接読むこと。これを入れたらWindows標準の検索は忘れていい。無料・軽量・Windowsユーザーほぼ全員に推奨。'
    },
    url: 'https://www.voidtools.com/', os: 'windows', category: 'files', price: 'free'
  },
  {
    name: 'TeraCopy',
    desc: {
      zh: '替代 Windows 默认文件复制：速度更快、可暂停/恢复、出错时单独跳过这一文件而不是整个中断、复制完自动校验完整性。一次复制几十 GB 资料的时候特别能感受到差距。免费版日常够用。',
      en: 'Replaces the default Windows copy dialog — faster, pause/resume, errors skip a single file instead of aborting the whole job, optional integrity check after copy. The difference is night-and-day when moving tens of GB. Free tier covers daily needs.',
      ja: 'Windows標準のコピーを置換。高速・一時停止/再開可・エラー時は当該ファイルのみスキップで全体中断なし・コピー後の整合性検証も可。数十GB単位の転送で差を実感する。無料版で日常用途は十分。'
    },
    url: 'https://www.codesector.com/teracopy', os: 'windows', category: 'files', price: 'freemium'
  },
  {
    name: 'FreeFileSync',
    desc: {
      zh: '免费开源的文件夹同步和备份工具，支持双向同步、镜像、版本控制、批处理任务。把它配成定时任务，可以替代很多收费的备份软件。跨平台。',
      en: 'Free open-source folder sync and backup — two-way sync, mirroring, versioning, batch jobs. Set up as a scheduled task it can replace plenty of paid backup tools. Cross-platform.',
      ja: '無料オープンソースのフォルダ同期・バックアップツール。双方向同期、ミラー、バージョン管理、バッチジョブ対応。スケジュールタスクに組み込めば多くの有料バックアップソフトを置き換えられる。クロスプラットフォーム。'
    },
    url: 'https://freefilesync.org/', os: 'cross', category: 'files', price: 'oss'
  },
  {
    name: '7-Zip',
    desc: {
      zh: '压缩率最高的免费开源压缩工具，自家 7z 格式比 RAR 还小。支持几乎所有格式（RAR、Zip、Tar、ISO、CAB...）的解压。Windows 上无脑装就对了，连 ChatGPT 都建议先装这个。',
      en: 'The free open-source archiver with the best compression ratio — its own 7z beats RAR. Extracts pretty much every format (RAR, Zip, Tar, ISO, CAB, ...). Just install it on Windows; even AI tools suggest this one first.',
      ja: '圧縮率最強の無料オープンソース圧縮ツール。独自の7z形式はRARより小さい。RAR/Zip/Tar/ISO/CABなどほぼすべての形式の展開に対応。Windowsなら迷わず導入推奨、AIツールも真っ先に薦める一本。'
    },
    url: 'https://www.7-zip.org/', os: 'windows', category: 'files', price: 'oss'
  },
  {
    name: 'Bandizip',
    desc: {
      zh: '颜值在线的压缩工具，速度快、UI 现代、支持密码恢复和高级压缩选项。免费版有内嵌广告，介意广告就用 7-Zip，喜欢顺手的 UI 就用它。Windows 和 Mac 都有版本。',
      en: 'A good-looking archiver — fast, modern UI, password recovery, advanced compression options. Free tier shows occasional ads; if that\'s a dealbreaker stick with 7-Zip, otherwise its UI is the smoothest in the category. Available on Windows and Mac.',
      ja: 'デザインが洗練された圧縮ツール。高速、モダンUI、パスワード復元、高度な圧縮オプション搭載。無料版に控えめな広告あり、気になるなら7-Zipへ、UIの心地よさを取るならこちら。Windows/Mac版あり。'
    },
    url: 'https://www.bandisoft.com/bandizip/', os: 'cross', category: 'files', price: 'freemium'
  },
  {
    name: 'Keka',
    desc: {
      zh: 'Mac 上最受欢迎的优秀压缩工具，支持 7z、Zip、Tar、Gzip、Bzip2、Xz、Lzip、ISO 等格式。从官网直接下载是免费的（开发者乐捐机制），Mac App Store 版本是付费的。',
      en: 'The most-loved Mac archiver — handles 7z, Zip, Tar, Gzip, Bzip2, Xz, Lzip, ISO and more. Free when downloaded from the official site (donation-supported); paid only via the Mac App Store.',
      ja: 'Macで最も人気のある優秀な圧縮ツール。7z/Zip/Tar/Gzip/Bzip2/Xz/Lzip/ISOなど多形式に対応。公式サイトからのダウンロードは無料（寄付制）、Mac App Store版のみ有料。'
    },
    url: 'https://www.keka.io/', os: 'macos', category: 'files', price: 'freemium'
  },
  {
    name: 'The Unarchiver',
    desc: {
      zh: 'Mac 上最受欢迎的免费解压工具，支持 RAR、7z 等几十种格式，比系统自带的解压能力强很多。设置成默认应用就再也不会遇到"无法识别的格式"。',
      en: 'The most popular free Mac unarchiver — handles RAR, 7z and dozens of other formats far beyond the system default. Set it as your default app and you\'ll never hit "unsupported format" again.',
      ja: 'Macで最も人気のある無料解凍ツール。RAR、7zなど数十のフォーマットに対応、標準より遥かに強力。デフォルトアプリにしておけば「対応していない形式」に出会うことはなくなる。'
    },
    url: 'https://theunarchiver.com/', os: 'macos', category: 'files', price: 'free'
  },
  {
    name: 'Files',
    desc: {
      zh: '现代化的 Windows 文件管理器替代，支持多标签、暗色模式、Git 集成、双面板、流体设计。开源、UI 借鉴了 Mac Finder 和 macOS 风格，是 Windows 11 资源管理器最佳的第三方替代。',
      en: 'A modern Windows file manager replacement — tabs, dark mode, Git integration, dual pane, Fluent design. Open source, UI borrows heavily from Finder and macOS, easily the best third-party File Explorer alternative on Windows 11.',
      ja: 'モダンなWindowsファイルマネージャー代替。タブ、ダークモード、Git統合、デュアルペイン、Fluent Design採用。オープンソースでUIはFinder/macOSを参考にしており、Windows 11の標準エクスプローラーの最良の代替。'
    },
    url: 'https://files.community/', os: 'windows', category: 'files', price: 'oss'
  },
  {
    name: 'Listary',
    desc: {
      zh: 'Windows 文件管理器加速器，在资源管理器里输入文件名就能即时跳转，还能呼出全局启动器。比 Everything 多了启动器和动作（打开终端、复制路径等）功能。免费版基本够用。',
      en: 'A Windows file-manager accelerator — start typing in Explorer to jump to a file instantly, and a global launcher comes built-in. Adds launcher + actions (open terminal, copy path, ...) on top of what Everything offers. Free tier is plenty for most.',
      ja: 'Windowsファイル管理を加速。エクスプローラーで入力するだけで即ファイルへジャンプ、グローバルランチャーも内蔵。Everythingに加えてランチャー＋アクション（ターミナル起動、パスコピーなど）を提供。無料版で大体足りる。'
    },
    url: 'https://www.listary.com/', os: 'windows', category: 'files', price: 'freemium'
  },
  {
    name: 'Snipaste',
    desc: {
      zh: '截图 + 贴图工具，截完图可以钉在屏幕上当浮动参考——边写代码边对照设计稿、抄手机里的验证码这种场景特别好用。Windows 免费、Mac 收费但都很便宜。',
      en: 'Screenshot + pin tool — pin captures to your screen as floating references, perfect for "code while comparing to a design mock" or "type a code from your phone". Free on Windows, modestly priced on Mac.',
      ja: 'スクリーンショット＋ピン留めツール。キャプチャを画面に貼り付けて参照可能──「デザインカンプを見ながらコード」「スマホの認証コードを写す」場面で特に便利。Windowsは無料、Macは安価な有料。'
    },
    url: 'https://www.snipaste.com/', os: 'cross', category: 'files', price: 'freemium'
  },
  {
    name: 'ShareX',
    desc: {
      zh: '功能极其全面的截图、录屏、上传工具：滚动截图、OCR、GIF 录制、自动上传到图床、热键自定义、工作流编排，全都免费开源。功能多到值得花半小时探索。',
      en: 'Insanely feature-rich capture, screen-record and upload tool — scrolling capture, OCR, GIF recording, auto-upload to image hosts, hotkey customisation, workflow orchestration. All free and open source, with enough depth to deserve a 30-minute exploration.',
      ja: '機能満載のスクショ・録画・アップロードツール。スクロールキャプチャ、OCR、GIF録画、画像ホスト自動アップロード、ホットキーカスタマイズ、ワークフロー編成、すべて無料オープンソース。機能が多すぎるので30分かけて探索する価値あり。'
    },
    url: 'https://getsharex.com/', os: 'windows', category: 'files', price: 'oss'
  },
  {
    name: 'CleanShot X',
    desc: {
      zh: 'Mac 上颜值和功能都顶级的截图录屏工具：自动隐藏桌面图标、滚动截图、视频转 GIF、注释、云存储、内置 OCR。Setapp 套餐自带，单独买也值。',
      en: 'Top-tier screenshot and screen-recording on Mac — auto-hide desktop icons, scrolling capture, video-to-GIF, annotations, cloud storage, built-in OCR. Included in Setapp; worth buying standalone too.',
      ja: 'Macスクショ・録画ツールの頂点。デスクトップアイコン自動非表示、スクロールキャプチャ、動画→GIF、注釈、クラウド保存、OCR内蔵。Setapp付属、単体購入も納得の価値。'
    },
    url: 'https://cleanshot.com/', os: 'macos', category: 'files', price: 'paid'
  },

  // ========== 效率 / Productivity ==========
  {
    name: 'Ditto',
    desc: {
      zh: 'Windows 剪贴板历史管理器，记录每一次复制的文本、图片，按 Ctrl+` 调出历史粘贴。开源免费、轻量、稳定，是"装了就再也不想关掉"的那种小工具。',
      en: 'Windows clipboard history manager — keeps every text/image you\'ve copied, hit Ctrl+\` to paste from history. Free, open source, lightweight, stable — the kind of utility you install and never disable.',
      ja: 'Windowsのクリップボード履歴マネージャー。コピーしたテキスト/画像をすべて記録、Ctrl+`で履歴から貼り付け。無料オープンソース・軽量・安定で、「入れたら絶対切らない」系の小道具。'
    },
    url: 'https://ditto-cp.sourceforge.io/', os: 'windows', category: 'productivity', price: 'oss'
  },
  {
    name: 'Maccy',
    desc: {
      zh: 'Mac 上简洁的剪贴板历史工具，开源免费、菜单栏图标加快捷键即可调出历史。设计哲学就是"做好一件事"，不像有些工具试图变成全能助手。',
      en: 'A minimal clipboard history tool for Mac — open source, free, menu-bar icon and a hotkey to recall history. Designed to do one thing well, unlike some tools trying to become all-in-one assistants.',
      ja: 'Mac向けのシンプルなクリップボード履歴ツール。オープンソース無料、メニューバーアイコンとホットキーで履歴呼び出し。「一つのことをきちんと」という設計思想で、他ツールのような全能化を狙わない。'
    },
    url: 'https://maccy.app/', os: 'macos', category: 'productivity', price: 'oss'
  },
  {
    name: 'Raycast',
    desc: {
      zh: 'Mac 上最强的启动器，可以装计算器、翻译、窗口管理、GitHub/Linear/Jira 操作、AI 助手等大量插件，一个快捷键搞定大部分常用动作。Windows 版已发布，免费版功能就很强。',
      en: 'The most powerful launcher on Mac — install extensions for calculator, translation, window management, GitHub/Linear/Jira operations, AI helpers and tons more, one hotkey to do everything. A Windows version has shipped, and the free tier is already very capable.',
      ja: 'Mac最強のランチャー。電卓、翻訳、ウィンドウ管理、GitHub/Linear/Jira操作、AIアシスタントなど豊富な拡張機能を導入でき、ホットキー一発で大半の作業が完結。Windows版もリリース済、無料版でも十分強力。'
    },
    url: 'https://www.raycast.com/', os: 'cross', category: 'productivity', price: 'freemium',
    media: [
      { type: 'youtube', src: 'https://www.youtube.com/embed?listType=search&list=Raycast+launcher+demo', caption: 'YouTube 上的 Raycast 使用演示' }
    ]
  },
  {
    name: 'Alfred',
    desc: {
      zh: 'Mac 老牌启动器，工作流（Workflow）系统极其强大，可以用 AppleScript/Python/Shell 脚本扩展。基础功能免费，进阶功能在 Powerpack 里（一次性付费）。Raycast 出来之前的事实标准。',
      en: 'The veteran Mac launcher — its Workflow system is incredibly powerful, extensible via AppleScript/Python/shell scripts. Basic features free; advanced features in Powerpack (one-time fee). The de-facto standard before Raycast.',
      ja: 'Macの老舗ランチャー。Workflowシステムが極めて強力で、AppleScript/Python/シェルスクリプトで拡張可能。基本機能は無料、上級機能はPowerpack（買切型）で。Raycast登場前の事実上標準。'
    },
    url: 'https://www.alfredapp.com/', os: 'macos', category: 'productivity', price: 'freemium'
  },
  {
    name: 'Flow Launcher',
    desc: {
      zh: 'Windows 上的开源启动器，类似 Alfred/Raycast 的架构，支持插件扩展（npm 那种丰富的生态正在搭建中）。免费开源，是 Wox 的现代化继承者。',
      en: 'Open-source launcher for Windows in the spirit of Alfred/Raycast, with plugin extensibility (the ecosystem is still maturing). Free, open source, the modern successor to Wox.',
      ja: 'Windows向けのオープンソースランチャー。Alfred/Raycast風のアーキテクチャでプラグイン拡張対応（エコシステムは発展途上）。無料オープンソースで、Woxのモダンな後継。'
    },
    url: 'https://www.flowlauncher.com/', os: 'windows', category: 'productivity', price: 'oss'
  },
  {
    name: 'Wox',
    desc: {
      zh: 'Windows 经典开源启动器，PowerToys Run 和 Flow Launcher 都受它启发。如今官方更新放缓，建议直接用 Flow Launcher 或 PowerToys Run。',
      en: 'A classic open-source Windows launcher that inspired PowerToys Run and Flow Launcher. Official updates have slowed; new users are better off with Flow Launcher or PowerToys Run today.',
      ja: 'Windowsの定番オープンソースランチャー。PowerToys RunやFlow Launcherはこれにインスパイアされた。公式更新は鈍化しており、新規利用ならFlow LauncherまたはPowerToys Run推奨。'
    },
    url: 'http://www.wox.one/', os: 'windows', category: 'productivity', price: 'oss'
  },
  {
    name: 'Obsidian',
    desc: {
      zh: '基于 Markdown 的笔记工具，文件全部是本地纯文本，支持双向链接构建知识图谱。第三方插件生态极其活跃，几千款插件能把它扩展成 GTD 工具、日记、看板、白板等。个人使用免费，仅同步和发布服务收费。',
      en: 'A Markdown-based notes app where every file is local plaintext, with backlinks to grow a knowledge graph. The third-party plugin ecosystem is wildly active — thousands of plugins extend it into a GTD tool, journal, kanban, whiteboard, you name it. Free for personal use; only Sync and Publish are paid.',
      ja: 'Markdownベースのノートアプリ。ファイルはすべてローカルのプレーンテキスト、バックリンクで知識グラフを構築。サードパーティプラグインのエコシステムが非常に活発で、数千のプラグインによりGTDツール・日記・カンバン・ホワイトボードなどに拡張可能。個人利用は無料、Sync/Publishのみ有料。'
    },
    url: 'https://obsidian.md/', os: 'cross', category: 'productivity', price: 'freemium',
    media: [
      { type: 'youtube', src: 'https://www.youtube.com/embed?listType=search&list=Obsidian+notes+tutorial', caption: 'YouTube 上的 Obsidian 入门教程' }
    ]
  },
  {
    name: 'Logseq',
    desc: {
      zh: '开源的大纲式笔记工具，类似 Roam Research 但本地优先、隐私友好。每一天自动生成日记页，所有想法以块（block）为单位，可以反向链接、嵌入、查询。爱大纲笔记的人最爱。',
      en: 'Open-source outliner notes app like Roam Research, but local-first and privacy-friendly. Auto-generates a daily journal page; every thought is a block that can be backlinked, embedded and queried. The favourite for outliner-style note-takers.',
      ja: 'オープンソースのアウトライナーノート。Roam Research風だがローカルファースト、プライバシー重視。毎日自動でデイリーノートを生成、すべての発想がブロック単位でバックリンク・埋込・クエリ可能。アウトライン派ノート愛好家の決定版。'
    },
    url: 'https://logseq.com/', os: 'cross', category: 'productivity', price: 'oss'
  },
  {
    name: 'Notion',
    desc: {
      zh: '集笔记、数据库、看板、wiki 于一体的全能工作空间，团队协作做项目管理特别好用。免费版个人足够，团队版按人头收费。缺点是离线能力弱、加载慢、数据被锁在云端。',
      en: 'All-in-one workspace combining notes, databases, kanban and wiki — particularly good for team project management. Free tier covers personal use; team plans charge per seat. Drawbacks: weak offline mode, slow loads, data locked in the cloud.',
      ja: 'ノート・データベース・カンバン・wikiを統合したオールインワン作業空間。特にチームのプロジェクト管理に強い。無料版は個人で十分、チーム版は人数課金。弱点はオフライン非力、読み込み遅い、データがクラウドに閉じ込められる点。'
    },
    url: 'https://www.notion.so/', os: 'cross', category: 'productivity', price: 'freemium'
  },
  {
    name: 'Joplin',
    desc: {
      zh: '开源的笔记工具，支持端到端加密、自托管同步、Markdown 编辑、Web Clipper。和 Notion 比偏极客一点，最大优势是数据完全自己掌控。跨平台、有移动端。',
      en: 'Open-source notes app — end-to-end encryption, self-hosted sync, Markdown editing, Web Clipper. Geekier than Notion, but you fully own your data. Cross-platform with mobile clients.',
      ja: 'オープンソースのノートアプリ。エンドツーエンド暗号化、セルフホスト同期、Markdown編集、Web Clipper対応。Notionよりギーク寄りだが、最大の強みはデータを完全に自分で管理できる点。クロスプラットフォーム、モバイルアプリあり。'
    },
    url: 'https://joplinapp.org/', os: 'cross', category: 'productivity', price: 'oss'
  },
  {
    name: 'Anki',
    desc: {
      zh: '基于间隔重复算法的记忆卡片应用，背单词、备考医师/律师执业、巩固语言学习的神器。开源、跨平台，桌面和 Android 免费，iOS 版收费但收益归项目维护。卡片牌可以共享。',
      en: 'Spaced-repetition flashcards — the gold standard for memorising vocabulary, medical/law boards, language learning. Open source, cross-platform; desktop and Android free, iOS paid (revenue funds the project). Decks are shareable.',
      ja: '間隔反復アルゴリズムの暗記カード。単語学習、医師・司法試験対策、語学定着の決定版。オープンソース、クロスプラットフォーム、デスクトップ/Androidは無料、iOSは有料（収益はプロジェクト維持に充当）。デッキ共有可能。'
    },
    url: 'https://apps.ankiweb.net/', os: 'cross', category: 'productivity', price: 'oss'
  },
  {
    name: 'Zotero',
    desc: {
      zh: '免费开源的文献管理工具，自动抓取论文/网页元数据、生成各种格式的引用、Word/LibreOffice 插件直接插入参考文献，研究生和学者必备。300MB 免费云空间，超出可付费扩容。',
      en: 'Free open-source reference manager — auto-grabs paper/web metadata, generates citations in any format, integrates with Word/LibreOffice for inline references. Essential for grad students and researchers. 300MB free cloud storage, paid plans expand it.',
      ja: '無料オープンソースの文献管理ツール。論文・ウェブのメタデータを自動取得、各種引用フォーマットに対応、Word/LibreOfficeへの参考文献挿入もシームレス。大学院生・研究者必携。クラウドは300MB無料、有料プランで拡張可。'
    },
    url: 'https://www.zotero.org/', os: 'cross', category: 'productivity', price: 'oss'
  },

  // ========== 开发 / Dev ==========
  {
    name: 'Visual Studio Code',
    desc: {
      zh: '现代代码编辑器之王，免费跨平台、插件生态最大、性能持续优化、Git 和调试集成度高。微软出品但 MIT 协议开源，目前几乎所有语言都有官方或社区维护的优秀扩展。',
      en: 'The reigning king of modern code editors — free, cross-platform, the largest extension ecosystem, continuously optimised, deep Git and debugger integration. Microsoft-built but MIT-licensed open source, with first-class extensions for nearly every language.',
      ja: 'モダンなコードエディタの王者。無料・クロスプラットフォーム・拡張エコシステム最大規模・継続的なパフォーマンス改善・Git/デバッガ統合が深い。Microsoft製だがMITライセンスでオープンソース、ほぼすべての言語に公式または高品質な拡張がある。'
    },
    url: 'https://code.visualstudio.com/', os: 'cross', category: 'dev', price: 'oss',
    media: [
      { type: 'youtube', src: 'https://www.youtube.com/embed?listType=search&list=Visual+Studio+Code+tips+tricks', caption: 'YouTube 上的 VS Code 实用技巧合集' }
    ]
  },
  {
    name: 'Cursor',
    desc: {
      zh: '基于 VS Code fork 的 AI 编辑器，深度集成 LLM 写代码：多文件编辑、agent 模式、代码库感知的对话、Tab 补全。免费版有限额，重度用户建议订阅。VS Code 配置和扩展可一键迁移。',
      en: 'A VS Code fork built around AI — deep LLM integration for multi-file edits, agent mode, codebase-aware chat, Tab completion. Free tier has limits; heavy users will want a subscription. VS Code settings and extensions migrate over with one click.',
      ja: 'VS CodeをフォークしたAIエディタ。LLMを深く統合し、複数ファイル編集・エージェントモード・コードベース認識チャット・Tab補完を提供。無料版は制限あり、ヘビーユーザーはサブスク推奨。VS Codeの設定・拡張機能をワンクリックで移行可能。'
    },
    url: 'https://cursor.com/', os: 'cross', category: 'dev', price: 'freemium'
  },
  {
    name: 'Windows Terminal',
    desc: {
      zh: '微软官方现代化终端，多标签、GPU 加速渲染、多种 shell 共存（PowerShell、cmd、WSL、Git Bash），支持透明背景和自定义配色。Windows 11 已内置，老版本可去 Microsoft Store 装。开源免费。',
      en: 'Microsoft\'s modern terminal — tabs, GPU-accelerated rendering, multiple shells living together (PowerShell, cmd, WSL, Git Bash), transparency and custom themes. Built into Windows 11; older versions can grab it from the Microsoft Store. Free and open source.',
      ja: 'Microsoft公式のモダンターミナル。タブ、GPUアクセラレーション、複数シェル共存（PowerShell/cmd/WSL/Git Bash）、透過背景とカスタム配色対応。Windows 11標準搭載、旧バージョンはMicrosoft Storeから入手可。無料オープンソース。'
    },
    url: 'https://github.com/microsoft/terminal', os: 'windows', category: 'dev', price: 'oss'
  },
  {
    name: 'iTerm2',
    desc: {
      zh: 'Mac 上替代默认 Terminal 的事实标准，分屏、热键窗口、快速输入历史、自动配色、剪切板集成等十几年功能积累。免费开源，是 macOS 重度终端用户必装。',
      en: 'The de-facto Terminal replacement on Mac — split panes, hotkey windows, fast input history, auto colour, clipboard integration, a decade-plus of features. Free, open source, mandatory for any heavy macOS shell user.',
      ja: 'Mac標準ターミナルの事実上の代替。分割画面、ホットキーウィンドウ、高速入力履歴、自動配色、クリップボード統合など10年以上の機能蓄積。無料オープンソース、macOSのヘビー端末ユーザー必携。'
    },
    url: 'https://iterm2.com/', os: 'macos', category: 'dev', price: 'oss'
  },
  {
    name: 'Warp',
    desc: {
      zh: '现代化的 AI 终端，把命令行做成"块"（block）方式，自带 AI 助手能用自然语言生成命令、解读输出。Mac 上体验最好，Linux 版有，Windows 版预览中。免费版个人用足够。',
      en: 'A modern AI terminal that organises the command line into "blocks", with a built-in AI assistant that translates natural language into commands and explains output. Best on Mac; Linux available, Windows in preview. Free tier covers personal use.',
      ja: 'モダンなAIターミナル。コマンドラインを「ブロック」単位で扱い、AIアシスタント内蔵で自然言語からコマンド生成・出力解説が可能。Macが最も完成度高、Linux版あり、Windows版はプレビュー中。無料版で個人利用は十分。'
    },
    url: 'https://www.warp.dev/', os: 'cross', category: 'dev', price: 'freemium'
  },
  {
    name: 'Git',
    desc: {
      zh: '版本控制系统的事实标准，GitHub/GitLab/Bitbucket 都基于它。Windows 上装 Git for Windows 顺带得到 Git Bash（一个迷你 Unix 环境，非常实用）。开源免费，必装。',
      en: 'The de-facto version-control standard — GitHub/GitLab/Bitbucket all build on it. The Windows installer also gives you Git Bash (a handy mini Unix environment). Free, open source, mandatory.',
      ja: 'バージョン管理の事実上標準。GitHub/GitLab/Bitbucketはすべてこれが基盤。Windowsインストーラには便利なミニUnix環境Git Bashが付属。無料オープンソース、必須。'
    },
    url: 'https://git-scm.com/', os: 'cross', category: 'dev', price: 'oss'
  },
  {
    name: 'GitHub Desktop',
    desc: {
      zh: 'GitHub 官方 Git GUI 客户端，新手友好：可视化 commit/push/pull、分支切换、解决冲突、一键发 PR。重度用户可能觉得太基础，但作为入门工具相当合格。开源免费。',
      en: 'GitHub\'s official Git GUI client, beginner-friendly — visual commit/push/pull, branch switching, conflict resolution, one-click PR creation. Power users may find it too basic, but as an onboarding tool it\'s solid. Free and open source.',
      ja: 'GitHub公式のGit GUIクライアント、初心者にやさしい設計。コミット/プッシュ/プル/ブランチ切替/コンフリクト解決/PR作成をGUIで。ヘビーユーザーには物足りないが、入門ツールとして優秀。無料オープンソース。'
    },
    url: 'https://desktop.github.com/', os: 'cross', category: 'dev', price: 'oss'
  },
  {
    name: 'Sourcetree',
    desc: {
      zh: 'Atlassian 出品的免费 Git GUI 客户端，可视化分支图、stash、cherry-pick、interactive rebase 都很顺手。配 GitFlow 工作流特别好用。免费但需要登录 Atlassian 账号。',
      en: 'Free Git GUI client from Atlassian — clean branch graph visualisation, stash, cherry-pick, interactive rebase. Pairs especially well with GitFlow. Free, but you need an Atlassian account.',
      ja: 'Atlassian製の無料Git GUIクライアント。ブランチグラフの可視化、stash、cherry-pick、インタラクティブrebaseなどが快適。GitFlowワークフローと特に相性良し。無料だがAtlassianアカウント登録が必要。'
    },
    url: 'https://www.sourcetreeapp.com/', os: 'cross', category: 'dev', price: 'free'
  },
  {
    name: 'Docker Desktop',
    desc: {
      zh: '本地跑容器、做开发环境隔离的标配，Windows 通过 WSL2 后端、Mac 通过自家 VM。个人和小公司免费，250 人以上的企业需付费。装一份等于解锁了几百种常用服务（数据库、消息队列、Web 服务器）秒级部署。',
      en: 'The standard for running containers locally and isolating dev environments — Windows uses WSL2, Mac uses its own VM. Free for personal use and small businesses; large enterprises (250+) need a paid plan. One install unlocks instant deploy of hundreds of common services (databases, queues, web servers).',
      ja: 'ローカルでコンテナを動かし開発環境を分離する定番。WindowsはWSL2バックエンド、Macは独自VM。個人・小規模企業は無料、250人超の企業は有料。導入すれば数百種の一般的サービス（DB/キュー/Webサーバ）を瞬時に立ち上げ可能。'
    },
    url: 'https://www.docker.com/products/docker-desktop/', os: 'cross', category: 'dev', price: 'freemium'
  },
  {
    name: 'Postman',
    desc: {
      zh: 'API 调试和测试工具的行业标准，请求集合（Collection）、环境变量、自动化测试脚本、Mock Server、文档生成、团队协作一应俱全。免费版个人开发足够，团队功能和云同步收费。',
      en: 'The industry standard for API debugging and testing — collections, environment variables, automated test scripts, mock servers, doc generation, team collaboration. Free tier enough for solo developers; team features and cloud sync are paid.',
      ja: 'APIデバッグ・テストの業界標準。リクエストコレクション、環境変数、自動テストスクリプト、Mockサーバ、ドキュメント生成、チーム協業を網羅。無料版で個人開発は十分、チーム機能・クラウド同期は有料。'
    },
    url: 'https://www.postman.com/', os: 'cross', category: 'dev', price: 'freemium'
  },
  {
    name: 'Insomnia',
    desc: {
      zh: 'Postman 的开源替代，更轻、UI 更现代、启动更快。支持 GraphQL、gRPC、WebSocket，免费版本地使用功能完整，云同步可付费或自托管。',
      en: 'Open-source Postman alternative — lighter, more modern UI, faster to start. Supports GraphQL, gRPC and WebSocket; the free tier is fully featured locally, with paid or self-hosted cloud sync.',
      ja: 'Postmanのオープンソース代替。軽量・モダンUI・起動も速い。GraphQL、gRPC、WebSocket対応、無料版でローカル機能は完全、クラウド同期は有料またはセルフホスト。'
    },
    url: 'https://insomnia.rest/', os: 'cross', category: 'dev', price: 'oss'
  },
  {
    name: 'Hoppscotch',
    desc: {
      zh: '轻量级 Web 版 API 客户端，浏览器里就能用，开源免费、可以自托管。功能比 Postman 简单但够日常 REST/GraphQL/WebSocket 测试，启动快、不占内存。',
      en: 'Lightweight web-based API client — runs in your browser, open source, free, self-hostable. Simpler than Postman but covers everyday REST/GraphQL/WebSocket testing, with fast startup and tiny memory footprint.',
      ja: '軽量なWebベースAPIクライアント。ブラウザで動作、オープンソース無料、セルフホスト可能。Postmanより簡素だが日常のREST/GraphQL/WebSocketテストには十分、高速起動でメモリ消費も少ない。'
    },
    url: 'https://hoppscotch.io/', os: 'cross', category: 'dev', price: 'oss'
  },
  {
    name: 'DBeaver',
    desc: {
      zh: '通用数据库 GUI 客户端，MySQL/PostgreSQL/Oracle/SQL Server/SQLite/MongoDB/Redis 等 80+ 种数据库一个工具搞定。社区版（CE）开源免费，企业版加 NoSQL 高级功能。Java 写的吃内存但功能极全。',
      en: 'Universal database GUI client — MySQL/PostgreSQL/Oracle/SQL Server/SQLite/MongoDB/Redis and 80+ databases in one tool. Community Edition is free and open source; Enterprise adds advanced NoSQL features. Java-based, memory-hungry, but enormously capable.',
      ja: '汎用データベースGUIクライアント。MySQL/PostgreSQL/Oracle/SQL Server/SQLite/MongoDB/Redisなど80以上のDBに1ツールで対応。コミュニティ版は無料オープンソース、エンタープライズ版で高度なNoSQL機能追加。Java製でメモリは食うが機能は圧倒的。'
    },
    url: 'https://dbeaver.io/', os: 'cross', category: 'dev', price: 'oss'
  },
  {
    name: 'TablePlus',
    desc: {
      zh: '颜值高、原生体验好的多数据库 GUI，比 DBeaver 轻盈很多。同时连 MySQL/PostgreSQL/Redis/MongoDB 等，可视化设计 ER 图、SSH 隧道、版本管理。免费版有连接数和窗口数限制。',
      en: 'A good-looking native multi-database GUI, much lighter than DBeaver. Connect to MySQL/PostgreSQL/Redis/MongoDB at once, visualise ER diagrams, SSH tunnel, history. Free tier limits connection count and window count.',
      ja: '美しく軽快なマルチDB GUI、DBeaverより遥かに軽量。MySQL/PostgreSQL/Redis/MongoDBに同時接続、ER図可視化、SSHトンネル、履歴管理対応。無料版は接続数・ウィンドウ数制限あり。'
    },
    url: 'https://tableplus.com/', os: 'cross', category: 'dev', price: 'freemium'
  },
  {
    name: 'Sublime Merge',
    desc: {
      zh: 'Sublime Text 团队出的极速 Git 客户端，搜索、diff、blame、log 全部毫秒级响应，原生应用比 Electron 客户端快太多。无限期试用，建议直接付费。',
      en: 'A blazingly fast Git client from the Sublime Text team — search, diff, blame, log all respond in milliseconds; a native app obliterates Electron clients on speed. Indefinite evaluation; just buy it.',
      ja: 'Sublime Textチーム制作の超高速Gitクライアント。検索/diff/blame/ログがすべてミリ秒応答、ネイティブアプリでElectron系を圧倒。無期限評価可能だが、いっそ購入推奨。'
    },
    url: 'https://www.sublimemerge.com/', os: 'cross', category: 'dev', price: 'paid'
  },
  {
    name: 'WinSCP',
    desc: {
      zh: 'Windows 经典 SFTP/FTP/SCP/WebDAV 客户端，左右双面板（本地 vs 远端）拖放上传下载。集成 PuTTY 可一键打开 SSH。开源免费，是 Windows 上做服务器维护必装。',
      en: 'Classic Windows SFTP/FTP/SCP/WebDAV client — twin-pane (local vs remote) drag-and-drop transfers. Integrates with PuTTY for one-click SSH. Free, open source, mandatory for server admin work on Windows.',
      ja: 'Windowsの定番SFTP/FTP/SCP/WebDAVクライアント。左右ペイン（ローカルvsリモート）でドラッグ＆ドロップ転送。PuTTY統合でワンクリックSSH。無料オープンソース、Windowsでのサーバ管理に必携。'
    },
    url: 'https://winscp.net/', os: 'windows', category: 'dev', price: 'oss'
  },
  {
    name: 'Cyberduck',
    desc: {
      zh: '跨平台的 FTP/SFTP/WebDAV/S3/Azure/Google Cloud Storage 客户端，UI 直观、支持加密、与 Mountain Duck（同公司付费产品）配合可把云盘挂载成本地盘。开源免费，捐款支持。',
      en: 'Cross-platform FTP/SFTP/WebDAV/S3/Azure/Google Cloud Storage client — intuitive UI, encryption support, pairs with Mountain Duck (same company\'s paid product) to mount cloud as local drives. Free, open source, donation-supported.',
      ja: 'クロスプラットフォームのFTP/SFTP/WebDAV/S3/Azure/Google Cloud Storageクライアント。直感的UI、暗号化対応、同社の有料製品Mountain Duckと組み合わせるとクラウドをローカルドライブとしてマウント可能。無料オープンソース、寄付支援型。'
    },
    url: 'https://cyberduck.io/', os: 'cross', category: 'dev', price: 'oss'
  },
  {
    name: 'Transmit',
    desc: {
      zh: 'Mac 上颜值最高的 FTP/SFTP/S3/Backblaze 等云存储客户端，Panic 出品（Coda 编辑器开发商），细节做得极佳。一次性付费但极其稳定，是高级 Mac 用户的首选。',
      en: 'Best-looking FTP/SFTP/S3/Backblaze cloud client on Mac, by Panic (makers of Coda) — the polish is exceptional. One-time purchase, extremely stable, the top pick for power-user Mac admins.',
      ja: 'Mac屈指の美しいFTP/SFTP/S3/Backblazeクラウドクライアント。Coda制作のPanic製で細部の作り込みが秀逸。買切型ながら極めて安定、ハイエンドMacユーザーの第一選択。'
    },
    url: 'https://panic.com/transmit/', os: 'macos', category: 'dev', price: 'paid'
  },
  {
    name: 'Mockoon',
    desc: {
      zh: '本地 API mock 工具，几秒搭起一个假的接口服务，前端在等后端开发时特别有用。支持代理、文件响应、动态模板，开源免费、跨平台。',
      en: 'Local API mock tool — spin up fake endpoints in seconds, hugely useful for front-ends waiting on the back-end. Supports proxying, file responses, dynamic templates. Free, open source, cross-platform.',
      ja: 'ローカルAPIモックツール。数秒でダミーエンドポイント構築、バックエンド待ちのフロントエンド開発で特に便利。プロキシ、ファイルレスポンス、動的テンプレート対応。無料オープンソース、クロスプラットフォーム。'
    },
    url: 'https://mockoon.com/', os: 'cross', category: 'dev', price: 'oss'
  },
  {
    name: 'Homebrew',
    desc: {
      zh: 'Mac/Linux 上的事实标准包管理器，`brew install foo` 一句搞定从命令行工具到 GUI 应用（cask）的所有安装、升级、卸载。Mac 用户必装，几乎所有教程都假设你有它。',
      en: 'The de-facto package manager for Mac/Linux — `brew install foo` is one line for every CLI tool and GUI app (via cask), with managed upgrades and uninstalls. Mandatory for Mac users; nearly every tutorial assumes you have it.',
      ja: 'Mac/Linuxの事実上標準のパッケージマネージャー。`brew install foo`の一行でCLIツールからGUIアプリ（cask経由）までインストール・更新・削除をすべて管理。Macユーザー必携、ほぼすべてのチュートリアルが導入済を前提としている。'
    },
    url: 'https://brew.sh/', os: 'cross', category: 'dev', price: 'oss'
  },
  {
    name: 'Scoop',
    desc: {
      zh: 'Windows 上的命令行包管理器，所有软件绿色安装到用户目录，不污染系统、不需要管理员权限。和 Chocolatey 比更适合开发者用：装 git、jq、ripgrep 等命令行工具特别顺手。开源免费。',
      en: 'A command-line package manager for Windows — installs everything portably to your user dir, no system pollution, no admin needed. Compared to Chocolatey it\'s the developer\'s choice for installing git, jq, ripgrep and other CLI tools. Free and open source.',
      ja: 'Windowsのコマンドラインパッケージマネージャー。すべてユーザディレクトリにポータブルインストール、システムを汚さず管理者権限不要。Chocolateyと比べて開発者向け、git/jq/ripgrepなどCLIツールの導入で特に快適。無料オープンソース。'
    },
    url: 'https://scoop.sh/', os: 'windows', category: 'dev', price: 'oss'
  },
  {
    name: 'Chocolatey',
    desc: {
      zh: 'Windows 老牌包管理器，软件库非常丰富、包括很多 GUI 应用（Chrome、VS Code、Steam 之类）。和 winget 比是社区维护、装哪个版本更可控。免费版日常够用，企业有付费版。',
      en: 'Veteran Windows package manager with a vast catalogue including many GUI apps (Chrome, VS Code, Steam, ...). Compared to winget it\'s community-maintained with finer-grained version control. Free tier is fine for individuals; enterprise tier exists.',
      ja: 'Windowsの老舗パッケージマネージャー。ソフトウェアカタログが豊富で、Chrome/VS Code/SteamなどGUIアプリも多数。wingetと比べてコミュニティメンテナンスでバージョン指定が細かい。無料版で個人利用は十分、エンタープライズ版あり。'
    },
    url: 'https://chocolatey.org/', os: 'windows', category: 'dev', price: 'freemium'
  },
  {
    name: 'winget',
    desc: {
      zh: '微软官方包管理器，Windows 11 自带、Windows 10 通过 Microsoft Store 自动更新。命令行装软件、自动从应用商店或官网拉源。是 Chocolatey 的官方对手，软件库正在快速扩充中。',
      en: 'Microsoft\'s official package manager — built into Windows 11 and auto-updated on Windows 10 via the Microsoft Store. CLI installs that pull from the Store or vendors. Official answer to Chocolatey; the catalogue is growing fast.',
      ja: 'Microsoft公式のパッケージマネージャー。Windows 11標準搭載、Windows 10ではMicrosoft Store経由で自動更新。CLIインストールでStoreまたはベンダーから取得。Chocolateyへの公式アンサーで、カタログは急速に拡充中。'
    },
    url: 'https://learn.microsoft.com/windows/package-manager/', os: 'windows', category: 'dev', price: 'oss'
  },

  // ========== 多媒体 / Media ==========
  {
    name: 'VLC',
    desc: {
      zh: '万能媒体播放器，几乎支持所有视频/音频格式开箱即用，没有什么文件能让它打不开。开源免费、跨平台、广告也没有。十几年来都是"播放疑难杂症"的最后答案。',
      en: 'The universal media player — handles practically every video/audio format out of the box; almost nothing defeats it. Free, open source, cross-platform, no ads. For 15+ years it\'s been the final answer for problem files.',
      ja: '万能メディアプレーヤー。ほぼすべての動画・音声形式に箱出しで対応、再生できないファイルはほぼ存在しない。無料オープンソース、クロスプラットフォーム、広告なし。15年以上にわたり「再生できないファイル」の最終回答。'
    },
    url: 'https://www.videolan.org/vlc/', os: 'cross', category: 'media', price: 'oss'
  },
  {
    name: 'mpv',
    desc: {
      zh: '极简但功能强大的命令行风格播放器，性能极佳、配置文件驱动、支持脚本扩展。爱折腾的用户可以打造完美定制版，IINA、SMPlayer 这些 GUI 都基于它。开源免费跨平台。',
      en: 'A minimal yet powerful command-line-style player — excellent performance, config-file driven, scriptable. Power users craft perfect custom builds; IINA, SMPlayer and others are GUI front-ends to it. Free, open source, cross-platform.',
      ja: 'シンプルだが強力なCLIスタイルプレーヤー。高性能、設定ファイル駆動、スクリプト拡張対応。こだわり派は理想形にカスタマイズ可能で、IINAやSMPlayerなどのGUIはこれをベースにしている。無料オープンソース、クロスプラットフォーム。'
    },
    url: 'https://mpv.io/', os: 'cross', category: 'media', price: 'oss'
  },
  {
    name: 'PotPlayer',
    desc: {
      zh: 'Windows 上功能最丰富的视频播放器：硬件解码、多音轨/字幕、HDR、3D、网络流媒体一应俱全。免费但是闭源，新版本默认不带广告。看蓝光、看动画的玩家最爱。',
      en: 'The most feature-rich video player on Windows — hardware decoding, multi-audio/subtitle tracks, HDR, 3D, network streams. Free but closed source; recent versions ship without ads by default. The favourite for Blu-ray and anime watchers.',
      ja: 'Windowsで最も多機能な動画プレーヤー。ハードウェアデコード、複数音声/字幕、HDR、3D、ネットワークストリームに対応。無料だがクローズドソース、最新版は広告なしがデフォルト。Blu-ray・アニメ愛好家の定番。'
    },
    url: 'https://potplayer.daum.net/', os: 'windows', category: 'media', price: 'free'
  },
  {
    name: 'IINA',
    desc: {
      zh: 'Mac 原生现代视频播放器，基于 mpv 核心、Swift 写的 UI 完全融入 macOS。支持触控板手势、Touch Bar、暗色模式，比 VLC 更"Mac"，是 Mac 上替代 QuickTime 的首选。开源免费。',
      en: 'A modern native video player on Mac — mpv core with a Swift UI that feels right at home in macOS. Supports trackpad gestures, Touch Bar, dark mode; more "Mac" than VLC, the go-to QuickTime replacement. Free and open source.',
      ja: 'mpvエンジン＋Swift製UIで、macOSに完全に溶け込むモダンな動画プレーヤー。トラックパッドジェスチャー、Touch Bar、ダークモード対応で、VLCより「Mac的」。QuickTimeの代替として第一選択。無料オープンソース。'
    },
    url: 'https://iina.io/', os: 'macos', category: 'media', price: 'oss'
  },
  {
    name: 'foobar2000',
    desc: {
      zh: '轻量、高度可定制的音频播放器，几十年烧友最爱。支持几乎所有音频格式（含 DSD、HiRes），UI 可以折腾出完全不同的样子。免费但闭源，Windows 体验最佳。',
      en: 'Lightweight, deeply customisable audio player adored by audiophiles for decades. Handles practically every audio format (including DSD and HiRes); the UI can be reskinned beyond recognition. Free but closed source; Windows is the strongest version.',
      ja: '軽量で高度にカスタマイズ可能な音楽プレーヤー、数十年来オーディオファイルに愛され続ける。DSD・HiRes含むほぼ全形式に対応、UIは原型をとどめないほどカスタム可能。無料だがクローズドソース、Windows版が最も完成度高い。'
    },
    url: 'https://www.foobar2000.org/', os: 'cross', category: 'media', price: 'free'
  },
  {
    name: 'HandBrake',
    desc: {
      zh: '免费开源的视频转码工具，把视频压缩、转格式、改分辨率/码率都做得很专业，预设丰富，针对不同设备（手机、电视、Web）都有现成方案。视频压片必装。',
      en: 'Free open-source video transcoder — professional-grade compression, format conversion, resolution/bitrate tweaks, with rich device-targeted presets (phone, TV, web). Essential for any video re-encoding work.',
      ja: '無料オープンソースの動画変換ツール。圧縮・フォーマット変換・解像度/ビットレート調整をプロ仕様で実行可能、デバイス別（スマホ・TV・Web）プリセットも豊富。動画エンコード作業の定番。'
    },
    url: 'https://handbrake.fr/', os: 'cross', category: 'media', price: 'oss'
  },
  {
    name: 'OBS Studio',
    desc: {
      zh: '专业级直播和录屏软件，B 站/Twitch/YouTube 主播标配，支持多场景切换、多源混合、滤镜、音频混音等专业功能。开源免费，硬件配置不算苛刻。',
      en: 'Professional-grade streaming and screen recording — standard kit for Twitch/YouTube/Bilibili streamers, with multi-scene switching, source mixing, filters and audio mixing. Free, open source, modest hardware requirements.',
      ja: 'プロ仕様のライブ配信・画面録画ソフト。Twitch/YouTube/ニコ生配信者の定番で、複数シーン切替、ソースミックス、フィルタ、音声ミキシングなどプロ機能搭載。無料オープンソース、要求スペックも控えめ。'
    },
    url: 'https://obsproject.com/', os: 'cross', category: 'media', price: 'oss'
  },
  {
    name: 'Audacity',
    desc: {
      zh: '免费开源的多轨音频编辑器，剪辑录音、降噪、混音、导出 MP3 都不在话下。播客、配音、音频整理的入门首选。功能比专业 DAW 简单，但学习成本低很多。',
      en: 'Free open-source multi-track audio editor — trim recordings, denoise, mix, export MP3, all in stride. The first choice for podcasting, voiceover, audio cleanup. Simpler than pro DAWs but with a much gentler learning curve.',
      ja: '無料オープンソースのマルチトラック音声編集ツール。録音編集、ノイズ除去、ミックス、MP3書き出しなど一通りカバー。ポッドキャスト・ナレーション・音声整理の入門定番。プロDAWより簡素だが学習コストはずっと低い。'
    },
    url: 'https://www.audacityteam.org/', os: 'cross', category: 'media', price: 'oss'
  },
  {
    name: 'DaVinci Resolve',
    desc: {
      zh: '好莱坞调色软件下凡——剪辑、调色、音频、特效、字幕全集成在一个软件里，免费版功能就强到能拍电影。Studio 版（付费）多了 AI 功能、4K 以上分辨率、更多硬件加速。',
      en: 'A Hollywood-grade colour suite descended to the masses — editing, colour, audio, VFX and subtitles in one app; even the free tier is powerful enough to make a feature film. The paid Studio adds AI features, 4K+ output and more GPU acceleration.',
      ja: 'ハリウッド級のカラーグレーディングソフトが一般に降臨。編集・カラー・音声・VFX・字幕を1本に統合、無料版でも長編映画が作れるほど強力。有料のStudio版はAI機能・4K以上・より多くのGPUアクセラレーションを追加。'
    },
    url: 'https://www.blackmagicdesign.com/products/davinciresolve', os: 'cross', category: 'media', price: 'freemium',
    media: [
      { type: 'youtube', src: 'https://www.youtube.com/embed?listType=search&list=DaVinci+Resolve+18+tutorial', caption: 'YouTube 上的 DaVinci Resolve 教程' }
    ]
  },
  {
    name: 'GIMP',
    desc: {
      zh: 'Photoshop 的免费开源替代，图层、蒙版、滤镜、脚本扩展一应俱全，几乎涵盖 Photoshop 90% 的常用功能。UI 风格略复古，但完全免费、跨平台、社区成熟。',
      en: 'Free open-source Photoshop alternative — layers, masks, filters, scripting, covering ~90% of Photoshop\'s everyday features. The UI is a bit old-school but it\'s fully free, cross-platform, with a mature community.',
      ja: 'Photoshopの無料オープンソース代替。レイヤー、マスク、フィルタ、スクリプト拡張対応で、Photoshop日常機能の約90％をカバー。UIはやや古風だが、完全無料・クロスプラットフォーム・成熟したコミュニティ。'
    },
    url: 'https://www.gimp.org/', os: 'cross', category: 'media', price: 'oss'
  },
  {
    name: 'Krita',
    desc: {
      zh: '免费开源的数字绘画软件，画笔引擎和 PS/SAI 一个水平，支持手绘板、动画、矢量。专门为数字绘画设计，画师社区活跃。完全免费没有任何限制。',
      en: 'Free open-source digital painting software — its brush engine rivals Photoshop and SAI; supports tablets, animation, vectors. Built for digital art with an active artist community. Completely free, no limits.',
      ja: '無料オープンソースのデジタルペイントソフト。ブラシエンジンはPhotoshop/SAIと同等、タブレット・アニメーション・ベクター対応。デジタルアート専用設計でアーティストコミュニティも活発。完全無料、制限なし。'
    },
    url: 'https://krita.org/', os: 'cross', category: 'media', price: 'oss'
  },
  {
    name: 'Inkscape',
    desc: {
      zh: 'Illustrator 的开源替代，做矢量图、Logo、图标、SVG 编辑都很顺手。功能比 Illustrator 略少但日常完全够用，学习成本低，跨平台免费。',
      en: 'Open-source Illustrator alternative for vector graphics, logos, icons and SVG editing. Slightly fewer features than Illustrator but plenty for everyday work, with a gentler learning curve. Cross-platform, free.',
      ja: 'Illustratorのオープンソース代替。ベクター画像・ロゴ・アイコン・SVG編集に最適。Illustratorよりやや機能控えめだが日常用途には十分、学習コストも低い。クロスプラットフォーム、無料。'
    },
    url: 'https://inkscape.org/', os: 'cross', category: 'media', price: 'oss'
  },
  {
    name: 'Paint.NET',
    desc: {
      zh: '比 Windows 自带画图强大、比 Photoshop 简单的图像编辑器，支持图层、滤镜、插件扩展。免费、轻量、专为 Windows 优化，平时改改图、加加水印很顺手。',
      en: 'More powerful than MS Paint, simpler than Photoshop — layers, filters, plugin extensibility. Free, lightweight, tuned for Windows, perfect for quick edits and watermarking.',
      ja: 'Windowsペイントより強力、Photoshopより簡単な画像エディタ。レイヤー、フィルタ、プラグイン拡張対応。無料・軽量・Windows最適化済で、ちょっとした修正やウォーターマーク追加に最適。'
    },
    url: 'https://www.getpaint.net/', os: 'windows', category: 'media', price: 'free'
  },
  {
    name: 'IrfanView',
    desc: {
      zh: 'Windows 上极快的图片查看器和批量处理工具，启动几乎瞬间、支持 RAW、批量改名/转格式/缩放都在一个软件里。免费用了 30 年，老 Windows 用户的回忆。',
      en: 'A lightning-fast image viewer and batch processor on Windows — instant launch, RAW support, batch rename/convert/resize all in one app. Free for 30 years, a memory for veteran Windows users.',
      ja: 'Windows上で非常に高速な画像ビューア＆バッチ処理ツール。起動はほぼ瞬時、RAW対応、一括リネーム/変換/リサイズもすべて統合。30年無料で提供、ベテランWindowsユーザーの記憶に残る一本。'
    },
    url: 'https://www.irfanview.com/', os: 'windows', category: 'media', price: 'free'
  },
  {
    name: 'Sumatra PDF',
    desc: {
      zh: '极简轻量的 PDF/电子书阅读器，启动秒开、安装包不到 10 MB，支持 PDF、ePub、MOBI、CBZ、DjVu。功能比 Adobe Reader 少很多，但要的就是快和清爽。开源免费。',
      en: 'A minimal, lightweight PDF/ebook reader — instant launch, sub-10MB installer, supports PDF, ePub, MOBI, CBZ, DjVu. Far fewer features than Adobe Reader, but speed and cleanliness are the point. Free, open source.',
      ja: '極めて軽量なPDF・電子書籍ビューア。瞬時起動、インストーラ10MB未満、PDF/ePub/MOBI/CBZ/DjVu対応。Adobe Readerより機能ははるかに少ないが、高速と簡潔さがウリ。無料オープンソース。'
    },
    url: 'https://www.sumatrapdfreader.org/', os: 'windows', category: 'media', price: 'oss'
  },

  // ========== 网络 / Network ==========
  {
    name: 'qBittorrent',
    desc: {
      zh: '免费开源无广告的 BT 下载工具，UI 干净、功能完整、可以做 Web UI 远程管理（家里 NAS 装这个特别好用）。是 uTorrent 在被 BitTorrent Inc. 收购后塞广告的最佳替代。',
      en: 'Free, open source, ad-free BitTorrent client — clean UI, full features, optional Web UI for remote management (great for home NAS). The best alternative since uTorrent went ad-laden after BitTorrent Inc. acquired it.',
      ja: '無料オープンソース、広告なしのBTクライアント。UIが清潔、機能完備、Web UI経由のリモート管理可能（自宅NAS導入に最適）。uTorrentがBitTorrent Inc.買収後に広告だらけになって以降の最良代替。'
    },
    url: 'https://www.qbittorrent.org/', os: 'cross', category: 'network', price: 'oss'
  },
  {
    name: 'aria2',
    desc: {
      zh: '命令行下载利器，多线程、多协议（HTTP/HTTPS/FTP/SFTP/BT/磁力）、断点续传、限速一应俱全。可以和浏览器、Telegram bot、定时任务集成。脚本党下载首选，开源免费。',
      en: 'A CLI download powerhouse — multi-threaded, multi-protocol (HTTP/HTTPS/FTP/SFTP/BT/magnet), resume, rate-limit. Integrates with browsers, Telegram bots, cron. The first choice for scripted downloads. Free and open source.',
      ja: 'CLI最強のダウンローダー。マルチスレッド、複数プロトコル（HTTP/HTTPS/FTP/SFTP/BT/マグネット）、レジューム、速度制限に対応。ブラウザ・Telegramボット・cronと連携可能。スクリプト派ダウンロードの第一選択、無料オープンソース。'
    },
    url: 'https://aria2.github.io/', os: 'cross', category: 'network', price: 'oss'
  },
  {
    name: 'Wireshark',
    desc: {
      zh: '专业网络协议分析器，抓包、解析、过滤、回放都是行业事实标准。学网络的、做网络安全的、排查"为什么连不上"的，没人不用它。开源免费、跨平台。',
      en: 'Professional network protocol analyser — capture, dissect, filter, replay; the industry standard. Anyone studying networking, doing security or chasing "why won\'t it connect" uses it. Free, open source, cross-platform.',
      ja: 'プロフェッショナルなネットワークプロトコルアナライザ。キャプチャ、解析、フィルタ、リプレイは業界標準。ネットワーク学習・セキュリティ研究・「繋がらない」原因追跡に必須。無料オープンソース、クロスプラットフォーム。'
    },
    url: 'https://www.wireshark.org/', os: 'cross', category: 'network', price: 'oss'
  },
  {
    name: 'Fiddler',
    desc: {
      zh: 'HTTP/HTTPS 抓包调试，前后端联调、移动端调试、API 行为分析必备。Fiddler Classic 免费 Windows 版功能完整，新版 Fiddler Everywhere 跨平台但部分功能要订阅。',
      en: 'HTTP/HTTPS capture and debugging — indispensable for front-end/back-end integration, mobile debugging and API behaviour analysis. Fiddler Classic on Windows is fully featured and free; the new cross-platform Fiddler Everywhere puts some features behind a subscription.',
      ja: 'HTTP/HTTPSのキャプチャ・デバッグ。フロント・バックエンド連携、モバイルデバッグ、API挙動分析に必携。Fiddler Classic Windows版は完全機能で無料、新版Fiddler Everywhereはクロスプラットフォームだが一部機能はサブスク必要。'
    },
    url: 'https://www.telerik.com/fiddler', os: 'windows', category: 'network', price: 'freemium'
  },
  {
    name: 'Charles',
    desc: {
      zh: 'Mac/Windows/Linux 上的 HTTP 抓包工具，移动端调试支持极好（手机配代理就能抓 App 流量）。30 天免费试用、付费后无限期。前端、QA、安全研究的常备工具。',
      en: 'Cross-platform (Mac/Windows/Linux) HTTP capture tool with excellent mobile debugging — set your phone\'s proxy and capture every app\'s traffic. 30-day trial, lifetime after purchase. A staple for front-end, QA and security work.',
      ja: 'クロスプラットフォーム（Mac/Windows/Linux）のHTTPキャプチャツール、モバイルデバッグサポートが優秀（端末にプロキシ設定するだけでアプリ通信を捕捉）。30日無料試用、購入後は無期限。フロント・QA・セキュリティ業務の常備ツール。'
    },
    url: 'https://www.charlesproxy.com/', os: 'cross', category: 'network', price: 'paid'
  },
  {
    name: 'Proxyman',
    desc: {
      zh: 'Mac 原生的现代化 HTTP 抓包工具，颜值高于 Charles、性能也更好（Swift 写的）。支持 SSL 解密、断点修改、map remote/local。免费版功能受限，付费一次性买断。',
      en: 'Modern native Mac HTTP capture tool — better-looking and faster than Charles (Swift-built). SSL decryption, breakpoint editing, map remote/local. Free tier is limited; full version is a one-time purchase.',
      ja: 'モダンなネイティブMac HTTPキャプチャツール。Charlesより見た目もパフォーマンスも上（Swift製）。SSL復号、ブレークポイント編集、map remote/local対応。無料版は機能制限、フル版は買切型。'
    },
    url: 'https://proxyman.io/', os: 'macos', category: 'network', price: 'freemium'
  },
  {
    name: 'Rufus',
    desc: {
      zh: 'Windows 上做启动 U 盘的最快工具，2 MB 不到的便携软件，速度比微软官方 Media Creation Tool 快很多。装系统、做 Linux Live USB、修复用 PE 都靠它。开源免费。',
      en: 'The fastest tool to make bootable USBs on Windows — under 2 MB, portable, far quicker than Microsoft\'s own Media Creation Tool. Install Windows, build Linux live USBs, prep PE rescue drives — Rufus does them all. Free and open source.',
      ja: 'Windowsでブータブルusbを作る最速ツール。2MB未満のポータブル、Microsoft公式Media Creation Toolより圧倒的に速い。Windowsインストール、Linux Live USB作成、PEレスキューディスク準備すべてに対応。無料オープンソース。'
    },
    url: 'https://rufus.ie/', os: 'windows', category: 'network', price: 'oss'
  },
  {
    name: 'balenaEtcher',
    desc: {
      zh: '跨平台的 USB/SD 卡镜像烧录工具，UI 三步搞定（选镜像 → 选盘 → 烧），适合 macOS 和 Linux 用户（Windows 上 Rufus 更快）。烧录树莓派系统、Linux 安装盘很方便。开源免费。',
      en: 'Cross-platform USB/SD image flasher — three-click UI (pick image → pick drive → flash). Best on macOS and Linux (Rufus is faster on Windows). Great for Raspberry Pi images and Linux install drives. Free, open source.',
      ja: 'クロスプラットフォームのUSB/SDイメージ書き込みツール。3ステップUI（イメージ選択→ドライブ選択→書込）。macOS/Linuxに最適（WindowsならRufusが速い）。Raspberry PiイメージやLinuxインストールディスク作成に便利。無料オープンソース。'
    },
    url: 'https://etcher.balena.io/', os: 'cross', category: 'network', price: 'oss'
  },

  // ========== 安全 / Security ==========
  {
    name: 'KeePassXC',
    desc: {
      zh: '开源本地密码管理器，所有密码加密在一个数据库文件里，由你自己同步（云盘/Git/U 盘都行）。比云端方案更隐私、更可控，缺点是需要自己解决多设备同步。社区活跃、跨平台。',
      en: 'Open-source local password manager — all credentials encrypted in one database file that you sync however you like (cloud, Git, USB stick). More private and in your control than cloud-based services; the trade-off is you handle multi-device sync yourself. Active community, cross-platform.',
      ja: 'オープンソースのローカルパスワード管理。すべてのパスワードを単一の暗号化DBファイルに保存し、同期は自分で（クラウド/Git/USB等）。クラウド型より隠匿性・制御性が高い、代償としてマルチデバイス同期は自前。活発なコミュニティ、クロスプラットフォーム。'
    },
    url: 'https://keepassxc.org/', os: 'cross', category: 'security', price: 'oss'
  },
  {
    name: 'Bitwarden',
    desc: {
      zh: '云端密码管理器，免费版个人功能基本完整（密码、备注、生成器、浏览器扩展、跨设备同步），开源、可自托管。和 1Password 比便宜很多（订阅 $10/年），是 LastPass 出问题后的最佳替代。',
      en: 'Cloud password manager — generous free tier (passwords, notes, generator, browser extensions, multi-device sync), open source, self-hostable. Far cheaper than 1Password (sub at $10/year). The best replacement after LastPass\' breach woes.',
      ja: 'クラウドパスワード管理。無料版でも個人用途はほぼ完備（パスワード、ノート、ジェネレータ、ブラウザ拡張、マルチデバイス同期）、オープンソースでセルフホスト可能。1Passwordより遥かに安価（年$10）。LastPassの問題以降の最良代替。'
    },
    url: 'https://bitwarden.com/', os: 'cross', category: 'security', price: 'freemium'
  },
  {
    name: '1Password',
    desc: {
      zh: '颜值最高、体验最好的付费密码管理器，家庭版能 5 人共用（每月 $5），UI 和 Mac 集成度极佳。Watchtower 主动检测密码泄露，Travel Mode 临时隐藏敏感账号。',
      en: 'The best-looking, most polished paid password manager. Family plan covers up to five members ($5/month), with stellar Mac integration. Watchtower actively warns of leaks; Travel Mode hides sensitive vaults temporarily.',
      ja: '見た目も使い勝手も最高峰の有料パスワード管理。ファミリープランは5人まで（月$5）、Macとの統合性が秀逸。Watchtowerが漏洩を能動検知、Travel Modeで一時的に機密vaultを非表示にできる。'
    },
    url: 'https://1password.com/', os: 'cross', category: 'security', price: 'paid'
  },
  {
    name: 'VeraCrypt',
    desc: {
      zh: '免费开源的磁盘加密工具，TrueCrypt 的精神继承者：可以把整个分区或文件夹加密成一个文件，挂载后才看得到。隐藏卷功能可以做出"二次密码看到的是另一个内容"这种迷惑性设置。',
      en: 'Free open-source disk encryption — TrueCrypt\'s spiritual successor. Encrypt a whole partition or a single container file; visible only when mounted. Hidden volumes provide a deniable "second password reveals different contents" trick.',
      ja: '無料オープンソースのディスク暗号化ツール、TrueCryptの精神的後継。パーティション全体や単一ファイルを暗号化し、マウント時のみ可視化。隠しボリューム機能により「別のパスワードで別の内容が現れる」偽装も可能。'
    },
    url: 'https://www.veracrypt.fr/', os: 'cross', category: 'security', price: 'oss'
  },
  {
    name: 'Cryptomator',
    desc: {
      zh: '为云存储设计的加密工具，把放在 OneDrive/Dropbox/iCloud 里的文件透明加密，只有挂载后看得到明文。免费桌面版，移动端 App 一次性付费。',
      en: 'Encryption designed for cloud storage — transparently encrypts files in OneDrive/Dropbox/iCloud; cleartext is only available when mounted. Free desktop apps, one-time purchase for mobile apps.',
      ja: 'クラウドストレージ向けの暗号化ツール。OneDrive/Dropbox/iCloud上のファイルを透過的に暗号化、マウント時のみ平文として閲覧可能。デスクトップ版は無料、モバイルアプリは買切型。'
    },
    url: 'https://cryptomator.org/', os: 'cross', category: 'security', price: 'oss'
  },
  {
    name: 'Malwarebytes',
    desc: {
      zh: '专业反恶意软件，扫描和清除能力比 Windows Defender 强，特别擅长清流氓软件、PUP（潜在不需要程序）、广告软件。免费版手动扫描，付费版加实时防护。当作 Defender 的二次确认很合适。',
      en: 'Professional anti-malware — scans and removes more aggressively than Windows Defender, especially good against PUPs and adware. Free tier does manual scans; paid adds real-time protection. A solid second-opinion alongside Defender.',
      ja: 'プロ向けマルウェア対策。Windows Defenderよりスキャン・除去が積極的で、不要プログラム（PUP）やアドウェアの駆除が得意。無料版は手動スキャン、有料版でリアルタイム保護追加。Defenderのセカンドオピニオンとして優秀。'
    },
    url: 'https://www.malwarebytes.com/', os: 'cross', category: 'security', price: 'freemium'
  },

  // ========== 浏览器 / Browser ==========
  {
    name: 'Brave',
    desc: {
      zh: '默认拦截广告和追踪的浏览器，基于 Chromium 所以兼容性和性能都和 Chrome 一致。内置 Tor 私密窗口、IPFS 协议支持、加密货币奖励（可关）。Chrome 用户无缝切换。',
      en: 'Browser that blocks ads and trackers by default — Chromium-based so compatibility and speed match Chrome. Built-in Tor private windows, IPFS support, optional crypto rewards (can be disabled). Seamless switch for Chrome users.',
      ja: '広告・トラッカーをデフォルトでブロックするブラウザ。Chromiumベースで互換性・速度はChromeと同等。Torプライベートウィンドウ、IPFS対応、暗号通貨報酬（オフ可）内蔵。Chromeユーザーはシームレスに移行可能。'
    },
    url: 'https://brave.com/', os: 'cross', category: 'browser', price: 'oss'
  },
  {
    name: 'Arc',
    desc: {
      zh: '颠覆传统浏览器交互的新派浏览器，标签页放在侧边栏、支持空间（Spaces）按场景分组、可分屏。从 Chrome 迁移过来一开始不适应，用一周以后回不去。Mac 体验最好，Windows 版和 iOS 版都有。',
      en: 'A disruptive new-school browser — tabs live in a sidebar, "Spaces" group context per workflow, side-by-side split. Coming from Chrome it feels weird for a day, then you can\'t go back. Best on Mac; Windows and iOS versions exist.',
      ja: '従来のブラウザ操作を覆す新派ブラウザ。タブはサイドバー、Spacesでシーン別にグループ化、画面分割対応。Chromeから移行すると最初は違和感あるが、1週間で後戻りできなくなる。Macが最適、Windows/iOS版もあり。'
    },
    url: 'https://arc.net/', os: 'cross', category: 'browser', price: 'free'
  },
  {
    name: 'Firefox',
    desc: {
      zh: '坚持隐私优先的非 Chromium 浏览器，是少数还在维护独立内核的主流浏览器。性能比早些年大幅改善，扩展生态也很完整，不希望整个互联网都被 Chromium 垄断的话该用它。',
      en: 'Privacy-first non-Chromium browser — one of the few mainstream browsers still maintaining an independent engine. Performance is dramatically better than the bad old days, with a strong extension ecosystem. The pick if you don\'t want the entire web monopolised by Chromium.',
      ja: 'プライバシー重視の非Chromiumブラウザ。独自エンジンを維持する数少ない主要ブラウザの一つ。パフォーマンスは数年前から大幅改善、拡張機能エコシステムも健全。Web全体をChromiumに独占されたくないなら選ぶべき一本。'
    },
    url: 'https://www.mozilla.org/firefox/', os: 'cross', category: 'browser', price: 'oss'
  },
  {
    name: 'Vivaldi',
    desc: {
      zh: '高度可定制的浏览器，老 Opera 团队出品，自带网页截图、便签、邮件、日历、阅读模式等大量功能。喜欢"一个浏览器搞定所有事"的玩家最爱，基于 Chromium。免费。',
      en: 'A highly customisable browser from the original Opera team — built-in web captures, notes, mail, calendar, reader mode and much more. The favourite of "one browser to do it all" enthusiasts, Chromium-based. Free.',
      ja: '高度にカスタマイズ可能なブラウザ。旧Operaチーム製で、Webスクショ・メモ・メール・カレンダー・リーダーモードなど多機能内蔵。「ブラウザ1本で全部済ませたい」派のお気に入り、Chromiumベース。無料。'
    },
    url: 'https://vivaldi.com/', os: 'cross', category: 'browser', price: 'free'
  }
];
