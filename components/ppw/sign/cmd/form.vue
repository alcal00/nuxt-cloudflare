<script setup lang="ts">
/*

Session doc path : /craft/common.craftforms.base_doc_builder.base.craftform/_output.pdf

URL to download a crafted PDF : /api/craft/common.craftforms.base_doc_builder.base.craftform/output.pdf

other URL for the same doc :

http://localhost:8881/api/file/session/craft/common.craftforms.base_doc_builder.base.craftform/_output.pdf


*/

const props = withDefaults(
  defineProps<{
    conf?: object
    document?: string
  }>(),
  {
    conf: () => {
      return {}
    },
  }
)

const state = ref("disconnected")
const data = ref()
const inputData = ref()
const messageToSend = ref()

// current tab 1..4
const tab = ref(1)

const progress = ref(0)
const progress_msg = ref()

//const pdfFile = ref("/session/path/to/file.pdf")
//const pdfFile = ref("/home/philippe/Downloads/toto.pdf")
//const pdfFile = ref("/craft/common.craftforms.base_doc_builder.base.craftform/_output.pdf")
const pdfFile = ref(props?.document || "/craft/common.craftforms.base_doc_builder.base.craftform/_output.pdf")
//const phone = ref("+33 606060606")
const phone = ref(props.conf?.mobile)
const imageBytes = ref()

const WS_URL = "/api/sign/provider/cmd/ws"

//const connection = new WebSocket("ws://localhost:8881/api/sign/provider/cmd/ws")
//const ws = ref<WebSocket | undefined>()
const ws = ref<WebSocket>()

const isDialogPINopen = ref(false)
const isDialogOTPopen = ref(false)
const inputPIN = ref()
const inputOTP = ref()


if (process.browser) {
  //ws = new WebSocket("ws://localhost:8881/api/sign/provider/cmd/ws");
}

async function wsConnect() {
  tab.value = 3
  //window.alert("wsConnect ...")
  const backend_ws = useBackend("ws")
  //console.debug({ backend_ws })

  ws.value = new WebSocket(backend_ws + WS_URL)
  ws.value.onmessage = onMessage
}

function wsClose() {
  //window.alert("wsClose ...")
  ws.value?.close()
  ws.value = undefined
}

/*
function sendMessage(msg: string) {
  //window.alert(`sendMessage ... ${messageToSend.value}`)
  console.debug({ msg })
  ws.value?.send(msg)
}
*/
function onMessage(msg) {
  const data = JSON.parse(msg.data)
  //msg.data

  switch (data?.state) {
    case "start":
      // <-- { "state": "start" }
      // --> { "start": "", "auto_screenshot": 1 }
      console.log(`state=start onMessage data=${data}`)
      ws.value?.send(
        JSON.stringify({
          start: "",
          auto_screenshot: 1,
        })
      )
      break

    case "stage1_input":
      // <--{ "state": "stage1_input" }
      // --> { "phone": "+33 607650693", "pin": "1234", "source": "/session/path/to/file.pdf", "dest": "/session/path/to/file2.pdf" }
      console.log(`state=stage1_input onMessage data=${data}`)

      // open dialog to let user enter OTP code
      isDialogPINopen.value = true
      break

    case "stage1":
      if (data?.progress) {
        progress.value = data.progress
      }
      progress_msg.value = data?.msg
      break

    case "stage2_input":
      // <--{ "state": "stage2_input", "status": "OK", "progress": "otp" }
      // --> { "otp": "12345678" }
      console.debug(`state=stage2_input onMessage data=${data}`)
      //const otp = window.prompt("Code OTP")
      // open dialog to let user enter OTP code
      isDialogOTPopen.value = true
      break

    case "stage2":
      if (data?.progress) {
        progress.value = data.progress
      }
      progress_msg.value = data?.msg
      break

    case "done":
      tab.value = 4
      console.log(`state=done`, { data })
      wsClose()
      break

    case "screenshot":
      console.debug("screenshot recieved !")
      imageBytes.value = data.screenshot
      break

    default:
      console.log("msg from server:", { data })
      break
  }
}

function doScreenshot() {
  ws.value?.send(
    JSON.stringify({
      screenshot: "",
    })
  )
}

function doDialogPINok() {
  ws.value?.send(
    JSON.stringify({
      phone: phone.value,
      pin: inputPIN.value,
      pdf_file_path: pdfFile.value,
    })
  )
}

function doDialogOTPok() {
  ws.value?.send(
    JSON.stringify({
      otp: inputOTP.value,
    })
  )
  // later, we should recieve a "state:done"
}


function doDialogCancel() {
  wsClose()
}


function doWelcomeCTA() {
  console.debug('skipTab2.value', skipTab2.value)
  if (skipTab2.value == true) {
    wsConnect()
  } else {
    tab.value = 2
  }
}

// if props are set to skip tab 2 (form)
const skipTab2 = computed(() => {
  return (props.conf?.mobile !== undefined && props.document)
})

onMounted(async () => {
  //console.log("mounted ...")
})
</script>

<template>
  <UCard v-if="tab == 1">
    <ULandingSection icon="i-heroicons-rocket-launch" title="Ready to sign ?"
      description="Be ready to enter your PIN code, then you will recieve an OTP code on your mobile phone.">
      <template #links>
        <UButton @click="doWelcomeCTA" icon="i-ic-baseline-skip-next" trailing color="blue" size="xl" label="Start" />
      </template>
    </ULandingSection>
  </UCard>


  <UCard v-if="tab == 2">
    <UFormGroup label="PDF file" required>
      <UInput v-model="pdfFile" placeholder="document.pdf" icon="i-heroicons-envelope" />
    </UFormGroup>

    <UFormGroup label="Mobile phone" required>
      <UInput v-model="phone" placeholder="+33 605040302" icon="i-heroicons-envelope" />
    </UFormGroup>

    <UButton v-if="!ws" @click="wsConnect" label="Connect" />
    <UButton v-if="ws" @click="wsClose" label="Disconnect" />
  </UCard>

  <UCard v-if="tab == 3">
    <span>Progress ...</span>
    <UProgress v-if="ws && !progress" animation="carousel" />
    <UProgress v-if="ws && progress" :value="progress" />
    <p>{{ progress_msg }}</p>
    <div>
      screenshot ...
      <img v-bind:src="'data:image/jpeg;base64,' + imageBytes" />
    </div>

    <UButton v-if="ws" @click="doScreenshot" label="screenshot" />
  </UCard>

  <UCard v-if="tab == 4">
    <ULandingSection icon="i-heroicons-rocket-launch" title="Signature done !" description="Your document is signed." />

  </UCard>

  <!--
  <div>
    <span>conf = {{ conf }}, document = {{ document }}</span>
  </div>
  -->

  <ppw-modal v-model="isDialogPINopen" contentSlot okCancel @ok="doDialogPINok" @cancel="doDialogCancel">
    <UFormGroup label="PIN" required>
      <UInput v-model="inputPIN" placeholder="0000" icon="i-heroicons-envelope" />
    </UFormGroup>
  </ppw-modal>

  <ppw-modal v-model="isDialogOTPopen" contentSlot okCancel @ok="doDialogOTPok" @cancel="doDialogCancel">
    <UFormGroup label="OTP" required>
      <UInput v-model="inputOTP" placeholder="000000" icon="i-heroicons-envelope" />
    </UFormGroup>
  </ppw-modal>
</template>
