<!-- ---
layout: page
--- -->

# Render Function
 - 缺點：不像SFC固定寫法，可能會降低可讀性(看個人怎麼寫)
 - 優點：解放 JavaScript 完整編程能力給 Vue

## 遞迴元件
使用 render function，不需 import 元件，程式不需改動，`MyComponent.js`：
```js 17,21
import { h } from "vue";
import { VList, VListGroup, VListItem } from "vuetify/components";
const props = {
  menus: { type: Array, default: [] },
  depth: { type: Number, default: 0 },
  opened: { type: Array, default: [] }
}
const render = ( props )=>{
  const { menus, depth, opened } = props
  const el = menus.map((x)=> {
    // 沒有 children 的情況
    if(!x.children?.length) return h( VListItem, x)
    // 有 children 的情況
    const y = Object.assign({}, x);
    delete y.children; // VListItem 不接受 chidlren，會報錯特別排除
    return h( VListGroup, { value: x.id }, {
      default: () => h(component, { menus: x.children, depth: depth + 1}),
      activator: (e) => h(VListItem, { ...y, ...e.props })
    })
  })
  return depth === 0 ?  h( VList, { opened }, () => el ) :  el
}
const component = { props, render }
export default component
```

不使用 render function，需要 import 元件，程式需要隨元件名稱改動：
```vue
<!-- MyComponent.vue -->
<script setup>
// 需要 import 元件，程式需要隨元件名稱改動
import MyComponent from './MyComponent'
// 其他內容
</script>

<template>
  <!-- 需要搭配 is 做動態元件判斷 -->
</template>
```
## Reference
 - [Vue.js-Render Function](https://vuejs.org/guide/extras/render-function.html)
 - [Vue.js-SFC Script Setup#Recursive Components](https://vuejs.org/api/sfc-script-setup.html#using-components)
