---
model: brouillon_article
#draft:
#model: episode_pepe
#model: episode
#submodel: pepe
title: Facture Salée 
#(S01E01)
#description: Zina, se voit notifier un licenciement pour faute grave. Une facture falsifiée circule chez Total. Zina n'en restera pas là : Paxpar, alias Pépé, entre en action pour démêler ce mystère électronique. Entre manipulations et tromperies, l'épisode promet des révélations choquantes. Pépé, gardien de la vérité, s'apprête à dévoiler les rouages complexes de cette nouvelle affaire, prêt à rétablir l'équité.
image: https://media.paxpar.tech/pp_nad_bob_base.png
aside: false
pdfs:
- chemin qui pointe vers pp-ref
#checklist:
cards: 
- 701
- 702
- 1201
- 1510
#date: 202401
---

# Facture Salée

La journée avait débuté comme toutes les autres pour Zina, une secrétaire consciencieuse chez Total. Cependant, rien ne la préparait à la rencontre qui allait changer sa vie ce jour-là. Convoquée dans le bureau de Guillaume Petit, son directeur, elle se retrouva confrontée à une situation inattendue.

Le brouhaha des conversations dans le bureau du Directeur, se calma brusquement lorsque Zina entra. Les personnes présentes désertèrent la pièce. Assis derrière son bureau, Guillaume Petit, le regard froid et déterminé fixa Zina d'un regard sévère. Cela ne laissait rien présager de bon. "Mademoiselle Zina, je crains que nous ne puissions continuer à travailler ensemble. Vous êtes renvoyée pour faute grave", déclara-t-il sans ménagement.

Le choc figea Zina sur place. Elle chercha des explications, mais Guillaume resta vague, évoquant un détournement de fonds d'une somme précise : 6401,60€. Zina eut l'impression que le sol se dérobait sous ses pieds. Elle tenta de comprendre ce qu'on lui reprochait. Aucun détail supplémentaire ne fut fourni, laissant Zina dans le flou le plus total. Désemparée, elle quitta le bureau de Guillaume avec l'ombre d'une menace pesant sur son avenir professionnel.

C'est dans ces moments difficiles que Paxpar, alias Pépé entra en scène. Ancien détective privé renommé, spécialisé dans les enquêtes sur des documents signés électroniquement, Pépé était un homme discret mais efficace. Toujours prêt à rendre service à ses amis, il ne pouvait ignorer l'appel à l'aide de Zina. 

Pépé accueillit Zina dans son petit bureau, meublé de manière sobre et élégante. Lorsqu'elle lui expliqua la situation, il fronça les sourcils avec une expression sérieuse. "Ne vous inquiétez pas, Zina. J'ai résolu bien des mystères dans ma carrière, et je compte bien résoudre celui-ci également", déclara-t-il avec assurance.

La première étape consista à recueillir tous les éléments disponibles. Zina se souvint alors d'une facture client de 6401,60€ qu'elle avait traitée récemment pour Carrefour… Une facture qu'elle avait donc traitée pour le compte de l'entreprise. Pépé lui demanda de lui fournir le PDF de la facture initiale ainsi que le courriel envoyé à Jacques Dupond, directeur des achats chez Carrefour, contenant la facture à signer.

En examinant attentivement les documents, Pépé décela une subtile altération. L'IBAN sur la facture initiale différait de celui sur la facture que Jacques Dupond avait reçue. Le détective comprit que la falsification avait eu lieu entre la création de la facture par Zina et sa réception par Carrefour.

Pépé décida de confronter Guillaume Petit. Il exposa clairement comment le courriel de Zina avait été intercepté puis modifié, mettant ainsi en lumière la bonne foi de la secrétaire. Guillaume, surpris, réalisa l'ampleur de la supercherie et admit que la responsabilité incombait à l'entreprise.
"Je ne savais pas, Mademoiselle. On m'a simplement transmis l'information, et j'ai suivi la procédure standard", se justifia-t-il.

Finalement, Zina fut réintégrée dans son poste. Guillaume Petit, contraint par les preuves présentées par Pépé, reconnut son erreur et assura que des mesures seraient prises pour renforcer la sécurité des communications électroniques au sein de l'entreprise. En quittant les bureaux de Total, Pépé ressentit la satisfaction du devoir accompli. Son expertise avait permis de rétablir la vérité et de protéger la réputation de Zina. Il réalisa une fois de plus que même à la retraite, sa passion pour les enquêtes restait intacte : sa connaissance approfondie des rouages de l'entreprise et sa perspicacité avaient permis de rétablir la vérité.

L'histoire de Zina et de la facture modifiée devint rapidement une anecdote dans les couloirs de Total. Pépé, l'ancien détective au service de la justice, continua de veiller dans l'ombre, prêt à résoudre les énigmes qui se présenteraient à lui, aussi complexes soient-elles.

## TODO à mettre en dur :
Toute ressemblance avec la réalité est voulue. Cette situation vous est familière, vous avez déjà été confronté un cas semblable ?
Voilà ce que propose paxpar : Comme Pépé, testez les pdfs sur lesquels il a enquêté, consultez les pdfs ci-dessous et voyez le résultat obtenu :

## TODO "balise showcase" qui qd la personne clique sur le pdf affiché indique à la personne "connectez-vous" et c'est seulement à ce moment là (quand la personne est connectée) que la personne voit la checklist correspondante et peut à son tour déposer un pdf de son choix dans la dropzone pour tester son propre pdf avec la checklist utilisée par Pépé. Si elle n'est pas connectée, elle ne peut voir que la checklist déclenchée par le pdf proposé dans l'épisode.

