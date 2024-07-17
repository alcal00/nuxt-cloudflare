<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core'


const { panels, panelsPref, panelsSave } = await useUserPrefs()

const appConfig = useAppConfig()

const DEBOUNCE_SAVE_PERIOD = 4000

const state = reactive<{ [key: string]: boolean }>({
  email: true,
  desktop: false,
  product_updates: true,
  weekly_digest: false,
  important_updates: true
})

const panelsRefs = [{
  id: 'welcome',
  label: 'Welcome',
  description: 'Welcome user',
}, {
  id: 'survey',
  label: 'Survey',
  description: 'Survey',
}, {
  id: 'check_stats',
  label: 'check_stats',
  description: 'check_stats',
}, {
  id: 'craft_stats',
  label: 'craft_stats',
  description: 'craft_stats',
}]

const panelUnknown = {
  id: 'xxx',
  label: 'N/A',
  description: 'N/A',
}


function panelRefFromId(id: string) {
  const res = panelsRefs.filter((x) => x.id === id)
  return res.length > 0 ? res[0] : panelUnknown
}


const panelsSaveDebounced = useDebounceFn(async () => {
  await panelsSave()
}, DEBOUNCE_SAVE_PERIOD)

async function onChange() {
  // Do something with data
  console.log("change", state)
  await panelsSaveDebounced()
}


const defaultColors = ref(['green', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet'].map(color => ({ label: color, chip: color, click: () => appConfig.ui.primary = color })))
const colors = computed(() => defaultColors.value.map(color => ({ ...color, active: appConfig.ui.primary === color.label })))

</script>

<template>
  <UDashboardPanelContent class="pb-24">
    <ClientOnly>
      <UDashboardSection title="Dashboard panels" description="Show/hide panels in your home dashboard"
        orientation="horizontal" class="px-4 py-6">

        <UCard :ui="{ body: { base: 'divide-y divide-gray-200 dark:divide-gray-800 gap-4 flex flex-col' } }">
          <UFormGroup v-for="(field, key, index) in panels" :key="key" :name="key"
            :label="panelRefFromId(key).description" :description="panelRefFromId(key).description"
            class="flex items-center justify-between pt-4 first:pt-0 gap-2" :ui="{ container: 'flex' }">
            <UToggle v-model="field.show" size="md" @update:model-value="onChange" />
          </UFormGroup>

        </UCard>
      </UDashboardSection>

      <UDivider class="mb-4" />

      <UDashboardSection title="Theme" description="Customize the look and feel of your dashboard.">
        <template #links>
          <UColorModeSelect color="gray" />
        </template>
      </UDashboardSection>

      <UDivider class="mb-4" />

      <UDashboardSection title="Style" description="Style your paxpar experience">
        <UDashboardSidebarLinks :links="[{ label: 'Colors', draggable: true, children: colors }]"
          @update:links="colors => defaultColors = colors" />
      </UDashboardSection>
    </ClientOnly>

  </UDashboardPanelContent>
</template>
