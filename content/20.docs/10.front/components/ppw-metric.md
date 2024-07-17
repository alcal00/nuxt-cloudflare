# \<ppw-metric\>

Display a public prometheus metric.


:ppw-metric{name="node_cpu_seconds_total" title="PDF files"}


## name prop

The `name` prop is the metric name as defined in victoria metrics or prometheus :

::code-group
  ::code-block{label="Preview"}
    ::ppw-metric{name="node_cpu_seconds_total"}
    PDF files
    ::
  ::
  
  ```markdown [Code]
    ::ppw-metric{name="node_cpu_seconds_total"}
    PDF files
    ::
  ```
::

## title prop or slot

::code-group
  ::code-block{label="Preview"}
    :ppw-metric{name="node_cpu_seconds_total" title="The Great Counter"}

    ::ppw-metric{name="node_cpu_seconds_total"}
    PDF files
    ::
  ::
  
  ```markdown [Code]
    :ppw-metric{name="node_cpu_seconds_total" title="The Great Counter"}

    ::ppw-metric{name="node_cpu_seconds_total"}
    PDF files
    ::
  ```
::


## desc prop

::code-group
  ::code-block{label="Preview"}
    ::ppw-metric{name="node_cpu_seconds_total" title="The Great Counter" desc="From the year only."}
    PDF files
    ::
  ::
  
  ```markdown [Code]
    ::ppw-metric{name="node_cpu_seconds_total" title="The Great Counter" desc="From the year only."}
    PDF files
    ::
  ```
::


## icon prop

::code-group
  ::code-block{label="Preview"}
    :ppw-metric{name="node_cpu_seconds_total" title="The Great Counter" desc="From the year only." icon="uil:github"}

  ::
  
  ```markdown [Code]
    :ppw-metric{name="node_cpu_seconds_total" title="The Great Counter" desc="From the year only." icon="uil:github"}
  ```
::


## no-refresh prop

By default  the metric is refreshed every 10 seconds.
The value displayed changes smoothly.

The `norefresh` prop tell the compoenent to *not* automatically refresh the metric :

::code-group
  ::code-block{label="Preview"}
    ::ppw-metric{name="node_cpu_seconds_total" no-refresh}
    PDF files
    ::
  ::
  
  ```markdown [Code]
    ::ppw-metric{name="node_cpu_seconds_total" no-refresh}
    PDF files
    ::
  ```
::

## fake prop

::code-group
  ::code-block{label="Preview"}
    :ppw-metric{name="node_cpu_seconds_total" title="The Great Counter" desc="From the year only." fake}

  ::
  
  ```markdown [Code]
    :ppw-metric{name="node_cpu_seconds_total" title="The Great Counter" desc="From the year only." fake}
  ```
::

## refresh

You can *force* a metric refresh by clicking on the component.


::code-group
  ::code-block{label="Preview"}
    :ppw-metric{name="node_cpu_seconds_total" title="The Great Counter" desc="From the year only." fake no-refresh}

  ::
  
  ```markdown [Code]
    :ppw-metric{name="node_cpu_seconds_total" title="The Great Counter" desc="From the year only." fake no-refresh}
  ```
::

## Example

A realistic example :

::code-group
  ::code-block{label="Preview"}
    ::div{class="flex flew-row justify-around"}
      :ppw-metric{name="starlette_requests_total?method=POST&path=//api/pdf/check/&status_code=200" title="PDF" desc="PDF files checked"}
      :ppw-metric{name="pp_pdf_info_signers_total" title="Signatures" desc="Digital signatures scanned" }
      :ppw-metric{name="node_cpu_seconds_total" title="Pages" desc="PDF pages produced" fake}
    ::

  ::
  
  ```markdown [Code]
    ::div{class="flex flew-row justify-around"}
      :ppw-metric{name="node_cpu_seconds_total" title="PDF" desc="PDF files checked" fake}
      :ppw-metric{name="node_cpu_seconds_total" title="Signatures" desc="Digital signatures scanned" fake}
      :ppw-metric{name="node_cpu_seconds_total" title="Pages" desc="PDF pages produced" fake}
    ::

  ```
::

## offset prop

Number of my API calls as long as we remember :

:ppw-metric{name="api/all" domain="all"}

Number of my API calls for the last 15 minutes :

:ppw-metric{name="api/all" domain="all" offset="15m"}

Number of my API calls for the last hour :

:ppw-metric{name="api/all" domain="all" offset="1h"}

Number of my API calls for the last week :

:ppw-metric{name="api/all" domain="all" offset="1w"}

Number of my API calls for the current month (from day 1 to now) :

:ppw-metric{name="api/all" domain="all" offset="month"}



## supported metrics

All those metrics are also available at our [grafana instance](https://arundo.tech/graf)
(access restricted).

### simple/pp_pdf_info_signers_total

:ppw-metric{name="pp_pdf_info_signers_total"}

### simple/referentiel_nb_checklist_defined

:ppw-metric{name="referentiel_nb_checklist_defined"}


### api/pdf/check

Number of PDF check for all users of all domains :

:ppw-metric{name="api/pdf/check" domain="all"}

Number of PDF check for all users of this domain :

:ppw-metric{name="api/pdf/check" domain="self"}

Number of PDF check for me in all domains :

:ppw-metric{name="api/pdf/check" user="1" domain="all"}

Number of PDF check for me in this domain :

:ppw-metric{name="api/pdf/check" user="1" domain="self"}


### api/all

Number of my API calls in this domain :

:ppw-metric{name="api/all"}

Number of my API calls in all domain :

:ppw-metric{name="api/all" domain="all"}

Please note it is not allowed to query API calls number for anyone else but you.


## TODO

* show link to grafana (optional)
* show backend version
* show frontend version
* show frontend widgets version
* red/green display for 0/1 metric (up)
* display a message when the metric fetch fails
* property to change the refresh period
* show Err on API error