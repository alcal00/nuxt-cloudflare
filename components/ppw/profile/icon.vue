<script setup lang="ts">
const user = useSupabaseUser()
const localePath = useLocalePath()

const loading = ref(true)
const authenticated = computed(() => user.value)

// see https://www.dicebear.com/styles/

const avatarUrl = computed(() => (user.value?.user_metadata?.avatar_url || `https://api.dicebear.com/8.x/initials/svg?seed=${user.value?.email}`))

onMounted(() => {
  loading.value = false
})
</script>

<template>
  <UButton v-if="loading" loading variant="ghost" />
  <template v-else>
    <UButton v-if="!authenticated" to="/login" color="gray">Connexion</UButton>


    <UButton v-if="authenticated" to="/settings" variant="ghost">
      <template #leading>
        <UAvatar :src="avatarUrl" size="2xs" />
      </template>
    </UButton>

    <UButton v-if="authenticated" to="/logout" variant="ghost" color="gray" icon="mdi:location-exit" />
  </template>
</template>
