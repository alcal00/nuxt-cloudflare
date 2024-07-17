
<script setup lang="ts">
import { animate, stagger, timeline } from 'motion'
//import { Brand } from "./myModels"

export interface Brand {
    slug?: string
    name?: string
    active?: boolean
    imgPath?: string
}

export interface Props {
  title?: string
  brands?: Brand[]
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  brands: () => [],
})


const headingRef = ref(null)
const subheadingRef = ref(null)

//const showcasesCount = useShowcasesCount()

onMounted(() => {
  timeline([
    [[headingRef.value?.children[0], headingRef.value?.children[1]], { opacity: 0, scale: 0.75 }, { duration: 0 }],
    [[headingRef.value?.children[0], headingRef.value?.children[1]], { opacity: 1, scale: 1 }, { duration: 0.45, delay: stagger(0.05), easing: 'ease-out' }]
  ])

  timeline([
    [subheadingRef.value, { opacity: 0, scale: 0.75, filter: 'blur(20px)' }, { duration: 0 }],
    [subheadingRef.value, { opacity: 1, scale: 1, filter: 'blur(0px)' }, { delay: 0.4, duration: 0.25, easing: 'ease-out' }]
  ])

})
</script>

<template>
  <section id="hero-proposition" class="flex flex-col items-center">
    <h1 ref="headingRef"
      class="inline-flex flex-col items-center mb-12 text-center text-two leading-two md:text-one md:leading-one font-bold-body-weight -tracking-4">
      <div class="opacity-0">
        <slot></slot>
      </div>
      <div class="w-full -z-1">
        <ppw-HeroPropositionBrandsRotator :brands="brands" />
      </div>
    </h1>
  </section>
</template>
