/*

Layer over NuxtUI useToast()
to add legacy info(), error(), ... methods
added functions :
- info()
- success()
- error()
- warning()
- loading()

Base on Nuxt UI useToast() / UNotification

see https://ui.nuxt.com/overlays/notification

See https://github.com/nuxt/ui/issues/1084

*/

const timeout = 5000

/*
// Util function to feed a toast function
// we need a Notification object or a single string
function titleOrNotification(
    n: Partial<Notification> | string,
    base: Partial<Notification>,
): Partial<Notification> {
    var n2: Partial<Notification>
    if (typeof n === "string") {
        n2 = { ...base, title: n }
    } else {
        n2 = { ...base, ...n }
    }
    return n2
}
*/

export function useMyToast() {
    const toast = useToast()
    //const appConfig = useAppConfig()
    //appConfig.ui.sheet.default.color,
    

    async function info(title: string) {
        return await toast.add({
            title,
            //color: appConfig.ui.info,
            color: "primary",
            icon: "i-mdi-information-slab-circle-outline",
            timeout: timeout,
        })

    }

    async function success(title: string) {
        return await toast.add({
            title,
            color: "green",
            icon: "i-mdi-check-bold",
            timeout: timeout,
        })
    }

    async function warning(title: string) {
        return await toast.add({
            title,
            color: "orange",
            icon: "i-mdi-alert",
            timeout: timeout,
        })
    }

    async function error(title: string) {
        return await toast.add({
            title,
            color: "red",
            icon: "i-mdi-alert-octagram",
            timeout: timeout,
        })
    }

    async function loading(title: string) {
        return await toast.add({
            title,
            color: "blue",
            icon: "i-eos-icons-bubble-loading",
            timeout: 0,
        })
    }

    return {
        ...toast,
        info,
        success,
        warning,
        error,
        loading,
    }
}
