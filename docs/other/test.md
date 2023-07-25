---
hello: world
---

<script setup>
import { ref, onMounted } from 'vue'
import crypto from 'crypto-js'
import { useHtml } from './test.js'

const decrypt = () => {
  const html = useHtml(secret.value)
  const el = document.getElementById('mountPoint')
  el.innerHTML = html
  decrypted.value = true
}
const decrypted = ref(false)
const secret = ref("")
</script>

<!-- 解密測試 -->
<div id="mountPoint"></div>
<div v-if="!decrypted">
  <input type="text" :value="secret" @input="secret=$event.target.value" placeholder="Enter your secret here">
  <button @click="decrypt" class="pager-link">解密</button>
</div>

<!-- ## frontmatter 測試
{{ $frontmatter.hello }} -->

<style module>
.button {
  border: 1px solid;
  color: red;
  font-weight: bold;
}
</style>