<script setup lang="ts">
import { type ItemPDF } from '~~/types/pdf_showcase.types'


export interface Props {
    animate?: boolean,
    conversation?: any,
    pdfs: ItemPDF[],
    mode?: string,
}

const props = withDefaults(defineProps<Props>(), {
    animate: false,
    pdfs: () => [],
    mode: "simple",
})


const itemSelected = ref<ItemPDF>()
const viewingPDF = ref<boolean>(false)


function checkPDF(pdf: ItemPDF) {
    //console.log('checkPDF ...', pdf)
    itemSelected.value = pdf
}

function viewPDF(pdf: ItemPDF) {
    //console.log('viewPDF ...', pdf)
    viewingPDF.value = true
}

function closeViewer() {
    viewingPDF.value = false
}

const itemCheckResult = computed(() => itemSelected.value?.check_result)

const currentConversation = computed(() => {
    if (itemSelected.value === undefined) {
        return props.conversation
    } else {
        return itemSelected?.value.conversation
    }
})

onMounted(async () => {
    //console.log('anim', props.anim)
    console.debug('showcase-check pdfs', props.pdfs)
})
</script>

<template>
  <div class="hero-content flex-col lg:flex-row">
    <div class="w-1/2">
      <ppw-pdf-links
        v-if="!viewingPDF"
        :pdfs="pdfs"
        @select="checkPDF"
        @action1="viewPDF"
        @empty="itemSelected = undefined"
        :download_on_click="false"
        :action1_enabled="true"
      />
      <div v-if="viewingPDF" class="indicator w-full">
        <div class="indicator-item indicator-bottom">
          <button @click="closeViewer" class="btn btn-primary">
            <icon name="mdi:arrow-left-bold" />
          </button>
        </div>
        <ppw-pdfview
          class="h-screen w-full"
          v-if="itemSelected"
          :url="itemSelected.url"
        />
      </div>
    </div>

    <div class="w-1/2">
      <div class="card bg-base-100 shadow-xl" style="min-height: 500px">
        <div class="card-body">
          <ppw-dropfile-main2
            v-if="itemSelected === undefined"
            :show-files="false"
            upload-url="upload_url"
            session-path="check"
          >
            <div class="items-center align-middle p-28">
              <icon name="mdi:file-arrow-up-down-outline" size="128" />
            </div>
          </ppw-dropfile-main2>
          <ppw-checklist-result-static
            v-if="itemSelected"
            :path="itemCheckResult"
            :mode="mode"
          />
        </div>
      </div>
    </div>
  </div>
  <ppw-chat-conversation
    v-if="currentConversation"
    :conversation="currentConversation"
    :animate="animate"
  />
</template>
