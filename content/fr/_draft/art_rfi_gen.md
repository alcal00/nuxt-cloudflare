---
title: RFI
description: "Rapport Final Intervention"
image:
  src: https://media.paxpar.tech/pp_blog_fe_gain-fiabilite7_pexels.png
authors:
  - name: Francoise ENTZMANN
    avatar:
      src: /avatar/francoise.png
      target: _blank
    to: https://www.linkedin.com/in/valerie-suignard/
date: 2024-05-02
---

# Dymamique autour du RFI

## Dynamique des contrôles réalisés sur une CNPE

Le parc des centrales nucléaires est homogéne : un premier groupe rassemble 4 sites d'une puissance de 1300 ??/jour, qui sont :
- Belleville
- Flamanville
- Nogent sur seine
- ???

Leur système de gestion documentaire est identique, ainsi que les systèmes de conduite.

Leur philosophie est véritablement de garantir une traçabilité complète : c'est à dire que tout est écrit. On écrit ce qu'on prévoit de faire, on écrit ce qu'on fait et on écrit ce qui a été testé.
C'est sur cette base de documents, que les inspecteurs ASN s'appuient pour garantir une amélioration continue du site.

Des cas concrets de points d'amélioration :
- changement de rondelles : le choix des rondelles doit s'appuyer sur une étude, avant leur mise en place. D'autres CNPE ont rencontré le même problème de choix de rondelles. 

- couple de serrage non conforme : tout équipement doit disposer de son certificat. L'objectif est de vérifier si l'instrument utilisé pour serrer est bien en capacité de le faire. Exemple : avoir une clé, ayant un couple de serrage de 13N, alors que le couple de serrage attendu doit être de 14N.

- vouloir peindre une planche de bois se trouvant dans la salle de commandes : prévoir le remplacement de cette planche pendant l'intervention car risque de sécurité. Cette anecdote provient d'un cas aux USA, où la personne avec son ventre n'a pas pu voir si les vannes étaient ouvertes ou pas, ceci a provoqué l'accident.

- le soudeur réalise une soudure non-conforme sur une zone de la CNPE. il faut être en capacité de tracer ses interventions précédentes afin de vérifier la qualité de la soudure.

- joints défaillants => mise en route du circuit, constat d'une fuite, prestataire non présent sur site, donc réparation sans faire porter les préjudices à l'entreprise concernée.

- Société RollRoyce facture les heures d'attente sur site.

ASN rescence dans une base de données centralisée tous les défauts ou non conformités réalisés, issus des x CNPE en France. Au sein d'ASN, exite une bonne communication, qui facilite la recherche de cas non conformes.

Quand ASN décide de déclencher un audit sur une centrale, il s'appuie sur ces défauts; en sélectionne un ou plusieurs, pour ensuite aller le vérifier sur un autre site.
Ce fut le cas d'une inspection sur le site de Nogent sur seine, où l'audit portait sur le changemnent de rondelles.

Les inspecteurs sont au  nombre de 2 ou 3, sur une journée. Ils maitrisent parfaitement le système Qualité référencant procédures, modes opératoires, ...
Ces inspecteurs ne sont pas techniques, uniquement fonctionnels. Donc pour rendre l'audit plus performant, il est prévu que des agents du IRSN participent également à ces audits. De cette façon, le binome (ASN, IRSN) pourra juger du respect des procédures ainsi que de la faisabilité opérationnelle.

L'arrivée des inspecteurs est non programmée. Ils arrivent et déclenchent un audit soit sur des vérifications techniques (type changement de rondelles), soit sur des mises en situation. Par exemple le site de Flamanville a été soumis à un scénario catastrophe climatique pour tester la performance de l'équipe sous pression.
Une lettre d'inspection a été rédigée à cet effet, stipulant les points d'amélioration à apporter. En faits maruquants, il en est ressorti que le chef d'équipe ne savait pas où trouver la clé pour prendre son ordinateur portable et se diriger en cellule de crise.

Nous avons le compte rendu de cette lettre (mettre le lien du document fourni par Fabrice)

Depuis Tchernobyl, tout agent de conduite ou autre doit connaitre précisément les documents auto-portants qui lui sont indispensables dans son quotidien.

