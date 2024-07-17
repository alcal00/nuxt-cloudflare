# Roles

Currently those role are defined :

- apidoc
- browse_ref_obj
- check
- craft
- credits
- custom_domain
- custom_style
- sign
- view


Roles are defined in the file `pp-ref-common/_sys/roles.yaml`.



This is an example of a role definition :

```yaml
# - -- --- -- - -- --- -- - -- --- -- - -- --- -- - -- --- -- - -- --- -- - --
- id: browse_ref_obj
  #TODO: split in many roles
  desc: Accès à la liste des checklists/modules/craft
  rules:
    - GET {PROXY_CORE}/api/checklists
    - GET {PROXY_CORE}/api/checklist/{ID}
    - GET {PROXY_CORE}/api/checkmodules
    - GET {PROXY_CORE}/api/checkmodule/{ID}
    - GET {PROXY_CORE}/api/craftforms
    - GET {PROXY_CORE}/api/craftform/{ID}
    - GET {PROXY_CORE}/api/scenarios
    - GET {PROXY_CORE}/api/scenario/{ID}
    - GET {PROXY_CORE}/api/ref/info
    - GET {PROXY_CORE}/api/ref/checklist/{ID}/static/{PATH}
    - GET {PROXY_CORE}/api/ref/checkmodule/{ID}/static/{PATH}
    - GET {PROXY_CORE}/api/ref/craftform/{ID}/static/{PATH}
    - GET {PROXY_CORE}/api/ref/scenario/{ID}/static/{PATH}
    - POST {PROXY_CORE}/api/ref/refresh
    - POST {PROXY_CORE}/api/ref/sync
# - -- --- -- - -- --- -- - -- --- -- - -- --- -- - -- --- -- - -- --- -- - --
```
