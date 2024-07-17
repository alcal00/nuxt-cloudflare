<script setup lang="ts">
/*
https://paxpar.lemonsqueezy.com/checkout/buy/4c37600f-db1f-4092-aebc-a267451d17ab?embed=1&checkout[custom][create_user]=1

The <a> node MUST always be rendered(no v if) or the embed will not work !!!

*/
import { lemonSqueezyURL } from "~~/src/pricingtools"
import { getPricing } from "~~/src/pricing/data"

import type { Pricing, Plan } from "~~/models/pricing"

definePageMeta({ layout: "front" })

const user = useSupabaseUser()
const toast = useMyToast()
const url = useRequestURL()

const init_ls_count = ref(0)
const lemonSqueezyLoaded = ref(false)
const isYearly = ref(false)


//const PRICING_URL = "/data/pricing.json"
const INIT_LS_PERIOD = 250 // ms
const INIT_LS_MAX_RETRY = 20 // 4s
const pricing = getPricing()

useHead({
    script: [
        {
            // https://app.lemonsqueezy.com/js/lemon.js
            src:
                "https://assets.lemonsqueezy.com/lemon.js",
            type: "text/javascript",
            async: true,
        },
    ]
})

const { locale } = useI18n();

const currentPlans = ref(locale.value === 'pt' ? pricing.plansPT : (locale.value === 'en' ? pricing.plansEN : pricing.plans));

// =========================================================================

//console.debug('PRICING_URL', PRICING_URL)
//const { data: pricing } = await useFetch<Pricing>(PRICING_URL)

//console.log("pricing.value", pricing.value)
//console.log("pricing", pricing)

/*
const { data: pricing, pending, refresh } = await useLazyAsyncData<Pricing>('pricing', async () => {
    //console.debug('useUserProfile loading featureflags ...')
    try {
        const res = await $fetch<Pricing>(url)
        //console.debug('panels res', res)
        toast.success("pricing loaded !")
        return {
            plans: [],
            sections: [],
            ...res,
        } as Pricing

    } catch (err) {
        toast.error("Error loading pricing !")
    }
},
    //  {
    //    server: false,
    //    deep: true,
    //  }
)
*/


const plansRaw = [
    {
        id: "free",
        store: 'paxpar',
        product: '4c37600f-db1f-4092-aebc-a267451d17ab',
        title: "Free",
        description: "For bootstrappers and indie hackers.",
        //price: "$199",
        highlight: false,
        discount: "",
        //cycle: "/month",
        //badge: { label: 'Most popular' },
        orientation: "vertical",
        align: "bottom",
        features: ['No credit card required', 'Unlimited PDF check', 'Unlimited PDF craft', 'Unlimited signatures', 'GDPR compliance'],
        checkout: {
            label: 'Choose',
            store: 'paxpar',
            product: "3ff414b0-3a3a-4e44-b545-47c2d8129aa1"
        },
    },
    {
        id: "plan2",
        store: 'paxpar',
        product: '4c37600f-db1f-4092-aebc-a267451d17ab',
        title: "Solo",
        description: "For bootstrappers and indie hackers.",
        price: "$199",
        highlight: true,
        discount: "",
        cycle: "/month",
        badge: { label: 'Most popular' },
        orientation: "vertical",
        align: "bottom",
        features: ['One developer', 'Unlimited projects', 'Unlimited minor & patch updates', 'Lifetime access'],
        checkout: {
            label: 'Choose',
            store: 'paxpar',
            product: "4c37600f-db1f-4092-aebc-a267451d17ab"
        },
    },
    {
        id: "plan3",
        store: 'paxpar',
        product: '4c37600f-db1f-4092-aebc-a267451d17ab',
        title: "Team",
        description: "For bootstrappers and indie hackers.",
        price: "$699",
        highlight: false,
        discount: "",
        cycle: "/month",
        //badge: { label: 'Most popular' },
        orientation: "vertical",
        align: "bottom",
        features: ['One developer', 'Unlimited projects', 'Unlimited minor & patch updates', 'Lifetime access'],
        checkout: {
            label: 'Choose',
            store: 'paxpar',
            product: '4c37600f-db1f-4092-aebc-a267451d17ab',
        },
    },
]


