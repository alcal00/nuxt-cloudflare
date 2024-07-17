import { logger } from "@nuxt/kit";
//import { fileURLToPath } from "url";
//import { resolve } from "pathe";
import { version } from "./package.json";
//import ModuleTransformPDF from "./modules/transformpdf/module";
import { bundledLanguages } from 'shiki'

logger.success(`pp-front v${version}`);

//const themeDir = fileURLToPath(new URL("./", import.meta.url));
//const resolveThemeDir = (path: string) => resolve(themeDir, path);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    //{
    //  // TODO: useful ?
    //  prefix: "",
    //  path: resolveThemeDir("./components/content"),
    //  global: true,
    //},
    //{
    //  // publish components that overload existing nuxt/content/docus components
    //  prefix: "",
    //  path: resolveThemeDir("./components/overload"),
    //  global: true,
    //},
    {
      path: '~/components',
      global: true,
    },
    //     {
    //        // all components are published with ppw- prefix
    //      prefix: "ppw",
    //      //path: resolveThemeDir("./components/ppw"),
    //      path: "~/components/ppw",
    //      global: true,
    //    },

    // nuxt UI pro template dashboard
    {
      path: '~/components/dashboard',
    }, {
      path: '~/components/dashboard/common',
      pathPrefix: false,
    }
  ],

  content: {
    // see https://content.nuxt.com/get-started/configuration#defaultlocale
    defaultLocale: 'en',
    // see https://github.com/nuxt/content/releases/tag/v2.12.0
    highlight: {
      langs: Object.keys(bundledLanguages),
    },
    // see https://content.nuxt.com/get-started/configuration#locales
    locales: ['en', 'pt', 'fr'],
  },


  devtools: {
    enabled: true,
    //timeline: {
    //  enabled: true,
    //},    
  },

  devServer: {
    host: "0",
  },

  extends: ['@nuxt/ui-pro'],

  // Fonts
  fontMetrics: {
    //fonts: ['DM Sans']
    fonts: ['Ubuntu Condensed']
  },

  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      //'DM+Sans': [300, 400, 500, 600, 700]
      'Ubuntu+Condensed': [300, 400, 500, 600, 700]
    }
  },

  i18n: {
    //See also vueI18n conf at './i18n.config.ts'
    // see https://i18n.nuxtjs.org/guide/routing-strategies#strategies
    //strategy: 'prefix_except_default',
    strategy: 'prefix_and_default',
    //strategy: 'no_prefix',
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
      },
      {
        code: 'pt',
        iso: 'pt-PT',
        name: 'Português',
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        name: 'Français',
      }
    ],
    // see https://i18n.nuxtjs.org/guide/browser-language-detection
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },

  modules: [
    '@nuxt/content',
    '@nuxt/test-utils/module',
    '@nuxt/ui',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@nuxtjs/supabase',
    '@stefanobartoletti/nuxt-social-share',
    '@vueuse/motion/nuxt',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'nuxt3-leaflet',
    "@nuxt/image",
  ],


  /*
    routeRules: {
      '/admin/**': {
        // or appMiddleware: 'auth'
        appMiddleware: ['auth']
      },
      '/admin/login': {
        // You can 'turn off' middleware that would otherwise run for a page
        appMiddleware: {
          auth: false
        }
      },
    },
    */
  routeRules: {
    //'/': { prerender: true },
    // '/': { ssr: false },
    '/api/search.json': { prerender: true },
    '/blog**': { prerender: true },
    '/check': { ssr: false },
    '/craft': { ssr: false },
    '/debug': { ssr: false },
    '/debug**': { ssr: false },
    '/debug/*': { ssr: false },
    '/debug/**': { ssr: false },
    '/docs**': { prerender: true },
    '/documents': { ssr: false },
    '/documents/**': { ssr: false },
    '/gallery': { ssr: false },
    '/gallery/**': { ssr: false },
    '/login': { ssr: false },
    '/settings**': { ssr: false },


    //TODO: why do we need all those rules for generate success

    '/en/debug/ppw/**': { ssr: false },
    '/pt/debug/ppw/**': { ssr: false },
    '/fr/debug/ppw/**': { ssr: false },
    '/debug/ppw/**': { ssr: false },

    // 
    //debug/ppw/checklist-result-static 

    '/fr/settings**': { ssr: false },
    '/pt/settings**': { ssr: false },
    '/docs/front/components/ppw-wizard-craft': { ssr: false },
    '/docs/craftform/spreadsheet': { ssr: false },
    '/docs/craftform/simple': { ssr: false },
    '/fr/settings/workspace': { ssr: false },
    '/fr/settings/perms': { ssr: false },
    '/settings/workspace': { ssr: false },
    '/en/settings/workspace': { ssr: false },
    '/en/settings/perms': { ssr: false },
    '/settings/perms': { ssr: false },
    '/pt/settings/workspace': { ssr: false },
    '/pt/settings/perms': { ssr: false },

  },

  // see https://nuxt.com/docs/guide/going-further/runtime-config
  runtimeConfig: {
    // The private keys which are only available within server-side
    //apiSecret: '123',
    // Keys within public, will be also exposed to the client-side
    // use with :
    //    const runtimeConfig = useRuntimeConfig()
    //    const routes = runtimeConfig.public.publicRoutes

    public: {
      //publicRoutes,
      //TODO: deprecate
      // Set NUXT_PUBLIC_BACKEND_FORCED env var to force the API backend      
      // see https://nuxt.com/docs/guide/going-further/runtime-config#environment-variables
      // example :
      //    export NUXT_PUBLIC_BACKEND_FORCED = 'http://192.168.8.137:8881'
      backendForced: undefined,
    }
  },

  // configuration for @stefanobartoletti/nuxt-social-share
  socialShare: {
    // module options
  },

  // see https://nuxt.com/docs/api/nuxt-config#ssr
  // Since we do a full static SSG, it seems better to disable SSR in dev
  //ssr: false,

  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      //callback: '/',
      // we don't rely on nuxt-supabase for authz since it does not work with full static
      exclude: ['/*'],
    },
  },

  telemetry: false,

  typescript: { strict: false },

  ui: {
    icons: ['heroicons', 'simple-icons'],
    safelistColors: ['primary', 'red', 'orange', 'green'],
  },

  vite: {
    //build: {
    //  rollupOptions: {
    //    external: ["@nuxtbase/auth-ui-vue", "@supabase/auth-ui-shared"],
    //  },
    //},
    test: {
      globals: true,
      environment: 'happy-dom',
    },
    vue: {
      script: {
        // opt-in, see https://github.com/vuejs/rfcs/discussions/503
        // and https://github.com/nuxt/nuxt/issues/20881
        defineModel: true,
        // opt-in, see https://github.com/vuejs/rfcs/discussions/503
        // and https://github.com/nuxt/nuxt/issues/20881
        propsDestructure: true
      }
    },

  },

  nitro: {
    prerender: {
      routes: ["/"],
    },
  },

})