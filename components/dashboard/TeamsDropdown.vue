<script setup lang="ts">


const topActions = [{
  label: 'portail',
  icon: 'i-heroicons-minus-circle',
  to: '/',
}]

const portals = [{
  label: 'paxpar.tech',
  avatar: {
    src: 'https://gitlab.com/uploads/-/system/group/avatar/15498437/paxpar2.png?width=96'
  },
  click: () => {
    team.value = portals[0]
  }
}, {
  label: 'document.legal',
  avatar: {
    src: 'https://gitlab.com/uploads/-/system/group/avatar/15498437/paxpar2.png?width=96'
  },
  click: () => {
    team.value = portals[1]
  }
}, {
  label: 'attestation.click',
  avatar: {
    src: 'https://gitlab.com/uploads/-/system/group/avatar/15498437/paxpar2.png?width=96'
  },
  click: () => {
    team.value = portals[1]
  }
}, {
  label: 'qdoc.pro',
  avatar: {
    src: 'https://gitlab.com/uploads/-/system/group/avatar/15498437/paxpar2.png?width=96'
  },
  click: () => {
    team.value = portals[1]
  }
}]

const actions = [{
  label: 'Create team',
  icon: 'i-heroicons-plus-circle'
}, {
  label: 'Manage teams',
  icon: 'i-heroicons-cog-8-tooth'
}]

const team = ref(portals[0])
</script>

<template>
  <UDropdown
    v-slot="{ open }"
    mode="hover"
    :items="[topActions, portals, actions]"
    class="w-full"
    :ui="{ width: 'w-full' }"
    :popper="{ strategy: 'absolute' }"
  >
    <UButton color="gray" variant="ghost" :class="[open && 'bg-gray-50 dark:bg-gray-800']" class="w-full">
      <UAvatar :src="team.avatar.src" size="2xs" />

      <span class="truncate text-gray-900 dark:text-white font-semibold">{{ team.label }}</span>
    </UButton>
  </UDropdown>
</template>
