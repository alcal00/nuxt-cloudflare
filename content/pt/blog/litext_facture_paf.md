---
title: Faturas incorretas
description: "Acabei de receber uma fatura do meu fornecedor. Devo confiar neste documento?"
image:
  src: https://media.paxpar.tech/PAF_cas-u3-768x456.png
authors:
  - name: Francoise ENTZMANN
    avatar:
      src: https://github.com/phe.png
      target: _blank
    to: https://github.com/phe
date: 2024-02-13
---

# Trilha de auditoria confiável - fatura

A desmaterialização das faturas é hoje essencial e será aplicada gradualmente em todas as empresas, na sequência da implementação do artigo 56.º da lei das finanças entre 2023 e 2025. A esta desmaterialização das faturas, acrescenta-se a pista de auditoria fiável que visa rastrear a vida das faturas. uma fatura, acompanhada de todos os documentos que a envolvem. Por outras palavras, estabelecer uma pista de auditoria fiável significa ser capaz de justificar o percurso digital de uma fatura.

Para compreender melhor os potenciais riscos digitais ligados a este tipo de documento, iremos descrever-lhe um caso concreto, convidando-o a descobrir um cenário 


## Notre mise en situation
Imaginez que vous êtes Gérard, le responsable du magasin ConfectionStyle BOTY RUSCH (client). Vous commandez à votre fournisseur une commande du tissu à LITEXT (société de fabrique de tissus).
Vous envoyez directement un bon de commande à votre contact, qui est Alice, responsable Achat de chez LITEXT.
Alice signe à réception le bon de commande (BC) et donne l'ordre d'exécuter cette commande.

Dès l'instant où l'ordre est donné, une serie d'actions se déclenche que nous avons volontairement simplifié au maximum dans le cadre ci-dessous.

```
1. LITEXT prépare la livraison.
2. Alice génére le bon de livraison (BL) et le signe.
3. Gérard reçoit la livraison,  contresigne le BL et le renvoie à Alice.
4. Alice génére et signe la facture (FA).
5. Alice créé le dossier PAF comprenant : FA, BC, BL, le signe.
6. Alice vérifie sous paxpar que tout est conforme (avant l'envoi de la facture).
7. Gérard, à réception du PAF, vérifie sa conformité avant de payer la facture.
```

Suivi d'un échange téléphonique entre Gérard et Alice.

::ppw-chat-conversation
---
conversation:
    - thierry: "Bonjour Alice, tu as entendu parler de Check Your Fabric ?"
    - alice: "Oui, bien sûr. Pourquoi ?"
    - thierry: "Ah, je ne comprends pas trés bien l'apport de ce nouveau service."
    - alice: "Je vois, donnes moi 2 minutes pour te montrer les situations où il peut nous faire gagner du temps et éviter des litiges"
---
::

::ppw-chat-conversation
---
conversation:
    - alice: "Au départ, nous pensons tous obtenir systèmatiquement la bonne facture avec les bonnes pièces jointes. Pour en être sûre, je dépose mon fichier pdf sur le service CheckYourFabric et j'obtiens en un seul click, le résultat sous forme d'une checklist."
---
::

:ppw-pdf-link{href="/documents/litext_FA-1201b.pdf"}
:ppw-checklist-result-static{path="/usage/check_result/facturx_ok" mode="nonconformity"}

**** 

::ppw-chat-conversation
---
conversation:
    - alice: "Mais malheureusement, tout n'est pas si simple. Commençons par un cas évident : tu oublies de déposer le bon de livraison"
---
::
:ppw-pdf-link{href="/documents/litext_FA-1201c.pdf"}

::ppw-chat-conversation
---
conversation:
    - alice: "Si tu veux voir que les non conformités, il te suffit de le sélectionner et le tour est joué. Si tu veux connaitre le détail, cliques sur une des non conformités et de proche en proche, tu auras plus de détails."
---
::


:ppw-checklist-result-static{path="/usage/check_result/paf_1201c"}

****

::ppw-chat-conversation
---
conversation:
    - alice: "ou lors de la livraison chez le client, le produit livré n'a pas les références du produit attendu."
---
::
:ppw-pdf-link{href="/documents/litext_FA-1201e.pdf"}
:ppw-checklist-result-static{path="/usage/check_result/paf_1201e" mode="nonconformity"}

