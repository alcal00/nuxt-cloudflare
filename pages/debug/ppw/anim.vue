<script setup lang="ts">
import { useFileSystemAccess } from '@vueuse/core'

const sampleFiles = [
  '/anim/main.svg',
  'https://media.paxpar.tech/vtd_PAF_slide1.svg ',
  '/anim/tuto.svg',
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
  href.value = undefined
  await res.open()
  //TODO: call loadSVG on compoenent
  //await loadSVG()
}

</script>

<template>
  <h1>debug ppw-anim page</h1>

  <ppw-anim :href="href" :local-file="res" speed="0.2" debug-info/>

  <UFormGroup label="href" required>
    <UInput v-model="href" placeholder="sampleFiles[0]" icon="i-heroicons-document" />
  </UFormGroup>

  <UButton @click="loadLocalFile" label="open local file" />
  <!--<span>{{  content }}</span>-->

  <UBlogList orientation="horizontal">
    <div v-for="sample in sampleFiles" @click="href = sample">
      <UBlogPost title="sample" :description="sample" :image="{ 'src': sample }" />
    </div>
  </UBlogList>
</template>
