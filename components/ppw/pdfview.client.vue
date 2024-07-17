<script setup lang="ts">
import { expandPath } from "~~/src/reftools"

const backend = useBackend()

const props = withDefaults(defineProps<{
  pdfUrl: string; // relative pdf path (no backend)
  //TODO: move to useFetchPP()
  authToken: string; // JWT token
}>(), {
})



const embeddedPdfUrl = ref() // The URL to be embedded

const refresh = async () => {
  // Refresh logic if needed
  //console.debug("Refreshing PDF Viewer")
  loadPdf()
}

const fullURL = computed(() => {
  const url1 = expandPath(props.pdfUrl, backend)
  console.debug('pdfview.fullURL', url1)
  return url1
})

const loadPdf = () => {
  //console.debug('xxx PDF view', props.pdfUrl, backend)
  //const url1 = expandPath(props.pdfUrl, backend)
  //console.debug('xxx url1', url1)
  const url1 = `${backend}${props.pdfUrl}`

  //const { data, error } = await useFetchPP(url1)

  // Fetch the PDF with the Authorization header
  fetch(url1, {
    headers: {
      Authorization: `Bearer ${props.authToken}`,
    },
  })
    .then((response) => response.blob())
    .then((blob) => {
      // Create a blob URL and set it as the embeddedPdfUrl
      embeddedPdfUrl.value = URL.createObjectURL(blob)
    })
    .catch((error) => {
      console.error('Error loading PDF:', error)
    })
}


watch(
  () => props.pdfUrl,
  async (newVal, oldVal) => {
    // Load new PDF when the prop changes
    loadPdf()
    //console.debug(`Loading new PDF: ${newVal}`)
  },
  { immediate: true },
)


defineExpose({
  // the refresh function will be called from outside to trigger PDF refresh
  refresh
})

</script>

<template>
  <div class="h-5/6">
    <embed v-if="embeddedPdfUrl" :src="embeddedPdfUrl" type="application/pdf" width="100%" height="100%" />
  </div>
</template>
