<script setup lang="ts">
import { ref } from 'vue'
import { useQRCode } from '@vueuse/integrations/useQRCode'


const qrConf = reactive({
  craft_id: 'common.craftforms.base_doc_builder.base.craftform',
  front_base_url: '',
  chemin_destination: '',
  autoriser_utilisateurs_non_verifies: '',
  description_chemin_destination: '',
  description_document_demande: '',
  user_id_demandeur: '',
  date_demande: '',
  date_expiration_demande: '',
  redirection_login: '',
  url_court: '',
  url_lisible: '',
  qrcode: {
    errorCorrectionLevel: 'L',
    margin: 3,
  }
})



const fullURL = computed(() => {
  const x = qrConf.qrcode.margin
  return `xxxx${qrConf.front_base_url}xxxxhtttpxxxx${qrConf.craft_id}xxx${qrConf.qrcode.margin}`
})

//const qrcode = useQRCode(fullURL, {
//    errorCorrectionLevel: 'L',
//    margin: 3,
//})
const qrcode = useQRCode(fullURL, qrConf.qrcode)


const state = reactive({
  email: undefined,
  password: undefined
})

async function onSubmit(event) {
  // Do something with event.data
  console.log(event)
}





</script>

<template>
  <div>
    <h1>shortcut</h1>


    <UForm :state="state" class="space-y-4" @submit="onSubmit">

      <UFormGroup label="id du craftform" name="craft_id">
        <UInput v-model="qrConf.craft_id" />
      </UFormGroup>

      <UFormGroup label="qrcode errorCorrectionLevel" name="errorCorrectionLevel">
        <UInput v-model="qrConf.qrcode.errorCorrectionLevel" />
      </UFormGroup>

      <UFormGroup label="qrcode margin" name="margin">
        <UInput v-model="qrConf.qrcode.margin" />
      </UFormGroup>

      <UFormGroup label="paxpar front base URL" name="front_base_url">
        <UInput v-model="qrConf.front_base_url" />
      </UFormGroup>


      <UFormGroup label="un chemin de destination pour le PDF finalisé (not implemented)" name="password">
        <UInput v-model="qrConf.chemin_destination" />
      </UFormGroup>


      <UFormGroup label="un chemin de destination pour le PDF finalisé (not implemented)" name="password">
        <UInput v-model="qrConf.chemin_destination" />
      </UFormGroup>

      <UFormGroup label="autoriser les utilisateurs non vérifiés (not implemented)" name="password">
        <UInput v-model="qrConf.autoriser_utilisateurs_non_verifies" />
      </UFormGroup>

      <UFormGroup label="description chemin de destination (not implemented)" name="password">
        <UInput v-model="qrConf.description_chemin_destination" />
      </UFormGroup>

      <UFormGroup label="description du document demandé       (not implemented)" name="password">
        <UInput v-model="qrConf.description_document_demande" />
      </UFormGroup>

      <UFormGroup label="user_id du demandeur (not implemented)" name="password">
        <UInput v-model="qrConf.user_id_demandeur" />
      </UFormGroup>

      <UFormGroup label="date de la demande (not implemented)" name="password">
        <UInput v-model="qrConf.date_demande" />
      </UFormGroup>

      <UFormGroup label="date d'expiration de la demande (not implemented)" name="password">
        <UInput v-model="qrConf.date_expiration_demande" />
      </UFormGroup>

      <UFormGroup label="redirection login si necessaire (not implemented)" name="password">
        <UInput v-model="qrConf.redirection_login" />
      </UFormGroup>

      <UFormGroup label="url court (not implemented)" name="password">
        <UInput v-model="qrConf.url_court" />
      </UFormGroup>

      <UFormGroup label="url lisible (ou court) (not implemented)" name="password">
        <UInput v-model="qrConf.url_lisible" />
      </UFormGroup>


      <UButton type="submit">
        Submit
      </UButton>
    </UForm>
    <img :src="qrcode" alt="QR Code" />


  </div>
</template>
