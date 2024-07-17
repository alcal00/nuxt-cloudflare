<script setup lang="ts">
import { Dashboard } from "@uppy/vue"

import "@uppy/core/dist/style.css"
import "@uppy/dashboard/dist/style.css"
import "@uppy/webcam/dist/style.css"
import "@uppy/image-editor/dist/style.css"
import '@uppy/drop-target/dist/style.css'

import Uppy from "@uppy/core"
import Webcam from "@uppy/webcam"
import XHRUpload from "@uppy/xhr-upload"
import ImageEditor from "@uppy/image-editor"
import DropTarget from '@uppy/drop-target'

const uppy = new Uppy({
    metaFields: [
        { id: "name", name: "Name", placeholder: "file name" },
        {
            id: "caption",
            name: "Caption",
            placeholder: "describe what the image is about",
        },
    ],
});

uppy.use(XHRUpload, {
    endpoint: "http://localhost:3000/file?path=uppy",
    fieldName: "file",
})
uppy.use(Webcam)
uppy.use(ImageEditor, {
    quality: 0.8,
})
uppy.use(DropTarget, {
    target: document.body,
})

function snapPhoto() {
    console.debug('snap photo ...')
}

onBeforeUnmount(() => {
    //console.log('before unmount')
    uppy.close()
})


</script>


<template>
    <div id="app">
        <dashboard ref="dash" :uppy="uppy" :props="{
            proudlyDisplayPoweredByUppy: false,
            theme: 'dark',
            metaFields: [
                {
                    id: 'name', name: 'Name', placeholder: 'file name',
                },
                {
                    id: 'caption',
                    name: 'Caption',
                    placeholder: 'describe what the image is about',

                },
            ],
        }" :plugins="['Webcam', 'ImageEditor']">
            <p>xxxxx</p>
        </dashboard>
        <UButton @click="snapPhoto">SNAP!!</UButton>
    </div>
</template>
