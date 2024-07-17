<script setup lang="ts">
import { type Plan } from "~~/models/pricing"

/*
inspired by https://clickup.com/pricing and  https://tailblocks.cc/

sticky https://www.kindacode.com/snippet/tailwind-css-how-to-create-a-sticky-affix-navbar/
*/

const props = defineProps<{
    plan: Plan
    monthly: boolean
}>()

</script>


<template>
    <div class="h-full p-6 rounded-lg rounded-b-none border-2 border-b-0 relative overflow-hidden ">
        <span v-if="plan.chip !== 'x'"
            class="bg-primary px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">{{
                plan.chip
            }}</span>
        <h2 class="text-2xl tracking-widest title-font mb-1 font-medium">{{
            plan.title
        }}</h2>
        <h2 class="text-sm tracking-widest title-font mb-1 font-medium">{{
            plan.price_msg
        }}
        </h2>

        <h1 class="text-5xl leading-none flex items-center pb-4 mb-4 border-b border-gray-800 flex justify-center">
            <span>{{ props.monthly ? plan.price_per_month : plan.price_per_year }}€</span>
            <span class="text-lg ml-1 font-normal">/{{ props.monthly ? 'mois' : 'an'
            }}</span>
        </h1>

    </div>
</template>
