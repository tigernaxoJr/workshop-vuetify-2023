import{_ as s,c as a,o as n,N as o}from"./chunks/framework.03ba4d3f.js";const A=JSON.parse('{"title":"靜態資源","description":"","frontmatter":{},"headers":[],"relativePath":"workshop/project/resource.md"}'),l={name:"workshop/project/resource.md"},p=o(`<h1 id="靜態資源" tabindex="-1">靜態資源 <a class="header-anchor" href="#靜態資源" aria-label="Permalink to &quot;靜態資源&quot;">​</a></h1><p>院內無法連外網的電腦讀不到外部 cdn 資源，因此 font、icon、等等...都要放在專案內，或使用院內的資源</p><h2 id="顯示光田自造字" tabindex="-1">顯示光田自造字 <a class="header-anchor" href="#顯示光田自造字" aria-label="Permalink to &quot;顯示光田自造字&quot;">​</a></h2><p>到 <code>index.html</code> 裡面的 <code>&lt;header&gt;</code> 區塊中加入這一段，會不定時更新。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">@font-face</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#B2CCD6;">font-family</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">EUDC</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#B2CCD6;">font-style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> normal</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#B2CCD6;">src</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://m-med.ktgh.com.tw/CDN/fonts/EUDC.woff2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">format</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">woff2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://m-med.ktgh.com.tw/CDN/fonts/EUDC.woff</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">format</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">woff</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://m-med.ktgh.com.tw/CDN/fonts/EUDC.ttf</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">format</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">truetype</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#FFCB6B;">-webkit-font-smoothing</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> antialiased</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#FFCB6B;">-moz-osx-font-smoothing</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> grayscale</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#B2CCD6;">font-family</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">其他優先使用的字型</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">EUDC</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> sans-serif</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#B2CCD6;">font-display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><p>Todo:</p><ul><li>font 原理</li><li>icon 和 font 的關係</li></ul><hr><h2 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-label="Permalink to &quot;Reference&quot;">​</a></h2><ul><li><a href="https://wordpress.ktgh.com.tw/archives/1301" target="_blank" rel="noreferrer">wordpress-[Web] 網頁顯示光田自造字</a></li></ul>`,11),t=[p];function e(r,c,D,F,y,C){return n(),a("div",null,t)}const f=s(l,[["render",e]]);export{A as __pageData,f as default};