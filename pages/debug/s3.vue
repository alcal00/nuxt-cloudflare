<script setup lang="ts">
const sample_small = "🌐pp/api/bucket/public/dummy/cl_valise_securite_amoa_ko.yaml"
const sample_large = "🌐pp/api/bucket/public/dummy/cl_frankenstein.yaml"

const check_result_path = ref(sample_small)
const check_result_path2 = ref(sample_small)
</script>

<template>
  <h1>S3 debug page 2</h1>

  <h2>S3 public (anon) ressource :</h2>

  <input
    v-model="check_result_path"
    type="text"
    placeholder="Type here"
    class="input input-bordered w-full"
  />

  <button @click="check_result_path = sample_small" class="btn">small</button>
  <button @click="check_result_path = sample_large" class="btn">large</button>

  <ppw-checklist-result-static :path="check_result_path" />

  <h2>S3 public (anon) ressource :</h2>

  <input
    v-model="check_result_path2"
    type="text"
    placeholder="Type here"
    class="input input-bordered w-full"
  />

  <button @click="check_result_path2 = sample_small" class="btn">small</button>
  <button @click="check_result_path2 = sample_large" class="btn">large</button>

  <ppw-checklist-result-static :path="check_result_path2" />

  <h2>ppw-pdf-link :</h2>
  <ppw-pdf-link href="🌐pp/api/bucket/public/dummy/ffx_ed_186_01.pdf" />
</template>
