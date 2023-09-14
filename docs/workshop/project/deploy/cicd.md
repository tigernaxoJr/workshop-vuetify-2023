---
hello: world
---

<script setup>
import { ref, onMounted } from 'vue'
import crypto from 'crypto-js'
import { useHtml } from './cicd.js'
import { useSecret } from '@/store.js'

const secret = useSecret()

const decrypt = () => {
  try{
    const html = useHtml(secret.value)
    const el = document.getElementById('mountPoint').parentNode
    while(el.firstChild){
      el.removeChild(el.firstChild)
    }
    el.innerHTML = html
  } catch(e){
    console.error(e)
    alert('本頁為加密內容，請輸入密鑰解密，並檢查密鑰是否正確')
  }
}
onMounted(()=>decrypt())
</script>

<!-- 解密測試 -->
<div id="mountPoint">
  <div>加密內容，請先解密</div>
</div>

<style module>
.button {
  border: 1px solid;
  color: red;
  font-weight: bold;
}
</style>