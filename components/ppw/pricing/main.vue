<script setup lang="ts">
import { type Pricing } from "~~/models/pricing"

/*
inspired by https://clickup.com/pricing and  https://tailblocks.cc/

sticky https://www.kindacode.com/snippet/tailwind-css-how-to-create-a-sticky-affix-navbar/
*/
//import { useDark } from "@vueuse/core"
//const isDark = useDark()

const colorMode = useColorMode()


const props = defineProps<{
    pricing: Pricing
    monthly: boolean
    class?: string
    single_section?: string
    skip_section?: string
}>()


//const custom_team_zone_color = 'bg-gray-800'
const custom_team_zone_color = computed(() => {
    return colorMode.value == "dark" ? 'bg-gray-800' : 'bg-gray-200'
})


function section_click(section) {
    section.toggle = !section.toggle
    //console.log('section_click ...', section.toggle)
}

const sections_filtered = computed(() => {
    if (props.single_section) {
        //return props.pricing.sections.slice(0, 1)
        const section = props.pricing.sections[0]
        section.toggle = true
        return [section]
    } else if (props.skip_section) {
        return props.pricing.sections.slice(1)
    } else {
        return props.pricing.sections
    }
})

const last_section = computed(() => {
})

</script>


<template>
    <table class="w-full" :class="class">
        <!-- plans head ------------------------------------------------>
        <thead>
            <tr>
                <th></th>
                <th v-for="(plan, index) in pricing.plans" class="px-2 py-0"
                    :class="index == pricing.plans.length - 1 ? [custom_team_zone_color] : []">
                    <ppw-pricing-head :plan="plan" :monthly="props.monthly"></ppw-pricing-head>
                </th>
            </tr>
        </thead>

        <tbody>
            <!-- section head ---------------------------------------------->
            <template v-for="(section, index) in sections_filtered" :key="index">
                <tr v-if="!props.single_section" @click="section_click(section)" class="hover:bg-primary"
                    :class="index == sections_filtered.length - 1 ? [custom_team_zone_color] : []">
                    <th class="py-0 text-left">
                        <span class="flex flex-row">
                            <svg v-if="!section.toggle" class="w-6 h-6" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                            </svg>
                            <svg v-if="section.toggle" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 13l-7 7-7-7m14-8l-7 7-7-7"></path>
                            </svg>
                            {{ section.name }}</span>
                    </th>
                    <th v-for="(plan, index_plan) in pricing.plans" class="px-2 py-0"
                        :class="index_plan == pricing.plans.length - 1 ? [custom_team_zone_color] : []">
                        <div class="h-full p-6 rounded-x-lg border-x-2 border-y-none overflow-hidden flex justify-center">
                            <ppw-pricing-cell :text="section[plan.id]"></ppw-pricing-cell>
                        </div>
                    </th>
                </tr>
                <!-- section item -------------------------------------------->
                <template v-if="section.toggle" v-for="(item, index2) in section.items" :key="index2">
                    <tr class="hover:bg-primary"
                        :class="index == sections_filtered.length - 1 ? [custom_team_zone_color] : []">
                        <th class="pl-9 py-0 text-left">
                            <span class="flex flex-row">
                                <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
                                    </path>
                                </svg>
                                <ppw-pricing-cell :text="item.name"></ppw-pricing-cell>
                            </span>
                        </th>
                        <td v-for="(plan, index_plan) in pricing.plans" class="px-2 py-0"
                            :class="index_plan == pricing.plans.length - 1 ? [custom_team_zone_color] : []">
                            <div class="h-full px-6 py-2 rounded-x-lg border-x-2 border-y-none flex justify-center"
                                >
                                <ppw-pricing-cell :text="item[plan.id]"></ppw-pricing-cell>
                            </div>
                        </td>
                    </tr>
                </template>
            </template>

            <!-- sign up buttons -------------------------------------------->
            <tr>
                <th></th>
                <td v-for="plan in pricing.plans" class="px-2 py-0">
                    <ppw-pricing-tail :plan="plan" />
                </td>
            </tr>

        </tbody>
    </table>
</template>
