<script setup lang="ts">
//TODO: deprecate in favor of ppw-modal

const props = withDefaults(
  defineProps<{
    okCancel?: boolean
    escCancel?: boolean

  }>(),
  {
    okCancel: false,
    escCancel: true,
  }
)

const emit = defineEmits(["ok", "cancel"])


const isOpen = ref(true)

if (props.escCancel) {
  defineShortcuts({
    escape: {
      usingInput: true,
      whenever: [isOpen],
      handler: () => {
        //isOpen.value = false 
        emit('cancel')
      }
    }
  })
}

</script>

<template>
  <!-- Backdrop with blur effect
    <div class="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-lg"></div>
     -->

  <UModal v-model="isOpen" prevent-close>
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <template #header />

      <slot />

      <template #footer>
        <div v-if="okCancel" class="flex flex-cols">
          <UButton @click="emit('cancel')" label="Cancel" />
          <UButton @click="emit('ok')" label="Logout" />
        </div>

      </template>
    </UCard>
  </UModal>
</template>
