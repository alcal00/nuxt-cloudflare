---
title: Attestation plus valide !
description: "Je suis chef des travaux et je dois missionner des ouvriers à jour de leurs attestations sur un chantier."
image:
  src: https://media.paxpar.tech/20230824_Atelier-vtd_oi-craft.jpg 
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
date: 2023-08-24
---

# Risques sur les Chantiers - Tous habilités ?

## Introduction

Nous allons vous présenter la plateforme VérifTonDoc

Comment est née l'idée de ce service ? Nous sommes partis du constat que nous recevons de plus en plus de documents dématérialisés et que la tendance va aller en s'accentuant pour remplacer le papier. Ce qui est visible à l'oeil nu ne veut pas forcément dire que c'est correct et conforme. Lorsqu'on reçoit un document papier ou par mail, c'est compliqué de savoir s'il n'a pas été falsifié, s'il ne manque pas des pièces ou si les signatures électroniques sont conformes.

VérifTonDoc est donc une plateforme de vérififcation documentaire. Elle peut également générer des documents PDFs et les vérifier avant finalisation. Ainsi, vous êtes sûr que votre PDF est bien conforme aux critères que vous avez déterminés.

## Pitch - Scénario

Imaginons que je sois un chef des travaux BTP.

Je reçois régulièrement des cahiers des charges pour des demandes de prestations diverses.

Je dois générer des Ordres d'Interventions en me basant sur ce qui est demandé dans ce cahier des charges :

