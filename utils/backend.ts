/*
  Get the backend URL
  Get static config (client only !!)
  Example : We can't use runtimeConfig where the conf depend on UAT/PROD since the site is static (generate)

  Example :
    * getBackend() returns "https://paxpar.tech"
    * getBackend() returns "https://uat.paxpar.tech"
    * getBackend() returns "http://localhost:8881"

  Please note that the `/api/` prefix for all API endpoints is not included !
*/


var _backend
export function getBackend(protocol: string = "http"): string {
    /*
    protocol is 'http" or 'ws'
    */
    // const deployConf = await $fetch('/deploy_conf.json')
    //const data = await $fetch('/deploy_conf.json')
    //const backend = data?.backend
    if ( _backend === undefined) {
        _backend = guessBackendFromHostname()
    }
    //console.debug({deployConf, backendForced})
    //console.debug({ protocol })
    if (protocol.startsWith('ws')) {
        // http -> ws, https -> wss
        return _backend.replace(/^http/i, 'ws')
    } else {
        return _backend
    }
}


export function guessBackendFromHostname(): string {
    const url = useRequestURL()
    const runtimeConfig = useRuntimeConfig()
    const backendForced = runtimeConfig.public.backendForced

    //console.debug({url})
    const hostname = url.hostname
    //const origin = url.origin

    var backend: string
    var reason: string

    if ((backendForced !== undefined) && ((backendForced !== ""))) {
        console.debug('backendForced', backendForced)
        backend = backendForced
        reason = "forcing via runtine config !!!!"
    //} else if (hostname === "localhost") {
    } else if (url.port === '3000') {
        //backend = 'http://localhost:8881'
        //reason = "hostname is localhost"
        backend = `http://${hostname}:8881`
        reason = "hostname port is :3000"
    } else if (isDomainEnv(hostname, "dev")) {
        backend = 'https://api.dev.paxpar.io'
        reason = "hostname contains `.dev.`"
    } else if (isDomainEnv(hostname, "uat")) {
        backend = 'https://api.uat.paxpar.tech'
        reason = "hostname contains `.uat.`"
    } else {
        backend = 'https://api.paxpar.tech'
        reason = "no other env detected"
    }
    console.info(`🐣 guessBackendFromHostname ${backend} because ${reason}`)
    return backend
}



function isDomainEnv(domain: string, env: string) {
    return domain.includes(`.${env}.`) || domain.startsWith(`${env}.`)
}
