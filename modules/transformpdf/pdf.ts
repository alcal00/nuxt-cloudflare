// Transformer for special extensions
//TODO: support PDF at least !
// see https://content.nuxtjs.org/api/advanced#transformers

import { defineTransformer } from '@nuxt/content/transformers/utils'

console.log('🐣📄 custom transformer for PDF')

export default defineTransformer({
  name: 'my-pdf-transformer',
  extensions: [
    '.pdf',
  ],
  parse(_id, rawContent) {
    console.log(`📄 transform PDF ${_id} ...`)

    return {
      _id,
      //body: rawContent.trim().split('\n').map(line => line.trim()).sort()
      body: "PDF content not supported yet !"
    }
  }
})