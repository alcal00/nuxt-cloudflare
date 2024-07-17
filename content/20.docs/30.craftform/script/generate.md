# generate

A PDF is generated when the form is *finalized* or *previewed*.

## steps


Sub-steps of PDF generation,
main entry point : `services.core.craft.tools.generate_files` :

* grab all files from user session `tools2.grab_context_from_storage_to_local_temp()`
* (re)process dropped files `process_dropped_files()`
* template guess : [script.template_get](template.md#template_get)
* raw PDF generation : [script.generate_pdf](#generate_pdf)
* raw PDF post-generation : `generate_pdf_post()`
* metadata generation : [script.generate_metadata](#generate_metadata)
* metadata post-generation : `generate_metadata_post()`
* signature generation : [script.generate_signature](signature.md#generate_signature)
* signature post-generation : `generate_signature_post()`
* store PDF in user session : `session.store()`

::alert{type="info"}
TODO: The generate function can't be overloaded itself,
Only the steps `script.*` can be overloaded.
::


The function will return a [generateStatus()](#return-generatestatus).

Callbacks :
::ppw-mermaid
---
def: |
    flowchart TD
        generate_files --> template_get
        generate_files --> generate_pdf
        generate_pdf --> generate_template_odt
        generate_pdf --> generate_template_svg
        generate_pdf --> generate_template_docx
        generate_pdf --> generate_template_typ
        generate_pdf --> file_ext["generate_template_{ext}"]
        generate_files --> generate_metadata
        generate_files --> generate_signature
---
::


## generate_pdf()

The function must return a [generatePDFStatus()](#return-generatepdfstatus).

::alert{type="info"}
The generated PDF will not be accessible in later steps
to prevent any modification !
At this step, all present metadata, including signatures,
could be remove by the engine.
::


## generate_metadata()

The function must return a [generateMetadataStatus()](#return-generatemetadatastatus).

::alert{type="info"}
TODO: Need to be documented
::


## return GenerateStatus

The `generate_files` function should return an `GenerateStatus`.
It will give to the client form some information on how the upload was proceed and what to do client-side.

Sample :
```yaml
generated_pdf: invoice_FA63523.pdf
msg: "Your invoice #FA63523 has been generated"
```

### .generated_pdf

::alert{type="info"}
TODO: Need to be documented
::

Optional property.
If not set the generated PDF is expected to be `_output.pdf`.

### .msg

::alert{type="info"}
TODO: Need to be documented
::

Optional property.


## return GeneratePDFStatus

The `generate_pdf` function should return an `GeneratePDFStatus`.
It will give some information on the PDF generation.

Sample :
```yaml
generated_file: /tmp/GhU67et/mydocument.pdf
msg: "Your invoice #FA63523 has been generated"
```

### .generated_file

The generated PDF path.
The file must exist and be a valid PDF file.

Optional property.
If not set the generated PDF is expected to be `_output.pdf`.


### .filename

The visible filename.
Any meaningfull filename should be provided.
When downloading the file, this filename will be used.

At this exact time of processing, this filename does not point to an actual file.

Optional property.

Sample :
```yaml
generated_file: /tmp/GhU67et/mydocument.pdf
filename: invoice_FA63523.pdf
msg: "Your invoice #FA63523 has been generated"
```


### .msg

The message explaining to the user how the upload happened.

Optional property.


### .metadata

Optional [metadata status](#return-generatemetadatastatus).
Sometimes it is easier to collect metadata at the same time we generate the PDF.
In this case just return the `metadata` property.

Optional property.
If set the [generate_metadata() callback](#generate_metadata) will not be called !


### .signatures

Optional

::alert{type="info"}
TODO: Need to be documented
::

### .delivery

Optional

::alert{type="info"}
TODO: Need to be documented
::

## return GenerateMetadataStatus

The [`genergenerate_metadataate_pdf()` function](#generate_metadata) should return a `GeneratePDFStatus`.
It will give some information on the PDF generation.

Sample :
```yaml
document_metadata:
    tier:
        id: GDT67678
        name: Duroux SA
    amount: 700.0
    orders:
        - id: "6767"
          amount: 200.0
        - id: "6768"
          amount: 100.0
        - id: "6769"
          amount: 400.0
document_xmp:
    CUST_REF: GDT67678
    TRACK_NUMBER: "8667-656-5656-002"
attached_files:
    - path: extract.xml
    - path: dashboard.xlsx
      name: Tableau_de_bord_20230223.xlsx
    - path: orders/order_6767.pdf
    - path: orders/order_6768.pdf
    - path: orders/order_6769.pdf
```

### .document_metadata

A dict of the document metadata.

The `$schema` prop will be automatically added.

The document metadata will be stored as a `meta.yaml` attachment.

Mandatory property.

Sample :
```yaml
document_metadata:
    tier:
        id: GDT67678
        name: Duroux SA
    amount: 700.0
    orders:
        - id: "6767"
          amount: 200.0
        - id: "6768"
          amount: 100.0
        - id: "6769"
          amount: 400.0
```


### .document_xmp

Some document metadata that will be added as XMP tags.

::alert{type="warning"}
Some XMP tags are reserved and will be ignored if provided.
::

Optional property.

Sample :
```yaml
document_xmp:
    CUST_REF: GDT67678
    TRACK_NUMBER: "8667-656-5656-002"
```


### .attached_files

List if file to attach to the PDF.

::alert{type="info"}
You don't need to provided the `meta.yaml` attachment.
It will be automatically generated.
::

Optional property.

Sample :
```yaml
attached_files:
    - path: extract.xml
    - path: dashboard.xlsx
      name: Tableau_de_bord_20230223.xlsx
    - path: orders/order_6767.pdf
    - path: orders/order_6768.pdf
    - path: orders/order_6769.pdf

```

`path` are local to the user session.

