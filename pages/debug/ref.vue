<script setup lang="ts">
/*


{
    "nb": 235,
    "nb_refresh": 1,
    "nb_checklist": 93,
    "nb_checkmodule": 105,
    "nb_craftform": 37,
    "nb_unknown": 3,
    "refresh_duration": 1.149287223815918,
    "sync_duration": 0.07155776023864746,
    "sync_errorcode": 3,
    "sync_stdout": "",
    "sync_stderr": "<3>ERROR : S3 bucket pp-ref-common: error reading source root directory: directory not found\n<3>ERROR : Local file system at /home/philippe/src/paxpar/ref/common: not deleting files as there were IO errors\n<3>ERROR : Local file system at /home/philippe/src/paxpar/ref/common: not deleting directories as there were IO errors\n<3>ERROR : Attempt 1/3 failed with 1 errors and: directory not found\n<3>ERROR : S3 bucket pp-ref-common: error reading source root directory: directory not found\n<3>ERROR : Local file system at /home/philippe/src/paxpar/ref/common: not deleting files as there were IO errors\n<3>ERROR : Local file system at /home/philippe/src/paxpar/ref/common: not deleting directories as there were IO errors\n<3>ERROR : Attempt 2/3 failed with 1 errors and: directory not found\n<3>ERROR : S3 bucket pp-ref-common: error reading source root directory: directory not found\n<3>ERROR : Local file system at /home/philippe/src/paxpar/ref/common: not deleting files as there were IO errors\n<3>ERROR : Local file system at /home/philippe/src/paxpar/ref/common: not deleting directories as there were IO errors\n<3>ERROR : Attempt 3/3 failed with 1 errors and: directory not found\n<6>INFO : \nTransferred: \t 0 B / 0 B, -, 0 B/s, ETA -\nErrors: 1 (retrying may help)\nElapsed time: 0.0s\n\nFailed to sync: directory not found\n",
    "exceptions": [
        {
            "msg": "💀 Exception while instanciating object #common.tutorial.craftforms.syntax.syntax.craftform from path /home/philippe/src/paxpar/ref/common/tutorial/craftforms/syntax/syntax.craftform.yaml !",
            "name": "ModuleNotFoundError",
            "traceback": "Traceback (most recent call last):\n File \"/home/philippe/src/paxpar/paxpar/services/core/craft/tools2.py\", line 249, in import_module\n mymodule = importlib.import_module(full_module_name)\n ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n File \"/usr/lib/python3.11/importlib/__init__.py\", line 126, in import_module\n return _bootstrap._gcd_import(name[level:], package, level)\n ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n File \"<frozen importlib._bootstrap>\", line 1204, in _gcd_import\n File \"<frozen importlib._bootstrap>\", line 1176, in _find_and_load\n File \"<frozen importlib._bootstrap>\", line 1147, in _find_and_load_unlocked\n File \"<frozen importlib._bootstrap>\", line 690, in _load_unlocked\n File \"<frozen importlib._bootstrap_external>\", line 936, in exec_module\n File \"<frozen importlib._bootstrap_external>\", line 1074, in get_code\n File \"<frozen importlib._bootstrap_external>\", line 1004, in source_to_code\n File \"<frozen importlib._bootstrap>\", line 241, in _call_with_frames_removed\n File \"/home/philippe/src/paxpar/ref/common/tutorial/craftforms/syntax/script.py\", line 14\n print('john)\n ^\nSyntaxError: unterminated string literal (detected at line 14)\n\nDuring handling of the above exception, another exception occurred:\n\nTraceback (most recent call last):\n File \"/home/philippe/src/paxpar/paxpar/services/core/ref/main.py\", line 263, in _refresh\n craftform_main.add_from_path(craftform_dict, path, id, root_path)\n File \"/home/philippe/src/paxpar/paxpar/services/core/ref/craftform/main.py\", line 126, in add_from_path\n instance = from_path(key, id, base_path)\n ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n File \"/home/philippe/src/paxpar/paxpar/services/core/ref/craftform/main.py\", line 71, in from_path\n script_module = import_module(full_module_name)\n ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n File \"/home/philippe/src/paxpar/paxpar/services/core/craft/tools2.py\", line 254, in import_module\n raise ModuleNotFoundError(f'No craftform module \"{full_module_name}\"')\nModuleNotFoundError: No craftform module \"ref.common.tutorial.craftforms.syntax.script\"\n"
        },
        {
            "msg": "💀 Exception while instanciating object #frozen.a_classer.mes_ordre_inter.checklists._cl_attes_inter_ko from path /home/philippe/src/paxpar/ref/frozen/a_classer/mes_ordre_inter/checklists/_cl_attes_inter_ko.yaml !",
            "name": "ValidationError",
            "traceback": "Traceback (most recent call last):\n File \"/home/philippe/src/paxpar/paxpar/services/core/ref/main.py\", line 259, in _refresh\n checklist.add_from_path(checklist_dict, path, id, root_path)\n File \"/home/philippe/src/paxpar/paxpar/services/core/ref/checklist/__init__.py\", line 86, in add_from_path\n instance = from_path(path, id, base_path)\n ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n File \"/home/philippe/src/paxpar/paxpar/services/core/ref/checklist/__init__.py\", line 47, in from_path\n rawRef: Checklist = Checklist(**obj)\n ^^^^^^^^^^^^^^^^\n File \"pydantic/main.py\", line 341, in pydantic.main.BaseModel.__init__\npydantic.error_wrappers.ValidationError: 4 validation errors for Checklist\nsteps\n field required (type=value_error.missing)\nchildren\n extra fields not permitted (type=value_error.extra)\nid\n extra fields not permitted (type=value_error.extra)\nstatus\n extra fields not permitted (type=value_error.extra)\n"
        },
        {
            "msg": "💀 Exception while instanciating object #frozen.a_classer.mes_ordre_inter.checklists._cl_attes_inter_ok from path /home/philippe/src/paxpar/ref/frozen/a_classer/mes_ordre_inter/checklists/_cl_attes_inter_ok.yaml !",
            "name": "ValidationError",
            "traceback": "Traceback (most recent call last):\n File \"/home/philippe/src/paxpar/paxpar/services/core/ref/main.py\", line 259, in _refresh\n checklist.add_from_path(checklist_dict, path, id, root_path)\n File \"/home/philippe/src/paxpar/paxpar/services/core/ref/checklist/__init__.py\", line 86, in add_from_path\n instance = from_path(path, id, base_path)\n ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n File \"/home/philippe/src/paxpar/paxpar/services/core/ref/checklist/__init__.py\", line 47, in from_path\n rawRef: Checklist = Checklist(**obj)\n ^^^^^^^^^^^^^^^^\n File \"pydantic/main.py\", line 341, in pydantic.main.BaseModel.__init__\npydantic.error_wrappers.ValidationError: 4 validation errors for Checklist\nsteps\n field required (type=value_error.missing)\nchildren\n extra fields not permitted (type=value_error.extra)\nid\n extra fields not permitted (type=value_error.extra)\nstatus\n extra fields not permitted (type=value_error.extra)\n"
        }
    ]
}
*/
import { RealtimeChannel } from "@supabase/realtime-js"

