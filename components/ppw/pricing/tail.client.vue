<script setup lang="ts">
import { type Plan, type Checkout } from "~~/models/pricing"
import { lemonSqueezyURL } from "~~/src/pricingtools"

/*
inspired by https://clickup.com/pricing and  https://tailblocks.cc/

sticky https://www.kindacode.com/snippet/tailwind-css-how-to-create-a-sticky-affix-navbar/
*/

const props = withDefaults(defineProps<{
    plan: Plan
    buttonHide?: boolean
}>(), {
    buttonHide: false,
})

const user = useSupabaseUser()

//TODO: deprecate
// redirect URL to this page with a chosen product
function redirectUrl(checkout: Checkout) {
    return encodeURIComponent(`/pricing?provider=${encodeURIComponent(checkout.provider)}&store=${encodeURIComponent(checkout.store)}&product=${encodeURIComponent(checkout.product)}`)
}
</script>


<template>
    <div class="h-full p-6 rounded-lg rounded-t-none border-2 border-t-0 border-secondary-content overflow-hidden"
        :class="plan.chip !== 'x' ? 'border-primary' : 'border-secondary-content'">
        <NuxtLink v-if="!buttonHide && plan.button" :to="plan.button_url">
            <button
                class="btn gap-2 flex items-center mt-auto text-white border-none py-2 px-4 w-full focus:outline-none hover:bg-primary rounded"
                :class="plan.chip !== 'x' ? 'bg-primary' : 'bg-gray-800'">
                {{ plan.button }}
                <Icon name="mdi:arrow-right-thin" size="32"></Icon>
            </button>
        </NuxtLink>
        <template v-if="plan.checkout">
        <!--
            <template v-if="user">
                <a :href="lemonSqueezyURL(user, plan.checkout.store, plan.checkout.product)"
                    class="lemonsqueezy-button">
                    <UButton label="Buy" block icon="i-mdi-arrow-right-thin" trailing />
                </a>
            </template>
            <UButton v-else :to="encodeURI(`/login?redirect=${redirectUrl(plan.checkout)}`)" label="Login(OLD)" block
                icon="i-mdi-arrow-right-thin" trailing />
-->

            <!-- We need to <a> node here because of lemonsqueezy iframe behaviour -->
            <a :href="lemonSqueezyURL(user, plan.checkout.store, plan.checkout.product)" class="lemonsqueezy-button">
                <UButton label="Choose" block icon="i-mdi-arrow-right-thin" trailing />
            </a>

        </template>

        <p class="text-xs text-gray-400 mt-3">{{ plan.footer }}</p>
    </div>
</template>
