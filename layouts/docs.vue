<script setup lang="ts">
import type { NavItem } from "@nuxt/content/dist/runtime/types"

const nav1 = inject<Ref<NavItem[]>>("navigation")
//const nav2 = nav1.value[0].children[1].children

//console.debug({ nav1, nav2 })
</script>

<template>
  <div>
    <ppw-header />

    <UMain>
      <UContainer>
        <UPage>
          <template #left>
            <UAside>
              <!--<UNavigationTree :links="mapContentNavigation(nav2)" />-->
              <UNavigationTree :links="mapContentNavigation(nav1)" class="mynav" />

            </UAside>
          </template>
          <ppw-social-share class="sticky top-16 float-right" />            
          <slot />
        </UPage>
      </UContainer>
    </UMain>
    <ppw-footer />
  </div>
</template>

<style scoped>
/*
 .mynav  {
   background-color: blueviolet;
 }
 */
</style>