<!--
    sample svg files : https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/
-->

<script setup lang="ts">

export interface Props {
  size?: string
  cards: Array<string>
  arc?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: "32",
  arc: false,
})

const angle_max = 18
const angle_step = (props.cards.length && props.cards.length > 1) ? (angle_max * 2) / (props.cards.length - 1) : 0

/*
const angleClass = (index: number) => {
  const angle = Math.round(-angle_max + index * angle_step)
  const angle2 = angle < 0 ? angle + 360 : angle
  //const res = angle < 0 ? `-rotate-[${-angle}deg]` : `rotate-[${angle}deg]`
  const res = `rotate-[${angle2}deg]`

  console.log('angleClass', index, res)
  return res
}
*/

const angleCard = (index: number) => {
  if (props.arc) {

    const angle = Math.round(-angle_max + index * angle_step)
    
    //console.log('angleCard', angle)
    return angle
  } else {
    return 0
  }
}

//console.log('angle_step=', angle_step)
</script>

<template>
  <div class="flex space-x-4 ">
      <ppw-cardgame-single
        v-for="card_id, index in props.cards"
        :index="card_id"
        :id="card_id"
        :size="props.size"
        :angle="angleCard(index).toString()"
      />  
  </div>
</template>