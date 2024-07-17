---
model: brouillon_atelier
title: Valise Sécurité
description: Proposer le pack sécurité aux entreprises - 📖
image: https://media.paxpar.tech/961-email-marketing_small.
aside: false   
---

::alert{type="warning"}
:Icon{name="mdi:alert-decagram"}
Contenu en cours de rédaction !
::

## Documents de la valise sécurité

### Classeur du Personnel
  - Formation Initiale Sécurité à faire signer à chaque salarié
    - Le livret d'accueil de l'Entreprise
    - La fiche d'accueil
    - La fiche de contrôle des connaissances
    - La fiche EPI

  - Document unique
    - Document unique signé par le salarié (*Ce document doit être revu au moins une fois par an ou à chaque changement significatif précisé par le plan d’actions*)
    - Fiche de poste signé par les 2 parties
 
- Tableau des autorisations
  - Carnet d'habilitation de chaque salarié signé par les 2 parties
    - Attestations d'habilitations de chaque salarié signé par le salarié, le formateur et l'organisme de formation
 
- Instructions Sécurité (*Les salariés, via le document Formation Initiale de sécurité, attestent avoir pris connaissance de ces documents*)
  - Fiche Instruction Electricité
  - Fiche Instruction Feu
  - Fiche Instruction Produits Chimique
- Règlement Intérieur (*Le règlement intérieur a pour objet de fixer les règles générales et permanentes d’organisation du travail, de fonctionnement interne et de discipline au sein de l’Entreprise*)
- Registre du CHSCT
- Registre de l'inspection du travail
- Registre du médecin de Prévention
  - Fiche aptitude médicale
- Plan Organisation Evacuation (*Ce sont vos plans d’organisation et de circulation*)
- Plan d'actions
  - Plan d'actions (*c’est le document important qui complète le document unique. C’est le document qui précise la traçabilité et les traitements des actions liées à la sécurité*)             
### Classeur du Matériel (concerne les bâtiments, installations et univers de travail)

- Registre de sécurité des vérifications périodiques (*Ce paragraphe doit comporter la copie de votre registre de sécurité en vigueur sur vos sites (ou directement le registre de sécurité). L’Entreprise veillera au respect de la planification des vérifications périodiques et à leurs bonnes exécutions*)

- Rapports des vérifications périodiques : (*Ce paragraphe doit comporter les rapports de vérifications périodiques qui vous sont remis par les entreprises intervenantes) (Extincteurs, Electricité, Portes automatiques, Chariots,etc….). L’Entreprise veillera au suivi des traitements des éventuelles non-conformités, au traitement des observations (locaux non disponibles, demande d’intervention complémentaire…*)

- Rapport de surveillance des entreposages
  - Mode opératoire de surveillance : (*Ce document précise l’objet de la fiche mensuelle de surveillance*)
  - Rapport mensuel de surveillance : (*Ce document est la traçabilité de la surveillance sécuritaire de vos sites. Cette surveillance peut être réalisée par l’assistant en prévention ou par la responsable du site*)
  - Carnets de maintenance : (*Ce sont les documents qui vous sont remis par les industriels et/ou fournisseurs lors d’installations de matériels*)

### Classeur des entreprises (*Concerne les interventions des salariés d’entreprises extérieures, les chauffeurs/ livreurs, les clients*)

- Protocoles Fournisseurs
 - Protocoles Fournisseurs
 - Courrier Accompagnement Protocole
 - Etat des protocoles Chargement & Déchargement de L’Entreprise

- Protocoles Clients
- Plans de prévention
- Permis de feu (*Ces documents doivent être réalisés pour tous travaux présentant des points chauds (soudure…)*)

## Comment vérifier la conformité de la valise ?

Lien vers [le contenu *public*](/blog/2023/08/_cl_valise_secure.yaml)


:ppw-checklist-result-static{path="/blog/2023/08/_cl_valise_secure"}

## Checklist KO

:ppw-checklist-result-static{path="/blog/2023/08/_cl_valise_secure_ko"}


## Comment digitaliser la valise ?

