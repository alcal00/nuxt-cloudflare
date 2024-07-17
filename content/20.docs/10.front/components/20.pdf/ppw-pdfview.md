# \<ppw-pdfview\>


The target document is `/public/documents/Facture_F20200024_BASIC_gp.pdf`
(must be in the `public` folder).


# url prop

The PDF path to view is in the `url` property :

::code-group
  ::code-block{label="Preview"}
    :ppw-pdfview{url="/documents/Facture_F20200024_BASIC_gp.pdf"}
  ::
  
  ```markdown [Code]
    :ppw-pdfview{url="/documents/Facture_F20200024_BASIC_gp.pdf"}
  ```
::


## class

You can add some styles with the `class` prop.
Here we force the width to `1/2` :

::code-group
  ::code-block{label="Preview"}
    :ppw-pdfview{url="/documents/Facture_F20200024_BASIC_gp.pdf" class="w-1/2"}
  ::
  
  ```markdown [Code]
    :ppw-pdfview{url="/documents/Facture_F20200024_BASIC_gp.pdf" class="w-1/2"}
  ```
::


## height trick

You can set vertical size to the size of the screen with the [tailwind css utility `h-screen`](https://tailwindcss.com/docs/height#full-height) : 

::code-group
  ::code-block{label="Preview"}
    ::ppw-pdfview
    ---
    url: "/documents/Facture_F20200024_BASIC_gp.pdf"
    class: "h-screen w-1/2"
    ---
    ::
  ::
  
  ```markdown [Code]
    :ppw-pdfview{url="/documents/Facture_F20200024_BASIC_gp.pdf" class="h-screen"}
  ```
::


## nocache

Add a `nocache` prop to avoid cache.
A random number will be added to the PDF URL to limit caching issues.

::code-group
  ::code-block{label="Preview"}
    :ppw-pdfview{url="/documents/Facture_F20200024_BASIC_gp.pdf" nocache}
  ::
  
  ```markdown [Code]
    :ppw-pdfview{url="/documents/Facture_F20200024_BASIC_gp.pdf" nocache}
  ```
::


## rnd

DEPRECATED : use `nocache` prop

`rnd` prop to avoid cache.
Set to a random number.

```
:ppw-pdfview{url="/documents/Facture_F20200024_BASIC_gp.pdf" rnd=333344}
```

## TODO

* how to control height ?