<script setup lang="ts">
import { type CraftInfo } from '~~/models/craftform'
import { JSONEditor } from "@json-editor/json-editor/dist/nonmin/jsoneditor.js"
import type { DocumentInfo } from '~/models/document';


const props = withDefaults(
  defineProps<{
    document_path?: string

    //TODO: useless below !!
    craft_id?: string
    documentInfo?: DocumentInfo
    craft?: any
  }>(),
  {}
)

const toast = useMyToast()
const { getToken } = usePaxparAPI()
const token = getToken()

const generateFetchData = ref()
const generateFetchError = ref()
const uploadError = ref()

const editorArgs = {
  schema: {},
  disable_edit_json: true,
  disable_properties: true,
  no_additional_properties: true,
  collapsed: false,
  show_errors: "always",
  ajax: true,
}

// reactive state
const step = ref("")
// steps : [
//    { "id": "10-drop", "title": "Déposer" },
//    { "id": "20-form", "title": "Saisir" },
//    { "id": "90-finalize", "title": "finaliser" },
//  ]
const steps = reactive([])
const refdropfile = ref()
const spinner_show = ref(false)
const form_changed = ref(false)
const generate_options = reactive([])
//const creditsTotal = ref(0.0)
const msg_modal_title = ref("Message")
const msg_modal_desc = ref("...")
//TODO: set from craft info
const showTemplateStep = ref(false)
const showPreviewStep = ref(true)
//TODO: set from craft info
const showCheckStep = ref(false)

// tell if checklist result is empty
const nodeEmpty = computed(() => {
  return Object.keys(node).length == 0
})

const previewComponent = ref()

// checklist result root node
const node = reactive({})

//step_ids = ['step1', 'step2', 'step3', 'step4']
const step_ids = reactive([])
// JSON editor instance
var editor = undefined

const craftId = ref()
const craftInfo = ref<CraftInfo>()
const needPreview = ref(true)
// true when everything is ready on the compoenent
const fullyLoaded = ref(false)


async function initForm(schemaDef?: object, formValue?: object) {
  console.debug('dddddddddddddd 0')

  if (schemaDef) {
    // if a schemaDef is given, we only have to override the schema
    //console.log("restore schemaDef ...");
    craftInfo.value.craft_schema = schemaDef
    //editor.setSchema(schemaDef);
  } else {
    // cold start
    await craftColdLoad()
  }

  // shall we show a check tab
  // warning : checking undefined does not work !!
  showCheckStep.value = !(craftInfo.value?.checklist == null)
  console.debug('dddddddddddddd 2')

  //const schema = craftInfo['craft_schema']
  const schema = craftInfo.value?.craft_schema
  // delete previous editor
  if (editor) {
    //console.log("delete previous editor")
    const editorNode = document.getElementById("json_editor_form")
    editorNode.textContent = ""
  }
  //console.log('init editor JSONEditor ...')
  editor = new JSONEditor(
    // the DOM node where to put the form
    document.getElementById("json_editor_form"),
    {
      ...editorArgs,
      // get craftform schema from store
      schema,
    }
  )
  // for debugging purpose, we expose the editor in the window global instance
  //TODO: only if DEBUG flag
  //window.editor = editor

  editor.on("ready", () => {
    // Now the api methods will be available
    //editor.validate();
    //console.log("editor ready ...")

    //TODO: dynamicaly add json form section
    // with a selector = `div[data-schemapath]`
    // only take those with only one point
    Object.assign(steps, [
      { id: "10-drop", title: "Déposer" },
      { id: "20-form", title: "Saisir" },
      ...getFormSteps(),
      ...getCheckStep(),
      ...getTemplateStep(),
      ...getPreviewStep(),
      { id: "90-finalize", title: "Finaliser" },
    ])
    // empty the array
    step_ids.slice(0)
    // add new items
    //step_ids = steps.map(x => x.id)
    step_ids.push(...steps.map((x) => x.id))

    //console.log({ steps })
    if (typeof formValue !== "undefined") {
      // this is a warn start (schema update)
      // so we load back the form value
      editor.setValue(formValue)
    } else {
      // this is a cold start so we switch to first tab
      // start on step 1
      setStep(steps[0])
    }

    editor.on("change", () => {
      // after a change, the preview need to be refreshed
      needPreview.value = true
    })
  })
  // on init, we don't need to refresh the preview
  needPreview.value = false
  fullyLoaded.value = true
  console.debug('dddddddddddddd 9')

}


