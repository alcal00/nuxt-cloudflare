
export default defineAppConfig({
  paxpar: {
    permission: [],
  },
  ui: {
    primary: 'yellow',
    gray: 'slate',
    ok: 'green',
    ko: 'red',
    warning: 'orange',
    info: 'blue',


    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    },
    icons: {
      dynamic: true
    },
  },
  header: {
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [
      {
        label: 'pricing',
        icon: 'i-mdi-currency-eur',
        to: '/pricing'
      }, {
        label: 'blog',
        icon: 'i-mdi-book',
        to: '/blog'
      }, {
        label: 'home',
        icon: 'i-mdi-home',
        to: '/home'
      }
    ]
  },
  footer: {
    credits: `©${new Date().getFullYear()} arundo.tech`,
    credits_to: 'https://arundo.tech',
    colorMode: false,
    links: [{
      icon: 'i-simple-icons-linkedin',
      to: 'https://nuxt.com',
      target: '_blank',
      'aria-label': 'Nuxt Website'
    }, {
      icon: 'i-simple-icons-youtube',
      to: 'https://discord.com/invite/ps2h6QT',
      target: '_blank',
      'aria-label': 'Nuxt UI on Discord'

    }, {
      icon: 'i-simple-icons-gitlab',
      to: 'https://gitlab.com/paxpar',
      target: '_blank',
      'aria-label': 'paxpar on GitHub'
      }, {
        icon: 'i-simple-icons-github',
        to: 'https://github.com/paxpar-tech',
        target: '_blank',
        'aria-label': 'paxpar on GitHub'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/nuxt-ui-pro/docs/edit/main/content',
      links: [{
        icon: 'i-heroicons-star',
        label: 'Star on GitHub',
        to: 'https://github.com/nuxt/ui',
        target: '_blank',
      }, {
        icon: 'i-heroicons-book-open',
        label: 'Nuxt UI Pro docs',
        to: 'https://ui.nuxt.com/pro/guide',
        target: '_blank',
      }, {
        icon: 'i-simple-icons-nuxtdotjs',
        label: 'Purchase a license',
        to: 'https://ui.nuxt.com/pro/purchase',
        target: '_blank',
      }]
    }
  }
})