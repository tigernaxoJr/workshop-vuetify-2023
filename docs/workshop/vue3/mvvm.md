# MVVM 
網頁的渲染是指瀏覽器將 HTML、CSS 和 JavaScript 等文件轉換為使用者可以看到的畫面的過程，渲染的方式可分為`指令式`和`聲明式`。

React、Vue.js等前端框架採用的是 `MVVM` 架構，開發者**只需描述所需的結果，而不需關心渲染的操作步驟**，例如 Vue 使用模板語法描述 UI，DOM 更新 Vue 會自動負責處理，這種方式又稱為`宣告式渲染（Declarative Rendering）`。  

MVC (例如：C# Razer)和傳統的 JavaScript DOM 操作(使用 getElementById、appendChild、setAttribute 等方法直接操控DOM元素)，**需要明確的指令和操作達到所需結果**，這種方式又稱為`指令式渲染（Imperative Rendering）`。

|          | 指令式                                       | 宣告式                         |
| -------- | -------------------------------------------- | ------------------------------ |
| 概念     | 怎麼做<br>(明確撰寫每一個操作和更新)         | 做什麼<br>(定義UI的狀態和結構) |
| 用於     | MVC、傳統 JS DOM 操作                        | 現代前端框架(Vue...etc.)       |
| DOM 操作 | 手動                                         | 自動                           |
| 維護     | 困難、易出錯、難以跟蹤狀態、不易預測渲染結果 | 容易、較不易出錯               |

## MVC vs MVVM 

### MVC（Model-View-Controller）
屬於指令式渲染，需要手動控制視圖和控制器之間的數據傳遞。
| Term                 | 說明                                                                                                                                                        |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Model（模型）        | 儲存在應用程式中的狀態(State)或數據。                                                                                                                       |
| View（視圖）         | 顯示給用戶看的畫面。                                                                                                                                        |
| Controller（控制器） | 處理用戶的輸入和協調Model和View之間的交互： <br> - 監聽用戶輸入事件（例如按鈕點擊）<br> - 根據用戶輸入更新Model的狀態<br> - 控制View的呈現以反映Model的變化 |

[看程式](https://playcode.io/1605091)

### MVVM (Model-View-ViewModel)
屬於宣告式渲染（Declarative Rendering），開發者無需手動處理數據更新。
在 MVVM 架構中，Model 需要具備反應性(Reactivity)，才能讓 ViewModel 自動更新視圖。
Vue 底層是 proxy，寫程式時可以調用 vue 裡面的 ref、reactive。
| Term                 | 說明                                                                                                                             |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Model (模型)         | 儲存在 Javascript 裡面的狀態(State)。                                                                                            |
| View (視圖)          | 顯示給用戶看的畫面(View)。                                                                                                       |
| ViewModel (視圖模型) | 將 Model 和 View 同步：<br> - 監聽 DOM 事件，自動把受到事件更新的狀態更新到 Model 層。 <br> - 在 Model 改變時渲染出新的 View<br> |

![](https://book.vue.tw/assets/img/1-1-mvvm.febdf1bd.png)

[看程式](https://playcode.io/1605065)

### 元件結構
![](https://v2.vuejs.org/images/components.png)

## Reference

- [Vue.js-State Management](https://vuejs.org/guide/scaling-up/state-management.html)
