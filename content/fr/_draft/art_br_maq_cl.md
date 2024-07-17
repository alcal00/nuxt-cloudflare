---
model: brouillon_article
title: Comment maquetter une checklist ?
description: Maquetter facilement une checklist pour préciser les points de contrôle métier
image: https://media.paxpar.tech/20231116_Atelier-vtd_fausseFAedf.jpg
aside: false
---
# "Vérification de conformité" 🤔 d'accord, mais comment maquetter facilement une liste de points de contrôle ?

Dans cet article, nous partons du principe qu'une **liste de points de contrôle** s'appelle une **"checklist"**.

📍 J'ai des documents à vérifier 
Je souhaite utiliser la plateforme de vérification documentaire VérifTonDoc et surtout avoir mes propres points de contrôle en rapport avec mon activité et mes besoins ?
📍 la plateforme de vérification de conformité documentaire (la soliution paxpar) m'intéresse. 
➡️ Je souhaite maquetter une checklist suivant des points de contrôle métier (spécifiques à mon activité, à mes besoins).

## Comment fait-on ? (enquête)
### Il est temps de me poser les bonnes questions !

    - valerie: "Rien de plus simple"
    - valerie: "Dans un premier temps, vous devez lister les impératifs liés à votre activité qui pourraient vous éviter des cas de litige, de faude mais aussi vous faire gagner du temps donc de l'argent."
    - valerie: "Lorsque cette liste est établie, il faut également faire une liste de points de non-conformité que vous rencontrez ou êtes suceptible de rencontrer dans votre activité"
    - valerie: "Ensuite il faut maquetter deux checklists, une où tout va bien et une autre avec les points de non-conformité"
    - valerie: "C'est le maquettage d'une cheklist que nous vous présentons aujourd'hui"
    - valerie: "Ce n'est pas du codage informatique, donc c'est à la portée de tous"

1. Quelles sont les contraintes liées aux documents que je souhaite vérifier ?
1. Quels sont les impératifs liés à mon activité :
    * ai-je été confronté à des cas de litige ?
    * ai-je été vicitime de fraude ?
1. Comment hoérarchiser tous ces points de contrôle sont-ils (quelle arborrescence) ? 
1. Quelle serait la checklist où tout va bien ?
1. Quelle serait la checklist avec des points de contrôle KO ?

### Dois-je faire appel à mon spécialiste backoffice ?

✋ NON !
Nul besoin de savoir coder !

### Voici une trame de base de checklist : (mettre copie d'écran du playground partie md) mettre la checklist vraiment de base "result"

les différentes lignes
- id: notez ici l'identifiant de votre document (pour aider les développeurs) 
name: notez ici le nom de l'élément analysé (le 'name' que vous donnez est visible dans la checklist)
icon: choisissez un icon format mdi (par exemple mdi-file-arrow-up-down-outline)
status: choisissez le résultat attendu dans cette situation (EN MAJUSCULE : soit OK, soit KO, soit WARNING, soit INFO)

Voici le rendu sur la plateforme d'une checklist : (mettre copie d'écran du playground partie checklist) mettre le rendu de la checklist "vue de base"





où trouver les icons, en voici un exemple ? https://pictogrammers.github.io/@mdi/font/2.0.46/



Si on procède à quelques modifications, voyons ce que ça donne : (mettre la copie d'écran du playground avec des modifications - partie gauche et droite sur la même copie d'écran)



## Scénario 
maquettage de checklists permettant la vérification de la validité de carnets d'habilitations.

Imaginons la situation suivante
50 ouvriers
il faut qu'il en choisisse 20 pour une prestation sur l'année 2024
Plutôt que de passer en revue 'manuellement' tous les carnets
il va utiliser la plateforme VérifTonDoc

il maquette sa checklist avec tous les points de contrôle utiles

Patrick vérifie les carnets de ses employés, en particulier celui de Sophie en vue d'une prestation (15/01 au 31/mai 2024), il dépose le carnet sur la plateforme Il va donc imaginer une checklist tout OK et une checklist tout KO 

### maquettage de la checklist OK
pas besoin de coder !

### maquettage de la checklist, avec un point de contrôle KO

le point de contrôle KO sur la date (expirée)

pas besoin de coder !

### action répétable pour toutes les autres situations KO

Vos checklists sont prêtes !
pas besoin de coder !
l'équipe de développeur va gérer le cablâge !

## Prévoyez la liste des cas de non conformité qui sont à ajouter à votre checklist
Dans le cas de notre scénario, il faut envisager une checklist KO avec par exemple
- attestation manquante
- attestation non signée
- nom du titulaire sur l'attestation différent du nom figurant sur le carnet
- date de validité de l'attestation presque expirée (le jour du dépôt du carnet sur la plateforme)
- date de validité de l'attestation expirée (le jour du dépôt du carnet sur la plateforme)
- date de validité de l'attestation expirée à la date de la prestation future
- etc.

liste non-exhaustives, tout dépend des points de contrôle que vous souhaitez mettre en place.

-----------------------

# Arnaque au prêt à la cnsommation
![Justificatif de domicile- edf - falsifié](https://media.paxpar.tech/vtd_edf1.jpg)
|[]|[]| []
----|-----------|-----
[Valérie SUIGNARD](/actor/valerie)|23 novembre 2023|Conformité,Confiance|

[^1]

## Tout va bien / Je fraude, tu fraudes – petite ritournelle… 

## Mauvais payeur : Les faits

## Quand le destinataire n’habite pas à l’adresse indiquée… / Les indices

## L'enquête

### Première hypothèse : Le justificatif est une photocopie de l’original de la facture incriminée ?

### Seconde hypothèse : Le justificatif est une version numérique de la facture ?

## Les outils / Les conséquences

### Le visuel seul : pas suffisant

### Adobe : une première approche mais... insuffisante !

#### Adobe : Conclusion

## Prévenir les risques et les litiges

### paxpar : vérification exhaustive, la plateforme vous alerte si le signataire n’est pas reconnu ! / C’est ce que notre solution paxpar propose de faire !

## Les conclusions de l’enquête

## Nous contacter ? Une démo ?
info@paxpar.tech

## Les références


## Quelques cas d'usage

**Vous avez besoin d'être sûrs** :
📍 que vos documents contractuels sont conformes ?
📍 que vous êtes bien en possession de tous les documents utiles au bon déroulement des opérations ?
📍 que rien ne pourra laisser de doute quant à l'exactitude et à l'exhausitivité des documents présentés en cas de litige ou pré-litige ? 

### Piste d'Audit Fiable
Les décrets d’application de la directive 2010/45/UE du 13 juillet 2010 ont été publiés en 2013. Le but de ces décrets : lutter contre la fraude à la TVA. Les entreprises assujetties à la TVA en France doivent déployer des contrôles de leurs flux de gestion et de facturation, et documenter ces contrôles :
- un produit a été commandé, une prestation de service a été demandée ?
- le produit a été livré, la prestation de service a été réalisée ?
- la facture correspondante a été établie ?
La Piste d’Audit Fiable est là pour tracer ce flux.

Donc si je veux maquetter la liste de points de contrôle d'une PAF, il faut que
je connaisse quels éléments doivent obligatoirement figurer sur une facture
je décide quels éléments présents sur la facture doivent être comparés à ce qui figure sur les autres documents inhérents à cette factures
j'établisse les points de vérification spécifiques à mon métier (on ne vend pas un service ou des journaux comme on vend des produits cosmétiques)
je prévois la chronologie des différentes étapes
je décide quels points ainsi listés et non-respectés sont rédibitoires
je décide quels points ainsi listés et non-respectés sont des points d'alerte. 