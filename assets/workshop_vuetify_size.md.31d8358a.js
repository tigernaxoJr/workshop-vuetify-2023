import{_ as t,o as d,c as e,Q as a}from"./chunks/framework.15f172dd.js";const m=JSON.parse('{"title":"大小與空白","description":"","frontmatter":{},"headers":[],"relativePath":"workshop/vuetify/size.md","filePath":"workshop/vuetify/size.md"}'),r={name:"workshop/vuetify/size.md"},o=a('<h1 id="大小與空白" tabindex="-1">大小與空白 <a class="header-anchor" href="#大小與空白" aria-label="Permalink to &quot;大小與空白&quot;">​</a></h1><h2 id="sizing" tabindex="-1">Sizing <a class="header-anchor" href="#sizing" aria-label="Permalink to &quot;Sizing&quot;">​</a></h2><table><thead><tr><th>高 class</th><th>css 效果</th><th>寬 class</th><th>css 效果</th></tr></thead><tbody><tr><td>h-auto</td><td><code>height: auto</code></td><td>w-auto</td><td><code>width: auto</code></td></tr><tr><td>h-screen</td><td><code>height: 100dvh</code></td><td>-</td><td>-</td></tr><tr><td>h-0</td><td><code>height: 0</code></td><td>w-0</td><td><code>width: 0</code></td></tr><tr><td>h-25</td><td><code>height: 25%</code></td><td>w-25</td><td><code>width: 25%</code></td></tr><tr><td>h-50</td><td><code>height: 50%</code></td><td>w-50</td><td><code>width: 50%</code></td></tr><tr><td>h-75</td><td><code>height: 75%</code></td><td>w-75</td><td><code>width: 75%</code></td></tr><tr><td>h-100</td><td><code>height: 100%</code></td><td>w-100</td><td><code>width: 100%</code></td></tr></tbody></table><div class="info custom-block"><p class="custom-block-title">練習</p><ul><li>設定長寬是 flex 容器的 50%。 <a href="https://play.vuetifyjs.com/#eNqFj88OgjAMxl+l9uxA45+DThOfwYMH8YBbFeIcZJuIEt7dAZJoYuKlbdLf9/XrvkJrRLjJ86C4ES6QO7rmKna0jjQAl2kBQsXWriJMmBWGSINkJ0VlhC3ioQFjX6DItCPt4M5mI0h88eg2fab6DCHsUukSoDL2Z4iHXrdmrHf64fJH26Z8Tzz8CM+te6jui6APVHVnjrG4nE1205KJTGVmAYbkstnVjUkvxHqIk2ASTLHr4zkeXngNYrY=" target="_blank" rel="noreferrer">練習</a></li></ul></div><h2 id="邊距-margin-填充-padding" tabindex="-1">邊距(margin)/填充(padding) <a class="header-anchor" href="#邊距-margin-填充-padding" aria-label="Permalink to &quot;邊距(margin)/填充(padding)&quot;">​</a></h2><h3 id="方向" tabindex="-1">方向 <a class="header-anchor" href="#方向" aria-label="Permalink to &quot;方向&quot;">​</a></h3><table><thead><tr><th>code</th><th></th><th>影響方向</th></tr></thead><tbody><tr><td>t</td><td>top</td><td>上</td></tr><tr><td>b</td><td>bottom</td><td>下</td></tr><tr><td>l</td><td>left</td><td>左</td></tr><tr><td>r</td><td>right</td><td>右</td></tr><tr><td>s</td><td>start</td><td>開始的方向(LTR: 左；RTL: 右)</td></tr><tr><td>e</td><td>end</td><td>結束的方向(LTR: 右；RTL: 左 )</td></tr><tr><td>x</td><td>x</td><td>x 軸方向(上下)</td></tr><tr><td>y</td><td>y</td><td>y 軸方向(左右)</td></tr><tr><td>a</td><td>all</td><td>所有方向(上下左右)</td></tr></tbody></table><p><a href="https://play.vuetifyjs.com/#eNrlVt+LGjEQ/leG5UCl7lrvDgviCQd9LRTaPp2CcTeugWwSkuhpxf+9k/2dVe/6cn3pSzSZyffNZL5k9uUUGB2PnpWK9jsaTIOZpZnixNL5QgDM9mEshSVMUO3mADEnxjwtAqNIzEQaou8x1XInElAknCyCwm3Ddyxxf3OYHEjL13JS4vJq1qAm4YbTAxDOUhHGVFikLRFzN8md1/i+vWgyXKqJa8aSxlBOY9ssAezDTCaU4yZFkgRz+Mo0ujAp2qgAU4ZHkQdV2Y3vUAWtaOgFBMDJOif4XhC0ja3oML7qsDEow6WdKk0VFYnnhG7GainSmtDSgw2VZhnRR1DHcLwI5mo2Krx8glGrnG8yE+WIQ7nDI+/SJ2zfJFvQ+R4AYWfLCPfcjqRZrArkhfd3ZfvBftMbFWt5mMhwFtP+eHC9RF2UuRdTEyZKrxXj2/r9QMliyVMmPk6x33L8fyHY7P8RbFG0N/TaOHQK9jEqXaeh1ESkNMR3dmupCB/c4/35Hd12VLql1Mt3WsG/xDJTWJakENPSTwmD3hOnTfR89E15G6F527imPayQX7RLxvLB7VB6mecph6mmmHadvu9/RU5d+bQAX7dYRsglXnQsp/DW5W704HycIuuW+RMXuo5Y2ksp+it58d3xX6l9Nau6bWEpWziudC7YzMSaqQKIHpTUFhK6ITtu4VSAJcQS6A+qqVOGMBZc/6fawBM8a02O0UbLrH8CTkVqt1MYf4HzEPp7wofABvA0h9XdiZ1XAx9FvAczuYARiAOfYHyBVcbtsF56ZGdlbwhRFJUMy+ZaaGp3WjQJYY71eznFvRY39tZu4G7QbjBuoG44uOHoBtJbDhuMzss8dfYLs7vHaLm/bnHsGHGVSB5+dUJtqu53S5er1f7QNLlhQraaqeXgiRO3/zIo7i11h4zPNTdA1nKPSxIsPub4/ObWhG02VKP8c2EgA2wpVxh31LCfiz9nXCi/JctbO22Ly7vInvDqyq3U3clumYm6B3EOfYNL87yq+etI/AfqBklWYnUKW3M0dbukKH4xYWxyxQULzsPgIXqIHoPidzwJln8AQdNOrQ==" target="_blank" rel="noreferrer">試試看</a></p><div class="info custom-block"><p class="custom-block-title">練習</p><ul><li>加入 breakpoint，使用 <code>{property}{direction}-{breakpoint}-{size}</code>。 <a href="https://play.vuetifyjs.com/#eNp9js2OwjAMhF/F6/O6LWK1BwhIPAMHDpRDSAytCGmVhH/x7iQKSIgDF9uS55uZ5Q29U+Ws74vjgXGEIvC+NzLwtLYA4odI6PYIykjvJzU25JVjtqBpY/gMvaRBlabfU1XjlChzX5ioSpIPkepsYBvgFP0qaNKMwnl7be0WSli0OjTAZxnLsSgjmXOelyjfagsfLib3L162txy5lmq3dd3BalKd6dwIHOtx+t2TyQvE+y8Oi2Hxh3kP/nH1ACRZX0c=" target="_blank" rel="noreferrer">練習</a></li><li>對 <code>d-flex</code> 的子元素試試看 <code>my-auto</code>、<code>mx-auto</code>。<a href="https://play.vuetifyjs.com/#eNp1jkEOgjAQRa8yztqhUdSFqSSeQ1zUMggJIGlLxRjvbq2a4MLN/Fn89/MOd7RGi33fJ35g3KJ03PaNcpzlHYAsag+6UdbucqzIasPcQUFlwyOczmQHUyrN5JWpVedyjFTgZkTSk62Y3YRfruH6Ou2N1OAu0I4xAybFp50RfTf+8j/9qCmCZ/ikmNjjY45pkiYrfOdig8cnmRNK1Q==" target="_blank" rel="noreferrer">練習</a></li></ul></div><h2 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-label="Permalink to &quot;Reference&quot;">​</a></h2><ul><li><a href="https://v2.vuetifyjs.com/en/styles/spacing/" target="_blank" rel="noreferrer">vuetify-spacing</a></li></ul>',11),i=[o];function h(c,l,s,n,f,u){return d(),e("div",null,i)}const g=t(r,[["render",h]]);export{m as __pageData,g as default};