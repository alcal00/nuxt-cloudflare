---
model: brouillon_atelier
title: 4 pistes d'atelier
description: Atelier du 20 juillet 2023
image: https://media.paxpar.tech/fx_template1.png
---

# 4 pistes d'atelier 

****

## 1) Je fiabilise mes rapports d'expertise grâce à la signature électronique

Litige du type :

Un diagnostiqueur rédige un rapport termite, sa conclusion : le bâtiment est infesté de termites. 
Le vendeur falscifie le diagnostic, vend le bien.
Plusieurs années plus tard le diagnostiqueur est incriminé par l'acheteur.
le diagnostiqueur conteste, et a du mal à pouver sa bonne foi.

Pour éviter ce type de litige :
Solution VérifTonDoc : 
1) craft - PDF termites (formulaire ? fichier excel avec les données relevées et conclusions ce qui va être utilisé pour associer des métadonnées au pdf ?)
2) le diagnostiqueur dépose la facture correspondant à son intervention.
3) le diagnostiqueur dépose le diagnostic termite (pdf augmenté) signé électroniquement 
La plateforme génère une facture signée avec le rapport termite en annexe.

on montre donc le craft :
la facture en doc maître avec le rapport (et le tableur excel ?) en annexe.

****

## 2) je génère un rapport d'expertise pour un logement dédié à de la location sur airbnb
les places de marché airbnb / amazone

1)
Un diagnostiqueur doit faire un diagnostic termites
il se déplace
il a des dépenses en airbnb
les OD/PDP veulent récupérer les factures

2) 
Un diagnostiqueur se rend chez une particulier qui a 3 appartements en location sur airbnb
dans ses rapports il veut une trace d'airbnb commme quoi le diagnostic a bien été fait aux adresses mises en location par le propriétaire sur la plateforme airbnb : il insère ces informations dans son rapport de diagnostic 
COMMENT ?

****

## 3) Je génère un document regroupant toutes les factures que j'ai émises depuis mon dernier envoi à mon comptable (sur un mois) 
écart de fec
(Scénario semblable à la DR - Demande de Renseignements)

avec la réforme de la facturation électronique, la comptabilité va être mensualisée et non plus annualisée comme c'est le cas actuellement. Les fournisseurs devront donc fournir tout les éléments nécessaires mensuellement.

L'artisan doit transmettre à son comptable les factures éditées depuis le dernier envoi

Pour la génération du premier envoi groupé de ses factures, l'artisan dépose dans la dropzone deux fec : celui édité en juin, et celui à date, correspondant aux factures éditées depuis lors et daté du 31 juillet.
Le formulaire de la plateforme affiche une liste de documents à fournir
l'artisan dépose alors les factures manquantes au format Factur-x dans la dropzone
la plateforme génère un pdf de remise de documents avec les factures et les deux fec en annexe

La fois suivante, l'artisan dépose le rapport généré le 31 juillet et le fec du 31 août (à jour) 
La plateforme génère un pdf de remise de documents avec le rapport de juillet, le fec d'août et les factures en annexe

## 4) Je veux m'assurer que mon flux de factures est conforme à la réglementation

La réglementation prévoit la mise en service d'un Portail Public de Facturation, d'ici 12/2023 afin d'économiser XX M€ (info donnée par Eric).

Le périmètre de la réforme porte initialement sur toutes les entreprises francaises assujetties à la TVA, domestiques, avec une extension appliquée sur les transactions interentreprises non domestiques appelées B2B International et entre les entreprises et le consommateur final en France appelées B2C.

Dans ce contexte, plusieurs scenari apparaissent, volontairement nous allons nous focaliser sur 3 d'entre eux :
* cas 1 : échanges entre un petit artisan et un distributeur comme Carrefour
* cas 2 : échanges entre une TPE/PME avec ce même distributeur Carrefour
* cas 3 : échanges entre deux grands distributeurs : Carrefour et Total

La préoccupation du fournisseur est de s'assurer que la facture qu'il va déposer sur le PPF via différents moyens sera finalement bien acceptée.

****

### TODO
* Orienté la présentation en craft combine la demande de renseignement entre 2 PDPs ? faire un schéma 2 PDPs et l'échanges des anomalies par PDF metadata
* reprendre les exemples de l'atelier précédent et voir comment on y intégre le craft ?
* Coté fournisseur qui dépose une facture pour se faire payer donc il doit générer la facture
* Coté client qui reçoit une facture qu'il doit régler donc il doit vérifier la facture.

Trouver les cas d'usage dans le dossier de spécifications
