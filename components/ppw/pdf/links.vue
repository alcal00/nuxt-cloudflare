<script setup lang="ts">
import { type ItemPDF, type GlobalAction } from "~~/types/pdf_showcase.types"

export interface Props {
  pdfs: ItemPDF[]
  download_on_click?: boolean
  action1_enabled?: boolean
  action2_enabled?: boolean
  action1_icon?: string
  action2_icon?: string
  enable_global_actions?: boolean
  //file_actions?: GlobalAction[]
}

const props = withDefaults(defineProps<Props>(), {
  pdfs: () => [],
  download_on_click: true,
  action1_enabled: false,
  action2_enabled: false,
  action1_icon: "mdi:eye",
  action2_icon: "cib:adobe-acrobat-reader",
  enable_global_actions: false,
  //file_actions: () => [],
})

const emit = defineEmits<{
  // a PDF is selected
  (e: "select", item: ItemPDF): void
  // no PDF slected
  (e: "empty"): void
  // action 1 on a PDF
  (e: "action1", item: ItemPDF): void
  (e: "action2", item: ItemPDF): void
  // global action
  (e: "globalAction", item: GlobalAction): void
}>()

const items = ref<Array<ItemPDF>>([])

const file_actions = ref<GlobalAction[]>([
  { id: "localfile", name: "upload file", icon: "i-heroicons-pencil-square" },
  { id: "webcam", name: "webcam", icon: "i-heroicons-pencil-square" },
])

watch(props, async (newValue, oldValue) => {
  // on props change reload the items
  loadItems()
})

function selectPDF(selectedPDF: ItemPDF) {
  // if PDF are downloadable, don't select them
  if (props.download_on_click === true) {
    return
  }

  // for all PDF
  for (var pdf of items.value) {
    if (pdf === selectedPDF) {
      //console.log('xxx pdf clicked', pdf.selected)
      // if the PDF is the one we want to select
      if (pdf.selected === true) {
        // if the PDF is already selected
        // deselect  it
        pdf.selected = false
        emit("empty")
      } else {
        // if the PDF we want to select is not already selected
        // select if
        pdf.selected = true
        emit("select", selectedPDF)
      }
      //console.log('xx2 pdf clicked', pdf.selected)
    } else {
      // if the PDF is not the one we want to select
      if (pdf.selected === true) {
        // if the PDF is already selected
        // deselect  it
        pdf.selected = false
      }
    }
  }
}

function loadItems() {
  // Fill the items with the given props
  // props may evolve over time
  items.value.length = 0
  for (var pdf of props.pdfs) {
    //console.log('pdf ...', pdf)
    items.value.push(pdf)
  }
}

function selectGlobalAction(action: GlobalAction) {
  //alert(`selectGlobalAction ${action.id}`)
  emit('globalAction', action)
}

onMounted(() => {
  loadItems()
})
</script>

<template>
  <div class="flex flex-wrap">
    <!-- pdfs -->
    <div v-for="pdf in items" :class="{ 'border-b-4 selected': pdf.selected }">
      <ppw-pdf-link @click="selectPDF(pdf)" :href="pdf.url" :name="pdf.name" :download_on_click="download_on_click"
        :selected="pdf.selected" :icon="pdf.icon" :virtual="pdf.virtual">
        <div class="absolute top-0 right-0">
          <div v-if="pdf.selected" @click.stop="emit('action1', pdf)" class="m-1">
            <button v-if="action1_enabled" class="btn btn-sm btn-circle">
              <icon :name="action1_icon" size="18" />
            </button>
          </div>
          <div v-if="pdf.selected" @click.stop="emit('action2', pdf)" class="m-1">
            <button v-if="action2_enabled" class="btn btn-sm btn-circle">
              <icon :name="action2_icon" size="18" />
            </button>
          </div>
        </div>
      </ppw-pdf-link>
    </div>
    <!-- global actions -->

    <div v-if="enable_global_actions" v-for="action in file_actions">
      <UButton @click="selectGlobalAction(action)" :icon="action.icon" size="sm" color="primary" variant="solid"
        :label="action.name" :trailing="false" class="m-2" />

    </div>
  </div>
</template>

<style scoped>
.selected {
  filter: drop-shadow(0 0 2em #1b26f7);
}
</style>
