<script setup lang="ts">
const conversation = [
    { thierry: "Bonjour Alice, Votre dossier n'est pas complet, votre marchandise reste à quai." },
    { alice: "Pourriez-vous me préciser la pièce manquante, car dans le mail du 23/01/2023, je vous ai envoyé tous les documents ?" },
    { thierry: "Désolé, j'ai d'autres importations à gérer, je n'ai pas le temps." },
    { alice: "Je comprends, je fais le point avec mon équipe expédition et je reviens vers vous." },
]
</script>
  

<template>
    <div>
        <h1>ppw-chat-conversation debug page</h1>
        <ppw-chat-conversation :conversation="conversation" />
    </div>
</template>
  
  