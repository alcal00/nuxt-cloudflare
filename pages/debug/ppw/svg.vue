<script setup lang="ts">
const sample_svg1 = "🌐pp/api/bucket/public/dummy/anim.svg"
const sample_svg2 = "🌐pp/api/bucket/public/dummy/anim2.svg"

const svg_path = ref(sample_svg1)
</script>

<template>
  <div class="w-full">
    <h1>debug SVG page</h1>
    <input
      v-model="svg_path"
      type="text"
      placeholder="Type here"
      class="input input-bordered w-full"
    />

    <button @click="svg_path = sample_svg1" class="btn">small</button>
    <button @click="svg_path = sample_svg2" class="btn">large</button>

    <ppw-svg class="border-double border-4 border-sky-500 w-80 h-80" :href="svg_path" />
    <ppw-svg :href="svg_path" />
  </div>
</template>
