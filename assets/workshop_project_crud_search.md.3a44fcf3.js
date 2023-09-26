import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.fb95d6d7.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"workshop/project/crud/search.md","filePath":"workshop/project/crud/search.md"}'),e={name:"workshop/project/crud/search.md"},t=l(`<h2 id="新增搜尋區" tabindex="-1">新增搜尋區 <a class="header-anchor" href="#新增搜尋區" aria-label="Permalink to &quot;新增搜尋區&quot;">​</a></h2><h3 id="rwd" tabindex="-1">RWD <a class="header-anchor" href="#rwd" aria-label="Permalink to &quot;RWD&quot;">​</a></h3><table><thead><tr><th>code</th><th>range</th></tr></thead><tbody><tr><td>xs</td><td>&lt;600px</td></tr><tr><td>sm</td><td>600px&gt;&lt;960px</td></tr><tr><td>md</td><td>960px&gt;&lt;1280px</td></tr><tr><td>lg</td><td>1280px&gt;&lt;1920px</td></tr><tr><td>xl</td><td>1920px&gt;&lt;2560px</td></tr><tr><td>xxl</td><td>&gt;2560px</td></tr></tbody></table><h2 id="table" tabindex="-1">Table <a class="header-anchor" href="#table" aria-label="Permalink to &quot;Table&quot;">​</a></h2><h2 id="預設樣式" tabindex="-1">預設樣式 <a class="header-anchor" href="#預設樣式" aria-label="Permalink to &quot;預設樣式&quot;">​</a></h2><p>統一調整預設樣式，避免專案元素充滿相同屬性綁定。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// src/plugins/vuetify.js</span></span>
<span class="line"><span style="color:#B392F0;">createVuetify</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  defaults: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    VCard: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      VBtn: { variant: </span><span style="color:#9ECBFF;">&#39;outlined&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">	  </span><span style="color:#6A737D;">/* 以下都是合法的作法</span></span>
<span class="line"><span style="color:#6A737D;">      class: &#39;text-none&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      style: &#39;text-transform: none;&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      style: [{ textTransform: &#39;none&#39; }],</span></span>
<span class="line"><span style="color:#6A737D;">	  */</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// 巢狀的寫法也合法，可以指定深層元素預設值</span></span>
<span class="line"><span style="color:#E1E4E8;">	MyComponent2: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      MyComponent: { foo: </span><span style="color:#9ECBFF;">&#39;baz&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// src/plugins/vuetify.js</span></span>
<span class="line"><span style="color:#6F42C1;">createVuetify</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  defaults: {</span></span>
<span class="line"><span style="color:#24292E;">    VCard: {</span></span>
<span class="line"><span style="color:#24292E;">      VBtn: { variant: </span><span style="color:#032F62;">&#39;outlined&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">	  </span><span style="color:#6A737D;">/* 以下都是合法的作法</span></span>
<span class="line"><span style="color:#6A737D;">      class: &#39;text-none&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      style: &#39;text-transform: none;&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">      style: [{ textTransform: &#39;none&#39; }],</span></span>
<span class="line"><span style="color:#6A737D;">	  */</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// 巢狀的寫法也合法，可以指定深層元素預設值</span></span>
<span class="line"><span style="color:#24292E;">	MyComponent2: {</span></span>
<span class="line"><span style="color:#24292E;">      MyComponent: { foo: </span><span style="color:#032F62;">&#39;baz&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-label="Permalink to &quot;Reference&quot;">​</a></h2><ul><li><a href="https://vuetifyjs.com/en/features/global-configuration/#contextual-defaults" target="_blank" rel="noreferrer">Vuetify-Contextual Defaults</a></li></ul>`,9),p=[t];function o(r,c,i,d,y,E){return a(),n("div",null,p)}const f=s(e,[["render",o]]);export{u as __pageData,f as default};
