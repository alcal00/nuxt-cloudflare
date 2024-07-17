---
title: Mise en demeure
description: "Les 10 éléments obligatoires pour une mise en demeure valide."
image:
  src: https://media.paxpar.tech/pp_blog_med_FEC_brooke-cagle-tLG2hcpITZE-unsplash.png
authors:
  - name: Valérie SUIGNARD
    avatar:
      src: /avatar/valerie.png
      target: _blank
    to: https://www.linkedin.com/in/valerie-suignard/
date: 2022-05-27
---

# Comment consolider ma mise en demeure grâce à mon fichier FEC ?

## Les mises en demeure complexes
La majorité des mise en demeure ne concernent qu’une ou deux factures qui sont intégralement dues. Certaines peuvent être beaucoup plus complexes avec de multiples factures mais surtout des paiements partiels.

L’exactitude de la créance (c’est à dire le détail de ce qui est réellement dû pour chaque facture) va jouer sur sa crédibilité et donc sa recevabilité.

Il serait fort dommageable de relancer le paiement d’une créance qui serait déjà en partie réglée !! Pour cela, il est impératif de s’assurer que la liste des factures

est bien exhaustive (et exacte !)
et que les paiements partiels effectués à date ont bien été déduits des montants facturés.
Ce calcul peut être fastidieux mais surtout source d’erreurs qui entacheraient l’ensemble de la démarche.

## La consolidation comptable
La source de vérité pour ce calcul est la situation comptable du compte client concerné. Cet extrait de compte permet d’obtenir de façon non équivoque la liste des factures et leur état de paiement.

## Le format FEC
Cette extraction comptable au format FEC (version liée à l’article A47 A-1 du livre des procédures fiscales[1] permet d’utiliser toutes les applications comptables conformes au marché Français )
Le contenu du fichier FEC ? Votre fichier comptable reprend les données comptables de votre système informatisé. Pour que votre FEC soit valable, il faut qu’il comporte 18 colonnes, lesquelles sont les suivantes - dans cet ordre :

1. Le code journal de l’écriture comptable ;
2. Le libellé journal de l’écriture comptable ;
3. Le numéro sur une séquence continue de l’écriture comptable ;
4. La date de comptabilisation de l’écriture comptable ;
5. Le numéro de compte, dont les trois premiers caractères doivent correspondre à des chiffres respectant les normes du plan comptable français ;
6. Le libellé de compte, conformément à la nomenclature du plan comptable français ;
7. Le numéro de compte auxiliaire (à blanc si non utilisé) ;
8. Le libellé de compte auxiliaire (à blanc si non utilisé) ;
9. La référence de la pièce justificative ;
10. La date de la pièce justificative ;
11. Le libellé de l’écriture comptable ;
12. Le montant au débit ;
13. Le montant au crédit ;
14. Le lettrage de l’écriture comptable (à blanc si non utilisé) ;
15. La date de lettrage (à blanc si non utilisé) ;
16. La date de validation de l’écriture comptable ;
17. Le montant en devise (à blanc si non utilisé) ;
18. L’identifiant de la devise (à blanc si non utilisé).

## Le "Glisser - Déposer"
Ce fichier FEC est tout simplement déposé lors de la construction de la mise en demeure (ou des relances) avec les factures originales.

La plateforme paxpar va pouvoir consolider les informations comptables, avec les factures déposées et construire le tableau de créance, de façon entièrement automatique (sans risque d’erreur ou d’oubli).

## L'évolution sur les relances suivantes
L’intégration de la situation comptable est pertinente lors d’une première relance pour faciliter la constitution du tableau de créances initial. Mais cette intégration est encore plus pertinente lors de la deuxième relance et de la mise en demeure. En effet, il est fort probable que la situation de la créance client évolue, même légèrement, entre 2 relances. Il est impératif de tenir compte de cette évolution sous peine de décrédibiliser la démarche.

