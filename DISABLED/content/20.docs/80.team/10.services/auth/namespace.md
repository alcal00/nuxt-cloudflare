# Namespaces

!!! new "Not implemented yet"

paxpar assets (checklist, craft, modules, ...)
can be places in namespaces.

Namespaces are private.
They use the usual dot notation.

Valid namespaces :
* cdc
* qa.cdc
* prod.cdc


## backend

Namespaces supported backends are :
* local filesystem
* S3 bucket (with or without subpath)
* gitlab project (with or without subpath)
* github project (with or without subpath)

## folder structure

```
root
|__checklist
|__craft
|__module
```
