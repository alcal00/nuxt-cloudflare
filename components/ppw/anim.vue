<script setup lang="ts">
import type { Transpose, TransposeSpot, DeckInfo, StageInfo, PageInfo } from '~~/models/anim'
import type { NavItem } from '@nuxt/content/dist/runtime/types'


/*
cf https://greensock.com/docs/v3/GSAP/Timeline
cf https://greensock.com/docs/v3/GSAP/Timeline
cf https://github.com/slidevjs/slidev
cf https://codepen.io/tigt/post/improving-svg-rendering-performance
cf https://stackoverflow.com/questions/53862125/svg-why-does-getboundingclientrect-return-190-when-y-attribute-is-200

svg.querySelector('svg *|page')


svg.querySelector('@namespace inkscape "http://www.inkscape.org/namespaces/inkscape"; svg inkscape|page')


xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
*/
import gsap from "gsap"

const props = withDefaults(
  defineProps<{
    href?: string
    localFile?: any //UseFileSystemAccessReturn
    transposeDef?: Transpose
    transposeSpot?: TransposeSpot
    noControls?: boolean
    hideZoomButton?: boolean
    stripButtonRibbon?: boolean
    speed?: string
    debugInfo?: boolean
  }>(),
  {
    noControls: false,
    hideZoomButton: false,
    stripButtonRibbon: false,
    speed: "1.0",
    debugInfo: false,
  }
)

const MAX_STAGES = 20
const PAGE_DELAY = 1 // s
const STAGE_DELAY = 1 // s
const STAGGER_DELAY = 0.1 // s
const applyTranspose = false

const toast = useMyToast()

var tl: gsap.core.Timeline

const zoom = ref(false)
const stripButtonRibbon = ref(props.stripButtonRibbon)
// start with loading = false
const loading = ref(false)

const container = ref()
const raw_svg = ref()
const svg_node = ref()
const deck_info = ref<DeckInfo>({
  node: undefined,
  pages: [],
})
const autoplay = ref(true)
const speed: Ref<number> = ref(parseFloat(props.speed))
/*
const _progress = ref(0)
const progress = computed({
  // getter
  get() {
    return _progress.value
  },
  // setter
  set(newValue) {
    // Note: we are using destructuring assignment syntax here.
    _progress.value = newValue
    tl.progress(newValue / 1000)
  }
})
*/

/*
props.localFile.fileLastModified
 */
watch(
  () => props?.href,
  async (newValue, oldValue) => {
    //console.debug({ newValue, oldValue })
    await loadSVG()
  }
)
watch(
  () => props?.localFile?.fileLastModified,
  async (newValue, oldValue) => {
    //console.debug({ newValue, oldValue })
    await loadSVG()
  }
)

watch(autoplay, async (newValue, oldValue) => {
  //console.log("autoplay", { newValue, oldValue })
  if (newValue) {
    tl.play()
  } else {
    tl.pause()
  }
})

watch(speed, async (newValue, oldValue) => {
  //console.log("autoplay", { newValue, oldValue })
  tl.timeScale(newValue)
})


const loadSVG = async () => {
  // Don't hide the svg node or it will not compute page rect dimensions correctly !!
  loading.value = true
  // start with a new timeline
  if (tl) {
    tl.clear(true)
    tl.kill()
  }
  tl = gsap.timeline({ repeat: -1, repeatDelay: 2 })

  if (props.href) {
    //console.debug("loadSVG from href ...")
    // https://philippe.paxpar.tech/api/ref/public
    //var data = await $fetch2(props.href, { parseResponse: txt => txt })
    try {
      var data = await $fetch(props.href, { parseResponse: (txt) => txt })
      raw_svg.value = data
    } catch (err) {
      toast.error(`Erreur lors de la récupération de l'animation ${props.href}`)
    }
  } else {
    //console.debug("loadSVG from localFile ...")
    // updateDate fails until :
    // see https://github.com/vueuse/vueuse/issues/3779
    // see https://github.com/vueuse/vueuse/pull/3780
    await props.localFile.updateData()
    //console.debug('fileLastModified=', props.localFile.fileLastModified)

    //raw_svg.value = content.value
    raw_svg.value = props.localFile.data.value
  }
  // we can't have valid ref now, let's delay a bit to fix this
  setTimeout(loadSVG2, 100)
}



