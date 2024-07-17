import { getBackend } from '~~/utils/backend'





export const useBackend = (protocol: string = "http"): string => {
    return getBackend(protocol)
}

