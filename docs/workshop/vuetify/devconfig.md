# 專案設置
學習如何設置 vite.config.js、Linting。

## vite.config.js
先記比較常用到的設定：
  - base：上線後應用程式會位於伺服器的哪個子目錄下
  - server.proxy：開發環境代理伺服器，用於規避 CORS
  - build.outDir：編譯檔案輸出目的地
  - server.port：手動指定開發環境伺服器的 port

```js
// vite.config.js
export default {
  // 設置應用程式上線後會放置的路徑(預設為 '/'' )
  // 注意前後有斜線
  base: '/HIS/XYZ/XYZ1000/',
  server: {
    port: 3333, // 設置開發伺服器使用的 port，預設為 3000
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

重啟專案，瀏覽器打開網址 `http://localhost:3333/HIS/XYZ/XYZ1000/`，應用程式已正確設置為子目錄。

## BASE_URL
vuetify 原先使用 webpack ，webpack 依賴 node 作為運行環境，因此是從 ndoe 環境變數取得 `BASE_URL`，但 cli 從 webpack 改成 vite 之後應該改從 vite 管理的配置取得。
如果電腦的環境是較低版本的 node.js 應該將寫法`process.env.BASE_URL`()，替換為`import.meta.env.BASE_URL`。
> Vite 需要 Node.js 版本 14.18、16+ 或更高版本。但是，有些模板需要更高版本的 Node.js 才能工作。

`src\router\index.js`   
```js
const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL), // 低版本不相容的寫法
  history: createWebHistory(import.meta.env.BASE_URL), // 相容的寫法
  routes,
})
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

## Mode和環境變數
### 常用環境變數
```js
// import.meta.env
{
  MODE: 'development', // 開發模式
  BASE_URL: '/',  // SPA 子目錄
  PROD: false, // 是否為生產環境
  DEV: true, // 是否為開發環境
  SSR: false, // 是否為 Server Side Render
}
```

取用方式：
```js
const BASE_URL = import.meta.env.BASE_URL
```
### 自定義環境變數
在 vite.config.js 定義的 `envDir` 目錄下，可以新增環境檔案(.env)，預設是專案根目錄：
  - `.env` 檔案適用於所有模式，如果和特定模式的變數名稱重複，則優先級別較低。
  - `.local` 結尾的設置檔不會列入版本控制。
```
.env                # 所有情況都載入 
.env.local          # 所有情況都載入，不列入 git 版控 
.env.[mode]         # 特定模式的環境設置檔案
.env.[mode].local   # 特定模式的環境設置檔案，不列入 git 版控 
```

範例：在開發環境、生產環境設置不同的 api 端點網址，自定義的變數命名需要以 `VITE_` 開頭：
`.env.production`，`yarn dev` 會使用這個
```
VITE_API_URL='/'
```
`.env.development`，`yarn build` 會使用這個
```
VITE_API_URL='https://yourapidomain.ktgh.com.tw/maybe/subfolder/'
```

### Summary
  - `.env` 檔案儲存在 vite.config.js 定義的 `envDir` 目錄下
  - `.env` 檔案適用於所有模式，如果和特定模式的變數名稱重複，則優先級別較低。
  - `.local` 結尾的設置檔不會列入版本控制。
  - `yarn dev` 會使用 `.env.development`
  - `yarn build` 會使用 `.env.production`
  - 自定義的變數命名需要以 `VITE_` 開頭
  - 變數取得方式是 `import.meta.env.[變數名稱]`

## Reference
- [vite-config](https://vitejs.dev/config/)
- [vite-Env Variables and Modes](https://vitejs.dev/guide/env-and-mode.html)