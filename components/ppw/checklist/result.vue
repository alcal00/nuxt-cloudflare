<script setup lang="ts">
import { type ChecklistResultNode, type ViewMode } from "~~/models/checklist"

export interface ChecklistResultProps {
  node?: ChecklistResultNode
  show_root?: boolean
  hide_modes_selector?: boolean
  mode?: string
  auto_propagate_status?: boolean
  zoom_disabled?: boolean
}

const props = withDefaults(defineProps<ChecklistResultProps>(), {
  show_root: false,
  hide_modes_selector: true,
  mode: "basic",
  auto_propagate_status: true,
  zoom_disabled: false,
})

const showModeSelector = true
const mode = ref(props.mode)
const isZoomed = ref(false)

function modeSwitch(newMode: string) {
  mode.value = newMode
}

const modes: { [key: string]: ViewMode } = {
  simple: { icon: "mdi:home", title: "vue simplifiée" },
  basic: { icon: "mdi:menu-swap", title: "vue de base" },
  nonconformity: {
    icon: "mdi:alert-decagram",
    title: "vue non-conformité",
  },
  datav: { icon: "mdi:database-search", title: "vue données" },
  attachment: {
    icon: "mdi:graph-outline",
    title: "vue pièces jointes",
  },
  semantic: {
    icon: "mdi:head-snowflake-outline",
    title: "vue sémantique",
    factice: true,
  },
  timeline: {
    icon: "mdi:table-clock",
    title: "vue timeline",
    factice: true,
  },
  geographic: { icon: "mdi:earth", title: "vue géographique", factice: true },
  chat: { icon: "mdi:message-reply-text-outline", title: "chat IA", factice: true },
  notebook: { icon: "mdi:notebook-multiple", title: "vue notebook", factice: true },
}

/*
// the component name from the mode
const modeComponent = computed(() => {
  if (mode.value == "simple") {
    return "ppw-checklist-mode-simple"
  }
  if (mode.value == "basic") {
    return "ppw-checklist-mode-basic"
  }
  if (mode.value == "datav") {
    return "ppw-checklist-mode-datav"
  }
  if (mode.value == "nonconformity") {
    return "ppw-checklist-mode-nonconformity"
  }
  if (mode.value == "semantic") {
    return "ppw-checklist-mode-semantic"
  }
  return "ppw-checklist-mode-basic"
})
*/
function redirectMode(targetMode: string) {
  console.log(`redirect mode ${mode} ...`)
  mode.value = targetMode
  //alert(`redirect mode ${mode} ...`)
}
</script>

<template>
  <div>
    <ppw-fullscreen v-model="isZoomed">
      <div v-if="!hide_modes_selector" class="navbar bg-base-100">
        <div class="navbar-start"></div>
        <div class="navbar-center">
          <div v-if="showModeSelector" class="dropdown overflow-visible z-30">
            <a tabindex="0" class="btn btn-ghost normal-case text-xl flex z-40">
              <icon :name="modes[mode].icon" size="32" />
              {{ modes[mode].title }}
            </a>

            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li v-for="(v, k) in modes">
                <a @click="mode = k as string" :class="k == mode ? 'active' : null">
                  <icon :name="v.icon" size="32" />
                  {{ v.title }}
                  <ppw-factice v-if="v.factice" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="navbar-end">
          <UButton v-if="!zoom_disabled" @click="isZoomed = !isZoomed" variant="outline">
            <UIcon name="ic:baseline-zoom-out-map" />
          </UButton>
        </div>
      </div>

      <div class="">
        <template v-if="mode === 'basic'">
          <ppw-checklist-mode-basic :node="node" :show_root="show_root" />
        </template>
        <template v-if="mode === 'chat'">
          <ppw-checklist-mode-chat :node="node" @redirect="redirectMode" />
        </template>
        <template v-if="mode === 'datav'">
          <ppw-checklist-mode-datav :node="node" :show_root="show_root" />
        </template>
        <template v-if="mode === 'geographic'">
          <ppw-checklist-mode-geographic :node="node" @redirect="redirectMode" />
        </template>
        <template v-if="mode === 'nonconformity'">
          <ppw-checklist-mode-nonconformity :node="node" :show_root="show_root" />
        </template>
        <template v-if="mode === 'notebook'">
          <ppw-checklist-mode-notebook :node="node" @redirect="redirectMode" />
        </template>
        <template v-if="mode === 'semantic'">
          <ppw-checklist-mode-semantic :node="node" @redirect="redirectMode" />
        </template>
        <template v-if="mode === 'attachment'">
          <ppw-checklist-mode-attachment :node="node" />
        </template>
        <template v-if="mode === 'simple'">
          <ppw-checklist-mode-simple :node="node" @redirect="redirectMode" />
        </template>
        <template v-if="mode === 'timeline'">
          <ppw-checklist-mode-timeline :node="node" @redirect="redirectMode" />
        </template>
      </div>

      <ppw-debug-panel>
        <p>mode : {{ mode }}</p>
      </ppw-debug-panel>
    </ppw-fullscreen>
  </div>
</template>
