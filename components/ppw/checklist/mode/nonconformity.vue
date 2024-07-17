<script setup lang="ts">
import { type ChecklistResultNode, type ChecklistResultNodes } from "~~/models/checklist"
import { TransitionRoot } from "@headlessui/vue"
import { theme, statusColor } from "~~/src/checktools"

const props = withDefaults(
  defineProps<{
    node?: ChecklistResultNode
    show_root: boolean
  }>(),
  {}
)

const expanded = ref(false)

const icon_size = "32"

onMounted(() => {
  if (!props.show_root) {
    expanded.value = true
  }
})

// return only children that are 'KO'
const children_ko = computed(() =>
  props.node.children.filter((child) => child.status == "KO")
)
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
        <template v-if="(props.node.children || []).length > 0">
          <icon v-if="expanded" name="mdi:menu-right" rotate="90deg" :size="icon_size" />
          <icon v-else name="mdi:menu-right" :size="icon_size" />
        </template>
        <icon v-else name="mdi:menu-right-outline" :size="icon_size" />

        <!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->
        <!-- node icon -->
        <icon
          v-if="props.node.icon"
          :name="props.node.icon.replace('mdi-', 'mdi:')"
          inline
          style="color: black"
          :size="icon_size"
        />
        <icon v-else name="codicon:symbol-field" :size="icon_size" />

        <!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->
        <!-- node name -->
        <span v-html="props.node.name" class=""></span>

        <!-- factice icon -->
        <ppw-factice v-if="props.node.factice" />
      </div>

      <div class="pl-8">
        <Transition name="bounce">
          <icon
            v-if="props.node.status == 'OK'"
            name="mdi:shield-check"
            Inline
            :style="{ color: statusColor(120, expanded), 'font-size': icon_size }"
          />
          <icon
            v-else-if="props.node.status == 'WARNING'"
            name="mdi:alert"
            Inline
            :style="{ color: statusColor(39, expanded), 'font-size': icon_size }"
          />
          <icon
            v-else-if="props.node.status == 'KO'"
            name="mdi:shield-alert"
            Inline
            :style="{ color: statusColor(0, expanded), 'font-size': icon_size }"
          />
          <!--
  v-motion :initial="{ opacity: 0 }"
            :enter="{
              opacity: 1, scale: 1,
              transition: {
                duration: 500,
                repeat: Infinity,
              },
            }" :leave="{ opacity: 1 }" :variants="{ custom: { scale: 2 } }" :hovered="{ scale: 1.2 }" :delay="200"
-->
          <icon
            v-else-if="props.node.status == 'INFO'"
            name="mdi:information"
            Inline
            :style="{ color: statusColor(240, expanded) }"
            :size="icon_size"
          />
          <icon
            v-else
            name="mdi:alert"
            Inline
            :style="{ color: statusColor(39, expanded) }"
            :size="icon_size"
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
        :node="props.node"
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
      <ppw-checklist-mode-nonconformity
        v-for="(node, index) in children_ko"
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
