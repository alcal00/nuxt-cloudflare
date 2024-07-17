<script setup lang="ts">
const route = useRoute()
const id = route.params.id

//TODO: query actor in content
//TODO: query image in public/asset

</script>

<template>
    <p>card game {{ id }}</p>
</template>