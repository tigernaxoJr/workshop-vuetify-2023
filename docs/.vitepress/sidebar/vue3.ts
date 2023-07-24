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
          { text: '單一元件檔', link: '/vue3/basic/component/sfc' },
          { text: '元件溝通', link: '/vue3/basic/component/interact' },
          { text: '深度溝通', link: '/vue3/basic/component/interact-provide-inject' },
          { text: '元件插槽', link: '/vue3/basic/component/slot' },
          { text: '遞迴元件', link: '/vue3/basic/component/recursive' },
          { text: '動態元件', link: '/vue3/basic/component/dynamic' },
        ]
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
      { text: '前端路由', link: '/vue3/route' }, // History modes 比較...
      { text: 'vue-router', link: '/vue3/vue-router' }, // vue-router
      { text: '狀態管理', link: '/vue3/state' }, // Flux架構
      { text: 'pinia', link: '/vue3/pinia' }, // vue-router
      { text: 'UI 框架', link: '/vue3/uiframework' }, // Flux架構
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
