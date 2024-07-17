---
title: Collecte et vérification des pièces
description: "Je suis un cabinet comptable et je dois collecter les pièces pour établir un audit comptable semestriel, comment je peux vérifier que mon client m'a tout fait parvenir ?"
image:
  src: https://media.paxpar.tech/chsg_20230119_ldin-post1.jpeg
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
  - name: Guillaume PETIT
    avatar:
      src: /avatar/guillaumep.png
      target: _blank
    to: https://www.linkedin.com/in/guillaume-petit-014b0478/
  - name: Francoise ENTZMANN
    avatar:
      src: /avatar/francoise.png
      target: _blank
    to: https://www.linkedin.com/in/fentzmann/
date: 2023-01-19
---

# Atelier du 19/01/2023

## Discours de Guillaume

::ppw-chat-conversation
---
conversation:
    - guillaume: "Bonjour et bienvenue. Merci d’être là.
Nous allons passer 30 minutes ensemble, je vais donc me présenter.
Je m’appelle Guillaume, je suis le responsable commercial de Chambersign. 
Je suis très heureux de vous présenter ce webinair animé conjointement par Paxpar et ChamberSign dans le cadre de ChamberSign le Lab. 
Je serai accompagné de l’équipe PaxPar : Françoise, Valérie et Nadine.  
Avant de rentrer dans le vif du sujet, en quelques mots rapides :  qui est ChamberSign et pourquoi ChamberSign le lab ?
ChamberSign est une autorité de certification, tiers de confiance créée il y plus de 20 ans. 
Notre ambition est de promouvoir la sécurisation des échanges électroniques. 
Pour ce faire nous accompagnons depuis toujours les organisations privées comme publique dans la sécurisation de leur processus dématérialisé. 
C’est pourquoi nous délivrons notamment des identités numériques par certificats électroniques qui permet l’authentification forte de la personne physique ou morale ou la signature électronique.
C’est parce que, nous sommes conscients des nouveaux enjeux et défis liés à l’instauration d’un environnement numérique fiable, de confiance et sécurisé, que nous avons lancé il y a quelques mois notre laboratoire d’innovations. 
ChamberSign le Lab regroupe différents groupes de travail constitués d’experts venus de différents horizons dans le domaine de la dématérialisation. 
Notre ambition est d’apporter aux organisations des solutions innovantes qui répondent aux problématiques actuelles et futurs.
Dans ce cadre, nous avons notamment travailler avec l’entreprise Paxpar. 
De ces travaux et échanges, en ressort la solution VérifTonDoc. 
Je laisse la parole à Françoise qui va vous expliquer ce qu’est VerifTonDoc et rentrer dans les détails du thème abordé aujourd’hui."
---
::

## Pitch du scénario 

::ppw-chat-conversation
---
conversation:
- francoise: "Une demande de renseignements (DR) est envoyée par le cabinet comptable VODANES à son client afin de compléter le dossier pour établir l'audit semestriel de l'exercice comptable.
Le client va faire un retour de pièces.
Le cabinet comptable sera t'il en mesure de vérifier rapidement si il a en main toutes les pièces demandées ?"
---
::

Copie écrans OBS

## Acteurs
::ppw-chat-conversation
---
conversation:
    - francoise: "Françoise : comptable dans le cabinet VODANES"
    - patrick: "Patrick : responsable du service gestion de la société THOLGA"
---
::

Copie écrans OBS

## Mise en scène 
::ppw-chat-conversation
---
conversation:
    - valerie: "Valérie interprète Patrick "
    - nadine: "Nadine interprète Françoise"
---
::

****

::ppw-chat-conversation
---
conversation:
    - patrick: "Je viens de recevoir une DR de la part de mon cabinet comptable"   
---
::

:ppw-pdf-link{href="/documents/DR_vodanes_DR-001.pdf"}

::ppw-chat-conversation
---
conversation:
    - patrick: "Je la télécharge, je réunis les documents demandés et je vais générer une remise de justificatifs (RJ).
    Pour cela, je me connecte à la plateforme VérifTonDoc mise à ma disposition par mon comptable"   