const loadSVG2 = () => {
  const svg = container.value.querySelector("svg")
  const deck: DeckInfo = {
    node: svg,
    pages: [],
  }

  deck_info.value = deck
  svg_node.value = svg

  // TODO: better way to fix the width/height values
  //     width="3840"     -->     width="100%"
  //     height="2160"    -->     height="auto"
  //
  // 'auto' generate a JS error
  //svg.setAttribute('width', 'auto')
  //svg.setAttribute('height', 'auto')
  svg.setAttribute("width", "100%")
  svg.setAttribute("height", "100%")
  //console.log('svg', svg)


  if (applyTranspose) {
    applyTransposeColor(svg)
    applyTransposeLogo(svg)
    applyTransposeText(svg)
    applyTransposeImage(svg)
  }


  // get all pages
  const pages_nodes = svg.children[0].children
  // cf https://stackoverflow.com/questions/35969974/foreach-is-not-a-function-error-with-javascript-array
  Array.prototype.forEach.call(pages_nodes, (pages_node, index) => {
    //console.debug(`page ${index}`, pages_node)
    const rect = createSVGRect(svg,
      pages_node.getAttribute("x"),
      pages_node.getAttribute("y"),
      pages_node.getAttribute("width"),
      pages_node.getAttribute("height"),
    )
    // Don't hide/delete now, we need it visible
    // to get its dimensions !!
    //rect.setAttribute('visibility', 'hidden');

    const page: PageInfo = {
      rect: rect,
      stages: [],
    }
    deck.pages.push(page)
  })
  //console.debug('loadSVG2 deck', deck_info)

  // we can't have valid svg rect dimensions now, let's delay a bit to fix this
  setTimeout(loadSVG3, 100)
}


const loadSVG3 = () => {
  // get stages per page
  for (var stage = 1; stage <= MAX_STAGES; stage++) {
    const nodes = svg_node.value.querySelectorAll(`svg [ref='stage${stage}']`)
    nodes.forEach((node, nodeIndex) => {

      deck_info.value.pages.forEach((page: PageInfo, pageIndex) => {
        const inPage = areSVGNodesIntersecting(node, page.rect)
        //const inPage = false
        if (inPage) {
          //console.debug(`node added to page ${pageIndex}`, node)
          // fill empty stages
          while (page.stages.length < stage) {
            // add empty stage
            page.stages.push({ nodes: [] })
          }
          page.stages[stage - 1].nodes.push(node)
        }
      })
    })
  }

  // fill timeline for each page
  deck_info.value.pages.forEach((page, indexPage) => {

    // page animation (viewbox)
    const r: SVGRectElement = page.rect
    const viewBox = `${Math.round(r.attributes.x.value)} ${Math.round(r.attributes.y.value)} ${Math.round(r.attributes.width.value)} ${Math.round(r.attributes.height.value)}`
    //console.debug(`viewBox : ${viewBox}`, r.attributes.x, r.attributes.y, r.attributes.width, r.attributes.height)
    tl.to(
      deck_info.value.node,
      {
        attr: { viewBox },
        duration: PAGE_DELAY,
      },
      `page${indexPage + 1}`
    )

    // stages animation
    page.stages.forEach((stage, indexStage) => {
      if (stage.nodes.length > 0) {
        tl.from(
          stage.nodes,
          {
            //y: 200,
            opacity: 0,
            duration: STAGE_DELAY,
            stagger: STAGGER_DELAY,
          },
          `page${indexPage + 1}-stage${indexStage + 1}`
        )
      }
    })

    // hide the page rect now
    // if we do that before we may get wrong rect dimensions !!
    page.rect.setAttribute('visibility', 'hidden');
  })

  // (re)start the animation
  tl.restart()
  if (autoplay.value) {
    tl.play()
  } else {
    tl.pause()
  }


  //updateProgress()
  loading.value = false

  //console.debug('loadSVG3 deck', deck_info)
}


