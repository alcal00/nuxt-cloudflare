# \<ppw-wizard-craft\>

To have a craft form in a markdown page :

```
:ppw-wizard-craft{craft_id="/craft/frozen.paf.paf.craftform"}
```

## model prop



::code-group
  ::code-block{label="Preview"}
    :ppw-wizard-craft{craft_id="frozen.paf.paf.craftform"}
  ::
  
  ```markdown [Code]
    :ppw-wizard-craft{craft_id="frozen.paf.paf.craftform"}
  ```
::

## uploaded_files prop

You can simulate files uploaded with the `uploaded_files` property.

::code-group
  ::code-block{label="Preview"}
    :ppw-wizard-craft{craft_id="frozen.paf.paf.craftform"}
  ::
  
  ```markdown [Code]
    ::ppw-wizard-craft
    ---
    craft_id: frozen.paf.paf.craftform
    uploaded_files:
    - url: case/invoice/FA233.pdf
      name: facture1.pdf
      checklist_result: case/invoice/checklist_result_facture1.yaml
      form_data: case/invoice/form_data_facture1.yaml
    - url: case/invoice/FA234.pdf
      name: facture2.pdf
      checklist_result: case/invoice/checklist_result_facture2.yaml
      form_data: case/invoice/form_data_facture2.yaml
    ---
    ::
  ```
::


## misc

::ppw-wizard-craft
---
craft_id: "/craft/frozen.paf.paf.craftform"
craft:
    "$schema": https://paxpar.tech/schema/craft/1
    name: PAF Facture
    desc: my description
    image: mdi:scale-balance
    image2:
    icon:
    tags:
    - tuto
    - location
    version: '3'
    author:
    gallery:
    show: true
    enabled: true
    published: true
    published_order: 100.00969995395927
    lab: false
    private:
    actions:
    - url: "/craftform/frozen.paf.paf.craftform"
      name: default
      icon:
    source:
    owner:
    theme:
    preview: false
    dropzone_msg:
    billing:
    template_sets:
    wizard_component:
    wizard:
    checklist:
    form_overload_schemas:
    id: frozen.paf.paf.craftform
    path: ref/frozen/paf
    pathfull: "/app/ref/frozen/paf"
    namespace: all
    craft_schema:
    title: Piste Audit Fiable Facture
    type: object
    properties:
        adresse:
            type: string
        cp:
            type: string
        ville:
            type: string
        surface:
            type: integer
        loyer:
            type: integer
    schema_url: https://paxpar.tech/schema/frozen.paf.paf.craftform/3
    script_module: "/app/./ref/frozen/paf/script.py"

---
::


Hint : you can get the definition of an existing model by querying the API
`/api/craftform/{CRAFT_ID}` like `https://uat.paxpar.tech/api/craftform/frozen.paf.paf.craftform`.
Here is an example result (converted to YAML):

```yaml
---
"$schema": https://paxpar.tech/schema/craft/1
name: PAF Facture
desc: |
  Enrichir une facture pour construire
  une piste d'audit fiable
image: mdi:scale-balance
image2:
icon:
tags:
- tuto
- location
version: '3'
author:
gallery:
  show: true
  enabled: true
  published: true
  published_order: 100.00969995395927
  lab: false
  private:
  actions:
  - url: "/craftform/frozen.paf.paf.craftform"
    name: default
    icon:
source:
owner:
theme:
preview: false
dropzone_msg:
billing:
template_sets:
wizard_component:
wizard:
checklist:
form_overload_schemas:
id: frozen.paf.paf.craftform
path: ref/frozen/paf
pathfull: "/app/ref/frozen/paf"
namespace: all
craft_schema:
  title: Piste Audit Fiable Facture
  type: object
  properties:
    adresse:
      type: string
    cp:
      type: string
    ville:
      type: string
    surface:
      type: integer
    loyer:
      type: integer
schema_url: https://paxpar.tech/schema/frozen.paf.paf.craftform/3
script_module: "/app/./ref/frozen/paf/script.py"
```

## Not Implemented yet

* feed craft definition/model
* use tabs or not
