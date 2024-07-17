<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        title?: string
        description?: string
        icon?: string

    }>(),
    {
        title:"Documents",
        description:"Your recent documents",
        icon:"i-heroicons-chart-bar-20-solid",
    }
)


//TODO: api call
const pdfs = [
    { url: "/documents/Facture_F20200024_BASIC_gp.pdf" },
    { url: "/documents/ffx_total_186_ok.pdf" },
    { url: "/documents/Facture_F20200024_BASIC_gp.pdf" },
]
</script>

<template>
    <UDashboardCard :title="title" :description="description" :icon="icon">
        <ppw-pdf-links :pdfs="pdfs" />
    </UDashboardCard>
</template>