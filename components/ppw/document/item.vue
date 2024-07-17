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

const itemName = computed(() => {
  const id = props.item?.item?.id || ''
  const name = id.split('/').pop()
  //const name = "xx"
  //console.log(id, name)
  return name
})


</script>

<template>
  <ULandingCard class="col-span-3 row-span-3" :title="item?.name" :description="item?.desc" :to="item.item_url">

    <template #icon>
      <p>name : {{ itemName }}</p>
      <p>ope : {{ item?.item?.ope }}</p>
      <p>id : {{ item?.item?.id }}</p>

      <!--<p>{{ item }}</p>-->
    </template>
    <UButton v-if="item?.item?.ope == '🗄️'" :to="`/documents/all?path=${item?.item?.id}`" label="folder" />
    <UButton v-else :to="`/document/info${item?.item?.id}`" label="info" />

  </ULandingCard>
</template>