function updateProgress() {
  progress.value = tl.progress() * 1000
  gsap.delayedCall(1, updateProgress);

}
const applyTransposeImage = (svg: SVGElement) => {
  //TODO ...
  /*
    // fix href for images
    const nodes = svg.querySelectorAll(`svg image`)
    nodes.forEach((node, index) => {
        if (node.hasAttribute('xlink:href')) {
            const old_href = node.getAttribute('xlink:href')
        }
    })
    */
}

const applyTransposeColor = (svg: SVGElement) => {
  const colorKeyTarget = props?.transposeSpot?.color
  // colorKeyTarget = 'cs'
  const colorsDef = props?.transposeDef?.color
  /*
    colorsDef = [{
        pp: "#655151ff",
        cs: "#655151ff",
    }, {
        pp: "#1197a563",
        cs: "#1197a563",
    }]
    */

  if (colorKeyTarget === undefined || colorsDef === undefined) {
    return
  }

  // loop over all color sets defined in transposeDef
  colorsDef.forEach((colorDef, index) => {
    /*
        colorDef = {
            pp: "#655151ff",
            cs: "#655151ff",
        }
        */
    // the target color for this key
    const colorTarget = colorDef[colorKeyTarget]
    const colorKeys = Object.keys(colorDef)
    // loop over all key in color set
    colorKeys.forEach((colorKey, index) => {
      // colorKey = 'pp'
      if (colorKey !== colorKeyTarget) {
        const colorSource = colorDef[colorKey]
        if (colorSource !== colorTarget) {
          //console.log(`transpose color ${colorKeyTarget} from ${colorSource} to ${colorTarget}`)
          /*
                    fill:#1197a5;fill-opacity:0.38924;stroke:none;stroke-width:1.565;stroke-dasharray:none;stroke-opacity:1;stop-color:#000000
                    */
          const nodes = svg.querySelectorAll(`svg [style*="fill:#1197a5"]`)
          nodes.forEach((node: SVGElement, index) => {
            const style = node.attributes["style"]
            //console.log('color transpose on ', node, style)
            node.style.fill = colorTarget
          })
        }
      }
    })
  })
}

const applyTransposeLogo = (svg: SVGElement) => {
  if (props?.transposeSpot?.logo) {
    console.debug(`apply transpose logo ${props.transposeSpot.logo}`)
  }
}

const applyTransposeText = (svg: SVGElement) => {
  if (props?.transposeSpot?.text) {
    console.debug(`apply transpose text ${props.transposeSpot.text}`)
  }
}


/*
Used to know on which page a node is (node2 is the page rect)
*/
function areSVGNodesIntersecting(node1, node2) {
  // Get bounding boxes of the SVG nodes relative to the viewport
  const rect1 = node1.getBoundingClientRect();
  const rect2 = node2.getBoundingClientRect();

  // Check for intersection
  const res = !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  )
  //console.debug(res, rect1, rect2)

  return res
}


/*
// Example usage
createSVGRect(svg, 50, 50, 100, 80);
*/
function createSVGRect(svg, x, y, width, height) {
  // Create a new SVG rect element
  var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

  // Set attributes for the rect
  rect.setAttribute("x", x);
  rect.setAttribute("y", y);
  rect.setAttribute("width", width);
  rect.setAttribute("height", height);
  rect.setAttribute("fill", "blue"); // Example fill color

  // Append the rect to the SVG object
  //var svg = document.getElementById("svgObject");
  svg.appendChild(rect)
  return rect
}


function svg_goto_page(indexPage, indexStage = undefined) {
  const targetPage = autoplay.value ? indexPage : indexPage + 1
  const targetPos = indexStage ? `page${targetPage}-stage${indexStage + 1}` : `page${targetPage}`
  //console.log(`goto page ${indexPage} ...`)
  tl.seek(targetPos)
  if (autoplay.value) {
    tl.play()
  } else {
    tl.pause()
  }
}


async function doZoom() {
  zoom.value = !zoom.value
  await loadSVG()
}

// cf https://vuejs.org/api/sfc-script-setup.html#defineexpose
defineExpose({
  loadSVG: loadSVG,
})



