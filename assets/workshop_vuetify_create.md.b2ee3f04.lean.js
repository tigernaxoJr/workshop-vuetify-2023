import{_ as s,o as a,c as e,Q as l}from"./chunks/framework.cc795e4d.js";const B=JSON.parse('{"title":"建立專案","description":"","frontmatter":{},"headers":[],"relativePath":"workshop/vuetify/create.md","filePath":"workshop/vuetify/create.md"}'),o={name:"workshop/vuetify/create.md"},p="/create.jpg",u="/create2.jpg",n="/create3.jpg",t="/create4.jpg",c=l('<h1 id="建立專案" tabindex="-1">建立專案 <a class="header-anchor" href="#建立專案" aria-label="Permalink to &quot;建立專案&quot;">​</a></h1><p>麻煩大家先切換 node.js 版本，我用 16.19.1 會遇到錯誤，18.14.0 沒有錯誤。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ERR!</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Unexpected</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">token</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;.&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ERR!</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Unexpected</span><span style="color:#24292E;"> </span><span style="color:#032F62;">token</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;.&#39;</span></span></code></pre></div><p>以下指令都使用 git bash 執行，也可以用 cmd 執行(理論上)：</p><h2 id="建立專案-1" tabindex="-1">建立專案 <a class="header-anchor" href="#建立專案-1" aria-label="Permalink to &quot;建立專案&quot;">​</a></h2><ol><li><p>輸入指令建立專案</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vuetify</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vuetify</span></span></code></pre></div></li><li><p>設定項目：</p><ul><li>輸入<strong>專案名稱(這裡用 v3app)</strong></li><li>選擇 Essentials (Vuetify, VueRouter, Pinia)</li><li>Use Typescript 選 <strong>No</strong></li><li>安裝程式選 <strong>npm</strong> 或 <strong>yarn</strong>(若有安裝)。</li></ul><p><img src="'+p+'" alt=""></p></li><li><p>vuetify-cli 在建立完專案之後就會自動安裝套件... <img src="'+u+'" alt=""></p></li></ol><h2 id="啟動專案" tabindex="-1">啟動專案 <a class="header-anchor" href="#啟動專案" aria-label="Permalink to &quot;啟動專案&quot;">​</a></h2><ol><li>進入專案資料夾<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">v3app</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">v3app</span></span></code></pre></div></li><li>以 VSCode 打開專案<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">code</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">code</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span></span></code></pre></div></li><li><code>ctrl+</code>打開 console</li><li>啟動開發伺服器<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dev</span></span></code></pre></div>結果：<br><img src="'+n+'" alt=""></li><li>瀏覽器打開網址 <code>http://localhost:3000/</code><img src="'+t+'" alt=""></li></ol><h2 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-label="Permalink to &quot;Reference&quot;">​</a></h2><ul><li><a href="https://next.vuetifyjs.com/en/getting-started/installation/" target="_blank" rel="noreferrer">Vuetify-next</a></li></ul>',10),r=[c];function i(d,E,F,h,y,C){return a(),e("div",null,r)}const v=s(o,[["render",i]]);export{B as __pageData,v as default};
