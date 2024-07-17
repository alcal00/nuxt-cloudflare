<script setup lang="ts">
const { domain, useFetchPP } = usePaxparAPI()

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
}, {
  title: 'Account updates'  ,
  description: 'Receive updates about Nuxt UI.',
  fields: [{
    name: 'weekly_digest',
    label: 'Weekly digest',
    description: 'Receive a weekly digest of news.'
  }, {
    name: 'product_updates',
    label: 'Product updates',
    description: 'Receive a monthly email with all new features and updates.'
  }, {
    name: 'important_updates',
    label: 'Important updates',
    description: 'Receive emails about important updates like security fixes, maintenance, etc.'
  }]
}]

async function onChange() {
  // Do something with data
  console.log(state)
}

const prefDebug = ref(false)

//const supabase = useSupabaseClient()
//const appConfig = useAppConfig()

const version = ref()
const metrics = ref()

onMounted(async () => {
  version.value = (await useFetchPP(`/api/version`)).data

  // http://localhost:3000/metrics
  //const xx = await useFetch(`/metrics`)
  const rawMetrics = (await useFetch(`/metrics`)).data.value
  //console.log("rawMetrics", rawMetrics)
  //metrics.value = await rawMetrics.text()
  metrics.value = rawMetrics

  /*
  const {
    debug: debugProfile,
    prefs: prefsProfile,

  } = await useUserPrefs()
  prefDebug.value = debugProfile.value
  prefs.value = prefsProfile.value
  */

})

function debugToggle() {
  console.debug('not implemented !!!')
}
</script>

<template>
  <UDashboardPanelContent class="p-0 pb-24 divide-y divide-gray-200 dark:divide-gray-800">
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


          <div class="form-control w-full max-w-xs">
              <label class="label">
                  <span class="label-text">paxpar backend version</span>
                  <span class="label-text">{{ version }}</span>
              </label>
          </div>

          <p>paxpar widgets version = {{ metrics }}</p>
          <p>front version = {{ metrics }}</p>

          <div class="divider"></div>

          <div class="card bg-base-100 shadow-xl">
              <div class="card-body">
                  <p>domain = {{ domain }}</p>

                  <div class="divider"></div>
                  <!--
      <h2 class="card-title">supabase backend</h2>
      <p>URL = {{ supabase.supabaseUrl }}</p>
      <p>
        key = {{ supabase.supabaseKey }} <copy-button :content="supabase.supabaseKey" />
      </p>

      <div class="divider"></div>
      <h2 class="card-title">stripe backend</h2>
      <p>customer_portal = {{ appConfig.paxpar?.stripe?.customer_portal }}</p>
      <p>pricing_table_id = {{ appConfig.paxpar?.stripe?.pricing_table_id }}</p>
      <p>publishable_key = {{ appConfig.paxpar?.stripe?.publishable_key }}</p>
      -->
              </div>
          </div>

  </udashboardpanelcontent>
</template>
