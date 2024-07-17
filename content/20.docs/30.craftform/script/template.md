# Template

To build PDF with dynamicaly generated content, we use templates.

## template_get()

Get one or more template to generate the PDF.

The function must return a [templateGetResult()](#return-generatepdfstatus).


::ppw-alert
Only `template.odt` is currently supported !
::

Look for those files in user session :
* `template*.odt`
* `template*.docx`


::ppw-alert{type="todo"}
- PDF concatenate
- PDF background
- PDF foreground
- page numbering
::


## generate_template_odt()

::alert{type="info"}
TODO: Need to be documented
::


## generate_template_svg()

::alert{type="info"}
TODO: Need to be documented
::


## generate_template_docx()

::alert{type="info"}
TODO: Need to be documented
::


## generate_template_typ()

Template based on [typst format](https://typst.app/).

<video autoplay loop>
  <source src="https://typst.app/assets/videos/mockup.webm">
  Your browser does not support the video tag.
</video>


::alert{type="info"}
TODO: Need to be documented
::


## generate_template_{xxx}()

::alert{type="info"}
TODO: Need to be documented
::


## return TemplateGetResult()

::alert{type="info"}
TODO: Need to be documented
::


Simple example:
```yaml
template: template.odt
```

Complex example:
```yaml
template: template.odt
foreground: watermark.pdf
background: background.odt
apppend:
    - template: annex1.odt
    - background: annex2_back.odt
      apppend:
          - template: annex2.xlsx
          - template: annex2a.md
          - template: annex2b.md
          - template: annex2c.md
    - template: annex3.odt
    - template: annex4.svg
```
