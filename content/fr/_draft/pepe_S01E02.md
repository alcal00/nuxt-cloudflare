---
model: brouillon_article
#draft:
#model: episode_pepe
#model: episode
#submodel: pepe
title: Mortel Chantier 
#(S01E02)
#description: mettre teaser J-1 : Plongez dans l'épisode palpitant où Gérard, désespéré après son échec à l'examen, bascule dans la clandestinité. Sa quête d'une attestation de conduite de grue falsifiée, concoctée par la mystérieuse hackeuse Eve, déclenche une tragédie. Pépé, expert en signatures électroniques, est appelé pour démêler le chaos de 30 PDF et 150 signatures. Justice, faux documents, et l'ombre insaisissable d'Eve : Pépé relève le défi.
image: https://media.paxpar.tech/pp_nad_bob_base.png
aside: false
pdfs:
#- chemin qui pointe vers pp-ref
#- 
#checklist:
#cards: 
#- 701
#- 702
#- 1201
#- 1510
#date: 202401
---

# Mortel Chantier

La journée était morne. Une pluie fine tombait sur les pavés de la petite ville de Sainte-Agnès, lorsque Pépé reçut un appel de son ami de longue date, Stan, expert en assurance avec qui il avait déjà travaillé à l’époque où il arpentait les rues sombres à la recherche de la vérité. Stan avait besoin d'aide, et comptait sur Pépé, détective privé dont la réputation n'était plus à faire en matière de documents signés électroniquement. Pépé n'hésita pas à enfiler son pardessus et à se rendre chez son ami. 

Stan expliqua qu'un décès était survenu sur un chantier et que l'assurance devait enquêter pour déterminer s'il convenait de verser à la famille du défunt l'assurance vie qu'il avait souscrite. Stan avait déjà mené une enquête sur le terrain et s’était procuré quelques documents potentiellement explosifs sur clé usb. Encore fallait-il être en mesure de les exploiter correctement. C’était là que résidait le problème de Stan et c'est dans ces circonstances qu'il faisait appel à Pépé.

Pépé, avec son expertise aiguisée, se mit au travail. La valise numérique de l'entreprise donneur d'ordre remise par Stan était un véritable labyrinthe de 95 documents PDF, soit environ 500 pages ! Le dossier comportait plus de 150 signatures électroniques disséminées sur les documents provenant de cinq sous-traitants différents. Un défi de taille, mais Pépé n'était pas homme à reculer.  

Pépé sortit son ordinateur portable et inséra la clé usb que Stan venait de lui remettre. Ses doigts agiles dansèrent sur le clavier, et en quelques secondes, il identifia une fausse attestation de conduite de grue, celle d'un certain Gérard. Pépé se frotta les mains, satisfait de sa découverte.

Les rouages de la justice se mirent en marche. Au cours de l'enquête, on apprit que Gérard avait raté sa formation de conducteur de grue. En proie à des difficultés financières, il avait décidé de prendre une voie détournée en faisant appel à une mystérieuse hackeuse, connue sous le pseudonyme d'Eve : elle lui avait fourni une attestation falsifiée. Armé de ce document, Gérard avait réussi à décrocher un travail sur le chantier. Une mauvaise manipulation de la grue, avait entrainé la mort de son collègue dans des circonstances horribles. 

Le tribunal, après avoir examiné les preuves présentées par Pépé, condamna Gérard pour homicide involontaire. Mais la sentence ne s'arrêta pas là. L'entreprise qui avait embauché Gérard fut également jugée coupable de faux et usage de faux, mettant ainsi en lumière les failles de son processus de vérification des documents. 

La famille du défunt fut soulagée de lire les conclusions que Stan leur remis. Leur père, leur fils aimé n’avait aucune part de responsabilité dans l’accident qui avait causé sa mort. Ils furent satisfaits des décisions judiciaires et de la mise en lumière des responsabilités de chacun dans cette affaire.
La vie suivit son cours, et Eve demeura dans l'ombre, continuant à produire ses faux documents et à semer le chaos. Pépé ne pouvait s'empêcher de penser à cette énigmatique hackeuse. Son esprit de détective restait toujours en alerte, prêt à répondre à l'appel de l'aventure. La traque n'était pas terminée, et il savait que tôt ou tard, il retrouverait la trace d'Eve.

Pépé repensa à toutes les péripéties de cette affaire, aux documents, aux signatures électroniques, à la tragédie qui s'était déroulée sur le chantier. Il se promit de rester vigilant, car il savait que dans le monde numérique, les criminels ne prennent jamais de repos. Une nouvelle affaire l'attendait peut-être déjà, et Pépé était prêt à relever le défi.

### TODO à mettre en dur :
Toute ressemblance avec la réalité est voulue. Cette situation vous est familière, vous avez déjà été confronté à un cas semblable ?
Voilà ce que propose paxpar : Comme Pépé, testez les pdfs sur lesquels il a enquêté, consultez les pdfs ci-dessous et voyez le résultat obtenu :

