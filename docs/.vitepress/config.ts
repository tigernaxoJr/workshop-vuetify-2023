import { defineConfig } from 'vitepress';
import { fileURLToPath } from 'url';

// import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import sidebar from './sidebar';
const GA4_ID = 'G-H2T39417H1';
export default defineConfig({
  title: 'Vuetify BootCamp',
  description: 'Just playing around.',
  base: '',
  // appearance: 'dark',
  cleanUrls: false,
  themeConfig: {
    nav: [
      // { text: '       ', link: '/workshop/workshop' },
      { text: '第一週', link: 'workshop/vue3/sfc' },
      { text: '第二週', link: '/workshop/project/template/' },
      { text: '輸入密鑰', link: '/decrypt' },
    ],
    sidebar,
  },
  head: [
    [
      'link',
      {
        href: 'https://cdn.jsdelivr.net/npm/vuetify@3.3.19/dist/vuetify.min.css',
        rel: 'stylesheet',
      },
    ],
    ['link', { rel: 'icon', href: '/logo.png' }],
    [
      'script',
      {
        async: '',
        src: `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`,
      },
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA4_ID}');`,
    ],
  ],
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url)),
      },
    },
  },
  sitemap: {
    hostname: 'https://vuetify3.tigernaxo.com',
  },
});
