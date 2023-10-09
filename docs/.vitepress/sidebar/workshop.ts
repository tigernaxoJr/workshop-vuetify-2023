export default [
  {
    text: 'Vue 基礎',
    collapsed: false,
    items: [
      // 預計 4hr, 中間休息 20min, 前後扣除 15min(緩衝) = 4*60-20 -15 =205 min
      { text: '[元件]單一元件檔', link: '/workshop/vue3/sfc' }, // 10min, 10
      { text: '[元件]生命週期', link: '/workshop/vue3/lifecycle' }, // 5min, 15
      { text: '[狀態]響應性', link: '/workshop/vue3/reactivity' }, // 15min, 30
      { text: '[狀態]觀察者', link: '/workshop/vue3/reactivity2' }, // 5min,
      // todo: component reference
      { text: '[元件]屬性綁定', link: '/workshop/vue3/attrs' }, // 5min, 35
      { text: '[元件]指示詞', link: '/workshop/vue3/directive' }, // 10min, 45
      { text: '[元件]元件溝通', link: '/workshop/vue3/comminucation' }, // 15min, 60
      { text: '[觀念]單向資料流', link: '/workshop/vue3/data-flow' }, // 15min, 75
      { text: '[元件]插槽', link: '/workshop/vue3/slots' }, // 15min, 90
      { text: '[Vue]生態圈', link: '/workshop/vue3/ecosystem' }, // 5min, 95
      { text: '[Vue]前端路由', link: '/workshop/vue3/vue-router' }, // 10min, 105
      { text: '[Vue]全局狀態', link: '/workshop/vue3/pinia' }, // 10min, 115
    ],
  },
  {
    text: 'Vuetify',
    collapsed: false,
    items: [
      { text: '開發環境', link: '/workshop/vuetify/env' }, // 15min, 15
      { text: '建立專案', link: '/workshop/vuetify/create' }, // 5min, 20
      { text: '開發設置', link: '/workshop/vuetify/devconfig' }, // 5min, 25
      { text: '網站設置', link: '/workshop/vuetify/siteconfig' }, // 5min, 30
      { text: '路由配置', link: '/workshop/vuetify/route' }, // 10min, 40
      { text: '版面配置', link: '/workshop/vuetify/layout' }, // 10min, 50
      { text: '網格系統', link: '/workshop/vuetify/grid' }, // 15min, 65
      { text: '大小與空白', link: '/workshop/vuetify/size' }, // 5min, 70
      { text: '對齊置中', link: '/workshop/vuetify/align' }, // 5min, 75
      { text: '元件配置', link: '/workshop/vuetify/component-register' }, // 5min, 80
      { text: '應用程式主題', link: '/workshop/vuetify/theme' }, //5min, 85
    ],
  },
  {
    text: '專案練習',
    collapsed: false,
    link: '/workshop/project/template/index',
    items: [
      {
        text: '[模板] 專案模板',
        collapsed: true,
        items: [
          // { text: '專案模板', link: '/workshop/project/template' },
          { text: '側邊選單', link: '/workshop/project/template/menus' },
          { text: '內建工具', link: '/workshop/project/template/tools' },
          /* 透過對頁面對APP的相依性講述觀察者模式 */
          { text: '程式初始化', link: '/workshop/project/template/init' },
          { text: '內嵌網頁', link: '/workshop/project/template/iframe' },
          { text: '身份驗證', link: '/workshop/project/template/auth' },
        ],
      },
      {
        text: '[練習] 搜尋頁面',
        collapsed: true,
        items: [
          { text: '建立頁面', link: '/workshop/project/crud/create' },
          { text: 'API管理', link: '/workshop/project/crud/api' },
          { text: '搜尋結果', link: '/workshop/project/crud/result' },
          // todo dialog
          // { text: 'Dialog', link: '/workshop/project/crud/dialog' },
          { text: '編輯資料', link: '/workshop/project/crud/edit' },
          { text: '新增資料', link: '/workshop/project/crud/add' },
          { text: '分頁查詢', link: '/workshop/project/crud/pagination' },
          { text: '即時查詢', link: '/workshop/project/crud/throttle' },
        ],
      },
      { text: '[練習] 元件製作', link: '/workshop/project/component' },
      {
        text: '[練習] 程式佈署',
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
