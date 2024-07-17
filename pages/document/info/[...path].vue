<script setup lang="ts">
import { type DocumentInfo } from '~~/models/document'

//const { progress, isLoading, start, finish, clear } = useLoadingIndicator()


const route = useRoute()
const path = route.params.path.join('/')


const nodes = [{
    id: "ROOT",
    label: "document.pdf",
    shape: "box",
},
    {
        id: "doc2",
        label: "fake_doc2.pdf",
        shape: "box",
    },
    {
        id: "doc3",
        label: "fake_doc2.pdf",
        shape: "box",
},
{
    id: "doc4",
    label: "fake_doc2.pdf",
    shape: "box",
}]
const edges = [
    { from: "doc2", to: "ROOT", arrows: {to: true} },
    { from: "doc3", to: "ROOT", arrows: { to: true } },
    { from: "doc4", to: "ROOT", arrows: { to: true } },
]

const { data: doc, pending, error, refresh } = await useLazyAsyncData<DocumentInfo>(`document-${path}`, async () => {
    console.debug('useLazyAsyncData 22 ...')
    //TODO: ensure path starts with a '/'

    const info = await $ppfetch(`/api/document/info/${path}`)
    const content = JSON.parse(await $ppfetch(`/api/document/content/${path}`))

    //console.debug({ info, content })
    //.map(item => ({ ...item, name: item?.title }))
    return { ...info, ...content }
},
    { server: false }
)

function doCraft() {

}
</script>

<template>
    <UDashboardPanelContent v-if="pending" grow>
        <UDashboardCard :title="path" description="Loading document info ..." icon="mdi:file-pdf-outline">
            <UProgress />
        </UDashboardCard>
    </UDashboardPanelContent>

    <UDashboardPanelContent v-else grow>
        <ULandingSection icon="mdi:file-pdf-outline" :title="path" :description="doc.id" />

        <template v-if="doc.ope == '👈'">
            <!--<ppw-wizard-craft :craft_id="craft_id" :document-info="doc" />-->
            <ULandingTestimonial icon="mdi:account-arrow-left" quote="This document has been delegated to you by ..."
                :author="{ name: 'Rose Roberson', description: 'CEO at Google', to: 'https://google.com', target: '_blank', avatar: { src: 'https://i.pravatar.cc/120?img=1', loading: 'lazy' } }"
                card />

            <div class="flex space-x-4 justify-center m-3">
                <UButton label="craft" :to="`/document/craft/${path}`" />
                <UButton label="change delegation" disabled />
                <UButton label="reject delegation" disabled />
            </div>

        </template>
        <template v-else-if="doc.ope == '👉'">
            <ULandingTestimonial icon="mdi:file-pdf-outline" quote="Your delegated this document to ..."
                :author="{ name: 'Rose Roberson', description: 'CEO at Google', to: 'https://google.com', target: '_blank', avatar: { src: 'https://i.pravatar.cc/120?img=1', loading: 'lazy' } }"
                card />

            <div class="flex space-x-4 justify-center m-3">
                <UButton label="change delegation" disabled />
                <UButton label="cancel delegation" disabled />
            </div>

        </template>
        <template v-else-if="doc.ope == 'finalized'">
            <ULandingTestimonial icon="mdi:file-pdf-outline" quote="Your PDF document (finalized) ..."
                :author="{ name: 'Rose Roberson', description: 'CEO at Google', to: 'https://google.com', target: '_blank', avatar: { src: 'https://i.pravatar.cc/120?img=1', loading: 'lazy' } }"
                card />

            <div class="flex space-x-4 justify-center m-3">
                <UButton label="craft" disabled />
                <UButton label="delegate" disabled />
                <UButton label="delete" disabled />
            </div>
        </template>
        <template v-else-if="doc.ope == 'unknown'">
            <p>ask in case of a new file...</p>
        </template>
        <template v-else>
            <p> unknown data.ope = {{ doc.ope }}</p>
        </template>


        <ppw-network :nodes="nodes" :edges="edges" />

        <p> path = {{ path }}</p>
        <p> doc.ope = {{ doc.ope }}</p>

        <pre>doc: {{ doc }}</pre>

    </UDashboardPanelContent>
</template>