Intégrer les nouveaux paiements réalisés sur la période, ainsi que les nouvelles factures est indispensable. Cette opération peut s’avérer délicate car la moindre erreur peut être exploitée à vos dépens.

Grâce à paxpar, il suffit de déposer un nouvel export FEC du même compte client mais à la date de la relance : les évolutions (nouvelles factures, règlements, …) seront automatiquement intégrées dans le tableau de créances.

## Conception d’un Tableau de créances joint à votre relance
Le tableau de créances comprend 6 colonnes :

Le numéro de facture
La date d’émission et date d’échéance de chaque facture
Si les pièces justificatives sont jointes au courrier ou non (Le tableau de créance conçu par paxpar vous l’indique clairement)
Le récapitulatif des montants facturés et des montants réglés
Le restant dû 
Les remarques éventuelles
En cas de paiement d’une facture, vous pouvez directement le voir sur le tableau :

Pour chaque facture, si le montant réglé est égal au montant facturé, alors le montant dû indique 0€.
Si le montant est partiellement réglé pour une ou plusieurs factures, alors le montant dû affiché est la somme restante à régler pour chaque facture concernée.

## Exemple 1ère relance
Voici par exemple le tableau de créances d’une 1ère relance généré par paxpar après dépôt des factures FA 1807-0993, et FA 1902-1056 au format PDF Factur-X, avec un total de 818,40€ :



Rien ne permet de savoir à ce stade si la liste des factures est complète et si l’une d’elle n’a pas fait l’objet d’un paiement partiel. Si on dépose le fichier FEC, on obtient alors le tableau de créances suivant :

On voit ici qu’il manque la facture FA 1809-0999 pour un total de 2 893,20€.


Après dépôt de la facture FA 1809-0999, on obtient le tableau de créances final de la première relance avec un total dû de 2 893,20€ :



Voici le PDF finalisé correspondant à cette première relance :



## Exemple 2ème relance
Quelques semaines plus tard, le créancier n’a toujours pas été intégralement réglé. Une deuxième relance doit être émise. Il suffit de déposer la 1ère relance pour préparer la 2ème relance avec le tableau de créance inchangé :



Le client ayant réalisé un règlement partiel de sa créance, on exporte un fichier FEC actualisé du logiciel de comptabilité et on le dépose. Le tableau de créance de la 2ème relance se met à jour ainsi :



On voit que le montant dû de la facture FA 1902-1056 est passé de 244,80€ à 0,00€.

Voici le PDF finalisé correspondant à cette deuxième relance



 
 
 
 
 
 
 
 
## Exemple Mise en demeure
Quelques semaines plus tard, le créancier n’étant toujours pas payé, sollicite un huissier pour effectuer une mise en demeure.

Il lui transmet le PDF de la deuxième relance. L’huissier peut alors consulter dans ce PDF le tableau de créances. Il y trouve également l’ensemble des factures PDF au format Factur-X ainsi que les 2 fichier FEC utilisés pour les 2 premières relances. Il a ainsi toutes les pièces à disposition pour s’assurer de la bonne foi du demandeur et de l’exhaustivité et de l’intégrité des pièces fournies.

La présence des fichiers FEC lui permet de vérifier que les sommes demandées sont bien en rapport avec la situation comptable du débiteur.

L’ensemble de ces vérifications relatives aux fichiers FEC est réalisable sur paxpar en y déposant le fichier PDF de la 2ème relance.

## Conclusion sur l’intérêt des fichiers FEC
Le fichier FEC est à l’origine un fichier d’échange d’écritures comptables mais son intérêt va bien au delà de la comptabilité. 

Nous voyons ici, dans le cas de la mise en demeure, qu’il peut aider à justifier le montant demandé en regard de la situation comptable. Cette justification est bien souvent absente des relances classiques et est souvent un point contesté par le débiteur. Joindre et consolider les données d’un fichier FEC avec les données des factures, de façon automatisée, renforce grandement la démarche de relance et réduit considérablement les possibilités de contestation.

## Références
[1]: https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000027804775/
