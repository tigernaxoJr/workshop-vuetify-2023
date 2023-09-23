# Vue3 基礎
## 指令式渲染 vs 宣告式渲染 
宣告式渲染和指令式渲染是在前端開發中，針對使用者界面(UI)的創建和更新常用的兩種不同的渲染方式。

|          | 指令式                                       | 宣告式                         |
| -------- | -------------------------------------------- | ------------------------------ |
| 概念     | 怎麼做<br>(明確撰寫每一個操作和更新)         | 做什麼<br>(定義UI的狀態和結構) |
| 用於     | 傳統DOM操作                                  | 現代前端框架                   |
| DOM 操作 | 手動                                         | 自動                           |
| 維護     | 困難、易出錯、難以跟蹤狀態、不易預測渲染結果 | 容易、較不易出錯               |

現代前端框架普遍採用宣告式渲染，因為它提供更好的抽象和性能優化，同時減少了手動 DOM 操作(也減少工作量)，讓程式更易於維護和理解。
- 指令式：需要手動處理UI的創建和更新過程，容易導致代碼複雜、出錯。
::: info 指令式渲染(Imperative Rendering)
描述 **"怎麼做"**。開發者需要**明確撰寫每一個操作和更新**，編寫詳細的程式手動控制UI的創建和更新過程，包括UI的創建、添加、更新和刪除。
以下是使用原生JavaScript進行指令式渲染的簡單例子：
```html:line-numbers {10-11}
<div>
  <p> cnt1: <span id="cnt1"> 0 </span></p>
  <button onclick="setCount('cnt1')">Increment1</button>
  <p> cnt2: <span id="cnt2"> 0 </span></p>
  <button onclick="setCount('cnt2')">Increment2</button>
  <p> Total <span id="total"> 0 </span></p>
</div>

<script>
  function setCount(id){
    var el = document.getElementById(id);
    var cnt = parseInt(el.textContent);
    el.textContent = cnt + 1;
    const cnt1 = parseInt(document.getElementById('cnt1').textContent)
    const cnt2 = parseInt(document.getElementById('cnt2').textContent)
    document.getElementById('total').textContent = cnt1 + cnt2
  }
<script/>
```
:::
- 宣告式：開發者只需要關注UI的狀態和結構，而不需要關心具體的更新細節。
::: info 宣告式渲染(Declarative Rendering)
描述 **"做什麼"**。開發者只需要定義UI的狀態和結構，然後讓框架或庫根據這些定義自動處理UI的創建和更新。
```html:line-numbers
<template>
  <div>
    <p> cnt1: <span> {{ cnt1 }} </span></p>
    <button onclick="()=> cnt1++">Increment1</button>
    <p> cnt2: <span> {{ cnt2 }} </span></p>
    <button onclick="() => cnt2++">Increment2</button>
    <p> Total <span> {{ cnt1 + cnt2 }} </span></p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const cnt1 = ref(0)
const cnt2 = ref(0)
</script>
```
:::

## MVC vs MVVM 

### MVC（Model-View-Controller）
| Term                 | 說明                                                                                                                                                        |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Model（模型）        | 儲存在應用程式中的狀態(State)或數據。                                                                                                                       |
| View（視圖）         | 顯示給用戶看的畫面。                                                                                                                                        |
| Controller（控制器） | 處理用戶的輸入和協調Model和View之間的交互： <br> - 監聽用戶輸入事件（例如按鈕點擊）<br> - 根據用戶輸入更新Model的狀態<br> - 控制View的呈現以反映Model的變化 |

[看程式](https://playcode.io/1605091)

### MVVM (Model-View-ViewModel)
MVVM 框架下開發者無需手動處理數據更新。而MVC通常需要手動控制視圖和控制器之間的數據傳遞。
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
