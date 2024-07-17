<!--

https://github.com/dword-design/vue-mermaid-string
https://mermaid.live/edit#pako:eNpdkEFPwzAMhf-KldMqDXGvENIGR9AmNm69eKnbRjR2cJJJZdp_p2PrgOXkvPf56ckHY6UmUxrvuPYYKgZQkTSbXYSiOEkAK3Wt43j-ALwIt9C5mESHSStLZ4VnDUKDdzuRj2Jy1hJyj-oiJic8qQBLdcnFDsLZhxAH20kv7QCYUycKW-EBlvkLL1tvFAnVdlPGioGahmxye6YYH3Z6_4hcQ0OYslL8wy1yEj8WsGCVboq8x1_0_J5-mD1BItux-8y3wCYpJmrHuNAjs-P2v7_QNnviBOMRw9XdivTXoDUxnMoGDKST-Erq0dVmbvxlKs3hZFYmdeSpMuU41tRg7lNlKj6O6Hgt2QxsTZk009zkUI_lnh22it6UDfaRjt8_B5z2    
-->
<script setup lang="ts">
//import endent from 'endent'
import VueMermaidString from 'vue-mermaid-string'



//const diagram = endent`
const diagram = `
sequenceDiagram
    Alice->>+John: Hello John, how are you?
    Alice->>+John: John, can you hear me?
    John-->>-Alice: Hi Alice, I can hear you!
    John-->>-Alice: I feel great!
`

const diagram2 = `
mindmap
  root((mindmap))
    Origins
      Long history
      ::icon(fa fa-book)
      Popularisation
        British popular psychology author Tony Buzan
    Research
      On effectivness<br/>and features
      On Automatic creation
        Uses
            Camille
                hjhfjkhfk
                gkfjgdfk
                hgjkhjfl
            Creative techniques
            Strategic planning
            Argument mapping
    Tools
      Pen and paper
      Mermaid
`
</script>


<template>
    <ClientOnly>
        <vue-mermaid-string :value="diagram" />

        <vue-mermaid-string :value="diagram2" />

    </ClientOnly>
</template>