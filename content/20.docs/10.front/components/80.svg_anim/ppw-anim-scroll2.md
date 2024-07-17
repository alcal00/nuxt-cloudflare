# \<ppw-anim-scroll2\>

Multiple in a single page ...

Fixed `div` while scrolling content ...

Animation based on page scroll.

See a [full page example](scroll3-full.md).

## HTML & SVG structure

HTML section : `.scroll-section`

HTML sub-section : `.scroll-sub-section`

SVG section : `svg [inkscape\\:label^='stage']`


## TODO

* prop href
* hidden layers
* reload button

## Demo


:::ppw-hero0
---
title: Hello there
class: min-h-screen
buttons:
    - label: Get started
      to: "#section1"
---
Nulla mattis ut elit eget gravida. Nam fermentum et quam non mollis. Cras
rhoncus consectetur arcu, in dictum est dictum ut. Nullam cursus lectus ac mi
iaculis, eget tincidunt orci.
:::


::::ppw-anim-scroll2
---
href: "/scrollexample/anim.svg"
---

:::ppw-anim-scroll-section

# section 0 : intro

Nam sit amet vulputate magna. Curabitur molestie urna in auctor faucibus. Cras
ut purus ac eros iaculis dapibus sit amet quis ante. Suspendisse potenti.
Nulla mattis ut elit eget gravida. Nam fermentum et quam non mollis. Cras
rhoncus consectetur arcu, in dictum est dictum ut. Nullam cursus lectus ac mi
iaculis, eget tincidunt orci

:::

:::ppw-anim-scroll-section
    :::ppw-hero0
    ---
    title: A signed PDF
    ---
    Nulla mattis ut elit eget gravida. Nam fermentum et quam non mollis. Cras
    rhoncus consectetur arcu, in dictum est dictum ut. Nullam cursus lectus ac mi
    iaculis, eget tincidunt orci.

    :::
:::

:::ppw-anim-scroll-section
    ::ppw-hero0
    ---
    buttons:
      - label: technical
        to: "#section1"
      - label: legal
        to: "#section2"
      - label: business
        to: "#section2"
    ---
    # Check compliance

    The tag content will be added *here*.
    This permit **markdown syntax** with MDC.

    Enforce compliance on **technical**, **legal** and **business** terms :
    ::
:::

:::ppw-anim-scroll-section
    ::::ppw-hero0
    # section 3 checklist

    A checklist can verify many aspects of the document.

    ::ppw-anim-scroll-subsection
    check step 1 : Nam sit amet vulputate magna.
    ::

    ::ppw-anim-scroll-subsection
    check step 2 : Nam sit amet vulputate magna.
    ::

    ::ppw-anim-scroll-subsection
    check step 3 : Nam sit amet vulputate magna.
    ::

    ::ppw-anim-scroll-subsection
    check step 4 : Nam sit amet vulputate magna.
    ::

    ::ppw-anim-scroll-subsection
    check step 5 : Nam sit amet vulputate magna.
    ::

    ::::

:::

:::ppw-anim-scroll-section

# section 4 Augmented PDF

Nam sit amet vulputate magna. Curabitur molestie urna in auctor faucibus. Cras
ut purus ac eros iaculis dapibus sit amet quis ante. Suspendisse potenti.
Nulla mattis ut elit eget gravida. Nam fermentum et quam non mollis. Cras
rhoncus consectetur arcu, in dictum est dictum ut. Nullam cursus lectus ac mi
iaculis, eget tincidunt orci

:::

:::ppw-anim-scroll-section

# section 5 attached files

Nam sit amet vulputate magna. Curabitur molestie urna in auctor faucibus. Cras
ut purus ac eros iaculis dapibus sit amet quis ante. Suspendisse potenti.
Nulla mattis ut elit eget gravida. Nam fermentum et quam non mollis. Cras
rhoncus consectetur arcu, in dictum est dictum ut. Nullam cursus lectus ac mi
iaculis, eget tincidunt orci

:::

:::ppw-anim-scroll-section

# section 6 Lorem ipsum dolor sit amet

Nam sit amet vulputate magna. Curabitur molestie urna in auctor faucibus. Cras
ut purus ac eros iaculis dapibus sit amet quis ante. Suspendisse potenti.
Nulla mattis ut elit eget gravida. Nam fermentum et quam non mollis. Cras
rhoncus consectetur arcu, in dictum est dictum ut. Nullam cursus lectus ac mi
iaculis, eget tincidunt orci

:::

:::ppw-anim-scroll-section

# section 7 Lorem ipsum dolor sit amet

Nam sit amet vulputate magna. Curabitur molestie urna in auctor faucibus. Cras
ut purus ac eros iaculis dapibus sit amet quis ante. Suspendisse potenti.
Nulla mattis ut elit eget gravida. Nam fermentum et quam non mollis. Cras
rhoncus consectetur arcu, in dictum est dictum ut. Nullam cursus lectus ac mi
iaculis, eget tincidunt orci

:::

::::

