<!-- ## API 集中管理
在純前端專案中，API（應用程式介面）的集中管理非常重要，主要有以下幾個原因：

   ::: info  1. 程式碼組織與可維護性
   當一個專案中需要調用多個不同的API時，將這些API的調用邏輯分散在各個元件或模組中會導致程式碼雜亂且難以維護。通過集中管理API，可以將所有的API請求邏輯集中在一個地方，使得程式碼結構更加清晰，易於維護和修改。  
   :::
   ::: info  2. 複用性 
   在大型前端專案中，可能會有多個元件或頁面需要調用相同的API。如果每個元件都獨自處理API請求，會導致重複的程式碼，增加了開發和維護的工作量。通過集中管理API，可以提高程式碼的複用性，減少重複程式碼的存在。
   :::
   ::: info  3. 易於管理請求和錯誤 
   在一個地方處理所有的API的請求和回應，從而更好地管理請求的生命週期，包括請求前的預處理、請求中的攔截和錯誤處理。這樣做可以使錯誤處理更加一致和容易調試，同時也可以更好地記錄和監控API請求。
   :::
   ::: info  4. 便於切換API來源 
   在開發過程中，可能需要在不同的環境（開發、測試、生產）切換API的來源。如果API調用邏輯分散在各個元件中，切換API來源會變得非常繁瑣。而集中管理API可以輕鬆地在一個地方修改API的基礎URL或配置，從而實現切換API來源的目的。
   :::

使用設計模式來輔助實現集中管理API：
   ::: info Singleton（單例模式）
   可以使用單例模式確保整個應用程式只有一個API管理實例。這樣做可以確保所有元件都使用相同的API管理物件，避免不同實例之間的資料不一致和衝突。
   :::
   ::: info Facade（外觀模式）
   API管理可以被視為一個外觀模式，它為前端提供了一個簡單易用的介面，屏蔽了底層API請求的複雜性。通過外觀模式，我們可以隱藏API請求的具體實現細節，提供一個更高級別的介面供元件使用。
   :::
   ::: info Proxy（代理模式）
   可以使用代理模式來攔截和處理API請求。通過代理模式，我們可以在請求發送前後執行一些額外的邏輯，比如添加認證資訊、統一處理錯誤等。
   :::
   ::: info Observer（觀察者模式）
   可以使用觀察者模式實現API請求的監聽和通知機制。當API請求完成時，觀察者模式可以通知所有訂閱者，從而實現在不同元件之間傳遞請求結果。
   ::: -->

## api 製作
安裝 ajax 工具 axios 。
::: code-group
```bash [yarn]
yarn add axios
```
```bash [npm]
npm install axios
```
:::

## 製作 api 庫
Swagger 參考頁面: <span id="swaggerUrl"></span>

src/api/patient.js:
```js
// patient.js
// todo 參考 swagger 頁面完成 CRUD
export const usePatientRepo = ( api ){
   api.AddPatient = async (item) => { }
   api.GetPatient = async (id) => { }
   api.GetPatientPagination = async () => { }
   api.UpdatetPatient = async (item) => { }
   api.DeletetPatient = async (id) => { }
}
```

`.env.development` 設置開發環境網址
```
VITE_API_URL='/'
```

`.env.production` 設置正式環境網址
```
VITE_API_URL='https://正式上線的網址/'
```

`vite.config.js` 設置 proxy
```js
{
   // ...other config
  server: {
    port: 3000,
    // 加入 proxy
    proxy: {
      '/api': 'http://....../api'
    }
  },
}
```

`src/api/index.js` 將 api lib 加到實例上
```js
import { usePatientRepo } from './patient'

// 設置基礎網址
const baseURL = import.meta.env.VITE_API_URL
export const api = axios.create({ baseURL })

// ...
usePatientRepo(api)
```

## 使用 api
```vue
<script setup>
import api from '@/api'
// ...
async function SomeFunction(){
   const items = await api.GetPatient()
}
</script>
```
todo: 頁面透過 api lib 取得 patient

<script setup>
import crypto from 'crypto-js'
import { computed, watchEffect, onMounted, onUnmounted } from 'vue'
import { useSecret } from '@/store.js'
const secret = useSecret()

const watchers = []
const addScrete = (id, encrypted, template) => {
   watchers.push(watchEffect(()=>{
      const content = crypto.AES.decrypt(encrypted, secret.value).toString(crypto.enc.Utf8)
      const decrypted = !!content && content.length > 0 
      const innerHtml = decrypted ? template(content) : `請輸入正確的密鑰`
      document.getElementById(id).innerHTML = innerHtml
   }))
}
onMounted(()=>{
   addScrete(
      'swaggerUrl',
      `U2FsdGVkX19acBlVi5NSLDf1Cf4EQN2rn0mxxH259T0Ct8pCtBy5+oJoTnaZh///USnP6iPN1ltMasgR80eZBg==`,
      (d)=>`<a href="${d}" target="_blank" rel="noreferrer">swagger 參考網址</a>`
   )
})
onUnmounted(()=>{
   watchers.forEach(w=> w())
})
</script>