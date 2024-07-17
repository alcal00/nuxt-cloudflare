<script setup lang="ts">
import { type DocumentInfo } from '~~/models/document'

const route = useRoute()

const path = route.params.path.join('/')
const craft_id = route.query.craft_id as string

//console.debug({path, craft_id})


const { data: doc, pending, error, refresh } = await useLazyAsyncData<DocumentInfo>(`document-${path}`, async () => {
    console.debug('useLazyAsyncData 22 ...')
    var res
    if (craft_id !== undefined) {
        // create document with the given craft
        //TODO: /api/document/craft
        res = await $ppfetch(`/api/craft2/doc/${path}`, {
            method: "PUT",
            body: {
                craft_id,
            },
        })
    }
    //TODO: try/catch error
    //const res = await $fetch(url)
    //TODO: remove hard-coded value
    res.craft_id = "common.craftforms.base_doc_builder.base.craftform"
    //console.debug('res', res )
    //.map(item => ({ ...item, name: item?.title }))
    return res
},
    { server: false }
)


</script>

<template>
    <UDashboardPanelContent v-if="pending" grow>
        <UDashboardCard :title="path" description="Loading document info ..." icon="mdi:file-pdf-outline">
            <UProgress />
        </UDashboardCard>
        <pre>
    error: {{ error }}
    </pre>

    </UDashboardPanelContent>

    <UDashboardPanelContent v-else grow>
        <pre>
    error: {{ error }}
    </pre>

        <ULandingSection icon="mdi:file-pdf-outline" title="craft..." />
        <!--
        <ppw-wizard-craft :document_path="path" :document-info ="doc" />
        -->
        <ppw-craft :document_path="path" />

    </UDashboardPanelContent>
</template>
