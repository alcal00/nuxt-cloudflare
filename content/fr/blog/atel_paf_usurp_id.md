---
title: Usurpation d'identité
description: "Je facture mes clients en constituant une PAF, comment je suis sûr que ma PAF ne va pas être falsifiée ?"
image:
  src: https://media.paxpar.tech/chsg_20230216_ldin-post1.jpeg
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
date: 2023-02-16
---

# Atelier du 16/02/2023

<h2>Replay</h2>
<iframe width="560" height="315" src="https://www.youtube.com/watch?v=O-7n0yol888" frameborder="0" allowfullscreen></iframe>
 
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
- francoise: "Un fournisseur envoie une PAF en bonne et due forme à son client.
Le client a des problèmes de trésorerie.
Le client met en place un stratagème…
Le fournisseur découvrira-t-il la supercherie ?"

---
::

Copie écrans OBS

## Acteurs
::ppw-chat-conversation
---
conversation:
    - zina: "Zina : responsable des ventes THOLGA"
    - peggy: "Peggy : responsable des achats CYBEAU"
---
::

Copie écrans OBS

## Mise en scène 
::ppw-chat-conversation
---
conversation:
    - valerie: "Valérie interpète Zina"
    - nadine: "Nadine interprète Peggy"
---
::

****

::ppw-chat-conversation
---
conversation:
- zina: "Je viens de recevoir le retour du Bon de livraison (BL) de l'institut CYBEAU.
Je vais générer la PAF en attachant le Bon de commande (BC) et le (BL) à la facture"
---
::

::ppw-chat-conversation
---
conversation:
- zina: "Je me connecte sur la plateforme VérifTonDoc avec mes identifiants"
---
::

![](/images/images_verifTonDoc/plateforme_veriftondoc.png)

::ppw-chat-conversation
---
conversation:
- zina: "Je choisis *Je génère mon doc*.
Puis la PAF facture tuto"
---
::

![](/images/images_paf/paf_facture_tuto.png)

::ppw-chat-conversation
---
conversation:
- zina: "Je vais déposer dans la dropzone, la facture, le BC et le BL"
---
::

![](/images/images_paf/dropzone_genere_paf.png)

:ppw-pdf-link{href="/documents/tholga_cfa_1201b.pdf"}

:ppw-pdf-link{href="/documents/tholga_bc-001.pdf"}

:ppw-pdf-link{href="/documents/tholga_bl_001.pdf"}

::ppw-chat-conversation
---
conversation:
- zina: "Voilà c'est fait"
---
::

![](/images/images_paf/depot_fa_bc_bl.png)

::ppw-chat-conversation
---
conversation:
- zina: "Je finalise et je signe avec le certificat chambersign de mon supérieur Patrick Dupont.
Je télécharge la PAF et avant de l'envoyer à Peggy Moine, je vais la vérifier sur la plateforme VérifTonDoc"
---
::

:ppw-pdf-link{href="/documents/tholga_FA-1201b.pdf"}

::ppw-chat-conversation
---
conversation:
- zina: "Je me connecte sur la plateforme VérifTonDoc mais cette fois -ci, je choisis *Je vérifie mon doc* et dans la liste de vérification celle de *Je vérifie la cohérence de Piste d'Audit Fiable"
---
::

![](/images/images_paf/piste_audit_fiable.png)

::ppw-chat-conversation
---
conversation:
- zina: "Je dépose dans la dropzone le pdf que j'ai généré"
---
::

:ppw-checklist-result-static{path="/usage/check_result/paf_1201b"}

::ppw-chat-conversation
---
conversation:
- zina: "C'est parfait, tous les voyants sont au vert ce qui signifie que ma PAF est correcte et que je peux l'envoyer à Peggy"
---
::

****

::ppw-chat-conversation
---
conversation:
- peggy: "Je viens de recevoir la facture THOLGA de ma dernière livraison.
Je ne pensais pas en avoir pour aussi cher.
Tant pis je vais falsifier la quantité d'un produit sur le BL en faisant croire que Zina s'est trompée dans la facturation puis je le re-signerai à la place de Zina et la facture à la place de Patrick"
---
::

