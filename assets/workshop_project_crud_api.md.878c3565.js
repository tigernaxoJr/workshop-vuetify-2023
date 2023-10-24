import{c as l}from"./chunks/index.ebcb5a10.js";import{u as r}from"./chunks/store.323a0733.js";import{j as y,z as E,o as i,c as d,y as F,Q as g}from"./chunks/framework.15f172dd.js";import"./chunks/commonjsHelpers.23102255.js";const h=g(`<h2 id="api-製作" tabindex="-1">api 製作 <a class="header-anchor" href="#api-製作" aria-label="Permalink to &quot;api 製作&quot;">​</a></h2><p>安裝 ajax 工具 axios 。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-R2KPP" id="tab-OgRe85W" checked="checked"><label for="tab-OgRe85W">yarn</label><input type="radio" name="group-R2KPP" id="tab-K8u5KCR"><label for="tab-K8u5KCR">npm</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">axios</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">axios</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">axios</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">axios</span></span></code></pre></div></div></div><h2 id="製作-api-庫" tabindex="-1">製作 api 庫 <a class="header-anchor" href="#製作-api-庫" aria-label="Permalink to &quot;製作 api 庫&quot;">​</a></h2><p>Swagger 參考頁面: <span id="swaggerUrl"></span></p><p>src/api/patient.js:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// patient.js</span></span>
<span class="line"><span style="color:#6A737D;">// todo 參考 swagger 頁面完成 CRUD</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">usePatientRepo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ( api ){</span></span>
<span class="line"><span style="color:#E1E4E8;">   api.</span><span style="color:#B392F0;">AddPatient</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> { }</span></span>
<span class="line"><span style="color:#E1E4E8;">   api.</span><span style="color:#B392F0;">GetPatient</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">id</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> { }</span></span>
<span class="line"><span style="color:#E1E4E8;">   api.</span><span style="color:#B392F0;">GetPatientPagination</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> { }</span></span>
<span class="line"><span style="color:#E1E4E8;">   api.</span><span style="color:#B392F0;">UpdatetPatient</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> { }</span></span>
<span class="line"><span style="color:#E1E4E8;">   api.</span><span style="color:#B392F0;">DeletetPatient</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">id</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> { }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// patient.js</span></span>
<span class="line"><span style="color:#6A737D;">// todo 參考 swagger 頁面完成 CRUD</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">usePatientRepo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ( api ){</span></span>
<span class="line"><span style="color:#24292E;">   api.</span><span style="color:#6F42C1;">AddPatient</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">item</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> { }</span></span>
<span class="line"><span style="color:#24292E;">   api.</span><span style="color:#6F42C1;">GetPatient</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">id</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> { }</span></span>
<span class="line"><span style="color:#24292E;">   api.</span><span style="color:#6F42C1;">GetPatientPagination</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> { }</span></span>
<span class="line"><span style="color:#24292E;">   api.</span><span style="color:#6F42C1;">UpdatetPatient</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">item</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> { }</span></span>
<span class="line"><span style="color:#24292E;">   api.</span><span style="color:#6F42C1;">DeletetPatient</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">id</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> { }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><code>.env.development</code> 設置開發環境網址</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">VITE_API_URL=&#39;/&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">VITE_API_URL=&#39;/&#39;</span></span></code></pre></div><p><code>.env.production</code> 設置正式環境網址</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">VITE_API_URL=&#39;https://正式上線的網址/&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">VITE_API_URL=&#39;https://正式上線的網址/&#39;</span></span></code></pre></div><p><code>vite.config.js</code> 設置 proxy</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">// ...other config</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">server</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">port</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 加入 proxy</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">proxy</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;/api&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;http://....../api&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">// ...other config</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">server</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">port</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 加入 proxy</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">proxy</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;/api&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;http://....../api&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><code>src/api/index.js</code> 將 api lib 加到實例上</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { usePatientRepo } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./patient&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 設置基礎網址</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">baseURL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.env.</span><span style="color:#79B8FF;">VITE_API_URL</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">api</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> axios.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">({ baseURL })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#B392F0;">usePatientRepo</span><span style="color:#E1E4E8;">(api)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { usePatientRepo } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./patient&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 設置基礎網址</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">baseURL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">meta</span><span style="color:#24292E;">.env.</span><span style="color:#005CC5;">VITE_API_URL</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">api</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> axios.</span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">({ baseURL })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#6F42C1;">usePatientRepo</span><span style="color:#24292E;">(api)</span></span></code></pre></div><h2 id="使用-api" tabindex="-1">使用 api <a class="header-anchor" href="#使用-api" aria-label="Permalink to &quot;使用 api&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> api </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/api&#39;</span></span>
<span class="line"><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">SomeFunction</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">items</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> api.</span><span style="color:#B392F0;">GetPatient</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> api </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/api&#39;</span></span>
<span class="line"><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SomeFunction</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">items</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> api.</span><span style="color:#6F42C1;">GetPatient</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>todo: 頁面透過 api lib 取得 patient</p>`,18),u=[h],_=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"workshop/project/crud/api.md","filePath":"workshop/project/crud/api.md"}'),v={name:"workshop/project/crud/api.md"},B=Object.assign(v,{setup(A){const o=r(),n=[],e=(s,p,t)=>{n.push(F(()=>{const a=l.AES.decrypt(p,o.value).toString(l.enc.Utf8),c=!!a&&a.length>0?t(a):"請輸入正確的密鑰";document.getElementById(s).innerHTML=c}))};return y(()=>{e("swaggerUrl","U2FsdGVkX19acBlVi5NSLDf1Cf4EQN2rn0mxxH259T0Ct8pCtBy5+oJoTnaZh///USnP6iPN1ltMasgR80eZBg==",s=>`<a href="${s}" target="_blank" rel="noreferrer">swagger 參考網址</a>`)}),E(()=>{n.forEach(s=>s())}),(s,p)=>(i(),d("div",null,u))}});export{_ as __pageData,B as default};