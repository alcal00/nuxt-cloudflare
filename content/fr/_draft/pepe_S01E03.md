---
model: brouillon_article
#draft:
#model: serie_enquetes-pepe
#model: episode
#submodel: pepe
title: 23%
#(S01E02)
#description: Plongez dans l'épisode captivant où Edouard Dupont, artisan désemparé par une facture suspecte, fait appel à l'équipe Paxpar composée du détective astucieux Pépé et de l'experte juridique Nadège Martin. Le duo démêle habilement le mystère d’une facture manifestement trop salée.
image: https://media.paxpar.tech/pp_nad_bob_base.png
aside: false
pdfs:
- chemin qui pointe vers pp-ref
- ffx_ed_buri.pdf
checklist: 
- _cl_ffx_buri_01.yaml
cards:
- 701
- 702
- 1201
- 1510
#date: 202401
---

# 23%

La pluie fine tambourinait sur les fenêtres du bureau de Pépé, créant une mélodie apaisante. Retiré du tumulte des rues animées, Paxpar, plus familièrement appelé Pépé, était absorbé par les mystères des documents électroniques. Sa réputation d'ancien détective privé spécialisé dans les signatures électroniques l'avait précédé même après sa retraite. Pourtant, Pépé n'était pas homme à rester inactif, sa passion pour son métier le poussant à s'engager dans des enquêtes, même pour des amis ou des connaissances.

Ce jour-là, un coup de téléphone retentit dans son appartement. Edouard Dupont, artisan méticuleux et ami de longue date, était aux prises avec une facture, émise par un fournisseur portugais, Adrien directeur des ventes pour l'entreprise Buripanera. Edouard, perplexe, s'interrogeait à la fois sur le format de la facture, suspectant une erreur et sur le montant TTC, inusuellement élevé comparé à ses précédentes commandes. Edouard sollicita l'aide de son vieil ami, Pépé, et de l'experte juridique Nadège Martin.

« Edouard, mon ami, quelle étrange affaire nous avez-vous amenée cette fois-ci ? » s'enquit Pépé.

Edouard exposa le problème avec la facture suspecte. Il ne su dire à Pépé quel était exactement le problème et expliqua que c’est pour cette raison qu’il avait besoin de son aide. Un léger froncement de sourcils sur le visage de Pépé indiqua qu'il percevait en effet quelque chose de suspect.

L'équipe Paxpar se mit au travail. Pépé, les yeux rivés sur l'écran de son ordinateur, analysait chaque recoin du document électronique. Nadège, avec son expérience juridique, croisait les données pour s'assurer de la conformité avec les lois européennes.
« Factur-x, oui, mais diable, pourquoi cette TVA à 23% ? » marmonna Pépé.

Les heures passèrent, et la fine pluie continua sa danse mélodique. Pépé, perspicace comme toujours, découvrit le pot aux roses : la TVA appliquée était incorrecte. Adrien avait utilisé 23% au lieu des 0% prévus pour les échanges intra-UE.

Pépé, satisfait de sa trouvaille, communiqua la nouvelle à Edouard. Ce dernier, incrédule, appela Adrien pour confronter la supercherie.

La voix hésitante d'Adrien traversa la ligne téléphonique. « Je ne sais pas comment cela a pu se produire, c'est une erreur regrettable. »

Edouard, désormais armé de la vérité, exigea une nouvelle facture avec la TVA correcte. Adrien s'excusa abondamment et s'empressa de corriger son erreur.

Edouard, soulagé et reconnaissant, remercia chaleureusement Pépé et Nadège pour leur intervention éclair. Les éléments de l'énigme étaient résolus, le mystère levé. La fine pluie semblait applaudir discrètement cette victoire de la vérité sur l'obscurité des malentendus. La victoire avait un goût de justice rendue. Pépé et Nadège s'étaient une fois de plus montrés à la hauteur de leur réputation.

La fine pluie avait cessé, laissant place à un calme apaisant. Pépé, avec son regard sagace, échangea un sourire complice avec Nadège. Les mystères des documents électroniques n'avaient plus de secrets pour eux, mais qui savait quelle énigme les attendait dans le monde complexe des affaires à venir ? Une chose était certaine : l'équipe Paxpar était prête à résoudre chaque énigme qui se présenterait sur leur chemin.

## TODO "balise showcase" qui qd la personne clique sur le pdf affiché indique à la personne "connectez-vous" et c'est seulement à ce moment là (quand la personne est connectée) que la personne voit la checklist correspondante et peut à son tour déposer un pdf de son choix dans la dropzone pour tester son propre pdf avec la checklist utilisée par Pépé. Si elle n'est pas connectée, elle ne peut voir que la checklist déclenchée par le pdf proposé dans l'épisode.

