// filename: my-module.mjs
// see https://content.nuxtjs.org/api/advanced#transformers
// see https://github.com/nuxt/content/blob/2b8cee99f37ba4531e03a130356e301e3b84ee10/src/runtime/transformers/path-meta.ts#L5
// see https://github.com/nuxt/content/blob/2b8cee99f37ba4531e03a130356e301e3b84ee10/src/runtime/transformers/json.ts#L3
import { resolve } from 'path'
import { defineNuxtModule } from '@nuxt/kit'
import { fileURLToPath } from 'url'


const themeDir = fileURLToPath(new URL('./', import.meta.url))
const resolveThemeDir = (path) => resolve(themeDir, path)

export default defineNuxtModule({
  setup (_options, nuxt) {
    nuxt.options.nitro.externals = nuxt.options.nitro.externals || {}
    nuxt.options.nitro.externals.inline = nuxt.options.nitro.externals.inline || []
    // nuxt.options.nitro.externals.inline.push(resolve('./my-module'))
    nuxt.options.nitro.externals.inline.push(resolve('./modules/transformpdf/module'))
    // @ts-ignore
    nuxt.hook('content:context', (contentContext) => {
      contentContext.transformers.push(resolveThemeDir('./checkresult.ts'))
      contentContext.transformers.push(resolveThemeDir('./pdf.ts'))
      contentContext.transformers.push(resolveThemeDir('./ignore.ts'))

    })
  }
})

