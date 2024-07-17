---
title: Note de frais individuelle
description: "Je suis commercial et je dois transmettre ma note de frais enrichie à ma responsable, maintenant fini la galère"
image:
  src: https://media.paxpar.tech/20230720_Atelier-vtd_ndf.png
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
date: 2023-07-20
---

# Note de frais

::ppw-anim
---
href: "/anim/vtd_ndf_craft.svg"
---
::

Cet atelier est proposé par arundo.tech

Qui est arundo.tech ? C'est une entreprise qui se décline en plusieurs projets. Celui qui nous intéresse aujourd'hui est paxpar.tech et sa plateforme VérifTonDoc.


VérifTonDoc est une plateforme qui permet de vérifier la conformité de documents pdf.
Elle permet également de générer des documents pdf complexes, ou augmentés.
La plateforme se sert d'un document maître auquel elle attache des métadonnées et d'autres documents de différentes natures eux-mêmes enrichis avec des métadonnées."

## Pitch - Scénario

**Zina** est la responsable du service commercial de Tholga, une entreprise de cosmétique.

Elle missionne 3 commerciaux, dont **Jean**, pour animer un salon à Paris.
Cette animation et les frais correspondant seront facturés au client `Institut de beauté Cybeau`.

Chaque commercial va avoir divers frais et elle demande à chacun de fournir une note de frais enrichie.

Voici l’exemple de Jean qui va générer sa note de frais sur la plateforme VérifTonDoc.

## Mise en scène 

::ppw-chat-conversation
---
animate: true
conversation:
    - zina: "Jean, je t'envoie un mail qui contient un lien et le numéro de la mission"
    - jeanL: "J'ai reçu ton courriel et j'ai cliqué sur le lien"
    - jeanL: "Après m'être connecté, je saisie le numéro de mission et j'arrive sur la page d'accueil"    
---
::

