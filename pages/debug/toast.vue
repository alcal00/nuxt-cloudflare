<script setup lang="ts">
// use useMyToast() over useToast()
//const toast = useToast()
const toast = useMyToast()
const { useFetchPP } = usePaxparAPI()

const res = ref()

const loadingTasks = ref([])

async function newTask() {
  const taskId = Math.floor(Math.random() * 1000)
  const task = await toast.loading(`task ${taskId}`)
  console.debug(task)
  loadingTasks.value.push(task.id)
}

async function endTask(taskId) {
  console.log(`Ending task ${taskId} ...`)
  await toast.remove(taskId)

  const index = loadingTasks.value.indexOf(taskId)
  loadingTasks.value.splice(index, 1)
}

const notify = async () => {
  await toast.error("OK")
  /*
  toast.add({
    title: "OK",
    icon: "i-heroicons-check-circle",
    timeout: 5000,
  })
  */
  //toast("Wow so easy final !", {
  //  autoClose: 1000,
  //})
  await toast.add({
    id: "675",
    title: "Wow so easy final !",
    icon: "i-heroicons-check-circle",
    timeout: 5000,
  })
}

async function doAPI() {
  const x = Math.floor(Math.random() * 10)
  const { data } = await useFetchPP(`/api/ref/dummy/${x}/un`)
  res.value = data
}

async function doAPI2() {
  const x = Math.floor(Math.random() * 10)
  const { data } = await useFetchPP(`/api/ref/dummy/${x}/deux`, {
    toast: {
      pending: {
        msg: `Waiting for ${x}s ...`,
      },
      success: {
        msg: "OK !!!",
      },
    },
  })
  res.value = data
}

async function doAPI3() {
  const { data } = await useFetchPP(`/api/ref/dummy/0/trois`)
  res.value = data
}

onMounted(async () => {
  await toast.info("Welcome on toast debug page !!")
})
</script>

<template>
  <h1>Toast debug page</h1>
  Use of useMyToast
  <p />
  <div class="flex flex-cols gap-2">
    <UButton @click="toast.info('This is an information !')">info</UButton>
    <UButton @click="toast.success('This is a success !')">success</UButton>
    <UButton @click="toast.warning('This is a warning !')">warning</UButton>
    <UButton @click="toast.error('This is an error !')">error</UButton>
    <UButton @click="newTask()">New task loading</UButton>

    <UButton v-for="task in loadingTasks" :key="task" @click="endTask(task)" color="blue">
      End task #{{ task.title }}
    </UButton>
  </div>

  <UDivider />
  <button @click="notify" class="btn btn-primary">Notify me !</button>
  <p>Toast on long API call :</p>
  <button @click="doAPI" class="btn btn-primary">API</button>
  <p>Toast on long API call with custom messsage :</p>
  <button @click="doAPI2" class="btn btn-primary">API msg</button>
  <p>No toast on fast API call :</p>
  <button @click="doAPI3" class="btn btn-primary">fast API</button>

  <p>last result :</p>
  <div class="mockup-code">
    <pre><code>{{ res }}</code></pre>
  </div>
</template>
