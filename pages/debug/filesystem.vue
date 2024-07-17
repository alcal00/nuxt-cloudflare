<script setup lang="ts">
import { useFileSystemAccess } from '@vueuse/core'

const sampleFiles = [
    'https://media.paxpar.tech/vtd_PAF_slide1.svg ',
    'https://media.paxpar.tech/vtd_DR_patrick2.svg',
    'https://media.paxpar.tech/vtd_FX_demo_invoice_iban_jacques.svg',
    'https://media.paxpar.tech/vtd_DR_patrick4.svg',
]
const href = ref(sampleFiles[0])

// const { isSupported, data, file, fileName, fileMIME, fileSize, fileLastModified, create, open, save, saveAs, updateData } = useFileSystemAccess()

// see https://github.com/vueuse/vueuse/blob/main/packages/core/useFileSystemAccess/demo.vue
// see https://github.com/vueuse/vueuse/blob/main/packages/core/useFileSystemAccess/index.ts#L101
// see https://developer.mozilla.org/en-US/docs/Web/API/File_System_API
const dataType = ref('Text') as Ref<'Text' | 'ArrayBuffer' | 'Blob'>
const res = useFileSystemAccess({
    dataType,
    types: [{
        description: 'svg',
        accept: {
            'text/plain': ['.svg'],
        },
    }],
    excludeAcceptAllOption: true,
})
const content = res.data

async function loadLocalFile() {
    await res.open()
}


async function reloadLocalFile() {
    await res.updateData()
    console.debug('fileLastModified=', res.fileLastModified.value)
}

</script>

<template>
    <h1>debug file system API page</h1>

    <UButton @click="loadLocalFile" label="open local file" />
        <UButton @click="reloadLocalFile" label="reload" />
    <span>{{ content }}</span>
</template>
