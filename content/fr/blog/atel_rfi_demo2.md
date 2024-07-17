---
model: atelier
title: Déclaration de sinistre
description: Remplissez avec votre téléphone votre déclaration de sinistre, en toute simplicité.
image: https://media.paxpar.tech/20240605_RFI_fr.png
# image à changer !
aside: false
---

<!-- l.299 c'est le script de ce que Valérie a fait et dit pour l'entrainement démo fait le 14 mai-->

<!-- le 16 mai, on a introduit échange Valérie (alias Isabelle) / Karim (alias Jacques) -->

--------------------------

<!-- Mettre ci-dessous le visuel carré correspondant à atelier paxpar RFI (visuel à faire) -->


### Objectifs
Démo : Signature CMD à partir de son téléphone pour remplir une déclaration de sinistre
prise de photo suite à un dégât des eaux
avec une demande de remboursement (en y intégrant le RIB)

### Contexte
Réunion associative à Espinho
10 personnes présentes dans les locaux
Un message d'alerte orage aux infos a été énoncé.
Catastrophe naturelle, provoquant une inondation dans les rues d'Espinho.

Chaque membre de l'association a été victime du dégat des eaux et doit le déclarer auprès de l'assureur XXX de l'association Beach Volley.

L'assureur informe son client qu'il doit remplir le formulaire et fournir les pièces suivantes :
- formulaire précisant la localisation du sinistre
- photos du dégât des eaux
- IBAN


## Pitch - Scénario - Mise en situation

Soient les acteurs :
* Peggy qui est la conseillère Assurance
* Paulo - Président de l'Association BeachVolley à Espinho (ou quelqu'un dans la salle) : acteur bien intentionné
* Eva (ou quelqu'un dans la salle) : va tenter d'usurper l'identité de Gorges
* Miguel (ou quelqu'un dans la salle) : acteur bien intentionné avec un compte google (ou linkedin)
* Filipe (ou quelqu'un dans la salle) : acteur qui ne signe pas

étapes:
* Valerie partage son écran en mettant le QRCode visible (cf #3283).
  URL cible provisoire du qr code: https://paxpar.tech/craft?id=common.craftforms.base_doc_builder.base.craftform

Paulo:
* Paul scanne le QRCode avec son téléphone.
* page de login, il saisit son email et se connecte sans vérification
* il arrive sur le formulaire "Déclaration de sinistre".
* le mail est déjà renseigné
* il saisit son nom, son prénom, et d'autres informations à préciser
* il peut prendre une photo avec son téléphone et le joindre à ce document.
* il finalise et signe avec CMD
* paxpar dépose automatiquement le document de Paul dans l'espace de Valerie.

Eva:
* Eva scanne le QRCode avec son téléphone.
* page de login, elle saisit l'email de Gorges et se connecte sans vérification
* elle arrive sur le formulaire
* le mail est déjà renseigné
* elle saisit le nom/prénom de Gorges, et d'autres informations à préciser
* elle peut prendre une photo avec son téléphone et le joindre à ce document.
* elle finalise et signe avec CMD
* paxpar dépose automatiquement le document dans l'espace de Valerie.

Miguel:
* Miguel scanne le QRCode avec son téléphone.
* il ouvre le formulaire.
* il s'authnetifie via google (ou linkedin)
* son nom et prénom sont déjà renseignés
* il saisit d'autres informations à préciser
* il peut prendre une photo avec son téléphone et le joindre à ce document.
* il finalise et signe avec CMD
* paxpar dépose automatiquement le document dans l'espace de Valerie.

Filipe:
* Filipe scanne le QRCode avec son téléphone.
* il ouvre le formulaire.
* il saisit son nom, son prénom, et d'autres informations à préciser (sans authentification).
* il peut prendre une photo avec son téléphone et le joindre à ce document.
* il finalise mais ne signe pas !
* paxpar dépose automatiquement le document dans l'espace de Valerie.

Valérie:
* Valérie vérifie les 3 documents reçus
* celui de Eva est KO car le nom indiqué n'est pas celui qui a signé
* celui de Filipe est KO car non signé

