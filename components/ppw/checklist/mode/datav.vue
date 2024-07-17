<script setup lang="ts">
import type { ChecklistResultNode, ChecklistResultNodes } from '~~/models/checklist'


const props = withDefaults(defineProps<{
  node: ChecklistResultNode;
  show_root?: boolean;
  path?: string;
}>(), {
  show_root: true,
  path: '',
})

const expanded = ref(false)

const icon_size = '32'

//console.log({ props })

// an object as a list of nodes
function objectAsNodes(obj: Object) {
  const nodes = []

  //TODO: call objectAsNodes
  for (let [key, value] of Object.entries(obj)) {
    console.log(key, value)
    // create the node to show
    nodes.push({
      id: key,
      content: value,
      icon: "mdi:developer-board",
      //children: children,
    })

  }
  return nodes
}

// the node props as a list of node
const propsAsNodes = computed(() => {
  const nodes = []

  //const nodeProps = props.node.props || new Map([])
  console.log("props.node.props", props.node.props)


  //const nodeProps = new Map(props.node.props || [])
  const nodeProps = new Map(Object.entries(props.node.props || {}))
  console.log("nodeProps", nodeProps)


  //for (const [key, value] of nodeProps) {
  nodeProps.forEach((value, key) => {
    console.log(key, value)

    // fill children (if any)
    const children = []
    if (value !== null) {
      if (Array.isArray(value)) {
        console.log("the prop value is an array")
      }
      else if (typeof value === 'object') {
        console.log("the prop value is an object")
        children.push(...objectAsNodes(value))
      } else {
        console.log("the prop value is an unknown type, we assume it has no children to show !")
      }
    }

    // create the node to show
    nodes.push({
      id: key,
      name: "N/A",
      icon: "mdi:developer-board",
      children: children,
    })
  })

  return nodes
})


// full path
const fullPath = computed(() => {
  const noPath = ((props.path === undefined) || (props.path.length == 0))
  return noPath ? `${props.node.id}` : `${props.path}.${props.node.id}`
})


const clippedContent = computed(() => (props.node.content || "").substring(0, 40))


onMounted(() => {
  if (!props.show_root) {
    expanded.value = true
  }
})


</script>


<template>
  <div v-if="props.node" class="ml-3">
    <div v-if="props.show_root" @click="expanded = !expanded" class="flex justify-between">

      <div class="flex">
        <!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->
        <template v-if="(props.node.children || []).length > 0">
          <icon v-if="expanded" name="mdi:menu-right" rotate="90deg" :size="icon_size" />
          <icon v-else name="mdi:menu-right" :size="icon_size" />
        </template>
        <icon v-else name="mdi:menu-right-outline" style="color: rgba(0, 0, 0, 0);" :size="icon_size" />

        <!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->
        <!-- node icon -->
        <UIcon v-if="props.node.icon" :name="props.node.icon.replace('mdi-', 'mdi:')" :size="icon_size" />
        <UIcon v-else name="mdi:dev-to" :size="icon_size" />

        <!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->
        <!-- node name -->
        <span v-html="props.node.id" class=""></span>
        <template v-if="props.node.content">
          =&nbsp;
          <copy-button :content="props.node.content" />
          <span v-html="clippedContent" class="bg-blue-400"></span>
        </template>

        <copy-button :content="fullPath" />

      </div>
    </div>

    <!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->
    <template v-if="expanded">
    </template>
    <template v-if="expanded">
      <ppw-checklist-mode-datav v-for="(node, index) in propsAsNodes" :key="index" :node="node" :show_root="true"
        :path="fullPath" />
      <ppw-checklist-mode-datav v-for="(node, index) in props.node.children" :key="index" :node="node" :show_root="true"
        :path="fullPath" />
    </template>

  </div>
</template>
