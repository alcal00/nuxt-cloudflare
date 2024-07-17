<script setup lang="ts">
import { sub } from 'date-fns'
import type { Period, Range } from '~/types'

const { isNotificationsSlideoverOpen } = useDashboard()


const items = [[{
  label: 'New document',
  icon: 'i-heroicons-paper-airplane',
  to: '/home'
}, {
  label: 'New request',
  icon: 'i-heroicons-user-plus',
  to: '/home'
}, {
  label: 'New checklist',
  icon: 'i-heroicons-user-plus',
  to: '/home'
}, {
  label: 'New craftform',
  icon: 'i-heroicons-user-plus',
  to: '/home'
}, {
  label: 'New schema',
  icon: 'i-heroicons-user-plus',
  to: '/home'
}, {
  label: 'New module',
  icon: 'i-heroicons-user-plus',
  to: '/home'
}]]

const range = ref<Range>({ start: sub(new Date(), { days: 14 }), end: new Date() })
const period = ref<Period>('daily')
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Home">
        <template #right>
          <UTooltip text="Notifications" :shortcuts="['N']">
            <UButton color="gray" variant="ghost" square @click="isNotificationsSlideoverOpen = true">
              <UChip color="red" inset>
                <UIcon name="i-heroicons-bell" class="w-5 h-5" />
              </UChip>
            </UButton>
          </UTooltip>

          <UDropdown :items="items">
            <UButton icon="i-heroicons-plus" size="md" class="ml-1.5 rounded-full" />
          </UDropdown>
        </template>
      </UDashboardNavbar>

      <UDashboardToolbar>
        <template #left>
          <HomeDateRangePicker v-model="range" class="-ml-2.5" />

          <HomePeriodSelect v-model="period" :range="range" />
        </template>
      </UDashboardToolbar>

      <ppw-home />

    </UDashboardPanel>
  </UDashboardPage>
</template>
