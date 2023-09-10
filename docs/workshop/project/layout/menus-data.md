# 選單資料
- 後端原則：後端回傳 raw data，不需要在後端組合目錄樹。
- 前端原則：以 Data 控制元件表現，而不是將商業邏輯寫入元件！！！
  - 相較修改 ViewModel，使用程式控制資料（javascript 物件）的形狀容易許多。
  - 與特定商業邏輯耦合的元件也無法復用。
  - 如果是不會變動的固定選單資料，直接寫死為 javascript 物件即可。

## 動態選單資料練習
診別：`急診`、`門診`、`住院`，不同診別需要顯示不同的樹狀結構，診別樹狀結構定義儲存在資料庫。
Raw Data: 紀載每次病人就診診別、當次就診參數。
處理技巧：
 - 元件 UI 結構可用，不需重寫元件(否則會將業務邏輯滲入元件造成耦合)，應由資料控制元件表現。
 - 善用資料的 reactivity 簡化程式碼
 - 除了 raw data 之外可以製造狀態 (state)。
 - 概念為：`data = computed(()=>( raw data + state ))`
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
