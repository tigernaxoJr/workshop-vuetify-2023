export default [
  {
    text: '開發環境',
    collapsed: false,
    items: [
      { text: '開發軟體', link: '/workshop/env/software' },
      { text: 'VSCode', link :'/workshop/env/vscode' },
      { text: 'Devtools', link :'/workshop/env/devtools' },
    ]
  },
  {
    text: '新專案',
    collapsed: false,
    items: [
      { text: '專案建立', link :'/workshop/project/create' },
      { text: '專案設置', link :'/workshop/project/configure' },
    ]
  },
  {
    text: '版面配置',
    collapsed: false,
    items: [
      { text: '版面配置', link :'/workshop/project/layout' },
      { text: '側邊選單', link :'/workshop/project/menus' },
      { text: '路由配置', link :'/workshop/project/route' },
    ]
  },
  {
    text: '搜尋頁面',
    collapsed: false,
    items: [
      { text: 'API管理', link :'/workshop/project/api' },
      { text: '建立頁面', link :'/workshop/crud/create' },
      { text: '搜尋區域', link :'/workshop/crud/query' },
      { text: '搜尋結果', link :'/workshop/crud/result' },
      { text: '編輯資料', link :'/workshop/crud/edit' },
      { text: '新增資料', link :'/workshop/crud/add' },
    ]
  },
]