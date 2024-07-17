---
title: Lien PPF- PDP - OP
description: "Beaucoup d'acronymes et peu d'explications "
image:
  src: https://media.paxpar.tech/pp_blog_fe_gain-fiabilite7_pexels.png
authors:
  - name: Francoise ENTZMANN
    avatar:
      src: https://github.com/phe.png
      target: _blank
    to: https://github.com/phe
date: 2023-06-19
---

# Beaucoup d'acronymes et peu d'explications 
[Francoise ENTZMANN]|19 Juin 2023|Conformité,Confiance| 

## Liens / webinars utiles
- 06/07/2023 - 11h : webinar avec Marc Wolff (focus sur la facture en réception) et Lucien Getnez (DGFIP - avec un objectif de formation) - participer à ce webinar pour avoir les contacts et les suivre.
Eric Wanscoor est focus sur la facture en émission.

- Suivre le groupe sur LinkedIn : FNTC - Une femme (DGFIP) s'intéresse à la TVA intracommunautaire. 90% des TPE/PME feront des échanges français, donc pas de problème pour la TVA.
Par contre, 10% des échanges se réaliseront au sein de l'union européenne. Ceci signifie qu'un ensemble de règles sera appliqué et dépend du pays d'emission et de réception.

## Objectif de la réforme :
Réaliser une économie de 11Milliards d’euros / an

Anacronymes :
* PPF : Portail Public de Facturation
* PDP : Plateforme de Dématérialisation Partenaire

Position du PDP :
il est placé entre l’acheteur (ou le fournisseur) ET le PPF.

Pour comprendre le rôle du PDP, il faut écouter l’épisode 2 (à trouver pour en faire une synthèse)

3 flux possibles :
- Flux 1 : Administration fiscale
- Flux 2 : Facture
- Flux 3 : échanges PDP en assurant le lien avec le PPF.


#### insérer une copie d'écrans

Les fonctionnalités d’un PDP :
Les PDPs seront ouverts en Décembre 2023 sachant que le PPF sera opérationnel à cette date.
Calcul de TVA automatisée

Schéma de circulation des factures :
PPF est le point de transmission, dès lors que la facture est déposée, elle sera automatiquement gérée.

PPF - Fonction 1
Toute entreprise qui reçoit une facture, sur la base d’un SIRET ou plusieurs SIRET (clé de routage) j’adresse ma facture à un SIRET ou à plusieurs SIRETs, 
Tout cet annuaire de routage sera déclarée sur la plateforme PPF.

PPF – Fonction 2
Tout le transit des transits confromes au socle : socle = facture est au format CII, soit au format UBL (format Chorus, avec une image embarquée) ou bien au format FX

PPF – Fonction 3
Gestion du cycle de vie : 4 status - 

PPF – Fonction 4
Centralisation de toutes les infos pour le e-reporting => faciliter le calcul de TVA par l’administration fiscale.

Chaque entreprise pourra soit se connecter directement, soit via son PDP, soit via OD au PPF, pour déposer les factures ou recevoir des factures.

Le PDP ou l’OD dépose mes factures client ou récupére mes factures fournisseur.
En terme de prestataire, je peux avoir deux PDPs, ou ODs diférents.

PDP rôle : ils sont immatriculés par l’administration pour traiter un certain nombre de garanties.
Avec des services cil
échange de factures : si le client a à sa disposition un échange EDI, ou il veut le détail de lignes (qui n’est pas obligatoire aujourd’hui), donc il s’agit d’un flux différent du socle donc ce flux différent est pris en charge par le PDP et l’échange entre les PDPs doit être précisé au PPF. 
Elles seules peuvent s’échanger des formats différents.
Cas 1 : Je veux envoyer des factures au format factur-x, correspondant au socle, donc je peux passer par un OD.
Cas 2 : je souhaite envoyer des factures au format facturx, différent du socle donc je dois passer par un PDP qui sont habilités à s’échanger des formats différents du socle.

#### insérer copie écrans
1 = gestion de l’annuaire 
2 = échange des factures avec des flux différents du socle.
3 = déposer et récupérer au format du socle du PPF
4 = alimenter le cycle de vie (situation de la facture)
5 = gérer le reporting.

#### insérer copie écrans

Messages de type EDIfact, EcoTax ne sont pas sur le socle donc le flux est différent, c’est le PDP qui gére ce flux.
Je veux un format différent, ou des données plus riches que le format basique.

Gestion exclusive domestique et assujetti TVA.

#### insérer copie écrans

SecNumCloud : 22000€ mensuel, non transfert hors de l’UE
Authentification renforcée : double facteur pour se connecter.
Gérer les intéropabilités : Carrefour – seul donneur d’ordre utilisera PDP - 

- Réception en EDI Fact, pas de problème particulier.
- Emission au fil de l’eau des factures ayant des formats différents, c’est plus difficile.

PDP n’est pas capable d’envoyer ma facture, correspondant au format comme souhaite le client – comment je fais ?

PDP utile que si un de mes clients souhaitent recevoir mes factures dans un format différent de celui du socle

#### insérer copie écrans

