## Breakpoints
|code|range|
|-|-|
|xs|<600px|
|sm|600px><960px|
|md|960px><1280px|
|lg|1280px><1920px|
|xl|1920px><2560px|
|xxl|>2560px|

## 常用搜尋區 RWD
```html
<v-row>
  <v-col cols="12" md="6" lg="3">1</v-col>
  <v-col cols="12" md="6" lg="3">2</v-col>
  <v-col cols="12" md="6" lg="3">3</v-col>
  <v-col cols="12" md="6" lg="3">4</v-col>
</v-row>
```
螢幕寬度 {{width}}，效果：

<div class="row">
  <div :class="col">搜尋框1</div>
  <div :class="col">搜尋框2</div>
  <div :class="col">搜尋框3</div>
  <div :class="col">搜尋框4</div>
  <div :class="col" class="border-0" v-if="col=='col-3'">填充</div>
  <div :class="col" class="border-0" v-if="col=='col-3'">填充</div>
  <div :class="col">搜尋按鈕</div>
  <div :class="col">清空按鈕</div>
</div>

<script setup> 
import { ref, computed, reactive, onMounted, onUnmounted } from 'vue'

// width
const width = ref(0);
onMounted(()=>(width.value = window.innerWidth))
const resizeHandler = (e)=> (width.value = window.innerWidth)
let listener;
onMounted(()=> (listener = window.addEventListener("resize", resizeHandler)))
onUnmounted(()=> window.removeEventListener("resize", listener))

// col
const col = computed(()=>{
	if(width.value < 960) return 'col-12'
	if(width.value < 1280) return 'col-6'
	return 'col-3'
})

</script>
<style > 
* {
  box-sizing: border-box; /* 这会将内边距和边框计算在元素的总宽度内 */
 }
.row { 
	display: flex; 
	max-width: 100%;
	flex-wrap: wrap;
}
.row * { border: 1px solid #000; }
.border-0 { border: 0px !important; }
.col { flex: 1 0 0%; } /*增長因子為 1，會長大*/ 
/* col-1 ~ col-12 固定百分比 */
/* .col-auto{flex:0 0 auto;width:auto}
.col-1{flex:0 0 auto;width:8.33333333%}
.col-2{flex:0 0 auto;width:16.66666667%} */
.col-3 {
  flex: 0 0 25%; /* 或者 flex: 1 0 25%; 如果你希望元素能够收缩以适应空间 */
  max-width: 25%;
}
/* .col-4{flex:0 0 auto;width:33.33333333%}
.col-5{flex:0 0 auto;width:41.66666667%}
 */
.col-6 {
  flex: 0 0 50%; /* 或者 flex: 1 0 25%; 如果你希望元素能够收缩以适应空间 */
  max-width: 50%;
}
/* .col-7{flex:0 0 auto;width:58.33333333%}
.col-8{flex:0 0 auto;width:66.66666667%}
.col-9{flex:0 0 auto;width:75%}
.col-10{flex:0 0 auto;width:83.33333333%}
.col-11{flex:0 0 auto;width:91.66666667%}
*/
.col-12{flex:0 0 100%;max-width:100%} 
</style>