---
model: atelier
title: Rapport de Fin d'Intervention
description: Simplifiez la vérification de conformité de vos dossiers RFI et de tous les documents associés à ce rapport. Simplifiez la génération de dossier RFI. 
image: https://media.paxpar.tech/20240605_RFI_fr.png
aside: false
date: 2024-06-18
---



# Paxpar et la gestion de documents complexes

Un des principaux atoûts de la plateforme Paxpar est la gestion de documents complexes, de **plusieurs centaines** de pages.

Pour vérifier les documents fournis, notre solution fait appel à une liste de contrôle qui est spécifique à chaque document et qui vérifie la **conformité** de points précis.

L'outil Paxpar permet une visualisation graphique de ces documents complexes et de ses différentes pièces jointes sous la forme d'une marguerite.

![image](/custom/assu_sini/documents/20240616-RFI-VuePiecesJointes.png)

Ainsi, il est plus facile de comprendre les documents principaux, les documents joints et les fichiers associés.


##  Contexte : le Rapport de Fin d'Intervention (RFI)

Ce document, issu du domaine du nucléaire, est **complexe** et **volumineux**. Il est composé d'une centaine de sous-documents, répartie en 5 dossiers, qui sont eux-mêmes constitués de plusieurs sous-dossiers.
Lorsque que l'on doit tout vérifier manuellement, il y a de quoi perdre la tête !

Le RFI en quelques chiffres c'est : 
- **50** intervenants
- **100** documents
- **2500** signatures

Lors de la création de ce document, chaque responsable doit s'assurer de la conformité des pièces qu'il reçoit et/ou transmet pour que le Rapport soit complet et conforme.


## Cas concret : le Dossier Assurance Qualité (DAQ)

Notre exemple fait intervenir deux acteurs :

![](https://media.paxpar.tech/RFI_kpi-isa.png)

![](https://media.paxpar.tech/RFI_kpi-jac.png)


## Mise en scène


### **Isabelle** :

> Je dois vérifier mon Dossier Assurance Qualité avant de l'envoyer, pour cela je le dépose sur la plateforme paxpar dans la rubrique _"Check"_.

![image](/custom/assu_sini/documents/DAQ-removebg-preview.png)

- La checklist me signale une erreur !
![image](/custom/assu_sini/documents/pp_check1.png)

- Je clique sur _"Vue de base"_ ou _"Vue non-conformité"_ pour trouver la cause.
![image](/custom/assu_sini/documents/pp_check2.png)

- Il manque une ligne dans la LDA
- J'ai un fichier _DI002_ dans le Dossier de Suivi d'Intervention (DSI), mais ce fichier n'est pas renseignée dans la LDA alors qu'il devrait l'être. 

![erreurLDA_DSI](/custom/assu_sini/documents/erreurLDA_DSI.png)

> Je contacte Jacques pour qu'il vérifie et me renvoie un document conforme.


### Jacques

> Je dois générer une LDA correct pour Isabelle. <br>
> Je gère ma liste de documents qui composent la LDA dans un fichier excel.

![image](/custom/assu_sini/documents/003_lda1_excel.png)

- En comparant la LDA et le DSI, je me rend compte qu'il manque le fichier DI002 dans la LDA alors qu'il est bien présent dans le DSI.
- Je vais tout de suite regénérer une LDA et l'envoyer à Isabelle.
- Je rajoute la ligne DI002 dans mon fichier excel.

![](/custom/assu_sini/documents/005_lda3_excel.png)


- Pour générer une nouvelle version de la LDA, je dépose l'ancienne pour ne pas avoir à re-saisir tous les champs.

:ppw-pdf-link{href="/documents/LDA.pdf"}

- Je dépose également la version rectifiée de mon fichier excel.

> Je finalise mon document et je l'envoie à Isabelle.


### Isabelle

> J'ai bien reçu la nouvelle version de la LDA.

- Je vais générer un nouveau dossier Assurance Qualité.
- Je vais sur la rubrique _"Craft"_ dans Paxpar.


![](/custom/assu_sini/documents/001_craft_aq.png)

- Je dépose l'ancien PDF "Assurance qualité".

![](/custom/assu_sini/documents/002_pdf.png)

- Je supprime la LDA.

![](/custom/assu_sini/documents/003_lda_sup.png)

- Je dépose la nouvelle LDA.

![](/custom/assu_sini/documents/004_depot_lda.png)

- Je supprime la ligne du premier lda (XXX - à repréciser)

![](/custom/assu_sini/documents/005_liste_docs.png)

- Je vérifie.
- Tout est vert !    

![](/custom/assu_sini/documents/006_verif.png)

- Je finalise en signant mon dossier Assurance Qualité

> J'obtiens le PDF _aq.pdf_ conforme ! <br>
Je peux, dés à présent, envoyer ce dossier Assurance Qualité à mon responsable, en toute confiance.
