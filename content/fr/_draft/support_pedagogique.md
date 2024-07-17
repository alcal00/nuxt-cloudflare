---
model: brouillon_article
lang: fr
image: https://media.paxpar.tech/attes_craft_diplome.png
description: 📖 Lire l'article
createdAt: 2023-06-19
aside: false
---

# Support pédagogique

## Simulation de vérification documentaire

## Objectifs :

- Eduquer sur les risques digitaux potentiels

- Augmenter la maturité digitale des entreprises

- Sensibiliser les étudiants à davantage de réflexion sur la confiance numérique 


### Fraude à l'Iban

Comparez ces deux pdfs

L'un d'eux est frauduleux et vous amenera à payer au mauvais destinataire.

:::div{class="flex flex-row"}

:ppw-pdfview{url="/documents/ffx_ed_186_01.pdf" class="w-full h-screen p-2"}
:ppw-pdfview{url="/documents/ffx_ed_186_03.pdf" class="w-full h-screen p-2"}

:::

:::div{class="min-h-screen py-24"}
::ppw-showcase-check
---
pdfs:
  - url: "/documents/ffx_ed_186_01.pdf"  
    check_result: "/blog/2023/06/cl_ffx_total_01"    
    name: "Facture Total FA2023-01"
  - url: "/documents/ffx_ed_186_03.pdf"
    check_result: "/blog/2023/06/cl_ffx_total_03"
    name: "Facture Total FA2023-03"
---
::

### Attestation (date non valide)

:::div{class="min-h-screen py-24"}
::ppw-showcase-check
---
pdfs:
  - url: "/documents/attes_inter_edf_date.pdf"
    check_result: "/_usage/check_result/attes_inter_edf_date"
    name: "attes_inter_edf"
---
::


## Les outils de sensibilisation

### Escape game 

Mettre au défi les étudiants de repérer les pdfs authentiques parmi plusieurs pdfs frauduleux dans un temps imparti. 

Leur faire toucher du doigt : 
- que la vérification de conformité documentaire 'manuelle' est une tache chronophage.
- que s'en tenir à la seule vérififcation manuelle est source d'erreur ou d'oubli
- que plus le document est complexe, plus la vérification de conformité est difficilement exhaustive


### Le jeu de cartes

![](https://media.paxpar.tech/kori_4documents-2fraudes_4.png)


#### Détecter des anomalies ou des fraudes... Un jeu d'enfant ?

::ppw-cardgame-deck
---
cards:
    - 1500
    - 1501
    - 1502
---
::

#### Pas si facile avec un document pdf, pourquoi ? 

Document pdf 
- de plusieurs pages 
- avec des annexes de natures différentes, 
- et plusieurs signatures électroniques

**Des documents plus ou moins sensibles, plus ou moins sujets à litiges potentiels...**

Quels documents sont concernés ?
* Les documents circulant au sein d'une entreprise, d'un service à l'autre.
* Les documents circulant d'un fournisseur à un client.
* Les documents circulant d'un pays à un autre (entre pays de l'Union Européenne, ou hors Europe)
    Les documents circulant entre assureurs et réassureurs...
    Les documents circulant entre un avocat et son client...
    etc.

**Les cas d'usages sont nombreux**

Dans le cas où une non-conformité n'aurait pas été détectée, les conséquences peuvent être 
* financières, 
* et/ou à l'origine de malfaçons, 
* et/ou avoir des répercutions sur l'intégrité physique des personnes (ouvriers comme usagers)
* etc. 

**Les conséquences liées à une fraude ou à une négligence peuvent être graves**.

Il faut donc être à même d'identifier et anticiper les problèmes liés à de potentielles fraudes ou négligences.

Une des approches : La vérififcation de conformité documentaire (selon des règles légales, mais également selon des règles métier spécifiques ou liées à la nécessité de respecter des contraintes techniques)

:::div{class="min-h-screen py-24"}
::ppw-cardgame-deck
---
cards:
    - 101
    - 203
    - 601
---
::

::ppw-cardgame-deck
---
cards:
    - 301
    - 401
    - 501
---
::

:::div{class="min-h-screen py-24"}
::ppw-cardgame-deck
---
cards:
    - 201
    - 203
    - 204
    - 205
    - 206
---
::

:::div{class="min-h-screen py-24"}
::ppw-cardgame-deck
---
cards:
    - 902
    - 1304
---
::

:::div{class="min-h-screen py-24"}
::ppw-cardgame-deck
---
cards:
    - 804
    - 1201
---
::

:::div{class="min-h-screen py-24"}
::ppw-cardgame-deck
---
cards:
    - 704
    - 1106
---
::

:::div{class="min-h-screen py-24"}
::ppw-cardgame-deck
---
cards:
    - 1008
    - 1410
---
::

On peut accéder à des explications pour chaque carte grâce à un QR code au verso


## Conversations

::ppw-chat-conversation
---
conversation:
    - edouard: "J'ai reçu une facture Total et je vais la vérifier dans VérifTonDoc pour voir si elle est correcte"
---
::

::ppw-showcase-check
---
pdfs:
  - url: "/documents/ffx_ed_186_02.pdf"
    check_result: "/blog/2023/06/cl_ffx_total_02"   
    name: "Facture Total FA202302"
    conversation:
        - edouard: "La checklist m'indique qu'elle n'est pas au format factur-X" 
        - edouard: "Si je déroule, il manque des mentions obligatoires dans les métadonnées : le N° de SIREN de l'émetteur ainsi que mon adresse"
        - edouard: "Pourtant visuellement ça apparaît bien"        
        - edouard: "Je ne peux pas accepter cette facture"                  
---
::

## Animation

::ppw-anim
---
href: "https://media.paxpar.tech/vtd_ed-du.svg"
---
::

## Exemple de Pdf contenant une multitude de pièces : *Frankenstein*
C'est un pdf d'une page qui contient 25 pièces jointes qui elles-mêmes contiennent de nombreuses pièces jointes. Soit plus de 100 fichiers.

Ce pdf a également plus de 150 signatures en tout.

:ppw-pdf-link{href="/documents/multi_sign_niveau1_frankenstein.pdf"}


## Outils du formateur

* conversation scenarisée
* jeu de cartes physique (fichier inkscape)
* article (fichier markdown)
* animation (fichier insckape)
* atelier webinaire (OBS Studio)

## Pistes pédagogiques

A faire avec les étudiants :

* Rédiger une page comme celle-ci sur un sujet donné :
* Imaginer et présenter des scénarios de fraude
* Détecter des documents frauduleux en un temps limité
* Réaliser des cartes ludiques sur un contexte métier donné
* Réaliser une vidéo des risques identifiés sur un contexte métier donné
* Vérifier des signatures électroniques réelles
* ...
