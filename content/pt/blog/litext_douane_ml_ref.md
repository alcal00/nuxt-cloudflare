---
title: Arquivo alfandegário
description: "Preciso enviar meus pedidos, mas infelizmente meu arquivo alfandegário não está completo. Por que razões?"
image:
  src: https://media.paxpar.tech/textile_storage9.jpg
authors:
  - name: Francoise ENTZMANN
    avatar:
      src: https://github.com/phe.png
      target: _blank
    to: https://github.com/phe
date: 2024-02-13
---

# Configuração e entrega de produtos

Imagine o seguinte cenário:. Sua mercadoria está pronta para ser enviada para os EUA, seu valor é superior a US $ 2500. Você perguntar a Alice, seu gerente de transporte, se tudo acontece bem, para o comando n° \16159.. 

Responde sim, apenas espera uma confirmação de HSCode.

::ppw-chat-conversation
---
conversation:
    - thierry: "Olá, Alice, o teu ficheiro não está completo, a tua mercadoria está no cais."
    - alice: "Você poderia me dizer qual peça está faltando, porque no e-mail de 23/01/2023 eu enviei para você  todos os documentos ?"
    - thierry: "Desculpa, tenho outras importações para gerir, não tenho tempo."
    - alice: "Eu entendo, estou a rever com a minha equipa de expedição e estou a voltar para ti."
---
::

Alice entra em contato com você e diz que ela encontra um problema no comando n°16159.

Você pede a Alice para encaminhar o e-mail com todos os anexos.
Você faz login no ChekYourFabric, você deposita todos os anexos este comando N°16159 em CheckYourFabric.
Este serviço verifica para você toda a pasta.

Quando você lê a lista de verificação, você vê que realmente o código HS não corresponde.

::ppw-checklist-result-static
---
mode: nonconformity
result:
    id: root
    status: OK
    children:
    - id: step1
      name: Documentos previstos
      icon: mdi:file-arrow-up-down-outline
      status: OK
      children:
        - id: sous-step1
          name: Transferido para o cliente
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
                - name: Assinaturas attendues
                  icon: fluent:signature-16-regular
                  status: OK
            - name: "7/7 : Recebido"
              icon: "mdi:file-arrow-up-down-outline"
              status: OK
            - name: "Declaração aduaneira de exportação"
              icon: "mdi:file-arrow-up-down-outline"
              status: OK
        - id: sous-step2
          name: Internos
          icon: "mdi:file-arrow-up-down-outline"
          status: OK
          children:    
            - name: "2/7 : Contratados"
              icon: "mdi:file-arrow-up-down-outline"
              status: OK
            - name: "3/7 : Disposição um tour"
              icon: "mdi:file-arrow-up-down-outline"
              status: OK
            - name: "4/7 : Ordem de preparação"
              icon: "mdi:file-arrow-up-down-outline"
              status: OK
    - id: step2
      name: Controlos
      icon: mdi:magnify-remove-outline
      status: KO
      children:
        - name: Referência do processo
          status: KO
          children:
          - name: "N° Comando - 62718"
            status: OK
            children:
            - name: "Valor '62718' no Confirmation of order"
              status: OK
            - name: "Valor 62718 no o nome do arquivo PDF."
              status: OK
            - name: "Valor coerente"
              status: OK
              children:
                  - name: "Numero"
                    status: OK
                  - name: "5 chiffres"
                    status: OK
            - name: "Valor idêntico no Ordem de preparação"
              status: OK
            - name: "Valor idêntico no Packing list"
              status: OK
            - name: "Valor idêntico no Invoice"
              status: OK
          - name: "N° Disposição ss - 1899"
            status: OK
            children:
            - name: "Valor '1899' Disposição um tour"
              status: OK
            - name: "Valeur 1899 no o nome do arquivo PDF"
              status: OK
          - name: N° Disposição um tour - 1900
            status: OK
            children:
            - name: "Valor '1900' Disposição um tour"
              status: OK
            - name: "Valor 1900 no o nome do arquivo PDF"
              status: OK
            - name: "Valor '1900' Packing list"
              status: OK
          - name: N° voucher de confirmação - 62718
            status: OK
            children:
            - name: "Valor '62718' voucher de confirmação"
              status: OK
            - name: "Valor 62718 no o nome do arquivo PDF"
              status: OK
          - name: N° packing list - 16912
            icon: codicon:symbol-field
            status: OK
            children:
            - name: "Valor '16912' packing list"
              status: OK
            - name: "Valor 16912 dans le nom du fichier pdf"
              status: OK
          - name: N° HS Code incohérent - 50071010
            icon: codicon:symbol-field
            status: KO
            children:
            - name: "Valor '50071011' invoice"
              status: KO
            - name: "Valor '50071010' no website"
              status: KO
          - name: N° Invoice - 50167
            icon: codicon:symbol-field
            status: OK
            children:
            - name: "Valor '50167' invoice"
              status: OK
            - name: "Valor 50167 no nome do arquivo pdf"
              status: OK
        - name: Invoice - Incohérence N° cliente 1521 - 1632
          icon: la:file-invoice-dollar
          status: OK
          children:
          - name: N° Cliente - 1521 (Facturation)
            status: OK
            children:
            - name: Voucher de confirmation - N° 1632
              status: OK
            - name: Packing list - N° 1632
              status: OK
            - name: Invoice - N° 1521
              status: OK
          - name: Morada de Facturation - HANGZHOU HS FASHION
            status: OK
            children:
            - name: Voucher de confirmation - TORY BURCH
              status: OK
            - name: Packing list - HANGZHOU HS FASHION
              status: OK
            - name: Invoice - HANGZHOU HS FASHION
              status: OK
          - name: Taxa de faturamento
            status: OK
          - name: Contacto Facturation - CAROL DING
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
            - name: Nome de cliente - HANGZOU HS FASHION
              status: KO
              children:
              - name: Voucher de confirmation - TORY BURCH
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
                - name: Voucher de préparation - CAROL DING
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


