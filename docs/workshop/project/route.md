## 前端路由
|            | 後端路由     | 前端路由       |
| ---------- | ------------ | -------------- |
| 路由邏輯   | 後端程式處理 | 客戶端程式處理 |
| 伺服器請求 | 需要         | 不需要***      |

採取前端路由減少對伺服器請求次數，提高網頁速度、效率。
## History/Hash 模式
| 前端路由       | Hash Mode              | History Mode                  |
| -------------- | ---------------------- | ----------------------------- |
| URL 外觀       | 在 # 之後設置路由      | 和後端路由無異                |
| 實現原理       | 天生不會送出 http 請求 | 以 history API 攔截 http 請求 |
| 網址列參數傳遞 | 無法傳遞網址列參數     | 可傳遞網址列參數***           |
| 伺服器支援     | 伺服器不須額外設置     | 需設置伺服器端，避免 404      |
| SEO(不重要)    | 不利於 SEO             | 利於 SEO                      |

Hash Mode 無法傳遞網址列參數，在傳遞 KEY 的時候會有問題，伺服器端設置也不複雜，建議用 History Mode。

## `src/router.index.js`
```js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    // component: () => import('@/layouts/default/Default.vue'), // 刪除這行
    component: () => import('@/layouts/MainLayout.vue'), // 新增這行
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      // 新增 Search 頁面路由設置
      {
        path: 'Search',
        name: 'Search',
		// 動態載入(Lazy Loading)語法
        component: () => import('@/views/Search.vue'),
      },
    ],
  },
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL), // 錯誤的寫法
  history: createWebHistory(import.meta.env.BASE_URL), // 正確的寫法
  routes,
})
export default router
```

## 設置 router-view
子路由會顯示在 `<router-view></router-view>` 裡面，在 `App.vue` 裡面設置顯示根路由。
`src/App.vue` 主頁面
```vue
<template>
  <router-view />
</template>

<script setup></script>
```

## Reference
- [Vue Router](https://router.vuejs.org/)