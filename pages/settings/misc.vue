<script setup lang="ts">

const appConfig = useAppConfig()


const state = reactive<{ [key: string]: boolean }>({
  email: true,
  desktop: false,
  product_updates: true,
  weekly_digest: false,
  important_updates: true
})

const sections = [{
  title: 'Notification channels',
  description: 'Where can we notify you?',
  fields: [{
    name: 'email',
    label: 'Email',
    description: 'Receive a daily email digest.'
  }, {
    name: 'desktop',
    label: 'Desktop',
    description: 'Receive desktop notifications.'
  }]
}]

async function onChange() {
  // Do something with data
  console.log(state)
}

const defaultColors = ref(['green', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet'].map(color => ({ label: color, chip: color, click: () => appConfig.ui.primary = color })))
const colors = computed(() => defaultColors.value.map(color => ({ ...color, active: appConfig.ui.primary === color.label })))

</script>

<template>
  <UDashboardPanelContent class="pb-24">

    <UDashboardSection v-for="(section, index) in sections" :key="index" :title="section.title"
      :description="section.description" orientation="horizontal" class="px-4 py-6">

      <UCard :ui="{ body: { base: 'divide-y divide-gray-200 dark:divide-gray-800 gap-4 flex flex-col' } }">
        <UFormGroup v-for="field in section.fields" :key="field.name" :name="field.name" :label="field.label"
          :description="field.description" class="flex items-center justify-between pt-4 first:pt-0 gap-2"
          :ui="{ container: 'flex' }">
          <UToggle v-model="state[field.name]" size="md" @update:model-value="onChange" />
        </UFormGroup>

      </UCard>
    </UDashboardSection>


    <UDashboardSection title="RGPD" description="Your personal sensitive data" orientation="horizontal"
      class="px-4 py-6">

      <UCard :ui="{ body: { base: 'divide-y divide-gray-200 dark:divide-gray-800 gap-4 flex flex-col' } }">
        <UFormGroup name="rgpd1" label="Request" description="Get all your personal data"
          class="flex items-center justify-between pt-4 first:pt-0 gap-2" :ui="{ container: 'flex' }">
          <ppw-factice />
          <UButton disabled label="request" />
        </UFormGroup>
        <UFormGroup name="rgpd1" label="Purge" description="Purge all non-necessary personal data"
          class="flex items-center justify-between pt-4 first:pt-0 gap-2" :ui="{ container: 'flex' }">
          <ppw-factice />
          <UButton disabled label="purge" />
        </UFormGroup>


        <UFormGroup name="rgpd1" label="Delete" description="Delete your account"
          class="flex items-center justify-between pt-4 first:pt-0 gap-2" :ui="{ container: 'flex' }">
          <ppw-factice />
          <UButton disabled label="delete" />
        </UFormGroup>

      </UCard>

    </UDashboardSection>


    <UDashboardSection title="Debug" description="Your personal sensitve data" orientation="horizontal"
      class="px-4 py-6">

      <UCard :ui="{ body: { base: 'divide-y divide-gray-200 dark:divide-gray-800 gap-4 flex flex-col' } }">
        <UFormGroup label="debug" description="Debug pages"
          class="flex items-center justify-between pt-4 first:pt-0 gap-2" :ui="{ container: 'flex' }">
          <UButton to="/debug" label="debug pages" />
        </UFormGroup>

      </UCard>
    </UDashboardSection>

  </UDashboardPanelContent>
</template>
