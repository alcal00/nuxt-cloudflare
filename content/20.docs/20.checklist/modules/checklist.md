# checklist

The `checklist` module lets you include a checklist into another checklist.

Module properties :

* `checklist` checklist id to include


## examples


Include the checklist `ref.common.checkmodules.checklist` under the `My chceklist` node:

```yaml
- name: My checklist
  module: ref.common.checkmodules.checklist
  props:
    checklist: ref.common.my.checklist
```