::ppw-showcase-check
---
conversation:
   - pepe: "Bonjour Zina, je vais te montrer comment j'ai résolu ton affaire"
   - zina: "Bonjour Pépé, tu me sauves la vie"
   - pepe: "Voilà, je dépose dans la dropzone le PDF total que tu as généré avant de l'envoyer à Guillaume pour signature"
pdfs:
  - url: "/documents/ffx_total_186_ok.pdf"
    check_result: "/content/usage/ffx_total_186_ok.json"
    name: "Facture total"
    conversation:
       - pepe: "On constate que le document est conforme"
       - pepe: "Maintenant je dépose la facture que Jacques Dupond a reçu"
  - url: "/documents/ffx_total_106_iban_ko.pdf"
    check_result: "/content/usage/ffx_total_106_ko.json"
    name: "Facture total01"
    conversation:
       - pepe: "On a directement accès aux non-conformités et on identifie de suite que c'est l'IBAN et la signature de Guillaume qui posent problème"
       - pepe: "L'IBAN indiqué dans les métadonnées n'est pas celui de Total"
       - pepe: "Et la signature sur la facture n'est pas celle de Guillaume"
       - zina: "Comment c'est possible ?"
       - pepe: "Quelqu'un a intercepté ton email lorsque tu l'as envoyé à Guillaume"
       - pepe: "Puis il a modifié l'IBAN dans les métadonnées et pour terminer, il a fait une signature électronique au nom de Guillaume"
       - pepe: "La première facture prouve ton innocence et que ton email a été intercepté à un moment donné"
       - zina: "Merci Pépé, sans toi je ne sais pas ce que je serais devenue"
---
::

Vous voulez voir un atelier dans lequel ce cas est traité ? [Cliquez ici](https://youtu.be/CRidFjI33nk)

## prompt soumis à openai

Rédiger une nouvelle de 1600 mots dans le style d'Agatha Christie qui nous montre les péripéties de Paxpar, plus connu sous son pseudo, Pépé, ancien détective privé, dont la spécialité est l'enquête sur des documents signés électroniquement. Passionné par son métier, il s'occupe toujours d’affaires même après son départ à la retraite pour des amis, des connaissances. Tenace et perspicace, il aime le travail bien fait et s’engage à résoudre rapidement les affaires qu’on lui confie.

Voici le résumé :
Zina, secrétaire chez Total, est convoquée dans le bureau de son directeur, Guillaume Petit, qui lui signifie son licenciement pour faute grave. Guillaume refuse de lui donner plus de détails et évoque simplement un détournement d'une somme de 6401,60€.
Zina est sous le choc et en parle à Pépé.
Elle se rappelle avoir travaillé sur un document avec ce montant de 6401,60€ : une facture client destinée à Carrefour.

À la demande de Pépé, Zina lui fournit le PDF de facture qu'elle a généré à l'origine et le courriel envoyé à son client Jacques DUPOND, directeur des achats Carrefour avec en pièce jointe la facture de 6401,60€ signée par Guillaume.
Pépé constate que l'IBAN a été modifié entre la facture générée par Zina et celle que Jacques a réceptionnée pour signature.
Pépé montre à Guillaume comment le courriel qui lui a été envoyé par Zina a été intercepté puis modifié à son insu.
Ce courriel montre que Zina était de bonne foi et que c'est de la responsabilité de son entreprise si ce courriel a été fraudé.

Zina est rassurée quand Guillaume lui indique qu'elle conserve son poste.
Pépé s'en va avec le sentiment d'avoir rempli sa mission.

## PDFs - Checklists
### PDFS
- ok : ffx_total_186_ok.pdf 
- iban modifié : ffx_total_106_iban_ko.pdf

### Checklists
- ATTENTION pour ce cas d'usage elles sont dans paxpar-front/content/usage/check_result:
ffx_total_186_ok.json
ffx_total_106_ko.json
**TODO** Showcase à modifier si chemin à suivre dans pp-ref-common au lieu de paxpar-front

## personnages
### personnages principaux :
Pépé (détective privé) 
Paxpar, plus connu sous son pseudo, Pépé, ancien détective privé, dont la spécialité est l'enquête sur des documents signés électroniquement. Passionné par son métier, il s'occupe toujours d’affaires même après son départ à la retraite pour des amis, des connaissances. Tenace et perspicace, il aime le travail bien fait et s’engage à résoudre rapidement les affaires qu’on lui confie.

### personnages secondaires :
Zina (secrétaire chez Total), 
Guillaume Petit (DRH chez Total),
Jacques Dupond (Directeur des achats Carrefour) 

## TODO: avoir un visuel (personnages concernés à faire entrer dans 1080x1080px, le fond 1920x1080px)

## Atelier 202303 (pas exactement le cas de total évoqué dans cet épisode, mais on y voit quand même la déctection d'une modification d'IBAN et usurpation d'identité de signature électronique)

### TODO mettre un/des visuel(s) du jeu de cartes 

### TODO identifier les signatures présentes sur les pdfs de l'épisode (pour faciliter le requêtage)
Comme pour ce cas d'usage ce sont des checklists dynamiques (.json), l'analyse du pdf identifie les signatures effectivement présentes. Faut-il les lister ? Comment les répertorier ici pour le requêtage ? Est-ce qu'il faut mettre ici la clé publique ?

Guillaume Petit


### TODO permettre de renvoyer vers une page de personnage grâce à un objet du type "@Zina" et on verrait donc la page de Zina sur laquelle figure son descriptif et la liste des épisodes dans lesquels Zina joue un rôle. Dans le texte, on pourrait faire apparaitre l'avatar de Zina (voir les fichiers dans content/_actor/zina.md)




