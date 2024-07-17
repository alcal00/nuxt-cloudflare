<script setup lang="ts">

</script>

<template>
  <h1>Toast debug page</h1>

  <ppw-social-share />

  <hr />

  <div class="flex flex-row gap-2">
    <SocialShare v-for="network in ['facebook', 'twitter', 'linkedin', 'email', 'reddit']" :key="network"
      :network="network" :styled="true" :label="false" class="p-4 rounded-none" />
  </div>
</template>
