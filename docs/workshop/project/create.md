<script setup lang="ts">
</script>
# 建立專案
## 建立專案
1. 輸入指令建立專案   
   ```bash
   npm create vuetify
   ```
2. 設定項目：  
   - 輸入**專案名稱(這裡用 vue3-app)**
   - 選擇 Essentials (Vuetify, VueRouter, Pinia)
   - Use Typescript 選 **No**
   - 安裝程式選 **npm** 或 **yarn**(若有安裝)。    

   ![](./create/create.jpg)  
3. vuetify-cli 在建立完專案之後就會自動安裝套件...
   ![](./create/create2.jpg)  

## 啟動專案
1. 進入專案資料夾 
   ```bash
   cd v3-app
   ```
2. 以 VSCode 打開專案 
   ```bash
   code . 
   ```
3. ``` ctrl+` ```打開 console
4. 啟動開發伺服器
   ```bash
   npm run dev
   ```  
   結果：  
    ![](./create/create3.jpg)
5. 瀏覽器打開網址 `http://localhost:3000/`
   ![](./create/create4.jpg)

## 設置 BASE_URL
### vite.config.js
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
應該將錯誤的寫法`process.env.BASE_URL`()，替換為`import.meta.env.BASE_URL`。
```js
const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL), // 錯誤的寫法
  history: createWebHistory(import.meta.env.BASE_URL), // 正確的寫法
  routes,
})
```

重啟專案，瀏覽器打開網址 `http://localhost:3000/app/`，應用程式已正確設置為子目錄。

## Reference
- [Vuetify-next](https://next.vuetifyjs.com/en/getting-started/installation/)
