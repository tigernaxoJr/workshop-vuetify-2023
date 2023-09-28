export default [
  {
    text: 'Vue 基礎',
    collapsed: true,
    items: [
      { text: '單一元件檔', link: '/workshop/vue3/sfc' },
      { text: '元件生命週期', link: '/workshop/vue3/lifecycle' },
      { text: '響應式狀態', link: '/workshop/vue3/reactivity' },
      // todo: component reference
      { text: '屬性綁定', link: '/workshop/vue3/attrs' },
      { text: '指示詞', link: '/workshop/vue3/directive' },
      { text: '元件溝通', link: '/workshop/vue3/provide' },
      { text: '單向資料流', link: '/workshop/vue3/data-flow' },
      { text: '元件插槽', link: '/workshop/vue3/slots' },
      { text: 'Vue 生態圈', link: '/workshop/vue3/ecosystem' },
      { text: 'Pinia', link: '/workshop/vue3/pinia' },
      { text: 'Vue-Router', link: '/workshop/vue3/vue-router' },
    ],
  },
  {
    text: 'Vuetify',
    link: '/workshop/vue3/vuetify',
    collapsed: false,
    items: [
      { text: '開發環境', link: '/workshop/vuetify/env' },
      { text: '建立專案', link: '/workshop/vuetify/create' },
      { text: '開發設置', link: '/workshop/vuetify/devconfig' },
      { text: '網站設置', link: '/workshop/vuetify/siteconfig' },
      { text: '路由配置', link: '/workshop/vuetify/route' },
      { text: '應用程式主題', link: '/workshop/vuetify/theme' },
      { text: '版面配置', link: '/workshop/vuetify/layout' },
      { text: '網格系統', link: '/workshop/vuetify/grid' },
      { text: '元件註冊', link: '/workshop/vuetify/component-register' },
    ],
  },
  {
    text: '專案練習',
    collapsed: false,
    items: [
      { text: '專案模板', link: '/workshop/project/template' },
      {
        text: '[元件] 側邊選單',
        collapsed: true,
        items: [
          { text: '側邊選單', link: '/workshop/project/menus/menus' },
          { text: '選單資料', link: '/workshop/project/menus/menus-data' },
        ],
      },
      {
        text: '[工具] 實用工具',
        collapsed: true,
        items: [
          { text: 'dayjs', link: '/workshop/project/tools/dayjs' },
          // { text: 'token', link: '/workshop/project/tools/token' },
        ],
      },
      {
        text: '[工具] 實用狀態',
        collapsed: true,
        items: [
          { text: 'appStore', link: '/workshop/project/store/app' },
          { text: 'authStore', link: '/workshop/project/store/auth' },
        ],
      },
      {
        text: '搜尋頁面',
        collapsed: true,
        items: [
          { text: '建立頁面', link: '/workshop/project/crud/create' },
          /* 透過對頁面對APP的相依性講述觀察者模式 */
          { text: '頁面初始化', link: '/workshop/project/crud/init' },
          { text: '搜尋區域', link: '/workshop/project/crud/search' },
          { text: 'API管理', link: '/workshop/project/crud/api' },
          { text: '搜尋結果', link: '/workshop/project/crud/result' },
          // todo dialog
          // { text: 'Dialog', link: '/workshop/project/crud/dialog' },
          { text: '編輯資料', link: '/workshop/project/crud/edit' },
          { text: '新增資料', link: '/workshop/project/crud/add' },
        ],
      },
      { text: '內嵌網頁', link: '/workshop/project/iframe' },
      { text: '身份驗證', link: '/workshop/project/auth' },
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
      // { text: '動態元件', link: '/workshop/other/dynamic' },
      { text: 'Render Function', link: '/workshop/other/render' },
      { text: '節流與防抖', link: '/workshop/other/throttle-debounce' },
      { text: '混和式應用', link: '/workshop/other/hybrid' },
      { text: '函數式程式設計', link: '/workshop/other/functional-program' },
      { text: 'JS雜事', link: '/workshop/other/javascript' },
      { text: '耦合性原則', link: '/workshop/other/decouple' },
      { text: '內聚性原則', link: '/workshop/other/cohesion' },
      { text: 'SOLID原則', link: '/workshop/other/solid' },
      { text: 'MVVM 架構', link: '/workshop/other/mvvm' },
      { text: '唯變所適', link: '/workshop/other/change' },
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

/* recursive component(可能先跳過) */
