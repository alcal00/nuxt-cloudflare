# craftform delegation

You need to activate the `ref2` feature flag to get the delegation feature.

Front routes:

* /document/craft/{path} : Craft a document
* /document/info/{path} : View document

Craft API endpoints:

* GET /api/craft2/doc/{path} : Get document craft data
* POST /api/craft2/doc/{path} : Update craft data
* POST /api/craft2/form/{craft_id} : Update singleton craft data

Documents API endpoints:

* GET /api/documents/{path} : List all documents for the current user
* GET /api/document/info/{path} : Get info on a given user document
* GET /api/document/content/{path} : Get a user document content
* POST /api/document/craft : Create a new craft document
* POST /api/document/delegate : Create a new delegated document
* POST /api/document/sample Create a bunch of sample documents


## Front /document/craft/{path}

Optional query param: `craft_id`

Sample URL to create a new craft: `http://localhost:3000/document/craft/toto33.pdf?craft_id=common.craftforms.base_doc_builder.base.craftform`

Sample URL to edit an existing craft: `http://localhost:3000/document/craft/toto33.pdf`

```javascript
// setup/onMounted
get doc info
if craft_id is given:
    POST `/api/craft2/doc/{path}?craft_id=`
else:
    GET `/api/craft2/doc/{path}`
build JSON editor form

// onFileDrop
POST `/api/craft2/doc/{path}`
// onFieldChange (debounced)
POST `/api/craft2/doc/{path}`
// onPreview / onFinalize
POST `/api/craft2/doc/{path}`
```

## API /api/craft2/doc/{path}

* Input `CraftPostData2` and `UploadFile` (optional)
* Output `CraftUpdateStatus`

### Call on craft info
```yaml
call: GET /api/craft2/doc/{path}
output CraftUpdateStatus:
    msg: Craft document loaded
    update_fields: {...}  # all fields values
    output_url: /api/document/myfolder/mydoc.pdf
    attached_files: [...] # all attached files
    craft_info: {...} # craft info
```


### Call on craft creation
```yaml
call: PUT /api/craft2/doc/{path}
input CraftUpdateStatus:
    craft_id: xxxx
output CraftUpdateStatus:
    msg: Craft Document created
    update_fields: {...}  # default values
```

### Call on field input
```yaml
call: PUT /api/craft2/doc/{path}
input CraftUpdateStatus:
    form_value: {...}
output CraftUpdateStatus:
    msg: Fields updated
```

### Call on file upload
```yaml
call: POST /api/craft2/doc/{path}
input CraftUpdateStatus, FileUpload:
output CraftUpdateStatus:
    msg: Fields updated
    upload_file: {...}
```

### Call on document preview
```yaml
call: PUT /api/craft2/doc/{path}
input CraftUpdateStatusd:
    generate: True
output CraftUpdateStatus:
    msg: Document generated
    output_url: /api/document/myfolder/mydoc.pdf
```

### Single call
```yaml
call: POST or PUT /api/craft2/doc/{path}
input CraftUpdateStatusd:
    craft_id: xxxx
    form_value: {...}
    generate: True
    finalize: True
output CraftUpdateStatus:
    msg: Document generated
    output_url: /api/document/myfolder/mydoc.pdf
```

## doc info

see model DocInfo(ExtraDocInfo)


## misc

Front route to deprecate ?

* /craft

API to deprecate ?

* GET /api/files/session
* GET /api/files/session/{path}
* DELETE /api/files/session/{path}
* GET /api/craft/{id} : Return the schema for the given craft
* GET /api/craftform/{id} : Return the schema for the given craft
* POST,PUT /api/craft/{id}
* POST /api/craft/file/{id}
* GET /api/craft/file/{id}/output.pdf


