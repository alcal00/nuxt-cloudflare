
# \<ppw-benefits-section\>

## single benefit

::code-group
  ::code-block{label="Preview"}
    ::ppw-benefits-section
    ---
    class: "px-4 m-auto max-w-container"
    benefits:
      - id: 1
        title: Vérifier
        description: >-
          Made for the Vue community by the Vue community! Join other Vue.js devs and
          explore websites for free.
        links:
          - type: internal
            text: Explore for free
            route:
              to: pricing
        styles:
          text: "color.primary.300"
          #text: "primary"
        image: /images/benefits/free.png
    ---
    ::
  ::
  
  ```markdown [Code]
    ::ppw-benefits-section
    ---
    class: "px-4 m-auto max-w-container"
    benefits:
      - id: 1
        title: Vérifier
        description: >-
          Made for the Vue community by the Vue community! Join other Vue.js devs and
          explore websites for free.
        links:
          - type: internal
            text: Explore for free
            route:
              to: pricing
        styles:
          text: text-red-500
        image: /images/benefits/free.png
    ---
    ::
  ```
::


## multiple benefits



::code-group
  ::code-block{label="Preview"}
    ::ppw-benefits-section
    ---
    class: "px-4 m-auto max-w-container"
    benefits:
      - id: 1
        title: Vérifier
        description: >-
          Made for the Vue community by the Vue community! Join other Vue.js devs and
          explore websites for free.
        links:
          - type: internal
            text: Explore for free
            route:
              to: pricing
        styles:
          text: text-red-500
        image: /images/benefits/free.png
      - id: 2
        title: Browser Extension
        description: >-
          With the Vue Telescope Browser extension available for both Firefox and
          Chrome you can see information about the website without leaving the page!
          Just by clicking on the extention icon and you will see what framework the
          page is using, what UI/CSS library and so much more.
        links:
          - type: external
            href: >-
              https://github.com/nuxt-company/vue-telescope-extensions/blob/master/README.md#chrome
            text: Check on Chrome Web Store
        styles:
          text: text-orange-500
        image: /images/benefits/extension.png
      - id: 3
        title: Open Source
        description: >-
          Vue Telescope is open source which means anyone can contribute as well as
          add new plugins.
        links:
          - type: external
            href: 'https://github.com/nuxt-company/vue-telescope-analyzer'
            text: Vue Telescope Analyzer on Github
          - type: external
            href: 'https://github.com/nuxt-company/vue-telescope-extensions'
            text: Browser extension on Github
        styles:
          text: text-blue-500
        image: /images/benefits/open-source.png
      - id: 4
        title: Respect Privacy
        description: We highly respect your privacy and we don't collect any personal data.
        links:
          - type: internal
            text: Check Our Privacy Policy
            route:
              name: pricing
        styles:
          text: text-purple-500
        image: /images/benefits/privacy.png
      - id: 5
        title: Huge Database
        description: >-
          Wonder what other sites are using Vue.js and it's ecosystem? You can use our
          database, that already has a lot websites and counting!
        links:
          - type: internal
            text: Check our database
            route:
              name: pricing
        styles:
          text: text-primary-500
        image: /images/benefits/database.png
    ---
    ::
  ::
  
  ```markdown [Code]
    ::ppw-benefits-section
    ---
    class: "px-4 m-auto max-w-container"
    benefits:
      - id: 1
        title: Vérifier
        description: >-
          Made for the Vue community by the Vue community! Join other Vue.js devs and
          explore websites for free.
        links:
          - type: internal
            text: Explore for free
            route:
              to: pricing
        styles:
          text: text-red-500
        image: /images/benefits/free.png
      - id: 2
        title: Browser Extension
        description: >-
          With the Vue Telescope Browser extension available for both Firefox and
          Chrome you can see information about the website without leaving the page!
          Just by clicking on the extention icon and you will see what framework the
          page is using, what UI/CSS library and so much more.
        links:
          - type: external
            href: >-
              https://github.com/nuxt-company/vue-telescope-extensions/blob/master/README.md#chrome
            text: Check on Chrome Web Store
        styles:
          text: text-orange-500
        image: /images/benefits/extension.png
      - id: 3
        title: Open Source
        description: >-
          Vue Telescope is open source which means anyone can contribute as well as
          add new plugins.
        links:
          - type: external
            href: 'https://github.com/nuxt-company/vue-telescope-analyzer'
            text: Vue Telescope Analyzer on Github
          - type: external
            href: 'https://github.com/nuxt-company/vue-telescope-extensions'
            text: Browser extension on Github
        styles:
          text: text-blue-500
        image: /images/benefits/open-source.png
      - id: 4
        title: Respect Privacy
        description: We highly respect your privacy and we don't collect any personal data.
        links:
          - type: internal
            text: Check Our Privacy Policy
            route:
              name: pricing
        styles:
          text: text-purple-500
        image: /images/benefits/privacy.png
      - id: 5
        title: Huge Database
        description: >-
          Wonder what other sites are using Vue.js and it's ecosystem? You can use our
          database, that already has a lot websites and counting!
        links:
          - type: internal
            text: Check our database
            route:
              name: pricing
        styles:
          text: text-primary-500
        image: /images/benefits/database.png
    ---
    ::
  ```
::



