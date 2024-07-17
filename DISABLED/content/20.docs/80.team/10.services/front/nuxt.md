# nuxt install

```
[nuxt] [request error] require is not defined in ES module scope, you can use import instead
  at $id_825a1a2f (./.nuxt/dist/server/server.mjs:13204:1)
  at __instantiateModule__ (./.nuxt/dist/server/server.mjs:14507:9)
  at __ssrLoadModule__ (./.nuxt/dist/server/server.mjs:14445:25)
  at ssrImport (./.nuxt/dist/server/server.mjs:14470:13)
  at $id_a090977b (./.nuxt/dist/server/server.mjs:12590:37)
  at async __instantiateModule__ (./.nuxt/dist/server/server.mjs:14507:3)
```

```
npx nuxi init front
cd front
yarn install
yarn dev
```


packages installed :

* [nuxttailwind](https://tailwindcss.nuxtjs.org/)
* nuxt content
* pinia
* vueuse
* daisyui
* vue3-lottie

```
yarn add --dev @nuxtjs/tailwindcss
npx tailwindcss init
yarn add --dev @nuxt/content
yarn add --dev @vueuse/core @vueuse/schema-org @vueuse/nuxt
yarn add pinia
yarn add @pinia/nuxt @nuxtjs/composition-api
yarn add vue3-lottie
yarn add daisyui

yarn add pinia-plugin-persistedstate
```
