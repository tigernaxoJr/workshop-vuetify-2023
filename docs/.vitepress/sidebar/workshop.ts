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
      { text: '開發設置', link: '/workshop/project/configure' },
      { text: '資源設置', link: '/workshop/project/resource' },
      {
        text: '版面配置',
        collapsed: true,
        items: [
          { text: '版面配置', link: '/workshop/project/layout/layout' },
          /* recursive component(可能先跳過) */
          { text: '側邊選單', link: '/workshop/project/layout/menus' },
          /* computed、reactivity 使用技巧 */
          { text: '選單資料', link: '/workshop/project/layout/menus-data' },
        ],
      },
      {
        text: '前端路由',
        collapsed: true,
        items: [
          { text: '前端路由', link: '/workshop/route/front-route' },
          /* 路由配置方式 */
          { text: '路由配置', link: '/workshop/route/route' },
          { text: '路由', link: '/workshop/route/router' },
        ],
      },
      {
        text: '搜尋頁面',
        collapsed: true,
        items: [
          { text: '建立頁面', link: '/workshop/crud/create' },
          /* 透過對頁面對APP的相依性講述觀察者模式 */
          { text: '頁面初始化', link: '/workshop/crud/init' },
          /* 介紹 flex、GridSystem */
          { text: '網格系統', link: '/workshop/crud/grid' },
          { text: 'RWD', link: '/workshop/crud/rwd' },
          { text: '搜尋區域', link: '/workshop/crud/search' },
          { text: 'API管理', link: '/workshop/crud/api' },
          { text: '搜尋結果', link: '/workshop/crud/result' },
          // todo dialog
          // { text: 'Dialog', link: '/workshop/crud/dialog' },
          { text: '編輯資料', link: '/workshop/crud/edit' },
          { text: '新增資料', link: '/workshop/crud/add' },
          { text: 'Store', link: '/workshop/crud/store' },
        ],
      },
      // {
      //   text: '個案細節',
      //   collapsed: true,
      //   items: [
      //     // { text: 'API管理', link: '/workshop/crud/api' },
      //   ],
      // },
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
          { text: '身份驗證', link: '/workshop/login/key' },
          { text: '登入登出', link: '/workshop/login/loginlogout' },
        ],
      },
      {
        text: '程式佈署',
        collapsed: true,
        items: [
          { text: '手動佈署', link: '/workshop/deploy/manual' },
          { text: '自動佈署', link: '/workshop/deploy/cicd' },
        ],
      },
    ],
  },
  {
    text: '其他',
    collapsed: true,
    items: [
      { text: '元件註冊', link: '/workshop/other/component-register' },
      { text: 'Vue 生態圈', link: '/workshop/other/ecosystem' },
      { text: '動態元件', link: '/workshop/other/dynamic' },
      { text: 'Render Function', link: '/workshop/other/render' },
      // {
      //   text: 'Vue3 改動',
      //   collapsed: true,
      //   items: [
      //     { text: 'vite', link: '/vue3/vite' },
      //     { text: '組合式 API', link: '/vue3/composition' },
      //   ],
      // },
      // { text: 'SPA/MPA', link: '/vue3/basic/other/spa-mpa' },
    ],
  },
];
