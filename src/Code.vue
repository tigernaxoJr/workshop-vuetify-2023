<!-- <template>
	<textarea rows="5" 
		:value="state.txt" 
		@input="onInput(($event.target as HTMLTextAreaElement).value)"
	> </textarea>
	{{ state }}
	<pre>
		<code class="language-javascript" ref="divRef"> </code>
	</pre>
</template>

<script setup lang="ts">
import hljs from 'highlight.js'
import { computed, reactive, ref } from 'vue';
// import js from 'highlight.js/lib/languages/*'
// hljs.registerLanguage('javascript', js)
const state = reactive({
	txt:'',
	code:''
})
const divRef = ref<HTMLElement|null>(null)
const onInput = (val)=>{
	state.txt = val;
	const el = divRef.value as HTMLElement
	el.textContent = state.txt
	hljs.highlightElement(divRef.value as HTMLElement)
}

</script>

<style scoped lang="scss">
@import 'node_modules\\highlight.js\\scss\\night-owl.scss';
</style> -->