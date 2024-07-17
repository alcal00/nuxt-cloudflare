<script setup lang="ts">
import { expandPath } from "~~/src/reftools"

const props = withDefaults(defineProps<{
    name: string
    hidename?: boolean
    inline?: boolean
    // allow number AND string for size since HTML attr will always be passed as string
    size?: number | string
    link?: boolean
}>(), {
    hidename: false,
    inline: true,
    size: 5,
    link: false,
})



const backend = useBackend()

const imgURL = computed(() => {
    // Expand the given url with paxpar API backend
    const aliasURL = `🌐pp/api/bucket/public/avatar/people_${props.name}-light.png`
    //TODO:move to paxpar-media public ??
    //return expandPath(aliasURL, backend)
    // 'https://media.paxpar.tech/avatar/people_patrick-light.png'
    return `https://media.paxpar.tech/avatar/people_${props.name}-light.png`
})

</script>

<template>
    <nuxt-link :to="link === true ? `/actor/${name}` : ''">
        <span :class="hidename ? '' : 'badge badge-md'">
            <div :class="`w-${size} rounded-full`">
                <img :src="imgURL" />
            </div>
            <p v-if="!hidename" class="pl-2">{{ name }}</p>
            <slot />
        </span>
    </nuxt-link>
</template>