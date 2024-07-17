<script setup lang="ts">
/*

events see https://visjs.github.io/vis-network/docs/network/#Events
interactive/event demo see https://visjs.github.io/vis-network/examples/network/events/interactionEvents.html


*/

import { DataSet } from "vis-data/peer";
import { Network } from "vis-network/peer";
import "vis-network/styles/vis-network.css";
import type { DirectionType, Edge, Node } from "vis-network";


const props = withDefaults(defineProps<{
  nodes: object[];
  edges: object[];
}>(), {
  nodes: () => [],
  edges: () => [],
})

const showMeta = ref(true)

const mynetwork = ref()
var nodes
var network


//TODO: debounce ??
//watch(props.nodes, () => {
//  refresh()
//})
//watch(props.edges, () => {
//  refresh()
//})
watch(props, () => {
  refresh()
})


// Function to toggle visibility of connected nodes
function toggleConnectedNodes(nodeId: string, hidden: boolean, visitedNodes) {
  if (visitedNodes.has(nodeId)) return; // If node has been visited, exit
  visitedNodes.add(nodeId); // Mark node as visited
  const node = nodes.get(nodeId)
  var connectedNodes = network.getConnectedNodes(nodeId, "from");
  //console.debug({ connectedNodes, visibility: hidden })
  connectedNodes.forEach(function (connectedNodeId) {
    var connectedNode = nodes.get(connectedNodeId);
    connectedNode.hidden = hidden;
    nodes.update(connectedNode);
    toggleConnectedNodes(connectedNodeId, hidden, visitedNodes); // recursively toggle visibility for children nodes
  })
  node.collapsed = hidden
  node.physics = !hidden
}

function clickNode(params) {
  if (params.nodes.length > 0) {
    const clickedNodeId = params.nodes[0]
    const node = nodes.get(clickedNodeId)
    //console.debug(node?.collapsed)
    const collapsed = (node?.collapsed !== undefined) ? node.collapsed : false
    //console.debug({clickedNodeId, node, collapsed})
    const visitedNodes = new Set() // Set to keep track of visited nodes
    toggleConnectedNodes(clickedNodeId, !collapsed, visitedNodes); // toggle visibility of clicked node and its connected nodes
  }
}

function level1() {
  nodes.forEach(function (node) {
    const connectedNodes = network.getConnectedNodes(node.id, "to");
    if (connectedNodes.length === 0) {
      //console.debug('node', node, connectedNodes)

      const connectedNodes2 = network.getConnectedNodes(node.id, "from");
      connectedNodes2.forEach(function (node3) {
        //console.debug('node level 1...', node3)
        const visitedNodes = new Set()
        toggleConnectedNodes(node3, true, visitedNodes)
      })
    }
  })
}


function showAll() {
  nodes.forEach(function (node) {
    node.hidden = false
    nodes.update(node)
  })
}

function debugEvt(eventName, params) {
  console.debug(`debugEvt ${eventName}`, params)
}

function refresh() {
  console.debug('refresh ...')
  //nodes = new DataSet(props.nodes)
  nodes = new DataSet(JSON.parse(JSON.stringify(props.nodes)))


  //const nodes = new DataSet(props.nodes)
  // create a network
  const data = {
    nodes: nodes,
    edges: props.edges,
  }

  const options1 = {
    layout: {
      // set to false because of warning:
      // This network could not be positioned by this version of the improved layout algorithm. Please disable improvedLayout for better performance.
      improvedLayout: false,
    },
  }


  const options2 = {
    layout: {
      hierarchical: {
        direction: "RL",
        sortMethod: "directed",
      },
    },
    //interaction: { dragNodes: false },
    physics: {
      enabled: true,
    },
    /*
    configure: {
      filter: function (option, path) {
        if (path.indexOf("hierarchical") !== -1) {
          return true;
        }
        return false;
      },
      showButton: false,
    },
    */
  }


  network = new Network(mynetwork.value, data, options1)

  // add click event listener to toggle node visibility
  network.on('click', clickNode)
  //network.on('initRedraw', p => debugEvt('initRedraw', p))
  //network.on('beforeDrawing', p => debugEvt('beforeDrawing', p))
  //network.on('afterDrawing', p => debugEvt('afterDrawing', p))
  //network.on('animationFinished', p => debugEvt('animationFinished', p))  
}

function showHideMeta() {
  showMeta.value = !showMeta.value

  nodes.forEach(function (node) {
    if (node.label === 'meta.yaml') {
      //console.debug(node)
      node.hidden = !showMeta.value
      nodes.update(node)
    }
  })

}

onMounted(async () => {
  setTimeout(refresh, 100)

})
</script>


<template>
  <div class="flex space-x-4 justify-center m-3">
    <UButton label="refresh" @click="refresh" />
    <UButton label="root" @click="level1()" />
    <UButton label="meta" @click="showHideMeta()" :variant="showMeta ? 'solid' : 'outline'" />
    <UButton label="all" @click="showAll()" />
  </div>
  <div class="w-full h-screen" ref="mynetwork"></div>
</template>
