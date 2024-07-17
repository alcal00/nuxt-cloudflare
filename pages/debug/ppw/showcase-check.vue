<script setup lang="ts">

const pdfs = [
    {
  url: "/documents/aqb.pdf",
  check_result: "/blog/2023/10/_cl_rfi_aqb.yaml",
  name: "Facture EDF",
  conversation: [
    { isabelle: "Je doit vérifier mon Dossier Assurance Qualité avant de l'envoyer à Marc, pour cela je le dépose sur la plateforme paxpar"},
    { isabelle: "La checklist me signale une erreur !"},
    { isabelle: "Il manque une ligne dans la LDA"},
    { isabelle: "J'ai un fichier DI002 dans le DSI, par contre la ligne n'est pas renseignée dans la LDA"},
    { isabelle: "Je vais appeler Jacques pour qu'il vérifie et me renvoie un document conforme"},
    { isabelle: "Jacques, peux-tu me renvoyer une LDA correcte stp ?"},
    { Jacques: "Bien sûr"      },
  ]
    }
]

/*
::ppw-showcase-check
---  
pdfs:
- url: "/documents/aqb.pdf"
  check_result: "/blog/2023/10/_cl_rfi_aqb.yaml"
  name: "Facture EDF"
  conversation:
    - isabelle: "Je doit vérifier mon Dossier Assurance Qualité avant de l'envoyer à Marc, pour cela je le dépose sur la plateforme paxpar"
    - isabelle: "La checklist me signale une erreur !"
    - isabelle: "Il manque une ligne dans la LDA"
    - isabelle: "J'ai un fichier DI002 dans le DSI, par contre la ligne n'est pas renseignée dans la LDA"
    - isabelle: "Je vais appeler Jacques pour qu'il vérifie et me renvoie un document conforme"
    - isabelle: "Jacques, peux-tu me renvoyer une LDA correcte stp ?"
    - Jacques: "Bien sûr"
---
::
*/
</script>
  

<template>
    <div>
        <h1>ppw-showcase-check debug page</h1>
        <ppw-showcase-check :pdfs="pdfs" />
    </div>
</template>
  
  