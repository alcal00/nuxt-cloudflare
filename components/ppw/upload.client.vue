<script setup lang="ts">
import { Dashboard } from '@uppy/vue'
import Uppy from '@uppy/core'
import Webcam from '@uppy/webcam'
import XHRUpload from "@uppy/xhr-upload"

// Don't forget the CSS: core and UI components + plugins you are using
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'
import '@uppy/webcam/dist/style.css'

const props = withDefaults(
    defineProps<{
        endpoint: string
    }>(),
    {
    }
)


const backend = guessBackendFromHostname()
const { getToken } = usePaxparAPI()
const myToken = getToken()


const uppy = new Uppy().use(Webcam)

uppy.use(XHRUpload, {
    
    endpoint: `${backend}${props.endpoint}`,
    fieldName: "file",
    headers: {
        Authorization: `Bearer ${myToken}`,
    },

})

//onMounted(() => {
//    console.debug('onMounted ...')
//})
</script>

<template>
    <Dashboard :uppy="uppy" />
</template>