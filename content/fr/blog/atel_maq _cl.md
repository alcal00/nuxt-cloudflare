---
title: Maquettage d'une checklist ?
description: "Maquetter facilement une checklist pour déterminer les points de contrôle"
image:
  src: https://media.paxpar.tech/20231221_Atelier-vtd_maquettage-cl.jpg
authors:
  - name: Valérie SUIGNARD
    avatar:
      src: /avatar/valerie.png
      target: _blank
    to: https://www.linkedin.com/in/valerie-suignard/
  - name: Nadine MASSON
    avatar:
      src: /avatar/nadine.png
      target: _blank
    to: https://www.linkedin.com/company/76156489/admin/feed/posts/
  - name: Francoise ENTZMANN
    avatar:
      src: /avatar/francoise.png
      target: _blank
    to: https://www.linkedin.com/in/fentzmann/
date: 2023-12-21
---

# Maquettage de checklist

## Pitch - Scénario

::ppw-chat-conversation
---
animate: true
conversation:
    - valerie: "Vous souhaitez utiliser notre plateforme de vérification documentaire VérifTonDoc et surtout avoir vos propres points de contrôle en rapport avec votre activité et vos besoins ?"
    - valerie: "Rien de plus simple"
    - valerie: "Dans un premier temps, vous devez lister les impératifs liés à votre activité qui pourraient vous éviter des cas de litige, de faude mais aussi vous faire gagner du temps donc de l'argent."
    - valerie: "Lorsque cette liste est établie, pour chaque impératif, vous devez énumérer les points de non-conformité, les points de contrôle que vous souhaitez."
    - valerie: "VériTonDoc va vous accompagner, en vous proposant un service de maquettage, en direct, pour créer vos propres checklists, c'est justement l'objet de notre atelier"
    - valerie: "Je vous rassure, ce n'est pas du codage informatique, c'est à la portée de tous"       
---
::

![](/images/images_maq_cl/risques.jpg)

## Acteurs

Valérie

Nadine

### Introduction du cas 

::ppw-chat-conversation
---
animate: true
conversation:
    - valerie: "Patrick est chef de travaux chez Alcove (BTP), il doit répondre à une offre pour une prestation du 15/01/2024 au 31/05/2024."
    - valerie: "Pour cela, il doit sélectionner 20 ouvriers sur les 50 que compte l'entreprise mais il doit surtout s'assurer que les habilitations des 20 choisis soient bien en conformité"
    - valerie: "S'il doit vérifier tous les carnets des 50 ouvriers, il va y passer un temps fou et surtout il n'est pas à l'abri de faire des erreurs, comme sélectionner un ouvrier dont l'habilitation ne sera plus valide au moment du démarrage du chantier." 
    - valerie: "VerifTonDoc est là pour vous faire gagner du temps mais surtout pour fiabiliser la pertinence de toutes vos habilitations." 
    - valerie: "Commençons par préciser vos points de contrôle"          
---
::

## Mise en scène

::ppw-chat-conversation
---
animate: true
conversation:
    - patrick: "Je commençe par lister tous les points de contrôle que j'ai déjà rencontré ultérieurement."    
---
::

### Liste des points de contrôle
comme anomalie, j'ai été confronté à :
- Une signature manquante sur un document
- La  signature du titulaire différente entre le carnet et une attestation
- La date de validité d'une habilitation expirée lors de la période de prestation 
- Une attestation manquante dans le carnet
- La date de validité d'une habilitation expirée lors du contrôle le jour j
- Une signature non valide 
- Une attestation qui n'est pas dans le bon carnet


### Maquettage de la checklist avec ces points de contrôle

::ppw-chat-conversation
---
    animate: true
    conversation:
        - nadine: "Je me connecte sur la plateforme VerifTonDoc, je sélectionne le composant pour prévisualiser ma checklist de base et ainsi avoir le rendu instantanément."    
---
::

