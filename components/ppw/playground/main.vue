<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    source?: string
    readonly?: boolean
  }>(),
  {
    source: "Source content here !",
    readonly: false,
  }
)

/*
const slots = useSlots()

console.debug("slots", slots)
console.debug("slot.default", slots.default)
//console.debug("slot.default[0]", slots.default[0])
*/
const isZoomed = ref(false)
const content2 = ref(props.source)
</script>

<template>
  <div class="m-8">
    <ppw-fullscreen v-model="isZoomed">
      <ppw-playground-header title="playground" @zoom="isZoomed = !isZoomed" />
      <div class="flex flex-row">
        <slot name="left" message="helloLeft">
          <!-- default left pane content -->
          <ppw-editor class="w-full" v-model="content2" />
        </slot>

        <div class="w-2 bg-slate-700">
          <!--
          <UDivider label=">>" color="gray" orientation="vertical" />
          -->
        </div>
        <div class="w-full bg-slate-900">
          <slot name="right" message="helloRight">
            <!-- default right pane content
                    <div class="space-y-4 flex flex-col justify-center">
                        <pre>{{ content2 }}</pre>
                    </div>
                     -->
          </slot>
        </div>
      </div>
    </ppw-fullscreen>
  </div>
</template>
