import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.fb95d6d7.js";const m=JSON.parse('{"title":"Pinia","description":"","frontmatter":{},"headers":[],"relativePath":"workshop/vue3/pinia.md","filePath":"workshop/vue3/pinia.md"}'),o={name:"workshop/vue3/pinia.md"},p=l(`<h1 id="pinia" tabindex="-1">Pinia <a class="header-anchor" href="#pinia" aria-label="Permalink to &quot;Pinia&quot;">​</a></h1><p>Pinia 是 Vue 的一個狀態管理庫，用來在組件/頁面之間共享狀態。好處：</p><ul><li>Devtools 支持</li><li>服務器端渲染(SSR)支持</li><li>跟蹤 action、mutation 的時間軸</li><li>... 其他</li></ul><p>P.S. 在服務器端渲染(SSR; Server Side Rendering)應用程式中，通過簡單的 export const state = reactive({}) 共享全局狀態則會使應用程序暴露於安全漏洞。</p><iframe src="https://codesandbox.io/embed/pinia-playground-forked-jdf5s7?fontsize=14&amp;hidenavigation=1&amp;theme=dark" style="width:100%;height:500px;border:0;border-radius:4px;overflow:hidden;" title="pinia-playground (forked)" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe><h2 id="比較-vuex" tabindex="-1">比較 VueX <a class="header-anchor" href="#比較-vuex" aria-label="Permalink to &quot;比較 VueX&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-DvThS" id="tab-5E9f50j" checked="checked"><label for="tab-5E9f50j">vuex</label><input type="radio" name="group-DvThS" id="tab-MobKLOv"><label for="tab-MobKLOv">pinia</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// count module</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">count</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;"> state: {</span></span>
<span class="line"><span style="color:#E1E4E8;">   count: </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;"> mutations: {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">increment</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#6A737D;">// 变更状态</span></span>
<span class="line"><span style="color:#E1E4E8;">     state.count</span><span style="color:#F97583;">++</span></span>
<span class="line"><span style="color:#E1E4E8;">   }</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// store</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createStore } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vuex&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { count } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;modules/count&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">store</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createStore</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;"> modules: {</span></span>
<span class="line"><span style="color:#E1E4E8;">   count: count,</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">// 其他 modules...</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// comonent 內引用</span></span>
<span class="line"><span style="color:#E1E4E8;">store.</span><span style="color:#B392F0;">commit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;count/increment&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// count module</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">count</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;"> state: {</span></span>
<span class="line"><span style="color:#24292E;">   count: </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;"> mutations: {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">increment</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">state</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#6A737D;">// 变更状态</span></span>
<span class="line"><span style="color:#24292E;">     state.count</span><span style="color:#D73A49;">++</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// store</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createStore } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vuex&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { count } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;modules/count&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">store</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createStore</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;"> modules: {</span></span>
<span class="line"><span style="color:#24292E;">   count: count,</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">// 其他 modules...</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// comonent 內引用</span></span>
<span class="line"><span style="color:#24292E;">store.</span><span style="color:#6F42C1;">commit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;count/increment&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// stores/counter.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineStore } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;pinia&#39;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">useCounterStore</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineStore</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;counter&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;"> { </span><span style="color:#B392F0;">state</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({ count: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> }) }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 引用</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useCounterStore } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/stores/counter&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">counter</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useCounterStore</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">counter.count</span><span style="color:#F97583;">++</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// stores/counter.js</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineStore } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;pinia&#39;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">useCounterStore</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineStore</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;counter&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;"> { </span><span style="color:#6F42C1;">state</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> ({ count: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> }) }</span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 引用</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { useCounterStore } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/stores/counter&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">counter</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useCounterStore</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">counter.count</span><span style="color:#D73A49;">++</span></span></code></pre></div></div></div><ul><li>原生支援 Typescript</li><li>可以直接從 store 取得任何的 State (不需要 mapState... 等等動作)</li><li>移除惱人的 Mutation，可直接引入函數使用 action，不需要再使用 <strong>Magic String</strong> 去 dispatch。</li><li>可以在 actions 中使用 async/await 取得非同步資料後更改 State</li><li>可以對 store state 直接修改，甚至可以直接綁定 v-model</li><li>可以設置多個 store 且無需設置 namespaced，所有的 store module 都已自動 namespaced</li></ul><p><a href="https://github.com/vuejs/pinia/discussions/1264" target="_blank" rel="noreferrer">https://github.com/vuejs/pinia/discussions/1264</a><a href="https://github.com/vuejs/pinia/discussions/1264#discussioncomment-5802335" target="_blank" rel="noreferrer">https://github.com/vuejs/pinia/discussions/1264#discussioncomment-5802335</a> you can change state from anywhere you want But keep in mind that if you keep all the updates in one place, it will be much easier to manage and maintain the code in the future.</p><h2 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-label="Permalink to &quot;Reference&quot;">​</a></h2><ul><li><a href="https://pinia.vuejs.org/introduction.html" target="_blank" rel="noreferrer">Pinia-Introduction</a></li><li><a href="https://blog.devgenius.io/how-to-use-pinia-with-composition-script-setup-2352558fb06c" target="_blank" rel="noreferrer">Medium-How to use pinia with composition script setup</a></li></ul>`,11),e=[p];function t(c,r,i,E,y,u){return n(),a("div",null,e)}const h=s(o,[["render",t]]);export{m as __pageData,h as default};
