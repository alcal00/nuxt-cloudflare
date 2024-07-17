---
title: Piste d'audit fiable
description: "Parlons De La Piste D'audit Fiable"
image:
  src: https://media.paxpar.tech/pp_about_hoover01_service2-1-1.png
authors:
  - name: Valérie SUIGNARD
    avatar:
      src: /avatar/valerie.png
      target: _blank
    to: https://www.linkedin.com/in/valerie-suignard/
date: 2022-10-19
---

# Parlons De La Piste D'audit Fiable

## Parlons de La Piste d’Audit Fiable
La Piste d’Audit Fiable : mais qu’est-ce que c’est ?
C’est pouvoir tracer la vie d’une facture, accompagnée de tous les documents qui gravitent autour.

C’est pouvoir justifier de son parcours numérique.

## Pour l’ensemble de vos factures : Il convient de se poser les bonnes questions
Entre les mains de qui cette facture est-elle passée ?

Qui l’a signée, et quand ?

A-t-elle été annotée ?

Est-elle dans le bon format ?

Est-elle prête à être archivée ?

Quels sont les documents associés qui prouvent la réalité de cette facture ?

La TVA, le taux de TVA, on en parle ?

Une facture est souvent associée à d’autres documents (en particulier le Bon de Commande et le Bon de Livraison). Il faut que le Bon de Commande soit établi en amont de la facture pour que cette dernière soit valide. La preuve doit être faite que chaque élément constituant le dossier de chaque facture soit authentique. Si tel ou tel document est présenté comme étant un élément constituant de tel ou tel dossier facture, il faut être sûr qu’il n’a pas été altéré, ou encore modifié après coup, puis remis au dossier à posteriori.

## La Piste d’Audit Fiable Répond à ces questions.
La PAF permet d’établir le chemin parcouru par chaque facture, de certifier que les liens établis entre la facture et les différentes pièces qui lui sont attenantes n’ont pas été rompus, que les autorités compétentes ont bien scellé le/les documents à l’aide d’une signature numérique qualifiée.

Parlons PAF et réglementation, puis parlons PAF et cas d’usage.

## PAF et réglementation
## Des textes

Les **décrets d’application de la directive 2010/45/UE** du 13 juillet 2010 ont été publiés en 2013. Le but de ces décrets : lutter contre la fraude à la TVA. Les entreprises assujetties à la TVA en France doivent **déployer des contrôles** de leurs flux de gestion et de facturation, et **documenter ces contrôles :**

- un produit a été commandé, une prestation de service a été demandée ?
- le produit a été livré, la prestation de service a été réalisée ?
- la facture correspondante a été établie ?

La Piste d’Audit Fiable est là pour tracer ce flux.

Une entreprise doit pouvoir prouver – c’est ce qu’elle fait avec la PAF, que ses systèmes informatiques permettent une gestion documentée, chronologique, sécurisée et sous contrôle de ses flux de gestion et de facturation à tous les niveaux (achats, ventes, opérations soumises à TVA).

Les factures non concernées par la PAF sont celles définies dans l’article 289 :
Celles qui le sont (voir le descriptifs point VII, 1°) sont donc, entre autres : la facture papier, facture papier numérisée, PDF, PDF RGS, etc [1].

## Une facture concernée par la PAF, mais archivée sans PAF, quelles conséquences ?
**La mise en œuvre de la Piste d’Audit Fiable est obligatoire** pour toutes les entreprises françaises assujetties à la TVA émettant des factures telles que définies point VII – 1° de l’article 289 mentionné ci-dessus, **depuis le 1er janvier 2013.**

À défaut, voici ce que votre entreprise risque :

- le rejet des pièces comptables,
- le rejet du droit à la déduction de la TVA.

Si le fisc refuse une facture pour non-respect de la PAF, votre entreprise s’expose alors à :

- une pénalité de 50 % pour avoir vendu sans facture (avec toutefois une possible réduction de cette amende à 5 % si l’opération s’avère comptablement correcte). [1]

