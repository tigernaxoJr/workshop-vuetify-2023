import{s,Z as i,$ as u,a0 as c,a1 as l,a2 as d,a3 as f,a4 as m,a5 as h,a6 as A,a7 as g,a8 as P,d as v,u as y,j as w,y as C,a9 as R,aa as _,ab as b,ac as E}from"./chunks/framework.fb95d6d7.js";import{t as D}from"./chunks/theme.7693a2d9.js";const T={...D};function p(e){if(e.extends){const a=p(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const o=p(T),j=v({name:"VitePressApp",setup(){const{site:e}=y();return w(()=>{C(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),R(),_(),b(),o.setup&&o.setup(),()=>E(o.Layout)}});async function O(){const e=$(),a=S();a.provide(u,e);const t=c(e.route);return a.provide(l,t),a.component("Content",d),a.component("ClientOnly",f),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function S(){return h(j)}function $(){let e=s,a;return A(t=>{let n=g(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=P(()=>import(n),[])),s&&(e=!1),r},o.NotFound)}s&&O().then(({app:e,router:a,data:t})=>{a.go().then(()=>{i(a.route,t.site),e.mount("#app")})});export{O as createApp};
