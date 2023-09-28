# 專案設置
學習如何設置 vite.config.js、Linting。
## BASE_URL
物件最上層(和 `plugins` 同級)加入屬性 `base: '/app/'`，注意前後要有斜線。
```js
export default defineConfig({
  base:'/app/',  // import.meta.env.BASE_URL
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss',
      },
    }),
  ],
  // ...
})
```

### `src\router\index.js`   
vuetify 原先使用 webpack ，webpack 依賴 node 作為運行環境，因此是從 ndoe 環境變數取得 `BASE_URL`，但 cli 從 webpack 改成 vite 之後應該改從 vite 管理的配置取得。
如果電腦的環境是較低版本的 node.js 應該將寫法`process.env.BASE_URL`()，替換為`import.meta.env.BASE_URL`。
> Vite 需要 Node.js 版本 14.18、16+ 或更高版本。但是，有些模板需要更高版本的 Node.js 才能工作。

```js
const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL), // 低版本不相容的寫法
  history: createWebHistory(import.meta.env.BASE_URL), // 相容的寫法
  routes,
})
```

重啟專案，瀏覽器打開網址 `http://localhost:3000/app/`，應用程式已正確設置為子目錄。
## Vite Server Proxy
先比較常用到的設定：
  - base
  - build.outDir
  - server.port
  - server.proxy
```js
// vite.config.js
export default {
  // 設置應用程式上線後會放置的路徑(預設為 '/'' )
  base: '/HIS/XYZ/XYZ1000/',
  server: {
    port: 3000, // 設置開發伺服器使用的 port
    proxy: {
      // 避免前端開發時會遇到的跨域(CORS)問題。
      // 呼叫 http://localhost:3000/api 會代理到 http://localhost:4567/api/ 
      // 注意，會自動添加 /api，跟 nginx 設置反向代理方式些微差異
      '/api': 'http://localhost:4567',
    }
  },
  build: {
    // 設置編譯程式碼會輸出到哪裡，有時候會用到
    outDir: 'dist'
  },
}
```
## Linting/Formating
### .eslintrc.js  
```js
module.exports = {
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    semi: ["error", "always"],
    "no-console": "off"
  }
};
```
### .prettierrc.js  
```js
module.exports = {
  semi: false,
  singleQuote: true,
  arrowParens: "avoid"
};
```
## Reference
- [vite-config](https://vitejs.dev/config/)