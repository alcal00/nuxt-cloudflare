<script setup lang="ts">
const { locale } = useI18n()

</script>

<template>
  <h1>i18n debug page</h1>
  <p>{{ $t('welcome') }}</p>

  <p><NuxtLink to="/legal/cgv">multi lang CGV page</NuxtLink></p>
  <ppw-i18n-lang-select />
  
  <div>
    <form>
      <select v-model="locale">
        <option value="en">en</option>
        <option value="fr">fr</option>
        <option value="pt">pt</option>
      </select>
    </form>
  </div>

  <ULandingSection :headline="$t('home')" :title="$t('welcome') + ' ...'" :description="$t('welcome_phrase')" />
</template>
