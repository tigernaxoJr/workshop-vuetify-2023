import{_ as s,o as e,c as a,Q as n}from"./chunks/framework.1eafcbb1.js";const h=JSON.parse('{"title":"Vue 元件生命週期","description":"","frontmatter":{},"headers":[],"relativePath":"vue3/basic/01lifecycle.md","filePath":"vue3/basic/01lifecycle.md"}'),l={name:"vue3/basic/01lifecycle.md"},o=n(`<h1 id="vue-元件生命週期" tabindex="-1">Vue 元件生命週期 <a class="header-anchor" href="#vue-元件生命週期" aria-label="Permalink to &quot;Vue 元件生命週期&quot;">​</a></h1><h2 id="生命週期" tabindex="-1">生命週期 <a class="header-anchor" href="#生命週期" aria-label="Permalink to &quot;生命週期&quot;">​</a></h2><p><img src="https://vuejs.org/assets/lifecycle.16e4c08e.png" alt=""></p><h2 id="生命週期鉤子" tabindex="-1">生命週期鉤子 <a class="header-anchor" href="#生命週期鉤子" aria-label="Permalink to &quot;生命週期鉤子&quot;">​</a></h2><p>Vue3 的生命週期鉤子（lifecycle hooks）實際上也是觀察者設計模式的一種實現。在這種模式中，一個目標對象管理所有依賴於它的觀察者對象，並在其本身的狀態改變時主動通知它們。在 Vue3 中，當組件的某個生命週期階段到達時（例如，組件被掛載到 DOM、更新或卸載等），相應的生命週期鉤子就會被調用。</p><p>當我們在 Vue3 中調用 onMounted 生命週期鉤子時，Vue 會自動將我們提供給 onMounted 的回調函數與當前正在活動的組件實例進行關聯。這意味著，當組件被掛載時，我們的回調函數將被執行。</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { onMounted } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">onMounted</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`the component is now mounted.\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { onMounted } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">onMounted</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`the component is now mounted.\`</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>Vue3 有很多 lifecycle hook ，但最常用的是 onMounted</p><details class="details custom-block"><summary>Lifecycle Hook</summary><ul><li>onMounted()</li><li>onUpdated()</li><li>onUnmounted()</li><li>onBeforeMount()</li><li>onBeforeUpdate()</li><li>onBeforeUnmount()</li><li>onErrorCaptured()</li><li>onRenderTracked()</li><li>onRenderTriggered()</li><li>onActivated()</li><li>onDeactivated()</li><li>onServerPrefetch()</li></ul></details><h2 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-label="Permalink to &quot;Reference&quot;">​</a></h2><ul><li><a href="https://vuejs.org/guide/essentials/lifecycle.html" target="_blank" rel="noreferrer">Vue.js-Lifecycle Hooks</a></li></ul>`,11),p=[o];function t(c,r,i,d,u,y){return e(),a("div",null,p)}const f=s(l,[["render",t]]);export{h as __pageData,f as default};
