<script setup lang="ts">
import { onMounted } from "vue"

export interface Button {
  label: string
  to: string
}

const props = withDefaults(
  defineProps<{
    title?: string
    desc?: string
    buttons?: Button[]
  }>(),
  {
    title: "",
    desc: "",
    buttons: () => [],
  }
)

onMounted(async () => {
  //console.log('anim', props.anim)
  //console.log('btnto', props.btnto)
  //console.log('reverse', props.reverse)
})
</script>

<template>
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">{{ title }}</h1>
      <div class="py-6">
        {{ desc }}
        <slot />
      </div>
      <div class="btn-group">
        <template v-for="button in buttons">
          <NuxtLink :to="button.to">
            <button class="btn">
              {{ button.label }}
            </button>
          </NuxtLink>
        </template>
      </div>
    </div>
  </div>
</template>
