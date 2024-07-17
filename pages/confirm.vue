<script setup lang="ts">
const user = useSupabaseUser()

watch(
  user,
  () => {
    if (user.value) {
      return navigateTo("/")
    }
  },
  { immediate: true }
)
</script>
<template>
  <ppw-modal-full>
    <div>Waiting for login...</div>
  </ppw-modal-full>
</template>
