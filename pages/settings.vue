<script setup lang="ts">
//TODO: dedup with default layout menu content
const links = [[{
  label: 'Me',
  icon: 'i-heroicons-user-circle',
  to: '/settings',
  exact: true
}, {
  label: 'Workspace',
  icon: 'i-heroicons-user-group',
  to: '/settings/workspace'
}, {
  label: 'Plan',
  icon: 'i-heroicons-user-group',
  to: '/settings/plan'
}, {
  label: 'Permissions',
  icon: 'i-heroicons-user-group',
  to: '/settings/perms'
}, {
  label: 'Signature',
  icon: 'i-heroicons-user-group',
  to: '/settings/signature'
}, {
  label: 'Storage',
  icon: 'i-heroicons-user-group',
  to: '/settings/storage'
}, {
  label: 'API',
  icon: 'i-heroicons-bell',
  to: '/settings/api'
}, {
  label: 'Support',
  icon: 'i-heroicons-bell',
  to: '/settings/support'
}, {
  label: 'Misc',
  icon: 'i-heroicons-bell',
  to: '/settings/misc'
}], [{
  label: 'Documentation',
  icon: 'i-heroicons-book-open',
  to: '/docs',
  target: '_blank'
}]]
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Settings" />

      <UDashboardToolbar class="py-0 px-1.5 overflow-x-auto">
        <UHorizontalNavigation :links="links" />
      </UDashboardToolbar>

      <NuxtPage />
    </UDashboardPanel>
  </UDashboardPage>
</template>