****

::ppw-chat-conversation
---
conversation:
    - alice: "On continue ?"
    - thierry: "Oui, cela commence à m'intéresser"
    - alice: "Imagines que le montant total de la facture reste inchangé. Mais une erreur s'est glissée sur la quantité et le prix ne correspond pas aux quantités et aux coûts d'origine, sur le BL et le FA."
---
::
:ppw-pdf-link{href="/documents/litext_FA-1202b.pdf"}
:ppw-checklist-result-static{path="/usage/check_result/paf_1202b" mode="nonconformity"}

****

::ppw-chat-conversation
---
conversation:
    - alice: "Maintenant, mets toi dans la peau du client, qui modifie volontairement la quantité des produits livrés. Cette modification casse la signature initialement appliquée par l'entreprise Tholga. Le client décide d'imiter la signature électronique."
    - thierry: "Là, je n'y avais pas pensé"
---
::
:ppw-pdf-link{href="/documents/litext_FA-1201d.pdf"}
:ppw-checklist-result-static{path="/usage/check_result/paf_1201d" mode="nonconformity"}

****

::ppw-chat-conversation
---
conversation:
    - alice: "Sinon, un cas plus fréquent : La livraison est initialement prévue en Chine (ce qui signifie que le taux de TVA est à 0), puis au dernier moment, il est demandé à ce que la livraison soit faite en France (le taux de TVA à appliquer est donc défini par la réglementation française). Or le bon de livraison et la facture ont été édités donc le taux de TVA reste à 0."
    - thierry: "Ah oui, je me souviens d'un cas similaire"
---
::
:ppw-pdf-link{href="/documents/litext_FA-1203b.pdf"}
:ppw-checklist-result-static{path="/usage/check_result/paf_1203b" mode="nonconformity"}

****

::ppw-chat-conversation
---
conversation:
    - alice: "Tu te souviens du cas où l'un des articles de la facture était un produit DERMA, nous devions fournir l'analyse de laboratoire du produit concerné en pièce jointe."
---
::
:ppw-pdf-link{href="/documents/litext_FA-1301.pdf"}
:ppw-checklist-result-static{path="/usage/check_result/paf_1301" mode="nonconformity"}

****

::ppw-chat-conversation
---
conversation:
    - thierry: "Oui tu as raison, ce fût trés compliqué de retrouver cette analyse d'ailleurs"
---
::
:ppw-pdf-link{href="/documents/litext_FA-1301a.pdf"}
:ppw-checklist-result-static{path="/usage/check_result/paf_1301a" mode="nonconformity"}

****

::ppw-chat-conversation
---
conversation:
    - thierry: "Oui, et le cas de la facture, à destination d'un client en Chine où l'on doit fournir en pièce jointe une photo du colis prêt à être expédié."
---
::
:ppw-pdf-link{href="/documents/litext_FA-1302.pdf"}
:ppw-checklist-result-static{path="/usage/check_result/paf_1302" mode="nonconformity"}

****

::ppw-chat-conversation
---
conversation:
    - alice: "Oui, bien vu, le cas de la facture qui comprend un produit DERMA **ET** est à destination d'un client en Chine. On doit donc fournir deux éléments en pièce jointe : une analyse laboratoire du produit concerné **ET** une photo du colis prêt à être expédié."
---
::
:ppw-pdf-link{href="/documents/litext_FA-1303.pdf"}
:ppw-checklist-result-static{path="/usage/check_result/paf_1303" mode="nonconformity"}

****

::ppw-chat-conversation
---
conversation:
    - alice: "Alors convaincu ?"
    - thierry: "Oui tout à fait. Je suis partant pour l'utiliser la prochaine fois. Je dois cliquer sur quel lien ?"
    - alice: "Sur : ![](https://uat.paxpar.tech/), à bientôt"
---
::

## Pour aller plus loin

Vous avez plusieurs possibilités :
- nous contacter directement sur notre page LinkedIn
- essayer gratuitement, en cliquant sur !(https://uat.paxpar.tech/) et en déposant les fichiers ci-dessus qui sont à votre disposition.

Nous sommes bien entendu à votre écoute.