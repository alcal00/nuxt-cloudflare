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
</script>

<template>
  <ppw-playground-main>
    <template #left="leftProps">
      <ppw-editor v-model="content" language="markdown" />
    </template>

    <template #right="rightProps">
      <MDC v-slot="{ data, body }" :value="content">
        <MDCRenderer :body="body" :data="data" />
      </MDC>
    </template>
  </ppw-playground-main>
</template>
