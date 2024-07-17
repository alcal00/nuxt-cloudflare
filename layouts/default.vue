<script setup lang="ts">
import { debugPagesAsCommands } from "~~/src/debug"


const route = useRoute()
const appConfig = useAppConfig()
const { isHelpSlideoverOpen } = useDashboard()
const localePath = useLocalePath()

const links = [{
  id: 'home',
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/home',
  tooltip: {
    text: 'Home',
    shortcuts: ['G', 'H']
  }
}, {
  id: 'inbox',
  label: 'Inbox',
  icon: 'i-heroicons-inbox',
  //icon: 'i-heroicons-square-3-stack-3d',
  children: [{
    label: 'inbox',
    to: '/documents/inbox',
    badge: '0',
    exact: true
  }, {
    label: 'pending docs',
    to: '/documents/pending',
    badge: '3',
  }, {
    label: 'draft docs',
    to: '/documents/draft',
    badge: '1',
  }, {
    label: 'all docs',
    to: '/documents/all',
    badge: '5',
  }],
  tooltip: {
    text: 'Inbox',
    shortcuts: ['G', 'I']
  }
}, {
  id: 'check',
  label: 'check',
  icon: 'i-heroicons-inbox',
  to: '/check',
  tooltip: {
    text: 'Check a document',
    shortcuts: ['G', 'K']
  }
}, {
  id: 'craft',
  label: 'craft',
  icon: 'i-heroicons-inbox',
  to: '/gallery/craftform',
  tooltip: {
    text: 'Craft a new document',
    shortcuts: ['G', 'C']
  }
}, {
  id: 'gallery',
  label: 'gallery',
  icon: 'i-heroicons-inbox',
  children: [
    {
      label: 'checklist',
      to: '/gallery/checklist',
    }, {
      label: 'craftform',
      to: '/gallery/craftform',
    }, {
      label: 'schema',
      to: '/gallery/schema',
    },
  ],
  tooltip: {
    text: 'Craft a new document',
    shortcuts: ['G', 'C']
  }
}, {
  id: 'settings',
  label: 'Settings',
  to: '/settings',
  icon: 'i-heroicons-cog-8-tooth',
  children: [{
    label: 'Me',
    to: '/settings',
    exact: true
  }, {
    label: 'Plan',
    to: '/settings/plan',
  }, {
    label: 'Workspace',
    to: '/settings/workspace',
  }, {
    label: 'Permissions',
    to: '/settings/perms',
  }, {
    label: 'Signature',
    to: '/settings/signature',
  }, {
    label: 'Storage',
    to: '/settings/storage',
  }, {
    label: 'API',
    to: '/settings/api',
  }, {
    label: 'Support',
    to: '/settings/support',
  }, {
    label: 'Misc',
    to: '/settings/misc',
  }],
  tooltip: {
    text: 'Settings',
    shortcuts: ['G', 'S']
  }
}]

const footerLinks = [{
  label: 'Invite people',
  icon: 'i-heroicons-plus',
  to: '/settings/members',
}, {
  label: 'Help & Support',
  icon: 'i-heroicons-question-mark-circle',
  click: () => isHelpSlideoverOpen.value = true
}]



const groups = [{
  key: 'links',
  label: 'Go to',
  commands: links.map(link => ({ ...link, shortcuts: link.tooltip?.shortcuts }))
}, {
  key: 'debug_pages',
  label: 'Debug pages',
  commands: debugPagesAsCommands,
}]

</script>

<template>
  <UDashboardLayout>
    <UDashboardPanel :width="250" :resizable="{ min: 200, max: 300 }" collapsible>
      <UDashboardNavbar class="!border-transparent" :ui="{ left: 'flex-1' }">
        <template #left>
          <TeamsDropdown />
        </template>
      </UDashboardNavbar>

      <UDashboardSidebar>
        <template #header>
          <UDashboardSearchButton />
        </template>

        <UDashboardSidebarLinks :links="links" />

        <UDivider />

        <div class="flex-1" />

        <UDashboardSidebarLinks :links="footerLinks" />

        <UDivider class="sticky bottom-0" />

        <template #footer>
          <!-- ~/components/UserDropdown.vue -->
          <UserDropdown />
        </template>
      </UDashboardSidebar>
    </UDashboardPanel>


    <slot />

    <!-- ~/components/HelpSlideover.vue -->
    <HelpSlideover />
    <!-- ~/components/NotificationsSlideover.vue -->
    <NotificationsSlideover />

    <ClientOnly>
      <LazyUDashboardSearch :groups="groups" />
    </ClientOnly>
  </UDashboardLayout>
</template>
