import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.cc795e4d.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"workshop/project/deploy/manual.md","filePath":"workshop/project/deploy/manual.md"}'),p={name:"workshop/project/deploy/manual.md"},o=l(`<p>重要：如果不是部屬在根目錄要先在 vite.config.js 調整好 base</p><h2 id="編譯" tabindex="-1">編譯 <a class="header-anchor" href="#編譯" aria-label="Permalink to &quot;編譯&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build</span></span></code></pre></div><h2 id="伺服器設置" tabindex="-1">伺服器設置 <a class="header-anchor" href="#伺服器設置" aria-label="Permalink to &quot;伺服器設置&quot;">​</a></h2><p>編譯後丟上伺服器，伺服器需要</p><ol><li>設置提供 index.html (設定當路由符合規則時，依序嘗試回傳設置的內容。)</li><li>反向代理(Optional) (透過 config 或手動設置)</li></ol><h3 id="提供-index-html" tabindex="-1">提供 index.html <a class="header-anchor" href="#提供-index-html" aria-label="Permalink to &quot;提供 index.html&quot;">​</a></h3><h3 id="反向代理" tabindex="-1">反向代理 <a class="header-anchor" href="#反向代理" aria-label="Permalink to &quot;反向代理&quot;">​</a></h3><p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Reverse_proxy_h2g2bob.svg/800px-Reverse_proxy_h2g2bob.svg.png" alt=""></p><h2 id="iis-部屬設置" tabindex="-1">IIS 部屬設置 <a class="header-anchor" href="#iis-部屬設置" aria-label="Permalink to &quot;IIS 部屬設置&quot;">​</a></h2><ol start="0"><li>IIS 必須有安裝 <code>URL Rewrite Module</code>、<code>Application Request Routing</code>，反向代理好像要從 server 端手動設置？</li><li>轉為應用程式</li><li>web.config 設定：</li></ol><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;?</span><span style="color:#85E89D;">xml</span><span style="color:#B392F0;"> version</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;1.0&quot;</span><span style="color:#B392F0;"> encoding</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;UTF-8&quot;</span><span style="color:#E1E4E8;">?&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">configuration</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">system.webServer</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">rewrite</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">rules</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">				&lt;</span><span style="color:#85E89D;">rule</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Handle History Mode and custom 404/500&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">stopProcessing</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;true&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">				  &lt;</span><span style="color:#85E89D;">match</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">url</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;(.*)&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">				  &lt;</span><span style="color:#85E89D;">conditions</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">logicalGrouping</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;MatchAll&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">					&lt;</span><span style="color:#85E89D;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">input</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{REQUEST_FILENAME}&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">matchType</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;IsFile&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">negate</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;true&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">					&lt;</span><span style="color:#85E89D;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">input</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{REQUEST_FILENAME}&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">matchType</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;IsDirectory&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">negate</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;true&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">				  &lt;/</span><span style="color:#85E89D;">conditions</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">				  &lt;</span><span style="color:#85E89D;">action</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Rewrite&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">url</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;index.html&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">				&lt;/</span><span style="color:#85E89D;">rule</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;/</span><span style="color:#85E89D;">rules</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">rewrite</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">system.webServer</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">configuration</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;?</span><span style="color:#22863A;">xml</span><span style="color:#6F42C1;"> version</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;1.0&quot;</span><span style="color:#6F42C1;"> encoding</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;UTF-8&quot;</span><span style="color:#24292E;">?&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">configuration</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">system.webServer</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">rewrite</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">rules</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">				&lt;</span><span style="color:#22863A;">rule</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Handle History Mode and custom 404/500&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">stopProcessing</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;true&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">				  &lt;</span><span style="color:#22863A;">match</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">url</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;(.*)&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">				  &lt;</span><span style="color:#22863A;">conditions</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">logicalGrouping</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;MatchAll&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">					&lt;</span><span style="color:#22863A;">add</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">input</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{REQUEST_FILENAME}&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">matchType</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;IsFile&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">negate</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;true&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">					&lt;</span><span style="color:#22863A;">add</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">input</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{REQUEST_FILENAME}&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">matchType</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;IsDirectory&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">negate</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;true&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">				  &lt;/</span><span style="color:#22863A;">conditions</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">				  &lt;</span><span style="color:#22863A;">action</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Rewrite&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">url</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;index.html&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">				&lt;/</span><span style="color:#22863A;">rule</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;/</span><span style="color:#22863A;">rules</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">rewrite</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">system.webServer</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">configuration</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="nginx-部屬設置" tabindex="-1">Nginx 部屬設置 <a class="header-anchor" href="#nginx-部屬設置" aria-label="Permalink to &quot;Nginx 部屬設置&quot;">​</a></h2><p>重點是 <code>try_files</code>，try_files 只能運行於 server, location</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># Typically I use this file as a boilerplate to configure an nginx docker container</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># This goes in /etc/nginx/conf.d/default.conf</span></span>
<span class="line"><span style="color:#6A737D;"># If you are reverse proxying an API</span></span>
<span class="line"><span style="color:#6A737D;"># 通常我使用這個文件作為配置Nginx Docker容器的範本</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># 這個配置應放在/etc/nginx/conf.d/default.conf中</span></span>
<span class="line"><span style="color:#6A737D;"># 如果您正在反向代理一個API</span></span>
<span class="line"><span style="color:#F97583;">upstream</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">api </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;"># 這裡設置 api</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">server</span><span style="color:#E1E4E8;"> someapi.ktgh.com.tw:443;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">server</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> listen </span><span style="color:#E1E4E8;">80; </span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;"># server_name yoursite.org;</span></span>
<span class="line"><span style="color:#F97583;">	root </span><span style="color:#E1E4E8;">/usr/share/nginx/html;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">/ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">	try_files </span><span style="color:#E1E4E8;">$uri /index.html;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 開啟 gzip 加速傳輸</span></span>
<span class="line"><span style="color:#F97583;">	gzip </span><span style="color:#E1E4E8;">on;</span></span>
<span class="line"><span style="color:#F97583;">	gzip_types </span><span style="color:#E1E4E8;">text/html application/javascript application/json text/css;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;"># 反向代理</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">/ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> proxy_pass </span><span style="color:#E1E4E8;">https://api/; </span><span style="color:#6A737D;"># Backend server address</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">Host $host;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">X-Forwarded-For $remote_addr;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">X-Real-IP $remote_addr;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># Optional: Additional proxy settings</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># proxy_connect_timeout 5s;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># proxy_read_timeout 60s;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># proxy_send_timeout 60s;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># Optional: Enable WebSocket support</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># proxy_http_version 1.1;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># proxy_set_header Connection &quot;upgrade&quot;;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># Typically I use this file as a boilerplate to configure an nginx docker container</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># This goes in /etc/nginx/conf.d/default.conf</span></span>
<span class="line"><span style="color:#6A737D;"># If you are reverse proxying an API</span></span>
<span class="line"><span style="color:#6A737D;"># 通常我使用這個文件作為配置Nginx Docker容器的範本</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6A737D;"># 這個配置應放在/etc/nginx/conf.d/default.conf中</span></span>
<span class="line"><span style="color:#6A737D;"># 如果您正在反向代理一個API</span></span>
<span class="line"><span style="color:#D73A49;">upstream</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">api </span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;"># 這裡設置 api</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">server</span><span style="color:#24292E;"> someapi.ktgh.com.tw:443;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">server</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> listen </span><span style="color:#24292E;">80; </span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;"># server_name yoursite.org;</span></span>
<span class="line"><span style="color:#D73A49;">	root </span><span style="color:#24292E;">/usr/share/nginx/html;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">location</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">/ </span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">	try_files </span><span style="color:#24292E;">$uri /index.html;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 開啟 gzip 加速傳輸</span></span>
<span class="line"><span style="color:#D73A49;">	gzip </span><span style="color:#24292E;">on;</span></span>
<span class="line"><span style="color:#D73A49;">	gzip_types </span><span style="color:#24292E;">text/html application/javascript application/json text/css;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;"># 反向代理</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">location</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">/ </span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> proxy_pass </span><span style="color:#24292E;">https://api/; </span><span style="color:#6A737D;"># Backend server address</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> proxy_set_header </span><span style="color:#24292E;">Host $host;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> proxy_set_header </span><span style="color:#24292E;">X-Forwarded-For $remote_addr;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> proxy_set_header </span><span style="color:#24292E;">X-Real-IP $remote_addr;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># Optional: Additional proxy settings</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># proxy_connect_timeout 5s;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># proxy_read_timeout 60s;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># proxy_send_timeout 60s;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># Optional: Enable WebSocket support</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># proxy_http_version 1.1;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># proxy_set_header Connection &quot;upgrade&quot;;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="refernece" tabindex="-1">Refernece <a class="header-anchor" href="#refernece" aria-label="Permalink to &quot;Refernece&quot;">​</a></h2><ul><li><a href="https://learn.microsoft.com/zh-tw/iis/extensions/url-rewrite-module/reverse-proxy-rule-template" target="_blank" rel="noreferrer">MSDN-反向 Proxy - 規則範本</a></li><li><a href="https://learn.microsoft.com/en-us/iis/extensions/url-rewrite-module/url-rewrite-module-configuration-reference" target="_blank" rel="noreferrer">MSDN-URL Rewrite Module Configuration Reference</a></li><li><a href="https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/" target="_blank" rel="noreferrer">NGINX Docs-NGINX Reverse Proxy</a></li></ul>`,17),e=[o];function t(r,c,E,y,i,u){return n(),a("div",null,e)}const h=s(p,[["render",t]]);export{g as __pageData,h as default};