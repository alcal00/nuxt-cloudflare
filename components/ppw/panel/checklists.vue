<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        title?: string
        description?: string
        icon?: string

    }>(),
    {
        title: "Checklists",
        description: "Your recent checklists",
        icon: "i-heroicons-chart-bar-20-solid",
    }
)
</script>

<template>
    <UDashboardCard :title="title" :description="description" :icon="icon">
        <ppw-metric name="node_cpu_seconds_total" title="The Great Counter" desc="From the year only." icon="uil:github"
            fake />
        <ppw-metric name="node_cpu_seconds_total" title="The Great Counter" desc="From the year only." icon="uil:github"
            fake />
        <ppw-metric name="node_cpu_seconds_total" title="The Great Counter" desc="From the year only." icon="uil:github"
            fake />
    </UDashboardCard>
</template>