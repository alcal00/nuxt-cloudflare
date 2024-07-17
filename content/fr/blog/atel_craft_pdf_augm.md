---
title: Conformité de contrats
description: "Je constitue des documents contractuels, comment je m'assure de leur conformité ?"
image:
  src: https://media.paxpar.tech/20230413_Atelier-vtd_PDF-augm1.png
authors:
  - name: Valérie SUIGNARD
    avatar:
      src: /avatar/valerie.png
      target: _blank
    to: https://www.linkedin.com/in/valerie-suignard/
  - name: Nadine MASSON
    avatar:
      src: /avatar/nadine.png
      target: _blank
    to: https://www.linkedin.com/company/76156489/admin/feed/posts/
  - name: Guillaume PETIT
    avatar:
      src: /avatar/guillaumep.png
      target: _blank
    to: https://www.linkedin.com/in/guillaume-petit-014b0478/
  - name: Francoise ENTZMANN
    avatar:
      src: /avatar/francoise.png
      target: _blank
    to: https://www.linkedin.com/in/fentzmann/
date: 2023-04-13
---

# Atelier du 13/04/2023

## Discours de Guillaume

::ppw-chat-conversation
---
conversation:
- guillaumep: "Bonjour et bienvenue. Merci d’être là.
Nous allons passer 30 minutes ensemble, je vais donc me présenter.
Je m’appelle Guillaume, je suis le responsable commercial de Chambersign. 
Je suis très heureux de vous présenter ce webinair animé conjointement par Paxpar et ChamberSign dans le cadre de ChamberSign le Lab. 
Je serai accompagné de l’équipe PaxPar : Françoise, Valérie.  
Avant de rentrer dans le vif du sujet, en quelques mots rapides :  qui est ChamberSign et pourquoi ChamberSign le lab ?
ChamberSign est une autorité de certification, tiers de confiance créée il y plus de 20 ans. 
Notre ambition est de promouvoir la sécurisation des échanges électroniques. 
Pour ce faire nous accompagnons depuis toujours les organisations privées comme publiques dans la sécurisation de leur processus dématérialisé. 
C’est pourquoi nous délivrons notamment des identités numériques par certificats électroniques qui permet l’authentification forte de la personne physique ou morale ou la signature électronique.
C’est parce que, nous sommes conscients des nouveaux enjeux et défis liés à l’instauration d’un environnement numérique fiable, de confiance et sécurisé, que nous avons lancé il y a quelques mois notre laboratoire d’innovations. 
ChamberSign le Lab regroupe différents groupes de travail constitués d’experts venus de différents horizons dans le domaine de la dématérialisation. 
Notre ambition est d’apporter aux organisations des solutions innovantes qui répondent aux problématiques actuelles et futures.
Dans ce cadre, nous avons notamment travailler avec l’entreprise Paxpar. 
De ces travaux et échanges, en ressort la solution VérifTonDoc. 
Je laisse la parole à Françoise qui va vous expliquer ce qu’est VerifTonDoc et rentrer dans les détails du thème abordé aujourd’hui."
---
::

## Pitch du scénario 

::ppw-chat-conversation
---
conversation:
    - francoise: "Il existe plusieurs moyens d'assembler vos documents contractuels, oui mais ... Comment vous assurer que tous les documents contractuels ainsi assemblés sont bien tous présents et cohérents les uns avec les autres ?"
---
::

## Acteurs
::ppw-chat-conversation
---
conversation:
    - guillaume: "Guillaume Petit : responsable des ventes chez TOTAL"
    - patrick: "Patrick Dupont : responsable du service comptable chez THOLGA"
    - francoise: "Françoise : expert comptable du cabinet comptable VODANES"
    - nadege: "Nadège Martin : huissier de justice"
    - patrickM: "Patrick Martin : Chargé d'affaire chez ALCOVE"
    - jeanL: "Jean : responsable de l'agence immobilière Immo Eiffel"
    - thierry: "Thierry : courtier en assurance"
    - zina: "Zina assurance sinistre"
---
::

## Cas d'usages

Pour chaque cas d'usage :
1. poser le problèmatique métier 
1. ouvrir le pdf et les pièces jointes en cascade
1. déposer le pdf dans la dropzone (en sélectionnnant la bonne checklist)
1. observer les résultats
1. constater que la checklist répond à la problèmatique métier

#### La facture au format factur-X

