<script setup lang="ts">
//import endent from 'endent'
import VueMermaidString from 'vue-mermaid-string'

const props = withDefaults(defineProps<{
  def?: string;
}>(), {
  def: '',
})

/*
// this.$refs.mySlot.textContent;
const mermaidRef = ref()

const mermaidDef2 = computed(() => {
  const res = mermaidRef?.value?.textContent || props.def
  console.log(res)
  console.log(mermaidRef?.value)

  return res
})
*/

onMounted(() => {
  //if (props.def === undefined) {
  //console.log('props.def', props.def)
  //console.log('mermaidRef.value', mermaidRef.value)
  //}
})


</script>


<template>
  <ClientOnly>
    <vue-mermaid-string :value="def" />
    <!--
      <div ref="mermaidRef">
        <slot></slot>
      </div>
    -->

  </ClientOnly>
</template>
