import type { Provider } from "@supabase/supabase-js"


// get social login to show on login page, overloading from /deploy_conf.js
export function getSocialLoginProviders(): Provider {
    return deploy_conf?.login?.social as Provider[]
}
