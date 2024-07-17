---
title: Signature électronique
description: "Signature électronique, signature numérique, certificat ?"
image:
  src: https://media.paxpar.tech/signature_pexels-rodnae-productions-5778510_cartoon-1170x694.png
authors:
  - name: Valérie SUIGNARD
    avatar:
      src: /avatar/valerie.png
      target: _blank
    to: https://www.linkedin.com/in/valerie-suignard/
date: 2022-09-01
---

# Signature électronique, signature numérique, certificat ?
## Posons quelques bases 
Il existe plusieurs façons de signer un document :

- Si c’est un document papier, la signature est manuscrite.

- Si c’est un document électronique, alors la signature est une signature électronique (puisque nécessairement dématérialisée).Pour signer un document électronique il vous faut un certificat électronique et un outil de signature.

## Le distinguo entre signature électronique et signature numérique ?
On peut souvent lire ‘signature numérique’… Quelle différence y a-t-il avec une "signature électronique" ? Il est bon de savoir que dans la majorité des situations on emploie volontiers un terme pour l’autre. Une signature apposée sur un document "électronique" est elle aussi à minima "électronique".

Si une signature numérique est toujours une signature électronique, la réciproque n’est pas vraie :

'La différence, c’est qu’une signature numérique repose sur une technologie cryptographique qui fournit un niveau supplémentaire de sécurité et d’intégrité du document. Une signature électronique, en revanche, peut consister en une simple image de votre signature manuscrite collée dans un document’ [(1)].

Lorsqu’un document est signé numériquement, il peut y avoir un restitution visuelle de cette signature électronique sur le document, mais cela n’a pas de caractère obligatoire ou systématique (même si, en apparence, **cela simplifierait la vie des utilisateurs** !).

## Signature électronique : clé publique, clé privée et cryptographie
Une signature numérique est en réalité une suite de nombres qui vient s’attacher au document sous forme de métadonnées. Elle s’inscrit donc dans l’historique de création du document et n’a pas vocation à être reconnue au premier coup d’œil par un interlocuteur humain. Par contre, son caractère complexe, chiffré, unique est décryptable avec l’outil de lecture adapté sur un ordinateur.

On associe parfois cette suite de nombres à un visuel pour le confort des utilisateurs. Attention toutefois à ne pas vous fier uniquement à ce visuel comme preuve que le document est bien signé numériquement, ou même qu’il est signé par la personne dont on peut lire le nom sur le visuel : il doit nécessairement y avoir **des métadonnées associées** !

La signature électronique est basée sur un certificat électronique qui contient les clés permettant d’assurer l’authentification du document signé ainsi que son intégrité. Ce résultat est obtenu grâce à la technique de cryptographie asymétrique : elle ‘permet de chiffrer avec un mot de passe et de déchiffrer avec un autre, les deux étant indépendants.’[(2)]. En effet, on parle de clés : une clé privée (de chiffrement), un clé publique (de déchiffrement).

Nous vous invitons à lire le document en ligne pour mieux appréhender cette technique.

