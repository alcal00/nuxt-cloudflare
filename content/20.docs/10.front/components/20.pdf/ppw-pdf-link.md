# \<ppw-pdf-link\>

The target document is `/public/documents/Facture_F20200024_BASIC_gp.pdf`
(must be in the `public` folder).

## href prop

TODO: how to access file from API endpoints like
`http://localhost:8881/api/craft/frozen.tuto.spreadsheet.base.craftform/output.pdf`

TODO: replace `{BACKEND}/api/craft/frozen.tuto.spreadsheet.base.craftform/output.pdf`

::code-group
  ::code-block{label="Preview"}
    :ppw-pdf-link{href="/documents/Facture_F20200024_BASIC_gp.pdf"}
  ::
  
  ```markdown [Code]
    :ppw-pdf-link{href="/documents/Facture_F20200024_BASIC_gp.pdf"}
  ```
::

## prop download_on_click

Download the PDF when the user click on it.
Default is `true` :

::code-group
  ::code-block{label="Preview"}
    :ppw-pdf-link{href="/documents/Facture_F20200024_BASIC_gp.pdf"}
  ::
  
  ```markdown [Code]
    :ppw-pdf-link{href="/documents/Facture_F20200024_BASIC_gp.pdf"}
  ```
::

Disable with `download_on_click: false` :

::code-group
  ::code-block{label="Preview"}
    ::ppw-pdf-link
    ---
    href: "/documents/Facture_F20200024_BASIC_gp.pdf"
    download_on_click: false
    ---
    ::
  ::
  
  ```markdown [Code]
    ::ppw-pdf-link
    ---
    href: "/documents/Facture_F20200024_BASIC_gp.pdf"
    download_on_click: false
    ---
    ::
  ```
::

## strip_extension prop

Show or hide the file extension.
Default is `false` :

::code-group
  ::code-block{label="Preview"}
    :ppw-pdf-link{href="/documents/Facture_F20200024_BASIC_gp.pdf"}
    ::ppw-pdf-link
    ---
    href: "/documents/Facture_F20200024_BASIC_gp.pdf"
    strip_extension: true
    ---
    ::
  ::
  
  ```markdown [Code]
    :ppw-pdf-link{href="/documents/Facture_F20200024_BASIC_gp.pdf"}
    ::ppw-pdf-link
    ---
    href: "/documents/Facture_F20200024_BASIC_gp.pdf"
    strip_extension: true
    ---
    ::
  ```
::

## name prop

Override the file name :

::code-group
  ::code-block{label="Preview"}
    :ppw-pdf-link{href="/documents/Facture_F20200024_BASIC_gp.pdf" name="document.pdf"}
  ::
  
  ```markdown [Code]
    :ppw-pdf-link{href="/documents/Facture_F20200024_BASIC_gp.pdf" name="document.pdf"}
  ```
::


## icon prop

Override the icon :

::code-group
  ::code-block{label="Preview"}
    :ppw-pdf-link{href="/documents/Facture_F20200024_BASIC_gp.pdf" icon="vscode-icons:file-type-excel2"}
  ::
  
  ```markdown [Code]
    :ppw-pdf-link{href="/documents/Facture_F20200024_BASIC_gp.pdf" name="document.pdf"}
  ```
::

