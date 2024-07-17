# \<ppw-alert\>

A very simple tag to display an alert of type :

* info
* success
* warning
* error
* deprecated
* notimplemented
* todo

## msg prop

::code-group
:::code-block{label="Preview"}
:ppw-alert{msg="Lorem Ipsum"}
:::
```markdown [Code]
:ppw-alert{msg="Lorem Ipsum"}
```
::

If `msg` is not provided, a default text will appear.

:ppw-alert{type="info"}
:ppw-alert{type="success"}
:ppw-alert{type="warning"}
:ppw-alert{type="error"}
:ppw-alert{type="deprecated"}
:ppw-alert{type="notimplemented"}
:ppw-alert{type="todo"}



## type prop

Default is `info`.

::code-group
:::code-block{label="Preview"}
:ppw-alert{type="info" msg="info alert type"}
:::
```markdown [Code]
:ppw-alert{type="info" msg="info alert type"}
```
::

::code-group
:::code-block{label="Preview"}
:ppw-alert{type="success" msg="success alert type"}
:::
```markdown [Code]
:ppw-alert{type="success" msg="success alert type"}
```
::


::code-group
:::code-block{label="Preview"}
:ppw-alert{type="warning" msg="warning alert type"}
:::
```markdown [Code]
:ppw-alert{type="warning" msg="warning alert type"}
```
::

::code-group
:::code-block{label="Preview"}
:ppw-alert{type="error" msg="error alert type"}
:::
```markdown [Code]
:ppw-alert{type="error" msg="error alert type"}
```
::

::code-group
:::code-block{label="Preview"}
:ppw-alert{type="notimplemented" msg="notimplemented alert type"}
:::
```markdown [Code]
:ppw-alert{type="notimplemented" msg="notimplemented alert type"}
```
::

::code-group
:::code-block{label="Preview"}
:ppw-alert{type="deprecated" msg="deprecated alert type"}
:::
```markdown [Code]
:ppw-alert{type="deprecated" msg="deprecated alert type"}
```
::

::code-group
:::code-block{label="Preview"}
:ppw-alert{type="todo" msg="todo alert type"}
:::
```markdown [Code]
:ppw-alert{type="todo" msg="todo alert type"}
```
::

## prop icon

The icon is determined by the `level` prop.
But you can overload it with the `icon` prop.


::code-group
:::code-block{label="Preview"}
:ppw-alert{icon="ic:outline-search" msg="todo alert type"}
:::
```markdown [Code]
:ppw-alert{icon="ic:outline-search" msg="todo alert type"}
```
::

## action prop

Set the text of the first action button.
If not set, the button will not appear.


::code-group
:::code-block{label="Preview"}
:ppw-alert{msg="Click to refresh" action="refresh"}
:::
```markdown [Code]
:ppw-alert{msg="Click to refresh" action="refresh"}
```
::


## action event

Triggered when the user click on the first button.


## slot content

For a rich content place it inside the `ppw-alert` node.

::code-group
:::code-block{label="Preview"}
::::ppw-alert
---
---
You can place **here** a *rich* MDC content
::::
:::
```markdown [Code]
::::ppw-alert
---
---
::::
```
::


## TODO

::ppw-alert
---
type: todo
---
* prop actions (for multple actions)
* prop dissmissible
::


