const ppRouteRules = []

export default defineNuxtRouteMiddleware((to, from) => {

    // see https://nuxt.com/docs/guide/directory-structure/middleware#when-middleware-runs
    // skip middleware on server
    if (process.server) return

    const { pathAuthorized } = usePerm()
    const user = useSupabaseUser()

    const authorized = pathAuthorized(to.path)
    const logged = (user.value !== undefined)

    //console.debug('authz middleware', from.path, to.path, authorized, logged, user.value, to)
    if (!authorized) {

        if (logged) {
            // if we are authenticated (logged)
            // throw an error
            const toast = useMyToast()
            const statusMessage = `Route Not Authorized : ${to.path}`
            toast.error(statusMessage)
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401
            throw createError({ statusCode: 401, statusMessage })

        } else {
            // if we are not authenticated (anon)
            // redirect to login
            if (to.path !== '/login') {
                return navigateTo(`/login?redirect=${encodeURIComponent(to.fullPath)}`)
            }
        }
    }
})
