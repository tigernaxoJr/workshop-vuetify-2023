import{_ as s,o as n,c as a,U as l}from"./chunks/framework.2939a8e5.js";const A=JSON.parse('{"title":"Vue3 基礎","description":"","frontmatter":{},"headers":[],"relativePath":"vue3/basic/00mvvm.md","filePath":"vue3/basic/00mvvm.md"}'),p={name:"vue3/basic/00mvvm.md"},o=l(`<h1 id="vue3-基礎" tabindex="-1">Vue3 基礎 <a class="header-anchor" href="#vue3-基礎" aria-label="Permalink to &quot;Vue3 基礎&quot;">​</a></h1><h2 id="指令式渲染-vs-宣告式渲染" tabindex="-1">指令式渲染 vs 宣告式渲染 <a class="header-anchor" href="#指令式渲染-vs-宣告式渲染" aria-label="Permalink to &quot;指令式渲染 vs 宣告式渲染&quot;">​</a></h2><p>宣告式渲染和指令式渲染是在前端開發中，針對使用者界面(UI)的創建和更新常用的兩種不同的渲染方式。</p><table><thead><tr><th></th><th>指令式</th><th>宣告式</th></tr></thead><tbody><tr><td>概念</td><td>怎麼做<br>(明確撰寫每一個操作和更新)</td><td>做什麼<br>(定義UI的狀態和結構)</td></tr><tr><td>用於</td><td>傳統DOM操作</td><td>現代前端框架</td></tr><tr><td>DOM 操作</td><td>手動</td><td>自動</td></tr><tr><td>維護</td><td>困難、易出錯、難以跟蹤狀態、不易預測渲染結果</td><td>容易、較不易出錯</td></tr></tbody></table><p>現代前端框架普遍採用宣告式渲染，因為它提供更好的抽象和性能優化，同時減少了手動 DOM 操作(也減少工作量)，讓程式更易於維護和理解。</p><ul><li>指令式：需要手動處理UI的創建和更新過程，容易導致代碼複雜、出錯。</li></ul><div class="info custom-block"><p class="custom-block-title">指令式渲染(Imperative Rendering)</p><p>描述 <strong>&quot;怎麼做&quot;</strong>。開發者需要<strong>明確撰寫每一個操作和更新</strong>，編寫詳細的程式手動控制UI的創建和更新過程，包括UI的創建、添加、更新和刪除。 以下是使用原生JavaScript進行指令式渲染的簡單例子：</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> cnt1: </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cnt1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> 0 </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onclick</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">setCount</span><span style="color:#C3E88D;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cnt1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Increment1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> cnt2: </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cnt2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> 0 </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onclick</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">setCount</span><span style="color:#C3E88D;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cnt2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Increment2</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Total </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">total</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> 0 </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">setCount</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">id</span><span style="color:#89DDFF;">){</span></span>
<span class="line highlighted"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">el</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cnt</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">parseInt</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">textContent</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">textContent</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cnt</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cnt1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">parseInt</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cnt1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">textContent</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cnt2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">parseInt</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cnt2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">textContent</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">total</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">textContent</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cnt1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cnt2</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></div><ul><li>宣告式：開發者只需要關注UI的狀態和結構，而不需要關心具體的更新細節。</li></ul><div class="info custom-block"><p class="custom-block-title">宣告式渲染(Declarative Rendering)</p><p>描述 <strong>&quot;做什麼&quot;</strong>。開發者只需要定義UI的狀態和結構，然後讓框架或庫根據這些定義自動處理UI的創建和更新。</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> cnt1: </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> {{ cnt1 }} </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onclick</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#C3E88D;"> </span><span style="color:#A6ACCD;">cnt1</span><span style="color:#89DDFF;">++&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Increment1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> cnt2: </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> {{ cnt2 }} </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onclick</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;()</span><span style="color:#C3E88D;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#C3E88D;"> </span><span style="color:#A6ACCD;">cnt2</span><span style="color:#89DDFF;">++&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Increment2</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Total </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> {{ cnt1 + cnt2 }} </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> cnt1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> cnt2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></div><h2 id="mvc-vs-mvvm" tabindex="-1">MVC vs MVVM <a class="header-anchor" href="#mvc-vs-mvvm" aria-label="Permalink to &quot;MVC vs MVVM&quot;">​</a></h2><h3 id="mvc-model-view-controller" tabindex="-1">MVC（Model-View-Controller） <a class="header-anchor" href="#mvc-model-view-controller" aria-label="Permalink to &quot;MVC（Model-View-Controller）&quot;">​</a></h3><table><thead><tr><th>Term</th><th>說明</th></tr></thead><tbody><tr><td>Model（模型）</td><td>儲存在應用程式中的狀態(State)或數據。</td></tr><tr><td>View（視圖）</td><td>顯示給用戶看的畫面。</td></tr><tr><td>Controller（控制器）</td><td>處理用戶的輸入和協調Model和View之間的交互： <br> - 監聽用戶輸入事件（例如按鈕點擊）<br> - 根據用戶輸入更新Model的狀態<br> - 控制View的呈現以反映Model的變化</td></tr></tbody></table><h3 id="mvvm-model-view-viewmodel" tabindex="-1">MVVM (Model-View-ViewModel) <a class="header-anchor" href="#mvvm-model-view-viewmodel" aria-label="Permalink to &quot;MVVM (Model-View-ViewModel)&quot;">​</a></h3><p>MVVM 框架下開發者無需手動處理數據更新。而MVC通常需要手動控制視圖和控制器之間的數據傳遞。 在 MVVM 架構中，Model 需要具備反應性(Reactivity)，才能讓 ViewModel 自動更新視圖。 Vue 底層是 proxy，寫程式時可以調用 vue 裡面的 ref、reactive。</p><table><thead><tr><th>Term</th><th>說明</th></tr></thead><tbody><tr><td>Model (模型)</td><td>儲存在 Javascript 裡面的狀態(State)。</td></tr><tr><td>View (視圖)</td><td>顯示給用戶看的畫面(View)。</td></tr><tr><td>ViewModel (視圖模型)</td><td>將 Model 和 View 同步：<br> - 監聽 DOM 事件，自動把受到事件更新的狀態更新到 Model 層。 <br> - 在 Model 改變時渲染出新的 View<br></td></tr></tbody></table><p><img src="https://book.vue.tw/assets/img/1-1-mvvm.febdf1bd.png" alt=""></p><h2 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-label="Permalink to &quot;Reference&quot;">​</a></h2><ul><li><a href="https://vuejs.org/guide/scaling-up/state-management.html" target="_blank" rel="noreferrer">Vue.js-State Management</a></li></ul>`,18),t=[o];function e(r,c,F,D,y,i){return n(),a("div",null,t)}const d=s(p,[["render",e]]);export{A as __pageData,d as default};
