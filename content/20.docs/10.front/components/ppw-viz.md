# \<ppw-viz\>


For [graphviz](http://www.graphviz.org) image rendering.
Use the  [playground](http://viz-js.com/) to write dot content.


## digraph prop

The `digraph` prop is the easeiest way to render dot content
(you **must** omit the `digraph G { ... }` ):

::code-group
  ::code-block{label="Preview"}
    ::ppw-viz
    ---
    digraph: |
        alice -> bob;
        eve;
    ---
    ::
  ::
  
  ```markdown [Code]
    ::ppw-viz
    ---
    digraph: |
        alice -> bob;
        eve;
    ---
    ::
  ```
::


## dot prop

You can use the `dot` prop for a full graphviz syntax support :

::code-group
  ::code-block{label="Preview"}
    ::ppw-viz
    ---
    dot: |
        digraph G {
            alice -> bob;
            eve;
        }  
    ---
    ::
  ::
  
  ```markdown [Code]
    ::ppw-viz
    ---
    dot: |
        digraph G {
            alice -> bob;
            eve;
        }  
    ---
    ::
  ```
::


## example

This is more realistic example :

::code-group
  ::code-block{label="Preview"}
    ::ppw-viz
    ---
    digraph: |    
        bgcolor="transparent"
        node [shape=none label=""]
        
        subgraph cluster1 {
            label="FAxxx.pdf"
            bgcolor="lightyellow"

            subgraph cluster2 {
                label="factur-x.xml"
                bgcolor="lightgreen"
                empty1;
            }

            subgraph cluster3 {
                label="BC.pdf"
                bgcolor="turquoise"
                empty2;

                subgraph cluster2 {
                    label="order-x.xml"
                    bgcolor="lightgreen"
                    empty2.1;
                }
            }

            subgraph cluster4 {
                label="BL.pdf"
                bgcolor="turquoise"
                empty3;

                subgraph cluster2 {
                    label="meta.yaml"
                    bgcolor="lightgreen"
                    empty3.1;
                }
            }
        }
    ---
    ::
  ::
  
  ```markdown [Code]
    ::ppw-viz
    ---
    digraph: |    
        bgcolor="transparent"
        node [shape=none label=""]
        
        subgraph cluster1 {
            label="FAxxx.pdf"
            bgcolor="lightyellow"

            subgraph cluster2 {
                label="factur-x.xml"
                bgcolor="lightgreen"
                empty1;
            }

            subgraph cluster3 {
                label="BC.pdf"
                bgcolor="turquoise"
                empty2;

                subgraph cluster2 {
                    label="order-x.xml"
                    bgcolor="lightgreen"
                    empty2.1;
                }
            }

            subgraph cluster4 {
                label="BL.pdf"
                bgcolor="turquoise"
                empty3;

                subgraph cluster2 {
                    label="meta.yaml"
                    bgcolor="lightgreen"
                    empty3.1;
                }
            }
        }
    ---
    ::
  ```
::
