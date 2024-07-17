<script setup lang="ts">
import { expandPath } from "~~/src/reftools"

const toast = useMyToast()
const colorMode = useColorMode()

const isLoading = ref(true)

const props = withDefaults(
  defineProps<{
    href: string
  }>(),
  {}
)

const emit = defineEmits(["loaded", "update:modelValue"])

const raw_svg = ref()
const raw_svg_original = ref()

const container = ref()

const task = () => {
  const svg = container.value.querySelector("svg")
  // console.log({ svg })
  // svg.setAttribute('width', '100%')
  // svg.setAttribute('height', '100%')
  console.log({ svg })

  if (svg) {
    // emit and th svg node
    console.log("emit1 ...")
    emit("update:modelValue", svg)
    console.log("emit2 ...")
    emit("loaded", svg)
  }
}

async function doUpdateSvg() {
  isLoading.value = true
  if (props.href) {
    const backend = useBackend()

    //console.log(`loading ${props.href} ...`, props.href)
    const href2 = expandPath(props.href, backend)
    try {
      // https://philippe.paxpar.tech/api/ref/public
      var data = await $fetch(href2, { parseResponse: (txt) => txt })
      //console.log({ data })
      var data2 = data as string
      data2 = data2.replace('width="3840"', 'width="100%"')
      data2 = data2.replace('height="2160"', 'height="100%"')
      raw_svg_original.value = data2
      updateColor()
      //  TODO: better way to fix the width/height values
      //
      //  width="3840"     -->     width="100%"
      //  height="2160"    -->     height="auto"
      //
      // we can have valid ref now
      setTimeout(task)
    } catch (err) {
      toast.error(`Erreur lors de la récupération de l'animation ${props.href}`)
    }
  }
  isLoading.value = false
}


async function updateColor() {
  //TODO: use a better approach, see https://graphicdesign.stackexchange.com/questions/159669/is-it-possible-to-parametrize-colors-in-the-inkscape
  console.debug("update color ...")
  const specialChar = "ù"
  var src = raw_svg_original.value
  //if (colorMode.value)
  /*
  src = src.replace(':#000000', `:#${specialChar}ffffff`)
  src = src.replace(':#ffffff', `:#${specialChar}000000`)
  src = src.replace(specialChar, '')
  */
  raw_svg.value = src
}

watch(
  () => props.href,
  async (newVal, oldVal) => {
    //await updatePath(newVal)
    console.debug("watch props.href ", newVal)
    await doUpdateSvg()
  }
)

watch(
  () => colorMode,
  async (newVal, oldVal) => {
    await updateColor()
  }
)

onMounted(async () => {
  await doUpdateSvg()
})
</script>

<template>
  <div class="outer-div relative">
    <div
      ref="container"
      v-html="raw_svg"
      :class="{ blurred: isLoading }"
      class="inner-div"
      v-motion-fade
    ></div>
    <div id="loading-spinner">
      <span v-if="isLoading" class="loading loading-ring loading-lg"></span>
    </div>
  </div>
</template>

<style>
.col1 {
  background-color: aquamarine !important;
}

.col2 {
  background-color: yellowgreen !important;
}

.outer-div {
  /* background-color: aquamarine; */
}

.inner-div {
  /* background-color: rgb(41, 57, 10); */
}

#loading-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.blurred {
  filter: blur(5px);
}
</style>
