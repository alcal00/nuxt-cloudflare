<script setup lang="ts">
/*

Samples source princing URL :
* https://paxpar.tech/nuage/s/nCjr5bqSRMqbGAr/download/pricing.xlsx
* https://paxpar.tech/nuage/s/tJ2bJ2nRJLrwJ2W/download/pricing.xlsx

edit princing samples URL : first go to https://uat.paxpar.tech/pricing/?preview= then :
* https://uat.paxpar.tech/pricing?preview=&url=https://paxpar.tech/nuage/s/nCjr5bqSRMqbGAr/download/pricing.xlsx
* https://uat.paxpar.tech/pricing?preview=&url=https://paxpar.tech/nuage/s/tJ2bJ2nRJLrwJ2W/download/pricing.xlsx

*/

import type { Checkout, Pricing } from "~~/models/pricing"


definePageMeta({ layout: "front" })


const route = useRoute()
const router = useRouter()
const user = useSupabaseUser()
const appConfig = useAppConfig()
const toast = useMyToast()


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


//const pricing_table_id = appConfig.paxpar?.stripe?.pricing_table_id
//const publishable_key = appConfig.paxpar?.stripe?.publishable_key


//console.log(route.query)
const previewUrl = ref<string>(route.query.url as string)
const checkout = ref<Checkout>({
    provider: route.query.provider as string,
    store: route.query.store as string,
    product: route.query.product as string,
})
const sheet_name = ref(parseInt(Array.isArray(route.query.sheet_name) ? route.query.sheet_name[0] : `0${route.query.sheet_name}`))

const monthly = ref(true)
const redirectBuyButton: Ref<HTMLElement | null> = ref(null)

// delay before redirect/click to lemonsqueezy checkout
const DELAY_REDIRECT = 3000 //ms
const url = "/data/pricing.json"

watch(previewUrl, (new_value, previous_value) => {
    router.push({
        query: { preview: '', url: new_value },
    })
})


// =========================================================================
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


const lemonEventHandling = async (event) => {
    const eventType = event?.event || event
    console.debug({ eventType })
    if (eventType == "mounted") {

    } else if (eventType == "Checkout.Success") {
        /*
            {
                "event": "Checkout.Success",
                "data": {
                    "order": {
                        "meta": {
                            "test_mode": true,
                            "custom_data": {
                                "hello": "world"
                            }
                        },
                        "data": {
                            "type": "orders",
                            "id": "2371517",
                            "attributes": {
                                "store_id": 59715,
                                "customer_id": 2552184,
                                "identifier": "a75cf4cc-a22a-46f3-a4d2-779ed4b9f713",
                                "order_number": 5971532,
                                "user_name": "Philippe ENTZMANN",
                                "user_email": "philippe.entzmann+dev2@gmail.com",
                                "currency": "EUR",
                                "currency_rate": "1.08277489",
                                "tax_name": "TVA",
                                "tax_rate": "20.00",
                                "tax_inclusive": false,
                                "status": "paid",
                                "status_formatted": "Paid",
                                "refunded": false,
                                "refunded_at": null,
                                "subtotal": 85000,
                                "discount_total": 0,
                                "tax": 17000,
                                "setup_fee": 0,
                                "total": 102000,
                                "subtotal_usd": 92036,
                                "discount_total_usd": 0,
                                "tax_usd": 18407,
                                "setup_fee_usd": 0,
                                "total_usd": 110443,
                                "subtotal_formatted": "€850.00",
                                "discount_total_formatted": "€0.00",
                                "tax_formatted": "€170.00",
                                "setup_fee_formatted": "€0.00",
                                "total_formatted": "€1,020.00",
                                "first_order_item": {
                                    "id": 2332314,
                                    "order_id": 2371517,
                                    "product_id": 148379,
                                    "variant_id": 181925,
                                    "price_id": 306485,
                                    "product_name": "Partenaire",
                                    "variant_name": "Default",
                                    "price": 85000,
                                    "quantity": 1,
                                    "created_at": "2024-03-27T10:25:25.000000Z",
                                    "updated_at": "2024-03-27T10:25:25.000000Z",
                                    "test_mode": true
                                },
                                "urls": {
                                    "receipt": "https://app.lemonsqueezy.com/my-orders/a75cf4cc-a22a-46f3-a4d2-779ed4b9f713?signature=f37a8e021acf94b713283568ae8646ced6b41ee49ce0bf298380016fc7fcc8d3"
                                },
                                "created_at": "2024-03-27T10:25:25.000000Z",
                                "updated_at": "2024-03-27T10:25:25.000000Z",
                                "test_mode": true
                            },
                            "relationships": {
                                "store": {
                                    "links": {
                                        "related": "https://api.lemonsqueezy.com/v1/orders/2371517/store",
                                        "self": "https://api.lemonsqueezy.com/v1/orders/2371517/relationships/store"
                                    }
                                },
                                "customer": {
                                    "links": {
                                        "related": "https://api.lemonsqueezy.com/v1/orders/2371517/customer",
                                        "self": "https://api.lemonsqueezy.com/v1/orders/2371517/relationships/customer"
                                    }
                                },
                                "order-items": {
                                    "links": {
                                        "related": "https://api.lemonsqueezy.com/v1/orders/2371517/order-items",
                                        "self": "https://api.lemonsqueezy.com/v1/orders/2371517/relationships/order-items"
                                    }
                                },
                                "subscriptions": {
                                    "links": {
                                        "related": "https://api.lemonsqueezy.com/v1/orders/2371517/subscriptions",
                                        "self": "https://api.lemonsqueezy.com/v1/orders/2371517/relationships/subscriptions"
                                    }
                                },
                                "license-keys": {
                                    "links": {
                                        "related": "https://api.lemonsqueezy.com/v1/orders/2371517/license-keys",
                                        "self": "https://api.lemonsqueezy.com/v1/orders/2371517/relationships/license-keys"
                                    }
                                },
                                "discount-redemptions": {
                                    "links": {
                                        "related": "https://api.lemonsqueezy.com/v1/orders/2371517/discount-redemptions",
                                        "self": "https://api.lemonsqueezy.com/v1/orders/2371517/relationships/discount-redemptions"
                                    }
                                }
                            },
                            "links": {
                                "self": "https://api.lemonsqueezy.com/v1/orders/2371517"
                            }
                        }
                    }
                }
            }        
        */
        console.debug('Checkout.Success', event)
        // event.data.order.data.attributes.user_name
        const email = event.data.order.data.attributes.user_email
        await waitForSupabaseAck(email)
        window.LemonSqueezy.Url.Close()        
        await navigateTo('/login')

    } else if (eventType == "close") {
    } else {
        console.debug('unknown lemon event', event)
    }
}


