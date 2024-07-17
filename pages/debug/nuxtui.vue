<script setup lang="ts">
const items = [{
    label: 'Getting Started',
    icon: 'i-heroicons-information-circle',
    defaultOpen: true,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}, {
    label: 'Installation',
    icon: 'i-heroicons-arrow-down-tray',
    disabled: true,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}, {
    label: 'Alcal',
    icon: 'i-heroicons-eye-dropper',
    content: "I'm working in paxpar office .."
}, {
    label: 'Camille',
    icon: 'i-heroicons-rectangle-group',
    content: "I'm working in paxpar office .."
}, {
    label: 'Components',
    icon: 'i-heroicons-square-3-stack-3d',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}, {
    label: 'Utilities',
    icon: 'i-heroicons-wrench-screwdriver',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}]
</script>

<template>
    <div class="w-full">
        <ul>
            <li><a href="https://ui.nuxt.com/getting-started">Nuxt UI</a></li>
            <li><a href="https://ui.nuxt.com/pro/getting-started">Nuxt UI pro</a></li>
            <li><a href="https://tailwindcss.com/docs/installation">tailwind</a></li>
        </ul>


        <ULandingCTA title="Join us" description="Incididunt fugiat duis in." align="left" card>
            <img src="https://picsum.photos/640/360"
                class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700" />
        </ULandingCTA>

        <UAccordion :items="items" />
        <UDashboardCard title="Recent sales" description="You made 265 sales this month." icon="i-heroicons-chart-bar">
            <UProgress />
        </UDashboardCard>


        <UButton loading>check PDF</UButton>

    </div>
</template>
