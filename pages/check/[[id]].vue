<script setup lang="ts">
const route = useRoute()

const checklist_id = route.params.id
const upload_url = `/api/pdf/check/${checklist_id}`

const node = reactive({})
const uploading = ref(false)

const dropfileMain = ref()

function uploadStart() {
  uploading.value = true
}

function dropzone_resp(resp) {
  //console.log('dropzone_resp', resp)
  uploading.value = false
  Object.assign(node, resp)
}

const nodeEmpty = computed(() => {
  return Object.keys(node).length == 0
})


</script>

<template>
  <UDashboardPanelContent>
    <ClientOnly>
      <p v-if="checklist_id">checklist {{ checklist_id }}</p>

      <ppw-dropfile-main3 ref="dropfileMain" :show-files="false" :url="upload_url" session-path="check"
        @uploadStart="uploadStart" @uploadSuccess="dropzone_resp">
        <div v-if="nodeEmpty" @click="dropfileMain.openFile" class="items-center align-middle p-28 w-full h-96">
           <UIcon name="mdi:file-arrow-up-down-outline" size="128" />
        </div>

        <ppw-checklist-result v-if="!nodeEmpty && !uploading" :node="node" :show_root="false"
          :hide_modes_selector="false" mode="simple"></ppw-checklist-result>
      </ppw-dropfile-main3>


      <ppw-debug-panel>
        <p>uploading = {{ uploading }}</p>
        <p>nodeEmpty = {{ nodeEmpty }}</p>
      </ppw-debug-panel>

    </ClientOnly>
  </UDashboardPanelContent>
</template>
