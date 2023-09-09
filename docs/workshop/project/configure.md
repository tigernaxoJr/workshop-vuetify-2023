# 專案設置
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