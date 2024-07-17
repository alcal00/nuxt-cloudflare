<script setup lang="ts">

const requests = ref([
    {
        email: 'patrick@alcove.fr',
        schema_id: 'valise',
        filename: 'valise_alcove.pdf',
        eol: '2023-12-05',
        comment: '',
    },
    {
        email: 'patrick@alcove.fr',
        schema_id: 'valise',
        filename: 'valise_alcove.pdf',
        eol: '2023-12-05',
        comment: '',
    },
])

const requests2 = [
    {
        email: 'patrick@alcove.fr',
        schema_id: 'valise',
        filename: 'valise_alcove.pdf',
        eol: '2023-12-05',
        comment: '',
    },
    {
        email: 'patrick@alcove.fr',
        schema_id: 'valise',
        filename: 'valise_alcove.pdf',
        eol: '2023-12-05',
        comment: '',
    },
]

// const { name } = toRefs(props)
</script>

<template>
    <div>
        <p>document request ...</p>
        <div v-for="(request, index) in requests">
            <ppw-document-request v-model="requests2[index]" />

            <button class="btn">
                Supprimer la demande
                <icon name="mdi:book-remove" />
            </button>

        </div>
        <button class="btn">
            Nouvelle demande
            <icon name="mdi:book-add" />
        </button>


        <pre>{{ requests2 }}</pre>
    </div>
</template>