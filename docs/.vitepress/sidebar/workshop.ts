export default [
  {
    text: '開發環境',
    collapsible: true,
    items: [
      { text: '開發軟體', link: '/workshop/env/software' },
      { text: 'VSCode', link :'/workshop/env/vscode' },
      { text: 'Devtools', link :'/workshop/env/devtools' },
    ]
  },
  {
    text: '新專案',
    collapsible: true,
    items: [
      { text: '專案建立', link :'/workshop/project/create' },
      { text: '專案設置', link :'/workshop/project/configure' },
      { text: '版面配置', link :'/workshop/project/layout' },
      { text: '路由配置', link :'/workshop/project/route' },
      { text: 'API管理', link :'/workshop/project/api' },
    ]
  },
  {
    text: '搜尋頁面',
    collapsible: true,
    items: [
      { text: '建立頁面', link :'/workshop/crud/create' },
      { text: '搜尋區域', link :'/workshop/crud/query' },
      { text: '搜尋結果', link :'/workshop/crud/result' },
      { text: '編輯資料', link :'/workshop/crud/edit' },
      { text: '新增資料', link :'/workshop/crud/add' },
    ]
  },
  // {
  //   text: '其他',
  //   collapsible: true,
  //   items: [
  //     { text: '容器部署', link :'/workshop/other/deploy' },
  //     { text: 'WebView2', link :'/workshop/other/webview2' },
  //     { text: '網站主題', link :'/workshop/other/theme' },
  //     { text: '渲染函示', link :'/workshop/other/render-function' },
  //     { text: 'JS雜事', link :'/workshop/other/javascript' },
  //     { text: 'TypeScript', link :'/workshop/other/typescript' },
  //     { text: '設計模式', link :'/workshop/other/pattern' },
  //     { text: '去耦合', link :'/workshop/other/decouple' },
  //     { text: '常用套件', link :'/workshop/other/packages' },
  //   ]
  // }
]