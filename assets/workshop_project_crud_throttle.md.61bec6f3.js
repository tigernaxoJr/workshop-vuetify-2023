import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.15f172dd.js";const d=JSON.parse('{"title":"即時查詢","description":"","frontmatter":{},"headers":[],"relativePath":"workshop/project/crud/throttle.md","filePath":"workshop/project/crud/throttle.md"}'),p={name:"workshop/project/crud/throttle.md"},o=l(`<h1 id="即時查詢" tabindex="-1">即時查詢 <a class="header-anchor" href="#即時查詢" aria-label="Permalink to &quot;即時查詢&quot;">​</a></h1><h2 id="節流與防抖" tabindex="-1">節流與防抖 <a class="header-anchor" href="#節流與防抖" aria-label="Permalink to &quot;節流與防抖&quot;">​</a></h2><p>節流（throttle）與防抖（debounce）是兩種常見的前端性能優化技術，用於處理頻繁觸發的事件，如滾動事件、鼠標移動事件或輸入框內容改變事件等等，減少事件處理函式被呼叫的次數，提升用戶體驗和網頁性能。</p><ul><li>防抖(Debounce)：多次觸發視為一次事件，並延遲執行。</li><li>節流(throttle)：在一段時間內僅執行一次，以控制執行頻率。</li></ul><p><a href="https://ithelp.ithome.com.tw/articles/10297948" target="_blank" rel="noreferrer">借用一下別人的圖</a></p><h2 id="防抖-debounce" tabindex="-1">防抖（Debounce） <a class="header-anchor" href="#防抖-debounce" aria-label="Permalink to &quot;防抖（Debounce）&quot;">​</a></h2><p>&quot;Debounce&quot; 概念來自於按鈕開關彈跳（bounce），按鈕按下時，由於物理原因可能會彈跳幾次，但我們只想在最終的穩定狀態下處理這個事件。</p><p>在網路開發中，&quot;Debounce&quot; 將此概念應用於制事件處理頻率，避免過多的計算：設定時間間隔（等待時間），在這個時間間隔內如果同樣的事件再次觸發，則重新計時。只有在等待時間內沒有新的事件觸發時，才會執行相關的處理函數。</p><p>這對於一些情況非常有用，例如：</p><ul><li>搜索欄自動完成： 在用戶輸入時，僅在他們停頓一段時間後才觸發實際的搜索請求，以減少不必要的請求。</li><li>視窗大小調整： 在視窗大小調整時，僅在調整停止一段時間後，重新計算佈局和更新內容。</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 防抖函數的實現</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">debounce</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">func</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">delay</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> timer;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">clearTimeout</span><span style="color:#E1E4E8;">(timer);</span></span>
<span class="line"><span style="color:#E1E4E8;">    timer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      func.</span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, args);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, delay);</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 用於處理輸入框內容改變事件的處理函數</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleInputChange</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;輸入框內容改變事件處理中...&#39;</span><span style="color:#E1E4E8;">, event.target.value);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用防抖函數來綁定處理函數</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">debouncedInputChange</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">debounce</span><span style="color:#E1E4E8;">(handleInputChange, </span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 監聽輸入框內容改變事件，但實際上只有在用戶停止輸入500毫秒後才會執行一次處理函數</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">inputElement</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;inputElement&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">inputElement.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;input&#39;</span><span style="color:#E1E4E8;">, debouncedInputChange);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 防抖函數的實現</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">debounce</span><span style="color:#24292E;">(</span><span style="color:#E36209;">func</span><span style="color:#24292E;">, </span><span style="color:#E36209;">delay</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> timer;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">...</span><span style="color:#E36209;">args</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">clearTimeout</span><span style="color:#24292E;">(timer);</span></span>
<span class="line"><span style="color:#24292E;">    timer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      func.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, args);</span></span>
<span class="line"><span style="color:#24292E;">    }, delay);</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 用於處理輸入框內容改變事件的處理函數</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleInputChange</span><span style="color:#24292E;">(</span><span style="color:#E36209;">event</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;輸入框內容改變事件處理中...&#39;</span><span style="color:#24292E;">, event.target.value);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用防抖函數來綁定處理函數</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">debouncedInputChange</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">debounce</span><span style="color:#24292E;">(handleInputChange, </span><span style="color:#005CC5;">500</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 監聽輸入框內容改變事件，但實際上只有在用戶停止輸入500毫秒後才會執行一次處理函數</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">inputElement</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;inputElement&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">inputElement.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;input&#39;</span><span style="color:#24292E;">, debouncedInputChange);</span></span></code></pre></div><h2 id="節流-throttle" tabindex="-1">節流（Throttle） <a class="header-anchor" href="#節流-throttle" aria-label="Permalink to &quot;節流（Throttle）&quot;">​</a></h2><p>與 &quot;Debounce&quot; 類似，&quot;Throttle&quot; 也用於處理連續觸發的事件，但它的方法有所不同。 &quot;Throttle&quot; 的概念類似於自來水管道的節流閥，限制流量。在特定時間間隔內，無論事件觸發了多少次，只執行一次相關的處理函數。這可以有效地減少事件處理的次數，從而避免性能問題或過多的處理。 &quot;Throttle&quot; 在一些情況下非常有用，例如：</p><ul><li>滾動：控制不斷觸發的滾動事件處理頻率。</li><li>元件拖拽事件處理：控制不斷觸發的拖曳事件處理頻率。</li><li>鍵盤輸入事件：避免用戶不斷輸入造成發送過多請求。</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 節流函數的實現</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">throttle</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">func</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">delay</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> lastTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">currentTime</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getTime</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (currentTime </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> lastTime </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> delay) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      func.</span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, args);</span></span>
<span class="line"><span style="color:#E1E4E8;">      lastTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> currentTime;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 用於處理滾動事件的處理函數</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleScroll</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;滾動事件處理中...&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用節流函數來綁定處理函數</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">throttledScroll</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">throttle</span><span style="color:#E1E4E8;">(handleScroll, </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 監聽滾動事件，但實際上只有每隔1000毫秒（1秒）才會執行一次處理函數</span></span>
<span class="line"><span style="color:#E1E4E8;">window.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;scroll&#39;</span><span style="color:#E1E4E8;">, throttledScroll);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 節流函數的實現</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">throttle</span><span style="color:#24292E;">(</span><span style="color:#E36209;">func</span><span style="color:#24292E;">, </span><span style="color:#E36209;">delay</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> lastTime </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">...</span><span style="color:#E36209;">args</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">currentTime</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getTime</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (currentTime </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> lastTime </span><span style="color:#D73A49;">&gt;=</span><span style="color:#24292E;"> delay) {</span></span>
<span class="line"><span style="color:#24292E;">      func.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, args);</span></span>
<span class="line"><span style="color:#24292E;">      lastTime </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> currentTime;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 用於處理滾動事件的處理函數</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleScroll</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;滾動事件處理中...&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用節流函數來綁定處理函數</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">throttledScroll</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">throttle</span><span style="color:#24292E;">(handleScroll, </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 監聽滾動事件，但實際上只有每隔1000毫秒（1秒）才會執行一次處理函數</span></span>
<span class="line"><span style="color:#24292E;">window.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;scroll&#39;</span><span style="color:#24292E;">, throttledScroll);</span></span></code></pre></div><h2 id="練習" tabindex="-1">練習 <a class="header-anchor" href="#練習" aria-label="Permalink to &quot;練習&quot;">​</a></h2><p>嘗試將病患查詢欄的輸入框加入內容改變事件處理函數，並使用節流函數控制處理頻率。</p><ul><li>[事件] 查詢輸入事件，觸發節流函數對後端查詢，再將查詢結果更新至資料清單。</li></ul>`,18),e=[o];function t(c,r,E,y,i,u){return n(),a("div",null,e)}const h=s(p,[["render",t]]);export{d as __pageData,h as default};