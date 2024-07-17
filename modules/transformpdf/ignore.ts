// Transformer for extensions to ignore
// see https://content.nuxtjs.org/api/advanced#transformers

import { defineTransformer } from '@nuxt/content/transformers/utils'

console.log('🐣📄 custom transformer for ignored content')

export default defineTransformer({
  name: 'my-dummy-transformer',
  extensions: [
    '.code-workspace',
    'credentials',
    '.css',
    '.docs:team:vscode:credentials',
    '.docx',
    '.drawio',
    '.html',
    '.ipynb',
    '.jpeg',
    '.jpg',
    '.png',
    '.py',
    '.sh',
    '.svg',
    '.tf',
    '.xls',
    '.xlsx',
    '.zip',
  ],
  parse(_id: string, rawContent: string) {
    return {
      _id,
      //body: rawContent.trim().split('\n').map(line => line.trim()).sort()
      body: "Special content ignored !"
    }
  }
})