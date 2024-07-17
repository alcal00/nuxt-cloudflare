<script setup lang="ts">
import type { BlogPost } from "~/types/blog.types"
const localePath = useLocalePath()
const { locale } = useI18n()

definePageMeta({ layout: "blog" })

const { data: posts } = await useAsyncData(`posts-${locale}`, () =>
  queryContent<BlogPost>("/blog")
    .where({ 
      _locale: locale.value,
      _extension: "md",
     })
     .sort({ date: -1 })
     .find()
)

const postsFiltered = computed(() => {
  return posts.value.filter((post) => post.date)
})


/*
//TODO: re-enable SEO
useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
})

defineOgImage({
  component: "OgImagePaxpar", //"Paxpar",
  title: page.value.title,
  description: page.value.description,
})
*/

function dateBlog(post) {
  const d = new Date(post.date)
  return d.toLocaleDateString("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}
</script>

<template>
  <UContainer>
    <UPageHeader v-bind="posts[0]" class="py-[50px]" />
    <UPageBody>
      <UBlogList>
        <UBlogPost
          v-for="(post, index) in postsFiltered"
          :key="index"
          :to="localePath(post._path)"
          :title="post.title"
          :description="post.description"
          :image="post.image"
          :date="dateBlog(post)"
          :authors="post.authors"
          :badge="post.badge"
          :orientation="index === 0 ? 'horizontal' : 'vertical'"
          :class="[index === 0 && 'col-span-full']"
          :ui="{
            description: 'line-clamp-2',
          }"
        />
      </UBlogList>
    </UPageBody>
  </UContainer>
</template>