/*
//const plans = pricing.value.plans
const plans = computed(() => {
    //return plansRaw
    return pricing.plans.map((plan) => {
        return {
            ...plan,
            //price: "$199",
        }
    })
})
*/


/*
{
    "event": {
        "event": "Checkout.Success",
        "data": {
            "order": {
                "meta": {
                    "test_mode": true,
                    "custom_data": {
                        "create_user": "1"
                    }
                },
                "data": {
                    "type": "orders",
                    "id": "2416720",
                    "attributes": {
                        "store_id": 59715,
                        "customer_id": 2608589,
                        "identifier": "900e2557-57c7-4c0e-a8f7-1bf2d7d4bf15",
                        "order_number": 5971555,
                        "user_name": "Bob L'éponge",
                        "user_email": "toto@toto.fr",
                        "currency": "EUR",
                        "currency_rate": "1.07875796",
                        "tax_name": "TVA",
                        "tax_rate": "20.00",
                        "tax_inclusive": false,
                        "status": "paid",
                        "status_formatted": "Paid",
                        "refunded": false,
                        "refunded_at": null,
                        "subtotal": 19000,
                        "discount_total": 0,
                        "tax": 3800,
                        "setup_fee": 0,
                        "total": 22800,
                        "subtotal_usd": 20496,
                        "discount_total_usd": 0,
                        "tax_usd": 4099,
                        "setup_fee_usd": 0,
                        "total_usd": 24595,
                        "subtotal_formatted": "€190.00",
                        "discount_total_formatted": "€0.00",
                        "tax_formatted": "€38.00",
                        "setup_fee_formatted": "€0.00",
                        "total_formatted": "€228.00",
                        "first_order_item": {
                            "id": 2377473,
                            "order_id": 2416720,
                            "product_id": 189292,
                            "variant_id": 249108,
                            "price_id": 334568,
                            "product_name": "Client Final",
                            "variant_name": "Default",
                            "price": 19000,
                            "quantity": 1,
                            "created_at": "2024-04-03T14:13:49.000000Z",
                            "updated_at": "2024-04-03T14:13:49.000000Z",
                            "test_mode": true
                        },
                        "urls": {
                            "receipt": "https://app.lemonsqueezy.com/my-orders/900e2557-57c7-4c0e-a8f7-1bf2d7d4bf15?signature=ff25bed932402ab59f601d399bbd0f863a58cf3a8f30045c75db0842db4e11e9"
                        },
                        "created_at": "2024-04-03T14:13:48.000000Z",
                        "updated_at": "2024-04-03T14:13:49.000000Z",
                        "test_mode": true
                    },
                    "relationships": {
                        "store": {
                            "links": {
                                "related": "https://api.lemonsqueezy.com/v1/orders/2416720/store",
                                "self": "https://api.lemonsqueezy.com/v1/orders/2416720/relationships/store"
                            }
                        },
                        "customer": {
                            "links": {
                                "related": "https://api.lemonsqueezy.com/v1/orders/2416720/customer",
                                "self": "https://api.lemonsqueezy.com/v1/orders/2416720/relationships/customer"
                            }
                        },
                        "order-items": {
                            "links": {
                                "related": "https://api.lemonsqueezy.com/v1/orders/2416720/order-items",
                                "self": "https://api.lemonsqueezy.com/v1/orders/2416720/relationships/order-items"
                            }
                        },
                        "subscriptions": {
                            "links": {
                                "related": "https://api.lemonsqueezy.com/v1/orders/2416720/subscriptions",
                                "self": "https://api.lemonsqueezy.com/v1/orders/2416720/relationships/subscriptions"
                            }
                        },
                        "license-keys": {
                            "links": {
                                "related": "https://api.lemonsqueezy.com/v1/orders/2416720/license-keys",
                                "self": "https://api.lemonsqueezy.com/v1/orders/2416720/relationships/license-keys"
                            }
                        },
                        "discount-redemptions": {
                            "links": {
                                "related": "https://api.lemonsqueezy.com/v1/orders/2416720/discount-redemptions",
                                "self": "https://api.lemonsqueezy.com/v1/orders/2416720/relationships/discount-redemptions"
                            }
                        }
                    },
                    "links": {
                        "self": "https://api.lemonsqueezy.com/v1/orders/2416720"
                    }
                }
            }
        }
    }
}
*/
const lemonEventHandling = async (event) => {
    const eventType = event?.event || event
    if (eventType == "mounted") {
        // nothing special to do
    } else if (eventType == "Checkout.Success") {
        //console.debug({ event })
        window.LemonSqueezy.Url.Close()
        //TODO: redirec to to /login?invitation_email=toto@toto.fr
        await navigateTo({
            path: '/login',
            query: {
                invitation_email: event.data.order.data.attributes.user_email,
                redirect: '/home',
            }
        })
    } else if (eventType == "close") {
        console.debug({ event })
    } else {
        //console.debug({ eventType })
    }
}