const client = useSupabaseClient<Database>()
const user = useSupabaseUser()
const { useFetchPP } = usePaxparAPI()

var channel: RealtimeChannel
//import { RealtimeClient } from '@supabase/realtime-js'
const refSyncRes = ref()

onMounted(() => {
  console.log({ client })

  //const channel = client2.channel('broadcast-test', { broadcast: { ack: false, self: false } })
  channel = client.realtime.channel("broadcast-test")

  channel.on("broadcast", { event: "some-event" }, (payload) => console.log(payload))

  channel.subscribe(async (status, err) => {
    if (status === "SUBSCRIBED") {
      // Send message to other clients listening to 'broadcast-test' channel
      await channel.send({
        type: "broadcast",
        event: "some-event",
        payload: { hello: "init" },
      })
    } else {
      console.log(`unknown status ${status}, err = ${err}`)
    }
  })
})

async function sendMsgFront() {
  await channel.send({
    type: "broadcast",
    event: "some-event",
    payload: { hello: "world" },
  })
}

async function insertFront() {
  const { error } = await client.from("ppevent").insert({ aaa: 433, bbb: "hello !!" })
}

async function doRefSync() {
  refSyncRes.value = (await useFetchPP(`/api/ref/sync`, { method: "POST" })).data.value
  //console.log("refSyncRes.value", refSyncRes.value)
}