// load craft_from from a given craft_id
async function craftLoadFromDocInfo(docInfo: DocumentInfo) {
  console.log('props.documentInfo', props.documentInfo)
  // if a document is given, load it to get schema_id
  //const url = `/api/document/info/${props.documentPath.}`
  //const res = await $ppfetch(url)
  //console.debug('craftLoadFromDocInfo', { docInfo })
  // load craft info
  //const { data } = await useFetchPP(`/api/craftform/${docInfo.craft_id}`)
  const data = await $$ppfetch(`/api/craftform/${docInfo.craft_id}`)
  //craftId.value = craft_id
  craftId.value = docInfo.craft_id
  //craftInfo.value = data.value
  craftInfo.value = data.value

}

// load craft_from from a given doc_path
async function craftLoadFromDocPath(docPath: string) {
  console.debug('craftLoadFromDocPath', docPath)
  // load document info
  const data = await $ppfetch(`/api/craft2/doc/${docPath}`)
  //TODO: handle craft_id, form_values, files ...
  console.debug("craftLoadFromDocPath", data)

  craftInfo.value = data.craft_info
}


// load craft_from from a given craft_id
async function craftLoadFromId(craft_id: string) {
  //console.debug('craftLoadFromId', { craft_id })
  // load craft info
  //const { data } = await useFetchPP(`/api/craftform/${craft_id}`)
  const data = await $ppfetch(`/api/craftform/${craft_id}`)
  craftId.value = craft_id
  craftInfo.value = data.value
  //await dispatch('restoreState');
}

// load craft_from from a given craft def
async function craftLoadRaw(craft: CraftInfo) {
  craftId.value = craft.id
  craftInfo.value = craft
}

async function craftColdLoad() {
  console.debug('cold load ....')
  if (props.document_path !== undefined) {
    // cold start where a document path is given
    await craftLoadFromDocPath(props.document_path)
  } else if (props.documentInfo !== undefined) {
    //TODO: deprecate in favor of props.path
    // cold start where a document info is given
    await craftLoadFromDocInfo(props.documentInfo)
  } else if (props.craft_id !== undefined) {
    //TODO: deprecate in favor of props.path
    // cold start where a craft_id is given
    // load the craft from craft_id
    await craftLoadFromId(props.craft_id)
  } else if (props.craft !== undefined) {
    // cold start where a full craft def is given
    // or load from raw model definition
    await craftLoadRaw(props.craft)
  }
}

function getCheckStep() {
  const res = []
  if (showCheckStep.value) {
    res.push({ id: "70-check", title: "Vérifier" })
  }
  return res
}

function getTemplateStep() {
  const res = []
  //TODO: enable template if present in craft def
  if (showTemplateStep.value) {
    res.push({ id: "80-template", title: "Habiller" })
  }
  return res
}

function getPreviewStep() {
  const res = []
  //TODO: enable previewStep if one is given in craft def
  if (showPreviewStep.value) {
    res.push({ id: "85-preview", title: "Visualiser" })
  }
  return res
}

// returns the class (style) to apply on current step
// the step could be past or future
function stepClass(s) {
  const pos_s = step_ids.indexOf(s.id)
  const pos_step = step_ids.indexOf(step.value)
  //console.log({a: pos_s, b: pos_step})
  if (pos_s <= pos_step) {
    // cette étape est déjà passée
    return { "step-primary": true }
  } else {
    // cette étape est à venir
    return {}
  }
}

