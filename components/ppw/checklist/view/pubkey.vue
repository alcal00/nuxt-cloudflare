<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

export interface ViewNodeProps {
  node: string | undefined;
}

const format = ref("b64")

const props = defineProps<ViewNodeProps>()


const keyDisplayed = computed(() => {
  return format.value == 'b64' ? (props.node || '') : hexEncode(props.node)
})

//const source = props.node //ref('Hello')
const { text, copy, copied, isSupported } = useClipboard()


// inspired from https://stackoverflow.com/questions/21647928/javascript-unicode-string-to-hex
function hexEncode(msg) {
  var hex: string
  var i: number

  var result = "";
  for (i = 0; i < msg.length; i++) {
    hex = msg.charCodeAt(i).toString(16)
    //hex = msg.charCodeAt(i).toString(8)
    //result += ("000"+hex).slice(-4) + ' '
    result += ("0" + hex).slice(-2) + ' '
    //result += ("0"+hex).slice(-2) + ' '
  }
  return result
}

</script>

<template>
  <div class="card bg-base-100 shadow-xl">
    <div class="card-body">

      <div class="font-mono">
        <code v-if="format == 'b64'" v-html="keyDisplayed" class="break-all"></code>
        <code v-if="format == 'hex'" v-html="keyDisplayed" class=""></code>
      </div>

      <div class="btn-group px-3">
        <button class="btn btn-sm" :class="{ 'btn-active': format == 'b64' }" @click="format = 'b64'">b64</button>
        <button class="btn btn-sm" :class="{ 'btn-active': format == 'hex' }" @click="format = 'hex'">hex</button>
        <div v-if="isSupported" class="px-3">
          <button @click='copy(keyDisplayed)' class="btn btn-sm">
            <!-- by default, `copied` will be reset in 1.5s -->
            <icon v-if='!copied' name="mdi:clipboard" />
            <icon v-else name="mdi:clipboard-check" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
