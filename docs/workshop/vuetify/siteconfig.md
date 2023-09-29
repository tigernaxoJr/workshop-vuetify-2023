# 靜態資源
因為院內無法連外網的電腦讀不到外部 cdn 資源，因此 font、icon、等等...都要放在專案內，或使用院內的資源

## 靜態資源 Icon 
1. 把資源安裝到 locale 端
  ```bash
  $ yarn add @mdi/font -D
  // OR
  $ npm install @mdi/font -D
  ```
2. import 安裝的資源，vite 會一起打包
  ```js
  // src/plugins/vuetify.js
  import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
  import { createVuetify } from 'vuetify'
  
  export default createVuetify({
    icons: {
      defaultSet: 'mdi', // This is already the default value - only for display purposes
    },
  })
  ```
## 靜態資源 光田自造字
在 `index.html` 的 `<header>` 區塊加入以下 CSS，即可在瀏覽器中顯示光田自造字。使用 `?expires=1970-01-01T00:00:00Z` 可使字型檔每次都重新載入，不受瀏覽器快取影響。
```html
<style>
  @font-face {
    font-family: "EUDC";
    font-style: normal;
    src: url('https://m-med.ktgh.com.tw/CDN/fonts/EUDC.woff2?expires=1970-01-01T00:00:00Z') format('woff2'),
      url('https://m-med.ktgh.com.tw/CDN/fonts/EUDC.woff?expires=1970-01-01T00:00:00Z') format('woff'),
      url('https://m-med.ktgh.com.tw/CDN/fonts/EUDC.ttf?expires=1970-01-01T00:00:00Z') format('truetype');
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: '其他優先使用的字型', 'EUDC', sans-serif;
    font-display: auto;
  }
</style>
```

---
## Reference
- [wordpress-[Web] 網頁顯示光田自造字](https://wordpress.ktgh.com.tw/archives/1301)
- [Vuetify-Icon Fonts](https://vuetifyjs.com/en/features/icon-fonts/#icon-fonts)