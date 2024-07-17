<script setup lang="ts">
const route = useRoute()

//console.debug("route.query", route.query)
//const { featureFlags } = await useUserPrefs()
const featureFlags = { ref2: false }

const craft_id = route.query.id as string

</script>

<template>
  <UDashboardPanelContent>
    <ClientOnly>
      <ppw-craft v-if="featureFlags.ref2" :craft_id="craft_id" />
      <ppw-wizard-craft v-else :craft_id="craft_id" />
    </ClientOnly>
  </UDashboardPanelContent>
</template>