// get the JSON-editor form main sections (first level)
// those sections will be added to the wizard steps (later)
function getFormSteps() {
  const mySteps = []
  for (let n of document.querySelectorAll("div[data-schemapath]")) {
    //console.log({ n })
    const schemapath = n.attributes["data-schemapath"]?.value
    const schemaType = n.attributes["data-schematype"]?.value
    // only object can be a step (other like 'string' are fields)
    if (schemaType == "object") {
      const count_dots = (schemapath.match(/\./g) || []).length
      // only keep section at level 1 (with excactly one dot in it)
      // keep : root.proprietaire
      // skip : root.proprietaire.date_naissance
      // skip : root
      if (count_dots == 1) {
        const title = schemapath.replace(/^(root\.)/, "")
        const step = {
          id: schemapath,
          title,
        }
        mySteps.push(step)
        //console.log({ step, schemaType })
      }
    }
  }
  return mySteps
}

/*
Change the curret step
update the reactive var
and show/hide the JSON-form sections
(since JSON-form is not reactive compatible)
*/
function setStep(s) {
  step.value = s.id
  // show/hide json editor section
  const pos_step = step_ids.indexOf(step.value)
  var pos_s = 0
  for (let x of step_ids) {
    //console.log({x, pos_s})
    const selector = `div[data-schemapath="${x}"]`
    //const node = document.querySelector(`div[data-schemapath="root.accidentDetails"]`)
    const node = document.querySelector(selector)
    if (node) {
      // we show/hide the parent else there will be an empty space
      const node_parent = node.parentElement
      if (node_parent) {
        if (pos_s == pos_step) {
          node_parent.hidden = false
          node_parent.classList.remove("hidden")
        } else {
          node_parent.hidden = true
          node_parent.classList.add("hidden")
        }
      }
    }
    pos_s += 1
  }
}

async function generateDocument({ factice }) {
  spinner_show.value = true
  form_changed.value = false

  const form_value = editor.getValue()
  console.log('generateDocument form_value=', form_value)

  const options = {
    //url: "https://paxpar.tech",
    //flag: true,
    form_value,
    session_id: "xxx",
    schema_id: "yyy",
    doc_path: "zzz",
    generate: true,
    //finalize: false,
    //factice: false,
  }

  // since the API endpoints allow file AND options
  // we need to use FormData
  let formData = new FormData()
  //append your file or image
  //formData.append("file", yourfileorimage);
  // append options (as string)
  formData.append("options", JSON.stringify(options))


  generateFetchData.value = undefined
  generateFetchError.value = undefined
  try {

    //const { data, error } = await useFetchPP(`/api/craft/${props.document_path}`, {
    //const { data, error } = await useFetchPP(`/api/craft2/doc/${props.document_path}`, {
    const data = await $ppfetch(`/api/craft2/doc/${props.document_path}`, {
      method: "PUT",
      body: options,
    })
    toast.success(factice ? "Document généré" : "Document final généré")


    // move fetch result to refs
    generateFetchData.value = data.value
  } catch (e) {
    generateFetchError.value = e
    toast.error("Erreur lors de la génération du document")
  }

  // if we need to check the generated PDF
  //TODO: also test generateFetch.value.error.value
  if (showCheckStep.value === true) {
    // check with the given checklist
    try {
      //const data = await useFetchPP(`/api/pdf/check/${craftInfo.value.checklist}`, {
      const data = await $ppfetch(`/api/pdf/check/${craftInfo.value.checklist}`, {
        method: "POST",
        body: {},
        params: {
          source_session: outputPDF.value,
        },
      })
      toast.success(factice ? "Document vérifié" : "Document final vérifié")
      // set node that feed the checklist tab
      Object.assign(node, data.data.value)
    } catch (e) {
      toast.error("Erreur lors de la vérification du document généré")
    }
  }

  // stop spinner
  spinner_show.value = false
}


