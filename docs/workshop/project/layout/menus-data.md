# 選單資料練習
複雜資料處理方式：
 - 避免讓元件和頁面選單產生耦合、避免修改通用元件產生一個需要維護的新元件。
 - 善用資料的 reactivity 簡化程式碼
 - computed data => rowdata + state 
 - 善用 object reference 減少 menu 大小
以病歷整合查詢選單為例：
##  計算資料
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
