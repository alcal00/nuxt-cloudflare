import type { User } from '@supabase/supabase-js';
import type { Plan, Checkout } from "~~/models/pricing"

/*
Lemon Squeeze URL builder
See https://docs.lemonsqueezy.com/help/checkout/prefilling-checkout-fields#pre-filling-customer-data-in-checkout-links

https://[STORE].lemonsqueezy.com/checkout/buy/[VARIANT_ID]
    ?checkout[email]=hello@example.com
    &checkout[name]=Luke Skywalker
    &checkout[billing_address][country]=US
    &checkout[billing_address][state]=NY
    &checkout[billing_address][zip]=10038
    &checkout[tax_number]=GB123456789
    &checkout[discount_code]=10PERCENTOFF
    &checkout[custom][hello]=world
    &checkout[custom][domain]=paxpar.tech

For custom data see https://docs.lemonsqueezy.com/help/checkout/passing-custom-data
*/
export const lemonSqueezyURL = (shareURL: string, user: User, origin: string): string => {
    //const baseURL = `https://${store}.lemonsqueezy.com/checkout/buy/${variant}?embed=1&checkout[custom][create_user]=1`
    var baseURL = `${shareURL}?embed=1&checkout[custom][create_user]=1`
    // add the origin (to get redirected to +/confirm)
    baseURL = baseURL + `&checkout[custom][origin]=${encodeURIComponent(origin)}`
    if (user?.email) {
        // add the user email
        baseURL = baseURL + `&checkout[email]=${encodeURIComponent(user.email)}`
    }
    return baseURL
}