![](https://media.paxpar.tech/page_acceuil.png)

## Dépôt factures Renault et Ikea 

::ppw-chat-conversation
---
animate: true
conversation:
    - jeanL: "Voici 2 factures, une facture Renaud et une facture Ikea"
---
::

:ppw-pdf-link{href="/documents/ndf_202306_renault_facture.pdf"}

:ppw-pdf-link{href="/documents/ndf_202306_ikea_facture.pdf"}

::ppw-chat-conversation
---
animate: true
conversation:
    - jeanL: "Je dépose la facture Renault"
---
::

::ppw-chat-conversation
---
animate: true
conversation:
    - jeanL: "Je n'ai aucune informations à saisir. Tout est déjà reconnu dans la facture enrichie"
---
::

::ppw-chat-conversation
---
animate: true
conversation:
    - jeanL: "Je dépose la facture Ikea"
---
::

::ppw-chat-conversation
---
animate: true
conversation:
    - jeanL: "Comme pour Renault, je n'ai aucune informations à saisir.
        Tout est déjà reconnu dans la facture enrichie"
---
::

::ppw-anim
---
href: "/anim/vtd_ndf_deposer.svg"
---
::

## Dépôt justificatif SNCF

::ppw-chat-conversation
---
animate: true
conversation:
    - jeanL: |
        J'ai un justificatif SNCF papier à fournir !
    - jeanL: |
        Je le prends en photo simplement en cliquant sur l'icône  caméra et la plateforme l'intègre en automatique
---
::

![](/images/images_ndf/ndf_202306_ticket_sncf.jpg) 

::ppw-chat-conversation
---
animate: true
conversation:
    - jeanL: Je dois saisir les informations de ce justificatif !
---
::

::ppw-anim
---
href: "/anim/vtd_ndf_saisir.svg"
---
::

A noter que ce justificatif n'est pas enrichi au moment où il est déposé. L'utilisateur doit saisir les informations utiles.
Lors de l'intégration à la note de frais, ce jusitificatif sera automatiquement enrichi (il pourra par la suite être utilisé comme justificatif enrichi).

## Dépôt ticket repas La Fontaine

::ppw-chat-conversation
---
animate: true
conversation:
    - jeanL: "Ce justificatif est dans mon drive"
---
::

:ppw-pdf-link{href="/documents/ndf_202306_ticket_lafontaine.PDF"}   

::ppw-chat-conversation
---
animate: true
conversation:
    - jeanL: "Je clique sur l'icône drive"    
---
::

::ppw-anim
---
href: "/anim/vtd_ndf_saisir2.svg"
---
::

::ppw-chat-conversation
---
animate: true
conversation:   
    - jeanL: "Mon drive s'ouvre et je n'ai plus qu'à cliquer sur le document voulu"
    - jeanL: "La plateforme l'intègre en automatique"
---
::


::ppw-chat-conversation
---
animate: true
conversation:
    - jeanL: Je dois saisir les informations de ce justificatif !
---
::

::ppw-chat-conversation
---
animate: true
conversation:
    - jeanL: J'ai déposé tous mes justificatifs
    - jeanL: Je vérifie si ma note de frais est conforme
---
::

:ppw-checklist-result-static{path="/blog/2023/07/_cl_ndf_01b"} 
  
::ppw-chat-conversation
---
animate: true
conversation:
    - jeanL: Tout est vert, je peux finaliser ma note de frais
    - jeanL: Je la signe sur la plateforme, la télécharge et je peux l'envoyer à Zina
---
::

::ppw-anim
---
href: "/anim/vtd_ndf_finaliser.svg"
---
::

![](https://media.paxpar.tech/vtd_ndf_pdf.png)

::alert{type="info"}
* TODO: viewer du PDF note de frais
::

::ppw-chat-conversation
---
animate: true
conversation:
    - zina: J'ai bien reçu les 3 notes de frais, ce sont des pdf augmentés, enrichis en métadonnées cela va grandement me simplifier la vie pour envoyer une note consolidée à mon service comptable. C'est aussi un gage de fiabilité pour notre client, tous les documents étant liés les uns aux autres et signés électroniquement. Pas de falsification possible.
---
::

## En relation


::alert{type="info"}
Faire les liens vers :

* TODO: Voir le scenario où Zina collecte les 3 notes de frais et les consolide.
* TODO: Voir le scenario où je fais et je dépose une photo d'un justifif.
* TODO: Voir le scenario où je dépose le justificatf issu de mon "drive"
* TODO: Voir le scenario où j'indique au fournisseur (Ikea) l'adresse mail personnalisée paxpar (drop+jean@paxpar.tech)
::

## Acteurs

:ppw-chat-actor{name="zina" showname}

:ppw-chat-actor{name="jeanL" showname}

::alert{type="info"}
* TODO: liste des acteurs
* TODO: générer automatiquement
::


## Fichiers utiles

::alert{type="info"}
* TODO: liste des PDF
* TODO: générer automatiquement
::


## Questions

Que faire si le fournisseur produit un ticket de caisse ?

    Il faut soit le scanner, soit en faire une photo pour pouvoir le traiter comme l'a fait Jean. 

Est-ce que je dois avoir fini ma mission pour déposer les justificatifs sur la plateforme ?

    les justificatifs peuvent être déposés en allant, inutile de gérer la note de frais seulement à l'issue de la mission. 

Si je reçois un justificatif par mail, avec une copie d'écran intégrée au mail, comment faire pour le déposer sur la plateforme ?

    vous pouvez "imprimer" le mail dans un fichier, vous récupérer alors un document pdf que vous déposez sur la plateforme au même titre que Jean l'a fait pour le ticket repas dans notre cas d'usage.

Vous parlez de document enrichi, pouvez-vous m'expliquer à nouveau ce que c'est ?

    un document enrichi est un document pdf simple auquel on a adjoint des informations sous forme de métadonnées. Voilà pourquoi la note de frais générée par Jean contient tous ses tickets ainsi qu'un fichier yaml et un tableur avec le détail des métadonnées collectées dans les différents justificatifs.

    
