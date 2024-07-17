# \<ppw-anim\>

SVG base animation :


::code-group
:::code-block{label="Preview"}
::ppw-anim
---
href: "https://media.paxpar.tech/vtd_DR_patrick4.svg"
---
::
:::

```markdown [Code]
::ppw-anim
---
href: "https://media.paxpar.tech/vtd_DR_patrick4.svg"
---
::
```
::


## href prop

Set the SVG source file with the `href` prop :

::code-group
:::code-block{label="Preview"}
:ppw-anim{href= "https://media.paxpar.tech/vtd_DR_patrick4.svg"}
:::

```markdown [Code]
:ppw-anim{href= "https://media.paxpar.tech/vtd_DR_patrick4.svg"}
```
::

## localFile prop

You can also pass a `useFileSystemAccess`  instance to access local file.
See the debug page for a working example.


## no-control prop

To hide animation controls :

`:ppw-anim{href= "https://media.paxpar.tech/vtd_DR_patrick4.svg" no-controls}`

or

```
::ppw-anim
---
href:  "https://media.paxpar.tech/vtd_DR_patrick4.svg"
no-controls: true
---
::
```

:ppw-anim{href= "https://media.paxpar.tech/vtd_DR_patrick4.svg" no-controls}


## hide-zoom-button prop

Hide the zoom button.
Default is `false`.


## strip-button-ribbon prop

Strip the button ribbon.
Default is `false`.


## speed prop

Speed up or slow down the animation.
Default is `1.0`.


## debug-info prop

Show some info on pages/stages animation


## SVG file requirements

The SVG document properties **should** be set to :

* width : 3840px
* height : 2160px


Bullet animation need those `ref` defined in the SVG file :

* `stage1` up to `stage20` : the target shape (or group of any shapes) that will be displayed in sequence


## local dev workflow

A [ppw-anim debug page](/debug/ppw/anim) is available to ease the authoring of SVG files.

You can edit localy your SVG file with inkscape and use this page to animate it.

A bug force you to re-select the file on each update !

There is a [pending ticket](https://github.com/vueuse/vueuse/issues/3779)
and a [pending pull request](https://github.com/vueuse/vueuse/pull/3780)
to fix this bug.


## supported href sources

Those `href` sources are supported :

* full URL : `https://media.paxpar.tech/vtd_DR_patrick4.svg`
* relative URL : `/vtd_DR_patrick4.svg`


## TODO

* use [swiperjs](https://swiperjs.com/demos#autoplay-progress) to navigate
* give some hints on reducing SVG size
* special URL format to access paxpar-media
* special URL format to access pp-ref-common
* fullscreen feature
* give some hints on inkscape use
* support codepen ?
* support drawio ?
* remove visual glitch on start