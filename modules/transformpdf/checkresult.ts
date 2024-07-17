// Transformer for special extensions
//TODO: support PDF at least !
// see https://content.nuxtjs.org/api/advanced#transformers

import { defineTransformer } from '@nuxt/content/transformers'

console.log('🐣📄 custom transformer for checkresult')

export default defineTransformer({
  name: 'my-checkresult-transformer',
  extensions: [
    '.checkresult.json',
    '.checkresult',
  ],
  parse(_id, rawContent) {
    console.log(`📄 transform checkresult ${_id} ...`)

    return {
      _id,
      model: "checkresult",
      //body: rawContent.trim().split('\n').map(line => line.trim()).sort()
      body: "Check result content not supported yet !"
    }
  }
})