# \<ppw-carroussel\>


## model prop

### Articles de blog

::code-group
:::code-block{label="Preview"}
    ::ppw-carroussel
:::

```markdown [Code]
    ::ppw-carroussel
```
::


### Membres de l'équipe

::code-group
:::code-block{label="Preview"}
    ::ppw-carroussel{model="team"}
:::

```markdown [Code]
    ::ppw-carroussel{model="team"}
```
::


### Features

::code-group
:::code-block{label="Preview"}
    ::ppw-carroussel{model="feature"}
:::

```markdown [Code]
    ::ppw-carroussel{model="feature"}
```
::


### Scenarios

Example : 
* detecting fraud on invoice IBAN
* building a building diagnose
* generating an invoice
* building and checking a weekling financial report

::code-group
:::code-block{label="Preview"}
    ::ppw-carroussel{model="scenario"}
:::

```markdown [Code]
    ::ppw-carroussel{model="scenario"}
```
::



### Business case

Example :
* diagnose a building
* invoicing
* delivering a textile order
* producing a textile batch
* financial weekly audit

::code-group
:::code-block{label="Preview"}
    ::ppw-carroussel{model="business-case"}
:::

```markdown [Code]
    ::ppw-carroussel{model="business-case"}
```
::



### Business

Example :
* textile manufacturing
* building diagnostic
* accounting
* transportation

::code-group
:::code-block{label="Preview"}
    ::ppw-carroussel{model="business"}
:::

```markdown [Code]
    ::ppw-carroussel{model="business"}
```
::


## show_date prop

Show the creation date with the `show_date` prop
(default is false) :

::code-group
:::code-block{label="Preview"}
    ::ppw-carroussel
    ---
    show_date: true
    ---
    ::
:::

```markdown [Code]
    ::ppw-carroussel
    ---
    show_date: true
    ---
    ::
```
::

The default display is relative (date ago),
click on the date to switch to the absolute display (YYYY-MM-DD).

If no `createdAt` date is present in the document,
the date is hidden.

Here is a sample YAML document where the `createdAt` is set :

```yaml
---
model: article
title: Exemple Commissaire de justice
description: Lire l'article
image: https://media.paxpar.tech/about-justice_270x320.png
createdAt: 2023-05-23
---

Contenu de l'article ...
```
