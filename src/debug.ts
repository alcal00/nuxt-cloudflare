export const pages = [
    {
        name: "authz",
        desc: "Authorization",
    },
    {
        name: "ref",
    },
    {
        name: "daisyui",
    },
    {
        name: "dark mode",
    },
    {
        name: "deepchat",
    },
    {
        name: "document/craft",
    },
    {
        name: "ppw/gallery",
    },
    {
        name: "i18n",
    },
    {
        name: "icon",
    },
    {
        name: "filesystem",
    },
    {
        name: "leaflet",
    },
    {
        name: "mdc",
    },
    {
        name: "qrcode",
    },
    {
        name: "nuxtui",
    },
    {
        name: "toast",
    },
    {
        name: "placeholder",
    },
    {
        name: "playwright",
    },
    {
        name: "userprefs",
    },
    {
        name: "ppw/actor",
    },
    {
        name: "ppw/anim",
    },
    {
        name: "ppw/cardgame",
    },
    {
        name: "ppw/dropfile",
    },
    {
        name: "ppw/chat-conversation",
    },
    {
        name: "ppw/checklist-result-static",
    },
    {
        name: "ppw/debug-panel",
    },
    {
        name: "ppw/documents",
    },
    {
        name: "ppw/editor",
    },
    {
        name: "ppw/factice",
    },
    {
        name: "ppw/fullscreen",
    },
    {
        name: "ppw/input/craftform",
    },
    {
        name: "ppw/mermaid",
    },
    {
        name: "ppw/metric",
    },
    {
        name: "ppw/pdfview",
    },
    {
        name: "ppw/pdf-links",
    },
    {
        name: "ppw/showcase-check",
    },
    {
        name: "ppw/svg",
    },
    {
        name: "ppw/viz",
    },
    {
        name: "psc/cmd",
    },
    {
        name: "realtime",
    },
    {
        name: "search",
    },
    {
        name: "social-share",
    },
    {
        name: "s3",
    },
    {
        name: "uppy",
    },
    {
        name: "visjs",
    }
]


const debugPageIconDefault = 'heroicons:bug-ant'

// search bar commands for debug pages
export const debugPagesAsCommands = [
    ...pages.map(x => {
        const item_url = x?.item_url || `/debug/${x.name}`
        return {
            ...x,
            id: x?.id || item_url,
            type: "debug",
            label: x?.label || x?.name || x?.desc,
            icon: x?.icon || debugPageIconDefault,
            to: item_url,
            item_url,
        }
    }),
    {
        id: 'debug_page_browser',
        label: 'Browse debug pages',
        icon: debugPageIconDefault,
        to: '/debug',
    }
]
