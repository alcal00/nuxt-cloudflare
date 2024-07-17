# requests

See `paxpar/tests/ref/requests_v2`


Requests for documents : Someone asking someone else for a document.

See [penpot file](https://design.penpot.app/#/workspace/82e31d90-3829-8139-8002-c4c2fb4cf13a/97d885e0-d650-81ae-8003-4ae81354cda7?page-id=97d885e0-d650-81ae-8003-4ae81354cda8)

## uses cases

* create a document request
* list pending requests (to other)
* crafting requested document
* list pending requests (mine)
* rename/move a document
* rename/move a folder
* delete a document
* delete a request (owner)
* deny a request (asked by someone)


### create a document request

- `alice@me.com` is asking `bob@me.com` the document `q1_report.pdf`
    crafted with `report.me.craft`
    to be stored back at `quaterly/q1/report_bob.pdf`

pp_document_info:
```yaml
$schema: https://paxpar.tech/schema/core/document/info
state: 📑
from:
    user: alice@me.com
    file_path1 '/quaterly/q1/report_bob.pdf'
to:
    user: bob@me.com
    file_path: 'q1_report.pdf'
craft_id: report.me.craft
request_id: 67676-4545-56565-4545
created: 2023-10-15 18:30:22
ttl: 240000
eol: 78738978978
```

- create `pp📄👉/alice@me.com/📑/quaterly/q1/report_bob.pdf` -> pp_document_info
- create `pp📄👈/bob@me.com/📑/q1_report.pdf` -> pp_document_info

### list pending requests (to other)

- find `pp📄👉/alice@me.com/*`

### crafting requested document

From a pending request, we get the craft_id and the path,
we also get the two keys for updating pp_document_info
when PDF is finalized :

- create `pp📄🔗/29/1c/e6/2c/2b/06/2c/1f/b0/fc/1d/70/60/06/f8/f0/c7/bc/a5/cd/ee/ff/8f/ab/e3/79/ce/02/7e/bf/d6/d0` -> a PDF file (without name)

Update pp_document_info (state, document_hash):
```yaml
$schema: https://paxpar.tech/schema/core/document/info
state: 🔏
from:
    user: alice@me.com
    file_path1 '/quaterly/q1/report_bob.pdf'
to:
    user: bob@me.com
    file_path: 'q1_report.pdf'
craft_id: report.me.craft
request_id: 67676-4545-56565-4545
created: 2023-10-15 18:30:22
ttl: 240000
eol: 78738978978
document_hash: 291ce62c2b062c1fb0fc1d706006f8f0c7bca5cdeeff8fabe379ce027ebfd6d0 
```

- rename `pp📄👉/alice@me.com/🔏/quaterly/q1/report_bob.pdf` -> pp_document_info
- rename `pp📄👈/bob@me.com/🔏/q1_report.pdf` -> pp_document_info

- temp files in `pp📄👷/{user}/{file_path}`
- finalized PDF `pp📄👷/{user}/{file_path}🔗` -> any document name/hash

### list pending requests (mine)

- find `pp📄👈/alice@me.com/*`


### rename/move a document

TODO: rename key

TODO: update pp_document_info

## keys structure

- `pp📄🔗/{hash_path}` -> a PDF file (without name)
- `pp📄👇/{user}/{state}/{file_path}` -> pp_document_info (file dropped)
- `pp📄👉/{user}/{state}/{file_path}` -> pp_document_info (request from)
- `pp📄👈/{user}/{state}/{file_path}` -> pp_document_info (request to)
- `pp📄👷/{user}/{file_path}` -> any document name/content
- `pp📄👷/{user}/{file_path}🔗` -> any document name/hash
- `pp📄↩️/{request_id_path}` (OBSOLETE)


Example :
- `pp📄🔗/29/1c/e6/2c/2b/06/2c/1f/b0/fc/1d/70/60/06/f8/f0/c7/bc/a5/cd/ee/ff/8f/ab/e3/79/ce/02/7e/bf/d6/d0` -> a PDF file (without name)
- `pp📄ℹ️/patrick@alcove.fr/🔏/valise/Q2/nogent/chantier_A.pdf` -> pp_document_info
- `pp📄ℹ️/patrick@alcove.fr/📝/valise/Q2/nogent/chantier_B.pdf` -> pp_document_info
- `pp📄👷/patrick@alcove.fr/valise/Q2/nogent/chantier_A.pdf/output.pdf🔗`
- `pp📄👷/patrick@alcove.fr/valise/Q2/nogent/chantier_B.pdf/formdata.json`
- `pp📄👷/patrick@alcove.fr/valise/Q2/nogent/chantier_B.pdf/output.pdf`




## pp_document_info

```yaml
$schema: https://paxpar.tech/schema/core/document/info
user: alice@alcove.fr # same as in key
state: XX # same as in key
file_path: '/valise/Q2/nogent/chantier_A.pdf' # same as in key

# the craft_id if the doc has to be (re)crafted
# not set if the file is dropped outside of a craft (a check for example)
craft_id: xxx.yyy.zzz
# the request_id is only used for tracking purpose (and realtime messages)
# not set ig the file is dropped outside of a craft (a check for example)
request_id: 67676-4545-56565-4545
from: patrick@acme.com # same as user if request owner
to: sophie@alcove.fr # same as user if target


created: 2023-10-15 18:30:22 # creation date
ttl: 240000 # the initial time-to-live in seconds
eol: 78738978978 # EPOCH time / see if S3 could handle it

# SHA256 hash if document exists
document_hash: 291ce62c2b062c1fb0fc1d706006f8f0c7bca5cdeeff8fabe379ce027ebfd6d0 
```

## pp_document_info.state


* `📄` : dropped `as-is`
* `📑` : requested
* `📝` : requested / filling in progress (with or without a preview)
* `🖋️` : signing in progress
* `🔏` : finalized



## TODO

* What to store in the database ? request_id only 
* How to store the check result ?
* How to version the check result ? How to add the version to the hash ? the checklist version/hash ? the paxpar version ?