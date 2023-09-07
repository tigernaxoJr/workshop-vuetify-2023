# 選單資料
原則：以 Data 控制元件表現，而不是將商業邏輯寫入元件！！！
- 相較修改 ViewModel，使用程式控制資料（javascript 物件）的形狀容易許多。
- 與特定商業邏輯耦合的元件也無法復用。

## 固定選單資料
寫死為 javascript 物件即可。

## 動態選單資料
處理技巧：
 - 善用資料的 reactivity 簡化程式碼
 - 概念為：`data = computed(()=>(rowdata + state))`
 - 善用 javascript object reference 減少 menu 大小  

以病歷整合查詢選單為例：
<!-- todo 把程式完成-->
```html
<template>
  <!-- other tag -->
  <Menu :menus="menus" >
</template>
<script setup>
import Menu from '@/components/Menu.js';
// state
const opened = ref([]);
const setOpened = (id)=>{
  const isOld = opened.value.includes(id)
  opened.value.splice(0);
  if(!isOld) opened.value.push(id);
};
// big children 
const CommonChildren = computed(()=>({
  'E': {}, 
  'I': {},
  'R': {}
}));
const menus = computed(()=>{
  // 第一層目錄
  let items = [
    {
      id : '1', value : '1'
      // other properties...
    }
  ].map((x)=>{
    const isOpened = opened.value.includes(x.id)
    const onClick = () => setOpened(x.id)
    const Children = isOpened ? CommonChildren[x.type] : []
    return { ...x, onClick, Children }
  })
  // ...... return menus
});
</script>
```