![](https://media.paxpar.tech/Atelier_1-resp-ventes.png)

::ppw-chat-conversation
---
conversation:
    - guillaume: "J'ai édité une facture client. Est ce que si je la dépose sur Chorus pro, elle sera valide ?"
---
::

:ppw-pdf-link{href="/documents/ffx_total_186_ok.pdf"}

![](/images/images_ffx/ffx_total_186_ok.png)

::ppw-chat-conversation
---
conversation:
    - guillaume: "Lorsque je la dépose dans la dropzone sur la plateforme VérifTonDoc, on peut constater que tous les voyants sont au vert, ce qui signifie que la facture est conforme au format factur-X."
---
::

:ppw-checklist-result-static{path="/usage/check_result/ffx_total_186_ok"}

::ppw-chat-conversation
---
conversation:
    - guillaume: "Je dépose maintenant une autre facture."
---
::

:ppw-pdf-link{href="/documents/ffx_total_131_fx_ko.pdf"}

![](/images/images_ffx/ffx_total_131_fx_ko.png)

:ppw-checklist-result-static{path="/usage/check_result/ffx_total_131_fx_ko"}

::ppw-chat-conversation
---
conversation:
    - guillaume: "Cette fois-çi, la plateforme m'indique que cette facture n'est pas au format factur-X. Je ne peux pas faire de vérification car il n'y a pas de métadonnées. Elle sera refusée par Chorus pro."
---
::

::ppw-chat-conversation
---
conversation:
    - valerie: "Prenons un autre cas d'usage, celui d'une piste d'audit fiable."
---
::

****

#### La PAF

![](https://media.paxpar.tech/Atelier_2-resp-service-compta.png)

::ppw-chat-conversation
---
conversation:
    - patrick: "Je dois constituer une PAF. Comment m'assurer que l'IBAN dans les factures est bien le mien ? Que les signatures sur les documents ont été faites par les bons signataires ? Qu'une personne mal intentionnée n'a pas intercepté mon document ?"
---
::

:ppw-pdf-link{href="/documents/tholga_FA-1201d.pdf"}

![](/images/images_paf/tholga_FA-1201d.png)

::ppw-chat-conversation
---
conversation:
    - patrick: "Si je n'avais pas la plateforme VérifTonDoc pour la vérifier, je perdrais du temps et de l'argent car je serais obligé d'employer une personne ou de risquer une fraude. Dans cet exemple, on se rend compte immédiatement que cette PAF n'est pas conforme."
---
::

:ppw-checklist-result-static{path="/usage/check_result/paf_1201d"}

::ppw-chat-conversation
---
conversation:
    - valerie: "Prenons un autre cas d'usage, celui d'une demande de renseignements."
---
::

****

#### La Demande de Renseignements et la remise de justificatifs

![](https://media.paxpar.tech/Atelier_3-exp-compta.png)

::ppw-chat-conversation
---
conversation:
    - francoise: "Comment je suis sûre que ma DR est correcte après les nombreux allers-retours auprès de mon client ? Comment je peux contrôler que j'ai tout ce que j'ai demandé ? Les documents sont-ils conformes à mes attentes ?"
---
::

:ppw-pdf-link{href="/documents/DR_rj_20230630.pdf"}

![](/images/images_dr/DR_rj_20230630.png)

:ppw-checklist-result-static{path="/usage/check_result/dr_rj_20230630"}

::ppw-chat-conversation
---
conversation:
    - francoise: "Après avoir déposé mon PDF dans la dropzone sur la plateforme VérifTonDoc, je constate que la checklist comptabilise tous les documents contenus dans le document maitre et effectue des contrôles  même dans les pièces jointes. Je suis assurée que ma RJ est conforme à mes DR envoyées au préalable."
---
::

::ppw-chat-conversation
---
conversation:
    - valerie: "Prenons un autre cas d'usage, celui d'une lettre de mise en demeure."
---
::

****

#### La Mise en Demeure

![](https://media.paxpar.tech/Atelier_4-huissier.png)

::ppw-chat-conversation
---
conversation:
    - nadege: "Je dois rédiger une Mise en Demeure pour un client. Comment je suis sûre que mon document sera cohérent avec les 2 lettres de relances qui ont été envoyées au préalable ? Est-ce que j'ai bien tous les documents ? Est-ce que les factures sont conformes au format factur-X ?"
---
::

:ppw-pdf-link{href="/documents/med_M1_date.pdf"}

![](/images/images_med/med_M1.png)

::ppw-chat-conversation
---
conversation:
    - nadege: "Quand je dépose mon document maitre dans la dropzone sur la plateforme VérifTonDoc, la checklist m'indique immédiatement s'il est conforme ou pas. Dans ce cas, heureusement que j'ai un moyen de vérifier car ma MeD n'est pas conforme."
---
::

:ppw-checklist-result-static{path="/usage/check_result/med_m1_date"}

::ppw-chat-conversation
---
conversation:
    - valerie: "Prenons un autre cas d'usage, celui d'un ordre d'intervention pour un chantier sur une centrale nucléaire."
---
::

****

#### L'Ordre d'intervention et habilitations

![](https://media.paxpar.tech/Atelier_5-charge-d-affaire.png)

::ppw-chat-conversation
---
conversation:
    - patrickM: "Je dois établir un ordre de mission pour une prestation.Comment je sais si mes 3 ouvriers sont bien habilités pour rentrer sur le site ? Est-ce que leurs habilitations sont valides ? Est-ce que ce qui est valide aujourd'hui le sera encore dans 3 mois à la date de la prestation ?"
---
::

:ppw-pdf-link{href="/documents/attes_inter_edf_date.pdf"}

![](/images/images_attes/attes_inter_edf.png)

::ppw-chat-conversation
---
conversation:
    - patrickM: "Pour vérifier si je peux confier la mission aux 3 intervenants que je compte envoyer sur site, je dépose mon ordre d'intervention sur la plateforme VérifTonDoc."
---
::

:ppw-checklist-result-static{path="/usage/check_result/attes_inter_edf_date"}

::ppw-chat-conversation
---
conversation:
    - patrickM: "Mon ordre d'intervention n'est pas conforme, l'habilitation SCN2 (Savoir Commun du Nucléaire) de Paul ne sera plus valide à la date prévue de l'intervention. Il faut vite que je l'inscrive pour un recyclage."
---
::

::ppw-chat-conversation
---
conversation:
    - valerie: "Prenons un autre cas d'usage, celui d'un dossier final de diagnostics."
---
::

****
#### Dossier final de Diagnostics en prévision d'une vente immobilière

![](https://media.paxpar.tech/Atelier_6-resp-d-agence-immo.png)

::ppw-chat-conversation
---
conversation:
    - jeanL: "Un dossier de dignostic immobilier complet c'est un document de quelques pages récapitulatives en document maître et autant de documents en cascade que de constats nécéssaires : constat amiante, DPE, électricité et gaz, ERP...etc. Le dossier final regroupe des documents provenant de sources diverses. Comment avoir confiance en ce dossier final ? Je veux m'assurer que tous les rapports de diagnostic demandés sont bien présents et conformes aux contraintes réglementaires."
---
::

:ppw-pdf-link{href="/documents/diag_dossier_final.pdf"}

![](/images/images_diagbat/diag_dossier_final.png)

::ppw-chat-conversation
---
conversation:
    - valerie: "La valeur ajoutée lorsqu'on a des pdf augmentés, c'est qu'avec la plateforme VérifTonDoc, que cette vérification n'est qu'une formalité."
---
::

::ppw-chat-conversation
---
conversation:
    - valerie: "Prenons un autre cas d'usage, celui d'un contrat de réassurance."
---
::

****


#### La réassurance

![](https://media.paxpar.tech/Atelier_7-courtier-assur.png)

::ppw-chat-conversation
---
conversation:
    - thierry: "J'ai établi un rapport de contrat de réassurance pour une cédante incluant 12 réassureurs. Ce rapport contient en cascade les 12 contrats (1 pour chaque réassureur), ce qui peut engendrer une cinquantaine de signatures et des centaines de pages. Ma problèmatique ce sont les signatures apposées sur le rapport ainsi que sur tous les contrats associés : Comment je m'assure que tous les documents sont signés ? Que ce sont les signataires habilités ?"
---
::

::ppw-chat-conversation
---
conversation:
    - valerie: "Prenons un autre cas d'usage, celui d'une fiche d'évaluation de sinistre."
---
::

****
#### La fiche d'évaluation sinistre

![](https://media.paxpar.tech/Atelier_8-spe-assu-sinistre.png)

::ppw-chat-conversation
---
conversation:
    - zina: "Je dois faire une mise à jour de la fiche d'évaluation d'une victime accidentée en 2018. Ma problèmatique est de m'assurer d'avoir tous les éléments en ma possession pour la compléter : les dernières expertises, rapports d'analyses, etc..."
---
::

****

## Animation

::ppw-chat-conversation
---
conversation:
    - francoise: "Merci Valérie, pour cette présentation. C’était parfait. J’espère que cette présentation fait écho à vos problématiques du quotidien liées bien entendu à votre gestion documentaire. Je souhaiterai juste apporter quelques précisions en terme de volumétrie car souvent on nous pose la question : vos documents PDF augmentés, c'est trés bien, mais à combien estimez-vous la taille d'un tel document ?. Je vous propose donc de poursuivre avec une petite animation de 2mn qui vous montre des indicateurs spécifiques à nos cas d'usage."
---
::

::ppw-anim
---
href: "https://media.paxpar.tech/vtd_doc-contr_pdf-augm5.svg"
---
::

## Questions

Si je veux constituer un dossier qui comporte une multitude de documents avec des extensions différentes, est-ce que je peux le faire avec la plateforme ?

    oui, la plateforme VérifTonDoc a une fonction de génération de document, je peux vous montrer comment générer une Piste d'Audit Fiable par exemple.
    - dépôt de la facture qui devient sert de document maître
    - dépôt du BC et du BL qui sont placés en annexe
    - apposition d'un certificat de signature ChamberSign à la fin du processus de génération de la PAF


A quoi sert un certificat dans l’opération de signature électronique ? et pourquoi c’est mieux un certificat ChamberSign qu’une signature Docusign dans verifTonDoc ?

    Le certificat contient l'qui identité du signataire et permets de générer la signature. Il contient également un lien vers le certificat de l'autorité qui délivre le certificat. Chaque autorité utilise des méthodes différentes pour authentifier le signataire. Certaine génère un certificat différent pour chaque signature. ChamberSign génère un certificat unique avec une authentification du signataire plus forte que Docusign.

Combien de temps faut-il pour mettre en place une vérification de conformité documentaire au sein de mon entreprise ?

    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX réponse à formuler xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

## Vidéo du replay