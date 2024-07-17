<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        items?: any[],
        //id: string
        //name: string
        //favorite?: boolean
        //tags?: string[]
    }>(),
    {
        items: () => [],
        //favorite: false,
        //tags: () => [],
    }
)

const columns = [{
    key: 'name',
    label: 'Name'
}, {
    key: 'title',
    label: 'Title'
}, {
    key: 'email',
    label: 'Email'
}, {
    key: 'role',
    label: 'Role'
}, {
    key: 'actions'
}]


const actions = (row) => [
    [{
        label: 'Edit',
        icon: 'i-heroicons-pencil-square-20-solid',
        click: () => console.log('Edit', row.id)
    }, {
        label: 'Duplicate',
        icon: 'i-heroicons-document-duplicate-20-solid'
    }], [{
        label: 'Archive',
        icon: 'i-heroicons-archive-box-20-solid'
    }, {
        label: 'Move',
        icon: 'i-heroicons-arrow-right-circle-20-solid'
    }], [{
        label: 'Delete',
        icon: 'i-heroicons-trash-20-solid'
    }]
]

const selected = ref([])

</script>

<template>
    <UTable v-model="selected" :rows="items" :columns="columns">    
        <template #name-data="{ row }">
            <UButton size="xl" icon="i-mdi-file-pdf-outline" variant="ghost"
                :color="selected.find(row => row.id === row.id) ? 'primary' : 'gray'">{{ row.name }}</UButton>
        </template>

        <template #actions-data="{ row }">
            <UDropdown :items="actions(row)">
                <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
            </UDropdown>
        </template>
    </UTable>
</template>
