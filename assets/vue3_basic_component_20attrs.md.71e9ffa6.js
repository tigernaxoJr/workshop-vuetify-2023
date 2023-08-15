import{_ as s,o as a,c as l,U as n}from"./chunks/framework.2939a8e5.js";const h=JSON.parse('{"title":"屬性綁定","description":"","frontmatter":{},"headers":[],"relativePath":"vue3/basic/component/20attrs.md","filePath":"vue3/basic/component/20attrs.md"}'),o={name:"vue3/basic/component/20attrs.md"},p=n(`<h1 id="屬性綁定" tabindex="-1">屬性綁定 <a class="header-anchor" href="#屬性綁定" aria-label="Permalink to &quot;屬性綁定&quot;">​</a></h1><h2 id="命名規則" tabindex="-1">命名規則 <a class="header-anchor" href="#命名規則" aria-label="Permalink to &quot;命名規則&quot;">​</a></h2><p>以 camelCase 命名的 props 在上層組件可以以 kebab-case(建議的方式) 或 camelCase 的命名方式傳遞 props。</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-fiEFP" id="tab-2FfpPNJ" checked="checked"><label for="tab-2FfpPNJ">kebab-case</label><input type="radio" name="group-fiEFP" id="tab-br5y7LQ"><label for="tab-br5y7LQ">camelCase</label></div><div class="blocks"><div class="language-html active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">my-component</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:greeting-message</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">my-component</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">my-component</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:greetingMessage</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">my-component</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></div></div><h2 id="基本語法" tabindex="-1">基本語法 <a class="header-anchor" href="#基本語法" aria-label="Permalink to &quot;基本語法&quot;">​</a></h2><p>綁定 html 屬性：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-WisFT" id="tab-m7WoQJJ" checked="checked"><label for="tab-m7WoQJJ">使用 Directive</label><input type="radio" name="group-WisFT" id="tab-0tf020Q"><label for="tab-0tf020Q">簡寫</label></div><div class="blocks"><div class="language-html active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-bind:id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dynamicId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-on:click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">doSomething</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> ... </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dynamicId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">doSomething</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> ... </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></div></div><h2 id="物件綁定" tabindex="-1">物件綁定 <a class="header-anchor" href="#物件綁定" aria-label="Permalink to &quot;物件綁定&quot;">​</a></h2><p>下面兩者等價：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-JI7se" id="tab-49oAbhh" checked="checked"><label for="tab-49oAbhh">個別綁定</label><input type="radio" name="group-JI7se" id="tab-2rgIuTL"><label for="tab-2rgIuTL">物件綁定</label></div><div class="blocks"><div class="language-html active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">obj.id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">obj.class</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">container</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">class</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">wrapper</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-bind</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">obj</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">container</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">class</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">wrapper</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></div></div><h2 id="動態綁定" tabindex="-1">動態綁定 <a class="header-anchor" href="#動態綁定" aria-label="Permalink to &quot;動態綁定&quot;">​</a></h2><p>可依照不同情況將值綁定到不同屬性/事件：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!--attrName, eventName 可以是表達式--&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:[</span><span style="color:#C792EA;">attrName</span><span style="color:#89DDFF;">]=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> ... </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@[</span><span style="color:#C792EA;">eventName</span><span style="color:#89DDFF;">]=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">doSomething</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="boolean-屬性" tabindex="-1">Boolean 屬性 <a class="header-anchor" href="#boolean-屬性" aria-label="Permalink to &quot;Boolean 屬性&quot;">​</a></h2><p>例如要判斷 disable 狀態，可以使用 boolean attributes，使用 <a href="https://developer.mozilla.org/en-US/docs/Glossary/Truthy" target="_blank" rel="noreferrer">truthy value</a> 條件判斷，但有<strong>例外</strong>：空字串視為 true。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:disabled</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">isButtonDisabled</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Button</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>如果要判斷空字串為 false，最好的方法是先轉換成 true/false：</p><ul><li>!&#39;&#39; (<code>true</code>)</li><li>!!&#39;&#39; (<code>false</code>)</li></ul><h2 id="v-if-v-show" tabindex="-1">v-if/v-show <a class="header-anchor" href="#v-if-v-show" aria-label="Permalink to &quot;v-if/v-show&quot;">​</a></h2><ul><li>v-if：元件在屬性值為 true 才會渲染</li><li>v-show：元件渲染，在屬性值為 true 才會顯示</li></ul><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">seen</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Now you see me</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2><p><img src="https://vuejs.org/assets/directive.69c37117.png" alt=""><a href="https://vuejs.org/guide/essentials/event-handling.html#event-modifiers" target="_blank" rel="noreferrer">事件修飾符</a></p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">form</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">submit</span><span style="color:#A6ACCD;">.</span><span style="color:#C792EA;">prevent</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">onSubmit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">...</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">form</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p><a href="https://vuejs.org/guide/essentials/event-handling.html#key-modifiers" target="_blank" rel="noreferrer">按鍵修飾符</a></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;input @keyup.enter=&quot;submit&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- Alt + Enter --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;input @keyup.alt.enter=&quot;clear&quot; /&gt;</span></span></code></pre></div><h2 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-label="Permalink to &quot;Reference&quot;">​</a></h2><ul><li><a href="https://vuejs.org/guide/essentials/template-syntax.html" target="_blank" rel="noreferrer">Vue.js-Template Syntax</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Glossary/Truthy" target="_blank" rel="noreferrer">MDN-Truthy</a></li></ul>`,28),e=[p];function t(c,r,D,F,y,i){return a(),l("div",null,e)}const u=s(o,[["render",t]]);export{h as __pageData,u as default};
