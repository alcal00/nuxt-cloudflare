---
title: Fraude à l'IBAN
description: "Je reçois des factures de mes fournisseurs, comment je suis sûr de régler la bonne personne ?"
image:
  src: https://media.paxpar.tech/chsg_20230316_ldin-post1.jpeg
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
date: 2023-03-16
---


En 2021, 2 entreprises sur 3 ont été victimes d'une tentative de fraude à l'IBAN et une entreprise sur 4 a subi une fraude avérée, soit 25% d'entre elles.
Dans une facture au format factur-x, les données de la facture sont associées à un visuel, et il est possible de modifier ces données, y compris l'IBAN.

Grâce à VérifTonDoc vous contrôlez la validité des données renseignées dans le fichier .xml associé à votre facture.

Plus aucun doute, vous êtes assuré de régler votre facture à la bonne personne.

****

Lors de ce webinaire de 30 minutes, vous découvrirez VerfiTonDoc, un outil qui permet de contrôler vos factures au format factur-x :

✅ Validité et concordance des données

✅ Validité des signatures électroniques

VerifTonDoc est un outil qui vérifie la conformité des documents numériques. En un clic, elle détecte les fraudes ou irrégularités.
Plateforme de confiance, elle contrôle également la validité de la signature électronique.

****
# Atelier du 16/03/2023

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