---
::

![](/images/images_verifTonDoc/plateforme_veriftondoc.png)

::ppw-chat-conversation
---
conversation:
    - patrick: "Je choisis *Je génère mon doc* et la *Remise des justificatifs*."   
---
::

![](/images/images_dr/remise_rj.png)

::ppw-chat-conversation
---
conversation:
    - patrick: "Je dépose les documents demandés dans la dropzone"   
---
::

![](/images/images_dr/dropzone_gener_rj.png)

:ppw-pdf-link{href="/documents/DR_vodanes_DR-001.pdf"}

:ppw-pdf-link{href="/documents/tholga_FA-1201b.pdf"}

:ppw-pdf-link{href="/documents/DR_fec_ac_2022.xlsx"}

:ppw-pdf-link{href="/documents/DR_fec_vt_2021.xlsx"}

****

::ppw-chat-conversation
---
conversation:
    - patrick: "Mes documents sont déposés"   
---
::

![](/images/images_dr/depot_doc_rj.png)

::ppw-chat-conversation
---
conversation:
    - patrick: "Je finalise ce qui me permets de générer une RJ au format pdf signée avec mon certificat chambersign.
    Je peux maintenant envoyer le document à mon comptable"   
---
::

:ppw-pdf-link{href="/documents/DR_rj_ko.pdf"}

****

::ppw-chat-conversation
---
conversation:
    - francoise: "J'ai reçu la RJ de la société THOLGA, je vais vérifier si Patrick m'a envoyé tout ce que j'avais demandé.
    Je me connecte sur la plateforme VérifTonDoc avec mes identifiants et je clique sur *Je vérifie mon doc* puis je choisis dans la liste de contrôle *Je vérifie si la DR est complète*."
---
::

![](/images/images_dr/je_verifie_si_dr_complete.png)

::ppw-chat-conversation
---
conversation:
    - francoise: "Je dépose le pdf envoyé par Patrick dans la dropzone."
---
::

:ppw-checklist-result-static{path="/usage/check_result/dr_rj_ko"}

::ppw-chat-conversation
---
conversation:
    - francoise: "La RJ n'est pas complète, il manque la facture FA1301 et le FEC de vente n'est pas celui de la période demandée.
    Pour 2 documents manquants, je vais appeler Patrick mais je pourrais lui renvoyer une demande attachée à celle que je viens de contrôler."
---
::

****

::ppw-chat-conversation
---
conversation:
    - francoise: "Bonjour Patrick, je t'appelle car ta RJ n'est pas complète, il manque la facture FA1301 et le FEC de vente est celui de l'exercice passé"
    - patrick: "Bonjour Françoise, je me connecte tout de suite sur la plateforme VérifTonDoc et je génère une nouvelle RJ en n'oubliant pas les 2 documents.
    Voilà c'est fait, je t'ai envoyé le pdf par mail."
---
::

****

::ppw-chat-conversation
---
conversation:
    - francoise: "J'ai reçu la nouvelle RJ, je la dépose dans la dropzone."
---
::

:ppw-pdf-link{href="/documents/DR_rj_ok.pdf"}

:ppw-checklist-result-static{path="/usage/check_result/dr_rj_ok"}

::ppw-chat-conversation
---
conversation:
    - francoise: "Cette fois-ci tout est vert, je suis assurée d'avoir tous les documents qui correspondent à ma DR"
---
::

::ppw-chat-conversation
---
conversation:
- guillaume: "« Merci Françoise, alors on vient de le voir en synthèse, la puissance de la plateforme VerifTonDoc permet de ...
Nous venons donc de terminer notre démo je vous propose que nous passions à la lecture des questions du tchat ? »"
---
::

## Animation

::ppw-anim
---
href: "https://media.paxpar.tech/vtd_DR_patrick4.svg"
---
::

## Questions clés

## Vidéo du replay
