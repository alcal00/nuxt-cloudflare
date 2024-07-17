<script setup lang="ts">
import type  { BrowserItem } from '~~/models/browser'


const props = withDefaults(
    defineProps<{
        folder?: boolean
    }>(),
    {
        folder: false,
    }
)


//TODO: filter craftform
const { data: items, pending, error, refresh } = await useLazyAsyncData<BrowserItem[]>('input-craftform', async () => {
    console.debug('browser useLazyAsyncData ...')
    //return await $ppfetch("/api/ref/public").map(({id, name:label}) => ({id, label}))
    const res = await $ppfetch("/api/ref/public")
    //.map((x) => ({ id: x?.id, label: x?.name }))
    //console.debug('ressss', res)
    return res.filter((x) => x.type === "craftform").map((x) => ({
        id: x?.id,
        label: x?.name,
        icon: 'mdi:file-document-edit-outline',        
    }))
},
    {
        server: false,
    }
)

const model = defineModel()

</script>

<template>
    <ppw-input>
        <UInput v-model="model" :icon="folder ? 'mdi:folder' : 'mdi:file'" 
            placeholder="path...">
        </UInput>
    </ppw-input>
</template>
