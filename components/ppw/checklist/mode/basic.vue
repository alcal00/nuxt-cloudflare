<script setup lang="ts">
import { type ChecklistResultNode } from "~~/models/checklist"
import { theme, statusColor } from "~~/src/checktools"

import { TransitionRoot } from "@headlessui/vue"

const props = withDefaults(
  defineProps<{
    node?: ChecklistResultNode
    show_root: boolean
  }>(),
  {}
)

const expanded = ref(false)

const icon_size = "24"
//const icon_size = $dt('checklist.icon_size', 'value')

onMounted(() => {
  if (!props.show_root) {
    expanded.value = true
  }
})

//const dbg1 = $dt('checklist.icon_default', 'value')
//console.log('dbg1', dbg1)

</script>

<template>
  <div v-if="props.node" class="ml-3">
    <div
      v-if="props.show_root"
      @click="expanded = !expanded"
      class="flex justify-between delay-150 transition ease-in-out delay-150 hover:bg-indigo-200 duration-300"
    >
      <div class="flex">
        <!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->
        <!-- expand/collapse icon -->
        <template v-if="(props.node.children || []).length > 0">
          <UIcon v-if="expanded" name="mdi:menu-right" rotate="90deg" :size="icon_size" />
          <UIcon v-else name="mdi:menu-right" :size="icon_size" />
        </template>
        <UIcon v-else name="mdi:menu-right-outline" :size="icon_size" />

        <!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->
        <!-- node icon -->
        <UIcon
          v-if="props.node.icon"
          :name="props.node.icon.replace('mdi-', 'mdi:')"
          :size="icon_size"
        />
        <UIcon v-else :name="theme.checklist.icon_default" :size="icon_size" />

        <!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->
        <!-- node name -->
        <span v-html="props.node.name" class=""></span>

        <!-- factice icon -->
        <ppw-factice v-if="props.node.factice" />
      </div>

      <div class="pl-8">
        <Transition name="bounce">
          <UIcon
            v-if="props.node?.status == 'OK'"
            :name="theme.checklist.status.OK.icon"
            :size="icon_size"
            :style="{
              color: statusColor(theme.checklist.status.OK.hue, expanded),
            }"
          />
            <UIcon
              v-else-if="props.node?.status == 'WARNING'"
            :name="theme.checklist.status.WARNING.icon"
            :size="icon_size"
              :style="{
              color: statusColor(theme.checklist.status.WARNING.hue, expanded),
            }"
          />
            <UIcon
            v-else-if="props.node?.status == 'KO'"
            :name="theme.checklist.status.KO.icon"
              :size="icon_size"
            :style="{
              color: statusColor(theme.checklist.status.KO.hue, expanded),
            }"
          />
            <UIcon
              v-else
            :name="theme.checklist.status.INFO.icon"
            :size="icon_size"
            :style="{ color: statusColor(theme.checklist.status.INFO.hue, expanded) }"
          />
        </Transition>
      </div>
    </div>
    <!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->
    <template v-if="expanded">
      <!-- big switch because <component :is=""> is not working ! -->
      <ppw-checklist-view-exception
        v-if="props.node.view == 'exception'"
        :node="props.node"
      />
      <ppw-checklist-view-pubkey
        v-else-if="props.node.view == 'pub-key'"
        :node="props.node.content"
      />
      <ppw-checklist-view-traceback
        v-else-if="props.node.view == 'traceback'"
        :node="props.node"
      />
      <ppw-checklist-view-default v-else :node="props.node" />
    </template>
    <!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->
    <TransitionRoot
      appear
      :show="expanded"
      as="ul"
      enter="transform transition duration-[600ms]"
      enter-from="opacity-0 scale-20"
      enter-to="opacity-100 scale-100"
      leave="transform duration-300 transition ease-in-out"
      leave-from="opacity-100 scale-100"
      leave-to="opacity-0 scale-65"
    >
      <ppw-checklist-mode-basic
        v-for="(node, index) in props.node.children"
        :key="index"
        :node="node"
        :show_root="true"
      />
    </TransitionRoot>
  </div>
</template>

<style>
.bounce-enter-active {
  animation: bounce-in 5.5s infinite;
}

.bounce-leave-active {
  animation: bounce-in 5.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}
</style>
