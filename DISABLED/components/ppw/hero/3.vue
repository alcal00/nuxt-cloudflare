<script setup lang="ts">
/*
Sample usage in MDC :

    ::ppw-hero3{title="Hello" btn_label="blog" btn_to="/blog"}
    Ceci est la description
    ::

*/

export interface Props {
  title: string
  btnlabel?: string
  btnto?: string
  btnlabel2?: string
  btnto2?: string
  background?: string
  backgroundColor?: string
  style?: string
}

const props = withDefaults(defineProps<Props>(), {
  backgroundColor: "primary",
})

//const p500 = $dt(`color.${props.backgroundColor}.600`);
//const p500 = $dt("color.primary.500")
// //backgroundColor: (props) => `{color.${props.backgroundColor}.600}`,
//const currentColor = "#007700" // ref<ThemeColors>('primary')
</script>

<template>
  <div class="hero h-auto" :style="`background-image: url(${props.background});`">
    <div class=""></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl text-neutral-700 font-bold" :class="[props.style]">
          {{ props.title }}
        </h1>
        <div class="mb-5 text-justify-end text-slate-500">
          <slot></slot>
        </div>
        <NuxtLink v-if="props.btnlabel !== undefined" :to="props.btnto">
          <button class="btn">{{ props.btnlabel }}</button>
        </NuxtLink>
        <NuxtLink v-if="props.btnlabel2 !== undefined" :to="props.btnto2">
          <button class="btn btn-primary">{{ props.btnlabel2 }}</button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="ts">
/*
css({
    '.hero div h1': {
        //backgroundColor: '{color.secondary.500}',
        color: '{color.primary.500}',
    },
    'div.hero': {
        //backgroundColor: (props) => `{color.${props.backgroundColor}.600}`,
        backgroundColor: `{color.secondary.900}`,
        //backgroundColor: () => currentColor.value
        //backgroundColor: '{color.primary.500}',
        //color: '{color.primary.500}',
    }

})
*/
</style>
