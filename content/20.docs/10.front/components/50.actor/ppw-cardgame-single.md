# \<ppw-cardgame-single\>

A single card game ...

:::tabs
::::div{label="Preview" icon="i-heroicons-magnifying-glass-circle"}
::ppw-cardgame-single{id=1206}
::::
::::div{label="Code" icon="i-heroicons-code-bracket-square"}
```markdown
::ppw-cardgame-single{id=1206}
```
::::
:::


## size

We use [tailwind CSS sizes](https://tailwindcss.com/docs/width#fixed-widths).
The default size is 32 (with is 128 px).

::code-group
:::code-block{label="Preview"}
- Size 24 :
:ppw-cardgame-single{id=1204 size=24}
- Default size 32 :
:ppw-cardgame-single{id=1204}
- Size 48 :
:ppw-cardgame-single{id=1204 size=48}
- Size 64 :
:ppw-cardgame-single{id=1204 size=64}
:::

```markdown [Code]
- Size 24 :
:ppw-cardgame-single{id=1204 size=24}
- Default size 32 :
:ppw-cardgame-single{id=1204}
- Size 48 :
:ppw-cardgame-single{id=1204 size=48}
- Size 64 :
:ppw-cardgame-single{id=1204 size=64}
```
::


## format

Format is one of `png` or `svg`.
The default format is `png`.


::code-group
:::code-block{label="Preview"}
:ppw-cardgame-single{id=1204}
:ppw-cardgame-single{id=1204 format='png'}
:ppw-cardgame-single{id=1204 format='svg'}
:::

```markdown [Code]
:ppw-cardgame-single{id=1204}
:ppw-cardgame-single{id=1204 format='png'}
:ppw-cardgame-single{id=1204 format='svg'}
```
::

## side

Format is one of `recto` or `verso`.
The default format is `recto`.

::code-group
:::code-block{label="Preview"}
:ppw-cardgame-single{id=1204}
:ppw-cardgame-single{id=1204 side='recto'}
:ppw-cardgame-single{id=1204 side='verso'}
:::

```markdown [Code]
:ppw-cardgame-single{id=1204}
:ppw-cardgame-single{id=1204 side='recto'}
:ppw-cardgame-single{id=1204 side='verso'}
```
::

## source

The component uses links from the public pages https://ludi.paxpar.tech

Example for card #1206, the links used are :

* Card SVG image : https://ludi.paxpar.tech/card/card_1206_recto.svg
* Card PNG image : https://ludi.paxpar.tech/card/card_1206_recto.png
* Card PDF file : https://ludi.paxpar.tech/card/card_1206_recto.pdf
* Card info page : https://ludi.paxpar.tech/card/1206

## link

When you click on the card, you move to the card info page.