::ppw-chat-conversation
---
conversation:
- peggy: "Je télécharge le pdf. Je constate que le BC et le BL sont attachés à la facture"
---
::

::ppw-chat-conversation
---
conversation:
- peggy: "Je modifie la quantité sur le produit crème pour bébé peaudouce, visuellement, je mets 1980 à la place de 2000.
Je modifie également la quantité dans le meta.yaml.
J'obtiens un nouveau BL.
Je fais disparaitre les signatures sur le BL modifié"
---
::

:ppw-pdf-link{href="/documents/tholga_bl-001ss.pdf"}

::ppw-chat-conversation
---
conversation:
- peggy: "Je copie l'image de la signature de Zina"
---
::

![](/images/images_paf/zina2_foxit.png)

::ppw-chat-conversation
---
conversation:
- peggy: "Je signe le document modifié avec un vrai certificat chambersign qui n'est pas au nom de Zina mais je prends soin de mettre l'image de Zina dans la signature.
Je refais ma signature avec le même PSC que sur le BL original "
---
::

::ppw-chat-conversation
---
conversation:
- peggy: "Je reconstitue la PAF et je dois re-signer la facture à la place de Patrick"
---
::

::ppw-chat-conversation
---
conversation:
- peggy: "Je me sers du même certificat que pour Zina mais cette fois -ci je signe avec libreoffice qui ne met pas de visuel de signature"
---
::

::ppw-chat-conversation
---
conversation:
- peggy: "Et voilà le tour est joué, il n'y a aucune différences entre les 2 PAFs. Je vais appeler Zina pour lui signaler une erreur dans la facture"
---
::

****

::ppw-chat-conversation
---
conversation:
- peggy: "Allo Zina, Bonjour. Je vous appelle car j'ai reçu ma facture et j'ai un petit souci"
- zina: "Bonjour Peggy, de quoi s'agit il?"
- peggy: "Je constate que vous m'avez facturé 2000 pièces pour la crème bébé peaudouce alors que je n'en ai reçu que 1980"
- zina: "C'est étrange, en effet. Pouvez-vous me renvoyer la PAF que vous avez reçu ? Je vais m'en occuper dès réception"
---
::

****

::ppw-chat-conversation
---
conversation:
- zina: "Je viens de recevoir la PAF de Peggy.
Je vais tout de suite la vérifier sur notre plateforme VérifTonDoc. Je me connecte avec mes identifiants et je choisis la liste de contrôle *Je vérifie la cohérence de Piste d'Audit Fiable
"
---
::

![](/images/images_paf/piste_audit_fiable.png)

::ppw-chat-conversation
---
conversation:
- zina: "Je télécharge le pdf"
---
::

:ppw-pdf-link{href="/documents/tholga_fa-1201d.pdf"}

::ppw-chat-conversation
---
conversation:
- zina: "Je le dépose dans la dropzone"
---
::

:ppw-checklist-result-static{path="/usage/check_result/paf_1201d"}

::ppw-chat-conversation
---
conversation:
- zina: "En déroulant les différents points de contôles rouges, je constate que la quantité sur le BC de l'article Réf Article : CREO5432 est différent du BL mais c'est pas tout, il y a du rouge sur la Signature de l'assistante de gestion qui doit être la mienne ainsi que sur la Signature Services Achat qui doit être celle de Patrick, la checklist indique que la clé publique de Patrick n'a pas été trouvée alors qu'il a un certificat Chambersign nominatif.
En conclusion, le BL a été modifié et les signatures usurpées.
Peggy a tenté de frauder sur le montant de la PAF."
---
::

::ppw-chat-conversation
---
conversation:
- francoise: "Merci Nadine, Valérie, pour ce jeu de rôles. C’était parfait. J’espère que ce jeu de rôles vous a sensibilisé sur le risque d'usurpation d'identité. Je vous propose de poursuivre avec une petite animation de 2mn qui vient compléter ce que nous venons de voir. Vous retrouvez Zina et Peggy..."
---
::

## Animation

::ppw-anim
---
href: "https://media.paxpar.tech/vtd_PAF.svg"
---
::

## Questions clés



## ## Vidéo du replay