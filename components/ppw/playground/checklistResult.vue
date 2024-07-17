<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    source?: string
    readonly?: boolean
  }>(),
  {
    source: "Source content here !",
    readonly: false,
  }
)

const content = ref(props.source)

const content2 = computed(() => {
  return `
::ppw-checklist-result-static
---
${content.value}
---
::
`.trim()
})
</script>

<template>
  <ppw-playground-main>
    <template #left="leftProps">
      <ppw-editor v-model="content" language="yaml" />
    </template>

    <template #right="rightProps">
      <MDC v-slot="{ data, body }" :value="content2">
        <MDCRenderer :body="body" :data="data" />
      </MDC>
    </template>
  </ppw-playground-main>
</template>
