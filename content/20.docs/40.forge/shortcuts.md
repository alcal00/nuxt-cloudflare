# shortcuts

Many usefull modules are grouped in the `paxpar.shortcuts.forge` module.
It's always a good idea to import it first :

```
# start all your forge notebook with this
from paxpar.shortcuts.forge import *
```

## common modules

Common Python modules that are already imported by the shortcuts module :

* `datetime` to handle date and time
* `httpx` to handle web request
* `jinja2` to handle template
* `json` to handle JSON content
* `openpyxl` to handle Microsoft Excel files
* `Path` from pathlib to handle local files
* `pd` (pandas renamed) to handle tabular data
* `reload` from importlib to reload module
* `requests` to handle web request
* `tempfile` to hangle temporary files
* `xmltodict` to handle XML content
* `yaml` to handle YAML content

## paxpar tools

* `actor_get`
* `add_metadatas`
* `AuthContext`
* `certificates_gen`
* `certificates_get`
* `convert_odt2pdf`
* `copy_final`
* `factice`
* `paxpar_api_set`
* `paxpar_api_status`
* `sign_pdf`
* `template_odt`


## template_odt()

Fill a LibreOffice ODT template with the given data.

```
>>> data = { 'x': 33, 'hello': 'world' }
>>> template_odt("tests/data/template.odt", '/tmp/dbg_pp_templated.odt', data)
```


## convert_odt2pdf()

Convert a LibreOffice ODT file to a PDF file.

```
>>> await convert_odt2pdf('/tmp/dbg_pp_templated.odt', '/tmp/dbg_pp_raw.pdf')
```


## factice()

Add to a PDF a foreground watermark/banner.

```
>>> factice('/tmp/dbg_pp_raw.pdf', '/tmp/dbg_pp_raw2.pdf')
```


## add_metadatas()

Add to a PDF some files to attach, some XMP tags and some metadata.

```
>>> schema_id = 'https://paxpar.tech/schema/xxx/3'
>>> meta = { 'x': 33, 'hello': 'world' }
>>> tags = { 'section' : 'demo' }
>>> attachments = { 'sample.xlsx' : '/tmp/sample.xlsx'}
>>> add_metadatas('/tmp/dbg_pp_raw2.pdf', '/tmp/dbg_pp_augmented.pdf', attachments, tags, meta, schema_id)
```

## sign_pdf()

Sign or start the signing process of a PDF given a [sign workflow](/docs/signature/workflow) definition.

```
>>> signature = { 'provider' : 'SELF', 'email' : 'support@paxpar.tech' }
>>> await sign_pdf('/tmp/dbg_pp_augmented.pdf', signature, '/tmp/dbg_pp_final.pdf')
```

