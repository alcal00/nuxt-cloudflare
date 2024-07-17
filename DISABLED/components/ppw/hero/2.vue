<script setup lang="ts">
const header = {
    title: "Hello",
    desc: "Lorem ipsum",
}
</script>

<template>
    <!-- Hero 2 -->
    <!-- déclage vertical -mt-20 -->
    <section id="hero2"
        class="flex flex-row justify-center items-center text-black px-8 pt-24 pb-8 gap-12 mx-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">


        <div class="flex flex-col items-center w-1/2">
            <h1 class="text-center text-3xl md:text-4 lg:text-5xl mb-6">
                {{ header.title }}
            </h1>
            <p v-html="header.desc" class="text-lg text-center mb-6" />

            <div class="flex flex-row justify-center flex-wrap gap-6">
                <a href="https://www.chambersign.fr/p-formulaire-service-commercial-csf">
                    <button class="btn btn-primary" type="button">Contactez-nous</button>
                </a>
            </div>
        </div>
    </section>

</template>