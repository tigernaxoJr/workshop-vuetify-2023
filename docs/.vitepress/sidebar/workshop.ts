export default [
  {
    text: 'Vue 基礎',
    collapsed: true,
    items: [
      { text: 'MVVM 架構', link: '/workshop/vue3/mvvm' },
      { text: '單一元件檔', link: '/workshop/vue3/sfc' },
      { text: '元件生命週期', link: '/workshop/vue3/lifecycle' },
      { text: '響應式狀態', link: '/workshop/vue3/reactivity' },
      // todo: component reference
      { text: '元件屬性綁定', link: '/workshop/vue3/attrs' },
      { text: '指示詞', link: '/workshop/vue3/directive' },
      { text: '單向資料流', link: '/workshop/vue3/data-flow' },
      { text: 'Pinia', link: '/workshop/vue3/pinia' },
      { text: 'Provide/Inject', link: '/workshop/vue3/provide' },
      { text: '元件插槽', link: '/workshop/vue3/slots' },
    ],
  },
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
    text: '專案練習',
    collapsed: false,
    items: [
      {
        text: '新建專案',
        collapsed: true,
        items: [
          { text: '專案建立', link: '/workshop/project/create' },
          { text: '開發設置', link: '/workshop/project/configure' },
          { text: '資源設置', link: '/workshop/project/resource' },
          { text: '網站主題', link: '/workshop/project/theme' },
        ],
      },
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
          { text: '建立頁面', link: '/workshop/project/crud/create' },
          /* 透過對頁面對APP的相依性講述觀察者模式 */
          { text: '頁面初始化', link: '/workshop/project/crud/init' },
          { text: 'Store', link: '/workshop/project/crud/store' },
          /* 介紹 flex、GridSystem */
          { text: '網格系統', link: '/workshop/project/crud/grid' },
          { text: 'RWD', link: '/workshop/project/crud/rwd' },
          { text: '搜尋區域', link: '/workshop/project/crud/search' },
          { text: 'API管理', link: '/workshop/project/crud/api' },
          { text: '搜尋結果', link: '/workshop/project/crud/result' },
          // todo dialog
          // { text: 'Dialog', link: '/workshop/project/crud/dialog' },
          { text: '編輯資料', link: '/workshop/project/crud/edit' },
          { text: '新增資料', link: '/workshop/project/crud/add' },
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
          { text: '使用iframe', link: '/workshop/project/iframe/iframe' },
          { text: 'key傳遞', link: '/workshop/project/iframe/key' },
          { text: '尺寸同步', link: '/workshop/project/iframe/size' },
        ],
      },
      {
        text: '登入',
        collapsed: true,
        items: [
          { text: '身份驗證', link: '/workshop/project/login/key' },
          { text: '登入登出', link: '/workshop/project/login/loginlogout' },
        ],
      },
      {
        text: '程式佈署',
        collapsed: true,
        items: [
          { text: '手動佈署', link: '/workshop/project/deploy/manual' },
          { text: '自動佈署', link: '/workshop/project/deploy/cicd' },
        ],
      },
    ],
  },
  {
    text: '其他',
    collapsed: true,
    items: [
      { text: '常用套件', link: '/workshop/other/packages' },
      { text: '元件註冊', link: '/workshop/other/component-register' },
      { text: 'Vue 生態圈', link: '/workshop/other/ecosystem' },
      // { text: '動態元件', link: '/workshop/other/dynamic' },
      { text: 'Render Function', link: '/workshop/other/render' },
      { text: '節流與防抖', link: '/workshop/other/throttle-debounce' },
      { text: '混和式應用', link: '/workshop/other/hybrid' },
      { text: '函數式程式設計', link: '/workshop/other/functional-program' },
      { text: 'JS雜事', link: '/workshop/other/javascript' },
      { text: '耦合性原則', link: '/workshop/other/decouple' },
      { text: '內聚性原則', link: '/workshop/other/cohesion' },
      { text: 'SOLID原則', link: '/workshop/other/solid' },
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
