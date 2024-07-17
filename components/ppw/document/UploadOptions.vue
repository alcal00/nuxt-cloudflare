<script setup lang="ts">

const isOpen = defineModel()

</script>

<template>
  <ppw-modal v-model="isOpen" okCancel content-slot>
    <UFormGroup label="source doc" required>
      <UInput placeholder="you@example.com" icon="i-heroicons-envelope" />
    </UFormGroup>

    <UFormGroup label="name" required>
      <UInput placeholder="you@example.com" icon="i-heroicons-envelope" />
    </UFormGroup>
  </ppw-modal>
</template>