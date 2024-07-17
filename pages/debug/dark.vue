<script setup="ts">
const colorMode = useColorMode()
const svgPath = ref('/anim/tuto.svg')

</script>

<template>
    <p>dark mode debug page</p>
    <p>colorMode = {{ colorMode.value }}</p>

    <UColorModeToggle />


    <ppw-svg :href="svgPath" class="w-full"/>
</template>