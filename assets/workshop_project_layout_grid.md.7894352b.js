import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.7fc1a69d.js";const p="/workshop-vuetify-2023/assets/flex.09e068bc.png",h=JSON.parse('{"title":"網格系統(Grid System)","description":"","frontmatter":{},"headers":[],"relativePath":"workshop/project/layout/grid.md","filePath":"workshop/project/layout/grid.md"}'),o={name:"workshop/project/layout/grid.md"},e=l('<h1 id="網格系統-grid-system" tabindex="-1">網格系統(Grid System) <a class="header-anchor" href="#網格系統-grid-system" aria-label="Permalink to &quot;網格系統(Grid System)&quot;">​</a></h1><p>網格系統用於網頁版面的分割、組織，目前前端UI框架(例如 Bootstrap、Vuetify 等)的網格系統多數採用了Flex布局，三種主要的布局方式分別是：</p><table><thead><tr><th>布局方式</th><th>概念</th><th>相容性</th></tr></thead><tbody><tr><td>Float</td><td>將元素浮動到左側或右側實現多列布局。</td><td>較早的網頁佈局技術，可以支援較古老的瀏覽器(甚至包括IE 9)。</td></tr><tr><td>Flex</td><td>基於「彈性盒子」概念，使得元素在<strong>一個維度</strong>上靈活排列、對齊和分佈。</td><td>當前<strong>主流布局技術</strong></td></tr><tr><td>Grid</td><td>基於網格和單元格的概念的<strong>多維度</strong>*布局方式，元素可以在水平和垂直方向上同時進行精確的位置控制和大小調整。</td><td>現代瀏覽器中得到廣泛支援，但在舊版本的瀏覽器上相容性可能較差。然而，它被視為未來的主要布局方式，因為它提供了更大的彈性和控制。</td></tr></tbody></table><h2 id="彈性佈局模式-flexbox" tabindex="-1">彈性佈局模式(Flexbox) <a class="header-anchor" href="#彈性佈局模式-flexbox" aria-label="Permalink to &quot;彈性佈局模式(Flexbox)&quot;">​</a></h2><h3 id="flex-direction" tabindex="-1">flex-direction: <a class="header-anchor" href="#flex-direction" aria-label="Permalink to &quot;flex-direction:&quot;">​</a></h3><p><img src="'+p+`" alt=""></p><h3 id="基本設置" tabindex="-1">基本設置 <a class="header-anchor" href="#基本設置" aria-label="Permalink to &quot;基本設置&quot;">​</a></h3><p>使用Flex佈局的基本設置：</p><ol><li>設置容器的display屬性為flex或inline-flex，將容器元素定義為Flex容器（flex container）。</li><li>將容器內的元素設置為Flex項目（flex item），並指定它們的佈局規則。</li></ol><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> ====== 1. 將容器元素定義為Flex容器（flex container）======</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#B392F0;">.container</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 或 inline-flex，取決於需要 */</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> ====== 2. 指定容器內的元素的佈局規則。======</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#B392F0;">.item1</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/* 百分比在Flex Grid System中用於定義網格列的寬度。每個列可以指定一個百分比，表示該列在容器內所佔的比例。</span></span>
<span class="line"><span style="color:#6A737D;">  例如，如果有一個包含三個元素的容器，並且每個元素的寬度都設置為33%，那麼它們將平均佔據容器的寬度的33%。 */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">50</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 寬度為父容器寬度的50% */</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">.item2</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/* 固定寬度為100像素 */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">; </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">.item3</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/* 不指定的情況下，增長因子為0，不分配額外空間 */</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> ====== 1. 將容器元素定義為Flex容器（flex container）======</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6F42C1;">.container</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">flex</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">/* 或 inline-flex，取決於需要 */</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> ====== 2. 指定容器內的元素的佈局規則。======</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#6F42C1;">.item1</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/* 百分比在Flex Grid System中用於定義網格列的寬度。每個列可以指定一個百分比，表示該列在容器內所佔的比例。</span></span>
<span class="line"><span style="color:#6A737D;">  例如，如果有一個包含三個元素的容器，並且每個元素的寬度都設置為33%，那麼它們將平均佔據容器的寬度的33%。 */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">flex</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">50</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">/* 寬度為父容器寬度的50% */</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">.item2</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/* 固定寬度為100像素 */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">; </span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">.item3</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/* 不指定的情況下，增長因子為0，不分配額外空間 */</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="增長因子-flex-grow" tabindex="-1">增長因子(flex-grow) <a class="header-anchor" href="#增長因子-flex-grow" aria-label="Permalink to &quot;增長因子(flex-grow)&quot;">​</a></h3><p>Grow屬性指定了每個網格列在可用空間超過其實際寬度時，如何分配額外的空間。這是一個非負整數。 如果一個列的Grow屬性設置為1，而其他列的Grow屬性都設置為0，那麼當有額外空間時，該列將會增長，而其他列將保持不變。如果所有列都設置為1，它們將平均分享額外的空間。</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">.item1</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">flex-grow</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 不允許增長 */</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.item2</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">.item3</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">flex-grow</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 增長因子為1 */</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">.item1</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">flex-grow</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">/* 不允許增長 */</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.item2</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">.item3</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">flex-grow</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">/* 增長因子為1 */</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow" target="_blank" rel="noreferrer">MDN-flex grow</a></p><h3 id="收縮因子-flex-shrink" tabindex="-1">收縮因子(flex-shrink) <a class="header-anchor" href="#收縮因子-flex-shrink" aria-label="Permalink to &quot;收縮因子(flex-shrink)&quot;">​</a></h3><p>Shrink屬性指定了每個網格列在可用空間小於其實際寬度時，如何分配缺少的空間。這也是一個非負整數。 如果一個列的Shrink屬性設置為1，而其他列的Shrink屬性都設置為0，那麼當可用空間不足時，該列將縮小，而其他列將保持不變。如果所有列都設置為1，它們將平均分享缺少的空間。</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">.item1</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">flex-shrink</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 收縮因子為1 */</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.item2</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">.item3</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">flex-shrink</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 不允許收縮 */</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">.item1</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">flex-shrink</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">/* 收縮因子為1 */</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.item2</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">.item3</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">flex-shrink</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">/* 不允許收縮 */</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink" target="_blank" rel="noreferrer">MDN-flex shrink</a></p><h3 id="flex-basis" tabindex="-1">flex-basis <a class="header-anchor" href="#flex-basis" aria-label="Permalink to &quot;flex-basis&quot;">​</a></h3><p>用於指定項目的基礎大小，即項目在沒有額外空間或超過它的空間時的初始大小。默認值為auto，表示由項目的內容決定。</p><h3 id="flex-shorthand-property" tabindex="-1">flex shorthand property <a class="header-anchor" href="#flex-shorthand-property" aria-label="Permalink to &quot;flex shorthand property&quot;">​</a></h3><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">.item</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">: &lt;flex-grow&gt; &lt;flex-shrink&gt; &lt;flex-basis&gt;;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">.item</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">flex</span><span style="color:#24292E;">: &lt;flex-grow&gt; &lt;flex-shrink&gt; &lt;flex-basis&gt;;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties" target="_blank" rel="noreferrer">MDN-Shorthand Properties</a></p><h2 id="彈性網格系統-flex-grid-system" tabindex="-1">彈性網格系統(Flex Grid System) <a class="header-anchor" href="#彈性網格系統-flex-grid-system" aria-label="Permalink to &quot;彈性網格系統(Flex Grid System)&quot;">​</a></h2><p>以 bootstrap 為例，經典的網格系統長這樣：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">.col</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">; } </span><span style="color:#6A737D;">/*增長因子為 1，會長大*/</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#6A737D;">/* col-1 ~ col-12 固定百分比 */</span></span>
<span class="line"><span style="color:#B392F0;">.col-auto</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">auto</span><span style="color:#E1E4E8;">;</span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">auto</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">.col-1</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">auto</span><span style="color:#E1E4E8;">;</span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">8.33333333</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">.col-2</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">auto</span><span style="color:#E1E4E8;">;</span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">16.66666667</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">.col-3</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">auto</span><span style="color:#E1E4E8;">;</span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">25</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">.col-4</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">auto</span><span style="color:#E1E4E8;">;</span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">33.33333333</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">.col-5</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">auto</span><span style="color:#E1E4E8;">;</span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">41.66666667</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">.col-6</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">auto</span><span style="color:#E1E4E8;">;</span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">50</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">.col-7</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">auto</span><span style="color:#E1E4E8;">;</span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">58.33333333</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">.col-8</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">auto</span><span style="color:#E1E4E8;">;</span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">66.66666667</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">.col-9</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">auto</span><span style="color:#E1E4E8;">;</span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">75</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">.col-10</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">auto</span><span style="color:#E1E4E8;">;</span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">83.33333333</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">.col-11</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">auto</span><span style="color:#E1E4E8;">;</span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">91.66666667</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">.col-12</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">auto</span><span style="color:#E1E4E8;">;</span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">.col</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">flex</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">; } </span><span style="color:#6A737D;">/*增長因子為 1，會長大*/</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6A737D;">/* col-1 ~ col-12 固定百分比 */</span></span>
<span class="line"><span style="color:#6F42C1;">.col-auto</span><span style="color:#24292E;">{</span><span style="color:#005CC5;">flex</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">auto</span><span style="color:#24292E;">;</span><span style="color:#005CC5;">width</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">auto</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">.col-1</span><span style="color:#24292E;">{</span><span style="color:#005CC5;">flex</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">auto</span><span style="color:#24292E;">;</span><span style="color:#005CC5;">width</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">8.33333333</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">.col-2</span><span style="color:#24292E;">{</span><span style="color:#005CC5;">flex</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">auto</span><span style="color:#24292E;">;</span><span style="color:#005CC5;">width</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">16.66666667</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">.col-3</span><span style="color:#24292E;">{</span><span style="color:#005CC5;">flex</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">auto</span><span style="color:#24292E;">;</span><span style="color:#005CC5;">width</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">25</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">.col-4</span><span style="color:#24292E;">{</span><span style="color:#005CC5;">flex</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">auto</span><span style="color:#24292E;">;</span><span style="color:#005CC5;">width</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">33.33333333</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">.col-5</span><span style="color:#24292E;">{</span><span style="color:#005CC5;">flex</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">auto</span><span style="color:#24292E;">;</span><span style="color:#005CC5;">width</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">41.66666667</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">.col-6</span><span style="color:#24292E;">{</span><span style="color:#005CC5;">flex</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">auto</span><span style="color:#24292E;">;</span><span style="color:#005CC5;">width</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">50</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">.col-7</span><span style="color:#24292E;">{</span><span style="color:#005CC5;">flex</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">auto</span><span style="color:#24292E;">;</span><span style="color:#005CC5;">width</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">58.33333333</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">.col-8</span><span style="color:#24292E;">{</span><span style="color:#005CC5;">flex</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">auto</span><span style="color:#24292E;">;</span><span style="color:#005CC5;">width</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">66.66666667</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">.col-9</span><span style="color:#24292E;">{</span><span style="color:#005CC5;">flex</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">auto</span><span style="color:#24292E;">;</span><span style="color:#005CC5;">width</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">75</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">.col-10</span><span style="color:#24292E;">{</span><span style="color:#005CC5;">flex</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">auto</span><span style="color:#24292E;">;</span><span style="color:#005CC5;">width</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">83.33333333</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">.col-11</span><span style="color:#24292E;">{</span><span style="color:#005CC5;">flex</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">auto</span><span style="color:#24292E;">;</span><span style="color:#005CC5;">width</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">91.66666667</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">.col-12</span><span style="color:#24292E;">{</span><span style="color:#005CC5;">flex</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">auto</span><span style="color:#24292E;">;</span><span style="color:#005CC5;">width</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="vuetify-網格系統" tabindex="-1">Vuetify 網格系統 <a class="header-anchor" href="#vuetify-網格系統" aria-label="Permalink to &quot;Vuetify 網格系統&quot;">​</a></h2><table><thead><tr><th>元件</th><th>作用</th><th>重要屬性</th><th>替代 1.x 的內容</th></tr></thead><tbody><tr><td>v-row</td><td>宣告 flex 容器，包裝v-col</td><td>dense, no-gutters</td><td>v-layout</td></tr><tr><td>v-col</td><td>必須是 v-row 的直接子元素</td><td></td><td>v-flex</td></tr><tr><td>v-spacer</td><td>分配剩餘的寬度，子元件之前或之後放置單個 v-spacer 時，這些元件將推向其容器的右側和左側。當在多個元件之間使用多個 v-spacer 時，剩餘的寬度將均勻分佈在每個間距之間。</td><td></td><td></td></tr></tbody></table><h2 id="對齊" tabindex="-1">對齊 <a class="header-anchor" href="#對齊" aria-label="Permalink to &quot;對齊&quot;">​</a></h2><h3 id="align" tabindex="-1"><a href="https://vuetifyjs.com/en/components/grids/#align" target="_blank" rel="noreferrer">Align</a> <a class="header-anchor" href="#align" aria-label="Permalink to &quot;[Align](https://vuetifyjs.com/en/components/grids/#align)&quot;">​</a></h3><h3 id="justify" tabindex="-1"><a href="https://vuetifyjs.com/en/components/grids/#justify" target="_blank" rel="noreferrer">Justify</a> <a class="header-anchor" href="#justify" aria-label="Permalink to &quot;[Justify](https://vuetifyjs.com/en/components/grids/#justify)&quot;">​</a></h3><h3 id="align-self" tabindex="-1"><a href="https://vuetifyjs.com/en/styles/flex/#flex-align-self" target="_blank" rel="noreferrer">Align Self</a> <a class="header-anchor" href="#align-self" aria-label="Permalink to &quot;[Align Self](https://vuetifyjs.com/en/styles/flex/#flex-align-self)&quot;">​</a></h3><h3 id="auto-margins" tabindex="-1"><a href="https://vuetifyjs.com/en/styles/flex/#auto-margins" target="_blank" rel="noreferrer">Auto Margins</a> <a class="header-anchor" href="#auto-margins" aria-label="Permalink to &quot;[Auto Margins](https://vuetifyjs.com/en/styles/flex/#auto-margins)&quot;">​</a></h3><h2 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-label="Permalink to &quot;Reference&quot;">​</a></h2><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox" target="_blank" rel="noreferrer">MDN-Basic concepts of flexbox</a></li><li><a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" target="_blank" rel="noreferrer">Bootstrap 5</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties" target="_blank" rel="noreferrer">MDN-Shorthand_properties</a></li><li><a href="https://vuetifyjs.com/en/components/grids/" target="_blank" rel="noreferrer">Vuetify-Grid System</a></li></ul>`,35),t=[e];function r(c,y,E,i,F,d){return a(),n("div",null,t)}const f=s(o,[["render",r]]);export{h as __pageData,f as default};