async function doRefRefresh() {
  refSyncRes.value = (await useFetchPP(`/api/ref/refresh`, { method: "POST" })).data.value
  //console.log("refSyncRes.value", refSyncRes.value)
}
</script>

<template>
  <div class="flex flex-col m-4">

    <div class="flex flex-row gap-5 text-center">
      <button @click="doRefRefresh" class="btn btn-primary">ref refresh</button>
      <button @click="doRefSync" class="btn btn-primary">ref sync+refresh</button>

      <div class="stats shadow">
        <div class="stat">
          <div class="stat-value">{{ refSyncRes?.nb_refresh }}</div>
          <div class="stat-title">refresh</div>
        </div>
      </div>

      <div class="stats shadow">
        <div class="stat">
          <div class="stat-value">{{ refSyncRes?.nb }}</div>
          <div class="stat-title">objects</div>
        </div>
      </div>

      <div class="stats shadow">
        <div class="stat">
          <div class="stat-value">{{ refSyncRes?.nb_checklist }}</div>
          <div class="stat-title">checklists</div>
        </div>
      </div>

      <div class="stats shadow">
        <div class="stat">
          <div class="stat-value">{{ refSyncRes?.nb_checkmodule }}</div>
          <div class="stat-title">checkmodules</div>
        </div>
      </div>

      <div class="stats shadow">
        <div class="stat">
          <div class="stat-value">{{ refSyncRes?.nb_craftform }}</div>
          <div class="stat-title">craftforms</div>
        </div>
      </div>

      <div class="stats shadow">
        <div class="stat">
          <div class="stat-value">{{ refSyncRes?.exceptions?.length }}</div>
          <div class="stat-title">exceptions</div>
        </div>
      </div>

      <div class="stats shadow">
        <div class="stat">
          <div class="stat-value">{{ refSyncRes?.nb_unknown }}</div>
          <div class="stat-title">unknown</div>
        </div>
      </div>

      <div class="stats shadow">
        <div class="stat">
          <div class="stat-value">{{ Math.round(refSyncRes?.refresh_duration) }}</div>
          <div class="stat-title">s for refresh</div>
        </div>
      </div>

      <div class="stats shadow">
        <div class="stat">
          <div class="stat-value">{{ Math.round(refSyncRes?.sync_duration) }}</div>
          <div class="stat-title">s for sync</div>
        </div>
      </div>

      <div class="stats shadow">
        <div class="stat">
          <div class="stat-value">{{ refSyncRes?.sync_errorcode }}</div>
          <div class="stat-title">errorcode</div>
        </div>
      </div>
    </div>

    <div class="collapse collapse-arrow bg-base-200 m-2">
      <input type="radio" name="my-accordion-2" />
      <div class="collapse-title text-xl font-medium">stdout</div>
      <div class="collapse-content">
        <div class="mockup-code">
          <pre><code>{{ refSyncRes?.sync_stdout }}</code></pre>
        </div>
      </div>
    </div>

    <div class="collapse collapse-arrow bg-base-200 m-2">
      <input type="radio" name="my-accordion-2" />
      <div class="collapse-title text-xl font-medium">stderr</div>
      <div class="collapse-content">
        <div class="mockup-code">
          <pre><code>{{ refSyncRes?.sync_stderr }}</code></pre>
        </div>
      </div>
    </div>

    <div v-for="(exception, index) in refSyncRes?.exceptions" class="collapse collapse-arrow bg-base-200 m-2">
      <input type="radio" name="my-accordion-2" />
      <div class="collapse-title text-xl font-medium">
        Exception {{ index + 1 }} : {{ exception?.name }} : {{ exception?.msg }}
      </div>
      <div class="collapse-content">
        <div class="mockup-code">
          <pre><code>{{ exception?.traceback }}</code></pre>
        </div>
      </div>
    </div>

    <!--
    <p>res1 = {{ refSyncRes }}</p>
    -->
    </div>
</template>
