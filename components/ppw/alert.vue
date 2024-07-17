<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    msg?: string
    type?: string
    action?: string
  }>(),
  {
    type: "info",
  }
)

// events
const emit = defineEmits<{
  (e: "action"): void
}>()

type AlertTheme = {
  class: string
  icon: string
  msg?: string
}
const TYPE_THEME: { [key: string]: AlertTheme } = {
  info: {
    class: "alert-info",
    icon: "mdi:information-variant-box",
    msg: "INFO",
  },
  success: {
    class: "alert-success",
    icon: "mdi:check-circle",
    msg: "SUCCEESS",
  },
  warning: {
    class: "alert-warning",
    icon: "mdi:alert",
    msg: "WARNING",
  },
  error: {
    class: "alert-error",
    icon: "mdi:alert-decagram",
    msg: "ERROR",
  },
  deprecated: {
    class: "alert-error",
    icon: "mdi:hand-back-left",
    msg: "DEPRECATED",
  },
  notimplemented: {
    class: "alert-warning",
    icon: "mdi:hands-pray",
    msg: "NOT IMPLEMENTED",
  },
  todo: {
    class: "alert-info",
    icon: "mdi:gesture-double-tap",
    msg: "TODO",
  },
}

const theme = computed<AlertTheme>(() => {
  return props.type in TYPE_THEME ? TYPE_THEME[props.type] : TYPE_THEME.info
})
</script>

<template>
  <div class="alert m-2" :class="theme.class">
    <icon :name="theme.icon" size="36" />
    <span
      >{{ msg || theme.msg }}
      <slot />
    </span>
    <div v-if="action">
      <button @click="emit('action')" class="btn btn-sm btn-primary">{{ action }}</button>
    </div>
  </div>
</template>
