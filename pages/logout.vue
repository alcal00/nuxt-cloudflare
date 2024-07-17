<script setup lang="ts">
const user = useSupabaseUser()
const supabase = useSupabaseClient()

definePageMeta({ layout: "front" })

watch(
  user,
  () => {
    // user undefined, logout succeeded, move home page ...
    if (!user.value) {
      return navigateTo("/")
    }
  },
  { immediate: true }
)

async function doLogout() {
  const { error } = await supabase.auth.signOut()
}
</script>

<template>
  <ppw-modal okCancel :modelValue="true" title="Logout" description="You are about to logout, please confirm"
    icon="i-heroicons-exclamation-circle" @ok="doLogout" @cancel="$router.go(-1)" />

</template>
