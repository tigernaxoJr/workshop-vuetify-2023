import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.7fc1a69d.js";const h=JSON.parse('{"title":"專案設置","description":"","frontmatter":{},"headers":[],"relativePath":"workshop/project/configure.md","filePath":"workshop/project/configure.md"}'),o={name:"workshop/project/configure.md"},p=l(`<h1 id="專案設置" tabindex="-1">專案設置 <a class="header-anchor" href="#專案設置" aria-label="Permalink to &quot;專案設置&quot;">​</a></h1><h2 id="vite-server-proxy" tabindex="-1">Vite Server Proxy <a class="header-anchor" href="#vite-server-proxy" aria-label="Permalink to &quot;Vite Server Proxy&quot;">​</a></h2><p><code>vite.config.js</code> 裡面找到 <code>server</code>，下面的設置會使 <code>axios.get(&#39;/api/A&#39;)</code> 等價於 <code>axios.get(&#39;http://localhost:4567/api/A&#39;)</code>，避免前端開發時會遇到的跨域(CORS)問題。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">server</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">port</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">proxy</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// http://localhost:3000/api -&gt; http://localhost:4567api/</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;/api&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;http://localhost:4567&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">server</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">port</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">proxy</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// http://localhost:3000/api -&gt; http://localhost:4567api/</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;/api&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;http://localhost:4567&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span></code></pre></div><h2 id="linting-formating" tabindex="-1">Linting/Formating <a class="header-anchor" href="#linting-formating" aria-label="Permalink to &quot;Linting/Formating&quot;">​</a></h2><h3 id="eslintrc-js" tabindex="-1">.eslintrc.js <a class="header-anchor" href="#eslintrc-js" aria-label="Permalink to &quot;.eslintrc.js&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  extends: [</span><span style="color:#9ECBFF;">&quot;plugin:vue/essential&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;eslint:recommended&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;@vue/prettier&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  parserOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    parser: </span><span style="color:#9ECBFF;">&quot;babel-eslint&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  rules: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    semi: [</span><span style="color:#9ECBFF;">&quot;error&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;always&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;no-console&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;off&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  extends: [</span><span style="color:#032F62;">&quot;plugin:vue/essential&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;eslint:recommended&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;@vue/prettier&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  parserOptions: {</span></span>
<span class="line"><span style="color:#24292E;">    parser: </span><span style="color:#032F62;">&quot;babel-eslint&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  rules: {</span></span>
<span class="line"><span style="color:#24292E;">    semi: [</span><span style="color:#032F62;">&quot;error&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;always&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;no-console&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;off&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h3 id="prettierrc-js" tabindex="-1">.prettierrc.js <a class="header-anchor" href="#prettierrc-js" aria-label="Permalink to &quot;.prettierrc.js&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  semi: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  singleQuote: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  arrowParens: </span><span style="color:#9ECBFF;">&quot;avoid&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  semi: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  singleQuote: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  arrowParens: </span><span style="color:#032F62;">&quot;avoid&quot;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h2 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-label="Permalink to &quot;Reference&quot;">​</a></h2><ul><li><a href="https://vitejs.dev/config/" target="_blank" rel="noreferrer">vite-config</a></li></ul>`,11),e=[p];function t(r,c,i,E,y,u){return a(),n("div",null,e)}const F=s(o,[["render",t]]);export{h as __pageData,F as default};