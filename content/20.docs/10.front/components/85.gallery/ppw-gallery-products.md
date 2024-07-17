# \<ppw-gallery-products\>


TODO: deprecate !

## Checklists

Pour faire apparaître une gallerie de checklist : 

```
:ppw-gallery-products{filterType="checklist" showUnpublished}
```

Voici le résultat :


:ppw-gallery-products{filterType="checklist" showUnpublished}


## Craftforms

Pour faire apparaître une gallerie de craftform : 

```
:ppw-gallery-products{filterType="craftform" showUnpublished}
```

Voici le résultat :


:ppw-gallery-products{filterType="craftform" showUnpublished}


## Tags filter

Pour faire apparaître une gallerie de checklist 
contenant le tag `tuto` : 

```
::ppw-gallery-products
---
filterType: checklist
tags:
    - tuto
showUnpublished: true
---
::
```

Voici le résultat :


::ppw-gallery-products
---
filterType: checklist
tags:
    - tuto
showUnpublished: true
---
::