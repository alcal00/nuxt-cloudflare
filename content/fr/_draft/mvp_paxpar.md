---
model: mvp
lang: fr
image: https://media.paxpar.tech/1019-document-signature-hand_small.svg
title: Cible MVP
description: Description de notre cible pour nos partenaires
createdAt: 2023-08-02
---

## Parcours partenaire

Je suis un investisseur, un acteur Hightech, partenaire 0. Je veux mettre à disposition une plateforme tiers, capable de vérifier la conformité de document digitalisé, au format PDF.
Je veux pouvoir suivre l'utilisation de cette plateforme en temps réel, via des KPI que j'aurais préalablement défini.
Comment dois-je procéder ?

### Votre Scénario Partenaire, à suivre
- Je clique sur le lien 'créer mon portail' à partir de paxpar
- J'arrive sur l'article "Quick Start" et je suis les instructions (créer un fichier md décrivant les étapes, en ayant le fichier pdf et le formulaire approprié)
- Je créé mon compte github
![](/public/images/images_mvp/github_login.png)

- Je recherche le projet dans la barre de recherche : paxpar-skaffold
![](/public/images/images_mvp/github_rechercheprojet.png)

- Je vais sur GitHub (https://github.com/arundo-tech/paxpar-skaffold)
![](/public/images/images_mvp/github_projet.png)

- Je fork le projet arundo-tech/paxpar-skaffold
![](/public/images/images_mvp/github_fork.png)

- je clique sur le bouton "create fork"
![](/public/images/images_mvp/github_code.png)

- Je clique sur "code" pour lancer l'éditeur, 
![](/public/images/images_mvp/github_code.png)

- Je clique sur Codespace, et sur "create codespace on main"
![](/public/images/images_mvp/github_codespace.png)

- J'accède à l'éditeur intégré pour pouvoir modifier mes fichiers
![](/public/images/images_mvp/github_editeurvscode.png)

- Je modifie le fichier de configuration : paxpar-front.yaml, en précisant au minimum :
* Nom de domaine ou sous domaine (par défaut, c'est le nom de votre société : mycompany)
* Libellé du portail: par défaut, la confiance numérique à portée de mains.
* Logo: par défaut, 
![](https://media.paxpar.tech/logo_mycompany_300x198px.png)
* Clé publique signature du propriétaire
* Charte graphique: par défaut, les 3 couleurs : bleu, blanc, rouge
- Je modifie le contenu du fichier index.md de la page d'accueil
- Je commite sur la branche existante main
- je consulte le site en cliquant sur le lien : https://mycompany.document.legal

- je dois avoir la possibilité de consulter, par défaut:
* les tarifs : https://ng.uat.paxpar.tech/pricing,
* les checklist : https://ng.dev.paxpar.tech/gallery/checklist
* et les crafts : https://ng.dev.paxpar.tech/gallery/craftform

- je dépose un pdf (typé skaffold) en cliquant sur le bouton Vérifier
- je consulte le résultat de la checklist par défaut

- je consulte le répertoire 'check' dans le projet : mycompany/paxpar-skaffold
- je modifie le fichier checklist1.yaml en rajoutant la signature du propriétaire

- je consulte le répertoire 'craft' dans le projet : mycompany/paxpar-skaffold
- je modifie le fichier craft1.yaml en rajoutant des nouveaux champs de saisie

- Je définis les tarifs, en modifiant le fichier pricing.yaml, dans le répertoire XXXX.
- Je publie le portail (mycompany.document.legal)
- Je consulte mes tarifs, ma checklist et mon craft

### Je vérifie le bon fonctionnement de ma plateforme
- dans la galerie, je dispose d'un document PDF augmenté, intitulé Frankenstein. Il se compose de X documents imbriqués et de Y signatures.
- il vous suffit de déposer ce document dans la dropzone de vérification et vous devez obtenir le résultat suivant en moins de x secondes :
* XXXX mettre le résultat Checklist (Nadine)

### Je vérifie les factures de mon quotidien
- dans la galerie, j'ai accès à des exemples de factures pdfs "augmentés" tels que :
* facture IKEA
* facture EDF
* facture SNCF
* autres factures de votre quotidien

- je dois vérifier que toutes ces factures sont bien authentiques.
- je dépose ces factures dans le dropzone de vérification et je dois obtenir le résultat suivant :
* XXX avoir la check list correspondante (Nadine)

### Je consulte l'activité de ma plateforme
- j'ai besoin de suivre en temps réel, l'activité de cette plateforme et ses usages quotidiens.
- j'ai à disposition un tableau de bord standard, qui renseigne sur cette activité via les métriques suivants, global sur le nom de domaine (mycompany.document.legal) :
* nb de documents PDF analysés
* taille des PDFs (Mo)
* nb de docs joints aux PDF
* nb de documents PDF générés
* nb de signatures testés avec une répartition par PSC
* nb de non-conformités

- j'ai besoin de plus de détails sur cette activité, avec des indicateurs métiers spécifiques à mon business: j'ai à disposition un rapport PDF, retracant toutes les données liées à l'activité. A ce rapport PDF est joint un fichier en métadonnées au format CSV, permettant de créer les tableaux de bord dynamiques.

### Je propose la connexion à un nouvel utilisateur
- Je me connecte en nouvel utilisateur
- Je génére un pdf factice
- il s'abonne et obtient un pdf non factice
- je suis les revenus générés par les abonnements

- je construis une mini-page htlm avec le composant web check
- je construis une mini-page htlm avec le composant web craft



Livrables
- un fichier pdf - type PAF
- logo


### options
- je créé une VM forge avec l'environnement paxpar (serverless)
- j'intégre des composants web dans mon SI
- j'ai un espace de stockage privé (S3)

## Discours public - à déplacer

- Présentation du site vitrine
- Ecosystème paxpar : outils de marketing, de publication (atelier), de paramètrage
- Equipe : jeu de rôles (support, design, maquette)
- Présence sur les réseaux sociaux (Linkedin)

## Animation (svg) - à déplacer