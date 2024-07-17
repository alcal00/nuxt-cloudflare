---
model: verif_scenario
lang: fr
image: https://media.paxpar.tech/645-people-handshake-transation_small.svg
title: Confiance en vos notes de frais
description: 📖 Lire le scénario
createdAt: 2023-07
aside: false
---


# La note de frais individuelle

## Contexte - Pas d'anomalie, la note de frais fournit par Jean est correcte

Les commerciaux de Tholga fournissent chaque fin de mois une note de frais pour pouvoir se faire rembourser.

Ils déposent leurs justificatifs sur la plateforme VérifTonDoc pour crafter leurs notes de frais.

Une vérification est effectuée à l'aide d'une checklist. 

La note de frais de Jean est correcte.

::ppw-showcase-check
---
pdfs:
  - url: "/documents/DR_rj_ok.pdf"  
    check_result: "/blog/2023/07/_cl_ndf_01"  
    name: "Note de frais 202306_jl"   
---
::

### série
### atelier :

## Anomalie : la note de frais fournie par Jean est incorrecte, des justificatifs ne correspondent pas à la période demandée

Les commerciaux de Tholga fournissent chaque fin de mois une note de frais pour pouvoir se faire rembourser.

Ils déposent leurs justificatifs sur la plateforme VérifTonDoc pour crafter leurs notes de frais.

Une vérification est effectuée à l'aide d'une checklist.

La note de frais de Jean est incorrecte, il a déposé des justificatifs qui ne correspondent pas à la période demandée.

::ppw-showcase-check
---
pdfs:
  - url: "/documents/DR_rj_ok.pdf"  
    check_result: "/blog/2023/07/_cl_ndf_02"  
    name: "Note de frais 202306_jl_date"   
---
::

### série
### atelier :

### Anomalie : la note de frais fournie par Jean Lamoureux est incorrecte, le montant total n'est pas bon

Les commerciaux de Tholga fournissent chaque fin de mois une note de frais pour pouvoir se faire rembourser.

Ils déposent leurs justificatifs sur la plateforme VérifTonDoc pour crafter leurs notes de frais.

Une vérification est effectuée à l'aide d'une checklist.

La note de frais de Jean est incorrecte, elle comporte des incohérences de calcul.

::ppw-showcase-check
---
pdfs:
  - url: "/documents/DR_rj_ok.pdf"  
    check_result: "/blog/2023/07/_cl_ndf_03"  
    name: "Note de frais 202306_jl_montant"   
---
::

::ppw-anim
---
href: "/anim/vtd_ndf_craft.svg"
---
::

**********************************************************

### série
### atelier :

# Technique


## Résumé
- Zina assistante de direction du service commercial de Tholga plannifie dans le planning une annimation de 5 jours pour l'institut de beauté CYBEAU du 5 au 9 juin. 
- Elle missionne 3 commerciaux.
- Ils seront remboursés de leurs frais uniquement sur présentation des justificatifs.
- Elle ouvre un dossier de note de frais par commercial.
- Elle envoie un lien aux commerciaux missionnés sur lequel lorsqu'ils cliqueront, ils pourront déposer ou saisir leurs notes de frais.

### Intervenants :
- Zina Doucet : assistante de direction du service commercial de Tholga
- Jean Lamoureux : responsable commercial chez Tholga

## Scénario note de frais individuelle

### Contexte : dépôt de justificatifs et constitution d'une note de frais individuelle dans un craft

- Zina constate dans le planning qu'une annimation salon est prévue du 5 au 9 juin pour l'institut CYBEAU
- Quelques jours avant, elle envoie un mail contenant un lien à Jean
- Jean reçoit le mail qui lui permettra de constituer sa note de frais 
- Il clique sur le lien du mail le 10 juin 2023
- Le lien lui ouvre l'interface VérifTonDoc
- Il se connecte avec ses identifiants
- Il arrive sur la dropzone de la plateforme VérifTonDoc
- Il choisit craft
- La plateforme lui demande un numéro de mission
- Il renseigne ce numéro qui est indiqué dans le mail (H00123)
- Il dépose le document ndf_202306_ikea_facture.pdf (pdf enrichi)
- La plateforme valide le document déposé
- Il dépose le document ndf_202306_renault_facture.pdf (pdf enrichi)
- La plateforme valide le document déposé
- Il dépose le document ndf_202306_sncf.pdf scanné
- La plateforme lui indique qu'elle ne reconnaît pas le pdf (pdf non enrichi)
- La plateforme ouvre une page de saisie 
- Jean va saisir dans un tableau la nature
- Il clique sur une liste déroulante
- Il choisit Transport
- Il renseigne la description : sncf
- Il clique sur le calendrier dans date 
- Il clique sur la date : 05/06/2023 
- Il renseigne le montant : 30€
- La plateforme enrichit le pdf en mettant des métadonnées .yaml
- Jean dépose ainsi tous ses justificatifs qu'il a en sa possession
- Il clique sur aperçu du document Note de frais
- Il clique sur vérification 
- Paxpar analyse le document à l'aide d'une checklist
- La checklist indique que tout est vert
- Jean valide le document Note de frais
- Il signe le document avec son certificat nominatif intégré dans la plateforme
- Il télécharge le document ndf_202306_jeanLmission_H00123.pdf que la plateforme a généré
- Il ouvre le pdf et constate une page Note de frais avec des documents en cascade (les justificatifs déposés enrichis)
- Il envoie le pdf à Zina
- Zina télécharge le pdf 
- Elle le dépose sur la plateforme VérifTonDoc pour vérification
- Elle constate que la Note de frais de Jean est correcte