//TODO: does not work, svg nodes are not HTML nodes
function highlightDebugToggle(node: HTMLElement) {
  console.debug(node)
  node.classList.toggle("highlightDebug");
}

onMounted(async () => {
  //setTimeout(loadSVG, 100)
  await loadSVG()
})
</script>


<template>
  <ppw-fullscreen v-model="zoom">
    <div class="stack w-full">
      <!-- loading ... -->
      <div v-if="loading">
        <div class="flex items-center space-x-4 h-80">
          <USkeleton class="h-12 w-12" :ui="{ rounded: 'rounded-full' }" />
          <div class="space-y-2">
            <USkeleton class="h-4 w-[250px]" />
            <USkeleton class="h-4 w-[200px]" />
            <USkeleton class="h-4 w-[220px]" />
          </div>
        </div>
      </div>
      <!-- SVG content -->
      <!-- don't v-if/v-show since we need it visible to get the correct rect dimensiosn !!! -->
      <div  ref="container" class="object-contain w-full" v-motion-fade v-html="raw_svg"></div>
    </div>
    <!-- control buttons ribbon -->
    <div v-if="noControls !== true" class="flex my-4 w-full">
      <template v-if="!stripButtonRibbon">
        <!-- play / pause -->
        <UButton @click="autoplay = !autoplay" variant="outline" class="mr-4">
          <UIcon :name="autoplay ? 'i-mdi:pause' : 'i-mdi:play'" size="32"></UIcon>
        </UButton>

        <!-- go to page buttons -->
        <UButtonGroup size="sm" orientation="horizontal">
          <UButton v-for="(page, indexPage) in deck_info.pages" @click="svg_goto_page(indexPage + 1)" variant="outline">
            {{ indexPage + 1 }}
          </UButton>
        </UButtonGroup>

        <!-- reload button -->
        <UButton @click="loadSVG" variant="outline" class="btn px-2 mx-4">
          <UIcon name="oi:reload" size="32"></UIcon>
        </UButton>

        <!-- speed buttons -->
        <UButtonGroup size="sm" orientation="horizontal">
          <UButton @click="speed = 0.5" :variant="speed == 0.5 ? 'solid' : 'outline'">
            <UIcon name="fluent:animal-turtle-16-filled" size="32"></UIcon>
          </UButton>
          <UButton @click="speed = 1" :variant="speed == 1 ? 'solid' : 'outline'">
            <UIcon name="fluent:animal-rabbit-24-filled" size="32"></UIcon>
          </UButton>
        </UButtonGroup>

        <!-- zoom button -->
        <UButton v-if="!hideZoomButton" @click="doZoom" :variant="zoom ? 'solid' : 'outline'" class="mx-4">
          <UIcon name="ic:baseline-zoom-out-map" size="32" />
        </UButton>
        <!--
        <URange :min="0" :max="1000" v-model="progress" />
          -->
      </template>

      <!-- strip open/close button -->
      <UButton @click="stripButtonRibbon = !stripButtonRibbon" :variant="stripButtonRibbon ? 'outline' : 'solid'"
        class="mx-4">
        <UIcon :name="stripButtonRibbon ? 'mdi:arrow-right-bold' : 'mdi:arrow-left-bold'" size="32" />
      </UButton>

    </div>

    <div v-if="props.debugInfo">
      <template v-for="(page, pageIndex) in deck_info.pages">
        <div class="w-full bg-blue-400">Page {{ pageIndex + 1 }}
          <UButton @click="svg_goto_page(pageIndex)" label="go" />
        </div>
        <template v-for="(stage, stageIndex) in page.stages">
          <div v-if="stage.nodes.length > 0">
            Stage {{ stageIndex + 1 }}
            <UButton @click="svg_goto_page(pageIndex, stageIndex)">Go</UButton>

            <template v-for="(node, nodeIndex) in stage.nodes">
              <UButton @click="highlightDebugToggle(node)">Node {{ nodeIndex + 1 }}</UButton>
            </template>
          </div>
        </template>
      </template>
    </div>



  </ppw-fullscreen>
</template>


<style scoped>
.highlightDebug {
  background-color: aqua;
  visibility: visible;
  border: 3px;
}
</style>