---
model: verif_scenario
lang: fr
image: https://media.paxpar.tech/1377-invoice_small.svg
title: Confiance en votre PAF
description: Avoir la garantie que votre dossier PAF est complet et conforme à la réglementation -  📖 
createdAt: 2023-06-20
aside: false
---

# PAF
https://media.paxpar.tech/PAF_cas-u3-768x456.png

## Contexte - Pas d'anomalie

L'institut de beauté CYBEAU (client) commande des produits cosmétiques à THOLGA (fournisseur), société d'algues marines.
CYBEAU envoie un bon de commande signé par Peggy Moine (PM) - responsable Client, au service achat de THOLGA.
Zina Doucet (ZD) - responsable achat de THOLGA - signe à réception le bon de commande (BC) et donne l'ordre d'exécuter cette commande.
THOLGA prépare la livraison.
Zina génére le bon de livraison (BL) et le signe.
Peggy reçoit la livraison,  contresigne le BL et le renvoie à ZIna.
Zina génére et signe la facture (FA).
Zina créé le dossier PAF comprenant : FA, BC, BL, le signe.
Zina vérifie sous paxpar que tout est conforme (avant l'envoi de la facture).
Peggy, à réception du PAF, vérifie sa conformité avant de payer la facture.

::ppw-showcase-check
---
pdfs:
  - url: "/documents/tholga_FA-1201b.pdf"  
    check_result: "/_usage/check_result/paf_1201b"    
    name: "Facture Tholga_FA1201b"
---
::    

### série
### atelier : 202302 /

## Anomalie : Dossier de piste d'audit fiable incomplet : il manque le bon de livraison

L'institut de beauté CYBEAU (client) commande des produits cosmétiques à THOLGA (fournisseur), société d'algues marines.
CYBEAU envoie un bon de commande signé par Peggy Moine (PM) - responsable Client, au service achat de THOLGA.
Zina Doucet (ZD) - responsable achat de THOLGA - signe à réception le bon de commande (BC) et donne l'ordre d'exécuter cette commande.
THOLGA prépare la livraison.
Zina génére le bon de livraison (BL) et le signe.
Peggy reçoit la livraison,  contresigne le BL et le renvoie à ZIna.
Zina génére et signe la facture (FA).
Zina créé le dossier PAF comprenant : FA, BC, en omettant d'attacher le BL.
Zina vérifie sous paxpar que tout est conforme (avant l'envoi de la facture) : 
- paxpar lui indique qu'il manque le bon de livraison (BL).
- paxpar signale que tous les points de comparaison de données entre les différents documents et le BL sont rouge (comparaison des données impossible puisque le BL est manquant) 

::ppw-showcase-check
---
pdfs:
  - url: "/documents/tholga_FA-1201c.pdf"
    check_result: "/blog/2023/06/_cl_paf_1201c"           
    name: "Facture Tholga_FA1201c"
---
::

### série
### atelier :

## Anomalie / Fraude : Le client modifie volontairement la quantité des produits livrés. Cette modification casse la signature initialement appliquée par l'entreprise Tholga. Le client décide d'imiter la signature électronique.

L'institut de beauté CYBEAU (client) commande des produits cosmétiques à THOLGA (fournisseur),  société d'algues marines.
CYBEAU envoie un bon de commande signé par Peggy Moine (PM) - responsable Client, au service achat de THOLGA.
Zina Doucet (ZD) - responsable achat de THOLGA - signe à réception le bon de commande (BC) et donne l'ordre d'exécuter cette commande.
THOLGA prépare la livraison.
Zina génére le bon de livraison (BL) et le signe.
Peggy reçoit la livraison, signe le BL. 
Peggy renvoie ce BL à ZIna.
 
Zina génére et signe la facture (FA).
Zina créé le dossier/fichier PAF comprenant : FA, BC, et BL.
Zina envoie le fichier PAF à Peggy.

Peggy modifie volontairement la quantité des produits livrés sur le BL,  cette action casse la signature de Zina. 
Peggy contrefait la signature de Zina sur le BL, signe à nouveau le BL en son nom propre.
Peggy contrefait la signature de Zina sur la FA.

Peggy indique à Zina qu'elle ne réglera la facture qu'à réception des produits manquants . 

Zina vérifie sous paxpar le fichier PAF envoyé par Peggy avant de procéder à une nouvelle livraison.
- paxpar lui indique que sa clé publique est non vérifiée et détecte la quantité modifiée sur le bon de livraison.
Zina dépose le BL dans paxpar 
- paxpar lui indique que sa clé publique est également non-vérifiée sur le BL

Usurpation d'identité détectée.

::ppw-showcase-check
---
pdfs:
  - url: "/documents/tholga_FA-1201d.pdf"  
    check_result: "/blog/2023/06/_cl_paf_1201d"    
    name: "Facture Tholga_FA1201d"
---
::

### série
### atelier : 202302 / 202304

## Anomalie : Le montant total de la facture reste inchangée. Mais une erreur s'est glissée sur la quantité et le prix ne correspond pas aux quantités et aux coûts d'origine, sur le BL et le FA.

L'institut de beauté CYBEAU (client) commande des produits cosmétiques à THOLGA (fournisseur), société d'algues marines.
CYBEAU envoie un bon de commande signé par Peggy Moine (PM) - responsable Client, au service achat de THOLGA.
Zina Doucet (ZD) - responsable achat de THOLGA - signe à réception le bon de commande (BC) et donne l'ordre d'exécuter cette commande.
THOLGA prépare la livraison.
Zina génére le bon de livraison (BL) en modifiant la quantité du produit [DERMA] ainsi que son prix  et le signe.
Peggy reçoit la livraison,  contresigne le BL et le renvoie à ZIna.
Zina génére la facture (FA) sur la base du BL et la signe..
Zina créé le dossier PAF comprenant : FA, BC, et BL
Peggy, à réception du dossier PAF, vérifie sa conformité avant paiement.  paxpar lui indique dans la rubrique "Bon de commande associé" qu'une erreur s'est glissée sur le produit DERMA

::ppw-showcase-check
---
pdfs:
  - url: "/documents/tholga_FA-1202b.pdf"  
    check_result: "/blog/2023/06/_cl_paf_1202b"    
    name: "Facture Tholga_FA1202b"
---
::

### série
### atelier :

## Anomalie : La livraison est initialement prévue en Chine (ce qui signifie que le taux de TVA est à 0), puis au dernier moment, il est demandé à ce que la livraison soit faite en France (le taux de TVA à appliquer est donc défini par la réglementation française). Or le bon de livraison et la facture ont été édités donc le taux de TVA reste à 0.

L'institut de beauté KOLEE (client CN) commande des produits cosmétiques à THOLGA (fournisseur), société d'algues marines.
KOLEE envoie un bon de commande signé par Jacques Chang (JC) - responsable Client, destiné au service achat de THOLGA.
Zina Doucet (ZD) - responsable achat de THOLGA - signe à réception le bon de commande (BC) et donne l'ordre d'exécuter cette commande.
THOLGA prépare la livraison.
Zina génére le bon de livraison (BL) en indiquant que la livraison doit se faire en CHINE.
Avant la livraison, Jacques indique à Zina que la livraison a lieu finalement  en FRANCE.
Zina modifie l'adresse de livraison et signe le BL.
Jacques reçoit la livraison, contresigne le BL et le renvoie à Zina.
Zina génére la facture (FA) sur la base du BC, associe le BL et la signe..
Zina créé le dossier PAF comprenant : FA, BC et BL. Elle a un doute sur la conformité réglementaire de son dossier, donc elle le dépose sur paxpar qui lui indique le risque lié à la TVA.

::ppw-showcase-check
---
pdfs:
  - url: "/documents/tholga_FA-1203b.pdf"  
    check_result: "/blog/2023/06/_cl_paf_1203b"    
    name: "Facture Tholga_FA1203b"
---
::

### série
### atelier :

## Anomalie : Lors de la livraison chez le client, le produit livré n'a pas les références du produit attendu.

L'institut de beauté CYBEAU (client) commande des produits cosmétiques à THOLGA (fournisseur), société d'algues marines.
CYBEAU envoie un bon de commande signé par Peggy Moine (PM) - responsable Client, au service achat de THOLGA.
Zina Doucet (ZD) - responsable achat de THOLGA - signe à réception le bon de commande (BC) et donne l'ordre d'exécuter cette commande.
THOLGA prépare la livraison, en remplacant le produit DERMA ayant la référence HYTOI234 par un autre produit de référence : HYTOI233.
Zina génére le bon de livraison (BL) correspondant à la livraison et le signe.
Peggy reçoit la livraison,  contresigne le BL dans l'urgence et le renvoie à ZIna.
Zina génére et signe la facture (FA).
Zina créé le dossier PAF comprenant : FA, BC, BL, le signe.
Peggy, à réception du PAF, vérifie sa conformité avant de payer la facture. paxpar lui indique que la référence du produit DERMA est erronée.

::ppw-showcase-check
---
pdfs:
  - url: "/documents/tholga_FA-1201e.pdf"  
    check_result: "/blog/2023/06/_cl_paf_1201e"   
    name: "Facture Tholga_FA1201e"
---
::

### série
### atelier :

# PAF Qualité

## Recherche spécifique : La facture comprend un produit "DERMA", il doit donc y a voir une analyse laboratoire du produit concerné en pièce jointe.

L'institut de beauté CYBEAU (client) commande des produits cosmétiques à THOLGA (fournisseur), société d'algues marines.
Le service Qualité de Cybeau  exige que la feuille d'analyses laboratoire pour les produits de la gamme DERMA soit jointe à la facture.
Zina Doucet (ZD) - responsable achat de THOLGA - valide la facture en signant et s'assure que la feuille d'analyses laboratoire soit bien jointe à la facture.

Peggy, à réception de la facture, vérifie sa conformité vis à vis du service Qualité avant de payer la facture.
paxpar lui indique que la feuille d'analyses laboratoire est bien jointe.

::ppw-showcase-check
---
pdfs:
  - url: "/documents/tholga_FA-1301.pdf"  
    check_result: "/blog/2023/06/_cl_paf_1301"    
    name: "Facture Tholga_FA1301"
---
::

### série
### atelier :

## Recherche spécifique : La facture est à destination d'un client en Chine ("CN"), il doit donc y a voir en pièce jointe une photo du colis prêt à être expédié.

L'institut de beauté KOLEE (client) commande des produits cosmétiques à THOLGA (fournisseur), société d'algues marines.
Le service Expédition de KOLEE  exige qu' une photo du colis avant envoi  soit jointe à la facture.
Zina Doucet (ZD) - responsable achat de THOLGA - valide la facture en signant et s'assure que la photo soit bien jointe à la facture.

Jacques, à réception de la facture, vérifie sa conformité vis à vis du service Expédition avant de payer la facture.
paxpar lui indique que la photo est bien jointe.

::ppw-showcase-check
---
pdfs:
  - url: "/documents/tholga_FA-1302.pdf"  
    check_result: "/blog/2023/06/_cl_paf_1302"   
    name: "Facture Tholga_FA1302"
---
::

### série
### atelier :

## Recherche spécifique : La facture comprend un produit "DERMA" et est à destination d'un client en Chine ("CN"), il doit donc y avoir deux éléments en pièce jointe : une analyse laboratoire du produit concerné ET une photo du colis prêt à être expédié.

L'institut de beauté KOLEE (client) commande des produits cosmétiques à THOLGA (fournisseur), société d'algues marines.
Le service Qualité de KOLEE exige que la feuille d'analyses laboratoire pour les produits de la gamme DERMA soit jointe à la facture.
Le service Expédition de KOLEE exige qu'une photo du colis avant envoi soit jointe à la facture.
Zina Doucet (ZD) - responsable achat de THOLGA - valide la facture en signant et s'assure que la feuille d'analyses laboratoire et la photo du colis soient bien jointes à la facture.

Jacques, à réception de la facture, vérifie sa conformité vis à vis du service Qualité et du service Expédition avant de payer la facture.
paxpar lui indique que la feuille d'analyses est bien jointe (métadonnées consultables) ainsi que la photo.

::ppw-showcase-check
---
pdfs:
  - url: "/documents/tholga_FA-1303.pdf"  
    check_result: "/blog/2023/06/_cl_paf_1303"    
    name: "Facture Tholga_FA1303"
---
::

### série
### atelier :

## Contexte - Pas d'Anomalie : sans analuyse labo ni photo requise.

L'institut de beauté CYBEAU (client) commande des produits cosmétiques à THOLGA (fournisseur), société d'algues marines.
Des analyses laboratoire doivent être jointe à la facture pour les produits de la gamme DERMA.
Des photos doivent être jointes à la facture pour un client non FR.
Zina Doucet (ZD), responsable achat de THOLGA valide la facture en signant et l'envoie au client

Peggy, à réception de la facture, vérifie sa conformité vis à vis du service Qualité et du service Expédition avant de payer la facture.
paxpar lui indique que la facture est correcte car le produit DERMA n'a pas été commandé et le client est FR.

::ppw-showcase-check
---
pdfs:
  - url: "/documents/tholga_FA-1304.pdf"  
    check_result: "/blog/2023/06/_cl_paf_1304"     
    name: "Facture Tholga_FA1304"
---
::

### série
### atelier :

## Anomalie : analyse labo requise car produit DERMA mais manquante

L'institut de beauté CYBEAU (client) commande des produits cosmétiques à THOLGA (fournisseur), société d'algues marines.
Le service Qualité de Cybeau  exige que la feuille des analyses laboratoire pour les produits de la gamme DERMA soit jointe à la facture.
Zina Doucet (ZD) - responsable achat de THOLGA - valide la facture en signant et oubli d'attacher la feuille d'analyses laboratoire.

Peggy, à réception de la facture, vérifie sa conformité vis à vis du service Qualité et du service Expédition avant de payer la facture.
paxpar lui indique que la feuille d'analyses du produit DERMA est manquante.

::ppw-showcase-check
---
pdfs:
  - url: "/documents/tholga_FA-1301a.pdf"  
    check_result: "/blog/2023/06/_cl_paf_1301a"    
    name: "Facture Tholga_FA1301a"
---
::

### série
### atelier :

## Anomalie : photos requises car destinataire Chine mais falsifiées

L'institut de beauté KOLEE (client) commande des produits cosmétiques à THOLGA (fournisseur), société d'algues marines.
Le service Qualité de KOLEE exige que la feuille des analyses laboratoire pour les produits de la gamme DERMA soit jointe à la facture.
Le service Expédition de KOLEE exige qu'une photo du colis avant envoi soit jointe à la facture.
Zina Doucet (ZD), responsable achat de THOLGA valide la facture en signant et s'assure que la feuille d'analyses laboratoire ainsi que la photo soit bien jointes à la facture.
Jacques à réception de la facture remplace la photo d'origine par une photo où le colis est abimé, il usurpe la signature de Zina sur la facture 
Il renvoie la facture à Zina et réclame une réduction au niveau du paiement. 

Zina, à réception de la facture, vérifie sa conformité, paxpar lui indique que les méta données de la photo sont douteuses (comparaison de la date d'expédition et de la date de retouche de la photo)
Paxpar indique également que la signature de Zina ne contient pas sa clé publique.

::ppw-showcase-check
---
pdfs:
  - url: "/documents/tholga_FA-1303b.pdf"  
    check_result: "/blog/2023/06/_cl_paf_1303b"     
    name: "Facture Tholga_FA1303b"
---
::

### série
### atelier :

## Feuille d'analyses conforme

L'institut de beauté CYBEAU (client) commande des produits cosmétiques à THOLGA (fournisseur), société d'algues marines.
Le service Qualité de Cybeau  exige que la feuille d'analyses laboratoire pour les produits de la gamme DERMA soit jointe à la facture.
Zina Doucet (ZD) - responsable achat de THOLGA - valide la facture en signant et s'assure que la feuille d'analyses laboratoire soit bien jointe à la facture.

Peggy, à réception de la facture, vérifie sa conformité vis à vis du service Qualité avant de payer la facture.
paxpar lui indique que la feuille d'analyses laboratoire est bien jointe et que les analyses sont conformes aux spécifications définies.

::ppw-showcase-check
---
pdfs:
  - url: "/documents/tholga_FA-1401.pdf"  
    check_result: "/blog/2023/06/_cl_paf_1201c"     
    name: "Facture Tholga_FA1401"
---
::

### série
### atelier :

## Feuille d'analyses non conforme et Zina signe sans s'en rendre compte

L'institut de beauté CYBEAU (client) commande des produits cosmétiques à THOLGA (fournisseur), société d'algues marines.
Le service Qualité de Cybeau  exige que la feuille d'analyses laboratoire pour les produits de la gamme DERMA soit jointe à la facture.
Zina Doucet (ZD) - responsable achat de THOLGA - valide la facture en signant et s'assure que la feuille d'analyses laboratoire soit bien jointe à la facture.

Peggy, à réception de la facture, vérifie sa conformité vis à vis du service Qualité avant de payer la facture.
paxpar lui indique que la feuille d'analyses laboratoire est bien jointe
MAIS que certaines valeurs renseignées dans les analyses ne sont PAS conformes aux spécifications définies.

::ppw-showcase-check
---
pdfs:
  - url: "/documents/tholga_FA-1401b.pdf"  
    check_result: "/blog/2023/06/_cl_paf_1201c"     
    name: "Facture Tholga_FA1401b"
---
::

### série
### atelier :