<script setup lang="ts">
const route = useRoute()
const filterType = route.params.filterType


// redirect if filterType is empty
if (filterType === "") {
  await navigateTo({ path: "/gallery/checklist" })
}
//TODO: show error if filterType is not recognized
// if (filterType === undefined) {
// showError("😱 Oh no, an error has been thrown.")
// }
</script>

<template>
  <ppw-gallery-old-browser :filterType="filterType" />
</template>
