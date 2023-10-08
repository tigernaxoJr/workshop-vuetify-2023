# Vue-Router
Vue3 前端路由採用 `Vue-Router`
## 前端路由
### 後端路由
![](/back-route.png)
### 前端路由
![](/front-route.png)
### 後端路由 vs 前端路由
|            | 後端路由     | 前端路由       |
| ---------- | ------------ | -------------- |
| 路由邏輯   | 後端程式處理 | 客戶端程式處理 |
| 伺服器請求 | 需要         | **不需要**     |

採取前端路由減少對伺服器請求次數，提高網頁速度、效率。

## HTML5/Hash 模式

| 前端路由       | Hash Mode                         | HTML5 Mode                  |
| -------------- | --------------------------------- | ----------------------------- |
| URL 外觀       | 在 # 之後設置路由                 | 和後端路由無異                |
| URL 外觀       | https://localhost/app#A/B         | https://localhost/app/A/B     |
| 實現原理       | 改變#後面原本就不會送出 http 請求 | 以 history API 攔截 http 請求 |
| 網址列參數傳遞 | 無法傳遞網址列參數                | **可傳遞網址列參數**          |
| 伺服器支援     | 伺服器不須額外設置                | 需設置伺服器端，避免拿到 404  |
| SEO(不重要)    | 不利於 SEO                        | 利於 SEO                      |

Hash Mode 無法傳遞網址列參數，在傳遞 KEY 的時候會有問題，伺服器端設置也不複雜，建議用 HTML5 Mode。
> The HTML5 mode is created with createWebHistory() and is the recommended mode:
<iframe src="https://codesandbox.io/embed/vue-router-yv8473?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue-router"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Summary
- 前端路由只有頁面載入時需要請求靜態檔案。
- 官方優先考慮使用 HTML5 Mode 並設置伺服器端。

## Reference
- [Vue Router](https://router.vuejs.org/introduction.html)