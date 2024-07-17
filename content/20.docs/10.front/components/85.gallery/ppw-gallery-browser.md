---
aside: false
---

# \<ppw-gallery-browser\>


The paxpar gallery browser that show all type of objects


## model prop

You can display content pages of a given model


::ppw-gallery-browser
---
id: aaa
model: role
---
::


## items prop

You can display a custom items list:

```mdc
::ppw-gallery-browser
---
noItemLink: true
sourceItems:
  - id: ref
    name: eagle
  - id: daisyui
    name: seeagull
  - id: ppw/gallery
    name: owl
---
::
```

::ppw-gallery-browser
---
id: bbb
noItemLink: true
sourceItems:
  - id: ref
    name: eagle
  - id: daisyui
    name: seeagull
  - id: ppw/gallery
    name: owl
---
::

## filters prop

TODO: deprecate in favour of a slot !
