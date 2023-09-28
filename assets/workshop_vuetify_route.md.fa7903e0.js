import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.fb95d6d7.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"workshop/vuetify/route.md","filePath":"workshop/vuetify/route.md"}'),p={name:"workshop/vuetify/route.md"},o=l(`<h2 id="掛載路由點" tabindex="-1">掛載路由點 <a class="header-anchor" href="#掛載路由點" aria-label="Permalink to &quot;掛載路由點&quot;">​</a></h2><p>設置 <code>&lt;router-view&gt;</code>、<code>&lt;router-link&gt;</code></p><p>子路由會顯示在 <code>&lt;router-view&gt;&lt;/router-view&gt;</code> 裡面，在 <code>App.vue</code> 裡面設置顯示根路由。 <code>src/App.vue</code> 主頁面</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">router-view</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">router-view</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="路由設置" tabindex="-1">路由設置 <a class="header-anchor" href="#路由設置" aria-label="Permalink to &quot;路由設置&quot;">​</a></h2><p><code>src/router.index.js</code></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createRouter, createWebHistory } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue-router&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">routes</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    path: </span><span style="color:#9ECBFF;">&#39;/Master&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@/layouts/MasterLayout.vue&#39;</span><span style="color:#E1E4E8;">), </span><span style="color:#6A737D;">// 新增這行</span></span>
<span class="line"><span style="color:#E1E4E8;">    children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        path: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;MasterHome&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@/views/MasterHome.vue&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 新增 Search 頁面路由設置</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        path: </span><span style="color:#9ECBFF;">&#39;Page1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;MainPage1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 動態載入(Lazy Loading)語法</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@/views/MainPage1.vue&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    path: </span><span style="color:#9ECBFF;">&#39;/Detail&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@/layouts/DetailLayout.vue&#39;</span><span style="color:#E1E4E8;">), </span><span style="color:#6A737D;">// 新增這行</span></span>
<span class="line"><span style="color:#E1E4E8;">    children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        path: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;DetailHome&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@/views/DetailHome.vue&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        path: </span><span style="color:#9ECBFF;">&#39;Page1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;DetailPage1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@/views/DetailPage1.vue&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">router</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createRouter</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  history: </span><span style="color:#B392F0;">createWebHistory</span><span style="color:#E1E4E8;">(p<wbr>rocess.env.</span><span style="color:#79B8FF;">BASE_URL</span><span style="color:#E1E4E8;">), </span></span>
<span class="line"><span style="color:#E1E4E8;">  routes,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> router;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createRouter, createWebHistory } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue-router&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    path: </span><span style="color:#032F62;">&#39;/Master&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@/layouts/MasterLayout.vue&#39;</span><span style="color:#24292E;">), </span><span style="color:#6A737D;">// 新增這行</span></span>
<span class="line"><span style="color:#24292E;">    children: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        path: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;MasterHome&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@/views/MasterHome.vue&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 新增 Search 頁面路由設置</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        path: </span><span style="color:#032F62;">&#39;Page1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;MainPage1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 動態載入(Lazy Loading)語法</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@/views/MainPage1.vue&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    path: </span><span style="color:#032F62;">&#39;/Detail&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@/layouts/DetailLayout.vue&#39;</span><span style="color:#24292E;">), </span><span style="color:#6A737D;">// 新增這行</span></span>
<span class="line"><span style="color:#24292E;">    children: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        path: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;DetailHome&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@/views/DetailHome.vue&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        path: </span><span style="color:#032F62;">&#39;Page1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;DetailPage1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@/views/DetailPage1.vue&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">router</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createRouter</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  history: </span><span style="color:#6F42C1;">createWebHistory</span><span style="color:#24292E;">(p<wbr>rocess.env.</span><span style="color:#005CC5;">BASE_URL</span><span style="color:#24292E;">), </span></span>
<span class="line"><span style="color:#24292E;">  routes,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> router;</span></span></code></pre></div><h2 id="路由定義" tabindex="-1">路由定義 <a class="header-anchor" href="#路由定義" aria-label="Permalink to &quot;路由定義&quot;">​</a></h2><h3 id="具名路由" tabindex="-1">具名路由 <a class="header-anchor" href="#具名路由" aria-label="Permalink to &quot;具名路由&quot;">​</a></h3><h3 id="巢狀路由" tabindex="-1">巢狀路由 <a class="header-anchor" href="#巢狀路由" aria-label="Permalink to &quot;巢狀路由&quot;">​</a></h3><h2 id="路由參數" tabindex="-1">路由參數 <a class="header-anchor" href="#路由參數" aria-label="Permalink to &quot;路由參數&quot;">​</a></h2><h2 id="程式導航" tabindex="-1">程式導航 <a class="header-anchor" href="#程式導航" aria-label="Permalink to &quot;程式導航&quot;">​</a></h2><h2 id="路由守衛" tabindex="-1">路由守衛 <a class="header-anchor" href="#路由守衛" aria-label="Permalink to &quot;路由守衛&quot;">​</a></h2><h2 id="router-link-router-view" tabindex="-1">router-link/router-view <a class="header-anchor" href="#router-link-router-view" aria-label="Permalink to &quot;router-link/router-view&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;https://unpkg.com/vue@3&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;https://unpkg.com/vue-router@4&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;h1&gt;Hello App!&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;p&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;!-- use the router-link component for navigation. --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;!-- specify the link by passing the \`to\` prop. --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;!-- \`&lt;router-link&gt;\` will render an \`&lt;a&gt;\` tag with the correct \`href\` attribute --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;router-link to=&quot;/&quot;&gt;Go to Home&lt;/router-link&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;router-link to=&quot;/about&quot;&gt;Go to About&lt;/router-link&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/p&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;!-- route outlet --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;!-- component matched by the route will render here --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;router-view&gt;&lt;/router-view&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;https://unpkg.com/vue@3&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;https://unpkg.com/vue-router@4&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;h1&gt;Hello App!&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;p&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;!-- use the router-link component for navigation. --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;!-- specify the link by passing the \`to\` prop. --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;!-- \`&lt;router-link&gt;\` will render an \`&lt;a&gt;\` tag with the correct \`href\` attribute --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;router-link to=&quot;/&quot;&gt;Go to Home&lt;/router-link&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;router-link to=&quot;/about&quot;&gt;Go to About&lt;/router-link&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;!-- route outlet --&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;!-- component matched by the route will render here --&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;router-view&gt;&lt;/router-view&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="多-router-view" tabindex="-1">多 router-view <a class="header-anchor" href="#多-router-view" aria-label="Permalink to &quot;多 router-view&quot;">​</a></h3><h3 id="在其他地方-ex-store-取得-router-route-的方法" tabindex="-1">在其他地方(ex: store)取得 Router, route 的方法 <a class="header-anchor" href="#在其他地方-ex-store-取得-router-route-的方法" aria-label="Permalink to &quot;在其他地方(ex: store)取得 Router, route 的方法&quot;">​</a></h3><h2 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-label="Permalink to &quot;Reference&quot;">​</a></h2><ul><li><a href="https://router.vuejs.org/" target="_blank" rel="noreferrer">vue router</a></li></ul>`,19),e=[o];function t(r,c,E,y,i,u){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{g as __pageData,d as default};
