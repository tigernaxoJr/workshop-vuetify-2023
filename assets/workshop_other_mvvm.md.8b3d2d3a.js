import{_ as a,o as r,c as o,Q as e,k as t}from"./chunks/framework.fb95d6d7.js";const f=JSON.parse('{"title":"MVVM","description":"","frontmatter":{},"headers":[],"relativePath":"workshop/other/mvvm.md","filePath":"workshop/other/mvvm.md"}'),d={name:"workshop/other/mvvm.md"},l=e('<h1 id="mvvm" tabindex="-1">MVVM <a class="header-anchor" href="#mvvm" aria-label="Permalink to &quot;MVVM&quot;">​</a></h1><h2 id="mvc-vs-mvvm" tabindex="-1">MVC vs MVVM <a class="header-anchor" href="#mvc-vs-mvvm" aria-label="Permalink to &quot;MVC vs MVVM&quot;">​</a></h2><h3 id="mvc-model-view-controller" tabindex="-1">MVC（Model-View-Controller） <a class="header-anchor" href="#mvc-model-view-controller" aria-label="Permalink to &quot;MVC（Model-View-Controller）&quot;">​</a></h3><p>屬於指令式渲染，需要手動控制視圖和控制器之間的數據傳遞。</p><table><thead><tr><th>Term</th><th>說明</th></tr></thead><tbody><tr><td>Model（模型）</td><td>儲存在應用程式中的狀態(State)或數據。</td></tr><tr><td>View（視圖）</td><td>顯示給用戶看的畫面。</td></tr><tr><td>Controller（控制器）</td><td>處理用戶的輸入和協調Model和View之間的交互： <br> - 監聽用戶輸入事件（例如按鈕點擊）<br> - 根據用戶輸入更新Model的狀態<br> - 控制View的呈現以反映Model的變化</td></tr></tbody></table>',5),n=t("iframe",{height:"500",style:{width:"100%"},scrolling:"no",title:"2023-mvc",src:"https://codepen.io/tigernaxoJr/embed/rNovozz?default-tab=html%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/tigernaxoJr/pen/rNovozz">
  2023-mvc</a> by tigernaxoJr (<a href="https://codepen.io/tigernaxoJr">@tigernaxoJr</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),i=e('<h3 id="mvvm-model-view-viewmodel" tabindex="-1">MVVM (Model-View-ViewModel) <a class="header-anchor" href="#mvvm-model-view-viewmodel" aria-label="Permalink to &quot;MVVM (Model-View-ViewModel)&quot;">​</a></h3><p>屬於宣告式渲染（Declarative Rendering），開發者無需手動處理數據更新。 在 MVVM 架構中，Model 需要具備反應性(Reactivity)，才能讓 ViewModel 自動更新視圖。 Vue 底層是 proxy，寫程式時可以調用 vue 裡面的 ref、reactive。</p><table><thead><tr><th>Term</th><th>說明</th></tr></thead><tbody><tr><td>Model (模型)</td><td>儲存在 Javascript 裡面的狀態(State)。</td></tr><tr><td>View (視圖)</td><td>顯示給用戶看的畫面(View)。</td></tr><tr><td>ViewModel (視圖模型)</td><td>將 Model 和 View 同步：<br> - 監聽 DOM 事件，自動把受到事件更新的狀態更新到 Model 層。 <br> - 在 Model 改變時渲染出新的 View<br></td></tr></tbody></table><p><img src="https://book.vue.tw/assets/img/1-1-mvvm.febdf1bd.png" alt=""></p>',4),h=t("iframe",{height:"500",style:{width:"100%"},scrolling:"no",title:"Untitled",src:"https://codepen.io/tigernaxoJr/embed/wvRjRQG?default-tab=html%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/tigernaxoJr/pen/wvRjRQG">
  Untitled</a> by tigernaxoJr (<a href="https://codepen.io/tigernaxoJr">@tigernaxoJr</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),s=e('<h3 id="元件結構" tabindex="-1">元件結構 <a class="header-anchor" href="#元件結構" aria-label="Permalink to &quot;元件結構&quot;">​</a></h3><p><img src="https://v2.vuejs.org/images/components.png" alt=""></p><h2 id="渲染" tabindex="-1">渲染 <a class="header-anchor" href="#渲染" aria-label="Permalink to &quot;渲染&quot;">​</a></h2><p>網頁的渲染是指瀏覽器將 HTML、CSS 和 JavaScript 等文件轉換為使用者可以看到的畫面的過程，渲染的方式可分為<code>指令式</code>和<code>聲明式</code>。</p><h3 id="宣告式渲染" tabindex="-1">宣告式渲染 <a class="header-anchor" href="#宣告式渲染" aria-label="Permalink to &quot;宣告式渲染&quot;">​</a></h3><p>React、Vue.js等前端框架採用的是 <code>MVVM</code> 架構，開發者<strong>只需描述所需的結果，而不需關心渲染的操作步驟</strong>，例如 Vue 使用模板語法描述 UI，DOM 更新 Vue 會自動負責處理，這種方式又稱為<code>宣告式渲染（Declarative Rendering）</code>。</p><h3 id="指令式渲染" tabindex="-1">指令式渲染 <a class="header-anchor" href="#指令式渲染" aria-label="Permalink to &quot;指令式渲染&quot;">​</a></h3><p>MVC (例如：C# Razer)和傳統的 JavaScript DOM 操作(使用 getElementById、appendChild、setAttribute 等方法直接操控DOM元素)，<strong>需要明確的指令和操作達到所需結果</strong>，這種方式又稱為<code>指令式渲染（Imperative Rendering）</code>。</p><h3 id="比較" tabindex="-1">比較 <a class="header-anchor" href="#比較" aria-label="Permalink to &quot;比較&quot;">​</a></h3><table><thead><tr><th></th><th>指令式</th><th>宣告式</th></tr></thead><tbody><tr><td>概念</td><td>怎麼做<br>(明確撰寫每一個操作和更新)</td><td>做什麼<br>(定義UI的狀態和結構)</td></tr><tr><td>用於</td><td>MVC、傳統 JS DOM 操作</td><td>現代前端框架(Vue...etc.)</td></tr><tr><td>DOM 操作</td><td>手動</td><td>自動</td></tr><tr><td>維護</td><td>困難、易出錯、難以跟蹤狀態、不易預測渲染結果</td><td>容易、較不易出錯</td></tr></tbody></table><h2 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-label="Permalink to &quot;Reference&quot;">​</a></h2><ul><li><a href="https://vuejs.org/guide/scaling-up/state-management.html" target="_blank" rel="noreferrer">Vue.js-State Management</a></li></ul>',12),c=[l,n,i,h,s];function m(p,_,v,b,V,u){return r(),o("div",null,c)}const g=a(d,[["render",m]]);export{f as __pageData,g as default};