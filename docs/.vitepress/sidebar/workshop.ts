export default [
        {
          text: '開發環境',
          collapsible: true,
          items: [
            { text: '開發軟體', link: '/workshop/env/software' },
            { text: 'VSCode', link :'/workshop/env/vscode' },
          ]
        },
        {
          text: '新專案',
          collapsible: true,
          items: [
            { text: '專案建立', link :'/workshop/project/create' },
            { text: '專案設置', link :'/workshop/project/configure' },
            // { text: '靜態資源', link :'/workshop/project/resource' },
            { text: '網站主題', link :'/workshop/project/theme' },
          ]
        },
        {
          text: '搜尋頁面',
          collapsible: true,
          items: [
            { text: '頁面建立', link :'/workshop/search-page/01create' },
            { text: '前端路由', link :'/workshop/search-page/02route' },
            { text: '搜尋區域', link :'/workshop/search-page/03query' },
            { text: '搜尋結果', link :'/workshop/search-page/04result' },
            { text: '編輯資料', link :'/workshop/search-page/05edit' },
          ]
        },
        {
          text: '其他',
          collapsible: true,
          items: [
            { text: '容器部署', link :'/workshop/other/deploy' },
            { text: '常用套件', link :'/workshop/other/packages' },
            { text: '渲染函示', link :'/workshop/other/render-function' },
            { text: 'TypeScript', link :'/workshop/other/typescript' },
            { text: '設計模式', link :'/workshop/other/pattern' },
            { text: 'JS雜事', link :'/workshop/other/javascript' },
            { text: '去耦合', link :'/workshop/other/decouple' },
          ]
        }
      ]