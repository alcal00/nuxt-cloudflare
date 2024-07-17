<script lang="ts" setup>
import { debugPagesAsCommands } from "~~/src/debug"
</script>

<template>
  <UDashboardPanelContent>
    <ppw-gallery-browser :sourceItems="debugPagesAsCommands" filter="debug" disableOnlyPublishedFilter />
  </UDashboardPanelContent>
</template>