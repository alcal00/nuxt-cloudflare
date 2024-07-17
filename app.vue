<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content/dist/runtime/types"

const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#111827' : 'white')

const { data: navigation } = await useAsyncData("navigation", () =>
  fetchContentNavigation()
)
const { data: files } = useLazyFetch<ParsedContent[]>("/api/search.json", {
  default: () => [],
  server: false,
})

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { key: 'theme-color', name: 'theme-color', content: color }

  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  script: [
    {
      src:
        "/deploy_conf.js",
      type: "text/javascript",
      //async: true,
    },
  ]

  //TODO: since i18n, shall we set the lang ourselve ?
  //htmlAttrs: {
  //  lang: "en",
  //},
})



const title = 'paxpar'
const description = 'The document compliance platform'


useSeoMeta({
  title,
  description,
  ogSiteName: title,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://dashboard-template.nuxt.dev/social-card.png',
  twitterImage: 'https://dashboard-template.nuxt.dev/social-card.png',
  twitterCard: "summary_large_image",
})

provide("navigation", navigation)
</script>

<template>
  <div>
    <NuxtLoadingIndicator />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <ClientOnly>
      <LazyUContentSearch :files="files" :navigation="navigation" />
    </ClientOnly>

    <UNotifications />
    <UModals />
  </div>
</template>
