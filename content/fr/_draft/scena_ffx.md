---
model: verif_scenario
lang: fr
image: https://media.paxpar.tech/755-invoice-receipt-validating-ticket_small.svg
title: Confiance en votre facture électronique
description: Vérifier que vos factures (fournisseur/client) sont conformes à la réglementation FFX - 📖
createdAt: 2023-06-23
aside: false
---

# FFX

## Mise en situation
::ppw-anim
---
href: "https://media.paxpar.tech/pp_FX_demo_invoice_iban.svg"
no-controls: true
---
::

## Contexte - Pas d'Anomalie : Une facture au format PDF factur-x conforme à la réglementation qui entre en vigueur. Le fichier PDF contient bien une pièce jointe factur-x.xml contenant les données de la facture.

La société TOTAL émet une facture  à Carrefour. Cette facture est conforme à la réglementation factur-X.
Guillaume Petit, représentant de TOTAL, signe la facture via une procédure de signature ChamberSign.

Suite à de nombreuses fraudes répétitives, TOTAL met à disposition de ses clients  un portail de vérification de ses factures.
Carrefour décide alors d'utiliser ce service systématiquement et, qu'avant tout paiement, une vérification doit être effectuée sur le site paxpar.

À RÉCEPTION Carrefour dépose la facture sous paxpar qui lui indique que celle-ci est conforme au format factur-X et signée par la personne habilitée chez le fournisseur.

::ppw-showcase-check
---
pdfs:
  - url: "/documents/ffx_total_186_ok.pdf"  
    check_result: "/_usage/check_result/ffx_total_186_ok"    
    name: "Facture Total ffx_186"
---
:: 

### S01E01 / 
### atelier : 202304 / 202306 /

## Anomalie : Un tiers mal attentionné a intercepté une facture, a volontairement modifié l'IBAN. Pour le client il y a un risque de régler au mauvais tiers.

La société TOTAL émet une facture  à Carrefour. Cette facture est conforme à la réglementation factur-X.
La secrétaire de Guillaume Petit prépare la facture, la transmet par mail à Guillaume Petit.

Le pirate intercepte ce mail et modifie la valeur de l'IBAN dans le fichier factur-X.xml. 
Le pirate usurpe l'identité de Guillaume Petit et signe avec un PSC en utilisant le common name Guillaume Petit.
Le pirate renvoie la facture à la secrétaire en se faisant passer pour Guillaume.

La secrétaire vérifie la facture sous paxpar avant envoi au client Carrefour.
Paxpar lui indique que celle-ci est non conforme car la valeur de l'IBAN dans le fichier factur-X.xml ne correspond pas à l'IBAN de TOTAL et signale que la clé publique attendue n'est pas présente.

::ppw-showcase-check
---
pdfs:
  - url: "/documents/ffx_total_106_iban_ko.pdf"  
    check_result: "/_usage/check_result/ffx_total_106_ko"    
    name: "Facture Total ffx_106"
---
::

### S01E01 / 
### atelier : 202306 /

## Anomalie : Cette facture ne contient pas de métadonnée factur-X.

::ppw-showcase-check
---
pdfs:
  - url: "/documents/ffx_total_131_fx_ko.pdf"  
    check_result: "/_usage/check_result/ffx_total_131_fx_ko"    
    name: "Facture Total ffx_131"
---
::

### série  
### atelier : 202304 /

## Anomalie : Cette facture est bien une facture avec un fichier .xml, mais il manque des mentions obligatoires pour être au format factur-X.

Edouard Dupont reçoit une facture Total (signée par Guillaume Petit), il manque des mentions obligatoires dans les données xml : SIREN  de Total (fournisseur) et l'adresse du destinataire (client).

::ppw-showcase-check
---
pdfs:
  - url: "/documents/ffx_ed_186_02.pdf"
    check_result: "/blog/2023/06/_cl_ffx_total_02"   
    name: "Facture Total FA202302"
    conversation:
        - edouard: "La checklist m'indique qu'elle n'est pas au format factur-X" 
        - edouard: "Si je déroule, il manque des mentions obligatoires dans les métadonnées : le N° de SIREN de l'émetteur ainsi que mon adresse"
        - edouard: "Pourtant visuellement ça apparaît bien"        
        - edouard: "Je ne peux pas accepter cette facture"                  
---
:: 

### série  
### atelier : 

## Anomalie : Cette facture est bien au format factur-X mais la TVA appliquée n'est pas la bonne (TVA Portugal vs France).

Edouard Dupont reçoit une facture d'un fournisseur portugais (Buripanera), la TVA est à 23% au lieu des 0% applicable dans l'UE.

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

### S01E03
### atelier : 202306

## Anomalie : 

### série  
### atelier : 
