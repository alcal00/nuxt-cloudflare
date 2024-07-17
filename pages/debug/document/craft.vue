<script setup lang="ts">
//import { Dashboard } from '@uppy/vue'
//import Uppy from '@uppy/core'
//import Webcam from '@uppy/webcam'

// Don't forget the CSS: core and UI components + plugins you are using
//import '@uppy/core/dist/style.css'
//import '@uppy/dashboard/dist/style.css'
//import '@uppy/webcam/dist/style.css'


//const uppy = new Uppy().use(Webcam)
const craft_id = ref('common.craftforms.base_doc_builder.base.craftform')
const path = ref('myfolder/mydoc.pdf')
const fields = ref(`{
    "x": 33,
    "hello": "world"
}`)
const generate = ref(true)
const factice = ref(true)
const finalize = ref(false)


const create_res = ref()
const craft_res = ref()

async function createCraft() {
    create_res.value = await $ppfetch(`/api/craft2/doc/${path.value}`, {
        method: "PUT",
        body: {
            craft_id: craft_id.value,
        },
    })
}

async function updateCraft() {
    craft_res.value = await $ppfetch(`/api/craft2/doc/${path.value}`, {
        method: "PUT",
        body: {
            //options: {
                //TODO: comment later !!!
                craft_id: craft_id.value,
                //form_value: JSON.parse(fields.value),
                form_value: {hello: 'world'},
                generate: generate.value,
                finalize: finalize.value,
                factice: factice.value,

            //},
        },
    })
}


onMounted(() => {
    console.debug('onMounted ...')
})
</script>

<template>
    <UDashboardPanelContent grow>
        <ClientOnly>

            <UDashboardSection title="Create" description="Create a new craft document">
                <ppw-input-craftform v-model="craft_id" required label="craft_id" show_id />
                <ppw-input-path v-model="path" required label="path" description="The full document path to create" />
                <UButton @click="createCraft">create</UButton>
                <pre>{{ create_res }}</pre>
            </UDashboardSection>
            <UDivider class="mb-4" />


            <UDashboardSection title="Upload" description="Upload file to an existing craft document">
                <ppw-input-path v-model="path" required label="path" description="The full document path to create" />
                <ppw-input v-model="fields" required label="fields" description="Form field as JSON payload" />

                <UButton @click="updateCraft">update</UButton>
                <UButton :to="`/document/craft${path}`">craft page</UButton>
                <!--<Dashboard :uppy="uppy" />-->
                <ppw-upload :endpoint="`/api/craft2/doc/${path}`" />
                <pre>{{ craft_res }}</pre>
            </UDashboardSection>
            <UDivider class="mb-4" />

            <UDashboardSection title="Craft" description="Craft an existing document">
                <ppw-input-path v-model="path" required label="path" description="The full document path to create" />
                <ppw-input label="generate">
                    <UCheckbox v-model="generate" />
                </ppw-input>
                <ppw-input label="finalize">
                    <UCheckbox v-model="finalize" />
                </ppw-input>
                <ppw-input label="factice">
                    <UCheckbox v-model="factice" />
                </ppw-input>
                <UButton @click="updateCraft">update</UButton>
                <UButton :to="`/document/craft${path}`">craft page</UButton>
                <pre>{{ craft_res }}</pre>
            </UDashboardSection>
            <UDivider class="mb-4" />


            <UDashboardSection title="Theme" description="Customize the look and feel of your dashboard.">
                <pre>
craft_id: {{ craft_id }}
path: {{ path }}
                </pre>
            </UDashboardSection>

        </ClientOnly>
    </UDashboardPanelContent>
</template>