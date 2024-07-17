---
title: Dossier douane
description: "Je dois expédier mes commandes, mais malheureusement mon dossier de douane n'est pas complet. Pour quelles raisons ?"
image:
  src: https://media.paxpar.tech/textile_storage9.jpg
authors:
  - name: Francoise ENTZMANN
    avatar:
      src: /avatar/francoise.png
      target: _blank
    to: https://www.linkedin.com/in/fentzmann/
date: 2023-02-13
---
# Mise en situation & Livrable

Imaginez le scénario suivant : 

Votre marchandise est prête à être expédiée au USA, sa valeur est supérieure à 2500$. Vous demandez à Alice, votre responsable expédition, si tout se passe bien, pour la commande n° 16159.

Elle répond oui, elle attends juste une confirmation de HSCode.

::ppw-chat-conversation
---
conversation:
    - thierry: "Bonjour Alice, Votre dossier n'est pas complet, votre marchandise reste à quai."
    - alice: "Pourriez-vous me préciser la pièce manquante, car dans le mail du 23/01/2023, je vous ai envoyé tous les documents ?"
    - thierry: "Désolé, j'ai d'autres importations à gérer, je n'ai pas le temps."
    - alice: "Je comprends, je fais le point avec mon équipe expédition et je reviens vers vous."
---
::


Alice vous contacte et vous dit qu'elle rencontre un problème sur la commande n°16159.

Vous demandez à Alice de faire suivre le mail ayant toutes les pièces jointes.
Vous vous connectez sur ChekYourFabric, vous déposez toutes les pièces jointes de cette commande N°16159 sur CheckYourFabric.
Ce service vérifie pour vous l'intégralité du dossier.

A la lecture de la checklist, vous constatez qu'effectivement le code HS ne correspond pas.


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
          status: OK
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
          status: KO
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
          - name: N° HS Code incohérent - 50071010
            icon: codicon:symbol-field
            status: KO
            children:
            - name: "Valeur '50071011' invoice"
              status: KO
            - name: "Valeur '50071010' sur le site douanier"
              status: KO
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
          status: OK
          children:
          - name: N° Client - 1521 (Facturation)
            status: OK
            children:
            - name: Bon de confirmation - N° 1632
              status: OK
            - name: Packing list - N° 1632
              status: OK
            - name: Invoice - N° 1521
              status: OK
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


Vous recontactez Alice en lui précisant l'erreur et en modifiant les documents.
Alice renvoie le dossier, le signe et vérifie une denière fois que son dossier soit bien complet.

::ppw-checklist-result-static
---

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
          status: OK
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
      status: OK
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
          - name: N° HS Code '50071010'
            icon: codicon:symbol-field
            status: OK
          - name: N° Invoice - 50167
            icon: codicon:symbol-field
            status: OK
            children:
            - name: "Valeur '50167' invoice"
              status: OK
            - name: "Valeur 50167 dans le nom du fichier pdf"
              status: OK
        - name: Invoice
          icon: la:file-invoice-dollar
          status: OK
          children:
          - name: N° Client - 1521 (Facturation)
            status: OK
            children:
            - name: Bon de confirmation - N° 1632
              status: OK
            - name: Packing list - N° 1632
              status: OK
            - name: Invoice - N° 1632
              status: OK
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
            status: OK
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
              status: OK
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
                status: OK
                children:
                - name: Bon de confirmation - ?
                  status: OK
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
                status: OK
                children:
                - name: Confirmation of order - ?
                  status: Ok
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

