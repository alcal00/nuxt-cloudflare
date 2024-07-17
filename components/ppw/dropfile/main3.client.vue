<script setup lang="ts">
// use only in client component !!
import '@uppy/core/dist/style.css';
import '@uppy/drop-target/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import '@uppy/webcam/dist/style.css';


import Uppy from "@uppy/core"
//import DragDrop from '@uppy/drag-drop'
//import Webcam from '@uppy/webcam'
import XHRUpload from "@uppy/xhr-upload"
import DropTarget from "@uppy/drop-target"
//import { type ItemPDF } from "~~/types/pdf_showcase.types"
import { type ItemPDF } from "~~/types/pdf_showcase.types"
//import { ItemPDF } from "~/types/pdf_showcase.types"
//import ProgressBar from '@uppy/progress-bar'
//import FileInput from '@uppy/file-input'


const toast = useMyToast()
const { useFetchPP, getToken } = usePaxparAPI()
const token = getToken()
// properties
const props = withDefaults(
  defineProps<{
    url: string
    //sessionPath: string
    showFiles?: boolean
  }>(),
  {
    showFiles: true,
  }
)

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

// Handle success on upload
const onUploadSuccess = async (file, response) => {
  // set the progress to 100%
  progressGlobal.value = 100
  progressShow.value = false
  //console.log('onUploadSuccess', { file, response })

  // remove file from uppy files to allow re-upload of the same file
  if (props.showFiles == false || response?.body?.stored == false) {
    uppy.removeFile(file.id)
  }
  // refresh list of file only if we have to show them
  if (props.showFiles) {
    await refresh()
  }

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
  debug: false,
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
    console.log('onBeforeUpload updatedFiles=', updatedFiles)
    return updatedFiles
  },
  onBeforeFileAdded: (currentFile, files) => {
    //console.log({currentFile, files})
    progressShow.value = true
    emit("uploadStart")
    return currentFile
  },
})

async function initUppy() {
  const backend = useBackend()

  uppy
    //.use(ProgressBar, {
    //    target: '.example-one .for-ProgressBar',
    //    hideAfterFinish: false,
    //})
    .on("upload-success", onUploadSuccess)
    .on("upload-error", onUploadError)
    .on("progress", onProgress)
    //.use(Webcam)
    .use(XHRUpload, {
      //endpoint: `/api/craft`,
      endpoint: `${backend}${props.url}`,
      //fieldName: 'fichierxx',
      headers: {
        //TODO: needed ?
        Authorization: `Bearer ${token}`,
      },
      //craftData
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
  //console.log('refresh dropfile list ...')
  try {
    // https://philippe.paxpar.tech/api/ref/public
    const { data } = await useFetchPP(
      //`/api/files/session/${props.sessionPath}`
      `${props.url}`,
      {
      }
    )
    //console.log('refresh dropfile data=', data)


    // Empty session_files (without breaking reactive ref)
    session_files.splice(0)

    for (const f of data.value.attached_files) {
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
  const { data } = await useFetchPP(
    //`/api/files/session/${props.sessionPath}`,
    props.url,
    {
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
    //`/api/files/session/${props.sessionPath}/${item.url}`,
    props.url,
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

function openFile() {
  //console.log("open_file ...")
  document.getElementById("my-file-input").click()
}

// cf https://vuejs.org/api/sfc-script-setup.html#defineexpose
defineExpose({
  reset,
  refresh,
  openFile,
})
</script>

<template>
  <UCard class="example-one">
    <div>
      <div v-if="!progressShow">
        <slot></slot>
      </div>

      <input v-show="false" @change="changeFileInput" id="my-file-input" type="file" placeholder="Type here" />
    </div>

    <div v-if="showFiles" class="flex flex-wrap justify-around">
      <ppw-pdf-links :pdfs="session_files" :download_on_click="false" action1_enabled
        action1_icon="ic:baseline-delete-forever" @action1="deleteUploadedFile" />
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
  </UCard>
</template>