### série
### atelier :

## Scénario note de frais consolidée


#### Résumé
- Zina assistante de direction du service commercial de Tholga plannifie dans le planning une annimation de 5 jours pour l'institut de beauté CYBEAU du 5 au 9 juin. 
- Elle missionne 3 commerciaux.
- Ils seront remboursés de leurs frais uniquement sur présentation des justificatifs.
- Elle ouvre un dossier de note de frais par commercial.
- Elle envoie un lien à chacun sur lequel lorsqu'ils cliqueront, ils pourront déposer ou saisir leur notes de frais.
- Chaque commercial enverra sa note de frais enrichi à Zina qui pourra à son tour faire une note de frais consolidée.

### Intervenants :
- Zina Doucet : assistante de direction du service commercial de Tholga
- Alice Pacha : annimatrice chez Tholga
- Marc Petitpas : directeur du service commercial de Tholga
- Jean Lamoureux : responsable commercial chez Tholga

### Scénario ndf consolidée à envoyer à l'institut CYBEAU : ok 

- Zina constate dans le planning qu'une annimation salon est prévue du 5 au 9 juin pour l'institut CYBEAU.
- Elle envoie un mail qui contient un lien à Alice, Jean et Marc.
- Jean clique sur le lien du mail le 8 juin
- Il se connecte avec ses identifiants
- Il arrive sur la plateforme VérifTonDoc
- Il renseigne le N° de la mission qui est dans le mail (H00123)
- Il dépose le document ndf_202306_ikea_facture.pdf enrichi
- La plateforme valide le document déposé
- Il dépose le document ndf_202306_renault_facture.pdf
- La plateforme valide le document déposé
- Il dépose le document ndf_202306_sncf.pdf scanné
- La plateforme lui indique qu'elle ne reconnaît pas le pdf (pdf non enrichi)
- La plateforme ouvre une page de saisie 
- Jean saisie dans un tableau la nature, la description, la date et le montant du justificatif
- La plateforme enrichit le pdf
- Jean dépose ainsi tous ses justificatifs qu'il a en sa possession
- Il se déconnecte 
- Il se reconnecte le 10 juin et constate que la plateforme a gardé ce qu'il a déposé le 8 juin
- Il dépose les derniers justificatifs
- Il clique sur apperçu du document Note de frais
- Il clique sur vérification 
- Paxpar analyse le document à l'aide d'une checklist
- La checklist indique que tout est vert
- Jean valide le document Note de frais
- Il signe le document avec son certificat intégré dans la plateforme
- Il télécharge le document ndf_202306_jeanLmission_H00123.pdf généré
- Il envoie le pdf à Zina
- Alice et Marc génèrent de la même façon leurs Notes de frais et l'envoient à Zina
- Zina a reçu les 3 Notes de frais
- Elle doit faire une Note de frais consolidée à l'institut CYBEAU
- Elle se connecte sur la plateforme VériTonDoc
- Elle dépose les 3 Notes de frais
- Elle dépose l'ordre de mission ndf_202306_ordre_mission_H00123.pdf
- Elle coche Facture
- Elle coche Tableau analytique
- Elle clique sur apperçu du document Note de frais
- Elle clique sur vérification 
- Paxpar analyse le document à l'aide d'une checklist
- La checklist indique que tout est vert
- Zina valide le document Note de frais
- La plateforme génère le document ndf_202306_mission_cybeau.pdf enrichi
- Elle signe avec son certificat
- Elle télécharge le pdf
- Elle l'envoie à CYBEAU
- Le pdf enrichi comprend : 
- La facture ndf_FA2306-0700.pdf avec des métadonnées factur-X
- L'ordre de mission avec des métadonnées yaml
- Les 3 Notes de frais avec des métadonnées yaml
- Qui contiennent elles même les justificatifs avec des métadonnées yaml, factur-X ...

### série
### atelier :

### Scénario ndf consolidée à envoyer au service comptabilité Tholga : ok 

- Zina doit également générer une Note de frais consolidée pour le service comptabilité de Tholga
- Elle retourne sur la plateforme
- Elle décoche facture
- Elle coche tableau comptable
- Elle laisse tableau analytique coché
- Elle clique sur aperçu du document Note de frais
- La plateforme ouvre le document 
- Elle clique sur vérification 
- Paxpar analyse le document à l'aide d'une checklist
- La checklist indique que tout est vert
- Zina valide le document Note de frais
- La plateforme génère le document ndf_202306_mission_H00123.pdf
- Elle signe avec son certificat
- Elle télécharge le pdf
- Elle fait parvenir le pdf au service comptabilité 

### série
### atelier :

***************

Modèle 

## La note de frais consolidée d'un service de l'entreprise 


::ppw-showcase-check
---
pdfs:
  - url: "/documents/DR_rj_ok.pdf"  
    check_result: "/blog/2023/07/_cl_ndf_globale_01"  
    name: "Note de frais service commercial"   
---
::






### Création du workfow du craft
- Je dépose
- Je saisie
- Je vérifie
- Je signe

******









::ppw-showcase-check
---
pdfs:
  - url: "/documents/DR_rj_ok.pdf"  
    check_result: "/blog/2023/07/_cl_ndf_model"  
    name: "Note de frais 201902_model_mp"   
---
::