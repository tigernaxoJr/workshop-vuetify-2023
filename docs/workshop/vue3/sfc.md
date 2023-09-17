<!-- ---
layout: page
--- -->

# SFC (single file components)

以.vue 為副檔名，用於組織 Vue 組件的一種文件結構。並允許將 HTML 模板、JavaScript 程式碼和 CSS 樣式組織在一個地方，易於閱讀、維護和複用。

SFC 由三個主要部分組成：

- 模板（`<Template>`）（HTML）
- 腳本（`<Script>`）、（Javascript）
- 樣式（`<Style>`）、（CSS）

結構會像這樣：

```html
<template>
  <!--HTML-->
</template>

<script>
  // JAvaScript
</script>

<style>
  /*CSS*/
</style>
```

## 模板

Vue 組件的 HTML 部分  
Vue3.0 開始 `<template>` 裡面可以有多個根元素

```html
<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="incrementCounter">Click me</button>
  </div>
</template>
```

### 模板語法(Template Syntax)
Text Interpolation 使用 "Mustache" syntax 綁定變數：
```html
<span>Message: {{ msg }}</span>
```
Mustache 裡面可以是、Expression（表達式、求值式）；不可以是 Statement（敘述、語句）：
<table>
	<thead>
		<tr><th>可以</th><th>不可以</th></tr>
	</thead>
	<tbody>
		<tr>
			<td> <ul>
				<li><code>`list-${id}`</code></li>
				<li><code>formatDate(date)</code></li>
				<li><code>message.split('').reverse().join('')</code></li>
				<li><code>ok ? 'yes': 'no'</code></li>
			</ul> </td>
			<td> <ul>
				<li> <code>var a = 1</code></li>
				<li> <code>if(ok){return 'yes'}else{return 'no'}</code> </li>
			</ul> </td>
		</tr>
	</tbody>
</table>


## 腳本
Vue 組件的 Javascript 部分  
- 在 `<script setup>` 中，頂層導入或聲明的變數和函數，可以自動在同一組件的模板中使用。

```html
<script setup>
  import { ref } from 'vue';
  const message = ref('Hello, Vue!');
  const counter = ref(0);
  function incrementCounter() {
    counter.value++;
  }
</script>
```

## 樣式

Vue 組件的 CSS 部分  
style 內 CSS 預設作用範圍是全域，加入 scoped 屬性將作用範圍限制在 SFC 內。
lang 屬性套用想要的 CSS 預處理器，但要先 npm 安裝對應的 CSS 預處理器、loader。

```html
<style lang="SCSS" scoped>
  h1 {
    color: blue;
  }

  button {
    background-color: #4caf50;
    color: white;
  }
</style>
```

## Reference
- [Vue.js-Template Syntax](https://vuejs.org/guide/essentials/template-syntax.html)
- [2020it 邦鐵人賽-30 天手把手的 Vue.js 教學 Day15 - 認識 Single file components(SFC)](https://ithelp.ithome.com.tw/articles/10245406)