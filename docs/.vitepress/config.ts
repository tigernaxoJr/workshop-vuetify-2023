import { defineConfig } from "vitepress"
export default defineConfig({
  title: 'Vuetify Workshop 2023',
  description: 'Just playing around.',
  base: '/ktgh-vuetify-2022',
  appearance: 'dark',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Configs', link: '/configs' },
    ],
    sidebar: [
      {
        text: '開發環境',
        collapsible: true,
        items: [
          { text: '開發軟體', link: '/env/software' },
          { text: 'VSCode', link: '/env/vscode' },
        ]
      },
      {
        text: '新專案',
        collapsible: true,
        items: [
          { text: '專案建立', link: '/project/create' },
          { text: '專案設置', link: '/project/configure' },
          { text: '靜態資源', link: '/project/resource' },
          { text: '網站主題', link: '/project/theme' },
        ]
      },
      {
        text: '搜尋頁面',
        collapsible: true,
        items: [
          { text: '頁面建立', link: '/search-page/01create' },
          { text: '前端路由', link: '/search-page/02route' },
          { text: '搜尋區域', link: '/search-page/03query' },
          { text: '搜尋結果', link: '/search-page/04result' },
          { text: '編輯資料', link: '/search-page/05edit' },
        ]
      },
      {
        text: '其他',
        collapsible: true,
        items: [
          { text: '容器部署', link: '/other/deploy' },
          { text: '常用套件', link: '/other/packages' },
          { text: '渲染函示', link: '/other/render-function' },
          { text: 'TypeScript', link: '/other/typescript' },
          { text: '設計模式', link: '/other/pattern' },
          { text: 'JS雜事', link: '/other/javascript' },
          { text: '去耦合', link: '/other/decouple' },
        ]
      }
    ]
  }
})