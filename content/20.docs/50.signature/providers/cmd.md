---
model: verif_psc
layout: psc
aside: true
lang: en
image: https://play-lh.googleusercontent.com/2IeE0Vhgzk-feNt3O5tG_HpXBQ7liTwqdvuKGGeQ87gPN4OUNm2MThYsHXdftjsR64s
title: Chave Mobile Digital
description: Portugese official electronic signature provider.
---

# Chave Mobile Digital


**chave móvel digital** or **Digital Mobile Key** is the official portuguese digital signature service.

[autenticacao.gov.pt web page](https://www.autenticacao.gov.pt/)

## component

::ppw-sign-cmd-form
::

## websocket API

Conversational API to sign a PDF with Chave Movel Digital service.

Sample websocket session :

::ppw-mermaid
---
def: |
    sequenceDiagram
        user->>client: click
        activate client
        client->>api: ws_connect
        deactivate client
        activate api
        api->>client: state=start
        deactivate api

        activate client
        client->>api: start
        deactivate client

        activate api
        api->>client: state=stage1_input
        deactivate api
        activate client
        client->>user: dialog
        activate user
        user->>client: dialog ok
        deactivate user
        client->>api: phone=,pin=,pdf_file=
        deactivate client
        activate api

        api-->>CMD: test URLs
        s3->>api: fetch pdf_file
        api-->>CMD: go to main page
        api-->>CMD: select pdf_file
        api-->>CMD: submit file
        api-->>CMD: input phone
        api-->>CMD: input pin
        api-->>CMD: submit



        api->>client: state=stage2_input
        deactivate api
        activate client
        client->>user: dialog
        activate user
        user->>client: dialog ok
        deactivate user
        client->>api: otp=
        deactivate client
        activate api

        api-->>CMD: input otp
        api-->>CMD: submit
        CMD-->>api: download file
        api->>s3: upload pdf_file

        api->>client: state=done

        deactivate api
        activate client
        client->>api: ws_disconnect
        deactivate client

---
::


```
--> connection
<-- { "state": "start" }
--> { "start": "", "auto_screenshot": 1}
<-- { "state": "stage1_input" }
--> { "phone": "+33 607650693", "pin": "1234", "pdf_file_path": "/session/path/to/file.pdf", "jwt": "xxx" }
<-- { "state": "stage1", "status": "OK", "progress": "root_page" }
<-- { "state": "stage1", "status": "OK", "progress": "credentials_page" }
<-- { "state": "stage1_input", "status": "OK", "progress": "upload_page" }
<-- { "state": "stage2", "status": "OK", "progress": "..." }
--> { "screenshot": "" }
<-- { "state": "screenshot", "screenshot": "..." }
<-- { "state": "stage2_input", "status": "OK", "progress": "otp" }
--> { "otp": "12345678" }
<-- { "state": "stage2", "status": "OK", "progress": "..." }
<-- { "state": "done", "status": "OK" }
```


## TODO
Other possible queries :

```
--> { "upload_local": "..." }
--> { "upload_s3": "..." }

--> { "ping": "any message ..." }
<-- { "status": "OK", "progress": "any message" }

--> { "screenshot": "" }
<-- { "status": "OK", "screenshot": "xxxx" }
```

## misc



usefull links :

* [Sign digital documents with professional attributes](https://www.autenticacao.gov.pt/web/guest/atributos-profissionais/assinatura-digital)
* [Electronic Invoice Signing Service (SAFE)](https://www.autenticacao.gov.pt/web/guest/servico-de-assinatura-de-faturas-eletronicas-safe)
* [digital signature API java/C++](https://amagovpt.github.io/docs.autenticacao.gov/manual_sdk.html#assinatura-digital)
* [Signatures with eID card (citizen signature certificate)](https://amagovpt.github.io/docs.autenticacao.gov/sdk/java/)
* [SO Digitally sign documents using the Citizen Card Digital Mobile Key](https://pt.stackoverflow.com/questions/297977/assinar-digitalmente-documentos-usando-a-chave-m%C3%B3vel-digital-do-cart%C3%A3o-de-cidad%C3%A3)
* [Integration with Digital Mobile Key](https://www.reddit.com/r/devpt/comments/l5gbxg/integra%C3%A7%C3%A3o_com_chave_m%C3%B3vel_digital/)


## manuel steps

* https://www.autenticacao.gov.pt/, click **Sign PDF**
* https://cmd.autenticacao.gov.pt/Ama.Authentication.Frontend/Processes/DigitalSignature/DigitalSignatureIntro.aspx, click **advance**
* https://frtend.reg.cmd.autenticacao.gov.pt/Ama.Registry.Frontend/Processes/DigitalSignature/DocumentSigning.aspx
* click to choose PDF to sign
* click **Upload document**
* click **YES** (doc confirmation)
* Click **to submit** (no visual signature)
* Enter phone number and pin, click **Authenticate**
* https://cmd.autenticacao.gov.pt/Ama.Authentication.Frontend/Processes/DigitalSignature/DigitalSignConfirmTan.aspx
* enter PIN recieved by SMS and click **confirm**
* the signed PDF is downloaded



## API steps

