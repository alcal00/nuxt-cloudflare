<script setup lang="ts">
const toast = useMyToast()

const model = defineModel({
  type: Boolean,
})

const source_doc = ref("hello_source.pdf")
const name = ref("hello.pdf")
const craft = ref({ id: "the.target.craft.id" })
const target_user = ref({ id: "bob@acme.com" })

async function doAction() {
  try {
    const res = await $ppfetch("/api/document/delegate", {
      server: false,
      method: "POST",
      body: {
        source_doc: source_doc.value,
        name: name.value,
        craft_id: craft.value.id,
        target_user: target_user.value.id,
      },
    })
    toast.success("Delegation OK !")
  } catch (err) {
    toast.error("Error delegate !")
  }
}
</script>

<template>
  <ppw-modal
    v-model="model"
    okCancel
    @ok="doAction"
    title="Delegate document creation"
    description="Delegate the creation of a document to someone else"
    icon="mdi:account-arrow-left"
    content-slot
  >
    <UCard :ui="{ body: { base: 'grid grid-cols-3' } }">
      <div class="space-y-4">
        <UIcon name="mdi:file-document-edit-outline" size="96" />

        <UFormGroup label="craft id" required>
          <ppw-input-craftform v-model="craft" />
        </UFormGroup>

        <UFormGroup label="source doc" required>
          <UInput
            v-model="source_doc"
            placeholder="you@example.com"
            icon="mdi:file-pdf-outline"
          />
        </UFormGroup>

        <UFormGroup label="name" required>
          <UInput
            v-model="name"
            placeholder="you@example.com"
            icon="mdi:file-pdf-outline"
          />
        </UFormGroup>
      </div>

      <UDivider orientation="vertical" />

      <div class="space-y-4 flex flex-col justify-center">
        <UIcon name="mdi:account-arrow-left" size="96" />

        <UFormGroup label="target user" required>
          <ppw-input-user v-model="target_user" />
        </UFormGroup>
      </div>
    </UCard>
  </ppw-modal>
</template>
