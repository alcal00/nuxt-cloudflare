# Deep assert

How to build a checklist that contains deep asserts into the attached documents.

## Target document

TODO: link to litext_FA-1303.pdf

The target document `litext_FA-1303.pdf` is an invoice with an attached order and delivery note :
* The invoice follow the factur-x format (therefore contains a `factur-x.xml` file).
* The order follow the order-x format (therefore contains a `order-x.xml` file).
* The delivery note contains a loosely defined metadata file `meta.yaml`.

::ppw-viz
---
digraph: |    
    bgcolor="transparent"
    node [shape=none label=""]
    
    subgraph cluster1 {
        label="FAxxx.pdf"
        bgcolor="lightyellow"

        subgraph cluster2 {
            label="factur-x.xml"
            bgcolor="lightgreen"
            empty1;
        }

        subgraph cluster3 {
            label="BC.pdf"
            bgcolor="turquoise"
            empty2;

            subgraph cluster2 {
                label="order-x.xml"
                bgcolor="lightgreen"
                empty2.1;
            }
        }

        subgraph cluster4 {
            label="BL.pdf"
            bgcolor="turquoise"
            empty3;

            subgraph cluster2 {
                label="meta.yaml"
                bgcolor="lightgreen"
                empty3.1;
            }
        }
    }
---
::

## Checklist steps

* Ensure the order ID is the same in all 3 documents metadata
* More to come ...

```
assert root.metadata.x1.y1.z1 == root.attachments.bc_pdf.metadata.x2.y2.z2
assert root.metadata.x1.y1.z1 == root.attachments.bl_pdf.metadata.x3.y3.z3
```


## checklist wip

:ppw-checklist-result-static{path="/docs/checklist/check"}


## misc

Si on focalise sur le numéro de facture :
Pour la facture, fichier factur-x.xml, on a :

### BT-1 : NUM FACT

dict_data['rsm:CrossIndustryInvoice']['rsm:ExchangedDocument']['ram:ID'] = doc['id']

### BT-13: NUMCOMMANDE
NUMCOMMANDE = Buyer.BuyerOrderReferencedDocument.IssuerAssignedID = BC-001
dict_data['rsm:CrossIndustryInvoice']['rsm:SupplyChainTradeTransaction']['ram:ApplicableHeaderTradeAgreement']['ram:BuyerOrderReferencedDocument']['ram:IssuerAssignedID'] = doc['buyer']['buyer_order_document']['issuer_id']


Pour le bon de commande, on a :

### NUM du BC : BC-001
dict_data['rsm:SCRDMCCBDACIOMessageStructure']['rsm:ExchangedDocument']['ram:ID'] = doc['id']


Pour le bon de livraison, on a :

### num de préparation : 62374
num_confirmation