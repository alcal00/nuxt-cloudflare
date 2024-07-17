// expose $ppbackend
import { guessBackendFromHostname } from '~~/utils/backend'

export default defineNuxtPlugin(async (nuxtApp) => {    
    //const { data } = await $fetch('/deploy_conf.json')
    const backend = guessBackendFromHostname()

    globalThis.$ppbackend = backend

    return {
        provide: {
            //ppbackend: "http://localhost:8881",
            ppbackend: backend,
        },
    };

})
