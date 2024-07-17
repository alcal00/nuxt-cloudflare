# \<ppw-pdf-links\>

Show a list of PDF.

The target documents are in the `public` folder.



## prop pdfs

The displayed PDF are set with the `pdfs` prop :

::code-group
  ::code-block{label="Preview"}
    ::ppw-pdf-links
    ---
    pdfs:
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
      - url: "/documents/ffx_total_186_ok.pdf"
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
    ---
    ::
  ::
  
  ```markdown [Code]
    :ppw-pdf-link{href="/documents/Facture_F20200024_BASIC_gp.pdf"}
  ```
::


## prop download_on_click

Download the PDF when the user click on it.
Default is `true`.
The following PDF **will download** on click
and then can not be selected :

::code-group
  ::code-block{label="Preview"}
    ::ppw-pdf-links
    ---
    download_on_click: true
    pdfs:
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
      - url: "/documents/ffx_total_186_ok.pdf"
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
    ---
    ::
  ::
  
  ```markdown [Code]
    ::ppw-pdf-links
    ---
    download_on_click: true
    pdfs:
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
      - url: "/documents/ffx_total_186_ok.pdf"
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
    ---
    ::
  ```
::

Set `download_on_click` to `false` to allow the selection of a single PDF. The following PDF **will not download** on click
and then can be selected :

::code-group
  ::code-block{label="Preview"}
    ::ppw-pdf-links
    ---
    download_on_click: false
    pdfs:
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
      - url: "/documents/ffx_total_186_ok.pdf"
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
    ---
    ::
  ::
  
  ```markdown [Code]
    ::ppw-pdf-links
    ---
    download_on_click: false
    pdfs:
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
      - url: "/documents/ffx_total_186_ok.pdf"
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
    ---
    ::
  ```
::


## prop selected

You can pre-select a PDF with the `selected` prop:

::code-group
  ::code-block{label="Preview"}
    ::ppw-pdf-links
    ---
    download_on_click: false
    pdfs:
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
      - url: "/documents/ffx_total_186_ok.pdf"
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
        selected: true
    ---
    ::
  ::
  
  ```markdown [Code]
    :ppw-pdf-link{href="/documents/Facture_F20200024_BASIC_gp.pdf"}
  ```
::


## prop action1_enabled

Enable the action1 button.
Default is `false`.

The event `action1` is fired when the user click.


::code-group
  ::code-block{label="Preview"}
    ::ppw-pdf-links
    ---
    pdfs:
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
      - url: "/documents/ffx_total_186_ok.pdf"
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
    ---
    ::
  ::
  
  ```markdown [Code]
    ::ppw-pdf-links
    ---
    pdfs:
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
      - url: "/documents/ffx_total_186_ok.pdf"
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
    ---
    ::
  ```
::

  No `action1` button when `download_on_click` is `true` :


::code-group
  ::code-block{label="Preview"}
    ::ppw-pdf-links
    ---
    download_on_click: true
    pdfs:
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
      - url: "/documents/ffx_total_186_ok.pdf"
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
    ---
    ::
  ::
  
  ```markdown [Code]
    ::ppw-pdf-links
    ---
    download_on_click: true
    pdfs:
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
      - url: "/documents/ffx_total_186_ok.pdf"
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
    ---
    ::
  ```
::

When `download_on_click` is `false` (PDF are selectable)
and `action1_enabled` is `true`,
the action buttons appear only on selected PDF :


::code-group
  ::code-block{label="Preview"}
    ::ppw-pdf-links
    ---
    action1_enabled: true
    download_on_click: false
    pdfs:
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
      - url: "/documents/ffx_total_186_ok.pdf"
        selected: true
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
    ---
    ::
  ::
  
  ```markdown [Code]
    ::ppw-pdf-links
    ---
    action1_enabled: true
    download_on_click: true
    pdfs:
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
      - url: "/documents/ffx_total_186_ok.pdf"
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
    ---
    ::
  ```
::

## prop action2_enabled

Same as prop [action1_enabled](#prop-action2_enabled)


You can show both action1/2 buttons :

::code-group
  ::code-block{label="Preview"}
    ::ppw-pdf-links
    ---
    action1_enabled: true
    action2_enabled: true
    download_on_click: false
    pdfs:
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
      - url: "/documents/ffx_total_186_ok.pdf"
        selected: true
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
    ---
    ::
  ::
  
  ```markdown [Code]
    ::ppw-pdf-links
    ---
    action1_enabled: true
    action2_enabled: true
    download_on_click: false
    pdfs:
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
      - url: "/documents/ffx_total_186_ok.pdf"
        selected: true
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
    ---
    ::
  ```
::



## prop action1_icon

Change action1 button icon.
Default is `mdi:eye` :
:Icon{name="mdi:eye" size="32"}

::code-group
  ::code-block{label="Preview"}
    ::ppw-pdf-links
    ---
    action1_enabled: true
    action1_icon: ic:baseline-delete-forever
    download_on_click: false
    pdfs:
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
      - url: "/documents/ffx_total_186_ok.pdf"
        selected: true
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
    ---
    ::
  ::
  
  ```markdown [Code]
    ::ppw-pdf-links
    ---
    action1_enabled: true
    download_on_click: true
    pdfs:
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
      - url: "/documents/ffx_total_186_ok.pdf"
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
    ---
    ::
  ```
::

## prop action2_icon

Same as prop [action1_icon](#prop-action1_icon)


## prop enable_global_actions

default: false

Show the special global actions : upload from local files, webcam ...


## Example with many pdf

Download the PDF when the user click on it.
Default is `true` :

::code-group
  ::code-block{label="Preview"}
    ::ppw-pdf-links
    ---
    download_on_click: false
    pdfs:
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
      - url: "/documents/ffx_total_186_ok.pdf"
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
        selected: true
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
      - url: "/documents/ffx_total_186_ok.pdf"
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
      - url: "/documents/ffx_total_186_ok.pdf"
        icon: "mdi:xml"
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
      - url: "/documents/ffx_total_186_ok.pdf"
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
        icon: "ph:microsoft-excel-logo-light"
      - url: "/documents/ffx_total_186_ok.pdf"
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
      - url: "/documents/ffx_total_186_ok.pdf"
        icon: "carbon:xml"
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
      - url: "/documents/ffx_total_186_ok.pdf"
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
      - url: "/documents/ffx_total_186_ok.pdf"
    ---
    ::
  ::
  
  ```markdown [Code]
    ::ppw-pdf-links
    ---
    download_on_click: false
    pdfs:
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
      - url: "/documents/ffx_total_186_ok.pdf"
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
        selected: true
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
      - url: "/documents/ffx_total_186_ok.pdf"
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
      - url: "/documents/ffx_total_186_ok.pdf"
        icon: "mdi:xml"
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
      - url: "/documents/ffx_total_186_ok.pdf"
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
        icon: "ph:microsoft-excel-logo-light"
      - url: "/documents/ffx_total_186_ok.pdf"
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
      - url: "/documents/ffx_total_186_ok.pdf"
        icon: "carbon:xml"
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
      - url: "/documents/ffx_total_186_ok.pdf"
      - url: "/documents/Facture_F20200024_BASIC_gp.pdf"
      - url: "/documents/ffx_total_186_ok.pdf"
    ---
    ::
  ```
::

