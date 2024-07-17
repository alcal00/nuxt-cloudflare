<script setup lang="ts">
//TODO: uppy proudlyDisplayPoweredByUppy
//TODO: https://uppy.io/blog/2018/04/0.24/#xhr-response-handling

// moved to style section
import '@uppy/core/dist/style.css'
import '@uppy/drop-target/dist/style.css'
////import '@uppy/file-input/dist/style.css'
import '@uppy/webcam/dist/style.min.css'
import "@uppy/dashboard/dist/style.css"

import Uppy from "@uppy/core"
//import type { UppyFile } from '@uppy/core'

import { Dashboard } from "@uppy/vue"
//import DragDrop from '@uppy/drag-drop'
import Webcam from '@uppy/webcam'

import XHRUpload from "@uppy/xhr-upload"
import DropTarget from "@uppy/drop-target"
//import ProgressBar from '@uppy/progress-bar'
//import FileInput from '@uppy/file-input'
import { type ItemPDF, type GlobalAction } from "~~/types/pdf_showcase.types"


const toast = useMyToast()
const { useFetchPP, getToken } = usePaxparAPI()
const token = getToken()
// properties
const props = withDefaults(
  defineProps<{
    uploadUrl: string
    sessionPath: string
    showFiles?: boolean
    dropfile_webcam?: boolean
  }>(),
  {
    showFiles: true,
    dropfile_webcam: false,
  }
)


// Watch for changes in props.myProp
watch(() => props.dropfile_webcam, async (newValue, oldValue) => {
  // React to prop changes
  //console.log('Prop dropfile_webcam changed:', newValue)
  await initUppy()
})


// events
const emit = defineEmits<{
  (e: "uploadSuccess", payload: any): void
  (e: "uploadError", payload: any): void
  (e: "uploadStart"): void
}>()

// progress bar
const progressGlobal = ref(0)
const progressShow = ref(false)
// the files (files already in session and uploaded files)
const session_files = reactive([])

const onComplete = async (result) => {
  console.log('onComplete', { result })
}

// Handle success on upload
const onUploadSuccess = async (file, response) => {
  // set the progress to 100%
  //progressGlobal.value = 100
  //progressShow.value = false
  console.log('onUploadSuccess', { file, response })

  // remove file from uppy files to allow re-upload of the same file
  if (props.showFiles == false || response?.body?.stored == false) {
    uppy.removeFile(file.id)
  }
  // refresh list of file only if we have to show them
  if (props.showFiles) {
    await refresh()
  }
  progressShow.value = false
  emit("uploadSuccess", response.body)
}

// Handle error on upload
const onUploadError = (file, error, response) => {
  // set the progress to 100%
  progressGlobal.value = 100
  progressShow.value = false
  //console.log("onUploadError", { file, error, response })

  emit("uploadError", response)
}

function onProgress(progress) {
  // progress: integer (total progress percentage)
  // upload is only 50% (/2), we assume the processing of the uploaded file will take half the time
  progressGlobal.value = progress / 2
  //console.log("progress", progress)
}

// options docs https://uppy.io/docs/uppy/#Options
var uppy = new Uppy({
  id: "uppy1",
  // start with false to not trigger on initial files addition
  autoProceed: true,
  //restrictions: {
  //    maxFileSize: 100*1024*1024, // 100 Mo
  //    allowedFileTypes: ['*.pdf'],
  //},
  debug: true,
  locale: {
    strings: {
      cancel: "Annuler",
    },
  },
  onBeforeUpload: (files) => {
    console.log('onBeforeUpload files=', files)
    // We’ll be careful to return a new object, not mutating the original `files`
    // Only return newly added file (forget the initial files)
    const updatedFiles = {}
    Object.keys(files).forEach((fileID) => {
      if (files[fileID].meta.from_pp_session !== true) {
        updatedFiles[fileID] = {
          ...files[fileID],
          //name: `${myCustomPrefix}__${files[fileID].name}`,
        }
      }
    })
    return updatedFiles
  },
  onBeforeFileAdded: (currentFile, files) => {
    console.log({ currentFile, files })
    progressShow.value = true
    emit("uploadStart")
    return currentFile
  },
})

async function initUppy() {
  const backend = useBackend()
  console.log('initUppy ...')
  uppy
    .on("upload-success", onUploadSuccess)
    .on("upload-error", onUploadError)
    .on("progress", onProgress)
    .use(Webcam, {
      mobileNativeCamera: true,
      modes: ['picture'],
      showVideoSourceDropdown: true,
      videoConstraints: {
        facingMode: 'environment',
      },
    })
    .use(XHRUpload, {
      //endpoint: `/api/craft/file/${craft_id}`,
      endpoint: `${backend}${props.uploadUrl}`,
      headers: (file) => ({
        //TODO: needed ?
        Authorization: `Bearer ${token}`,
      }),
    })
    .use(DropTarget, {
      target: document.body,
    })

  if (props.showFiles) {
    // initial refresh only if we show files
    await refresh()
  }
}


