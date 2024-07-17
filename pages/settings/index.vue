<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'

const user = useSupabaseUser()

const fileRef = ref<{ input: HTMLInputElement }>()
const isDeleteAccountModalOpen = ref(false)

const state = reactive({
  name: user.value?.user_metadata?.full_name,
  email: user.value?.email,
  phone: user.value?.phone,
  avatar: user.value?.user_metadata?.avatar_url,
})

const avatarUrl = computed(() => (user.value?.user_metadata?.avatar_url || `https://api.dicebear.com/8.x/initials/svg?seed=${user.value?.email}`))


function validate (state: any): FormError[] {
  const errors = []
  if (!state.name) errors.push({ path: 'name', message: 'Please enter your name.' })
  if (!state.email) errors.push({ path: 'email', message: 'Please enter your email.' })
  if (!state.phone) errors.push({ path: 'phone', message: 'Please enter your phone number.' })

  return errors
}



onMounted(() => {
  //console.debug(user.value)
})
</script>

<template>
  <UDashboardPanelContent class="pb-24" grow>

    <UForm :state="state" :validate="validate" :validate-on="['submit']" @submit="onSubmit">
      <UDashboardSection title="Profile"
        description="This information will be displayed publicly so be careful what you share.">

        <UFormGroup name="name" label="Name" description="Will appear on receipts, invoices, and other communication."
          required class="grid grid-cols-2 gap-2 items-center" :ui="{ container: '' }">
          <UInput v-model="state.name" autocomplete="off" icon="i-heroicons-user" size="md" />
        </UFormGroup>

        <UFormGroup name="email" label="Email" description="Used to sign in, for email receipts and product updates."
          required class="grid grid-cols-2 gap-2" :ui="{ container: '' }">
          <UInput v-model="state.email" type="email" autocomplete="off" icon="i-heroicons-envelope" size="md" />
        </UFormGroup>

        <UFormGroup name="phone" label="Phone" description="Your mobile phone number." required
          class="grid grid-cols-2 gap-2" :ui="{ container: '' }">
          <UInput v-model="state.phone" type="phone" autocomplete="off" size="md" />
        </UFormGroup>

        <UFormGroup name="avatar" label="Avatar" class="grid grid-cols-2 gap-2" help="JPG, GIF or PNG. 1MB Max."
          :ui="{ container: 'flex flex-wrap items-center gap-3', help: 'mt-0' }">
          <UAvatar :src="avatarUrl" size="lg" />

          <UButton disabled label="Choose" color="white" size="md" @click="onFileClick" />

          <UInput ref="fileRef" type="file" class="hidden" accept=".jpg, .jpeg, .png, .gif" @change="onFileChange" />
        </UFormGroup>

      </UDashboardSection>
    </UForm>

  </UDashboardPanelContent>
</template>
