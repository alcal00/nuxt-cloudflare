<script setup lang="ts">
import { type ItemPDF, type GlobalAction } from "~~/types/pdf_showcase.types"

const pdfs = ref<ItemPDF[]>([
    { name: "hhh", url: "/xxx/ddd.pdf" }
])


function doGlobalAction(action: GlobalAction) {
    alert(`globalAction ${action.id}`)
}
</script>

<template>
    <div class="w-full">
        <h1>debug ppw-pdf-links page</h1>


        <ppw-pdf-links :pdfs="pdfs" enable_global_actions @globalAction="doGlobalAction" />
    </div>
</template>