onMounted(async () => {
  await initUppy()
  //console.log('onMounted', uppy)
})

async function refresh() {
  // refresh file list from remote storage
  //console.log('refresh ...')
  try {
    // https://philippe.paxpar.tech/api/ref/public
    const { data } = await useFetchPP(`/api/files/session/${props.sessionPath}`)

    // Empty session_files (without breaking reactive ref)
    session_files.splice(0)

    for (const f of data.value) {
      //console.log({ f })
      session_files.push({
        url: f.name,
      })
    }
  } catch (err) {
    toast.error("Erreur lors de la récupération du contenu de la session")
  }

  // We use Object.assign({}, obj) to create a copy of `obj`.
  const updatedFiles = { ...uppy.getState().files }
  uppy.setState({ files: updatedFiles })
}

async function reset() {
  // clear file storage (API call) and refresh
  const { data } = await useFetchPP(`/api/files/session/${props.sessionPath}`, {
    method: "DELETE",
    toast: {
      success: {
        msg: `Fichiers supprimés !`,
      },
      error: {
        msg: "Erreur lors de la ré-initialisation de la session",
      },
    },
  })

  // empty uppy files
  const items = uppy.getFiles().map(function (file) {
    uppy.removeFile(file.id)
  })

  // refresh list of file
  await refresh()
}

async function deleteUploadedFile(item: ItemPDF) {
  // Delete a single uploaded file and refresh
  const { data } = await useFetchPP(
    `/api/files/session/${props.sessionPath}/${item.url}`,
    {
      method: "DELETE",
      toast: {
        success: {
          msg: `Fichier ${item.url} supprimé !`,
        },
        error: {
          msg: `Erreur lors de la suppresion de ${item.url}`,
        },
      },
    }
  )

  // empty uppy files
  const items = uppy.getFiles().map(function (file) {
    uppy.removeFile(file.id)
  })

  // refresh list of file
  await refresh()
}

onBeforeUnmount(() => {
  uppy.close({ reason: "unmount" })
})

function changeFileInput(event: Event & { target: { files: FileList } }) {
  // fileInput.addEventListener('change', (event) => {
  // const files = Array.from(event.target.files)
  const files: FileList = event.target.files
  const fileArray: File[] = [...files];

  fileArray.forEach((file) => {
    progressShow.value = true
    try {
      uppy.addFile({
        source: "file input",
        name: file.name,
        type: file.type,
        data: file,
      })
    } catch (err) {
      if (err.isRestriction) {
        // handle restrictions
        console.log("Restriction error:", err)
      } else {
        // handle other errors
        console.error(err)
      }
    }
  })
}

function open_file() {
  console.log("open_file ...")
  document.getElementById("my-file-input").click()
}



function doGlobalAction(action: GlobalAction) {
  alert(`globalAction ${action.id}`)
}

// cf https://vuejs.org/api/sfc-script-setup.html#defineexpose
defineExpose({
  reset,
  refresh,
})
</script>

<template>
  <section class="example-one w-full">
    <div>
      <div v-if="!progressShow" @click="open_file">
        <slot></slot>
      </div>

      <input v-show="false" @change="changeFileInput" id="my-file-input" type="file" placeholder="Type here" />
    </div>


    <div v-if="dropfile_webcam" class="flex flex-wrap justify-around w-full bg-slate-800">
      <dashboard ref="dash" :uppy="uppy" :props="{
        proudlyDisplayPoweredByUppy: false,
        width: '100%',
        metaFields: [
          { id: 'name', name: 'Name', placeholder: 'file name' },
          {
            id: 'caption',
            name: 'Caption',
            placeholder: 'describe what the image is about',
          },
        ],
      }" :plugins="['Webcam']" class="grow" />
    </div>

    <div v-if="showFiles && !dropfile_webcam" class="flex flex-wrap justify-around">
      <ppw-pdf-links :pdfs="session_files" :download_on_click="false" action1_enabled
        action1_icon="ic:baseline-delete-forever" :enable_global_actions="dropfile_webcam" @action1="deleteUploadedFile"
        @global-action="doGlobalAction" />
    </div>

    <div v-if="progressShow" class="p-28 h-full align-middle">
      <p>Transmission et traitement ...</p>
      <progress class="progress progress-info w-56" :value="progressGlobal" max="100"></progress>
    </div>

    <!-- Target DOM node #1 -->
    <div class="for-DragDrop"></div>

    <!-- Progress bar #1 -->
    <div class="for-ProgressBar"></div>
    <ppw-debug-panel title="components/dropfile/main2">
      <p>progressShow = {{ progressShow }}</p>
      <p>progressGlobal = {{ progressGlobal }}</p>
      <div class="uploaded-files">
        <h5>Uploaded files:</h5>
        <ol></ol>
      </div>
      <button class="btn btn-primary m-3" @click="refresh">Actualiser</button>
      <button class="btn btn-primary m-3" @click="reset">Remise à zéro</button>
      <button class="btn btn-primary m-3" @click="upload">Envoyer</button>
    </ppw-debug-panel>
  </section>
