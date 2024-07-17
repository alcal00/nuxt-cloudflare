# attachment

Attachment checkmodule input properties :

* `filename` filename, wildcards allowed
* `more = false` (bool) if we allow more than `number`
* `number = 1` (int) number of document to match 
* `schema = None`


## doc property

The first attachment document that matches fills the `doc` property.

* `doc.meta` is a dict with the contentof `meta.yaml`
* `doc.filename`
* `doc.file`

## docs property

If multiples documents are expected, `docs` contains an array of documents
with the same properties as the one inn `doc`.



## examples



Check if there is a attached document with the given schema :

```yaml
- name: Cahier des charges
  module: ref.common.checkmodules.attachment
  props:
    schema: https://xx...xxx
```

Check if there is a attached document with the given filename :

```yaml
- name: Invoice metadata
  module: ref.common.checkmodules.attachment
  props:
    filename: factur-x.xml
```


Check if there are some attached documents with the given filename with wildcard :

```yaml
- name: Customer Invoices
  module: ref.common.checkmodules.attachment
  props:
    filename: FA*.pdf
- name: Supplier Invoices
  module: ref.common.checkmodules.attachment
  props:
    filename: FD*.pdf
```


Check if there is a single attached document with the given schema
and populate some children template fields :

```yaml
- name: Cahier des charges numero {{doc.meta.numero}}
  module: ref.common.checkmodules.attachment
  props:
    schema: https://xx...xxx
    single: true
  children:
    - name: Client {{doc.meta.client.name}}
    - name: Fournisseur {{doc.meta.fournisseur.name}}
```

# TODO

* support regex in filename
* support wildcard in schema
