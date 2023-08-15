export default [
  {
    text: 'Vue 基礎',
    collapsed: false,
    items: [
      { text: 'MVVM 框架', link: '/vue3/basic/mvvm' },
      { text: '生命週期', link: '/vue3/basic/lifecycle' },
      {
        text: '元件系統',
        collapsed: true,
        items: [
          { text: '單一元件檔', link: '/vue3/basic/component/00sfc' },
          { text: '模板語法', link: '/vue3/basic/component/10template' },
          { text: '屬性綁定', link: '/vue3/basic/component/20attrs' },
          { text: 'Props', link: '/vue3/basic/component/30props' },
          { text: '單向資料流', link: '/vue3/basic/component/40oneWayDataFlow' },
          {
            text: 'Provide/Inject',
            link: '/vue3/basic/component/50interactProvideInject',
          },
          { text: '元件插槽', link: '/vue3/basic/component/60slots' },
          { text: '遞迴元件', link: '/vue3/basic/component/70recursive' },
          { text: '動態元件', link: '/vue3/basic/component/80dynamic' },
        ],
      },
    ],
  },
  {
    text: 'Vue3 改動',
    collapsed: false,
    items: [
      { text: 'vite', link: '/vue3/vite' },
      { text: '組合式 API', link: '/vue3/composition' },
    ],
  },
  {
    text: 'Vue3 生態圈',
    collapsed: false,
    items: [
      { text: '前端路由', link: '/vue3/ecosystem/route' }, // History modes 比較...
      { text: 'vue-router', link: '/vue3/ecosystem/vue-router' }, // vue-router
      { text: '狀態管理', link: '/vue3/ecosystem/state' }, // Flux架構
      { text: 'pinia', link: '/vue3/ecosystem/pinia' }, // vue-router
      { text: 'UI 框架', link: '/vue3/ecosystem/uiframework' }, // Flux架構
    ],
  },
  {
    text: '其他',
    collapsed: true,
    items: [
      { text: '前端資料流', link: '/vue3/basic/other/data-flow' },
      { text: 'SPA/MPA', link: '/vue3/basic/other/spa-mpa' },
    ],
  },
];