</template>

<style>
/* don't use scoped style here !! */
/* @import does not work, so we copied/pasted here : */

/* @import "@uppy/core/dist/style.css" */
/**
* General Uppy styles that apply to everything inside the .uppy-Root container
.uppy-Root {
  position: relative;
  box-sizing: border-box;
  color: #333;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Segoe UI Symbol",
    "Segoe UI Emoji", "Apple Color Emoji", Roboto, Helvetica, Arial, sans-serif;
  line-height: 1;
  text-align: left;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

[dir="rtl"] .uppy-Root,
.uppy-Root[dir="rtl"] {
  text-align: right;
}

.uppy-Root *,
.uppy-Root *::before,
.uppy-Root *::after {
  box-sizing: inherit;
}

.uppy-Root [hidden] {
  display: none;
}

.uppy-u-reset {
  all: initial;
  box-sizing: border-box;
  -webkit-appearance: none;
  appearance: none;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Segoe UI Symbol",
    "Segoe UI Emoji", "Apple Color Emoji", Roboto, Helvetica, Arial, sans-serif;
  line-height: 1;
}

[dir="rtl"] .uppy-u-reset {
  text-align: right;
}

.uppy-c-textInput {
  font-family: inherit;
  font-size: 14px;
  line-height: 1.5;
  padding: 6px 8px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.uppy-size--md .uppy-c-textInput {
  padding: 8px 10px;
}

.uppy-c-textInput:focus {
  border-color: rgba(34, 117, 215, 0.6);
  outline: none;
  box-shadow: 0 0 0 3px rgba(34, 117, 215, 0.15);
}

[data-uppy-theme="dark"] .uppy-c-textInput {
  color: #eaeaea;
  background-color: #333;
  border-color: #333;
}

[data-uppy-theme="dark"] .uppy-c-textInput:focus {
  border-color: #525252;
  box-shadow: none;
}

.uppy-c-icon {
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  fill: currentColor;
}

.uppy-c-btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: inherit;
  font-family: inherit;
  color: inherit;
  line-height: 1;
  white-space: nowrap;
  text-align: center;
  transition-duration: 0.3s;
  transition-property: background-color, color;
  -webkit-user-select: none;
  user-select: none;
}

[dir="rtl"] .uppy-c-btn {
  text-align: center;
}

.uppy-c-btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}

.uppy-c-btn::-moz-focus-inner {
  border: 0;
}

.uppy-c-btn-primary {
  padding: 10px 18px;
  color: #fff;
  font-size: 14px;
  background-color: #2275d7;
  border-radius: 4px;
}

.uppy-c-btn-primary:hover {
  background-color: #1b5dab;
}

.uppy-c-btn-primary:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(34, 117, 215, 0.4);
}

.uppy-size--md .uppy-c-btn-primary {
  padding: 13px 22px;
}

[data-uppy-theme="dark"] .uppy-c-btn-primary {
  color: #eaeaea;
}

[data-uppy-theme="dark"] .uppy-c-btn-primary:focus {
  outline: none;
}

[data-uppy-theme="dark"] .uppy-c-btn-primary::-moz-focus-inner {
  border: 0;
}

[data-uppy-theme="dark"] .uppy-c-btn-primary:focus {
  box-shadow: 0 0 0 2px rgba(170, 225, 255, 0.85);
}

.uppy-c-btn-link {
  padding: 10px 15px;
  color: #525252;
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  border-radius: 4px;
}

.uppy-c-btn-link:hover {
  color: #333;
}

.uppy-c-btn-link:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(34, 117, 215, 0.25);
}

.uppy-size--md .uppy-c-btn-link {
  padding: 13px 18px;
}

[data-uppy-theme="dark"] .uppy-c-btn-link {
  color: #eaeaea;
}

[data-uppy-theme="dark"] .uppy-c-btn-link:focus {
  outline: none;
}

[data-uppy-theme="dark"] .uppy-c-btn-link::-moz-focus-inner {
  border: 0;
}

[data-uppy-theme="dark"] .uppy-c-btn-link:focus {
  box-shadow: 0 0 0 2px rgba(170, 225, 255, 0.85);
}

[data-uppy-theme="dark"] .uppy-c-btn-link:hover {
  color: #939393;
}
*/

/* @import "@uppy/dashboard/dist/style.css" */
/* NOT USED */

/* @import "@uppy/drop-target/dist/style.css" 
.uppy-is-drag-over::after {
  position: fixed;
  top: 7px;
  right: 7px;
  bottom: 7px;
  left: 7px;
  z-index: 10000;
  background-color: rgba(234, 234, 234, 0.5);
  border: 5px dashed #bbb;
  content: "";
}
    */
</style>
