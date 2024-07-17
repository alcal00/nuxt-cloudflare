# Galerie

Les PDF de référence sont conservés dans la galerie.

La galerie principale est accessible à l'adresse https://gallery.paxpar.tech/gallery

## Ajout d'un PDF à la galerie

Pour modifier la galerie, il faut modifier le [projet gitlab gallery](https://gitlab.com/arundo-tech/gallery).

Les fichiers PDF sont dans le répertoire [/docs/pdf](https://gitlab.com/arundo-tech/gallery/-/tree/master/docs/pdf).

Vous devez créer un nouveau répertoire avec un nom unique.
Le nom doit idéalement ne comporter que des lettres, des chiffres
et le tiret `-`.

Dans ce répertoire, vous placez votre PDF
(peu importe son nom).
Un seul PDF doit être déposé par répertoire.

## Ajout de détails sur le PDF

Des informations utiles peuvent être ajoutées avec le PDF.
Il s'agit d'indiquer par exemple :
* la ou les particularités de ce PDF
* un lien vers d'autres PDF en rapport
* toute autre information utile

Ces informations sont ajoutées au format markdown dans un fichier `info.md`.

Ce fichier est a créer dans le répertoire du PDF.

En voici un premier exemple :
```markdown

Ce PDF contient 2 signatures dont l'une est non-conforme.

```

Le fichier `info.md` peut être plus complexe :

```markdown

Ce PDF contient 2 signatures dont l'une est non-conforme.

# Cas similaires

Ce PDF ressemble à [mon-exemple2.pdf](../mon-exemple2)
et à [mon-exemple3.pdf](../mon-exemple3)

# Acrobat Reader 10

L'affichage dans Acrobat Reader diffère selon la plateforme :

Sur MacOS :
![](acrobat-reader-macos.png)

Sur Windows :
![](acrobat-reader-windows.png)


```

Il est également possible d'ajouter une section frontmatter
pour des attributs qui seront utilisés lors de la consultation.

Voici un exemple de fichier `info.md` avec une telle en-tête :
```markdown
---
tags:
    - invoice
    - facturx
site:
    - fat-ura-pt
    - facture-document-legal
source: https://example.com
---

Ce PDF contient 2 signatures dont l'une est non-conforme.

# Cas similaires

Ce PDF ressemble à [mon-exemple2.pdf](../mon-exemple2)
et à [mon-exemple3.pdf](../mon-exemple3)

# Acrobat Reader 10

L'affichage dans Acrobat Reader diffère selon la plateforme :

Sur MacOS :
![](acrobat-reader-macos.png)

Sur Windows :
![](acrobat-reader-windows.png)

```
