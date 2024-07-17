<script setup lang="ts">
import { type ChecklistResultNode } from '~~/models/checklist'

export interface ViewNodeProps {
  node: ChecklistResultNode;
}

const props = defineProps<ViewNodeProps>()


</script>

<template>
    <div class="ml-8">
        <span v-html="props.node.desc"></span>
        <span v-html="props.node.content"></span>
    </div>
</template>
