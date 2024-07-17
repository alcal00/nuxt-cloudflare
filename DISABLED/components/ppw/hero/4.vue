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
    background?: string
    img?: string
}>()

</script>



<template>
    <div class="hero min bg-base-200" :style="`background-image: url(${props.background});`">
        <div class="hero-content flex-col lg:flex-row">
            <img src="https://paxpar.tech/site/wp-content/uploads/2022/02/about1-cartoonized.png" class="max-w-sm rounded-lg shadow-2xl" />
            <div>
                <h1 class="text-5xl font-bold">{{  props.title }}</h1>
                <div class="py-6"><slot></slot></div>
                <NuxtLink v-if="props.btnlabel" :to="props.btnto">
                    <button class="btn bg-teal-600">{{ props.btnlabel }}</button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>