![](/images/images_maq_cl/checklist_result.png)

::ppw-chat-conversation
---
    animate: true
    conversation:
        - nadine: "Chaque paragraphe est composé de 4 lignes, un - id:, un name:, un icon: et un status:"
        - nadine: "L'- id: est l'identifiant du paragraphe"
        - nadine: "Le name est le nom du paragraphe visible dans la checklist"  
        - nadine: "L'icon sert pour une représentation graphique"  
        - nadine: "Le status est le résultat escompté"
        - nadine: "Il est important de respecter les espaces, les tirets, tel que cela est défini dans la checklist-result"                          
---
::

::ppw-chat-conversation
---
    animate: true
    conversation:
        - nadine: "Je laisse le 1er paragraphe jusqu'à children, ensuite je commence à changer le 2ème paragraphe" 
        - nadine: "je vais appeler l'id (fichier)"
        - nadine: "le name (Fichier carnet Sophie.pdf) car se sera le nom du pdf que Patrick déposera sur VérifTonDoc"
        - nadine: "Pour l'icon, il existe des sites comme par exemple https://pictogrammers.github.io/@mdi/font/2.0.46/"
        - nadine: "Et enfin le status, j'indique KO"                          
---
::

![](/images/images_maq_cl/fichier_carnet.png)

::ppw-chat-conversation
---
    animate: true
    conversation:
        - nadine: "Je fais un children pour faire un déroulé et je nomme le prochain paragraphe (conformite metier), c'est dans ce paragraphe que je vais mettre les non-conformités" 
        - nadine: "1ère non-conformité : une signature manquante dans le carnet et 2ème, signature différente "                         
---
::

![](/images/images_maq_cl/conformite_metier.png)

![](/images/images_maq_cl/signature_ko.png)

::ppw-chat-conversation
---
    animate: true
    conversation:
        - nadine: "Pour le paragraphe attestations, je vais le mettre au même niveau que Carnet puis je ferai un children pour les habilitations"                         
---
::

![](/images/images_maq_cl/attestation.png)

::ppw-chat-conversation
---
    animate: true
    conversation:
        - nadine: "Pour la date de validité d'une habilitation expirée lors de la période de prestation"
        - nadine: "Je vais prendre l'exemple de l'habilitation R489(cariste)"                              
---
::

![](/images/images_maq_cl/habilitation_cariste.png)

::ppw-chat-conversation
---
    animate: true
    conversation:
        - nadine: "Et je continue jusqu'à épuisement de la liste des points contrôle"                            
---
::

![](/images/images_maq_cl/cl_ko.png)

::ppw-chat-conversation
---
    animate: true
    conversation:
        - nadine: "Pour la checklist OK, il suffit de remplacer les KO par des OK puis de retirer les phrases précisant les non-conformités  "                            
---
::


### Cheklist KO

:ppw-checklist-result-static{path="/blog/2023/12/_cl_maquette_ko" mode="nonconformity"}

### Cheklist OK

:ppw-checklist-result-static{path="/blog/2023/12/_cl_maquette_ok" mode="nonconformity"}

## animation

::ppw-anim
---
href: "/anim/vtd_cl_maq.svg"
---
::

## Questions
On peut donc maquetter une checklist avec plusieurs sous-parties ou comme vous dites une série de plusieurs parents-enfants ?

Oui, en effet, l’outil de maquettage permet de créer cette arborescence, sachant qu’à tout moment, quand l’équipe de développeurs a paramétré la plateforme  pour y intégrer votre checklist, vous pouvez demander la vue « non-conformité » pour identifier tout de suite les anomalies éventuelles.

---

Vous avez utilisé des icônes, comment peut-on savoir quel nom d’« icon » utiliser... Y a-t-il un endroit pour voir le nom et le visuel de l’icon associé pour compléter la checklist ?

Oui, on vous met plusieurs liens urls dans le chat, vous pourrez puiser dans les icons "mdi" 
