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


const nodes = ref([])
const edges = ref([])

function getNodeId(nodes, id) {
    for (const node of nodes) {
        if (node?.id === id) {
            return node
        }
    }
    return undefined
}


// cf https://visjs.github.io/vis-network/examples/
const NODE_DEFAULT_PROPS = {
    shape: "box",
    color: "#FFFF00",
 }

const NODE_EXT_PROPS = {
    pdf: { color: "#97C2FC" },
    yaml: { color: "#C2FABC" },
    xlsx: { color: "#FFA807" },
}

const NODE_NAME_PROPS = {
    "document.pdf": { color: "#FFFFFF" },
    "meta.yaml": { color: "#C2FABC", shape: "ellipse" },
}

function _NodeVisualPropsFromLabel(label: string) {
    //label.endsWith
    const extension = `xxx.${label}`.split('.').reverse()[0].toLowerCase()
    const label2 = label.toLowerCase()
    //if ()
    return {
        ...NODE_DEFAULT_PROPS,
        ...extension in NODE_EXT_PROPS ? NODE_EXT_PROPS[extension] : {},
        ...label2 in NODE_NAME_PROPS ? NODE_NAME_PROPS[label2] : {},        
    }
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
        
            nodes.push({
                ..._NodeVisualPropsFromLabel(label),
                id: childId,
                label,
            })
            edges.push({
                from: childId,
                to: parentId,
                arrows: "to",
                color: { inherit: "from" },                
             })
            //const childAttachments = getNodeId(child.children, 'attachments')
            const { nodes: childNodes, edges: childEdges } = nodesFromTreeNode(attachment, childId)
            nodes.push(...childNodes)
            edges.push(...childEdges)
        }
    }
    return { nodes, edges }
}

onMounted(async () => {
    const pdfInfo = getNodeId(props.node.children, 'pdf')
    const { nodes: nodes2, edges: edges2 } = nodesFromTreeNode(pdfInfo, "ROOT")
    const label = "document.pdf"
    nodes2.push({
        id: "ROOT",
        label,
        ..._NodeVisualPropsFromLabel(label),
    })

    nodes.value = nodes2
    edges.value = edges2
})
</script>

<template>
    <ppw-network :nodes="nodes" :edges="edges" />
</template>
