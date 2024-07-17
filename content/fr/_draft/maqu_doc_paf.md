---
model: brouillon_maquette
title: Génération d'une Piste d'audit fiable et sa vérification
description: Comment constituer cette piste d'audit fiable ? Pourquoi et comment le vérifier ?
image: 
aside: false
---

# Description du document **Piste d'audit fiable**
décrire le contenu de la Piste d'audit fiable comprenant :
- lister les pièces jointes
- visualiser chaque pièce jointe (showpdf)
- présenter les méta données par pièce jointe

_______________________________

# Comment créer cette piste d'audit fiable en responsabilisant chaque acteur ?

## écrire le scénario de génération en ayant identifié les acteurs (Société Tholga, Société Litext - on a 2 cas d'applications)
voir pour écrire de manière simple et ludique, avec les problématiques des clients (réfléchir comment ?)

## faire la démonstration de ce service (utiliser les showcase)
re-concevoir des Pistes d'audit fiable avec le craft approprié
- lister les fichiers pdfs tholga (disponible dans le répertoire documens controlés) et litext (disponible sur le site textile.uat.document.legal)

Voir comment intégrer les fonctionnalités de délégation où chaque acteur s'engage en déposant et en signant le document qu'il a émis.

________________________________

# Pourquoi vérifier cette piste d'audit fiable ? quels sont les risques ? je suis convaincu, je fais comment ?

## écrire le scénario de vérification en ayant les acteurs (tous les scénarios Tholga et Litext à reprendre)
Montrer la valeur ajoutée en prenant la vue de chaque acteur.

## faire la démonstration de ce service (utiliser les showcase)
- re-tester les checklists (.yaml ou .json) sur le sujet
- préciser les documents pdfs utilisés lors de ces tests
- utiliser les showcase sur la base de ces checklists et fichiers pdfs.

________________________________
### Fonctionnalité : Déclenchement automatique de la CL

Différents filtres existent pour déclencher automatiquement une checklist, quand vous déposez votre fichier sur la dropzone :

- sur le nom du fichier déposé (comme par exemple Tholga_FA)
```
filter:
#Filtre déclenché pour la PROD
  filename: tholga_FA
```
- sur la clé publique du signataire du document
```
filter2:
#Filtre déclenché pour la DEV
  - signature:
        pubkey: XXXXX
```

- sur le nom des fichiers attachés
```
filter2:
#Filtre déclenché pour la DEV
  - attachment:
        name : factur-x.xml
```
si vous voulez plus de détails sur ce sujet, vous pouvez consulter notre documentation, en cliquant sur ce lien:
https://uat.paxpar.tech/docs/checklist/filter

@valerie: pourrais-tu relire la page ? indiquer si c'est facilement compréhensible

________________________________
### Fonctionnalité : Comparaison d'une même donnée, présente dans des pièces jointes

Vous devez comparer une même référence à la fois présente dans par exemple, votre bon de commande, votre bon de livraison et votre facture, qui s'intitule différemment dans chacune de ces pièces jointes.

Pour faciliter la compréhension, on suppose que votre référence s'intitule :
- pour votre bon de commande : ref_bc
- pour votre bon de livraison : ref_bl
- pour votre facture : ref_fa

Pour comparer de proche en proche, vous devez savoir si :
- 1er cas : ref_bc <> ref_bl
- 2eme cas : ref_bc <> ref_fa
- 3eme cas : ref_bl <> ref_fa

Pour obtenir le chemin de cette référence, il suffit de consulter la vue données :
TODO: mettre une copie d'écrans de la vue données (#2929)

Nous vous proposons de l'écrire le plus simplement du monde, de la manière suivante:
```
assert root.metadata.ref_bc == root.attachments.bc_pdf.metadata.ref_bc
assert root.attachments.bl_pdf.metadata.bl_ref == root.attachments.bc_pdf.metadata.bc_ref
```

https://uat.paxpar.tech/docs/checklist/assert_deep

TODO: revoir la documentation, les tests sur ces régles.

TODO : Imaginer 3 posts ayant 3 niveaux de comparaison : basique, modéré et avancé
** Niveau de comparaison basique
Exemple : comparer le nom ou la référence de la facture, avec le nom ou le numéro du bon de commande
** Niveau de comparaison modéré
Exemple : comparer la valeur du montant de la facture à un seuil
** Niveau de comparaison avancé
Exemple : comparer la référence d'un article de la facture, avec celle du bon de livraison

________________________________
## Entreprise THOLGA - Déroulement des tests

### Préalable 1 : 
Aucune checklist sélectionnée pour tester les fichiers tholga_FA (car il y a un filtre sur le filename)

Tous les fichiers tholga_FA, disponibles dans le répertoire : pp-ref-common/documents_controles et donnent le bon résultat, en appelant automatiquement la checklist : https://uat.paxpar.tech/check/common.custom.tholga.checklists.paf_bcfabl_nadine

TODO: voir pour renommer cette checklist en comparant par rapport aux autres

### Préalable 2 : 
Sélection de la checklist : https://uat.paxpar.tech/check/common.custom.tholga.checklists.paf_bcfabl_nadine

### Test n°1
File: tholga_CFA-1201b.pdf
Résultat :
Points à creuser :
![Position des fichiers erronée](/images/image.png)

Tous les fichiers tholga_CFA, créés pour rappel à partir du craft, n'ont pas d'erreurs d'exécution.

TODO: faire les showcase associés
________________________________
## Entreprise LITEXT - Déroulement des tests









