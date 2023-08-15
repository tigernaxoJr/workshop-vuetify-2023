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

## Reference
- [Vue.js-Template Syntax](https://vuejs.org/guide/essentials/template-syntax.html)