<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    item?: any
    //id: string
    //TODO: move favorite inside item ??
    favorite?: boolean
  }>(),
  {
    item: () => {
      name: "???"
    },
    favorite: false,
  }
)
</script>

<template>
  <ULandingCard
    :ui="{
      background:
        'dark:bg-gray-900/50 dark:lg:bg-gradient-to-b from-gray-700/50 to-gray-950/50',
      body: {
        base: 'flex-1',
        background: 'dark:bg-gray-800/50 dark:lg:bg-gray-900/50 backdrop-blur-lg',
      },
    }"
    class="col-span-4 row-span-5"
    :title="item?.name"
    :description="item?.desc"
    :to="item.item_url"
  >
    <div class=""></div>

    <template #icon>
      <UButton :icon="item?.icon || 'i-heroicons-swatch'" color="gray" variant="ghost" />
      <UButton v-if="favorite" icon="i-ph-heart-fill" color="gray" variant="ghost" />
      <UButton v-if="!favorite" icon="i-ph-heart-bold" color="gray" variant="ghost" />
      <UBadge v-for="tag in item?.tags" :label="tag" variant="subtle" class="m-0.5" />
    </template>

    <UColorModeImage
      :light="item?.image || '/images/paxpar4.svg'"
      :dark="item?.image || '/images/paxpar4.svg'"
      width="250"
      height="90"
      :alt="item?.name"
      class="object-cover w-full"
    />
  </ULandingCard>
</template>