- tester l'ordre d'intervention (=> sur la base des documents existants)
- paramètrer le craft pour l'adapter à la valise.

Questions :
voir l'intérêt de mettre une checklist sommaire dans le craft et permettre aux personnes qui vérifient d'avoir un checklist plus précise.

## Pitch - Scénario

Jean doit élaborer une valise de sécurité pour l'entreprise ALCOVE, il doit générer ce document dans le cadre d'une prestation à venir et y associer de multiples documents.

ALCOVE doit intervenir sur le site du CNPE de Nogent. Pour cela il y a un protocole très rigoureux concernant les accès des différents intervenants, la garantie de leur sécurité ainsi que pour le matériel utilisé.

La valise doit comporter tous les documents relatifs à l'intervention ainsi que les signatures des différentes parties.

Bien sûr cela doit être fait avant le commencement de la prestation.

- Comment constituer cette valise numériquement ?
- Et comment être sûr qu'elle est complète et conforme ?

La génération du document valise se fait sur la plateforme VérifTonDoc, Jean dépose simplement les différents documents qui vont la constituer et l'assemblage des pièces se fait en automatique.

Le document final valise est un PDF dont le template a été déterminé avant et qui est intégré dans la plateforme. Puis Jean dépose ses documents au fûr et à mesure mais il peut également sélectionner plusieurs documents en même temps et les déposer en une seule fois.

Lorsque le document est constitué, Jean peut le vérifier à l'aide d'une checklist élaborée spécialement pour la valise et ainsi être confiant qu'il n'y a pas d'erreur et que tout est conforme. Si la checklist révèle des statuts rouge, c'est que le document n'est pas conforme et il pourra voir où se situe la non-conformité et rectifier le tir avant la validation complète et la signature de la valise.

## Mise en scène 

::ppw-chat-conversation
---
animate: true
conversation:
    - jean: "Je doit générer la valise de sécurité pour la société ALCOVE pour sa prochaine prestation au CNPE de Nogent"
    - jean: J'ai déjà tous les documents en ma possession
    - jean: Je me connecte sur la plateforme VérifTonDoc et je n'ai plus qu'à déposer les documents en question
---
::

Lister les documents à déposer

Mettre les pdfs

::ppw-chat-conversation
---
animate: true
conversation:
    - jean: J'ai déposé tous les documents, avant de valider ma valise, je prévisualise mon pdf et je le vérifie
    - jean: Je clique simplement sur Vérifier
---
::

Mettre le pdf ko

:ppw-checklist-result-static{path="/blog/2023/08/_cl_valise_secure_ko"}

::ppw-chat-conversation
---
animate: true
conversation:
    - jean: Houla, ma valise a un statut rouge dans la conformité, je regarde ce que la checklist m'indique 
    - jean: L'attestation de Sophie DOLLET ne sera plus valable à la période  de prestation
    - jean: Il manque le document CHSCT
    - jean: Il manque la signature de Paul PIGNON sur le document formation initiale de sécurité
    - jean: Et la date du Rapport Extincteur est dépassée
    - jean: Je dois contacter ALCOVE pour l'attestation de Sophie DOLLET, ajouter le CHSCT, faire signer le document formation à Paul PIGNON et mettre le Rapport Extincteur à jour 
    - jean: Avec cette vérification, je gagne du temps car je vois rapidement où sont les non-conformités et ainsi faire la ou les rectification(s)
    - jean: Une fois que tous mes documents sont de nouveau rassemblés, je peux terminer la génération de ma valise
    - jean: Je supprime les pdfs qui sont non-conforme et ajoute ceux qui manquaient ou étaient inccorrects
    - jean: Nouvelle vérification du document rectifié   
---
::

Mettre le pdf ok

:ppw-checklist-result-static{path="/blog/2023/08/_cl_valise_secure"}

::ppw-chat-conversation
---
animate: true
conversation:
    - jean: Cette fois-ci la checklist m'indique que tout est vert, je peux signer le pdf en toute confiance avec mon certificat intégré dans la plateforme
---
::
