<script setup lang="ts">
const { survey, surveyPref, surveySave } = await useUserPrefs()
const { refresh: refresh1 } = surveyPref

const x1 = ref({ x: 33 })
const x2 = ref(33)
const x3 = reactive({ x: 33 })

watch(x1, (value, prevValue) => {
  console.debug("x1 changed !!", value)
})
watch(x2, (value, prevValue) => {
  console.debug("x2 changed !!", value)
})
watch(x3, (value, prevValue) => {
  console.debug("x3 changed !!", value)
})
</script>

<template>
  <div>
    <p>profile debug page</p>
    survey : {{ survey }}
    <p />

    <UFormGroup label="Email">
      <UInput
        v-model="survey.message"
        placeholder="you@example.com"
        icon="i-heroicons-envelope"
      />
    </UFormGroup>
    <p />

    <UButton @click="surveySave" label="survey save" />

    <UButton @click="refresh1" label="refresh survey" />

    <p>x1.x = {{ x1.x }}, x2 = {{ x2 }}, x3.x = {{ x3.x }}</p>
    <UButton @click="x1.x += 1" label="x1.x ++" />
    <UButton @click="x2 += 1" label="x2++" />
    <UButton @click="x3.x += 1" label="x3.x++" />

    <UDivider />
    <ppw-panel-survey />
  </div>
</template>
