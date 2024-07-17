<script setup lang="ts">
//import { useDebugStore } from "@/stores/debug"

//const debug_store = useDebugStore()

const props = defineProps<{
    title?: string
}>()


const { featureFlags } = await useUserPrefs()

const show_panels = false

</script>

<template>
    <div v-if="featureFlags.debug" class="bg-yellow-500 flex flex-col m-5 break-all">
        <p>
            <icon inline name="mdi:shield-bug" size=24></icon>
            DEBUG PANEL <b>{{ props.title }}</b>
            <icon inline name="mdi:shield-bug" size=24></icon>
        </p>
        <slot />
    </div>
</template>
