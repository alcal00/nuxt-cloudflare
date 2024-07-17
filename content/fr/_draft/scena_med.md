---
model: verif_scenario
lang: fr
image: https://media.paxpar.tech/961-email-marketing_small.svg
title: Confiance en vos courriers officiels
description: Vérifier par vous-même que le courrier de mise en demeure est conforme à la réglementation - 📖
createdAt: 2023-07
aside: false
---

## Mise en situation
::ppw-anim
---
href: "https://media.paxpar.tech/pp_FX_demo_invoice_iban.svg"
no-controls: true
---
::

## Contexte : pas d'annomalie. Mise en Demeure envoyée par huissier après la deuxième relance


Edouard Dupont, chauffagiste, est intervenu chez Hôtel 3 Etoiles pour diverses prestations.
Il a envoyé des factures au format facturx signées à son client.
H3E n'a pas réglé les factures malgré une première puis une deuxième relance.
ED confie l'envoi d'une lettre de mise en demeure à maître Nadège Martin, huissière.

NM dépose la lettre de med dans paxpar avant envoi à H3E.
paxpar indique que la lettre de med est conforme (signatures ok, pièces jointes ok, délais respectés...)

::ppw-showcase-check
---
pdfs:
  - url: "/documents/med_M1.pdf"  
    check_result: "/blog/2023/07/_cl_med_m01"  
    name: "Mise en Demeure_01"   
---
::

### série
### atelier :

## Anomalie : Mise en Demeure non valide car le délai entre les relances ou la MeD est trop court

Edouard Dupont, chauffagiste, est intervenu chez Hôtel 3 Etoiles pour diverses prestations.
Il a envoyé des factures au format facturx signées à son client.
H3E n'a pas réglé les factures malgré une première relance, puis une deuxième relance.
ED confie l'envoi d'une lettre de mise en demeure à maître Nadège Martin, huissière.

NM dépose la lettre de med dans paxpar avant envoi à H3E.
paxpar indique que la lettre de med n'est pas conforme (délais non-espectés entre la Deuxième lettre de relance et le présent courrier de MeD...)

::ppw-showcase-check
---
pdfs:
  - url: "/documents/med_M1_date.pdf"  
    check_result: "/blog/2023/07/_cl_med_m02"  
    name: "Mise en Demeure_02"   
---
::

### série
### atelier : 202304

## Anomalies : 
- Mise en Demeure incorrecte car il manque un pdf facture attaché à la MeD
- Le délai minimum entre la Relance1 et la Relance2 non respecté

Edouard Dupont, chauffagiste, est intervenu chez Hôtel 3 Etoiles pour diverses prestations.
Il a envoyé des factures au format facturx signées à son client.
H3E n'a pas réglé les factures malgré une première relance, puis une deuxième relance.
ED confie l'envoi d'une lettre de mise en demeure à maître Nadège Martin, huissière.

NM dépose la lettre de med dans paxpar avant envoi à H3E.
paxpar indique que la lettre de med n'est pas conforme (Facture #FA1902-1056 manquante)

::ppw-showcase-check
---
pdfs:
  - url: "/documents/med_M1_manq.pdf"  
    check_result: "/blog/2023/07/_cl_med_m03"  
    name: "Mise en Demeure_03"   
---
::

### série
### atelier :

## Anomalies : 
- Mise en Demeure non valide car le pdf courrier de relance 2 n'est pas adressé au destinataire de la MeD
- Le délai minimum entre la Relance1 et la Relance2 non respecté

Edouard Dupont, chauffagiste, est intervenu chez Hôtel 3 Etoiles pour diverses prestations.
Il a envoyé des factures au format facturx signées à son client.
H3E n'a pas réglé les factures malgré une première relance, puis une deuxième relance.
ED confie l'envoi d'une lettre de mise en demeure à maître Nadège Martin, huissière.

NM dépose la lettre de med dans paxpar avant envoi à H3E.
paxpar indique que la lettre de med n'est pas conforme (Destinataire "Hôtel des 3 montagnes" dans la 2ème relance au lieu de "Hôtel des 3 étoiles" tel qu'indiqué dans la 1ère relance et la MeD).

::ppw-showcase-check
---
pdfs:
  - url: "/documents/med_M1_dest.pdf"  
    check_result: "/blog/2023/07/_cl_med_m04"  
    name: "Mise en Demeure_04"   
---
::

### série
### atelier :

## Deuxième relance pour impayés : 4 scénarios 

Contexte commun aux 4 scénarios :
Edouard Dupont, chauffagiste, est intervenu chez Hôtel 3 Etoiles pour diverses prestations.
Il a envoyé des factures au format facturx signées à son client.
H3E n'a pas réglé les factures malgré une première relance.
ED souhaite envoyer une 2ème relance.
Il prépare son courrier de relance avec les pièces jointes.
Il vérifie dans paxpar que le courrier est conforme et prêt à être envoyé à son client.

**rel_P2-001.pdf DATE** : 
paxpar indique à ED que le délai entre la premère et la 2ème relance est respecté (179 jours).

### série
### atelier :

**rel_P2-002.pdf OK**
paxpar n'indique aucune non-conformité.
ED peut envoyer ce courrier à H3E.

### série
### atelier :

**rel_P2-003 DEST**
paxpar indique que le destinataire de la relnace 2 est différent de celui indiqué sur la relance 1. paxpar indique un délai trop court entre la relance1 et la Relance2

### série
### atelier :

**rel_P2-004.pdf MANQ**
paxpar indique qu'une des factures est manquante
paxpar indique un délai trop court entre la relance1 et la Relance2

::ppw-showcase-check
---
pdfs:
  - url: "/documents/med_M1.pdf"  
    check_result: "/blog/2023/07/_cl_med_model"  
    name: "Mise en Demeure_model"   
---
::

### série
### atelier :