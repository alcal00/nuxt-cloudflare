
<script setup lang="ts">
import { type BrowserFilter } from '~~/models/browser'

const filter = 'schema'

const filters: BrowserFilter[] = [
  { name: "checklist" },
  { name: "craftform" },
  { name: "schema" },
]

</script>

<template>
  <UDashboardPanelContent>
    <ppw-gallery-browser source="/api/ref/public" :filter="filter" :filters="filters" />
  </UDashboardPanelContent>
</template>