async function initLemonSqueezy() {
    console.debug('init LemonSqueezy ...')
    init_ls_count.value += 1
    try {
        window.createLemonSqueezy()
        window.LemonSqueezy.Setup({
            eventHandler: lemonEventHandling
        })
        lemonSqueezyLoaded.value = true
        // toast.success(`LemonSqueezy loaded`)
    } catch (err) {
        if (init_ls_count.value < INIT_LS_MAX_RETRY) {
            setTimeout(initLemonSqueezy, INIT_LS_PERIOD)
        } else {
            toast.error(`LemonSqueezy init Error (tried ${init_ls_count} times) !`)
        }
    }
}


function checkoutButtonLabel(plan: Plan): string {
    return plan.price_per_month > 0 ? 'Buy now' : 'Choose'
}

function formattedPrice(plan: Plan, empty: string = ""): string {
    return _formattedPrice(plan.price_per_month, plan.price_per_year, empty)
}

function formattedPriceDiscount(plan: Plan, empty: string = ""): string {
    return _formattedPrice(plan.price_per_month_discount, plan.price_per_year_discount, empty)
}

function _formattedPrice(monthly_price: number, yearly_price: number, empty: string = ""): string {
    const price = isYearly.value ? yearly_price : monthly_price
    return price ? price.toString() + "€" : empty
}


function formattedCycle(plan: Plan,): string {
    if (plan.price_per_month || plan.price_per_month || plan.price_per_month || plan.price_per_month) {
        return isYearly.value ? '/year' : '/month'
    }
}

onMounted(async () => {
    console.debug('mounted ...')
    lemonSqueezyLoaded.value = false
    await initLemonSqueezy()
})




user


</script>

<template>
    <div class="w-full flex justify-center mt-8">

        <UPricingToggle v-model="isYearly" class="max-w-xs" />
    </div>


    <UPricingGrid :compact="false" class="mt-10">
        <UPricingCard v-for="p in currentPlans" :title="p.title" :description="p.description"
            :discount="formattedPriceDiscount(p) " :price="formattedPrice(p)" :cycle="formattedCycle(p)"
            :badge="p.badge" orientation="vertical" align="bottom" :features="p.features">
            <template #bottom>
                <a ref="redirectBuyButton"
                    :href="lemonSqueezyURL(isYearly ? p.checkout.yearly : p.checkout.monthly, user, url.origin)"
                    class="lemonsqueezy-button">
                    <UButton :label="lemonSqueezyLoaded ? checkoutButtonLabel(p) : ''" block
                        :loading="!lemonSqueezyLoaded" icon="i-mdi-arrow-right-thin" trailing class="py-3" />
                </a>
            </template>
        </UPricingCard>
    </UPricingGrid>
</template>
