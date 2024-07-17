<!--
TODO:
* [x] page markdown
* [ ] avoir le nb de PDF
* [x] format nombre (sep millier)
* [x] timer refresh auto
* [x] animation chagement valeur
* [x] doc sur paxpar-front
* [x] style à améliorer
* [-] composant existant
* [x] btn refresh

-->
<script setup lang="ts">
import { useIntervalFn } from "@vueuse/core"
import { TransitionPresets, useTransition } from "@vueuse/core"

const { useFetchPP } = usePaxparAPI()

const metricValue = ref(0)
const REFRESH_PERIOD = 10000 // 10 seconds

export interface Props {
  name?: string
  title?: string
  desc?: string
  icon?: string
  noRefresh?: boolean
  fake?: boolean
  domain?: string
  user?: string
  offset?: string
}

const props = withDefaults(defineProps<Props>(), {
  //TODO: use PDF number
  name: "go_memstats_frees_total",
  title: "",
  desc: "",
  noRefresh: false,
  fake: false,
})

// animate metric value changes
const metricValueBlended = useTransition(metricValue, {
  duration: REFRESH_PERIOD,
  transition: TransitionPresets.easeInOutCubic,
})

async function refreshMetrics() {
  if (props.fake) {
    //const newValue = Math.floor(Math.random() * 1000000)
    //metricValue.value = newValue
    metricValue.value = metricValue.value + 5 + Math.floor(Math.random() * 100)
  } else {
    //alert('Refresh ...')
    //console.log('name', props.name)
    // http://localhost:8881/api/metric/simple/go_memstats_frees_total
    const { data } = await useFetchPP(`/api/metric/${props.name}`, {
      query: {
        domain: props?.domain,
        user: props?.user,
        offset: props?.offset,
      },
    })
    //console.log(`/api/metric/simple/${props.name}`)
    //console.log(query)
    //console.log(data)

    /*
        const req = await fetch(
            `http://localhost:8881/api/metric/simple/${props.name}`
        )
        */
    //TODO: what if it is no a float ?
    //const newValue = parseFloat(await req.json())
    const newValue = parseFloat(data.value as string)
    metricValue.value = newValue
  }
  //console.log({newValue})
}

onMounted(async () => {
  //console.log('mounted ...', props.refreshAuto);
  await refreshMetrics()
  if (props.noRefresh === false) {
    // start automatic refresh
    const { isActive } = useIntervalFn(async () => {
      await refreshMetrics()
    }, REFRESH_PERIOD)
  }
})
</script>

<template>
  <div @click="refreshMetrics" class="stats shadow">
    <div class="stat place-items-center">
      <div v-if="icon" class="stat-figure text-secondary">
        <icon name="uil:github" size="32" />
      </div>
      <div class="stat-title">{{ title }}<slot /></div>
      <div class="stat-value">{{ Math.round(metricValueBlended).toLocaleString() }}</div>
      <div class="stat-desc">{{ desc }}</div>
    </div>
  </div>
</template>
