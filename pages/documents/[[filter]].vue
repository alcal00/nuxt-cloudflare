<script setup lang="ts">
import { type BrowserFilter } from '~~/models/browser'

const route = useRoute()
const filter = route.params.filter as string
const path = route.query.path || ''

// redirect if filterType is empty
if (filter === "") {
  await navigateTo({ path: "/documents/pending" })
}

const filters: BrowserFilter[] = [
  { name: "inbox", icon: "i-mdi-inbox-arrow-down" },
  { name: "pending" },
  { name: "completed" },
  { name: "draft" },
  { name: "all", icon: "i-mdi-inbox-full" },
]

const isOpenUploadOptions = ref(false)
const isOpenDelegateOptions = ref(false)
const isOpenCraftOptions = ref(false)
const isOpenSampleOptions = ref(false)


const addActions = [
  [{
    label: 'upload file',
    icon: 'i-heroicons-archive-box-20-solid',
    click: () => { isOpenUploadOptions.value = true },
  },
  {
    label: 'craft a new document',
    icon: 'i-heroicons-archive-box-20-solid',
    click: () => { isOpenCraftOptions.value = true },
  },
  {
    label: 'delegate a new document',
    icon: 'i-heroicons-archive-box-20-solid',
    click: () => { isOpenDelegateOptions.value = true },
  },
  {
    label: 'create sample documents',
    icon: 'i-heroicons-archive-box-20-solid',
    click: () => { isOpenSampleOptions.value = true },

  },
  ]
]


async function actionUploadFile() {
  console.debug('actionUploadFile ...')
}


const apiUrl = computed(() => {
  // remove trailing / if present
  const path2 = path.replace(/^\//, '')
  return `/api/documents/${path2}`
})

</script>


<template>
  <div>
    <ppw-document-upload-options v-model="isOpenUploadOptions" />
    <ppw-document-craft-options v-model="isOpenCraftOptions" />
    <ppw-document-delegate-options v-model="isOpenDelegateOptions" />
    <ppw-document-sample-options v-model="isOpenSampleOptions" />
  </div>

  <UDashboardPanelContent>
    <ppw-gallery-browser :source="apiUrl" disableOnlyPublishedFilter :filter="filter"
      :filters="filters">

      <template #actionsDropdown>
        <UDropdown :items="addActions" :popper="{ placement: 'bottom-start' }">
          <UButton icon="i-heroicons-pencil-square" color="white" trailing-icon="i-heroicons-chevron-down-20-solid" />
        </UDropdown>
      </template>

      <template #itemCard="item">
        <ppw-document-item :item="item" />
        <!--<p>item = {{ item }}</p>-->
      </template>

    </ppw-gallery-browser>
  </UDashboardPanelContent>
</template>
