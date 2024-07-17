---
description: Une base SQLite dans un PDF
lang: fr
---

# SQLite et PDF

## SQLite partout

SQLite la base de donnée la plus utilisée au monde
plusieurs bases de donnée SQLite dans tous les téléphones, plusieurs bases de donnée SQLite dans tous les navigateurs

## SQLite dans un PDF

## Les avantages 

### Base SQL

tables, vues, jointure, SQL riche

### Signature électronique

la signature électronique d'un PDF couvre ses pièces jointes.

La signature couvre donc un fichier SQLite qui est joint au PDF.

Toute alteration de la base de donnée sera trahie par la signature électronique.
Il est donc impossible de modifier une valeur, d'ajouter une ligne ou d'en supprimer sans que la signature ne soit invalidée.

Une base SQLite attachée à un fichier PDF est donc une excellente protection cryptographique d'une base de donnée.

Signer une base donnée est très pertinent pour des échanges sécurisés ou pour constituer des chemins de preuves.

### Lisibilité

On peut dans les pages du PDF présenter un contenu lisible par un être humain.
Des tableaux, des graphiques ...
on peut expliquer la présence du fichier SQLite,
voire décrre la procédure pour retrouver les données présentées

## Les limites

Les limites à l'inclusion d'une base de donnée SQLite à un fichier PDF sont plutôt liées à l'usage du PDF.

### Taille

La taille est souvent une limite.
Il n'est pas rare d'avoir des fichiers SQLite de plusieurs centaines de Mo ou Go.
Un fichier PDF de cette taille dépasse probablement la limite de beaucoup de lecteur PDF.

Un fichier PDF peut raisonnablement peser quelques dizaines ou centaines de Mo mais guère plus.

Les [catalogues Ikea au format PDF](https://archive.org/details/ikea-catalogs/)
sont des fichiers PDF volumineux,
[celui de 2021](https://archive.org/details/ikea-catalogs/Ikea-2021/)
pèse plus de 900 Mo pour 232 pages.

Cette limite est toutefois à relativiser, dans une base de 10 Mo vous pouvez stocker plus d'un millions de lignes[^1].
Dans une base 100 Mo c'est ainsi plusieurs millions d'enregistrements qui peuvent être embarqués[^1].

[^1]: Taille variable fonction des données et du schema de la base.


### Lisibilité

On ne *voit* pas le contenu de la base.
On voit juste une pièce jointe.

## Exemple

Montrer un exemple de notebook Python où on génrère une base SQLite à partir de fichiers Excel / CSV.

à voir :

* vitesse de requêtes
* requêtes complexe (join, group by, ...)
* graphiques simples
* analyses statistiques simples via pandas
* export Excel


