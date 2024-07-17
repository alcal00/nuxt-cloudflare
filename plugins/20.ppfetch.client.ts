// expose $ppfetch
// which let you query the API
// handles authentication
// use the right backend

import { ofetch } from 'ofetch'

//TODO: see to replace/deprecate ppFetch
export default defineNuxtPlugin((_nuxtApp) => {    
    globalThis.$ppfetch = ofetch.create({
        async onRequest(args) {
            const options = args.options
            //const request = args.request
            //console.debug("$ppfetch", { request, options })
            // get backend (depend on current window.hostname)
            const { getToken } = usePaxparAPI()
            const { $ppbackend } = useNuxtApp()
            const myToken = getToken()
            // `${backend}${url}`

            //TODO: what to do if not authenticated
            //if (authStore.isAuthenticated) {
            options.headers = { Authorization: `Bearer ${myToken}` }
            //console.log(options)
            //} else {
            //TODO: toast here !!
            //    console.log('Not authenticated')
            //}

            //inject backend prefix if /api/*
            const request = args.request.toString()
            if (request.startsWith('/api/')) {
                //console.debug("args.request1", args.request)
                //const backend = useBackend()
                //const backend = "http://localhost:8881"
                //const backend = globalThis.$ppbackend                
                const backend = $ppbackend                
                args.request = `${backend}${request}`
                //console.debug("args.request2", args.request)
            }
        },
        onRequestError({ error }) {
            //TODO: toast here !!
            console.error(error)
        }
    })
})