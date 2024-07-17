<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from "vue"
import * as monaco from "monaco-editor"

const editorContainer = ref()
let editor: monaco.editor.IStandaloneCodeEditor

const props = withDefaults(
  defineProps<{
    modelValue: string
    language?: string
  }>(),
  {}
)

// events
const emit = defineEmits<{
  (e: "update:modelValue", newValue: string): void
}>()

onMounted(async () => {
  // Wait for the next DOM update cycle
  await nextTick()

  // Create Monaco Editor
  editor = monaco.editor.create(editorContainer.value, {
    value: props.modelValue,
    readOnly: false,
    wordWrap: "on",
    minimap: { enabled: false },
    lineNumbers: "off",
    //TODO: seems to raise errors !
    //language: 'javascript', // You can set the language as per your requirement
    //language: "yaml",
    language: props.language,
    theme: "vs-dark", // You can set the theme as per your requirement
  })

  // Listen for changes and emit an event
  editor.onDidChangeModelContent(() => {
    emit("update:modelValue", editor.getValue())
  })
})

watch(
  () => props.modelValue,
  (newValue) => {
    // Watch for changes in the source prop and update the editor content
    if (editor) {
      // keep/restore cursor position
      const position: any = editor?.getPosition()
      //console.log('position', position)
      editor.setValue(newValue)
      editor?.setPosition(position)
    }
  }
)

onBeforeUnmount(() => {
  // Dispose of the editor when the component is destroyed
  if (editor) {
    editor.dispose()
  }
})
</script>

<template>
  <!-- Container for the Monaco Editor -->
  <div ref="editorContainer" style="height: 400px; width: 100%"></div>
</template>
