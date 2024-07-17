<script setup lang="ts">
import { type ChecklistResultNode } from '~~/models/checklist'

export interface ViewNodeProps {
  node: ChecklistResultNode;
}

const props = defineProps<ViewNodeProps>()

</script>

<template>
    <pre>
        {{ props.node.name }}
    </pre>
</template>