Par exemple, quand une personne modifie la valeur d'un paramètre sur un automate, cette valeur doit être validée par une seconde personne, et il y a également une troisième personne pour vérifier que le binöme fait bien ce qui est écrit et qu'il n'y a pas une validation sans avoir précisément regardé la valeur.


Tout commence avec le déclenchement d'une lettre suite aux inspections.
Le compte rendu de ces lettres sont rendus publiques et accessibles sur le site ASN.


## Lien permanent avec ASN
Des bilans sont générés quotidiennement : Bilan de Sûreté et Bilan Radio Protection, par exemple.

## Equipe sur un site CNPE
Environ 750 personnes, dont :
- 160 dédiées sur la conduite de la centrale,
- 30 personnes en QSE,
- 50 personnes en gardiennage,
- 3 personnes en SIR (Service Inspection Reconnu) - garants du matériel sous pression

## Difficultés rencontrées par EDF
Il est difficile d'extraire la procédure, si l'utilisateur ne connait pas le bon mot clé.

Aujourd'hui tous les agents sont équipés de téléphone portable, donc petit à petit l'usage des photos et vidéos sont introduits sur le site.


## Ecosystème de fournisseurs, partenaires autour EDF
Société DALKIA a le monopole sur les moteurs diesels. Ce sont donc des prestataires permanents.
Société AREVA-FRAMATOM-ALSTOM a le monopole sur les techniques du nucléaire. Donc l'anecdote : la 1ere CNPE a été construit en Chine, mais de mauvais critères ont entrainé un retard de livraison, conséquence : les pénalités ont été appliquées. Finalement ces pénalités ont été réglées par EDF et non pas par les concepteurs, à savoir FRAMATOM. 

Ceci pour éviter la perte de compétences et savoir-faire techniques de FRAMATOM.

Donc en synthèse, les permanents EDF sont les "petites mains de FRAMATOM"

## Focus sur le RFI
Ce document est sous la responsabilité du chargé d'affaires.

## Liste des participants pour le 29 Mai 18h - 19h
- Alexis Derville (amiante)
- Jacky Dubuisson (CEA)
- Tugay Dal (Prestataire EDF)
- Sophie XXXX (Prestataire EDF)
- nous (6)
- Sébastien Rossi (?)
- Etienne Jacomet (comptable)

## Réflexion sur la dynamique d'un audit réalisé par l'ASN

### Craft Journal de bord
Etre en capacité de construire un journal de bord ayant les fonctionnalités suivantes :
- temps réel : c'est à dire que chaque document déposé doit être horodaté (date et heure)
- collaboratif : c'est à dire qu'au même instant, tout agent est en capacité de saisir une nouvelle information ou déposer un nouveau document
- géolocalisation : c'est à dire qu'on précise le lieu du dépôt du document ou de la saisie
- dépôt de photos provenant d'un téléphone
- déclencher des APIs externes qui collectent dès le démarrage de l'incident, toutes les informations présentes et provenant des systèmes d'informations spécifiques à la CNPE (contrôle d'accès, téléphonie, SI Crise, Automate)
- offline au moment de la gestion de crise

La finalisation du document PDF issu de ce craft sera signé.

### En fin d'exercice, en présence des agents concernés et de l'ASN, étudier les écarts entre l'attendu et le réalisé.
Prévoir une checklist permettant d'évaluer ces écarts, au moment du dépôt de ce journal de bord.

les points de contrôle pourraient être :
- Conformité de la gestion du temps
  - la durée entre chaque action < à un temps donné
  - la durée de déclenchement de l'ASN < à un temps donné
  - la durée pour alerter la préfecture < à un temps donné;
  - l’astreinte locale de l’ASN < à un temps donné;
  - le centre de crise national d’EDF < à un temps donné;
  - l’astreinte nationale de l’ASN < à un temps donné
      - recherche du numéro de téléphone < à un temps donné
      - appel non abouti
        - procédure de repli
- Conformité sur l'ordre des appels:
  - la préfecture
  - l'astreinte locale
  - le centre de crise national
  - l'astreinte nationale
- Conformité documentaire
  - trouver la bonne procédure applicable < à un temps donné
  - suivi de la procédure : voir comment ?
  - Prise en compte de l'équipe
    - spécialiste dans quel domaine




Pour avoir plus de connaissances sur ce sujet, prévoir un point avec Fabrice sur une mise en situation, pour challenger cette idée.