Pour faciliter la lecture de ce qui suit nous utiliserons le terme le plus usité, à savoir ‘**signature électronique’, même pour parler de signature numérique,** de cette manière nous nous calerons sur l’emploi qu’en fait également le règlement [eIDAS](https://www.ssi.gouv.fr/en/regulation/digital-confidence/the-eidas-regulation/)    (electronic IDentification, Authentification and trust Services : identification électronique et services de confiance).

## Quelle valeur est accordée à une signature électronique au niveau européen ?
Voilà ce que précise le règlement eIDAS : Pour être reconnue au niveau européen comme ayant le même statut et bénéficier des mêmes effets juridiques que la signature manuscrite, une signature électronique (numérique) doit être « qualifiée ».

## Signature électronique : Trois niveaux
Trois niveaux de signature sont reconnus : simple, avancé et qualifié. Le règlement eIDAS définit en effet la signature électronique, la signature électronique avancée, la signature électronique qualifiée.

- ### La signature électronique
La signature électronique (simple) ‘peut se limiter à un nom écrit au bas d’un message électronique’ [(3)]  ou à l’image/le scan d’une signature manuscrite apposée en bas d’une page pdf. ‘L’usage d’une signature électronique dite « simple » est donc reconnu et largement utilisé, mais sa fiabilité et par là, son opposabilité, dépendront des preuves qui lui sont associées’ [(4)]. Autrement dit, utiliser ce niveau de signature ne garantit pas nécessairement l’intégrité des données signées…

- ### La signature électronique avancée
La signature électronique avancée, est une signature électronique pour laquelle sont établis entre données signées, signature et signataire des **liens techniques** visant à garantir l’**intégrité des données**, l’**identification du signataire**, la **non-répudiation**. Ce niveau fait nécessairement appel à une signature numérique, impliquant typiquement des moyens cryptographiques [(3)]. Elle peut ‘être construite et délivrée par une Autorité de Certification ou un PSCQ’ [(4)] (Prestataire de Service de Confiance Qualifié).

- ### La signature électronique qualifiée
‘La signature électronique qualifiée, qui est une signature électronique avancée basée sur un certificat qualifié et créée au moyen d’un dispositif de signature qualifié. Ce niveau ajoute **une assurance de qualité** liée, d’une part, à la **supervision des moyens et processus mis en œuvre par l’autorité de certification** (p.e. pour garantir que l’identité mentionnée sur le certificat de signature correspond à l’identité de la personne physique ayant reçu ledit certificat) et, d’autre part, à la conformité du **dispositif de signature** (p.e. une carte à puce hébergeant le certificat et sur laquelle aura techniquement lieu la création cryptographique de la signature)’ [(3)].

## Choisir la ‘bonne’ signature électronique
Choisir le premier, le deuxième, ou le troisième niveau de signature électronique dépendra très probablement de la nature du document (contrat, facture, courrier, procédure, document juridique, bail…etc) que vous souhaitez signer, et surtout du degré de confiance que vous souhaitez apporter à ce document.

## Signature électronique, quelles garanties ?
Si toute signature électronique est associée soit à une personne physique soit à une personne morale (un organisme par exemple), comment cela est-il garanti, et qui prend cette responsabilité ?

C’est une Autorité de Certification qui délivre les certificats de signature.

- Soit vous possédez un certificat, puis vous utilisez un outil de signature électronique pour signer un document en votre nom propre,

- Soit vous faites appel à un Prestataire de Service de Confiance (PSC). Ce sont les PSC qui ont obtenu le certificat électronique de signature auprès d’une Autorité de Certification et qui se chargent de signer en votre nom, en garantissant au récipiendaire que le signataire est bien celui qu’il prétend être.

Les PSC qui fournissent des signatures électroniques sont nombreux, pour autant n’est pas PSC qui veut ! En effet les candidats font ‘l’objet d’un audit auprès d’un organisme d’évaluation de la conformité. Le résultat de cet audit est ensuite envoyé à l’organe de contrôle national (ANSSI pour la France) pour sa qualification’ [(4)]. C’est plutôt rassurant.
 
Les PSCQ (PSC qualifiés) retenus respectent certains impératifs réglementaires et juridiques caractérisants une signature électronique.
 
En l’occurrence, si je réceptionne un document signé électroniquement :
- je dois pouvoir identifier facilement qui est le signataire
- le mécanisme qui a permis d’apposer la signature électronique doit me garantir que le document n’a pas été altéré entre le moment où la signature a été apposée et le moment où je le lis.
Pour présenter les propriété listées ci-dessus, une signature électronique apposée sur un document électronique doit réunir les conditions suivantes ; c’est ce que les PSC doivent donc me garantir [3] :
- **Authentique** : L’identité du signataire doit pouvoir être retrouvée de manière certaine.
- **Infalsifiable** : La signature ne peut pas être falsifiée. Quelqu’un d’autre ne peut se faire passer pour un autre.
- **Non réutilisable** : La signature n’est pas réutilisable. Elle fait partie du document signé et ne peut être déplacée sur un autre document. **Inaltérable** : Un document signé est inaltérable. Une fois qu’il est signé, on ne peut plus le modifier.
- **Irrévocable** : La personne qui a signé ne peut le nier.
Cela implique de la part des PSC qu’ils vérifient l’identité du signataire. Cela peut être un point des plus importants pour le récipiendaire du document signé électroniquement. **Le degré de confiance qu’on accorde à un PSC en matière de signature électronique se joue donc,** entre autre, **sur le degré de vérification de l’identité du signataire.**

## Que demande un PSC pour « vérifier » l’identité d’un signataire ?
Sur le principe les PSC éxécutent la signature électronique pour le compte du signataire, Donc ils doivent s’assurer que le signataire est bien celui qu’il prétend être.

Tout dépend du niveau de signature requis : plus le niveau est élevé, plus les exigences en matière de vérification d’identité du signataire seront élevées. Voici quelques éléments :

1. Les noms et prénoms du signataire

2. Son adresse e-mail

3. Un numéro de téléphone

4. Certains PSC demandent en amont ces mêmes éléments auprès de l’émetteur du document à signer pour vérifier la correspondance entre les informations fournies.

## Ce qui rend une signature électronique unique ?
Pour rendre la vérification de l’identité du signataire plus solide au moment de sa signature :

1. Le PSC peut procéder à une double authentification de cet ordre :
- Un url dédié peut être généré et envoyé par e-mail au signataire.

- Un code unique est en parallèle envoyé par sms au signataire par le prestataire pour activer la signature sur cet url unique. À défaut, le prestataire peut demander à l’émetteur du document de transmettre un code secret au signataire par un autre biais, toujours pour activer la signature sur cet url unique.

2. Le PSC peut recueillir le consentement à signer du signataire.

3. Certains PSC génèrent un certificat électronique dédié au signataire pour chaque transaction spécifique.

4. Il est possible qu’un Fichier de Preuve associé à la transaction soit créé, lequel inclut

- les données d’identification utilisées,

- l’adresse IP du terminal utilisé par le signataire pour visualiser le document et donner son consentement,

- l’horodatage des différentes étapes de la transaction.

## La valeur ajoutée de paxpar pour la vérification d’une signature électronique
### Les points communs avec les outils classiques de vérification de signature
Paxpar vérifie les éléments de signature électronique présents dans les métadonnées du document pdf signé que vous déposez dans la zone de dépôt. Paxpar vous dit

- combien il y a de signatures électroniques apposées au document,

- combien il y a de certificats de signature,

- si ces certificats son valides,

- quelle est/sont la/les clé(s) publique(s) de signature,

- si les algorithmes de signature sont valides,

- nom et prénom du signataire, adresse e-mail, numéro de téléphone (s’ils sont renseignés),

Bref, paxpar joue ici le même rôle qu’un outil de vérification de signature électronique tels Adobe, LibreOffice, Okular, Foxit etc. …

## Sa spécificité ?
Paxpar s’adapte à VOTRE entreprise :

Vous avez des règles métier, techniques ou juridiques associées à la signature électronique de certains documents à l’entête de l’entreprise ? Imaginons par exemple que vous ayez défini que seul Zina du service de comptabilité soit habilitée à signer les factures adressée à un client spécifique ? Comment vous en assurer avant de transmettre lesdites factures au client ? Vous connaissez la clé publique de signature de Zina, vous savez quel certificat elle utilise.

1. Déposez la facture dans la zone de dépôt de la plateforme paxpar.

2. Paxpar compare les métadonnées de signature présentes sur la facture pdf signée que vous venez de déposer dans la zone de dépôt avec les données de signatures connues de l’entreprise concernant Zina

3. Si les métadonnées de signature électronique concordent avec les données renseignées lors du paramétrage de la plateforme pour votre entreprise concordent, alors l’identité du signataire « Zina » est vérifiée, vous pouvez transmettre la facture concernée au client.

4. Si paxpar détecte l’absence de concordance parfaite entre les métadonnées de signature électronique et les données renseignées lors du paramétrage de la plateforme pour votre entreprise concernant « Zina », alors la plateforme vous alerte. La signature apposée peut être une signature tout à fait valable juridiquement parlant et pour autant ne pas correspondre aux critères métier que vous vous êtes fixés.

## Vérification de données : quelques exemples de paramétrage possibles de la plateforme paxpar
Vous signez des contrats ?

Vous pouvez avoir déterminé qu’un contrat annuel soit signé :

- par deux employés spécifiques (par exemple Zina et Sally),

- dans deux services différents,

- dans un ordre spécifique,

- avant une date buttoir chaque année.

Là où les outils de vérification de signature électronique classiques vous diront que tout est en ordre avec des voyants au vert (certificats authentiques, valides au moment de la signature, clés publiques vérifiées etc.), **paxpar vous signalera toute anomalie liée à vos critères métier.**

L’un des signataires n’est ni Zina, ni Sally ? Alerte !

Sally a signé avant Zina ? Alerte !

Ces irrégularités sont détectées dans les 15 jours qui précèdent la date buttoir ? Alerte !

Cela laisse à votre entreprise le temps de produire un nouveau contrat conforme à vos exigences avant qu’il ne soit adressé en temps et en heure à son destinataire final.

## Nous contacter
Vous souhaitez une démonstration ?
Vous pouvez nous contacter à info@paxpar.tech.
 
## Références

[(1)] https://connective.eu/fr/difference-entre-signature-electronique-et-signature-numerique/

[(2)] http://igm.univ-mlv.fr/~dr/XPOSE2006/depail/fonctionnement.html

[(3)] https://fr.wikipedia.org/wiki/Signature_num%C3%A9rique

[(4)] La signature électronique – Définitions et cas d’usage (CR2PA et FnTC) / Mai 2021.