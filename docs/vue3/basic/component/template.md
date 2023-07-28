# 模板語法(Template Syntax)
## Text Interpolation
使用 "Mustache" syntax 綁定變數：
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


 <!--                                                    | ternary expression                      | flow control | --> 
## 屬性綁定
綁定 html 屬性：
```html
<div v-bind:id="dynamicId"></div>
```
<a v-on:click="doSomething"> ... </a>

<!-- shorthand -->
<a @click="doSomething"> ... </a>
### 簡寫：
```html
<div :id="dynamicId"></div>
```
### Boolean Attributes
例如要判斷 disable 狀態，可以使用 boolean attributes，使用 [truthy value](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) 條件判斷，但有**例外**：空字串視為 true。
```html
<button :disabled="isButtonDisabled">Button</button>
```
最好的方法是先轉換成 true/false：
  - !'' (`true`)
  - !!'' (`false`)

### 動態多值綁定
下面兩者等價：
```html {2}
<template>
	<div :id="obj.id" :class="obj.class"></div>
</template>

<script setup>
const obj = {
  id: 'container',
  class: 'wrapper'
}
</script>
```
```html {2}
<template>
	<div v-bind="obj"></div>
</template>

<script setup>
const obj = {
  id: 'container',
  class: 'wrapper'
}
</script>
```

## Reference
- [Vue.js-Template Syntax](https://vuejs.org/guide/essentials/template-syntax.html)
- [MDN-Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)