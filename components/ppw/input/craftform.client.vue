<script setup lang="ts">
import type  { BrowserItem } from '~~/models/browser'


const props = withDefaults(
    defineProps<{
        show_id?: boolean
    }>(),
    {
        show_id: false,
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
    <ppw-input v-if="items">
        <UInputMenu v-model="model" :options="items" value-attribute="id">
            <template #option="{ option }">
                <UIcon :name="(option?.icon)" class="w-5 h-5" />
                <div>
                    <p>{{ option.label }}</p>
                    <p v-if="show_id">{{ option.id }}</p>
                </div>
            </template>
        </UInputMenu>
    </ppw-input>
</template>
