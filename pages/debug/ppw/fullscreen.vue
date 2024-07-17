<script setup lang="ts">
  const zoom3 = ref(false)
</script>

<template>
  <div class="w-full">
    <h1>debug ppw-fullscreen page</h1>

    <ppw-fullscreen showZoomButton showHeader>
      <p class="bg-red-500 w-20 h-20">My content !!!</p>
    </ppw-fullscreen>

    <UDivider color="gray" />

    <ppw-fullscreen showZoomButton showHeader>
        <p class="bg-green-500 w-20 h-20">My content 2 !!!</p>
      </ppw-fullscreen>

    <UDivider color="gray" />

    <ppw-fullscreen v-model="zoom3">
        <p class="bg-blue-500 w-20 h-20">My content 3 !!!
        <UButton @click="zoom3 = !zoom3" label="zoom" />
        </p>
    </ppw-fullscreen>
  </div>
</template>