### TODO "balise showcase" qui qd la personne clique sur le pdf affiché indique à la personne "connectez-vous" et c'est seulement à ce moment là (quand la personne est connectée) que la personne voit la checklist correspondante et peut à son tour déposer un pdf de son choix dans la dropzone pour tester son propre pdf avec la checklist utilisée par Pépé. Si elle n'est pas connectée, elle ne peut voir que la checklist déclenchée par le pdf proposé dans l'épisode.

::ppw-showcase-check
---
conversation:
   - pepe: "Stan, je vais te montrer comment j'ai résolu ton affaire"
   - pepe: "J'ai analysé le pdf Valise 350035 qui a été établi pour ce chantier"
   - pepe: "Il a suffit de le déposer dans la dropzone"
pdfs:
  - url: "/documents/XXXXXattes_val.pdf"
    check_result: "/blog/2024/01/base_n3.yaml"
    name: "Valise 350035"
    conversation:
       - pepe: "On constate que le document n'est pas conforme"
       - pepe: "On a directement accès aux non-conformités et on identifie que c'est Gérard qui pose problème"
       - pepe: "C'est son habilitation conducteur de grue"
       - pepe: "Elle a été modifiée, il y a une annotation de type 'texte' après la signature du formateur"
       - pepe: "Je suis sûr que l'enquète dira que le formateur n'a pas émis un avis favorable à Gérard"
       - stan: "Merci Pépé, grâce à toi l'enquête va faire un grand bond"
---
::

## prompt

pour openai :
Rédiger une nouvelle de 1600 mots dans le style d'Agatha Christie qui nous montre les péripéties de Paxpar, plus connu sous son pseudo, Pépé, ancien détective privé, dont la spécialité est l'enquête sur des documents signés électroniquement. Passionné par son métier, il s'occupe toujours d’affaires même après son départ à la retraite pour des amis, des connaissances. Tenace et perspicace, il aime le travail bien fait et s’engage à résoudre rapidement les affaires qu’on lui confie.
Son plus grand défi est Eve, pirate informatique qui oeuvre sur internet, insaisisable. Elle falsifie des documents, fournit de faux documents, intercepte des messages. Elle tire avantage des failles des systèmes de sécurité des réseaux informatiques des entreprises.

Voici le résumé :
Gérard a raté son examen, il a besoin d'argent.
Il paie 50€ en ligne pour qu'un pirate, Eve, lui crée une attestation de conduite de grue. Il obtient grace à cette fause attestation une mission de conducteur de grue.
Le premier jour de la mission, un incident survient et un ouvrier décède dans d'horribles conditions suite à une mauvaise manipulation de Gérard.
Une enquête est ouverte par la gendarmerie pour déterminer les responsabilités.
Pépé est mandaté pour expertiser l'ordre d'intervention et les documents fournis par les nombreux prestataires.
L'ordre d'intervention est un ensemble de 30 documents PDF avec un total de 150 signatures électroniques regroupant 4 sous-traitant.
Il analyse en quelques secondes tous les documents en les déposant dans son ordinateur portable.
L'ordinateur identifie la fausse attestation de Gérard.
Gérard est arrêté par la gendarmerie.
Plus tard le tribunal condamnera Gérard pour homicide involontaire.
Il condamnera également l'entreprise de Gérard pour faux et usage de faux.
Eve échappera à nouveau à Pépé et continuera à produire des faux documents.
Pépé s'en va avec le sentiment d'avoir rempli sa mission même si Eve lui a encore échappé.

### PDFs - Checklists
### PDFS

TODO - le pdf utile n'est pas encore généré
XXXXXattes_val.pdf 

### Checklist

TODO - mettre le bon chemin dans le showcase
- base_n3.yaml

### Personnages
### personnages principaux :
Pépé (détective privé)
Paxpar, plus connu sous son pseudo, Pépé, ancien détective privé, dont la spécialité est l'enquête sur des documents signés électroniquement. Passionné par son métier, il s'occupe toujours d’affaires même après son départ à la retraite pour des amis, des connaissances. Tenace et perspicace, il aime le travail bien fait et s’engage à résoudre rapidement les affaires qu’on lui confie.
Eve (hackeuse, pirate informatique)
Eve, pirate informatique qui oeuvre sur internet, insaisisable. Elle falsifie des documents, fournit de faux documents, intercepte des messages. Elle tire avantage des failles des systèmes de sécurité des réseaux informatiques des entreprises. 

### personnages secondaires :
Gérard (ouvrier dans le BTP)
Stan (expert en assurance)

### TODO : faire un avatar pour Stan

### TODO: avoir un visuel (personnages concernés à faire entrer dans 1080x1080px, le fond 1920x1080px)

* les éléments factuels à produire (fichiers PDF, nom des acteurs, **signatures**) ??  

### Atelier XXX (cas pas encore traité)

### TODO mettre un/des visuel(s) du jeu de cartes 

### TODO identifier les signatures présentes sur les pdfs de l'épisode (pour faciliter le requêtage)

### TODO permettre de renvoyer vers une page de personnage grâce à un objet du type "@Zina" et on verrait donc la page de Zina sur laquelle figure son descriptif et la liste des épisodes dans lesquels Zina joue un rôle. Dans le texte, on pourrait faire apparaitre l'avatar de Zina (voir les fichiers dans content/_actor/zina.md)
