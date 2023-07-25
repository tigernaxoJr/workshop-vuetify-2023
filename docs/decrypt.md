---
---

<script setup>
import { useSecret } from '@/store.js'

const secret = useSecret()
const setSecret = (v)=>secret.value = v

</script>

<input 
  class="my-input"
  :value="secret" @input="secret = $event.target.value" 
  type="password" placeholder="Enter your secret here"
/>

<style>

.my-input {
    border: solid 1px gray;
    border-radius: 5px;
    padding: 0em 1em;
}
</style>