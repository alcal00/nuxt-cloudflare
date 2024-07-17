<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    filterType: string
    showUnpublished?: boolean
    tags?: string[]
  }>(),
  {
    filterType: "checklist",
    showUnpublished: false,
    tags: () => [],
  }
)

const items = ref()
const filterSearch = ref("")
const showUnpublished2 = ref(props.showUnpublished)
</script>

<template>
  <div>
    <ppw-hero3
      :title="filterType"
      background="https://freesvg.org/img/1673944302electric-guitars-silhouettes.png"
    >
      <slot />
    </ppw-hero3>

    <div class="flex justify-center flex-wrap gap-6">
      <div class="join m-2">
        <NuxtLink to="craftform" noPrefetch>
          <button class="btn join-item">
            <icon v-if="filterType === 'craftform'" name="mdi:check" />
            Je génère
          </button>
        </NuxtLink>
        <NuxtLink to="checklist" noPrefetch>
          <button class="btn join-item">
            <icon v-if="filterType === 'checklist'" name="mdi:check" />
            Je vérifie
          </button>
        </NuxtLink>
      </div>
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text">Objets non publiés</span>
          <input v-model="showUnpublished2" type="checkbox" class="toggle" checked />
        </label>
      </div>

      <input
        v-model="filterSearch"
        type="text"
        placeholder="filter"
        class="input input-bordered w-36 max-w-xs m-2"
      />

      <button @click="items.refresh()" class="btn m-2">
        <icon name="mdi:reload" />
      </button>
    </div>
    <div>
      <ppw-gallery-old-products
        ref="items"
        :filterType="filterType"
        :showUnpublished="showUnpublished"
        :tags="tags"
        :filterSearch="filterSearch"
        class="mt-2"
      />
    </div>
  </div>
</template>