![Chambersign le LAB](https://www.chambersign.fr/chambersign-le-lab/)

## Pitch du scénario 

::ppw-chat-conversation
---
conversation:
    - francoise: "Votre fournisseur vous envoie par mail une facture à régler et vous la réglez, persuadé d’avoir payé à la bonne personne. Et pourtant, quelques mois plus tard, votre fournisseur vous appelle pour vous demander de régler la facture."
---
::

![](https://media.paxpar.tech/atelier_fraude-iban_scenario.png)

## Acteurs
::ppw-chat-conversation
---
conversation:
    - jacques: "Jacques : responsable des achats CARREFOUR"
    - guillaume: "Guillaume : responsable des ventes TOTAL"
    - francoise: "Françoise : experte comptable dans le cabinet VODANES"
---
::

Copie écran OBS

## Mise en scène 
::ppw-chat-conversation
---
conversation:
    - nadine: "Nadine interprète Jacques"
    - valerie: "Valérie interpète Guillaume et Françoise"
---
::

****

::ppw-chat-conversation
---
conversation:
    - jacques: "Je viens de recevoir une facture Total, je la télécharge et je la passe en règlement auprès du service comptabilité"
---
::

****

::ppw-chat-conversation
---
conversation:
- guillaume: "Bonjour Jacques, cela fait 2 mois que je t'ai envoyé une facture et tu ne l'as toujours pas réglé. C'est normal ? !"
- jacques: "Bonjour Guillaume. Peux-tu me redonner le numéro ? "
- guillaume: "Oui c'est la facture FA245-0595, datée de janvier"
- jacques: "Après vérification dans ma compta, la facture est bien passée en règlement et le virement a bien été effectué"
- guillaume: "Je suis désolé Jacques mais je n'ai jamais reçu le paiement"
- jacques: "Ecoute, je vais regarder de mon côté et on se rappelle. Je t'avouerais que la situation m'inquiète car la fraude ça existe, je vais me rapprocher de mon expert comptable"
---
::

****

::ppw-chat-conversation
---
conversation:
- francoise: " En quoi puis-je vous aider ?"
- jacques: "Bonjour Françoise, je rencontre un problème avec une des factures Total, je pense l'avoir réglé à la mauvaise personne pourtant j'ai bien vérifié l'IBAN sur le document."
- francoise: "J'ai déjà rencontré ce type de problème et en faisant le tour du marché je suis tombée sur la solution VérifTonDoc que j'utilise depuis quelques semaines et que je préconise à mes clients. Avez- vous 5 minutes pour une démonstration?"
- jacques: "Oui bien sûr"
---
::

****

::ppw-chat-conversation
---
conversation:
- francoise: "Il s'agit bien de vérifier la conformité de la facture suivante la FA245-0595. Voyons ce que nous dit VérifTonDoc ?"
---
::

::ppw-chat-conversation
---
conversation:
- francoise: "Je me suis identifiée, je sélectionne *Je vérifie mon Doc*, puis je choisis la liste de contrôle *Je vérifie la conformité des factures*. "
---
::

![](/images/images_verifTonDoc/plateforme_veriftondoc.png)

![](/images/images_ffx/conformite_facture.png)

::ppw-chat-conversation
---
conversation:
- francoise: "Je dépose le pdf"
---
::

:ppw-pdf-link{href="/documents/ffx_total_106_ko.pdf"}

:ppw-checklist-result-static{path="/usage/check_result/ffx_total_106_ko"}

::ppw-chat-conversation
---
conversation:
- francoise: "Je constate 2 statuts rouge. Je déroule le point de contrôle sur la Conformité Financière.
C'est assez malin, l'IBAN semble être le bon, pourtant, comme le traitement des données est de plus en plus automatisé, celui qui a modifié l'IBAN a pris la peine de le modifier dans les données xml !
Si je déroule maintenant le point Signature Direction Commerciale, on constate que la clé publique n'est pas celle de Guillaume Petit,"
---
::

::ppw-chat-conversation
---
conversation:
- jacques: "Comment c'est possible, je ne comprends pas ?"
- francoise: "C'est simple, c'est comme si quelqu'un avait imité la signature manuscrite de Guillame Petit"
- jacques: "Je comprends mieux comment a été initiée la fraude. Total m'a renvoyé la facture, est ce que vous pouvez la vérifier pour moi. ?"
- francoise: "Bien sûr, on va le faire en direct"
- jacques: "Je viens de vous l'envoyer."
---
::

:ppw-pdf-link{href="/documents/ffx_total_186_ok.pdf"}

****

::ppw-chat-conversation
---
conversation:
- francoise: "Je fais la même manipulation que tout à l'heure, je dépose la nouvelle facture et cette fois-ci tous les voyants sont au vert, votre facture est correcte"
---
::

```
TODO: uncommnt when 
![](/images/images_ffx/vtd_choix-checklist_conf-fx_clp.png)
```


:ppw-checklist-result-static{path="/usage/check_result/ffx_total_186_ok"}


::ppw-chat-conversation
---
conversation:
- jacques: "C'est super, dorénavant je vais utiliser cette plateforme, cela va m'éviter bien des déconvenues."
- francoise: "Au revoir"
- jacques: "Merci, au revoir."
---
::

::ppw-chat-conversation
---
conversation:
- francoise: "Merci Nadine, Valérie, pour ce jeu de rôles. C’était parfait. J’espère que ce jeu de rôles vous a sensibilisé sur le risque de fraude à l’iban. Je vous propose de poursuivre avec une petite animation de 2mn qui vient compléter ce que nous venons de voir. Vous retrouvez Jacques qui ..."
---
::

![](https://media.paxpar.tech/image-cle_atelier-IBAN.png)

::ppw-chat-conversation
---
conversation:
- guillaume: "« Merci Françoise, alors on vient de le voir en synthèse, la puissance de la plateforme VerifTonDoc permet de réduire le risque de fraude à l’IBAN et donc de s’assurer d’une parfaite conformité documentaire.
Nous venons donc de terminer notre démo je vous propose que nous passions à la lecture des questions du tchat ? »"
---
::



## Animation

::ppw-anim
---
href: "https://media.paxpar.tech/vtd_FX_demo_invoice_iban_jacques.svg"
---
::

## Questions

On a eu une petite présentation de ChamberSign et on connait un peu mieux ChamberSign et la plateforme mais vous avez aussi parlé de paxpar : qui est paxpar ?

    paxpar est la plateforme éditée par la société arundo.tech qui participe au Lab ChamberSign?


A quoi sert un certificat dans l’opération de signature électronique ? et pourquoi c’est mieux un certificat ChamberSign qu’une signature Docusign dans verifTonDoc ?

    Le certificat contient l'qui identité du signataire et permets de générer la signature. Il contient également un lien vers le certificat de l'autorité qui délivre le certificat. Chaque autorité utilise des méthodes différentes pour authentifier le signataire. Certaine génère un certificat différent pour chaque signature. ChamberSign génère un certificat unique avec une authentification du signataire plus forte que Docusign.

Comment je peux être sûr(e) que la facture que j'ai reçue est bien au format Factur-X ?

    Il est difficile de vérifier celà avec Acrobat Reader. Il est préférable d'utiliser un outil dédié à celà. ChrorusPro, le site FNFE et bien paxpar dispose d'outil pour vérifier le format Factur-X.

Peut-on mettre un point de contrôle sur n'importe quel élément présent dans le fichier xml ?

    Il n'y a pas de limite aux contrôles que vous pouvez effectuer sur le fichier xml d'une facture au format Factur-X.
    La limite raisonnable est de vérifier uniqement les valeurs qui peuvent produire un litige ou une fraude.
    Attention toutefois, tous les éléments d'une facture, même au format Factur-X ne sont pas présents dans le fichier xml, ça dépend du profil de données (basic, basic wl, minimum, extended) choisi par l'émetteur de la facture. 

Je suis une PMI/PME, comment je fais pour éditer des factures au format factur-x ?

    L'éditeur de votre outil de facturation doit probablement générer des factures au format Factur-X.
    S'il ne le fait pas, ou pas encore, vous pouvez vous retourner vers une solution tierce qui peut enrichir vos factures PDF
    pour les mettre au format Factur-X. La plateforme paxpar propose ce service.


## ## Vidéo du replay