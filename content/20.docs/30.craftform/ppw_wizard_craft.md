# ppw-wizard-craft

```mermaid
flowchart TD
    onMounted --> initForm
    initForm --> craftColdLoad
    craftColdLoad --> craftLoadFromDocInfo
    craftColdLoad --> craftLoadFromId
    craftColdLoad --> craftLoadRaw
    craftLoadFromDocInfo --> GET/api/craftform/CRAFT_ID
    craftLoadFromId --> GET/api/craftform/CRAFT_ID

    uploadFile --> POST/api/craft/file/CRAFT_ID
    preview/finalize --> generateDocument --> POST/api/craft/CRAFT_ID
    listFiles --> GET/api/files/session/PATH
```


## GET /api/craft/{path}

On form init, or form reset, or to reload:

    gives
    - document path
    returns
    - schema
    - fields value
    - uploaded file list


## POST /api/craft/{path}

may be one or many of:

* on file upload, returns
    - upload status

* on field input, returns
    - upload status

* on preview/finalize, returns
    - generate status


## DELETE /api/craft/{path}