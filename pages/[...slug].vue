<script setup lang="ts">
import { withoutTrailingSlash } from "ufo"

definePageMeta({
  layout: 'docs',
})

const { locale, fallbackLocale } = useI18n()
const route = useRoute()
const { toc } = useAppConfig()

const {
  params: { slug },
} = useRoute();


const { data: page } = await useAsyncData(`nuxt-content:${useRoute().fullPath}`, () => {
  //console.debug({_path})
  return queryContent('/')
    .where({
      _locale: locale.value,
      _path: `/${(slug as string[]).join("/")}`,
     })
    .findOne()
})
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true })
}

//const layout = page.value?.layout || "docs"
//console.debug({layout})

const { data: surround } = await useAsyncData(`${route.path}-surround`, () =>
  queryContent()
    .where({ _extension: "md", navigation: { $ne: false } })
    .only(["title", "description", "_path"])
    .findSurround(withoutTrailingSlash(route.path))
)

useSeoMeta({
  titleTemplate: "%s - paxpar doc",
  title: page.value.title,
  ogTitle: `${page.value.title} - paxpar doc`,
  description: page.value.description,
  ogDescription: page.value.description,
})

/*
defineOgImage({
  component: 'Paxpar',
  title: page.value.title,
  description: page.value.description,
})
*/
const headline = computed(() => findPageHeadline(page.value))

const links = computed(() =>
  [
    toc?.bottom?.edit && {
      icon: "i-heroicons-pencil-square",
      label: "Edit this page",
      to: `${toc.bottom.edit}/${page?.value?._file}`,
      target: "_blank",
    },
    ...(toc?.bottom?.links || []),
  ].filter(Boolean)
)
</script>

<template>
  <UPage>
    <UPageHeader :title="page.title" :description="page.description" :links="page.links" :headline="headline" />

    <UPageBody prose>
      <ContentRenderer v-if="page.body" :value="page" />

      <hr v-if="surround?.length" />

      <UContentSurround :surround="surround" />
    </UPageBody>

    <template v-if="page.toc !== false" #right>
      <UContentToc :title="toc?.title" :links="page.body?.toc?.links">
        <template v-if="toc?.bottom" #bottom>
          <div class="hidden lg:block space-y-6" :class="{ '!mt-6': page.body?.toc?.links?.length }">
            <UDivider v-if="page.body?.toc?.links?.length" type="dashed" />

            <UPageLinks :title="toc.bottom.title" :links="links" />
          </div>
        </template>
      </UContentToc>
    </template>
  </UPage>
</template>
