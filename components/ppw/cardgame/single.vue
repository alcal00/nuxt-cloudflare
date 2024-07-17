<!--
    sample svg files : https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/
-->

<script setup lang="ts">
import { useMotion } from '@vueuse/motion'

export interface Props {
    id: string | number
    side?: string
    format?: string
    size?: string
    angle?: string
}

const props = withDefaults(defineProps<Props>(), {
    side: "recto",
    format: "png",
    size: '32',
    angle: '0',
})


const show = ref(true)

// card URL :
// https://ludi.paxpar.tech/card/1206/
// https://ludi.paxpar.tech/card/card_1206_recto.png
const card_url = `https://ludi.paxpar.tech/card/card_${props.id}_${props.side}.${props.format}`
const cardLink = `https://ludi.paxpar.tech/card/${props.id}`

//const imgSize = computed(() => ["w-24", "h-24", "md:w-48"])
//const imgSize = computed(() => "w-24 h-24 md:w-48")
const imgSize = computed(() => `w-${props.size} h-${props.size} md:w-${props.size}`)



// the target for animation (card image)
const target = ref<HTMLElement>()

// v-motion-roll-visible-once-right
// inspired from https://github.com/vueuse/motion/blob/5708487317f1d6d17f59df5584518c1983999ecb/src/presets/roll.ts        
//console.log('parseInt(props.angle)', parseInt(props.angle), props)

const motionInstance = useMotion(target, {
    initial: {
        x: 100,
        rotate: -90,
        opacity: 0,
    },
    visibleOnce: {
        x: 0,
        rotate: parseInt(props.angle),
        //rotate: 0,
        opacity: 1,
    },
    hovered: {
        //scale: 1.2,
        rotate: 15,
    },
})

</script>


<template>
    <NuxtLink :to="cardLink" target="_blank">
        <img ref="target" class="md:h-auto mx-auto" :class="imgSize" alt="" width="384" height="512" :src="card_url" />
    </NuxtLink>
</template>

