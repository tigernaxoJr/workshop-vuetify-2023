export default [
  {
    text: 'Vue 基礎',
    collapsed: false,
    items: [
      { text: 'MVVM 架構', link: '/vue3/basic/00mvvm' },
      { text: '元件生命週期', link: '/vue3/basic/01lifecycle' },
      { text: '單一元件檔', link: '/vue3/basic/10sfc' },
      { text: '元件屬性綁定', link: '/vue3/basic/20attrs' },
      { text: '元件Props', link: '/vue3/basic/30props' },
      { text: '單向資料流', link: '/vue3/basic/40oneWayDataFlow' },
      { text: 'Provide/Inject', link: '/vue3/basic/50interactProvideInject' },
      { text: '元件插槽', link: '/vue3/basic/60slots' },
    ],
  },
  {
    text: 'Vue 進階',
    collapsed: true,
    items: [
      { text: '動態元件', link: '/vue3/basic/80dynamic' },
      { text: 'Render Function', link: '/vue3/basic/70render' },
    ],
  },
  {
    text: 'Vue3 改動',
    collapsed: true,
    items: [
      { text: 'vite', link: '/vue3/vite' },
      { text: '組合式 API', link: '/vue3/composition' },
    ],
  },
  {
    text: 'Vue3 生態圈',
    collapsed: true,
    items: [
      { text: '前端路由', link: '/vue3/ecosystem/route' }, // History modes 比較...
      { text: 'vue-router', link: '/vue3/ecosystem/vue-router' }, // vue-router
      { text: '狀態管理', link: '/vue3/ecosystem/state' }, // Flux架構
      { text: 'pinia', link: '/vue3/ecosystem/pinia' }, // vue-router
      { text: 'UI 框架', link: '/vue3/ecosystem/uiframework' }, // Flux架構
    ],
  },
  // {
  //   text: '其他',
  //   collapsed: true,
  //   items: [
  //     { text: '前端資料流', link: '/vue3/basic/other/data-flow' },
  //     { text: 'SPA/MPA', link: '/vue3/basic/other/spa-mpa' },
  //   ],
  // },
];
