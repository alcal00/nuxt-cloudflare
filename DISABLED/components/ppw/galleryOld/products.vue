<script setup lang="ts">
import { reactive } from "vue"

const { useFetchPP } = usePaxparAPI()

const props = withDefaults(
  defineProps<{
    filterType: string
    showUnpublished?: boolean
    tags?: string[]
    filterSearch: string
  }>(),
  {
    filterType: "",
    showUnpublished: false,
    tags: () => [],
    filterSearch: "",
  }
)

const product_default = {
  //fill: "#00ee88",
  fill: "bg-primary",
  //stroke: "#00bb66",
  //stroke: "bg-secondary",
  stroke: "#d51034",
}

type RefrehFunction = () => void

// https://philippe.paxpar.tech/api/ref/public
//const products = reactive([])

//const { data, pending, error, refresh } = await useFetchPP("/api/ref/public")
//const { data: products, pending, error, refresh } = await useFetchPP("/api/ref/public")
//const { data: products, refresh } = await useFetchPP("/api/ref/public")
const products = ref([])
var refreshFetch: RefrehFunction

function doRefresh() {
  refreshFetch()
}

onMounted(async () => {
  //console.log('mounted ...')
  //await refresh()
  const { data, refresh } = await useFetchPP("/api/ref/public")
  Object.assign(products.value, data.value)
  refreshFetch = refresh
})

/*
async function refresh() {
  console.debug("gallery.products.refresh() ...")
  try {
    // https://philippe.paxpar.tech/api/ref/public
    //console.log('pp api ref public ...')
    const { data } = await useFetchPP("/api/ref/public")
    Object.assign(products, data.value)
  } catch (err) {
    toast.error("Erreur lors de la récupération de la gallerie")
  }
}
*/
const products_filtered = computed(() => {
  //console.log("filterSearch", props.filterSearch)
  return products.value
    .filter(
      (p) =>
        // contains filterSearch
        p.name.toLowerCase().includes(props.filterSearch.toLowerCase()) &&
        p.type == props.filterType &&
        (p?.gallery?.published === true || props.showUnpublished === true) &&
        (props.tags.length === 0 || (p.tags || []).some((r) => props.tags.includes(r)))
    )
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
  if (default_actions.length > 0) {
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

// cf https://vuejs.org/api/sfc-script-setup.html#defineexpose
defineExpose({
  refresh: doRefresh,
})
</script>

<template>
  <section
    id="products"
    class="item grid -mt-20 mx-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-16 bg-gallery drop-shadow-xl p-10 text-left"
  >
    <NuxtLink
      v-for="(product, index) in products_filtered"
      :key="index"
      :to="product_to_url(product)"
      noPrefetch
      class="pp-anim1"
    >
      <div class="flex">
        <ppw-gallery-old-icon :def="product.image2 || product.image" />

        <div class="grow"></div>
        <div class="float-right">
          <div
            v-for="(tag, i2) in product.tags"
            :key="i2"
            class="border-solid border-2 px-2 border-primary bg-primary text-white rounded-lg my-1"
            v-html="tag"
          ></div>
        </div>
      </div>
      <h3 class="mt-5 mb-2 text-lg">{{ product.name }}</h3>
      <p class="font-light text-xs mb-2">{{ product.desc }}</p>
    </NuxtLink>
  </section>
</template>

<style scoped>
@keyframes example {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

section.item {
  animation-name: example;
  animation-duration: 1s;
}
</style>
