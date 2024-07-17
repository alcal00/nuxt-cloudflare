<script setup lang="ts">

const supabase = useSupabaseClient()
const backend = useBackend()

const state = ref("input") // or 'process', or 'result'
const tokenExpiry = ref()
const tokenName = ref("")
const tokenScope = ref([])
const resultToken = ref()

async function generateToken() {
  state.value = "process"

  //TODO: moveo to paxpar API !!!
  //const url = 'https://iwbykurftghnypkfinme.supabase.co/functions/v1/hello-world'
  const { data, error } = await supabase.functions.invoke("token", {
    body: {
      name: tokenName.value,
      expiry: tokenExpiry.value,
      scope: tokenScope.value,
    },
  })
  console.log({ data, error })
  if (data) {
    resultToken.value = data.jwt
    state.value = "result"
  }
}

async function reset() {
  state.value = "input"
  resultToken.value = ""
}


onMounted(async () => {
})

</script>

<template>
  <UDashboardPanelContent class="pb-24">
    <UDashboardSection title="Manage access" description="Invite new members by email address." orientation="horizontal" :ui="{ container: 'lg:sticky top-2' }">

      <template v-if="backend">
        <UButton :to="`${backend}/api/docs`" target="_blank" color="primary">OpenAPI docs</UButton>
        <UButton :to="`${backend}/api/redoc`" target="_blank" color="primary">OpenAPI redoc</UButton>
        <UButton :to="`${backend}/api/version`" target="_blank" color="primary">version</UButton>
      </template>

      <h1>API keys</h1>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div v-if="state == 'input'" class="card-body">
          <h2 class="card-title">New API token</h2>
          <p>Set the token name and expiry date</p>

          <div class="form-control">
            <input type="text" placeholder="Name" class="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Expiry date" class="input input-bordered w-full max-w-xs" />

            <p>Restrict the token scope :</p>
            <label class="label cursor-pointer">
              <span class="label-text">full</span>
              <input type="checkbox" class="toggle" checked />
            </label>
            <label class="label cursor-pointer">
              <span class="label-text">not implemented</span>
              <input type="checkbox" class="toggle" />
            </label>
            <label class="label cursor-pointer">
              <span class="label-text">not implemented</span>
              <input type="checkbox" class="toggle" />
            </label>
          </div>

          <div class="card-actions justify-end">
            <button @click="generateToken" class="btn btn-primary">Generate</button>
          </div>
        </div>

        <div v-if="state == 'process'" class="card-body">
          <span class="loading loading-dots loading-md"></span>
        </div>

        <div v-if="state == 'result'" class="card-body">
          <p>Please keep this token in a safe place :</p>
          <p>{{ resultToken }}</p>
          <div class="card-actions justify-end">
            <button @click="reset" class="btn btn-primary">Done</button>
          </div>
        </div>
      </div>    
    </UDashboardSection>

  </UDashboardPanelContent>
</template>