::ppw-showcase-check
---
pdfs:
  - url: "/documents/ffx_ed_buri.pdf"  
    check_result: "/blog/2023/06/_cl_ffx_buri_01"
    name: "Facture BURIPANERA_01"
    conversation:
        - edouard: "Cette facture n'est pas correcte, la checklist m'indique que la TVA est à 23% alors que dans l'union européenne on doit appliquer une TVA à 0%"
        - edouard: "Si je paie la facture, je ne pourrais pas me faire rembourser la TVA par le fisc français" 
        - edouard: "Je dois le signaler à Adrien, heureusement, il parle français"
        - edouard: "Allo, Adrien bonjour, c'est Edouard, je t'appelle car tu m'as facturé de la TVA sur ma dernière facture alors que tu n'aurais pas dû" 
        - adrien: "Bonjour Edouard, ha bon, c'est une erreur de mon sécretaire"
        - adrien: "Je vais lui demander de la refaire et de te la renvoyer. Toutes mes excuses. "                                  
---
::

Vous voulez voir un atelier dans lequel ce cas est traité ? (voir à partir de 11'30'')
lien url : https://www.youtube.com/watch?v=tbJ5tPX7gHw
## TODO voir quel est le composant ou comment mettre un hyperlien sur une portion de texte 

## prompt

pour openai :
Rédiger une nouvelle de 1600 mots dans le style d'Agatha Christie qui nous montre les péripéties de Paxpar (plus couramment appelé Pépé), ancien détective privé, dont la spécialité est l'enquête sur des documents signés électroniquement. Passionné par son métier, il s'occupe toujours d’affaires même après son départ à la retraite pour des amis, des connaissances. Tenace et perspicace, il aime le travail bien fait et s’engage à résoudre rapidement les affaires qu’on lui confie.
Il est aidé par la juge Nadège MARTIN : experte juridique - ancienne Huissier de justice et juriste. Femme de couleur, qui a grimpé les échelons grâce à sa persévérance et sa rigueur de travail.

Voici le résumé :
Edouard Dupont, un artisan multiservice, reçoit une facture d'un fournisseur portugais (Adrien, directeur des ventes pour l’entreprise Buripanera). Il se demande si la facture est bien au format factur-x et remarque que le montant TTC semble anormalement élevé comparativement au commandes fournisseur qu’il reçoit habituellement. Il ne parvient pas à comprendre pourquoi.

Il fait appel à l’équipe paxpar. En effet, son ami Pépé, détective, et Nadège Martin, l’experte juridique avec laquelle il a l’habitude de collaborer, sauront trouver ce qui ne va pas. Le travail conjoint de Pépé et Nadège permet de confirmer que la facture est bien au format factur-x, rien à redire de ce côté-là, et de découvrir que la somme due est effectivement faussée parce que la TVA appliquée ici à 23% au lieu des 0% applicable dans l'UE.

Adrien se confond en excuse auprès de son client, et fournit une facture avec une TVA à 0%.

Edouard remercie chaleureusement Pépé pour la résolution rapide et efficace de cet imbroglio.

### PDFs - Checklists 
### PDFS
pdfs:
- url: "/documents/ffx_ed_buri.pdf" 
- 

### Checklists
- check_result: "/blog/2023/06/_cl_ffx_buri_01"

### Personnages
### personnages principaux :
Pépé (détective privé)
Paxpar, plus connu sous son pseudo, Pépé, ancien détective privé, dont la spécialité est l'enquête sur des documents signés électroniquement. Passionné par son métier, il s'occupe toujours d’affaires même après son départ à la retraite pour des amis, des connaissances. Tenace et perspicace, il aime le travail bien fait et s’engage à résoudre rapidement les affaires qu’on lui confie.
Nadège MARTIN (juge)
Nadège MARTIN : experte juridique - ancienne Huissier de justice et juriste. Femme de couleur, qui a grimpé les échelons grâce à sa persévérance et sa rigueur de travail.

### personnages secondaires :
Edouard Dupont (un artisan multiservice)
Adrien (directeur des ventes pour l’entreprise Buripanera)

### TODO: avoir un visuel (personnages concernés à faire entrer dans 1080x1080px, le fond 1920x1080px)

* les éléments factuels à produire (fichiers PDF, nom des acteurs, **signatures**) ??  

### Atelier 202306

### TODO mettre un/des visuel(s) du jeu de cartes 

### TODO identifier les signatures présentes sur les pdfs de l'épisode (pour faciliter le requêtage)

### TODO permettre de renvoyer vers une page de personnage grâce à un objet du type "@Zina" et on verrait donc la page de Zina sur laquelle figure son descriptif et la liste des épisodes dans lesquels Zina joue un rôle. Dans le texte, on pourrait faire apparaitre l'avatar de Zina (voir les fichiers dans content/_actor/zina.md)

