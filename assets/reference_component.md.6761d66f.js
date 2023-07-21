import{_ as s,o as a,c as n,U as e}from"./chunks/framework.c48658f6.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"reference/component.md","filePath":"reference/component.md"}'),t={name:"reference/component.md"},o=e(`<h2 id="sfc" tabindex="-1">SFC <a class="header-anchor" href="#sfc" aria-label="Permalink to &quot;SFC&quot;">​</a></h2><p>SFC 代表「單一檔案元件」（Single File Component）。它是一種 Vue 框架的組織元件的方法。SFC 允許將一個元件的模板、JavaScript 邏輯和樣式，全部放在同一個檔案中，使元件的結構更清晰和可讀。</p><p>SFC 通常包含以下三個區塊：</p><ul><li><p>模板（Template）：這是元件的視覺表示部分，使用 Vue 的模板語法來描述元件的結構和外觀。模板可以包含 HTML 標記和 Vue 的指令，可以綁定資料、處理事件和渲染動態內容。</p></li><li><p>JavaScript 邏輯（Script）：這是元件的行為和邏輯部分，使用 JavaScript 或 TypeScript 來實現。在這個區塊中，可以定義元件的屬性、方法、生命週期鉤子（Lifecycle Hooks）等等。它負責處理元件的邏輯和與其他元件或資料的交互作用。</p></li><li><p>樣式（Style）：這是元件的樣式部分，使用 CSS 或預處理器（如 SASS、Less）來定義元件的外觀和風格。可以在這個區塊中指定元件的樣式規則、類別名稱，或使用 CSS 預處理器的變數和混入。</p></li></ul><h2 id="fallthrough-attributes" tabindex="-1">Fallthrough Attributes <a class="header-anchor" href="#fallthrough-attributes" aria-label="Permalink to &quot;Fallthrough Attributes&quot;">​</a></h2><h3 id="transparent-component" tabindex="-1">Transparent Component <a class="header-anchor" href="#transparent-component" aria-label="Permalink to &quot;Transparent Component&quot;">​</a></h3><p><code>Transparent Component</code> 是一種代理元件的概念，用於統一系統中的樣式，而不需要在每個元件中重複編寫許多屬性。當需要修改整個系統元件的樣式時，可以直接修改透明元件。。</p><h2 id="global-component" tabindex="-1">Global Component <a class="header-anchor" href="#global-component" aria-label="Permalink to &quot;Global Component&quot;">​</a></h2><h3 id="型別檢查支援" tabindex="-1">型別檢查支援 <a class="header-anchor" href="#型別檢查支援" aria-label="Permalink to &quot;型別檢查支援&quot;">​</a></h3><p>Global Component 需定義 GlobalComponents interface 讓 volar 支持 intellisense</p><table><thead><tr><th>種類</th><th>設置</th></tr></thead><tbody><tr><td>Local components</td><td>-</td></tr><tr><td>Built-in components</td><td>-</td></tr><tr><td>原生 HTML 元素</td><td>-</td></tr><tr><td>Global Component</td><td>定義 GlobalComponents interface</td></tr></tbody></table><p>例子：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> VueDatePicker </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vuepic/vue-datepicker</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vuepic/vue-datepicker/dist/main.css</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> TextArea </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@/components/TextArea.vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Btn </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@/components/Btn.vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">module</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vue/runtime-core</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">// Vue 3</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">GlobalComponents</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    Btn</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Btn</span></span>
<span class="line"><span style="color:#F07178;">    TextArea</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">TextArea</span></span>
<span class="line"><span style="color:#F07178;">    VueDatePicker</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VueDatePicker</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><pre><code>https://marketplace.visualstudio.com/items?itemName=Vue.volar#:~:text=Define%20Global%20Components
</code></pre><h2 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-label="Permalink to &quot;Reference&quot;">​</a></h2><ul><li><a href="https://vuejs.org/guide/components/attrs.html" target="_blank" rel="noreferrer">Fallthrough Attributes</a></li></ul>`,16),l=[o];function p(r,c,i,y,F,D){return a(),n("div",null,l)}const h=s(t,[["render",p]]);export{u as __pageData,h as default};
