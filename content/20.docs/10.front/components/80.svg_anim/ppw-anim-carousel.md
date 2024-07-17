# \<ppw-anim-carousel\>


Simple animation carousel.
You provide a list of single-page SVG file.

::code-group
    ::code-block{label="Preview"}
        ::ppw-anim-carousel 
        ---
        conf:
            auto_play_delay: 10000
            #background: "/anim2/background_cs.svg"
            slides:
                - "/anim/a1.svg"
                - "/anim/a2.svg"
                - "/anim/a3.svg"
                #- "/anim/a4.svg"
                - "/anim/a5.svg"
                - "/anim/a6.svg"
        ---
        ::
    ::
  
    ```markdown [Code]
    ::ppw-anim-carousel 
    ---
    conf:
        auto_play_delay: 10000
        #background: "/anim2/background_cs.svg"
        slides:
            - "/anim/a1.svg"
            - "/anim/a2.svg"
            - "/anim/a3.svg"
            #- "/anim/a4.svg"
            - "/anim/a5.svg"
            - "/anim/a6.svg"
    ---
    ::
    ```
::