// this function returns a promise that resolves after n milliseconds
const wait = (n) => new Promise((resolve) => setTimeout(resolve, n));

async function waitForSupabaseAck(user: string) {
    console.debug(`waiting for supabase lemonsqueezy ack for user ${user}...`)

    // this code will wait for 5 seconds
    await wait(5000);

    console.debug(`waiting for supabase lemonsqueezy ack for user ${user}...`)
}

//TODO: remove
//function clickRedirectBuyButton() {
//    //window.alert('go to lemon squeezy checkout ...')
//    redirectBuyButton.value!.click()
//}

const readyLS = ref(false)

onMounted(async () => {
    //console.debug('setting lemonEventHandling ...')
    window.createLemonSqueezy()
    window.LemonSqueezy.Setup({
        eventHandler: lemonEventHandling
    })

    if (checkout.value.product && user.value) {
        //TODO: remove, should not append anymore !!!
        // back from login to a price target
        // move to the price target link (click button)
        //setTimeout(clickRedirectBuyButton, DELAY_REDIRECT)
    } else {

        // console.log('mounted pricing ...')
        if (route.query.preview === undefined) {
            //await do_pricing_load()
        } else {
            await do_pricing_preview()
        }
    }

    console.debug('readyLS', readyLS.value)
    await wait(5000)
    readyLS.value = true
    console.debug('readyLS', readyLS.value)

})

//TODO: move to static build fetch, move to refresh
async function do_pricing_load() {
    /*
    //TOOD: catch error
    //const data = await ppfetch("/api/ref/file/common/_public/{domain}/pricing.json")
    const data = await $fetch("/data/pricing.json")
    console.log('do_pricing_load ...', data)
    Object.assign(pricing, data)
    */
    await refresh()
}


async function do_pricing_preview() {
    //TOOD: re-enable
    const data = await ppfetch("/api/ref/pricing/convert", { params: { preview: true, url: previewUrl.value, sheet_name: sheet_name.value } })
    Object.assign(pricing, data)
}

</script>


<template>
    <template v-if="checkout.product && user">
        <div class="m-6">
            <UProgress animation="carousel" class="my-6" />
            <p>SHOULD NOT APPEAR !!!</p>
            <!-- We need to <a> node here because of lemonsqueezy iframe behaviour -->
            <!--
            <a ref="redirectBuyButton" :href="lemonSqueezyURL(user, checkout.store, checkout.product)"
                class="lemonsqueezy-button">
                <UButton label="Buy" block icon="i-mdi-arrow-right-thin" trailing />
            </a>
            -->
        </div>
    </template>

    <div v-else class="w-full">

        <section v-if="route.query.preview !== undefined">
            <h1>Preview URL sheet_name = {{ sheet_name }}</h1>
            <textarea v-model="previewUrl" class="textarea textarea-bordered"
                placeholder="pricing excel doc URL"></textarea>
            <button @click="do_pricing_preview" class="btn">Preview</button>
        </section>

        <section class="body-font overflow-hidden">
            <div v-if="pending">
                <UProgress animation="carousel" class="w-30" />
            </div>
            <div v-if="pricing" class="container px-5 py-24 mx-auto">

                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2">Tarifs</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Les services sont payables mensuellement ou
                        annuellement.</p>
                    <div @click="monthly = !monthly"
                        class="flex mx-auto border-2 border-primary rounded overflow-hidden mt-6">
                        <button :class="monthly ? 'bg-primary' : ''"
                            class="py-1 px-4   focus:outline-none">Mensuel</button>
                        <button :class="!monthly ? 'bg-primary' : ''"
                            class="py-1 px-4  focus:outline-none">Annuel</button>
                    </div>
                </div>

                <div v-if="pricing?.msg" class="alert alert-error shadow-lg">
                    <div>
                        <Icon size="36" :name="pricing.msg.icon"></Icon>
                        <span v-html="pricing.msg.msg"></span>
                    </div>
                </div>

                <ppw-pricing-main v-if="readyLS" :pricing="pricing" :monthly="monthly" class="my-16" />
            </div>
        </section>
    </div>
</template>
