<script setup lang="ts">
const { panels } = await useUserPrefs()
</script>

<template>
  <UDashboardPanelContent>

    <ppw-panel-welcome v-if="panels.welcome.show" />
    <ppw-panel-survey v-if="panels.survey.show" />

    <div class="grid lg:grid-cols-2 lg:items-start gap-8 mt-8">

      <ppw-panel-checklists v-if="panels.check_stats.show" title="Checklists" description="Your recent checklists"
        icon="i-heroicons-chart-bar-20-solid" />

      <ppw-panel-checklists v-if="panels.craft_stats.show" title="Craftforms" description="Your recent craftforms"
        icon="i-heroicons-chart-bar-20-solid" />


      <ppw-panel-documents v-if="panels.check_stats.show" title="Pending craft"
        description="The documents you are currently carfting" icon="i-heroicons-chart-bar-20-solid" />

      <ppw-panel-documents v-if="panels.check_stats.show" title="Pending request"
        description="You made 128 sales this month." icon="i-heroicons-chart-bar-20-solid" />

      <ppw-panel-documents v-if="panels.check_stats.show" title="Pending delegations"
        description="You made 128 sales this month." icon="i-heroicons-chart-bar-20-solid" />

      <ppw-panel-documents v-if="panels.craft_stats.show" title="To be purged Soon"
        description="You made 128 sales this month." icon="i-heroicons-chart-bar-20-solid" />

      <ppw-panel-documents v-if="panels.craft_stats.show" title="Recent craft"
        description="You made 128 sales this month." icon="i-heroicons-chart-bar-20-solid" />

      <ppw-panel-documents v-if="panels.craft_stats.show" title="Recent check"
        description="You made 128 sales this month." icon="i-heroicons-chart-bar-20-solid" />

      <HomeSales v-if="panels.craft_stats.show" />
      <HomeCountries v-if="panels.craft_stats.show" />

    </div>
  </UDashboardPanelContent>

</template>
