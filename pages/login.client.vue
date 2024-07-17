<script setup lang="ts">
/*
login page 

query params:
* redirect: relative URL to redirect on successfull login
* customer_id: lemon squeezy customer id to wait for in supabase fct

See https://github.com/nuxtbase/auth-ui-vue/blob/main/src/App.vue
*/

//import { ThemeSupa, ThemeMinimal, ViewType } from "@supabase/auth-ui-shared"
import { Auth } from "@nuxtbase/auth-ui-vue"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import type { Provider } from "@supabase/supabase-js"
import { useIntervalFn } from '@vueuse/core'
import type { Pausable } from '@vueuse/shared'
import { getSocialLoginProviders } from "~~/src/tools"

const runtimeConfig = useRuntimeConfig()
const colorMode = useColorMode()
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const route = useRoute()
const url = useRequestURL()
const toast = useMyToast()


definePageMeta({ layout: "front" })

const providers = getSocialLoginProviders()

// get pp base request url (works on client AND server side)
const url2 = url.origin + url.pathname
// from https://www.mysite.com/a/b/c/login get https://www.mysite.com/a/b/c
const urlParent = url2.substring(0, url2.lastIndexOf("/"))

// default short redirect URL
// Warning: distinct redirect short (inner) and redirect long (from supabase)
// redirectShort = '/welcome' or '/console'
const defaultRedirectShort = "/confirm"

// with use the given redirect URL or the default one
const redirectShort = (route.query.redirect
  ? decodeURIComponent(route.query.redirect)
  : defaultRedirectShort) as string

// redirectLong : the full URL that supbase auth will redirect to
// example : https://textile.document.leagal/welcome
// example : https://arundo-tech.gitlab.io/paxpar-front/welcome
// example : https://uat.paxpar.tech/welcome
const redirectLong = `${urlParent}${redirectShort}`

console.debug({ url, urlParent, redirectShort, redirectLong })

const emailRedirectTo = redirectLong

const CUSTOMER_STATUS_PERIOD = 1000
//TODO: move to supabase client
const CUSTOMER_STATUS_URL = "https://cgsszvazemkfneqlgpkb.supabase.co/functions/v1/onboard-status"

const CUSTOMER_STATUS_MAX_RETRY = 15
const customerStatusRetry = ref(0)

// the lemonsqueezy user to wait for 
const invitation_email = ref(route.query.invitation_email)

watch(
  user,
  () => {
    // user defined, login succeeded, move to target ...
    if (user.value) {
      return navigateTo(redirectShort)
    }
  },
  { immediate: true }
)



//const { pause, resume, isActive } = useIntervalFn(async () => {
const invitInterval: Pausable = useIntervalFn(async () => {
  console.debug('invitInterval: Wait for user invitation confirmation ...')
  customerStatusRetry.value += 1
  if (customerStatusRetry.value > CUSTOMER_STATUS_MAX_RETRY) {
    return
  }
  try {
    // http://localhost:3000/login?invitation_email=philippe.entzmann%2Bmm3@gmail.com&redirect=/home
    //const { data: res, error } = await supabase.functions.invoke('onboard-status',
    //  { body: { email: invitation_email.value }})
    const res = await $fetch(CUSTOMER_STATUS_URL,
      { query: { email: invitation_email.value } })

    console.debug("waitCustomerStatus res", res)
    // result:
    // - id,
    // - created_at,
    // - updated_at,
    // - invited_at,
    // - email_confirmed_at,
    // - confirmation_sent_at

    if (res?.email_confirmed_at) {
      console.debug('res.email_confirmed_at', res.email_confirmed_at)
      // user has confirmed the invitation
      toast.success("customer status loaded !")
      invitation_email.value = undefined
    } else {
      console.debug('not confirmed yet !')
    }
  } catch (err) {
    console.debug('waitCustomerStatus err', err)
  }
}, 2000, { immediate: false })


/*
async function waitCustomerStatus() {
  console.debug('Wait for user invitation confirmation ...')
  customerStatusRetry.value += 1
  if (customerStatusRetry.value > CUSTOMER_STATUS_MAX_RETRY) {
    return
  }

  try {

    // http://localhost:3000/login?invitation_email=philippe.entzmann%2Bmm3@gmail.com&redirect=/home
    //const { data: res, error } = await supabase.functions.invoke('onboard-status',
    //  { body: { email: invitation_email.value }})
    const res = await $fetch(CUSTOMER_STATUS_URL,
      { query: { email: invitation_email .value}})
    
    console.debug("waitCustomerStatus res", res)
    // result:
    // - id,
    // - created_at,
    // - updated_at,
    // - invited_at,
    // - email_confirmed_at,
    // - confirmation_sent_at

    if (res?.email_confirmed_at) {
      console.debug('res.email_confirmed_at', res.email_confirmed_at)
      // user has confirmed the invitation
      toast.success("customer status loaded !")
      invitation_email.value = undefined
    } else {
      setTimeout(waitCustomerStatus, CUSTOMER_STATUS_PERIOD)
    }

  } catch (err) {
    console.debug('waitCustomerStatus err', err)

    toast.error("Error loading customer status !")
    setTimeout(waitCustomerStatus, CUSTOMER_STATUS_PERIOD)

  }
}
*/

onMounted(async () => {
  console.debug("mounted login emailRedirectTo=", emailRedirectTo)
  //console.debug({ socialLogin })

  if (invitation_email.value) {
    customerStatusRetry.value = 0

    //await waitCustomerStatus(invitation_email.value)
    invitInterval.resume()
  }
})

</script>

<template>
  <ppw-modal :modelValue="true" content-slot @cancel="$router.go(-1)" icon="heroicons:user" title=" Login"
    description="Sign in with social auth provider or with an email magic link" :ui="{
      icon: {
        base: 'text-green-500 dark:text-green-400'
      } as any

    }">

    <template v-if="invitation_email && customerStatusRetry <= CUSTOMER_STATUS_MAX_RETRY">
      <p>Waiting for invitation confirmation {{ invitation_email }} (retry {{ customerStatusRetry }})... </p>
    </template>
    <template v-else-if="invitation_email && customerStatusRetry > CUSTOMER_STATUS_MAX_RETRY">
      <p>Can't get a confirmation for invitation {{ invitation_email }} in time !!! (contact support) </p>
    </template>
    <template v-else>
      <Auth class="w-full" :supabaseClient="supabase" :appearance="{
        theme: ThemeSupa,
      }" view="magic_link" :providers="providers" :redirectTo="emailRedirectTo" socialLayout="horizontal" :queryParams="{
    //access_type: 'offline',
    //prompt: 'consent',
    //hd: 'domain.com'
  }" :dark="colorMode.value === 'dark'" :show-links="false" />
    </template>

  </ppw-modal>
</template>

<style>
/* fix the black text bug on dark theme */
.dark #email.supabase-auth-ui_ui-input {
  color: white;
}
</style>