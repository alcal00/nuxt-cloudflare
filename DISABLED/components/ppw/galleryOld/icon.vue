<script setup lang="ts">

export interface IconProps {
    def?: string
    fill?: string
    stroke?: string
    default?: any
}

const props = withDefaults(defineProps<IconProps>(), {
    def: 'bi:patch-question',
    fill: 'bg-primary',
    stroke: 'bg-primary-content',
})
</script>

<template>
    <div>
        <svg v-if="props.def && props.def.startsWith('<path')" class="w-1/3 h-24" :fill="props.fill || props.default.fill"
            :stroke="props.stroke || props.default.stroke" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            v-html="props.def"></svg>
        <img v-if="props.def && props.def.startsWith('http')" class="object-cover w-1/3 h-24" :src="props.def" />
        <div v-else class="w-1/3 h-36 flex flex-col">
            <icon name="ic:twotone-donut-large" size=64 style="color: red;" rotate="90deg" class="absolute " />
            <icon :name="props.def || 'bi:patch-question'" size=144 style="color: hsl(var(--color-gallery-icon));"
                class="absolute mt-auto" />
        </div>
    </div>
</template>
