<script setup lang="ts">
import { PROVIDERS, ACCOUNTS, providersMap } from "~~/src/signtools"
import { type SignatureProviders, type SignatureProvider, type SignatureAccounts, type SignatureAccount } from '~~/models/signature'


const props = withDefaults(
  defineProps<{
    disable_no_sign?: boolean
    selectAndSign?: boolean
    source?: string
    document?: string
  }>(),
  {
    disable_no_sign: false,
    onlySelect: true,
    source: "accounts",
  }
)

const providers = providersMap()
//const component = ref("ppw-sign-cmd-form")
const component = ref()
const signatureConf = ref({})


function selectAccount(account: SignatureAccount) {
  //component = providers.get(account.provider_id).component
  signatureConf.value = account.conf
  component.value = providers.get(account.provider_id).component
}

</script>

<template>
  <div v-if="component">
    <keep-alive>
      <component :is="component"
        :conf="signatureConf"
        :document="document"
      />
    </keep-alive>
    <UButton @click="component = undefined">back</UButton>

  </div>


  <div v-if="!component">

    <template v-if="source == 'providers'">
      <div v-for="provider in PROVIDERS" key="provider.id" class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text">
            <icon :name="provider.icon || 'fa6-solid:file-signature'" size="64" />
          </span>
          <span class="label-text">Je signe avec {{ provider.name }} xx{{ provider.icon }}</span>
          <input type="radio" name="radio-6" class="radio" checked />
        </label>
      </div>
    </template>

    <template v-else>
      <div v-for="account in ACCOUNTS" key="provider.id" class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text">
            <icon :name="account.icon || 'fa6-solid:file-signature'" size="64" />
          </span>

          <span class="label-text">Je signe avec {{ account.name }}</span>
          <UButton v-if="selectAndSign" @click="selectAccount(account)">sign</UButton>
          <input v-if="!selectAndSign" type="radio" name="radio-6" class="radio" checked />
        </label>
      </div>
    </template>

    <div v-if="disable_no_sign === false" class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">
          <icon name="akar-icons:hand" size="64" />
        </span>
        <span class="label-text">Je ne signe pas</span>
        <input type="radio" name="radio-6" class="radio" />
      </label>
    </div>
  </div>
</template>