Cette étape est d'ordinaire complexe et très chronophage parce que j'ai à ma disposition de nombreux documents et informations à étudier, recouper, scruter... et je n'ai pas droit à l'erreur : 
 - employé non-habilité ? 
 - employé déjà affecté à un autre chantier aux mêmes dates ? 
 - absence de signature ? 
 - habilitation manquante ou expirée ? 
 - Ordre d'intervention non-conforme au protocole du client ? 
 - tous les postes sont-ils bien pourvus ?
 - etc.

 ![](https://media.paxpar.tech/vtd_oi_craft-p3.png)

💡 La plateforme VérifTonDoc est justement là pour rendre la tache plus simple, fiable et bien moins chronophage. Un moyen de réduire également les coûts de main d'oeuvre. 

Passons à un cas d'usage concrêt avec **Patrick**, chef des travaux de l'entreprise ALCOVE.

Il va vous montrer comment il utilise la plateforme VérifTonDoc.

## Mise en scène 

::ppw-chat-conversation
---
animate: true
conversation:
    - patrickM: J'ai reçu un cahier des charges d'EDF pour une prestation au CNPE de Nogent et je dois établir un Ordre d'Intervention qui consiste à missionner 3 employés pour le chantier
    - patrickM: J'ai sélectionné les carnets d'hablitations de Sophie, Paul et Alain 
    - patrickM: je vais constituer et vérifier mon dossier sur la plateforme VérifTonDoc
    - patrickM: Je me connecte, je choisis tout d'abord JE GÉNÈRE puis le craft qui m'intéresse pour générer mon document
---
::

## Dépôt du cahier des charges

:ppw-pdf-link{href="/documents/attes_cahier_des_charges_edf.pdf"}

::ppw-chat-conversation
---
animate: true
conversation:
    - patrickM: "Je dépose le cahier des charges"
---
::

::ppw-chat-conversation
---
animate: true
conversation:
    - patrickM: "Je n'ai aucune information à saisir."
---
::

## Dépôt du carnet de Paul

:ppw-pdf-link{href="/documents/attes_carnet_Paul_PIGNON.pdf"}

::ppw-chat-conversation
---
animate: true
conversation:
    - patrickM: |
        Je le dépose tout simplement
    - patrickM: Comme pour le cahier des charges, je n'ai rien à saisir
---
::

## Dépôt du carnet de Sophie

:ppw-pdf-link{href="/documents/attes_carnet_Sophie_DOLLET_02.pdf"}

::ppw-chat-conversation
---
animate: true
conversation:
    - patrickM: Comme pour Paul, je ne saisie rien

---
::

## Dépôt du carnet d'Alain

:ppw-pdf-link{href="/documents/attes_carnet_Alain_TOURNU.pdf"}

::ppw-chat-conversation
---
animate: true
conversation:
    - patrickM: Dernier carnet déposé, celui d'Alain
    - patrickM: J'ai déposé tous mes documents, cahier et carnets
    - patrickM: J'ai juste à sélectionner les noms en face des postes dans la liste déroulante
    - patrickM: Je prévisualise mon ordre d'intervention   
---
::    

:ppw-pdf-link{href="/documents/attes_inter_edf_date.pdf"}

::ppw-chat-conversation
---
animate: true
conversation:
    - patrickM: Avant de finaliser mon document, je vérifie s'il est correct en cliquant sur vérifier
    - patrickM: La checklist s'affiche
--- 
:: 

:ppw-checklist-result-static{path="/blog/2023/08/_cl_attes_inter_ko"}

::ppw-chat-conversation
---
animate: true
conversation:
    - patrickM: Il y a un problème avec Sophie, son attestation cariste ne sera plus valable à la période d'intervention
    - patrickM: Il faut que je l'appelle car elle a dû faire son recyclage depuis
    - patrickM: Bonjour Sophie, tu n'as pas mis ton carnet à jour après avoir fait ton recyclage cariste ?
    - sophie: Bonjour Patrick, j'ai oublié, tu le veux pour quand ?
    - patrickM: Peux tu me l'envoyer rapidement ! Car je dois déposer mon Ordre d'Intervention pour EDF ce soir.
    - sophie: Ok je te fais ça tout de suite, le temps de me connecter sur VérifTonDoc et je te l'envoie dans la foulée. 
---
::

## Dépôt du carnet de Sophie actualisé

:ppw-pdf-link{href="/documents/attes_carnet_Sophie_DOLLET_01.pdf"}

::ppw-chat-conversation
---
animate: true
conversation:
    - patrickM: J'ai reçu le carnet de Sophie
    - patrickM: Je reviens à la première étape 'Déposer' 
    - patrickM: Je clique sur le pdf de Sophie et le mets à la corbeille
    - patrickM: Je dépose le pdf qu'elle m'a envoyé, je prévisualise et vérifie de nouveau
---
::

:ppw-checklist-result-static{path="/blog/2023/08/_cl_attes_inter_ok"}

::ppw-chat-conversation
---
animate: true
conversation:
    - patrickM: Cette fois-ci, tout est vert, je peux finaliser mon ordre d'intervention
    - patrickM: Je le signe sur la plateforme avec mon certificat de signature intégré, le téléchargement du document est automatique, je peux l'envoyer en toute confiance à EDF    
---
::

::ppw-anim
---
href: "/anim/vtd_oi_craft.svg"
---
::

Lorsqu'on reçoit un PDF par mail, la complexité de la vérification est tout aussi réelle que le document papier. Comment s'assurer aujourd'hui que le document reçu est conforme ?

La plateforme VérifTonDoc répond à cette question, en déposant simplement votre document, elle vous indique à l'aide d'une checklist personnalisée les points non conformes en mettant un statut rouge.

La plateforme peut également générer des documents PDFs et effectuer la vérification avant la finalisation de votre document comme nous l'avons vu dans la démonstration. Ainsi, vous êtes sûr que votre PDF est bien conforme aux critères que vous avez déterminés. 

Avec VérifTonDoc : 
- vous gagnez du temps
- vous automatisez certaines taches
- vous fiabilisez vos documents
- vous détectez les erreurs et les oublis
- vous réduisez les risques de litige
- vous réduisez les frais de justice

![](https://media.paxpar.tech/vtd_oi_craft-p8.png)

***************************************************************



## Acteurs

:ppw-chat-actor{name="patrickM" showname}

:ppw-chat-actor{name="sophie" showname}



## Questions

Si l'un des intervenants a une fausse attestation, est-ce que la plateforme peut alerter le chef de travaux ?

    La plateforme est paramétrable, on peut donc envisager une vérification des attestations, la validité des signatures électroniques apposées sur tous les documents en cascade peut être vérifiée, un niveau de signature ou de certificat de signature peut être exigé, la correspondance entre le(s) certificat(s) de signature et le(s) signataire(s) peut être vérifiée. 

Comment la plateforme fait-elle pour lire les PDFs ?

    Les PDFs utilisés au quotidien sont des PDFs simples, ils sont construits pour être lisible par un humain. Les documents officiels sont de plus en plus souvent dématérialisés, il faut donc être en mesure d'automatiser l'exploitation de ces documents. 
    Les PDFs déposés dans notre exemple sont des PDFs augmentés, ils contiennent des données exploitables par la plateforme VérifTonDoc. Par exemple pour une photo, vous pouvez retrouver des informations dans les propriétés qui ne sont pas visibles à l'oeil nu mais qui sont enregistrées dans la photo numérique. C'est le même principe pour les PDFs augmentés.

Que fait la plateforme de mes données une fois mon document généré ?

    La plateforme ne fait que lire les données associées à vos documents, elle ne stocke ni les documents, ni les données.

Est ce qu'on est limité dans le nombre de documents quand on veut générer un Ordre d'Intervention ?

    Dans notre exemple Patrick n'envoie que 3 employés pour effectuer la prestation, son document final ne fait que 2,2Mo alors qu'il contient le cahier des charges, les 3 carnets d'habilitations qui contiennent eux-mêmes 4-5 attestations soit 17 documents.
    La plateforme est en mesure de générer un Ordre d'Intervention pour autant d'employés nécessaire pour la mission, le document final sera un peu plus grand en taille mais cela restera raisonnable. 
