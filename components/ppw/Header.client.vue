<script setup lang="ts">
import type { NavItem } from "@nuxt/content/dist/runtime/types"

const navigation = inject<NavItem[]>("navigation", [])
const localePath = useLocalePath()
const { header } = useAppConfig()
</script>

<template>
  <UHeader>
    <template #logo>
      <NuxtLinkLocale to="/">
        <template v-if="header?.logo?.dark || header?.logo?.light">
          <UColorModeImage v-bind="{ class: 'h-6 w-auto', ...header?.logo }" />
        </template>
        <template v-else>
          paxpar
          <UBadge label=".tech" variant="subtle" class="mb-0.5" />
        </template>
      </NuxtLinkLocale>
    </template>

    <template #center>
      <template v-if="header?.links">
        <UButton v-for="(link, index) of header.links" :key="index"
          v-bind="{ color: 'gray', variant: 'ghost', icon: link.icon, label: link.label }" :to="localePath(link.to)" />
      </template>
    </template>

    <template #right>
      <ppw-i18n-lang-select />
      <UColorModeButton v-if="header?.colorMode" />
      <ppw-profile-icon />
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>
