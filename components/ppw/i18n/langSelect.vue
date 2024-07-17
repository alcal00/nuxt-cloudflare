<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const newLang = ref(locale.value)

watch(newLang, async (newValue, oldValue) => {
    //console.log("newLang", { newValue, oldValue })
    navigateTo(switchLocalePath(newLang.value))
})


//  < NuxtLink v-for= "locale in availableLocales" : key = "locale.code" : to = "switchLocalePath(locale.code)" > {{
// <USelectMenu v-model="locale" :options="locales.map(x => x.code)"
</script>

<template>
    <USelectMenu v-model="newLang" :options="locales.map(x => x.code)" class="w-16" />
</template>


