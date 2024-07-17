<script setup lang="ts">
const networks = ["facebook", "twitter", "linkedin", "email", "reddit"]
</script>

<template>
    <UButtonGroup size="sm" orientation="horizontal"  >
        <UButton v-for="network in networks" :key="network" color="white" variant="ghost">
            <SocialShare :network="network" :styled="false" :label="false" />
        </UButton>
    </UButtonGroup>
</template>
