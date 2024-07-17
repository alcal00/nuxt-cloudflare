---
title: Audit Trail and Identity Theft?
description: A use case involving the detection of fraud
image:
  src: https://media.paxpar.tech/PAF-cas-u1-1170x694.png
authors:
  - name: Valérie SUIGNARD
    avatar:
      src: /avatar/valerie.png
      target: _blank
    to: https://www.linkedin.com/in/valerie-suignard/
date: 2022-10-31
---

# Audit Trail and Identity Theft? 2

## What is an Audit Trail (in a nutshell)?

Audit Trail means being aDNe to prove that an invoice corresponds to a genuine sale of a product or service, and that the flow is controlled and secured from end to end.

## Audit Trail, a use case involving the detection of fraud:
In summary: The customer deliberately changes the quantity of products delivered. This modification breaks the signature initially applied by the supplier company. The customer decides to forge the electronic signature on the Delivery Note and thus be able to demand that the "missing" items be sent.

### Audit trail and scenario, let's set the scene:
Let's imagine a beauty salon called CYBEAU (client). The shop manager, Peggy Moine, orders some of her salon’s flagship cosmetics. The current trend being for seaweed-based cosmetics, Peggy places her order with her supplier, the THOLGA seaweed company.
She signs the Purchase Order electronically and sends it to the Client Service Manager, Zina Doucet, at THOLGA's Purchasing Department.
Zina Doucet, THOLGA's Purchasing Manager, electronically signs the Purchase Order (PO) upon receipt and asks employees to prepare the corresponding delivery.

![Bon de commande](https://paxpar.tech/site/wp-content/uploads/2022/10/1201d-BC_peggy-zina-509x694.png)

THOLGA prepares the delivery, which is now ready to be sent over, so Zina crafts the Delivery Note (DN) and signs it. It doesn't take long for Peggy to receive the correct delivery. This delivery corresponds in every respect to the initial order... So she signs the delivery note in turn and sends it back to Zina.

![Bon de Livraison](https://paxpar.tech/site/wp-content/uploads/2022/10/1201d-BL_zina-peggy-507x694.png)

Zina crafts and signs the invoice (inv.). She crafts the Audit Trail file comprising : Inv. PO and DN (respectively FA for ‘facture’, BC for ‘Bon de Commande’, and BL for ‘Bon de livraison’ in French). She sends the Audit Trail file to Peggy.

## Audit trail and scenario, let's talk about fraud:

Peggy decides to keep a few products, so she takes some from the box that has just been delivered to her to resell under the table... She deliberately changes the quantity of products delivered on the Delivery Note, and this action ‘breaks’ Zina's electronic signature.
Never mind, Peggy forges Zina's signature on the Delivery Note. She then signs it again in her own name. This action unavoidably altered the signature Zina had affixed to the master PDF (the one for the invoice)... Peggy forges Zina's signature again on the invoice (inv. - ‘FA’) this time.
Peggy tells Zina that she will only sign the Audit Trail file electronically and pay the invoice when the "missing" products have been delivered to her, and sends the Audit Trail file back to Zina.
 
## Audit trail and verification of data in paxpar :

Zina looks at the pdf file Peggy sends her. To the naked eye, everything looks fine.

![facture pdf](https://paxpar.tech/site/wp-content/uploads/2022/10/1201b_1201d_comparaison.png)

Zina checks the electronic signatures in Adobe: everything is green.

![PDF](https://paxpar.tech/site/wp-content/uploads/2022/11/1201d_signature-usurpee-verte-dans-adobe-1100x694.png)
 
Zina drags and drops the pdf file that Peggy sends her in the dropzone of the paxpar platform.
Like adobe, paxpar indicates that electronic signatures are valid (and they are!). Peggy has used a perfectly legal and authentic means to sign). Paxpar goes even further, as the platform also analyses the electronic signatures of the embedded pdfs (PO and DN). The first checkpoint in the analysis is green, as the signatures are all valid electronic signatures.

![CheckList](https://paxpar.tech/site/wp-content/uploads/2022/10/1201d-module1_signature-OK-1100x694.png)

However, paxpar detects several anomalies:
paxpar compares the data entered on the 3 PO/DN/inv. documents and **therefore detects the modified quantity on the Delivery Note**.

![CheckList suite](https://paxpar.tech/site/wp-content/uploads/2022/10/1201d_qte-modif-detectee-1100x694.png)
 
Paxpar tells Zina that none of the signatures on the Delivery Note and invoice match her public key and that she is therefore not the author of these electronic signatures. The identity theft has been detected.

![CheckList fin](https://paxpar.tech/site/wp-content/uploads/2022/10/1201d_usurp-signature-detectee.png)
 
## Audit Trail and paxpar
The paxpar platform will enable you to check that your Audit Trail is

    - complete
    - and compliant with your business requirements.

### Global analysis of your invoice
paxpar analyses your self-sufficient PDF (i.e. paxpar analyses the invoice PDF file, as well as the attachments: Purchase Order and Delivery Note).

1. paxpar tells you if your invoice is a PDF/A, if it is a Factur-X format.
1. paxpar tells you the characteristics of your PDF file, whether it has attachments and whether it is electronically signed.
1. paxpar performs a recursive analysis of the attachments (so that you obtain the same information about the attachments).
1. paxpar shows you the number of electronic signatures and signatories,
1. paxpar displays the signature certificates.
1. paxpar reports any anomalies, in particular if the pdf file has been annotated after signing.


### Conformity analysis of your invoice
After an overall analysis of your invoice, paxpar carries out an analysis based on specific checks.

For the Audit Trail :

1. paxpar validates or invalidates the presence of the expected accounting documents;
1. paxpar extracts the supplier data;
1. paxpar extracts client data;
1. paxpar checks invoice conformity:
- paxpar ensures that the identification number on the invoice and its PO and DN is identical,
- paxpar ensures that the product references are identical on all parts,
- paxpar ensures VAT compliance,
- paxpar ensures that the delivery address given on the PO, DN and invoice is consistent.
1. paxpar compares the IBAN provided in the invoice data with the supplier IBAN in your management software;
1. paxpar has already checked whether or not the electronic signatures on the invoice are valid. If they are, then paxpar also checks that the signatures appended are those of the expected signatories, whether for your company or that of your supplier or client, by comparing the signatory's public keys, name and e-mail address.

As soon as paxpar detects an inconsistency, a red shield lights up, drawing your attention to it.



## A complete Audit trail that meets your business requirements?
Simply drag and drop and read the result in paxpar :

    - Audit Trail validated or
    - critical checks reported,

**It's as simple as that, all in one click.**
Come and try for yourself: click on Free trial.

or contact us at: **info@paxpar.tech**

