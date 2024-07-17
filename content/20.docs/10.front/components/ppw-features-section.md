---
layout: page
--- 

# \<ppw-features-section\>

::code-group
  ::code-block{label="Preview"}
    ::ppw-features-section
    ---
    class: "px-4 m-auto max-w-container"
    title: Vos besoins
    tabs:
      - id: 1
        title: Detect Vue technologies
        description: >-
          Vue Telescope can detect any website built with Vue.js frameworks, like
          Nuxt, Gridsome, Quasar or VuePress. It can also tell you which UI/CSS
          framework was used: TailwindCSS, Vuetify, Buefy etc. And much more!
        component: ppw-features-tabs-one
        surfaceColor: '#fffee1'
        onSurfaceColor: 'rgba(247, 213, 14, 0.99)'
        image: /images/detect.png
      - id: 2
        title: Explore & filter
        description: >-
          Explore our showcase of websites build with Vue.js and use the filter to
          see projects built with a particular framework and/or UI library. You can
          also filter by plugins as well as Nuxt.js modules.
        component: ppw-features-tabs-two
        surfaceColor: 'rgba(225, 245, 255, 1)'
        onSurfaceColor: 'rgba(79, 196, 255, 0.99)'
        image: /images/explore.png
      - id: 3
        title: Submit your website
        description: >-
          You can manually submit your site or any site built using any of the
          Vue.js frameworks by adding it to the input and clicking "Look up". If we
          don't already have the site in our database we will scan it and add it in
          no more than 20 seconds.
        component: ppw-features-tabs-three
        surfaceColor: 'rgba(245, 233, 255, 1)'
        onSurfaceColor: 'rgb(187, 130, 255, 0.99)'
        image: /images/submit.png
    ---
    ::  
  ::

  ```markdown [Code]
  ::ppw-features-section
  ---
  class: "px-4 m-auto max-w-container"
  title: Vos besoins
  tabs:
    - id: 1
      title: Detect Vue technologies
      description: >-
        Vue Telescope can detect any website built with Vue.js frameworks, like
        Nuxt, Gridsome, Quasar or VuePress. It can also tell you which UI/CSS
        framework was used: TailwindCSS, Vuetify, Buefy etc. And much more!
      component: ppw-features-tabs-one
      surfaceColor: '#fffee1'
      onSurfaceColor: 'rgba(247, 213, 14, 0.99)'
      image: /images/detect.png
    - id: 2
      title: Explore & filter
      description: >-
        Explore our showcase of websites build with Vue.js and use the filter to
        see projects built with a particular framework and/or UI library. You can
        also filter by plugins as well as Nuxt.js modules.
      component: ppw-features-tabs-two
      surfaceColor: 'rgba(225, 245, 255, 1)'
      onSurfaceColor: 'rgba(79, 196, 255, 0.99)'
      image: /images/explore.png
    - id: 3
      title: Submit your website
      description: >-
        You can manually submit your site or any site built using any of the
        Vue.js frameworks by adding it to the input and clicking "Look up". If we
        don't already have the site in our database we will scan it and add it in
        no more than 20 seconds.
      component: ppw-features-tabs-three
      surfaceColor: 'rgba(245, 233, 255, 1)'
      onSurfaceColor: 'rgb(187, 130, 255, 0.99)'
      image: /images/submit.png
  ---
  ::
  ```
::


In the previous example, images are in `/public/images`.


## empty

If the `cards`property is empty, only the `title` is shown :


::code-group
  ::code-block{label="Preview"}
    ::ppw-features-section
    ---
    title: Vos besoins
    ---
    ::

  ::

  ```markdown [Code]
    ::ppw-features-section
    ---
    title: Vos besoins
    ---
  ```
::


## image

Take of the image proportion !

We use the [tailwind cover](https://tailwindcss.com/docs/background-size#cover) option to display the image.
So the image will fill the with and be cropped vertically
(the bottom of the image will be cropped).

Here is the full first image of the previous example :

![](/images/detect.png)