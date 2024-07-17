<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    leftButton?: boolean
    rightButton?: boolean
    showSettings?: boolean
  }>(),
  {
    leftButton: false,
    rightButton: true,
    showSettings: false,
  }
)

const emit = defineEmits(["zoom"])
</script>

<template>
  <div class="flex items-center justify-between gap-3 px-4 py-3 bg-slate-800">
    <div>
      <UButton v-if="props.leftButton">
        <icon name="ic:baseline-zoom-out-map" />
      </UButton>
    </div>

    <UPopover v-if="showSettings">
      <UButton color="white">
        {{ title }}
        <icon name="ic:round-settings" />
      </UButton>
      <template #panel>
        <div class="p-4 bg-slate-700">
          <ppw-playground-settings />
        </div>
      </template>
    </UPopover>
    <span v-else>{{ title }}</span>

    <div>
      <UButton v-if="props.rightButton" @click="emit('zoom')">
        <icon name="ic:baseline-zoom-out-map" />
      </UButton>
    </div>
  </div>
</template>
