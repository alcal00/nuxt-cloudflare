<script setup lang="ts">
/*
see https://www.docs4.dev/posts/how-to-render-markdown-in-nuxt-3-and-highlight-syntax-nuxt-mdc

TODO:
* how to style HTML tags like H1/H2/UL/LI/A/... (prose ?)
* how to link to other MD page/content ?
* how to link to ressources (image, PDF, ...) ?

*/
const md = `
# Welcome to docs4.dev

## sub-title

Paragraphs can contain inline code \`const codeInline: string = 'highlighted code inline'\`{lang="ts"} with language prop.

Inspired by [this article](https://www.docs4.dev/posts/how-to-render-markdown-in-nuxt-3-and-highlight-syntax-nuxt-mdc).

<h1>H1 tag</h1>

<ProseH1>ProseH1 tag</ProseH1>

## TODO

* how to style HTML tags like H1/H2 (prose ?)
* how to link to other MD page/content ?
* how to link to ressources (image, PDF, ...) ?

## code block

Code block:
\`\`\` typescript [index.js] {1, 3 - 5} additional meta data
import {parseMarkdown} from '@nuxtjs/mdc/runtime'

async function main(mdc: string) {
  const ast = await parseMarkdown(mdc)

  return ast
}
\`\`\`

# Section 2

::ppw-factice



`
</script>

<template>
  <div>
    <h1>MDC debug page</h1>
    <p />
    <h1>H1 tag</h1>
    <p />
    <ProseH1>ProseH1 tag</ProseH1>
    <p />

    <h2>v3</h2>
    <p />
    <MDC :value="md" />
  </div>
</template>
