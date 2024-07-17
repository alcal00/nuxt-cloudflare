<script setup lang="ts">


const WS_URL = "/api/sign/provider/cmd/debug/ws"
const ws = ref<WebSocket>()


const TEST_URLS = [
  "https://google.fr",
  "https://www.whatsmyip.org/",
  "https://linuxfr.org/",
  "https://paxpar.tech",
  "https://www.autenticacao.gov.pt",
  "https://cmd.autenticacao.gov.pt/Ama.Authentication.Frontend/Processes/DigitalSignature/DigitalSignatureIntro.aspx",
  "https://frtend.reg.cmd.autenticacao.gov.pt/Ama.Registry.Frontend/Processes/DigitalSignature/DocumentSigning.aspx",
]

const query = ref("")
const response = ref("")
const imageBytes = ref()

const backendURL = ref()

async function wsConnect() {
  //window.alert("wsConnect ...")
  const backend_ws = useBackend("ws")
  const wsFullURL = backend_ws + WS_URL
  console.debug({ wsFullURL })
  backendURL.value = wsFullURL
  ws.value = new WebSocket(wsFullURL)
  ws.value.onmessage = onMessage
}

function wsClose() {
  //window.alert("wsClose ...")
  ws.value?.close()
  ws.value = undefined
}


function wsSend() {
  ws.value?.send(query.value)
}

function onMessage(msg) {
  response.value = msg.data
  const data = JSON.parse(msg.data)


  switch (data?.state) {

    case "screenshot":
      console.debug("screenshot recieved !")
      imageBytes.value = data.screenshot
      break

    default:
      console.log("msg from server:", { data })
      break
  }
}

function goToURL(url: string) {
  query.value = `{"go": "${url}"}`
  wsSend()
}

</script>

<template>
  <h1>playwright debug page </h1>
  
  <p> backendURL = {{  backendURL }}</p>

  <UTextarea v-model="query" resize placeholder="query..." />
  <UTextarea v-model="response" resize disabled placeholder="response..." />


  <UButton v-if="ws" @click="wsSend" label="Send" />

  <UButton v-if="ws" v-for="url in TEST_URLS" @click="goToURL(url)" :label="url" class="m-2" />


  <div>
    screenshot ...
    <img v-bind:src="'data:image/jpeg;base64,' + imageBytes" />
  </div>

  <UButton v-if="!ws" @click="wsConnect" label="Connect" />
  <UButton v-if="ws" @click="wsClose" label="Disconnect" />
</template>
