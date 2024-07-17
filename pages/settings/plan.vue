<script setup lang="ts">

const user = useSupabaseUser()
const appConfig = useAppConfig()
const client = useSupabaseClient()
const { domain } = usePaxparAPI()

const portalURL = "https://app.lemonsqueezy.com/my-orders"
//TODO: get store from user token
const store = "paxpar"
const storePortalURL = `https://${store}.lemonsqueezy.com/billing`
/*
// https://billing.stripe.com/p/login/test_4gw6oJchs69w47e7ss?prefilled_email=jenny%40example.com
//const basePortalURL = "https://billing.stripe.com/p/login/test_14kg1C8owgfTds44gg"
const basePortalURL = appConfig.paxpar?.stripe?.customer_portal

// see https://stripe.com/docs/customer-management/activate-no-code-customer-portal#url-parameters
const portalURL = computed(() =>
  user
    ? `${basePortalURL}?prefilled_email=${encodeURIComponent(user.value.email)}`
    : basePortalURL
)
*/

//TODO: NOT THIS WAY!!! this is not a static payload !!!
const { data: subscriptions } = await useAsyncData("subscriptions2", async () => {
  const { data } = await client
    .from("subscriptions")
    .select("id, domain, customer_id, price_id, product_id, date_start, date_end")
    .eq("domain", domain)

  //select('name, location').eq('name', 'My Restaurant Name').single()
  return data
})

</script>

<template>
  <UDashboardPanelContent class="pb-24">
    <UDashboardSection title="Manage access" description="Invite new members by email address." orientation="horizontal" :ui="{ container: 'lg:sticky top-2' }">


        <p>My subscriptions :</p>

        <div class="overflow-x-auto">
          <table class="table">
            <thead>
              <tr>
                <th></th>
                <th>id</th>
                <th>customer</th>
                <th>product</th>
                <th>price</th>
                <th>start</th>
                <th>end</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(subscription, index) in subscriptions" class="hover">
                <th>{{ index + 1 }}</th>
                <td>{{ subscription.id }}</td>
                <td>{{ subscription.customer_id }}</td>
                <td>{{ subscription.product_id }}</td>
                <td>{{ subscription.price_id }}</td>
                <td>{{ subscription.date_start }}</td>
                <td>{{ subscription.date_end }}</td>
              </tr>
            </tbody>
          </table>
        </div>

    <div v-if="portalURL">
      <p>Go to <a href="">Lemon Squeezy customer portal</a> ...</p>

      <UButton :to="portalURL" target="_blank" label="Lemon Squeezy portal" />
      <UButton :to="storePortalURL" target="_blank" label="Lemon Squeezy store portal" />

    
      <a href="https://docs.lemonsqueezy.com/help/online-store/customer-portal">docs</a>
    </div>
  
        <p>This month activity ...</p>
        <ppw-metric name="xxx" title="API calls" desc="/ 10.000" fake />
        <ppw-metric name="xxx" title="API burts" desc="/ 20 / mn" fake />
        <ppw-metric name="xxx" title="PDF cheecked" desc="unlimited" fake />
        <ppw-metric name="xxx" title="PDF crafted" desc="unlimited" fake />



    </UDashboardSection>

  </UDashboardPanelContent>
</template>
