import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.7fc1a69d.js";const F=JSON.parse('{"title":"靜態資源","description":"","frontmatter":{},"headers":[],"relativePath":"workshop/project/resource.md","filePath":"workshop/project/resource.md"}'),o={name:"workshop/project/resource.md"},p=l(`<h1 id="靜態資源" tabindex="-1">靜態資源 <a class="header-anchor" href="#靜態資源" aria-label="Permalink to &quot;靜態資源&quot;">​</a></h1><p>院內無法連外網的電腦讀不到外部 cdn 資源，因此 font、icon、等等...都要放在專案內，或使用院內的資源</p><h2 id="顯示光田自造字" tabindex="-1">顯示光田自造字 <a class="header-anchor" href="#顯示光田自造字" aria-label="Permalink to &quot;顯示光田自造字&quot;">​</a></h2><p>到 <code>index.html</code> 裡面的 <code>&lt;header&gt;</code> 區塊中加入這一段，會不定時更新。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">@font-face</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">font-family</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;EUDC&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">font-style</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">normal</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">src</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">url</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;https://m-med.ktgh.com.tw/CDN/fonts/EUDC.woff2&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#79B8FF;">format</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;woff2&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">url</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;https://m-med.ktgh.com.tw/CDN/fonts/EUDC.woff&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#79B8FF;">format</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;woff&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">url</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;https://m-med.ktgh.com.tw/CDN/fonts/EUDC.ttf&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#79B8FF;">format</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;truetype&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#85E89D;">*</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">-webkit-font-smoothing</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">antialiased</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">-moz-osx-font-smoothing</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">grayscale</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">font-family</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;其他優先使用的字型&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;EUDC&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">sans-serif</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">font-display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">auto</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">@font-face</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">font-family</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;EUDC&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">font-style</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">normal</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">src</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">url</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;https://m-med.ktgh.com.tw/CDN/fonts/EUDC.woff2&#39;</span><span style="color:#24292E;">) </span><span style="color:#005CC5;">format</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;woff2&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">url</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;https://m-med.ktgh.com.tw/CDN/fonts/EUDC.woff&#39;</span><span style="color:#24292E;">) </span><span style="color:#005CC5;">format</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;woff&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">url</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;https://m-med.ktgh.com.tw/CDN/fonts/EUDC.ttf&#39;</span><span style="color:#24292E;">) </span><span style="color:#005CC5;">format</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;truetype&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#22863A;">*</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">-webkit-font-smoothing</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">antialiased</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">-moz-osx-font-smoothing</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">grayscale</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">font-family</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;其他優先使用的字型&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;EUDC&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">sans-serif</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">font-display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">auto</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><p>Todo:</p><ul><li>font 原理</li><li>icon 和 font 的關係</li></ul><hr><h2 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-label="Permalink to &quot;Reference&quot;">​</a></h2><ul><li><a href="https://wordpress.ktgh.com.tw/archives/1301" target="_blank" rel="noreferrer">wordpress-[Web] 網頁顯示光田自造字</a></li></ul>`,11),t=[p];function e(c,r,E,y,i,f){return a(),n("div",null,t)}const h=s(o,[["render",e]]);export{F as __pageData,h as default};