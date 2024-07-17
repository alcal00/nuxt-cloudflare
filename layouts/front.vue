<script setup lang="ts">
//import type { NavItem } from "@nuxt/content/dist/runtime/types"
//const navigation = inject<Ref<NavItem[]>>("navigation")
</script>

<template>
  <div>
    <ppw-header />

    <UMain>
      <UContainer>
        <UPage>
          <slot />
        </UPage>
      </UContainer>
    </UMain>
    <ppw-footer />
  </div>
</template>