Você entrará em contato com Alice informando o erro e editando os documentos.
Alice retorna a pasta, assina e verifica uma vez que sua pasta está bem completo.

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
          name: Internos
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
      name: Controlos
      icon: mdi:magnify-remove-outline
      status: OK
      children:
        - name: Referência do processo
          status: OK
          children:
          - name: "N° Comando - 62718"
            status: OK
            children:
            - name: "Valor '62718' dans Confirmation of order"
              status: OK
            - name: "Valor 62718 o nome do arquivo PDF"
              status: OK
            - name: "Valor coerente"
              status: OK
              children:
                  - name: "Numero"
                    status: OK
                  - name: "5 chiffres"
                    status: OK
            - name: "Valor idêntica no voucher de preparação"
              status: OK
            - name: "Valeur identique dans Packing list"
              status: OK
            - name: "Valeur identique dans Invoice"
              status: OK
          - name: "N° Disposition ss - 1899"
            status: OK
            children:
            - name: "Valor '1899' Disposition visite"
              status: OK
            - name: "Valor 1899 o nome do arquivo PDF"
              status: OK
          - name: N° Disposition visite - 1900
            status: OK
            children:
            - name: "Valor '1900' Disposition visite"
              status: OK
            - name: "Valor 1900 o nome do arquivo PDF"
              status: OK
            - name: "Valor '1900' Packing list"
              status: OK
          - name: N° Voucher de confirmação - 62718
            status: OK
            children:
            - name: "Valor '62718' Voucher de confirmação"
              status: OK
            - name: "Valor 62718 o nome do arquivo PDF"
              status: OK
          - name: N° packing list - 16912
            icon: codicon:symbol-field
            status: OK
            children:
            - name: "Valor '16912' packing list"
              status: OK
            - name: "Valor 16912 o nome do arquivo PDF"
              status: OK
          - name: N° HS Code '50071010'
            icon: codicon:symbol-field
            status: OK
          - name: N° Invoice - 50167
            icon: codicon:symbol-field
            status: OK
            children:
            - name: "Valor '50167' invoice"
              status: OK
            - name: "Valor 50167 o nome do arquivo PDF"
              status: OK
        - name: Invoice
          icon: la:file-invoice-dollar
          status: OK
          children:
          - name: N° Cliente - 1521 (facturação)
            status: OK
            children:
            - name: Bon de confirmation - N° 1632
              status: OK
            - name: Packing list - N° 1632
              status: OK
            - name: Invoice - N° 1632
              status: OK
          - name: Morada de facturação - HANGZHOU HS FASHION
            status: OK
            children:
            - name: Voucher de confirmação - TORY BURCH
              status: OK
            - name: Packing list - HANGZHOU HS FASHION
              status: OK
            - name: Invoice - HANGZHOU HS FASHION
              status: OK
          - name: Taux de facturation
            status: OK
          - name: Contato Faturação - CAROL DING
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
            - name: Nome do cliente - HANGZOU HS FASHION
              status: KO
              children:
              - name: Voucher de confirmação - TORY BURCH
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
              - name: Data de entrega
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
                - name: Voucher de  confirmação - ROUTE
                  status: OK
                - name: Packing list - ROUTE
                  status: OK
                - name: Invoice - ROUTE
                  status: OK
        - name: Detalhes transporte
          status: OK
          children:
          - name: N° guia de transporte
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
          - name: Pacote
            status: OK
          - name: Peso bruto
            status: OK
          - name: Localização
            status: OK
            icon: material-symbols:real-estate-agent-outline
        - name: "Outros controlos ..."
          status: OK
        - name:  Composição
          status: OK        
    - name: Arquivamento
      icon: fluent:signature-16-regular
      status: OK
      children:
        - name: Présence ERP SOLIN
          status: OK
        - name: Présence portail client
          status: OK
---
::

