---
title: Piste d'audit fiable
description: "PAF Et Doute Sur Le Taux De TVA ?"
image:
  src: https://media.paxpar.tech/PAF_cas-u2-1170x694.jpeg
authors:
  - name: Valérie SUIGNARD
    avatar:
      src: /avatar/valerie.png
      target: _blank
    to: https://www.linkedin.com/in/valerie-suignard/
date: 2023-01-09
---


# PAF Et Doute Sur Le Taux De TVA ?

## Pour rappel, la PAF c’est quoi (en bref) ?
La Piste d’Audit Fiable, c’est pouvoir tracer la vie d’une facture, accompagnée de tous les documents qui gravitent autour. C’est pouvoir justifier de son parcours numérique.

## PAF, un cas d’usage avec taux de TVA inadapté :
**En résumé** : La livraisons d’un produit cosmétique à base d’algues marines est initialement prévue en Chine (ce qui signifie que le taux de TVA est à 0), puis au dernier moment, le client demande à ce que la livraison soit faite en France, le taux de TVA à appliquer est donc normalement défini par la réglementation française. Or le bon de livraison et la facture ont déjà été édités avec le taux de TVA adapté à une livraison en Chine, soit un taux 0.

## Piste d’Audit Fiable et scénario, plantons le décor :
Imaginons un institut de beauté, l’institut KOLEE (client). Le responsable client du magasin, Jacques Chang, commande des produits cosmétiques phares pour son institut. La tendance en ce moment est aux produits cosmétiques à base d’algues marines. C’est donc auprès de son fournisseur, la société d’algue marine THOLGA que Jacques passe commande. Il signe électroniquement le bon de commande et l’envoie à la responsable Client du service achat de THOLGA, Zina Doucet. Zina Doucet, la responsable achat de THOLGA, signe électroniquement le bon de commande (BC) à réception et donne l’ordre d’exécuter cette commande.
![Bon de commande](https://media.paxpar.tech/pp_blog_paf_1203b-BC_jacques-zina.png)
THOLGA prépare la livraison, celle-ci est maintenant sur le départ pour la Chine.

Jacques contacte Zina et lui indique que la livraison a lieu finalement en FRANCE. 
Zina modifie l'adresse de livraison sur le BL et le signe. 

Jacques reçoit la livraison, contresigne le BL et le renvoie à Zina.

![Bon de livraison](https://media.paxpar.tech/pp_blog_paf_1203b-BL_zina-jaques.png)

Zina génére la facture (FA) sur la base du BC, elle demande au responsable du service achat THOLGA, Patrick Dupont, de signer la facture. Elle crée le fichier PAF comprenant : FA, BC, et BL.

## Piste d’Audit Fiable et scénario, parlons du risque lié à la TVA :

Zina vient de générer la piste d’audit Fiable et s’apprête à la transmettre à Jacques, mais l’adresse de livraison ayant changé au dernier moment, elle a un doute sur la conformité réglementaire de son dossier. Le taux de TVA en Chine pour les produits cosmétiques livrés est de 0, mais en France ce taux est de 20 %. Dans le doute, avant d’envoyer la PAF ainsi constituée à Jacques, Zina la dépose sur la plateforme paxpar.

## Piste d’Audit Fiable et vérification des données sous paxpar :

Zina dépose le fichier pdf dans la zone de dépôt de la plateforme paxpar. La plateforme signale plusieurs points critiques à l’aide d’un blason rouge dans la liste des points de contrôle :


:ppw-checklist-result-static{path="/tuto/carnet_paul"}

::list{type="success"}

- Analyse format PDF
- Liste de contrôle sélectionnée common.custom.tholga.checklists.paf_bcfabl_key
- facture au format factur-x
- Fournisseur identifié 
::
ou 
::list{type="danger"}
- Client identifié
- 
::callout
# summary 
Conformité facture
::
#content
::

::list{type="success"}

- Controle Qualité Produit
- Bon de commande associé
::

::list{type="danger"}
- Bon de livraison associé
::

::list{type="success"}

- Signature Services Achat
::


::list{type="info"}
- Conformité comptable via SAGE 
::

::list{type="success"}

- Vérification des Signatures
::

En toute logique paxpar détecte un problème au niveau de l’identification du client puisque l’adresse mentionnée sur le BL est différente de celle renseignée sur le BC et la FA.

La ligne associée au bon de livraison est également rouge puisque paxpar relève la même incohérence entre le BC et les autres documents joints à la facture.

**Mais le plus remarquable est sans doute la ligne détaillant la conformité facture :**

Le montant associé à la TVA est calculé par la plateforme. Là où pour le BC et la FA le montant de la TVA est de 0, il s’élève à 20 000 € s’il devait être basé sur les données du BL !

## Les spécificités de la plateforme paxpar
### PAF et paxpar
La plateforme paxpar va vous permettre de vérifier que votre Piste d’Audit Fiable est

- complète
- et conforme à vos exigences métier.

### Analyse globale de votre facture
paxpar analyse votre PDF auto-suffisant (c’est-à-dire que paxpar analyse le PDF facture, ainsi que les pièces jointes : Bon de Commande et Bon de Livraison).

1. paxpar vous indique si votre facture est un PDF/A, si c’est au format factur-X.
1. paxpar vous indique quelles sont les caractéristiques de votre fichier pdf, s’il a des pièces jointes, s’il est signé électroniquement.
1. paxpar procède à une analyse récursive des pièces jointes (de telle sorte que vous obtenez les mêmes informations concernant lesdites pièces jointes).
1. paxpar vous indique le nombre de signatures électroniques, le nombre de signataires,
1. paxpar vous affiche les certificats de signature.
1. paxpar signale toute anomalie, en particulier si le document pdf a été annoté après signature.

### Analyse de conformité de votre facture
Après l’analyse globale de votre facture, paxpar procède à une analyse en fonction de points de contrôles spécifiques.

Pour la PAF :

1. paxpar valide ou invalide la présence des pièces comptables attendues ;
1. paxpar extrait les données fournisseur ;
1. paxpar extrait les données client ;
1. paxpar vérifie la conformité facture :
    - paxpar s’assure que le numéro figurant sur les BC BL et la facture est identique,
    - paxpar s’assure que les références produits sont identiques sur toutes les pièces,
    - paxpar s’assure de la conformité TVA,
    - paxpar s’assure de la cohérence de l’adresse de livraison renseignée sur les BC, BL et la facture.
1. paxpar compare l’IBAN renseigné dans les données factur-x avec l’IBAN fournisseur de votre logiciel de gestion ;
1. paxpar s’est déjà assuré que les signatures électroniques présentes sur la facture sont valables ou non. Si elles le sont, alors paxpar vérifie également que les signatures apposées sont celles des signataires attendus que ce soit pour votre entreprise ou pour celle de votre fournisseur ou client, en comparant les clés publiques, nom et adresse e-mail du signataire.

Dès lors que paxpar détecte une incohérence, un blason rouge s’allume.

## Piste d’Audit Fiable complète et conforme à vos exigences métier ?
Un Glisser-déposer puis la simple lecture du résultat sous paxpar :

- PAF validée ou
- point critique signalé,

**C’est aussi simple que ça.**

## Nous contacter ? Une démo ?
info@paxpar.tech

**C’est aussi simple que ça.**