<script setup lang="ts">
import { type BrowserFilter, type BrowserItem } from '~~/models/browser'
const localePath = useLocalePath()

const props = withDefaults(
  defineProps<{
    source?: string // '/api/ref/public'
    sourceItems?: BrowserItem[]
    model?: string

    filter?: string
    filters?: BrowserFilter[]
    disableOnlyPublishedFilter?: boolean
    tags?: string[]
    noItemLink?: boolean
  }>(),
  {
    //filterType: "checklist",
    disableOnlyPublishedFilter: true,
    filter: 'all',
    tags: () => [],
    filters: () => [],
    sourceItems: () => [],
    noItemLink: false,
  }
)


// viewType = 'card' or 'table'
const viewType = ref('card')

// elemType = 'checklist' or 'craftform' or 'schema'
const elemType = ref('checklist')
//const modelValue: Ref<DocRequest> = defineModel()
//const elemType: Ref<string> = defineModel()

const searchText = ref('')

const onlyFavorite = ref(false)
// onlyPublished filter is true if props.disableOnlyPublishedFilter is false
// onlyPublished filter is false if props.disableOnlyPublishedFilter is true
const onlyPublished = ref(!props.disableOnlyPublishedFilter)

const sortType = ['name', 'creation']
const selectedSortType = ref(sortType[0])

const selectedTags = ref(props.tags)

function cacheId() {
  if (props.source) {
    return `gallery-url-${props.source}`
  } if (props.source) {
    return `gallery-model-${props.model}`
  } else {
    return 'gallery-model-items-' + JSON.stringify(props.sourceItems)
  }
}
const { data: items, pending, error, refresh } = await useLazyAsyncData<BrowserItem[]>(cacheId(), async () => {
  console.debug('browser useLazyAsyncData ...', props.source)
  if (props.source) {
    console.debug('useLazyAsyncData from source ...')
    return await $ppfetch(props.source)
  } else if (props.model) {
    console.debug('useLazyAsyncData from model ...')
    const { data } = await useAsyncData(`posts-${props.model}`, () =>
      queryContent("/")
        .where({
          model: props.model,
        })
        .only(['id', 'title', 'model'])
        .find()
    )
    console.debug('data.value', data.value)
    /*
    const postsFiltered = computed(() => {
      return posts.value.filter((post) => post.date)
    })
    */
    return data.value
      .map(item => ({ ...item, name: item?.title }))

  } else {
    console.debug('useLazyAsyncData from sourceItems ...')
    //return props.items
    return props.sourceItems
  }
},
  {
    server: false,
    /*
    transform: (mountains) => {
      return mountains.map(mountain => ({ name: mountain.name, id: mountain.id }))
    }
    */
  }
)


const tagsFromItems = computed(() => {
  //console.log("items.values", items.value)
  if (items.value === null) {
    return []
  }

  // Step 1: Flatten the array of items
  const allTags: string[] = items.value.flatMap(item => item.tags)
  // Step 2: Remove duplicates
  const uniqueTags: string[] = Array.from(new Set(allTags))
  // Step 3: Sort the array
  const sortedTags: string[] = uniqueTags.sort()
  return sortedTags
})

const items_filtered = computed(() => {
  //console.log("items.values", items.value)
  return items.value === null ? [] : items.value
    .filter(
      (p) =>
        // contains searchText
        (p?.name || '').toLowerCase().includes(searchText.value.toLowerCase()) &&
        ((p?.type == props.filter) || (props.filter === "all")) &&
        (p?.gallery?.published === true || onlyPublished.value === false) &&
        (selectedTags.value.length === 0 || (p.tags || []).some((r) => selectedTags.value.includes(r)))
      //true
    )
    .map(item => ({ ...item, item_url: getItemUrl(item) }))
    .sort((a, b) => (a.name < b.name ? -1 : 1))
})