const outputPdfPath = computed(() => {
  // Return the S3 user session path to the output PDF
  // /craft/common.craftforms.base_doc_builder.base.craftform/_output.pdf
  //return `craft/${craftId.value}/_output.pdf`
  // philippe.entzmann@gmail.com/toto33.pdf/_output.pdf
  return `${props.document_path}/_output.pdf`
})

const outputPdfURL = computed(() => {
  // Return the API URL to get the output PDF
  //return `/api/craft/${props.craft_id}/output.pdf`
  return `/api/document/content/${props.document_path}`
})


// check if we have previous step
const hasPreviousStep = computed(() => {
  var pos_step = step_ids.indexOf(step.value)
  return pos_step > 0
})

// check if we are on the last step
const hasNextStep = computed(() => {
  var pos_step = step_ids.indexOf(step.value)
  return pos_step + 1 < step_ids.length
})

// go to previous wizard step
async function doPreviousStep() {
  var pos_step = step_ids.indexOf(step.value)
  if (pos_step > 0) {
    pos_step -= 1
    setStep(steps[pos_step])
  }
}

// go to next wizard step
async function doNextStep() {
  var pos_step = step_ids.indexOf(step.value)
  if (pos_step + 1 < step_ids.length) {
    pos_step += 1
    setStep(steps[pos_step])
  }
}

async function doPreview() {
  await generateDocument({ factice: true })

  //document.getElementById("preview-modal").checked = true
  await previewComponent.value.refresh()
  needPreview.value = false
}

async function doFinalize() {
  // if we are not on the finalize step ...
  if (step.value !== "90-finalize") {
    // ... move to it (last step)
    setStep(steps[steps.length - 1])
    return
  }
  // we really finalyse here
  await generateDocument({ factice: false })

  // download the generated PDF
  await downloadItem({
    url: outputPdfURL.value,
    //TODO: get the name from API
    label: "document.pdf",
  })
}

async function doCancel() {
  // reset the dropzone
  await refdropfile.value.reset()
  // reset the form values
  await initForm()

  // back to first tab
  setStep(steps[0])
  toast.success("Formulaire initialisé !")
}

async function downloadItem({ url, label }) {
  // credits : https://thewebdev.info/2021/05/22/how-ow-to-download-a-file-in-the-browser-with-vue-js/
  console.debug('downloadItem', url)
  const data = await $ppfetch(url, { responseType: 'blob' })
  const blob = new Blob([data.value], { type: "application/pdf" })
  const link = document.createElement("a")
  link.href = URL.createObjectURL(blob)
  link.download = label
  link.click()
  URL.revokeObjectURL(link.href)
}

async function onFileChange(response) {
  // called when all a file is uploaded
  //console.log("onFileChange ...", response)

  // clear privous error detail
  uploadError.value = undefined

  // on a successfull file stored, add it to the form
  // on an accepted file (stored or not)
  if (response.status == "accepted") {
    // if we need to overload some form value
    if (response.form_overload) {
      // a single setValue will erase all missing field
      // editor.setValue(response.form_overload);
      // we need to merge the current value with the new one
      // get current form value
      const currentFormValue = editor.getValue()
      // merge the current value with the new one
      const newFormValue = { ...currentFormValue, ...response.form_overload }
      // set the new value
      editor.setValue(newFormValue)
    }
    // if the file uploaded returns some extra_files
    if (response?.extra_files) {
      // refresh uploaded file list
      await refdropfile.value.refresh()
    }
    // if a schema change is required
    if ((response?.craft_schema) && (Object.keys(response.craft_schema).length > 0)) {
      const currentFormValue = editor.getValue()
      await initForm(response.craft_schema, currentFormValue)
    }
    // after a succesfull file drop, the preview need to be refreshed
    needPreview.value = true
  } else {
    // if the file is not accepted (rejected)
    // nothing to do (msg will be show later)
  }

  // if the file uploaded returns a message
  if (response?.msg) {
    //console.log("msg ...", response.msg)
    if (response.status == "accepted") {
      toast.success(response.msg)
    } else {
      toast.error(response.msg)
    }
  }
}

