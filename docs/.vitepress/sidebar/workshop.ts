export default [
  {
    text: '開發環境',
    collapsed: false,
    items: [
      { text: '開發軟體', link: '/workshop/env/software' },
      { text: 'VSCode', link: '/workshop/env/vscode' },
      { text: 'Devtools', link: '/workshop/env/devtools' },
    ],
  },
  {
    text: '新專案',
    collapsed: false,
    items: [
      { text: '專案建立', link: '/workshop/project/create' },
      { text: '專案設置', link: '/workshop/project/configure' },
      {
        text: '版面配置',
        collapsed: true,
        items: [
          { text: '版面配置', link: '/workshop/project/layout/layout' },
          { text: '側邊選單', link: '/workshop/project/layout/menus' },
          { text: '選單資料', link: '/workshop/project/layout/menus-data' },
          { text: '路由配置', link: '/workshop/project/layout/route' },
          { text: '控台切換', link: '/workshop/project/layout/switch' },
        ],
      },
      {
        text: '搜尋頁面',
        collapsed: true,
        items: [
          { text: 'API管理', link: '/workshop/crud/api' },
          { text: '建立頁面', link: '/workshop/crud/create' },
          { text: '搜尋區域', link: '/workshop/crud/query' },
          { text: '搜尋結果', link: '/workshop/crud/result' },
          { text: '編輯資料', link: '/workshop/crud/edit' },
          { text: '新增資料', link: '/workshop/crud/add' },
        ],
      },
      {
        text: '內嵌網頁',
        collapsed: true,
        items: [
          { text: '使用iframe', link: '/workshop/iframe/iframe' },
          { text: 'key傳遞', link: '/workshop/iframe/key' },
          { text: '尺寸同步', link: '/workshop/iframe/size' },
        ],
      },
      {
        text: '登入',
        collapsed: true,
        items: [
          { text: '接收KEY', link: '/workshop/login/key' },
          { text: '取得token', link: '/workshop/login/token' },
          { text: '登入頁面', link: '/workshop/iframe/iframe' },
          { text: '登出', link: '/workshop/iframe/iframe' },
        ],
      },
      {
        text: '程式佈署',
        collapsed: true,
        items: [
          { text: 'iis佈署', link: '/workshop/other/iis' },
          { text: 'nginx佈署', link: '/workshop/other/nginx' },
          { text: '自動佈署', link: '/workshop/other/cicd' },
        ],
      },
    ],
  },
  {
    text: '其他',
    collapsed: true,
    items: [
      // { text: '前後台切換', link: '/workshop/crud/api' },
    ],
  },
];
