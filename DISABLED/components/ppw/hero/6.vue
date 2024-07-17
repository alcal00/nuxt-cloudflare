<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string
    btnlabel?: string
    btnto?: string
    desc?: string
    anim?: string
    reverse?: boolean
    ref?: string
  }>(),
  {
    reverse: false,
  }
)
</script>

<template>
  <div class="hero-content flex-col lg:flex-row">
    <template v-if="reverse == false">
      <div class="w-1/2">
        <h1 class="text-5xl font-bold">{{ title }}</h1>
        <p class="py-6">{{ desc }}</p>
        <NuxtLink :to="btnto" noPrefetch>
          <button class="btn btn-primary">{{ btnlabel }}</button>
        </NuxtLink>
      </div>
      <div class="w-1/2">
        <ppw-anim :href="anim" no-controls />
      </div>
    </template>
    <template v-else>
      <div class="w-1/2">
        <ppw-anim :href="anim" no-controls />
      </div>
      <div class="w-1/2">
        <h1 class="text-5xl font-bold">{{ title }}</h1>
        <p class="py-6">{{ desc }}</p>
        <NuxtLink :to="btnto" noPrefetch>
          <button class="btn btn-primary">{{ btnlabel }}</button>
        </NuxtLink>
      </div>
    </template>
  </div>
</template>
