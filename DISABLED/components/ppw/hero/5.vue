<script setup lang="ts">
/*
Sample usage in MDC :

    ::ppw-hero3{title="Hello" btn_label="blog" btn_to="/blog"}
    Ceci est la description
    ::

*/

const props = defineProps<{
  title: string
  btnlabel?: string
  btnto?: string
  btnlabel2?: string
  btnto2?: string
  background?: string
}>()

</script>


<template>
    <div class="hero h-auto" :style="`background-image: url(${props.background});`">
        <div class=""></div>
        <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
                <h1 class="mb-5 text-5xl text-neutral-700 font-bold">{{props.title }}</h1>
                <div class="mb-5 flex justify-center  text-slate-500"><slot></slot></div>
                <NuxtLink v-if="props.btnlabel !== undefined" :to="props.btnto">
                    <button class=" btn">{{ props.btnlabel }}</button>
                </NuxtLink>
                <NuxtLink v-if="props.btnlabel2 !== undefined" :to="props.btnto2">
                    <button class="btn btn-primary">{{ props.btnlabel2 }}</button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
