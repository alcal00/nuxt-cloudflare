<script setup lang="ts">
import { type DocRequest } from '~~/models/docrequest'

const modelValue: Ref<DocRequest> = defineModel()

const email = ref(modelValue.value?.email)
const schema_id = ref(modelValue.value?.schema_id)
const filename = ref(modelValue.value?.filename)
const eol = ref(modelValue.value?.eol)
const comment = ref(modelValue.value?.comment)

</script>


<template>
    <div>
        <p>
            Demander à <ppw-input-string v-model="email" />
            un document <ppw-input-string v-model="schema_id" />
            nommé <ppw-input-string v-model="filename" />,
            à finaliser avant le <ppw-input-string v-model="eol" />,
            avec le commentaire <ppw-input-string v-model="comment" />
        </p>

    </div>
</template>