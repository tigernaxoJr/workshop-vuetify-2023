# Props
在父元件綁定屬性給子元件後，子元件內還需要宣告 Props，才能取用綁定的屬性。
### defineProps
使用 `defineProps()` 宣告 Props，定義 props 的名稱、型別，撰寫型別是讓程式易懂，也可以讓組件使用者知道傳遞的型別是否正確。
::: code-group
```html [JS]
<script setup>
const props = defineProps({
  title: String,
  greetingMessage: String,
  likes: Number,
  abc: {
	type: String,
	required: true,
	default: '123', // 可以是表達式
	// 可以自訂驗證
	validator:() => ['success', 'warning', 'danger'].includes(value)
  }
})
</script>
```

```html [Typescript]
<script setup lang="ts">
const props = defineProps<{
  title?: string
  greetingMessage?: String,
  likes?: number,
  abc: {
	type: String,
	required: true,
	default: '123', // 可以是表達式
	// 可以自訂驗證
	validator:() => ['success', 'warning', 'danger'].includes(value)
  }
}>()
</script>
```
:::

## Reference
- [Vue.js-Props](https://vuejs.org/guide/components/props.html#props-declaration)