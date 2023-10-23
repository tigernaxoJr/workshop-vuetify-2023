import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.15f172dd.js";const l="/observer.png",A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"workshop/project/template/init.md","filePath":"workshop/project/template/init.md"}'),o={name:"workshop/project/template/init.md"},e=p('<p>一切要從觀察者模式開始說起。</p><h2 id="觀察者模式" tabindex="-1">觀察者模式 <a class="header-anchor" href="#觀察者模式" aria-label="Permalink to &quot;觀察者模式&quot;">​</a></h2><p>觀察者模式（Observer Design Pattern）是一種設計模式，它允許一個物件（被稱為主題或可觀察者）通知它的所有觀察者（或訂閱者）當它的狀態發生變化時。在我們的案例中，app 就是主題，而頁面元件就是觀察者。我們可以讓 app 維護一個觀察者列表，並且在 app 初始化完畢後通知所有的觀察者執行他們的回調函數。這樣，我們就可以保證頁面元件在 app 初始化完畢後才執行自己的初始化操作。</p><p>P.S. 觀察者模式和訂閱模式不同。 <img src="'+l+`" alt=""></p><h2 id="元件初始化範例" tabindex="-1">元件初始化範例 <a class="header-anchor" href="#元件初始化範例" aria-label="Permalink to &quot;元件初始化範例&quot;">​</a></h2><p>在 vue3 的應用程式中，如何在頁面元件掛載時等待 app 初始化的非同步資訊。這種情況可能發生在以下場景：我們的 app 需要在初始化時進行一些非同步的操作，例如取得驗證後，獲得的使用者 id 及名稱。然而，我們的頁面元件可能會用到這些資訊，例如取得這個使用者與該頁面相關的資料。如果我們直接在頁面元件的 created 或 mounted 鉤子中執行這些操作，可能會發生錯誤，因為 app 還沒有獲得這些資訊。因此，我們需要一種機制來保證頁面元件掛載時 app 已經初始化完畢，或者至少能夠在 app 初始化完畢後執行頁面元件的初始化操作。這就是觀察者模式可以幫助我們解決的問題。<br> 範例：</p><h4 id="app-store" tabindex="-1">app store <a class="header-anchor" href="#app-store" aria-label="Permalink to &quot;app store&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// app.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineStore } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;pinia&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">loadingTags</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">initProcedue</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">afterInitCallBack</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">useAppStore</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineStore</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;app&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">state</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">    inited: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 表示 state 是否已經初始化完畢</span></span>
<span class="line"><span style="color:#E1E4E8;">  }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  getters:{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">loading</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> loadingTags.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  actions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 添加 app 啟動程序，用來向觀察者列表中添加觀察者</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">addInitProcedure</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">func</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      initProcedue.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(func);</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 啟動 app</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      initProcedue.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">x</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">x</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 將 initialized 設為 true，表示 app 已經初始化完畢</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.inited </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      afterInitCallBack.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">x</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">x</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 添加啟動 app 之後要做的事</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">onInited</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">func</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      afterInitCallBack.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(func);</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 加入 loading tag</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">AddLoading</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">      loadingTags.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(key)</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 移除 loading tag</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">RemoveLoading</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">idx</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> loadingTags.</span><span style="color:#B392F0;">indexOf</span><span style="color:#E1E4E8;">(key)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(idx </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) loadingTags.</span><span style="color:#B392F0;">splice</span><span style="color:#E1E4E8;">(idx, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// app.js</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineStore } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;pinia&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">loadingTags</span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">initProcedue</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">afterInitCallBack</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">useAppStore</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineStore</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;app&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">state</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> ({</span></span>
<span class="line"><span style="color:#24292E;">    inited: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 表示 state 是否已經初始化完畢</span></span>
<span class="line"><span style="color:#24292E;">  }),</span></span>
<span class="line"><span style="color:#24292E;">  getters:{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">loading</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> loadingTags.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  actions: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 添加 app 啟動程序，用來向觀察者列表中添加觀察者</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">addInitProcedure</span><span style="color:#24292E;">(</span><span style="color:#E36209;">func</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      initProcedue.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(func);</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 啟動 app</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      initProcedue.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">x</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">x</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 將 initialized 設為 true，表示 app 已經初始化完畢</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.inited </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      afterInitCallBack.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">x</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">x</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 添加啟動 app 之後要做的事</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">onInited</span><span style="color:#24292E;">(</span><span style="color:#E36209;">func</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      afterInitCallBack.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(func);</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 加入 loading tag</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">AddLoading</span><span style="color:#24292E;">(</span><span style="color:#E36209;">key</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">      loadingTags.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(key)</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 移除 loading tag</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">RemoveLoading</span><span style="color:#24292E;">(</span><span style="color:#E36209;">key</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">idx</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> loadingTags.</span><span style="color:#6F42C1;">indexOf</span><span style="color:#24292E;">(key)</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(idx </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) loadingTags.</span><span style="color:#6F42C1;">splice</span><span style="color:#24292E;">(idx, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h4 id="頁面元件" tabindex="-1">頁面元件 <a class="header-anchor" href="#頁面元件" aria-label="Permalink to &quot;頁面元件&quot;">​</a></h4><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { onMounted } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useAppStore } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;store/app.js&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// import { useAuthStore } from &quot;./store/auth&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">appstore</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useAppStore</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">// const authstore = useAuthStore();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">appstore.</span><span style="color:#B392F0;">addInitProcedure</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;我會在 app 初始化後執行 1&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">appstore.</span><span style="color:#B392F0;">addInitProcedure</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;我會在 app 初始化後執行 2&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">onMounted</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">loadingFlag</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  appstore.</span><span style="color:#B392F0;">AddLoading</span><span style="color:#E1E4E8;">(loadingFlag);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// authstore.Authentication(); // 取得驗證</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// authstore.RemoveKey(); // 移除 Key</span></span>
<span class="line"><span style="color:#E1E4E8;">    appstore.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 初始化 app</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// handle error</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(error);</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">finally</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    appstore.</span><span style="color:#B392F0;">RemoveLoading</span><span style="color:#E1E4E8;">(loadingFlag);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { onMounted } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { useAppStore } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;store/app.js&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// import { useAuthStore } from &quot;./store/auth&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">appstore</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useAppStore</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6A737D;">// const authstore = useAuthStore();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">appstore.</span><span style="color:#6F42C1;">addInitProcedure</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;我會在 app 初始化後執行 1&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">appstore.</span><span style="color:#6F42C1;">addInitProcedure</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;我會在 app 初始化後執行 2&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">onMounted</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">loadingFlag</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  appstore.</span><span style="color:#6F42C1;">AddLoading</span><span style="color:#24292E;">(loadingFlag);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">try</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// authstore.Authentication(); // 取得驗證</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// authstore.RemoveKey(); // 移除 Key</span></span>
<span class="line"><span style="color:#24292E;">    appstore.</span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 初始化 app</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">catch</span><span style="color:#24292E;"> (error) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// handle error</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">error</span><span style="color:#24292E;">(error);</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">finally</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    appstore.</span><span style="color:#6F42C1;">RemoveLoading</span><span style="color:#24292E;">(loadingFlag);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,10),t=[e];function c(r,E,y,i,F,d){return n(),a("div",null,t)}const g=s(o,[["render",c]]);export{A as __pageData,g as default};
