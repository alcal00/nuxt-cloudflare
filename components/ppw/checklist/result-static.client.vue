<script setup lang="ts">
import { type ChecklistResultNode } from "~~/models/checklist"
import { expandPath } from "~~/src/reftools"
import { load } from "js-yaml"

const toast = useMyToast()
const backend = useBackend()


export interface ChecklistResultProps {
  //node: ChecklistResultNode;
  path?: string
  result?: ChecklistResultNode // | ChecklistResultNodes;
  show_root?: boolean
  hide_modes_selector?: boolean
  mode?: string
  auto_propagate_status?: boolean
  zoom_disabled?: boolean
}

const props = withDefaults(defineProps<ChecklistResultProps>(), {
  show_root: false,
  hide_modes_selector: false,
  mode: "basic",
  auto_propagate_status: true,
  zoom_disabled: false,
})

const needLoading = ref(props.path !== undefined)
const isLoading = ref(needLoading.value)

//const path = '/carnet_paul'
const node = ref<ChecklistResultNode>()

/*

*/
function propagateStatus(node: ChecklistResultNode, parentStatus?: string) {
  //console.log('Propagate status ...', node)
  const children = node?.children || []
  let max_children_status = ""
  for (let child of children) {
    propagateStatus(child, node.status)
  }
}

const expandedPath = computed(() => {
  // Expand the given url with paxpar API backend
  return expandPath(props.path, backend)
})


async function doFetchNode() {
  if (needLoading.value) {

    isLoading.value = true
    const p = expandedPath.value
    var res: ChecklistResultNode | undefined
    if (p === undefined) return undefined

    if (p?.startsWith('http')) {
      // if expanded path is an URL (starts with http), fetch as an URL (absolute)
      res = await fetchURL(p)
    }
    else {
      // else fetch as a content
      res = await fetchContent(p)
      if (res === undefined) {
        // else fetch as an URL (relative)
        res = await fetchURL(p)
      }

    }
  } else if (props.result) {
    // if the node content is given directly (no need to fetch it)
    res = props.result
  }

  // if we need to compute the status
  if (props.auto_propagate_status && res) {
    propagateStatus(res, "OK")
  }

  if (res) {
    node.value = res
  }
  isLoading.value = false
}


async function fetchURL(path: string): Promise<ChecklistResultNode | undefined> {
  let nodeContent
  let infoMsg

  // ... we try to load it as a regular ressource (public folder)
  const { data, error } = await useFetch(path)
  //console.log({ data, error })

  if (error.value) {
    console.error(`${path} not found !`)
    toast.error(`${path} not found !`)
    return
  }

  // if we get a string, it may be a YAML payload
  if (typeof data.value === "string") {
    nodeContent = load(data.value)
    infoMsg = `checkresult YAML fetched from ${path}`
    //console.log("yaml nodeContent", nodeContent)
  } else {
    // otherwise it should be an object (JSON payload deserialized)
    nodeContent = data.value
    infoMsg = `checkresult JSON fetched from ${path}`
  }
  return nodeContent
}

async function fetchContent(path: string): Promise<ChecklistResultNode | undefined> {
  // we try to load it from nuxt content (content folder)
  const nodeContent = await queryContent().where({ _path: path }).findOne()
  //console.log({ req })
  //infoMsg = `checkresult content fetched from  ${newVal}`
  return nodeContent as ChecklistResultNode
}


watch(
  () => props.path,
  async (newVal, oldVal) => {
    console.debug('watch props.path ', newVal)
    await doFetchNode()
  }
)

watch(
  () => props.result,
  async (newVal, oldVal) => {
    console.debug('watch props.result ', newVal)
    await doFetchNode()
  }
)

/*
onMounted(async () => {
  //await doFetchNode()
})
*/

//const { data, error } = await useFetch(" https://dev.paxpar.tech/api/bucket/public/dummy/cl_valise_securite_amoa_ko.yaml")
//console.debug("cccc", { data, error })
await doFetchNode()

</script>

<template>
  <div class="p-8 rounded-lg shadow-lg relative">
    <div id="main" :class="{ 'blurred': isLoading }" class="relative">
      <ppw-checklist-result :node="node" :show_root="show_root" :hide_modes_selector="hide_modes_selector" :mode="mode"
        :auto_propagate_status="auto_propagate_status" :zoom_disabled="zoom_disabled" />
      <!--
      <p>props = {{ props }}</p>
      <p>expandedPath = {{ expandedPath }}</p>
      <p>needLoading = {{ needLoading }}</p>
    -->
    </div>
    <div id="loading-spinner">
      <span v-if="isLoading" class="loading loading-ring loading-lg"></span>
    </div>
  </div>
</template>

<style scoped>

#loading-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#main.blurred {
  filter: blur(5px);
  /* Adjust the blur amount as needed */
}
</style>

