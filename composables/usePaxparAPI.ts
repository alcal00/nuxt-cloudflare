/*
  
*/

import { type FetchOptions } from '~~/models/fetch'
import { defu } from 'defu'


// TODO: toast as an option
// TODO: delay before toast show up
// default for useFetchPP options
const DEFAULT_OPTIONS_useFetchPP: FetchOptions = {
  toast: {
    pending: {
      enable: true,
      delay: 500,
      duration: 3000,
    },
    success: {
      enable: true,
      duration: 3000,
    },
    error: {
      enable: true,
      duration: 3000,
    },
  },
}


/*

see https://nuxt.com/docs/examples/advanced/use-custom-fetch-composable
see https://www.reddit.com/r/Nuxt/comments/16bi7la/refreshing_token_using_usefetch/
see https://github.com/nuxt/nuxt/issues/14736
see https://github.com/nuxt/nuxt/issues/14936#issuecomment-1397369123
nuxtLink :
see https://nuxt.com/docs/api/components/nuxt-link#overwriting-defaults
see https://deltener.com/blog/a-deep-dive-into-the-nuxt-link-component/
*/
//export const useFetchS3 = async (
//  url: string,
//  options?: FetchOptions,
//) => {
//}


//TODO: replace with patched $fetch
export const $fetchPP = async (
  url: string,
  options?: FetchOptions,
) => {
  const backend = useBackend()
  const myToken = getToken()

  options = defu(options, {
    headers: {
      ...options?.headers,
      'Authorization': `Bearer ${myToken}`
    }
  })

  return $fetch(`${backend}${url}`, options)
}

/*
  useFetch with toast
*/
export const useFetchPP = async (
  url: string,
  options?: FetchOptions,
) => {
  const backend = useBackend()
  const myToken = getToken()

  const toast = useMyToast()

  // warning: the first merge() arg is modfified !!
  // options = _.merge(options, DEFAULT_OPTIONS_useFetchPP, options, {
  options = defu(DEFAULT_OPTIONS_useFetchPP, options, {
    headers: {
      ...options?.headers,
      'Authorization': `Bearer ${myToken}`
    }
  })
  //TODO: alternative to pass token
  //const headers = useRequestHeaders(['xxx'])
  //const { data } = await useFetch('/api/me', { headers })

  // this flag will be false after the query (useFetch)
  // usefull to not show the toast for fast queries
  var isPending = true

  // show the pending toast after the delay
  var toastId: string | undefined
  if (options?.toast?.pending?.enable) {
    setTimeout(async () => {
      // only if the request is not already done
      if (isPending === true) {
        toastId = (await toast.loading(options?.toast?.pending?.msg || `${url}`)).id
      }
    }, options.toast.pending.delay)
  }
  /*
  const toastId: Id | undefined = (options.toast?.pending?.enable) ? toast.loading(`fetching ${url}`) : undefined
  */

  //const { data, pending, error, refresh } = await useFetch(url, options)
  const res = await useFetch(`${backend}${url}`, options)
  isPending = false

  //console.log('usePaxparAPI res', res)
  if (res.error.value) {
    // error
    //console.error('usePaxparAPI error', res.error)
    //TODO: if error unauthorized error, redirect to login
    const msg = options?.toast?.error?.msg || `Error (${res.error.value.statusCode}) : ${res.error.value.message}`
    // if we want a pending toast 
    // if the pending toast is already displayed
    if ((options?.toast?.pending?.enable) && toastId) {
      await toast.remove(toastId)
      await toast.error(msg)
    } else {
      // if we need to toast the error or if a pending toast had not enough time to show up
      if ((options?.toast?.error?.enable) || (options?.toast?.pending?.enable)) {
        await toast.error(msg)
      }
    }
  } else {
    // success
    const msg = options?.toast?.success?.msg || `${url}`
    // if we want a pending toast 
    // if the pending toast is already displayed
    if ((options?.toast?.pending?.enable) && toastId) {
      await toast.remove(toastId)
      await toast.success(msg)
    } else {
      // if we need to toast the success or if a pending toast had not enough time to show up
      if ((options?.toast?.success?.enable) || (options?.toast?.pending?.enable)) {
        await toast.success(msg)
      }
    }
  }

  return res
}

/*
  Add Authorization query arg and backend prefix
  to turn a relative anonymous URL into 
  a full URL to backend with auth token

  addAuthURL('/api/xxx/output.pdf')
    -> '${backend}/api/xxx/output.pdf?Athorization=xxxxxxxx
    -> 'https://uat.paxpar.tech/api/xxx/output.pdf?Athorization=xxxxxxxx

*/
async function addAuthURL(source: string, token: string): string {
  // add backend prefix to the relative source
  const backend = useBackend()
  const source2 = `${backend}${source}`
  // add auth token as a query param
  const u = new URL(source2)
  u.searchParams.set('Authorization', `Bearer ${token}`)
  return u.toString()
}


function isDomainEnv(domain: string, env: string) {
  return domain.includes(`.${env}.`) || domain.startsWith(`${env}.`)
}


/*
  Get domain (used a lot by paxpar)
  basically the same as location.hostname
  Example :
    * paxpar.tech
    * uat.paxpar.tech
    * localhost
*/
function getDomain(): string {
  const url = useRequestURL()
  return url.hostname
}

//TODO: no more async !!
function getToken(): string {
  const supabase = useSupabaseClient()
  //TODO: simplier getter
  const myToken = supabase.realtime.accessToken
  //const { data, error } = await supabase.auth.getSession()
  //return data?.session?.access_token
  return myToken
}


export const usePaxparAPI = () => {
  return {
    addAuthURL,
    domain: getDomain(),
    isDomainEnv,
    $fetchPP,
    useFetchPP,
    getToken,
  }
}


