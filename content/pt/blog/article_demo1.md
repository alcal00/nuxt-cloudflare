---
model: atelier
title: Relatório Final de Intervenção (RFI)
description: Simplificar a verificação da conformidade dos seus ficheiros RFI e de todos os documentos associados a este relatório. Simplificar a geração de ficheiros RFI. 
image: https://media.paxpar.tech/20240605_RFI_pt.png
date: 2024-06-18
---

## Paxpar e a gestao de documentos complexos

Uma das principais vantagens da plataforma Paxpar é a sua capacidade de gerir documentos complexos de várias centenas de páginas.

Para controlar os documentos fornecidos,  utilizamos uma lista de controlo específica para cada documento e verifica a **conformidade** de pontos precisos.

A ferramenta Paxpar apresenta estes documentos complexos sob a forma de uma cadeia.

![marguerite](/custom/assu_sini/documents/20240616-RFI-VuePiecesJointes.png)


Isto facilita a compreensão dos documentos principais, dos documentos anexos e dos ficheiros associados.
Antecedentes: o Relatório Final de Intervenção (RFI)

Este documento, do sector nuclear, é complexo e volumoso. É composto por cerca de uma centena de subdocumentos, divididos em 5 pastas, que por sua vez são compostas por várias subpastas.
Quando se tem de verificar tudo manualmente, é o suficiente para perder a cabeça!

RFI em alguns numeros é:
- **50** intervenientes
- **100** documentos
- **2500** assinaturas

Ao criar este documento, cada gestor deve certificar-se de que os documentos que recebe e/ou transmite cumprem os requisitos para garantir que o Relatório está completo e em conformidade.

## Estudo pratico: o dossier de garantia de qualidade (QAF)

O nosso exemplo envolve dois atores!

![](https://media.paxpar.tech/RFI_kpi-isa.png)

![](https://media.paxpar.tech/RFI_kpi-jac.png)

## Encenação

### **Isabelle** :

> Preciso de verificar o meu ficheiro de garantia de qualidade antes de o enviar. Para isso carrego-o para a plataforma paxpar sob o titulo _"Verificar"_ 

![image](/custom/assu_sini/documents/DAQ-removebg-preview.png)

A lista de controlo avisa-me de um erro!
![image](/custom/assu_sini/documents/pp_check1.png)

- Clico na secção básica ou na secção  de não-conformidade para encontrar a causa
![image](/custom/assu_sini/documents/pp_check2.png)

- Falta uma linha na LDA
- Tenho um ficheiro DI002 no ficheiro de acompanhamento do trabalho (DSI), mas a linha não foi introduzida no LDA.

![erreurLDA_DSI](/custom/assu_sini/documents/erreurLDA_DSI.png)


> Telefono a Jacques para que ele possa verificar e enviar-me um documento conforme.

> Jacques, podes enviar-me um LDA correto?

**Jacques**:

- Claro que sim

### **Jacques** :

Preciso de gerar um LDA correto para o Isabelle
> Giro a minha lista de documentos LDA num ficheiro Excel


![image](/custom/assu_sini/documents/003_lda1_excel.png)


- Quando comparo o LDA e o DSI, apercebo-me de que falta uma linha DI002 no LDA, quando tenho o ficheiro PDF no DSI.

- Gero imediatamente um novo LDA e enviá-lo a Isabelle.  
Acrescento a linha DI002 ao meu ficheiro Excel

![](/custom/assu_sini/documents/005_lda3_excel.png)

- Para gerar uma nova versão, insiro a antiga para não ter de voltar a introduzir todos os campos.

- Submeto também a versão corrigida do meu ficheiro Excel   

- Finalizo o meu documento   

> Posso agora enviá-lo a Isabelle

### **Isabelle** :

> Recebi uma nova versao de LDA

- Vou gerar um novo ficheiro de garantia de qualidade 

- Vou ao projeto  paxpar
![](/custom/assu_sini/documents/001_craft_aq.png)


- Estou a apresentar o antigo PDF de garantia de qualidade
![](/custom/assu_sini/documents/002_pdf.png)

- Elimino o LDA
![](/custom/assu_sini/documents/003_lda_sup.png)

- Apresento o novo LDA
![](/custom/assu_sini/documents/004_depot_lda.png)

- Elimino a linha do primeiro LDA
![](/custom/assu_sini/documents/005_liste_docs.png)

- Verificon, está tudo verde
![](/custom/assu_sini/documents/006_verif.png)

-Por fim, assino o meu ficheiro de garantia de qualidade
- Recebo o ficheiro PDF aq.pdf (XXX revoir le texte en FR)

Posso agora enviar este ficheiro de Garantia de Qualidade ao meu gestor com toda a confiança.