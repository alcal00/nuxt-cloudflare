---
title: Je vérifie que ma facture est compatible Chorus Pro xxx
description: Atelier du 17 mai 2023
image: https://media.paxpar.tech/fx_template1.png
---

# Les attendus de Chorus Pro

## La réglementation en vigueur
A date, 18 mentions obligatoires doivent être respectés, dont le détail est fourni [ici](https://www.ploutos-origins.com/index.php/les-mentions-dune-facture-electronique/).

D'ici 2024, le nombre de mentions obligatoires passera de 18 à 19, puis en 2026 à 26 et enfin en 2028 à 34.

Le marché français :  c'est 97% des entreprises (toutes les TPE et micro-entreprises notamment) ont envoyé leurs factures via le portail Chorus Pro !

## Pitch - Scénario

Problématique : je suis gérant d'une TPE/PME, c'est ma secrétaire qui gère les aspects administratifs et moi j'assure le contact client, la satisfaction du client et le paiement.

Les journées ne faisant que 24h, je n'ai pas beaucoup de temps et la compétence suffisante pour suivre la réglementation en vigueur. C'est mon expert comptable qui m'informe sur ces évolutions en me précisant les mentions obligatoires à suivre.
Concrétement, comment je fais pour m'assurer que ma facture est bien conforme à la réglementation ? sans y passer mes soirées.

# Acteurs
Gérant en entreprise
Cabinet comptable Vodanes


# Mise en situation
A date, ma facture comprend les informations suivantes :
* nom du fournisseur
* adresse du fournisseur
* n° siret du fournisseur
* "n° de TVA intracommunautaire"
* nom du client
* adresse du client
* référence du client
* "type de facture"
* date d'émission de facture
* "date d'échéance de facture"
* "n° de facture"
* Description
* Prix unitaire HT
* Quantité 
* % TVA
* "Total HT"
* "Total TVA"
* Total TTC

## Le lien entre cette liste et les 18 mentions obligatoires ?


TODO : faire une conversation entre le gérant et son comptable pour avoir des explications sur ces mentions obligatoires


## Utilisation de la plateforme VerifTonDoc

En déposant votre facture sur ce site, vous vérifiez instantanément son contenu.

TODO : faire une maquette CL avec la liste des points de contrôle


Source OpenAi
Le profil basic du format factur-X est un format simplifié, qui inclut les 18 mentions obligatoires sur les factures électroniques, mais qui ne comporte pas toutes les fonctionnalités avancées de la norme factur-X, telles que la gestion des acomptes, les factures récapitulatives, etc. Le profil basic permet donc de transmettre des factures électroniques conformes aux exigences légales, mais avec une structure plus simple et plus légère que la norme factur-X complète.

Donc il faut vérifier que toute facture soit bien défini via le profil basic de Factur-X.

TODO : prévoir de le jouer en 2 temps
1ere étape - 17/05/23 : je définis avec les élements glanés sur Internet, en maquettant la checklist
1. je suis client d'un artisan et je veux vérifier la facture que je reçois
2. je suis une industrie textile, ERP Solin avec contrôle douanier (guigou)
3. je suis comptable, j'ai des clients et je voudrais mettre en place des contrôles spécialisés pour mes clients
contrôle global FEC et factures, relancer Victor sur l'exemple FEC ? 15 factures chinoises dont 2 livrées en France
audit : je suis CAC, je veux vérifier si le client fraude la TVA , échantillonage répétable,
pdf final : FEC de toutes les factures (1000), nb aléatoire : 25, avec 25 factures jointes (manque une, contrôle de TVA), avec un rapport.

2eme étape - 15/06/23 j'implémente la checklist

TODO : faire la maquette de la CL

A date, nous avons une checklist implémentée qui :

* Point de contrôle "Analyse PDF", on vérifie techniquement le format du fichier PDF, les signatures électroniques valides ou pas, allant jusqu'à la recherche de certificats.

* Point de contrôle "Facture au format factur-X", on vérifie le fichier joint xml, les basiles, en précisant le profil utilisé pour cette facture, en ayant également réalisé des tests sur les sites officiels pour valider cette conformité (site fnfe, site chorus pro)

* Points de contrôle métier, c'est à dire adaptés au SI de l'émetteur ou du récepteur de la facture
=> Fournisseur identifié : lien avec l'ERP pour voir l'existence
=> Client identifié : lien avec l'ERP pour voir l'existence
=> Conformité facture : lien avec le contrat lisible, lien avec la TVA du pays en vigueur, respect des délais de réglement, autres points si nécessaire.

::ppw-checklist-result-static
---
mode: nonconformity
result:
    id: root
    status: OK
    children:
    - id: step1
      name: Documents attendus
      icon: mdi:file-arrow-up-down-outline
      status: OK
      children:
        - id: sous-step1
          name: Transmis au client
          icon: "mdi:file-arrow-up-down-outline"
          status: KO
          children:
            - name: "1/7 : Confirmation of order"
              icon: "mdi:file-arrow-up-down-outline"
              status: OK
            - name: "5/7 : Packing list"
              icon: "mdi:file-arrow-up-down-outline"
              status: OK
            - name: "6/7 : Invoice"
              icon: "mdi:file-arrow-up-down-outline"
              status: OK
              children: 
                - name: Signatures attendues
                  icon: fluent:signature-16-regular
                  status: OK
            - name: "7/7 : Reçu"
              icon: "mdi:file-arrow-up-down-outline"
              status: OK
            - name: "Déclaration Douane Export"
              icon: "mdi:file-arrow-up-down-outline"
              status: OK
        - id: sous-step2
          name: Internes
          icon: "mdi:file-arrow-up-down-outline"
          status: OK
          children:    
            - name: "2/7 : Disposition sous-traitant"
              icon: "mdi:file-arrow-up-down-outline"
              status: OK
            - name: "3/7 : Disposition visite"
              icon: "mdi:file-arrow-up-down-outline"
              status: OK
            - name: "4/7 : Bon de préparation"
              icon: "mdi:file-arrow-up-down-outline"
              status: OK
    - id: step2
      name: Contrôles
      icon: mdi:magnify-remove-outline
      status: KO
      children:
        - name: Références Dossier
          status: OK
          children:
          - name: "N° Commande - 62718"
            status: OK
            children:
            - name: "Valeur '62718' dans Confirmation of order"
              status: OK
            - name: "Valeur 62718 dans le nom du fichier pdf"
              status: OK
            - name: "Valeur cohérente"
              status: OK
              children:
                  - name: "Nombre"
                    status: OK
                  - name: "5 chiffres"
                    status: OK
            - name: "Valeur identique dans Bon de préparation"
              status: OK
            - name: "Valeur identique dans Packing list"
              status: OK
            - name: "Valeur identique dans Invoice"
              status: OK
          - name: "N° Disposition ss - 1899"
            status: OK
            children:
            - name: "Valeur '1899' Disposition visite"
              status: OK
            - name: "Valeur 1899 dans le nom du fichier pdf"
              status: OK
          - name: N° Disposition visite - 1900
            status: OK
            children:
            - name: "Valeur '1900' Disposition visite"
              status: OK
            - name: "Valeur 1900 dans le nom du fichier pdf"
              status: OK
            - name: "Valeur '1900' Packing list"
              status: OK
          - name: N° Bon de confirmation - 62718
            status: OK
            children:
            - name: "Valeur '62718' Bon de confirmation"
              status: OK
            - name: "Valeur 62718 dans le nom du fichier pdf"
              status: OK
          - name: N° packing list - 16912
            icon: codicon:symbol-field
            status: OK
            children:
            - name: "Valeur '16912' packing list"
              status: OK
            - name: "Valeur 16912 dans le nom du fichier pdf"
              status: OK
          - name: N° Invoice - 50167
            icon: codicon:symbol-field
            status: OK
            children:
            - name: "Valeur '50167' invoice"
              status: OK
            - name: "Valeur 50167 dans le nom du fichier pdf"
              status: OK
        - name: Invoice - Incohérence N° client 1521 - 1632
          icon: la:file-invoice-dollar
          status: KO
          children:
          - name: N° Client - 1521 (Facturation)
            status: KO
            children:
            - name: Bon de confirmation - N° 1632
              status: KO
            - name: Packing list - N° 1632
              status: KO
            - name: Invoice - N° 1521
              status: KO
          - name: Adresse Facturation - HANGZHOU HS FASHION
            status: OK
            children:
            - name: Bon de confirmation - TORY BURCH
              status: OK
            - name: Packing list - HANGZHOU HS FASHION
              status: OK
            - name: Invoice - HANGZHOU HS FASHION
              status: OK
          - name: Taux de facturation
            status: OK
          - name: Contact Facturation - CAROL DING
            status: OK
            children:
            - name: Packing list - CAROL DING
              status: OK
          - name: Delivery
            icon: fa6-solid:truck-field
            status: KO
            children:
            - name: Confirmation of order - TO BE CONFIRMED
              status: OK
            - name: Nom du client - HANGZOU HS FASHION
              status: KO
              children:
              - name: Bon de confirmation - TORY BURCH
                status: OK
              - name: Packing List - HANGZOU HS FASHION
                status: OK
              - name: Invoice - TORY BURCH
                status: OK
              - name: Reçu Expédition - TORY BURCH
                status: WARNING
            - name: Contact Delivery
              status: KO
              children:        
              - name: Nom Delivery
                status: OK
                children:
                - name: Bon de préparation - CAROL DING
                  status : OK
              - name: Tél Delivery
                status: OK
                children:
                - name: Packing List - +860571187688000-3513
                  status: OK
              - name: Date of order
                icon: fluent-mdl2:event-date
                status: OK
                children:
                - name: Confirmation of order - 07/11/2022
                  status: OK
              - name: Date de livraison
                icon: fluent-mdl2:event-date
                status: KO
                children:
                - name: Bon de confirmation - ?
                  status: KO
                - name: Packing List - 19/01/2023
                  status : OK
                - name: Invoice - 07/02/2023
                  status: OK
              - name: Season
                icon: fluent-mdl2:calendar-year
                status: OK
                children:
                - name: Confirmation of order - HIVER 2023
                  status: OK
                - name: Invoice - HIVER 2023
                  status: OK
              - name: Freight
                status: OK
                children:
                - name: Confirmation of order - EXWORKS
                  status: OK
                - name: Bon de préparation - EXWORKS
                  status: OK
                - name: Packing List - EXWORKS
                  status: OK
                - name: Invoice - EXWORKS
                  status: OK
                - name: Reçu Expédition - ?
                  status: WARNING 
              - name: Forwarder
                status: KO
                children:
                - name: Confirmation of order - ?
                  status: KO
                - name: Packing list - TO BE CONFIRMED
                  status: OK
                - name: Invoice - MAURICE WARD
                  status: OK
                - name: Reçu Expédition - ?
                  status: WARNING  
              - name: N° Forwarder
                status: OK
                children:
                - name: Packing list - 000162
                  status: OK
              - name: N° Shipment
                status: OK
                children:
                - name: Bon de confirmation - ROUTE
                  status: OK
                - name: Packing list - ROUTE
                  status: OK
                - name: Invoice - ROUTE
                  status: OK
        - name: Détails Envoi
          status: OK
          children:
          - name: N° de bordereau envoi
            status: OK
          - name: Ref enelevement
            status: OK
          - name: Agent
            icon: material-symbols:support-agent
            status: OK
          - name: Payment
            icon: material-symbols:paid-outline
            status: OK
          - name: Due date
            icon: fluent-mdl2:event-date
            status: OK
          - name: Colis
            status: OK
          - name: Poids brut
            status: OK
          - name: Emplacement
            status: OK
            icon: material-symbols:real-estate-agent-outline
        - name: "Autres contrôles ..."
          status: OK
        - name: Composition
          status: OK        
    - name: Archivage
      icon: fluent:signature-16-regular
      status: OK
      children:
        - name: Présence ERP SOLIN
          status: OK
        - name: Présence portail client
          status: OK
---
::


# Thèmes suivant

Déposer un fichier excel, comprenant votre liste de factures client et obtenez directement vos factures compatibles chorus Pro.
Idée : faire un teasing avec copie d'écrans

En cours de rédaction