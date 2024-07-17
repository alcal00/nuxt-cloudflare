<script setup lang="ts">
import { DataSet } from "vis-data/peer";
import { Network } from "vis-network/peer";
import "vis-network/styles/vis-network.css";
import type { DirectionType, Edge, Node } from "vis-network";
import type  {  ChecklistResultNode, ChecklistResultNodes } from '~~/models/checklist'


const props = withDefaults(defineProps<{
    node: ChecklistResultNode;
}>(), {
})


declare interface NetworkVisData {
    nodes: Node[],
    edges: Edge[],
}


function getNodeId(nodes, id) {
    for (const node of nodes) {
        if (node?.id === id) {
            return node
        }
    }
    return undefined
}

function nodesFromTreeNode(n, parentId): NetworkVisData {
    //console.log({ n })
    const attachments = getNodeId(n.children, 'attachments')

    // We don't use DataSet() since add(...nodes) or push(...nodes) does not work
    //const nodes = new DataSet([])

    const nodes: Node[] = []
    const edges: Edge[] = []
    // loop children
    if (attachments?.children) {
        for (const attachment of attachments?.children) {
            const childId = parentId + "__" + attachment.id //TODO + parent
            const label = attachment.name.replace("Fichier ", "")
            //console.log(attachment.id);
        
            nodes.push({ id: childId, label, shape: "box", xx:"hello"})
            edges.push({ from: childId, to: parentId, arrows: "to" })
            //const childAttachments = getNodeId(child.children, 'attachments')
            const { nodes: childNodes, edges: childEdges } = nodesFromTreeNode(attachment, childId)
            nodes.push(...childNodes)
            edges.push(...childEdges)
        }
    }
    return { nodes, edges }
}

const mynetwork = ref()

onMounted(async () => {
    const pdfInfo = getNodeId(props.node.children, 'pdf')
    const { nodes: nodes2, edges } = nodesFromTreeNode(pdfInfo, "ROOT")
    const nodes = new DataSet(nodes2)
    nodes.add({
        id: "ROOT",
        label: "document.pdf",
        shape: "box",
    })
    //console.log(nodes)

    // create a network
    const data = {
        nodes,
        edges,
    }
    const options = {}
    const network = new Network(mynetwork.value, data, options)


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

    // add click event listener to toggle node visibility
    network.on('click', function (params) {
        if (params.nodes.length > 0) {
            const clickedNodeId = params.nodes[0]
            const node = nodes.get(clickedNodeId)
            //console.debug(node?.collapsed)
            const collapsed = (node?.collapsed !== undefined) ? node.collapsed : false
            //console.debug({clickedNodeId, node, collapsed})
            const visitedNodes = new Set(); // Set to keep track of visited nodes
            toggleConnectedNodes(clickedNodeId, !collapsed, visitedNodes); // toggle visibility of clicked node and its connected nodes
        }
    });    
})
</script>

<template>
    <div class="flex-row">
        <UAlert icon="ic:round-notification-important" color="primary" variant="solid" title="Work in progress!"
            description="This feature is not available yet, please contact the support to get access to the preview version." />


        <div class="w-full h-screen" ref="mynetwork"></div>
        </div>
</template>
