<script setup lang="ts">
const localePath = useLocalePath()
const { footer } = useAppConfig()
const { t } = useI18n()

//TODO: move to app conf
const links = computed(() => {
  return [{
    label: 'Resources',
    children: [{
      label: 'Help center'
    }, {
      label: 'Docs'
    }, {
      label: 'Roadmap'
    }]
  }, {
    label: 'Features',
    children: [{
      label: 'Blog',
      to: '/blog',
    }, {
      label: 'Portal'
    }, {
      label: 'Sponsors'
    }]
  }, {
    label: t('company'),
    children: [{
      label: 'About',
      to: 'https://arundo.tech',
    }, {
      label: t('pricing'),
      to: '/pricing',
    }, {
      label: 'CGV',
      to: localePath('/legal/cgv'),
    }]
  }]
})

const toast = useToast()

const email = ref('')
const loading = ref(false)

//TODO: implement via pp api
async function onSubmit() {
  loading.value = true

  const { useFetchPP } = usePaxparAPI()
  const { data, error } = await useFetchPP('/api/contact', {
    method: "POST",
    body: { 
        name: "",
        email: email.value,
        message: "",
    },
    toast: {
      success: {
        msg: t('subscribe_ok'),
      },
      error: {
        msg: t('subscribe_ko'),
      },
    },
  })
  loading.value = false


  console.debug({data})
  /*
  setTimeout(() => {
    toast.add({
      title: t('subscribed'),
      description: t('subscribe_ok')
    })

    loading.value = false
  }, 1000)
  */
}
</script>

<template>
  <UFooter>
    <template #top>
      <UFooterColumns :links="links">
        <template #right>
          <form @submit.prevent="onSubmit">
            <UFormGroup :label="t('subscribe_msg')" :ui="{ container: 'mt-3' }">
              <UInput v-model="email" type="email" :placeholder="t('enter_email')"
                :ui="{ icon: { trailing: { pointer: '' } } }" required size="xl" autocomplete="off" class="max-w-sm"
                input-class="rounded-full">
                <template #trailing>
                  <UButton type="submit" size="xs" color="primary" :label="t(loading ? 'subscribing' : 'subscribe')"
                    :loading="loading" />
                </template>
              </UInput>
            </UFormGroup>
          </form>
        </template>
      </UFooterColumns>
    </template>

    <template #left>
      <NuxtLink :to="footer?.credits_to">
        <p class="text-gray-500 dark:text-gray-400 text-sm">
          {{ footer.credits }}
        </p>
      </NuxtLink>

    </template>

    <template #right>
      <UColorModeButton v-if="footer.colorMode" size="sm" />
      <UButton v-for="link in footer.links" :to="link.to" :target="link.target" :icon="link.icon"
        :aria-label="link['aria-label']" color="gray" variant="ghost" />
    </template>
  </UFooter>
</template>