/*
Get the product URL from the product def (type and id)
first look in the gallery.actions for a default action
then build the URL
*/
function product_to_url(product) {
  //product.gallery.actions
  //console.log('product', product)
  const default_actions = product?.gallery?.actions.filter(
    (action) => action.name == "default"
  )
  if (default_actions && (default_actions.length > 0)) {
    const url = default_actions[0].url
    //console.log({ url })
    // TODO: deprecate next fix
    // fix URL for craftform
    const url2 = url.replace("/craftform/", "/craft/")
    return url2
  } else {
    // for checklist use /check instead of /checklist
    const basePath = product.type == "checklist" ? "check" : product.type
    //TODO: encode URL correctly
    //return `/${basePath}/${product.id}`
    return `/${basePath}?id=${product.id}`
  }
}

function getItemUrl(item: BrowserItem): string | undefined {
  if (props.noItemLink) {
    return undefined
  } else {
    return item?.item_url || product_to_url(item)
  }
}

const occurrences = computed(() => {
  return items.value === null ? [] : items.value.reduce(function (acc, { type }) {
    //console.debug('ggggg', type)
    acc['all'] ? ++acc['all'] : acc['all'] = 1
    return acc[type] ? ++acc[type] : acc[type] = 1, acc
  }, {});
})


const countChip = (f: BrowserFilter) => {
  return '5'
}

onMounted(() => {
  //counter.value += 1
  console.debug('browser mounted ...') //, counter.value)
  //console.debug('occurence', occurrences.value )
})
</script>

<template>
  <div>

    <div class="mt-6 mb-3 flex flex-cols justify-between">
      <div class="gap-x-2 flex flex-cols">

        <slot name="actionsDropdown">
        </slot>


        <UInput v-model="searchText" icon="i-heroicons-magnifying-glass-20-solid" size="sm" color="white"
          :trailing="false" placeholder="Search..." />

        <p>Tags</p>
        <USelectMenu v-model="selectedTags" :options="tagsFromItems" multiple />
        <UButton @click="onlyFavorite = !onlyFavorite" :icon="onlyFavorite ? 'i-ph-heart-fill' : 'i-ph-heart-bold'"
          :color="onlyFavorite ? 'gray' : 'white'" />
        <UButton v-if="!disableOnlyPublishedFilter" @click="onlyPublished = !onlyPublished" icon="i-mdi-earth"
          :color="onlyPublished ? 'gray' : 'white'" />
      </div>

      <!-- button group for filter -->
      <UButtonGroup size="sm" orientation="horizontal">
        <UChip v-for="f in filters" :show="occurrences[f.name] !== undefined" :text="occurrences[f.name]" size="2xl"
          position="top-left">
          <UButton :to="f.name" :color="props.filter == f.name ? 'gray' : 'white'" :icon="f?.icon" :label="f.name" />
        </UChip>
      </UButtonGroup>

      <div class="gap-x-2 flex flex-cols">
        <p>Sort by</p>
        <USelectMenu v-model="selectedSortType" :options="sortType" />

        <UButtonGroup @click="viewType = viewType == 'card' ? 'table' : 'card'" size="sm" orientation="horizontal">
          <UButton icon="i-ph-grid-four" :color="viewType == 'card' ? 'gray' : 'white'" variant="solid" />
          <UButton icon="i-ph-list" :color="viewType == 'table' ? 'gray' : 'white'" variant="solid" />
        </UButtonGroup>

        <UButton @click="refresh" :loading="pending" icon="i-ph-arrow-clockwise" color="gray" />
      </div>
    </div>

    <UDivider label="" />

    <div class="mt-6">
      <template v-if="viewType == 'card'">
        <ULandingGrid class="lg:auto-rows-[3rem]">
          <template v-for="item in items_filtered" :key="item.id">
            <slot name="itemCard" :item="item">
              <ppw-gallery-item :item="item" />
            </slot>
          </template>
        </ULandingGrid>
      </template>

      <template v-if="viewType == 'table'">
        <ppw-gallery-table :items="items_filtered" />
      </template>
    </div>

  </div>
</template>