## Un PDF auto-suffisant
paxpar est la plateforme qui va vous permettre d’établir votre Piste d’Audit Fiable.

Le savez-vous ? Un document PDF peut avoir des fichiers attachés :

Prenons l’exemple des Factures au format Factur-X, c’est un visuel « .pdf » et un fichier attaché au format « .xml » (les métadonnées).

Un fichier PDF peut donc embarquer les éléments de preuve utiles à notre PAF !

Vous avez édité un Bon de Commande **au format Order-X,** c’est un visuel « .pdf » et un fichier attaché au format « .xml » (les métadonnées). Ce PDF est signé électroniquement par les personnes habilitées.

Vous avez édité un Bon de Livraison au format « .pdf » avec toutes les métadonnées utiles associées, par exemple au format « .yaml ». Ce PDF est signé électroniquement par les personnes habilitées.

Il vous suffit alors de générer votre fichier de facture PDF auto-suffisant, embarquant les éléments de preuve BC et BL, contenant eux-mêmes les métadonnées, un peu à la manière de poupées russes.
![Facture](https://paxpar.tech/site/wp-content/uploads/2022/10/PAF-le-lab_tholga-1100x694.png)
## PAF et paxpar
La plateforme paxpar va vous permettre de vérifier que votre Piste d’Audit Fiable est
- complète
- et conforme à vos exigences métier.

## Analyse globale de votre facture
paxpar analyse votre PDF auto-suffisant (c’est à dire que paxpar analyse le PDF facture, ainsi que les pièces jointes : Bon de Commande et Bon de Livraison).
1. paxpar vous indique si votre facture est un PDF/A, si c’est au fromat factur-X.
1. paxpar vous indique quelles sont les caractéristiques de votre fichier pdf, s’il a des pièces jointes, s’il est signé électroniquement.
1. paxpar procède à une analyse récursive des pièces jointes (de telle sorte que vous obtenez les mêmes informations concernant lesdites pièces jointes).
1. paxpar vous indique le nombre de signatures électroniques, de signataires,
1. paxpar vous affiche les certificats de signature.
1. paxpar signale toute anomalie, en particulier si le document pdf a été annoté après signature.
## Analyse de conformité de votre facture
Après l’analyse globale de votre facture, paxpar procède à une analyse en fonction de points de contrôles spécifiques. Pour la PAF :
1. paxpar valide ou invalide la présence des pièces comptables attendues ;
1. paxpar extrait les données fournisseur ;
1. paxpar extrait les données client ;
1. paxpar vérifie la conformité facture :
- paxpar s’assure que le numéro figurant sur les BC, BL et la facture est identique,
- paxpar s’assure que les références produits sont identiques sur toutes les pièces,
-  paxpar s’assure de la conformité TVA,
-  paxpar s’assure de la cohérence de l’adresse de livraison renseignée sur les BC, BL et la facture).
1. paxpar compare l’IBAN renseigné dans les données factur-x avec l’IBAN fournisseur de votre logiciel de gestion ;
1. paxpar s’est déjà assuré que les signatures électroniques présentes sur la facture sont valables ou non. Si elles le sont, alors **paxpar vérifie également que les signatures apposées sont celles des signataires attendus** que ce soit pour votre entreprise ou pour celle de votre fournisseur ou client, en comparant les clés publiques, nom et adresse e-mail du signataire.
Dès lors que paxpar détecte une incohérence, alors un blason rouge s’allume, attirant ainsi votre attention.
## Piste d’Audit Fiable complète et conforme à vos exigences métier ?
Un Glisser-déposer puis la simple lecture du résultat sous paxpar :
- PAF validée ou
- point de contrôle critique signalé,
C’est aussi simple que ça. Vous souhaitez le tester par vous-même, il vous suffit de cliquer sur Test Gratuit, juste dans la barre de menu.
## Références
[1] https://blog.spendesk.com/fr/piste-d-audit-fiable