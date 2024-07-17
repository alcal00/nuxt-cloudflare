<script setup lang="ts">
import { formatTimeAgo } from "@vueuse/core"

// see https://vueuse.org/shared/useDateFormat/
// see https://vueuse.org/core/useTimeAgo/
const dateFormatAgo = ref(true)
const { path } = useRoute()

const props = withDefaults(
  defineProps<{
    model: string
    show_date?: boolean
  }>(),
  {
    model: "article",
    show_date: false,
  }
)

const { data: items } = await useAsyncData(`content-${path}-${props.model}`, () => {
  const res = queryContent()
    .where({ model: props.model })
    .only(["title", "description", "image", "icon", "_path", "createdAt"])
    .find()
  return res
})

function dateFormatted(item) {
  if (item.createdAt !== undefined) {
    if (dateFormatAgo.value) {
      return formatTimeAgo(Date.parse(item.createdAt))
    } else {
      return useDateFormat(Date.parse(item.createdAt), "YYYY-MM-DD").value
    }
  } else {
    return undefined
  }
}

function getIcon() {
  return "mdi:lightbulb-outline"
}
</script>

<template>
  <card-grid>
    <card v-for="item in items" :icon="item.icon">
      <div class="relative">
        <img v-if="item.image" :src="item.image" />
        <icon v-else :name="getIcon()" size="128" />
        <div
          v-if="show_date && item.createdAt"
          @click="dateFormatAgo = !dateFormatAgo"
          class="absolute bottom-0 left-0 m-1 cursor-progress"
        >
          <span class="badge">
            {{ dateFormatted(item) }}
          </span>
        </div>
      </div>

      <template v-slot:title>
        <NuxtLink :href="item._path">{{ item.title }}</NuxtLink>
      </template>
      <template v-slot:description>
        <NuxtLink :href="item._path">{{ item.description }}</NuxtLink>
      </template>
    </card>
  </card-grid>
</template>
