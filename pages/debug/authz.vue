<script setup lang="ts">
const { rulesCommon, permissions, permissionsPathGet, pathAuthorized } = usePerm()

const columns = [{
  key: 'path',
  label: 'path'
}, {
  key: 'permission',
  label: 'permission'
}, {
  key: 'doc',
  label: 'doc'
}]

const q = ref('')
const path = ref('')

const filteredRows = computed(() => {
  if (!q.value) {
    return rulesCommon
  }

  return rulesCommon.filter((perm) => {
    return Object.values(perm).some((value) => {
      return String(value).toLowerCase().includes(q.value.toLowerCase())
    })
  })
})



const permFromPath = computed(() => {
  return permissionsPathGet(path.value)
})


const isPathAuthorized = computed(() => {
  return pathAuthorized(path.value)
})

</script>


<template>
  <UDashboardPanelContent>
    <UDashboardSection title="authz debug page">
      <div>
        <UInput v-model="q" placeholder="Filter perm..." />

        <UTable :rows="filteredRows" :columns="columns" />
      </div>
    </UDashboardSection>

    <UDashboardSection title="test path authz">
      <div>
        <UInput v-model="path" placeholder="Path ..." />

        <div v-for="perm in permFromPath">{{ perm }}</div>

        <p>pathAuthorized = {{ isPathAuthorized }}</p>
      </div>
    </UDashboardSection>


    <UDashboardSection title="your permissions">
      <div>
        <div v-for="perm in permissions">{{ perm }}</div>
      </div>
    </UDashboardSection>


  </UDashboardPanelContent>
</template>
