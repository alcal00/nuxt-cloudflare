<script setup lang="ts">
import {
  type ChecklistResultNode,
  type Status,
  type ChecklistStatusIconTheme,
} from "~~/models/checklist"
import { theme, statusColor } from "~~/src/checktools"

const props = withDefaults(
  defineProps<{
    node?: ChecklistResultNode
  }>(),
  {}
)

// events
const emit = defineEmits<{
  (e: "redirect", targetMode: string): void
}>()

const icon_size = "96"

const simpleStatus = computed<Status>(() => {
  return props?.node?.status as Status
})

const themeIcon = computed<ChecklistStatusIconTheme>(() => {
  return theme.checklist.status[simpleStatus.value]
})

function onClick() {
  //console.log("emit2 ....")
  const targetMode = simpleStatus.value == "KO" ? "nonconformity" : "basic"
  emit("redirect", targetMode)
}
</script>

<template>
  <div v-if="props.node" @click="onClick" class="card w-full bg-base-100 shadow-none">
    <figure class="px-10 pt-10">
      <UIcon :name="themeIcon?.icon" :size="icon_size" :style="{
          color: statusColor(themeIcon?.hue, false),
          'font-size': icon_size,
        }" />
    </figure>
    <div class="card-body items-center text-center">
      <template v-if="simpleStatus == 'KO'">
        <h2 class="card-title">Non conforme !</h2>
        <p>Le document n'est pas conforme !</p>
        <p>Cliquez pour obtenir le détail des anomalies.</p>
      </template>

      <template v-else>
        <h2 class="card-title">Conforme !</h2>
        <p>Le document est conforme.</p>
        <p>Cliquez pour obtenir le détail.</p>
      </template>
    </div>
  </div>
</template>

<style></style>
