<script setup lang="ts">
//TODO: create a composable useLocaleAsyncData()
const { locale, fallbackLocale } = useI18n()
const { data: page } = await useAsyncData(
  `index-${locale}`,
  () => {
    //TODO: fallback if lang target is not found
    const data_url = "/"
    return queryContent("/")
      .where({
        _locale: locale.value,
        _path: data_url,
      })
      .findOne()
  },
  {
    watch: [locale],
  }
)

definePageMeta({ layout: "front" })

//console.log("page.value", page.value, locale.value, fallbackLocale.value)
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true })
}

/*
useSeoMeta({
  titleTemplate: '',
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

defineOgImage({
  component: 'Paxpar',
  title: page.value.title,
  description: page.value.description
})
*/


//onMounted(async () => {
//})

</script>

<template>
  <div v-if="page">
    <ULandingHero :title="page.hero?.title" :description="page.hero?.description" :links="page.hero?.links">
      <div
        class="absolute inset-0 landing-grid z-[-1] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" />

      <template #headline>
        <UBadge v-if="page.hero?.headline" variant="subtle" size="lg" class="relative rounded-full font-semibold">
          <NuxtLink :to="page.hero.headline?.to" target="_blank" class="focus:outline-none" tabindex="-1">
            <span class="absolute inset-0" aria-hidden="true" />
          </NuxtLink>
          {{ page.hero.headline?.label }}
          <UIcon v-if="page.hero.headline?.icon" :name="page.hero.headline.icon"
            class="ml-1 w-4 h-4 pointer-events-none" />
        </UBadge>
      </template>
    </ULandingHero>

    <ULandingSection v-if="page.animation" class="!pt-0">
      <ppw-anim :href="page.animation" speed="0.3" stripButtonRibbon />
    </ULandingSection>

    <ULandingSection v-if="page.sections" v-for="(section, index) in page.sections" :key="index" :title="section?.title"
      :description="section?.description" :align="section.align" :features="section.features">
      <ppw-anim v-if="section.animation" :href="section.animation" no-controls />
      <ppw-placeholder v-else />
    </ULandingSection>

    <ULandingSection v-if="page.features" :title="page.features?.title" :description="page.features?.description">
      <UPageGrid>
        <ULandingCard v-for="(item, index) in page.features?.items" :key="index" v-bind="item" />
      </UPageGrid>
    </ULandingSection>

    <ULandingSection v-if="page.testimonials" :headline="page.testimonials?.headline" :title="page.testimonials?.title"
      :description="page.testimonials?.description">
      <UPageColumns class="xl:columns-4">
        <div v-for="(testimonial, index) in page.testimonials?.items" :key="index" class="break-inside-avoid">
          <ULandingTestimonial v-bind="testimonial" class="bg-gray-100/50 dark:bg-gray-800/50" />
        </div>
      </UPageColumns>
    </ULandingSection>

    <ULandingSection>
      <ULandingCTA v-bind="page.cta" class="bg-gray-100/50 dark:bg-gray-800/50" />
    </ULandingSection>
  </div>
</template>

<style scoped>
.landing-grid {
  background-size: 100px 100px;
  background-image: linear-gradient(to right,
      rgb(var(--color-gray-200)) 1px,
      transparent 1px),
    linear-gradient(to bottom, rgb(var(--color-gray-200)) 1px, transparent 1px);
}

.dark {
  .landing-grid {
    background-image: linear-gradient(to right,
        rgb(var(--color-gray-800)) 1px,
        transparent 1px),
      linear-gradient(to bottom, rgb(var(--color-gray-800)) 1px, transparent 1px);
  }
}
</style>
