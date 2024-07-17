# \<ppw-mermaid\>

For [mermaidjs](https://mermaid.js.org/) image rendering.
Use the  [mermaid live editor](https://mermaid.live/) to write content.


## def prop

The `def` prop is where your put the mermaid code :

::code-group
  ::code-block{label="Preview"}
    ::ppw-mermaid
    ---
    def: |
        flowchart TD
            A[Christmas] -->|Get money| B(Go shopping)
            B --> C{Let me think}
            C -->|One| D[Laptop]
            C -->|Two| E[iPhone]
            C -->|Three| F[fa:fa-car Car]
    ---
    ::
  ::
  
  ```markdown [Code]
    ::ppw-mermaid
    ---
    def: |
        flowchart TD
            A[Christmas] -->|Get money| B(Go shopping)
            B --> C{Let me think}
            C -->|One| D[Laptop]
            C -->|Two| E[iPhone]
            C -->|Three| F[fa:fa-car Car]
    ---
    ::
  ```
::


## examples


### sequenceDiagram

::code-group
  ::code-block{label="Preview"}
    ::ppw-mermaid
    ---
    def: |
        sequenceDiagram
            Alice->>+John: Hello John, how are you?
            Alice->>+John: John, can you hear me?
            John-->>-Alice: Hi Alice, I can hear you!
            John-->>-Alice: I feel great!
    ---
    ::
  ::
  
  ```markdown [Code]
    ::ppw-mermaid
    ---
    def: |
        sequenceDiagram
            Alice->>+John: Hello John, how are you?
            Alice->>+John: John, can you hear me?
            John-->>-Alice: Hi Alice, I can hear you!
            John-->>-Alice: I feel great!
    ---
    ::
  ```
::

### flowchart

::code-group
  ::code-block{label="Preview"}
    ::ppw-mermaid
    ---
    def: |
        flowchart TD
            A[Christmas] -->|Get money| B(Go shopping)
            B --> C{Let me think}
            C -->|One| D[Laptop]
            C -->|Two| E[iPhone]
            C -->|Three| F[fa:fa-car Car]
    ---
    ::
  ::
  
  ```markdown [Code]
    ::ppw-mermaid
    ---
    def: |
        flowchart TD
            A[Christmas] -->|Get money| B(Go shopping)
            B --> C{Let me think}
            C -->|One| D[Laptop]
            C -->|Two| E[iPhone]
            C -->|Three| F[fa:fa-car Car]
    ---
    ::
  ```
::


### mindmap

::code-group
  ::code-block{label="Preview"}
    ::ppw-mermaid
    ---
    def: |
        mindmap
            root((mindmap))
                Origins
                Long history
                ::icon(fa fa-book)
                Popularisation
                    British popular psychology author Tony Buzan
                Research
                On effectivness<br/>and features
                On Automatic creation
                    Uses
                        Creative techniques
                        Strategic planning
                        Argument mapping
                Tools
                Pen and paper
                Mermaid
    ---
    ::
  ::
  
  ```markdown [Code]
    ::ppw-mermaid
    ---
    def: |
        mindmap
            root((mindmap))
                Origins
                Long history
                ::icon(fa fa-book)
                Popularisation
                    British popular psychology author Tony Buzan
                Research
                On effectivness<br/>and features
                On Automatic creation
                    Uses
                        Creative techniques
                        Strategic planning
                        Argument mapping
                Tools
                Pen and paper
                Mermaid
    ---
    ::
  ```
::


### journey

::code-group
  ::code-block{label="Preview"}
    ::ppw-mermaid
    ---
    def: |
        journey
            title My working day
            section Go to work
            Make tea: 5: Me
            Go upstairs: 3: Me
            Do work: 1: Me, Cat
            section Go home
            Go downstairs: 5: Me
            Sit down: 3: Me    
    ---
    ::
  ::
  
  ```markdown [Code]
    ::ppw-mermaid
    ---
    def: |
        journey
            title My working day
            section Go to work
            Make tea: 5: Me
            Go upstairs: 3: Me
            Do work: 1: Me, Cat
            section Go home
            Go downstairs: 5: Me
            Sit down: 3: Me    
    ---
    ::
  ```
::


### state

::code-group
  ::code-block{label="Preview"}
    ::ppw-mermaid
    ---
    def: |
        stateDiagram-v2
            [*] --> Still
            Still --> [*]
            Still --> Moving
            Moving --> Still
            Moving --> Crash
            Crash --> [*]
    ---
    ::
  ::
  
  ```markdown [Code]
    ::ppw-mermaid
    ---
    def: |
        stateDiagram-v2
            [*] --> Still
            Still --> [*]
            Still --> Moving
            Moving --> Still
            Moving --> Crash
            Crash --> [*]
    ---
    ::
  ```
::


### erDiagram

::code-group
  ::code-block{label="Preview"}
    ::ppw-mermaid
    ---
    def: |
        erDiagram
            CUSTOMER }|..|{ DELIVERY-ADDRESS : has
            CUSTOMER ||--o{ ORDER : places
            CUSTOMER ||--o{ INVOICE : "liable for"
            DELIVERY-ADDRESS ||--o{ ORDER : receives
            INVOICE ||--|{ ORDER : covers
            ORDER ||--|{ ORDER-ITEM : includes
            PRODUCT-CATEGORY ||--|{ PRODUCT : contains
            PRODUCT ||--o{ ORDER-ITEM : "ordered in"
    ---
    ::
  ::
  
  ```markdown [Code]
    ::ppw-mermaid
    ---
    def: |
        erDiagram
            CUSTOMER }|..|{ DELIVERY-ADDRESS : has
            CUSTOMER ||--o{ ORDER : places
            CUSTOMER ||--o{ INVOICE : "liable for"
            DELIVERY-ADDRESS ||--o{ ORDER : receives
            INVOICE ||--|{ ORDER : covers
            ORDER ||--|{ ORDER-ITEM : includes
            PRODUCT-CATEGORY ||--|{ PRODUCT : contains
            PRODUCT ||--o{ ORDER-ITEM : "ordered in"
    ---
    ::
  ```
::



### gantt

::code-group
  ::code-block{label="Preview"}
    ::ppw-mermaid
    ---
    def: |
        gantt
            title A Gantt Diagram
            dateFormat  YYYY-MM-DD
            section Section
            A task           :a1, 2014-01-01, 30d
            Another task     :after a1  , 20d
            section Another
            Task in sec      :2014-01-12  , 12d
            another task      : 24d
    ---
    ::
  ::
  
  ```markdown [Code]
    ::ppw-mermaid
    ---
    def: |
        gantt
            title A Gantt Diagram
            dateFormat  YYYY-MM-DD
            section Section
            A task           :a1, 2014-01-01, 30d
            Another task     :after a1  , 20d
            section Another
            Task in sec      :2014-01-12  , 12d
            another task      : 24d
    ---
    ::
  ```
::


### git

::code-group
  ::code-block{label="Preview"}
    ::ppw-mermaid
    ---
    def: |
        gitGraph
            commit
            commit
            branch develop
            checkout develop
            commit
            commit
            checkout main
            merge develop
            commit
            commit
    ---
    ::
  ::
  
  ```markdown [Code]
    ::ppw-mermaid
    ---
    def: |
        gitGraph
            commit
            commit
            branch develop
            checkout develop
            commit
            commit
            checkout main
            merge develop
            commit
            commit
    ---
    ::
  ```
::

## TODO

* [ ] use `mermaid` instead of ppw-mermaid to allow vs code preview (move prop to slot)