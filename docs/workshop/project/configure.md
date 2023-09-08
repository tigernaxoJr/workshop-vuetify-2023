# 專案設置
## Vite Server Proxy
`vite.config.js` 裡面找到 `server`，下面的設置會使 `axios.get('/api/A')` 等價於 `axios.get('http://localhost:4567/api/A')`，避免前端開發時會遇到的跨域(CORS)問題。
```js
  server: {
    port: 3000,
    proxy: {
      // 呼叫 http://localhost:3000/api 會代理到 http://localhost:4567/api/
      // 注意，會自動添加 /api，跟 nginx 設置反向代理不太一樣
      '/api': 'http://localhost:4567',
    }
  },
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