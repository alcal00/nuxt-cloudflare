<script setup lang="ts">

const props = withDefaults(
  defineProps<{
    okCancel?: boolean
    escCancel?: boolean
    title?: string
    description?: string
    icon?: string
    contentSlot?: boolean
    ui?: any
  }>(),
  {
    okCancel: false,
    escCancel: true,
    icon: "i-heroicons-exclamation-circle",
    contentSlot: false,
    ui: {
    icon: {
      base: 'text-green-500 dark:text-red-400'
    } as any,
    footer: {
      base: 'ml-16'
    } as any
  },
  }
)

const emit = defineEmits(["ok", "cancel"])


const isOpen = defineModel<boolean>()

function doOK() {
  emit('ok')
  isOpen.value = false
}

function doCancel() {
  emit('cancel')
  isOpen.value = false
}

defineShortcuts({
  escape: {
    usingInput: true,
    whenever: [isOpen],
    handler: doCancel,
  },
  enter: {
    usingInput: true,
    whenever: [isOpen],
    handler: doOK,
  }
})

</script>

<template>
  <UDashboardModal v-model="isOpen" :title="title" :description="description" :icon="icon" prevent-close
    :close-button="null" :ui="ui">

    <template v-if="contentSlot">
      <slot />
    </template>

    <template #footer>
      <UButton v-if="okCancel" color="red" label="OK" @click="doOK" />
      <UButton v-if="okCancel" color="white" label="Cancel" @click="doCancel" />
    </template>

  </UDashboardModal>
</template>
