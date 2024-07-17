<script setup lang="ts">
import type { Avatar } from '#ui/types'


//TODO: read from pp API
const people = [{
  id: 'philippe+alice@paxpar.tech',
  label: 'Alice Test',
  avatar: { src: 'https://avatars.githubusercontent.com/u/7547335?v=4' }
}, {
  id: 'philippe+bob@paxpar.tech',
  label: 'Bob Test',
  avatar: { src: 'https://avatars.githubusercontent.com/u/7547335?v=4' }
}, {
  id: 'philippe.entzmann@gmail.com',
  label: 'Philippe ENTZMANN',
  href: 'https://github.com/PhE',
  target: '_blank',
  avatar: { src: 'https://avatars.githubusercontent.com/u/1107924?v=4' }
}, {
  id: 'Atinux',
  label: 'Atinux',
  href: 'https://github.com/Atinux',
  target: '_blank',
  avatar: { src: 'https://avatars.githubusercontent.com/u/904724?v=4' }
}, {
  id: 'smarroufin',
  label: 'smarroufin',
  href: 'https://github.com/smarroufin',
  target: '_blank',
  avatar: { src: 'https://avatars.githubusercontent.com/u/7547335?v=4' }
}, {
  id: 'nobody',
  label: 'Nobody',
  icon: 'i-heroicons-user-circle'
}]

const model = defineModel()
//const selected = ref(people[0])

</script>

<template>
  <UInputMenu v-model="model" :options="people">
    <template #leading>
      <UIcon v-if="model.icon" :name="(model.icon as string)" class="w-5 h-5" />
      <UAvatar v-else-if="model.avatar" v-bind="(model.avatar as Avatar)" size="2xs" />
    </template>
  </UInputMenu>
</template>
