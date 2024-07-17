<script setup lang="ts">
const toast = useMyToast()

const isOpen = defineModel()

async function doAction() {
  //window.alert("actionSamples input form ...")
  try {
    await $ppfetch('/api/document/sample', {
      //server: false,
      method: "POST",
      body: {
        q: {
          name: "hello.pdf",
          //source_doc: "hello_from.pdf",
        },
      },
    })
    toast.success("Samples OK !")
  } catch (err) {
    toast.error("Erreur samples !")
  }
}
</script>

<template>
  <ppw-modal v-model="isOpen" okCancel @ok="doAction" content-slot>
    <UFormGroup label="source doc" required>
      <UInput placeholder="you@example.com" icon="i-heroicons-envelope" />
    </UFormGroup>

    <UFormGroup label="name" required>
      <UInput placeholder="you@example.com" icon="i-heroicons-envelope" />
    </UFormGroup>
  </ppw-modal>
</template>
