import{_ as t,o as e,c as a,U as r}from"./chunks/framework.2939a8e5.js";const b=JSON.parse('{"title":"前端路由","description":"","frontmatter":{},"headers":[],"relativePath":"vue3/ecosystem/route.md","filePath":"vue3/ecosystem/route.md"}'),d={name:"vue3/ecosystem/route.md"},o=r('<h1 id="前端路由" tabindex="-1">前端路由 <a class="header-anchor" href="#前端路由" aria-label="Permalink to &quot;前端路由&quot;">​</a></h1><h2 id="後端路由-vs-前端路由" tabindex="-1">後端路由 vs 前端路由 <a class="header-anchor" href="#後端路由-vs-前端路由" aria-label="Permalink to &quot;後端路由 vs 前端路由&quot;">​</a></h2><table><thead><tr><th></th><th>後端路由</th><th>前端路由</th></tr></thead><tbody><tr><td>路由邏輯</td><td>後端程式處理</td><td>客戶端程式處理</td></tr><tr><td>伺服器請求</td><td>需要</td><td><strong>不需要</strong></td></tr></tbody></table><p>採取前端路由減少對伺服器請求次數，提高網頁速度、效率。</p><h2 id="history-hash-模式" tabindex="-1">History/Hash 模式 <a class="header-anchor" href="#history-hash-模式" aria-label="Permalink to &quot;History/Hash 模式&quot;">​</a></h2><table><thead><tr><th>前端路由</th><th>Hash Mode</th><th>History Mode</th></tr></thead><tbody><tr><td>URL 外觀</td><td>在 # 之後設置路由</td><td>和後端路由無異</td></tr><tr><td>URL 外觀</td><td><a href="https://localhost/app#A/B" target="_blank" rel="noreferrer">https://localhost/app#A/B</a></td><td><a href="https://localhost/app/A/B" target="_blank" rel="noreferrer">https://localhost/app/A/B</a></td></tr><tr><td>實現原理</td><td>改變#後面原本就不會送出 http 請求</td><td>以 history API 攔截 http 請求</td></tr><tr><td>網址列參數傳遞</td><td>無法傳遞網址列參數</td><td><strong>可傳遞網址列參數</strong></td></tr><tr><td>伺服器支援</td><td>伺服器不須額外設置</td><td>需設置伺服器端，避免拿到 404</td></tr><tr><td>SEO(不重要)</td><td>不利於 SEO</td><td>利於 SEO</td></tr></tbody></table><p>Hash Mode 無法傳遞網址列參數，在傳遞 KEY 的時候會有問題，伺服器端設置也不複雜，建議用 History Mode。</p>',7),s=[o];function h(l,n,c,i,p,_){return e(),a("div",null,s)}const f=t(d,[["render",h]]);export{b as __pageData,f as default};
