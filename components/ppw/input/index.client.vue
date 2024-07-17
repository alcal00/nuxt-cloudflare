<script setup lang="ts">
import type  { BrowserItem } from '~~/models/browser'


const props = withDefaults(
    defineProps<{
        label?: str
        description?: str
        placeholder?: str
        name?: str
        required?: boolean
    }>(),
    {
        label: false,
        required: false,
    }
)



const model = defineModel()

</script>

<template>
    <UFormGroup v-if="label" :name="name" :label="label" :description="description" :required="required"
        class="grid grid-cols-2 gap-2 items-center" >
        <slot>
            <UInput v-model="model" :placeholder="placeholder" />
        </slot>
    </UFormGroup>
    <template v-else>
        <slot>
            <UInput v-model="model" :placeholder="placeholder" />
        </slot>
    </template>
</template>
