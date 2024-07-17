<script setup lang="ts">
import { type BrowserFilter, type BrowserItem } from '~~/models/browser'

const filter = ref("debug")

const items = ref<BrowserItem[]>([
    {
        "id": "ref",
        "name": "ref",
        "type": "debug",
        "desc": "ref",
        "item_url": "/debug/ref"
    },
    {
        "id": "daisyui",
        "name": "daisyui",
        "type": "debug",
        "item_url": "/debug/daisyui"
    },
    {
        "id": "ppw/gallery",
        "name": "ppw/gallery",
        "type": "debug",
        "item_url": "/debug/ppw/gallery"
    },
])

</script>

<template>
        <p>gallery debug page</p>
        <ppw-gallery-browser model="role" />
<!--
    <ppw-gallery-browser :sourceItems="items" :filter="filter" :filters="[]" />
-->

</template>
