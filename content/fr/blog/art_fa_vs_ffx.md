---
title: Facture au format Factur-X
description: "Pourquoi une facture au format Factur-X est-elle différente d’une facture classique?"
image:
  src: https://media.paxpar.tech/blog_factures-clefsusb.png
authors:
  - name: Valérie SUIGNARD
    avatar:
      src: /avatar/valerie.png
      target: _blank
    to: https://www.linkedin.com/in/valerie-suignard/
date: 2022-09-12
---


# Pourquoi une facture au format Factur-X est-elle différente d’une facture classique?

## Facture «classique»
Une facture « classique » est dans la majorité des cas

une **facture papier**
ou dématérialisée au format PDF simple.
## Les mentions obligatoires
Une facture papier ou PDF simple comprend un **visuel** avec les informations obligatoires suivantes [1] :

1. la date d’émission de la facture,
1. le numéro de la facture (numéro unique, basé sur une séquence chronologique et continue),
1. la date à laquelle la vente est effectuée ou la date à laquelle la prestation de services ou livraison est achevée,
1. l’identité du vendeur ou du prestataire de services
- la dénomination sociale (ou nom et prénom pour un entrepreneur individuel),
- l’adresse du siège social et l’adresse de facturation (si différente)
- le numéro de **Siren** ou **Siret** , le code **NAF** , la forme juridique et le capital social (pour les sociétés), et ville du greffe d’immatriculation (pour les commerçants), le numéro au répertoire des métiers et département d’immatriculation (pour les artisans).
- Le cas échéant, le code d’identification du service en charge du paiement. [2]
1. l’identité de l’acheteur ou du client. Il s’agit ici de la dénomination sociale (ou nom pour un particulier), de 1. l’adresse du client (sauf opposition pour un particulier), et de l’adresse de facturation si différente, ainsi que de l’adresse de livraison.
1. le numéro du bon de commande (s’il a été préalablement émis par l’acheteur), dans les autres cas, le numéro de l’engagement généré par le système d’information financière et comptable de l’entité publique [2]
le numéro d’identification à la TVA (lien commission européenne https://ec.europa.eu/taxation_customs/vat-identification-numbers_fr) du vendeur et du client professionnel pour les factures dont le montant hors taxe est inférieur ou égal à 150 € (et si le client professionnel est redevable de la TVA),
1. la désignation et le décompte des produits et services rendus,
1. Le prix catalogue :
- Il s’agit du prix unitaire hors TVA des produits vendus ou taux horaire hors TVA des services fournis, ou lorsqu’il y a lieu, le prix forfaitaire [2]
1. le taux de TVA légalement applicable,
1. l’éventuelle réduction de prix,
1. la somme totale à payer hors taxe (HT), le montant de la taxe à payer [2], et la somme toutes taxes comprises (TTC). Dans l’éventualité où les produits ou services  facturés ne seraient pas soumis au même taux de TVA, la facture doit faire apparaître la répartition de ces montants par taux de taxe sur la valeur ajoutée, ou, le cas échéant, le bénéfice d’une exonération [2],
1. l’adresse de facturation (si elle est différente de celle du siège social de l’entreprise),
1. les informations sur le paiement :
- la date à laquelle le paiement doit intervenir ou le délai de paiement,
- les conditions d’escompte en cas de paiement anticipé,
- les taux de pénalités en cas de non paiement ou de retard de paiement.

## Archivage
Les factures doivent être conservées pendant 10 ans. Les factures papier sont très gourmandes en place, il faut donc avoir un lieu de stockage dédié, et une méthode d’archivage efficace pour retrouver sans perdre trop de temps une facture spécifique si besoin.

Le format PDF simple n’est pas nécessairement un PDF/A, pourtant c’est le format requis pour l’archivage sur 10 ans de documents dématérialisés (ce qui inclut les factures). Si vos factures sont dématérialisées, vous devez donc vous assurer qu’elles sont bien au format PDF/A.

## Mais alors en quoi se différencient les factures au format Factur-X ?
## Facture au format Factur-X
### Les pré-requis
1. Les factures électroniques doivent respecter les exigences de la réglementation fiscale en matière de facturation, autrement dit le format européen EN16931 (qui spécifie les normes et règles techniques pour la facturation électronique en Europe [3]).
1. Les factures électroniques pour les marchés conclus avec l’État et ses sous-traitants transitent déjà par le portail Chorus pro depuis le 1er janvier 2017.
Les entreprises assujetties à la TVA qui émettent des factures, devront émettre des factures électroniques qui transiteront soit par une plateforme privée agréée, soit par le portail public Chorus pro. Il est à noter que, toutes les données nécessaires au **e-reporting** devront transiter par cette plateforme, quelle que soit la taille de l’entreprise émettrice des factures, qu’elle soit publique ou privée. La déclaration en e-reporting va se mettre en place selon un calendrier qui s’échelonne entre le 1er juillet 2024 et le 1er janvier 2026. La transmission de ces données à la direction générale des finances publiques (DGFIP) devrait permettre de faciliter la vie des entreprises en simplifiant les démarches auprès de l’administration fiscale et dans le même temps simplifier les contrôles de cette dernière et ainsi limiter les fraudes [4].

## Format européen EN16931 et portail public Chorus pro
Le fnfe-mpe (Forum National de la Facture Electronique et des Marchés Public Électroniques) en France et le FeRD (Forum electronischec Rechnung Deutschland) en Allemagne, ont travaillé main dans la main pour créer le **format de facture électronique mixte (hybride) appelé Factur-X.**

Le format Factur-X respecte donc le format européen EN16931 et est compatible avec la plateforme publique Chorus pro, incontournable pour le e-reporting.

C’est donc un format tout à fait adapté à la création de factures à valeur ajoutée, qui sont conformes à la réglementation et consultables, de leur date d’émission à la fin de la période de leur stockage.

## Pourquoi dit-on que ce format permet d’émettre des factures électroniques « mixtes » ?
1. D’une part, c’est une facture lisible sous format PDF et par conséquent parfaitement **accessible et compréhensible par toutes les parties(émetteurs et récepteurs)**, qu’elle contient toutes les mentions obligatoires listées en première partie…
1. D’autre part, des métadonnées lui ont été adjointes sous forme de ficher XML. Le fichier XML est **facilement interprétable / utilisable par nos ordinateurs** et autres supports informatiques, permettant un traitement automatisé des informations que chaque facture contient [3].

L’émetteur d’une facture au format Factur-X peut considérer certaines données comme importantes pour lui, et d’autres plus anecdotiques. L’avantage de ces données XML, c’est que parmi les données renseignées, le destinataire de la facture pourra extraire celles qui sont pertinentes pour lui, selon ses propres exigences, sans être restreint par le prisme de l’expéditeur.

L’autre avantage du format Factur-X 1.0.06 c’est que, depuis le 1er mars 2022, il est strictement identique au format allemand ZUGFeRD 2.2, facilitant d’autant les transactions entre la France et l’Allemagne. Le format de facture Factur-X / ZUGFeRD est disponible gratuitement ici (mettre le lien https://fnfe-mpe.org/factur-x/) [5].

### Archivage : La norme ISO PDF/A-3
Le format Factur-X est basé sur la norme ISO PDF/A-3 permettant un archivage sur 10 ans, la facture pourra être lue et interprétée sur toute la période d’archivage.

## La Fabrique Factur-X
Notre service en ligne La Fabrique Faxtur-X vous permet de générer des factures au format Factur-X.

Indépendamment de la génération de factures au format Factur-X, le service de vérification de (la plateforme paxpar) vous assure que vos factures sont bien au format factur-X (donc que les PDF déposés au format PDF/A) ET conformes à vos exigences métier.

## Votre politique d’entreprise vis-à-vis de vos clients: ajout des garanties supplémentaires ?
Vous avez pour exigence de n’émettre que des factures électroniques signées ?

Non-seulement paxpar vérifie que les factures Faxtur-X que vous émettez sont bien signées, mais une fois la liste de contrôle paramétrée, la plateforme vous alerte, par exemple :

- si le signataire n’est pas la personne attendue,
- si le numéro du bon de commande renseigné dans la facture est différent de celui du bon de commande en pièce jointe. De cette manière vous ne transmettrez pas à votre client une facture non-conforme)
- etc…

## Votre politique d’entreprise en interne : ajout de points de contrôles
La plateforme paxpar peut vous alerter en fonction des points de contrôle que vous aurez préalablement définis, comme par exemple :

- si la date de règlement est dépassée (ce qui vous permet de relancer le destinataire),
- s’il manque des pièces jointes,
- si le taux de TVA renseigné n’est pas cohérent avec le pays renseigné dans l’adresse de facturation ou de livraison.
- etc…
## Conclusion
Nous nous sommes attachés à mettre le doigt sur les différences existantes entre les factures « classiques » et les factures au format Factur-X.

Cette solution hybride offre de nombreux avantages, entre autre :

Vous conservez le confort de lecture et d’interprétation des factures pour tout interlocuteur humain (PDF/A)
Vous vous mettez en règle par rapport à la nouvelle réglementation en matière de facturation (fichier .xml).
Certaines tâches de contrôle sont désormais automatisables,
Vous pourrez archiver vos factures en toute tranquillité.
Une démonstration ? Contactez-nous à info@paxpar.tech
## Références :
[1] https://www.economie.gouv.fr/entreprises/factures-mentions-obligatoires

[2] https://www.crowe.com/fr/dupouy/insights/blog—facture-electronique-toutes-les-entreprises-concernees-au-1er-janvier-2020

[3] https://fnfe-mpe.org/factur-x/

[4] https://www.pwcavocats.com/fr/ealertes/ealertes-france/2020/novembre/reforme-2023-2025-la-generalisation-de-la-facturation-electronique-en-france.html

[5] https://www.ferd-net.de/upload/PDF/Communique_Factur-x_1.0.06_ZUGFeRD_2.2_FR_01.03.2022.pdf