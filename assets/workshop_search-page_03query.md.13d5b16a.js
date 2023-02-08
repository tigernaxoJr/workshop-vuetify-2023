import{_ as s,c as n,o as a,d as l}from"./app.ef38f278.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"workshop/search-page/03query.md"}'),o={name:"workshop/search-page/03query.md"},t=l(`<p>文件閱讀 資料表 Dialog Form</p><p>props/event/attribute provide/inject default/named slot component reference async component wrapper component ( redefine props/event ) 父子組件溝通 常見錯誤：v-model 綁定到 props 上</p><p>component global/business relevant</p><div class="language-mermaid"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">flowchart</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">LR</span></span>
<span class="line"><span style="color:#A6ACCD;">A</span><span style="color:#89DDFF;font-style:italic;">[</span><span style="color:#C3E88D;">Hard</span><span style="color:#89DDFF;font-style:italic;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">--&gt;|</span><span style="color:#C3E88D;">Text</span><span style="color:#89DDFF;font-style:italic;">|</span><span style="color:#A6ACCD;"> B</span><span style="color:#89DDFF;font-style:italic;">(</span><span style="color:#C3E88D;">Round</span><span style="color:#89DDFF;font-style:italic;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">B </span><span style="color:#89DDFF;font-style:italic;">--&gt;</span><span style="color:#A6ACCD;"> C</span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#C3E88D;">Decision</span><span style="color:#89DDFF;font-style:italic;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">C </span><span style="color:#89DDFF;font-style:italic;">--&gt;|</span><span style="color:#C3E88D;">One</span><span style="color:#89DDFF;font-style:italic;">|</span><span style="color:#A6ACCD;"> D</span><span style="color:#89DDFF;font-style:italic;">[</span><span style="color:#C3E88D;">Result 1</span><span style="color:#89DDFF;font-style:italic;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">C </span><span style="color:#89DDFF;font-style:italic;">--&gt;|</span><span style="color:#C3E88D;">Two</span><span style="color:#89DDFF;font-style:italic;">|</span><span style="color:#A6ACCD;"> E</span><span style="color:#89DDFF;font-style:italic;">[</span><span style="color:#C3E88D;">Result 2</span><span style="color:#89DDFF;font-style:italic;">]</span></span>
<span class="line"></span></code></pre></div><div class="language-mermaid"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">sequenceDiagram</span></span>
<span class="line"><span style="color:#A6ACCD;">    Alice</span><span style="color:#89DDFF;font-style:italic;">-&gt;&gt;</span><span style="color:#A6ACCD;">Bob</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Hello Bob, how are you?</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">alt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">is sick</span></span>
<span class="line"><span style="color:#A6ACCD;">        Bob</span><span style="color:#89DDFF;font-style:italic;">-&gt;&gt;</span><span style="color:#A6ACCD;">Alice</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Not so good :(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">is well</span></span>
<span class="line"><span style="color:#A6ACCD;">        Bob</span><span style="color:#89DDFF;font-style:italic;">-&gt;&gt;</span><span style="color:#A6ACCD;">Alice</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Feeling fresh like a daisy</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">end</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">opt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Extra response</span></span>
<span class="line"><span style="color:#A6ACCD;">        Bob</span><span style="color:#89DDFF;font-style:italic;">-&gt;&gt;</span><span style="color:#A6ACCD;">Alice</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Thanks for asking</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">end</span></span>
<span class="line"></span></code></pre></div>`,5),e=[t];function p(c,r,i,y,D,C){return a(),n("div",null,e)}const f=s(o,[["render",p]]);export{F as __pageData,f as default};