async function onFileUploadError(response) {
  // called when a file failed to upload
  //console.log("onFileUploadError ...", response)
  uploadError.value = response
}

const wizardMessageClass = "m-5 text-lg"


onMounted(async () => {
  // a direct call does not work when we are back to the page
  setTimeout(initForm, 500)
})


</script>

<template>
  <div class="flex-col p-2 m-2">
    <!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->
    <!-- Message modal -->
    <!-- Put this part before </body> tag with teleport or <dialog> ?? -->
    <div class="modal" id="msg-modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">{{ msg_modal_title }}</h3>
        <p class="py-4" v-html="msg_modal_desc" />
        <div class="modal-action">
          <a href="#" class="btn">OK</a>
        </div>
      </div>
    </div>

    <!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->
    <!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->
    <!-- craft icon and title -->
    <div class="flex flex-row">
      <div>
        <p class="text-2xl">{{ craftInfo?.name }}</p>
        <p>{{ craftInfo?.desc }}</p>
      </div>
    </div>

    <!-- Steps title -->
    <ul class="steps flex p-2 m-2">
      <li v-for="s in steps" :key="s.id" :class="stepClass(s)" class="step grow" @click="setStep(s)">
        {{ s.title }}
      </li>
    </ul>

    <!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->
    <!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->
    <div v-show="fullyLoaded">
      <div v-show="step === '10-drop'" class="grow">
        <slot :name="`10-drop`">
          <div v-html="craftInfo?.wizard?.messages?.step_drop_file" :class="wizardMessageClass" />

          <ppw-alert v-if="uploadError" type="error"
            :msg="`${uploadError?.body?.detail} (error ${uploadError?.status})`" />

          <!--
          <ppw-dropfile-main2 ref="refdropfile" :uploadUrl="`/api/craft/file/${props.craft_id}`"
            :sessionPath="`craft/${props.craft_id}`" @uploadSuccess="onFileChange" @uploadError="onFileUploadError" />
          -->
          <ppw-dropfile-main3 ref="refdropfile" @uploadSuccess="onFileChange" @uploadError="onFileUploadError"
            :url="`/api/craft2/doc/${props.document_path}`" />


        </slot>
      </div>

      <!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->
      <div v-show="step === '20-form' || step.startsWith('root.')">
        <div v-html="craftInfo?.wizard?.messages?.step_input" :class="wizardMessageClass" />
        <div id="json_editor_form" />
      </div>

      <!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->
      <div v-show="step === '70-check'">
        <div v-html="craftInfo?.wizard?.messages?.step_check" :class="wizardMessageClass" />
        <slot :name="`70-check`">
          <ppw-alert v-if="needPreview" action="Actualiser" @action="doPreview"
            msg="Les données ont été modifiées, le contrôle n'est peut-être plus à jour." />

          <div v-if="nodeEmpty">Rien à vérifier.</div>
          <ppw-checklist-result v-else :node="node" :show_root="false" :hide_modes_selector="false" mode="simple" />
        </slot>
      </div>

      <!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->
      <div v-show="step === '80-template'">
        <slot :name="`80-template`">
          <div v-for="template_set in craftInfo?.template_sets" :key="template_set.id"
            class="steps p-2 m-2 bg-blue-400">
            <ppw-template-select :template_set="template_set" />
          </div>
        </slot>
      </div>

      <!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->
      <div v-show="step === '85-preview'">
        <slot :name="`85-preview`">
          <div class="h-screen">
            <ppw-alert v-if="!needPreview && !generateFetchError" type="success" action="Actualiser" @action="doPreview"
              :msg="generateFetchData?.msg" />

            <ppw-alert v-if="needPreview" action="Actualiser" @action="doPreview"
              msg="Les données ont été modifiées, le visuel n'est peut-être plus à jour." />

            <ppw-alert v-if="generateFetchError" type="error" action="Actualiser" @action="doPreview"
              :msg="`${generateFetchError?.data?.detail} (error ${generateFetchError?.statusCode})`" />

            outputPdfURL = {{ outputPdfURL }}
            <p />

            <ppw-pdfview ref="previewComponent" :pdfUrl="outputPdfURL" :authToken="token" />
          </div>
        </slot>
      </div>

      <!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->
      <div v-show="step === '90-finalize'">
        <div v-html="craftInfo?.wizard?.messages?.step_finalize" :class="wizardMessageClass" />
        <slot :name="`90-finalize`">
          <h2>Lors de la finalisation de mon document :</h2>
          <ppw-sign-chooser selectAndSign :document="outputPdfPath" />
        </slot>
      </div>

      <!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->
      <!-- buttons bar -->
      <div class="flex justify-between flex-wrap gap-3 m-4">
        <div>
          <UButton @click="doCancel" icon="i-mdi-keyboard-return" color="primary" size="xl" />

          <UButton @click="doCancel" icon="i-mdi-backup-restore" color="primary" size="xl">
            <p class="hidden lg:block">Annuler</p>
          </UButton>

          <UButton v-if="!showPreviewStep" @click="doPreview" icon="i-ic-outline-search" color="blue" size="xl">
            <p class="hidden lg:block">Annuler</p>
          </UButton>
        </div>

        <UButtonGroup size="sm" orientation="horizontal">
          <UButton @click="doPreviousStep" :disabled="!hasPreviousStep" icon="i-ic-baseline-skip-previous" color="blue"
            size="xl">
            <p class="hidden lg:block">Précédent</p>
          </UButton>
          <UButton @click="doNextStep" :disabled="!hasNextStep" icon="i-ic-baseline-skip-next" trailing color="blue"
            size="xl">
            <p class="hidden lg:block">Suivant</p>
          </UButton>
        </UButtonGroup>

        <div>
          <UButton @click="doFinalize" icon="i-ic-baseline-check-circle-outline" color="primary" size="xl">
            <p class="hidden lg:block">Finaliser</p>
          </UButton>
        </div>
      </div>
    </div>

    <!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->
    <ppw-debug-panel title="components/wizard/main">
      <p>step : {{ step }}</p>
      <p>step_ids : {{ step_ids }}</p>
      <p>steps : {{ steps }}</p>
      <p>refdropfile : {{ refdropfile }}</p>
      <p>spinner_show : {{ spinner_show }}</p>
      <p>form_changed : {{ form_changed }}</p>
      <p>generate_options : {{ generate_options }}</p>
      <button class="btn" @click="initForm">init</button>
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text">showTemplateStep</span>
          <input type="checkbox" class="toggle" :checked="showTemplateStep"
            @click="showTemplateStep = !showTemplateStep" />
        </label>
        <label class="label cursor-pointer">
          <span class="label-text">showCheckStep</span>
          <input type="checkbox" class="toggle" :checked="showCheckStep" @click="showCheckStep = !showCheckStep" />
        </label>
      </div>
    </ppw-debug-panel>

    <!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->
    <ppw-spinner ref="spinner" v-if="spinner_show">
      <h2 class="text-center text-white text-xl font-semibold">Génération...</h2>
      <p class="w-1/3 text-center text-white">
        Votre document est en cours de construction
      </p>
    </ppw-spinner>
  </div>
  <UProgress v-if="!fullyLoaded" animation="swing" />
</template>

<style lang="postcss">
/*
don't use scoped style since they does not apply to json-editor nodes
TODO: better use a json-editor theme ?
*/
@import "wizard.css";
</style>
