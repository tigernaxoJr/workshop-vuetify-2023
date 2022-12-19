# 靜態資源
院內無法連外網的電腦讀不到外部 cdn 資源，因此 font、icon、等等...都要放在專案內，或使用院內的資源
## 光田自造字
css 加入這一段，會不定時更新
```css
@font-face {
	font-family: "EUDC";
	font-style: normal;
	src: url('https://m-med.ktgh.com.tw/CDN/fonts/EUDC.woff2') format('woff2'),
	url('https://m-med.ktgh.com.tw/CDN/fonts/EUDC.woff') format('woff'),
	url('https://m-med.ktgh.com.tw/CDN/fonts/EUDC.ttf') format('truetype');
}

* {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-family: '其他優先使用的字型', 'EUDC', sans-serif;
	font-display: auto;
}
```

---
## Reference
- [wordpress-[Web] 網頁顯示光田自造字](https://wordpress.ktgh.com.tw/archives/1301)