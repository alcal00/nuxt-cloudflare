---
model: atelier
title: Rapport de Fin d'Intervention
description: Simplifiez la vérification de conformité de vos dossiers RFI et de tous les documents associés à ce rapport. Simplifiez la génération de dossier RFI. 
image: https://media.paxpar.tech/20240605_RFI_fr.png
# image à changer !
aside: false
---

<!-- l.299 c'est le script de ce que Valérie a fait et dit pour l'entrainement démo fait le 14 mai-->

<!-- le 16 mai, on a introduit échange Valérie (alias Isabelle) / Karim (alias Jacques) -->

--------------------------

![](https://media.paxpar.tech/20240605_RFI_fr.png)

## Pitch - Scénario
Discours de Philippe:

- On va vous montrer comment la plateforme paxpar peut aider à construire un document complexe de plusieurs centaines de pages.
- Le principe de la plateforme : on a un fichier PDF, on le dépose et la plateforme va reconnaitre ce document et va appliquer une liste de vérifications spéfifiques à ce document"    
- Le Rapport de Fin d'Intervention, est un document volumineux, complexe utilisé essentiellement dans le domaine du nucléaire.
- Il est constitué d'une centaine de documents répartie en 6 dossiers, eux-mêmes constitués de sous-dossiers... Le tout s'additionne, s'imbrique
- A cela vient s'ajouter plus de 2500 signatures pour un total de 50 intervenants."
   

<!-- mettre des copies d'écran de la marguerite --> 

Philippe:

- On va vous montrer un cas d'usage sur un dossier contenu dans le Rapport : le Dossier Assurance Qualité   
- Je vais donc brièvement vous présenter les protagonistes et quelques atouts de la plateforme

---
::

<!-- mettre les slides du doc "RFI_doc_pour-pwpt-demo.svg"  -->


## Acteurs

Marc : Responsable de la conformité du Rapport de Fin d'Intervention 

Isabelle : Responsable du Dossier Assurance Qualité

Jacques : Responsable de la composition du LDA et DSI

### Introduction du cas d'usage


<!-- mettre le 'component' pour visualiser le pdf aq-ko avec ses différentes pièces jointes : :ppw-pdf-link{href="/documents/aqb1.pdf"}-->

<!-- mettre le 'component' showcase pour visualiser le pdf aq-ko et la checklist correspondante _cl_aqb1.yaml -->

<!-- TOUTE LA SUITE EST A RÉDIGER EN FONCTION DU SCÉNARIO RFI - AQ/LDA :  -->

Philippe:

- Chaque responsable doit s'assurer de la conformité des pièces qu'il reçoit et/ou transmet pour que le Rapport soit complet et conforme 
- Pour notre cas d'usage, la société Nuclear Business est chargée de rédiger un Rapport de Fin d'Intervention pour EDP
- Isabelle doit constituer le Dossier Assurance Qualité et le vérifier, c'est un dossier composé de 4 fichiers PDF, Organigramme Nuclear Business, Organigramme sous-traitants, LDA et DSI
- Pour s'assurer que tout est conforme et qu'il ne manque rien, elle le dépose sur la plateforme paxpar
     


## Mise en scène

Isabelle:

![](https://media.paxpar.tech/RFI_kpi-isa.png)

- Je dois vérifier mon Dossier Assurance Qualité avant de l'envoyer à Marc, pour cela je le dépose sur la plateforme paxpar dans le check

:ppw-pdf-link{href="/documents/aqb1.pdf"}

- La checklist me signale une erreur !
- Il manque une ligne dans le LDA
- J'ai un fichier DI002 dans le DSI, par contre la ligne n'est pas renseignée dans le LDA
- Je vais appeler Jacques pour qu'il vérifie et me renvoie un document conforme
- Jacques, peux-tu me renvoyer une LDA correcte stp ?

Jacques:

- Bien sûr




### Génération du fichier LDA

Jacques

![](https://media.paxpar.tech/RFI_kpi-jac.png)

- Je gère ma liste de documents LDA dans des fichiers excel

![](/images/images_rfi/003_lda1_excel.jpg)

- En comparant le LDA et le DSI, je me rend compte qu'il manque une ligne DI002 dans le LDA alors que j'ai le fichier PDF dans le DSI
- Je vais tout de suite regénérer une LDA et l'envoyer à Isabelle
- Je rajoute la ligne DI002 dans mon fichier excel

![](/images/images_rfi/005_lda3_excel.jpg)


- Pour générer une nouvelle version, je dépose l'ancienne pour ne pas avoir à re-saisir tous les champs

:ppw-pdf-link{href="/documents/LDA.pdf"}j'ainnnn

- Je dépose également la version rectifiée de mon fichier excel
- Je finalise mon document
- Je peux maintenant l'envoyer à Isabelle

### Génération du Dossier Assurance Qualité

Isabelle:

- J'ai reçu la nouvelle version du lda

:ppw-pdf-link{href="/documents/lda.pdf"}

- Je vais générer un nouveau dossier Assurance Qualité
- Je vais sur le craft dans paxpar

![](/images/images_rfi/001_craft_aq.jpg)

- Je dépose l'ancien PDF assurance qualité

![](/images/images_rfi/002_pdf.jpg)

- Je supprime le LDA

![](/images/images_rfi/003_lda_sup.jpg)

- Je dépose le nouveau lda

![](/images/images_rfi/004_depot_lda.jpg)

- Je supprime la ligne du premier lda

![](/images/images_rfi/005_liste_docs.jpg)

- Je vérifie
- Tout est vert    

![](/images/images_rfi/006_liste_verif.jpg)

- Je finalise
- J'obtiens le PDF aq.pdf
- Je peux envoyer mon dossier à Marc

:ppw-pdf-link{href="/documents/aq.pdf"}


<!-- check : (_cl_rfi_aq.yaml)-->
             






------------------------------------------------------------------------------------------------------------------


## Questions

Comment fait la plateforme pour récupérer les infos qui sont dans les tableurs excel ?

Est ce que votre plateforme peut repérer des signatures non-conformes ?

Est ce que si j'utilise votre plateforme, je peux avoir mon propre logo dans les documents ?

A quoi ressemble des méta-données ?

Dans un dossier de 700 pages comment retrouver des dessins industriels ?

Donc ça fonctionnera pas si je mets mon propre document PDF dedans ? Il faut qu'il soit généré forcément par votre plateforme ? 

Votre plateforme est au couleur de paxpar si je veux ma propre plateforme dans quel délai est-ce faisable ?

