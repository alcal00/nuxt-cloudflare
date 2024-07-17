<script setup lang="ts">
const toast = useMyToast()

const isOpen = defineModel()

const name = ref('hello.pdf')
const craft = ref({ id: "the.target.craft.id" })


async function doAction() {
    try {
        $ppfetch('/api/document/craft',
            {
                server: false,
                method: "POST",
                body: {
                    name: name.value,
                    craft_id: craft.value.id,
                },
            }
        )
        toast.success("craft OK !")
    } catch (err) {
        toast.error("Error craft !")
    }

}

</script>

<template>
    <ppw-modal v-model="isOpen" okCancel content-slot @ok="doAction">
        <UFormGroup label="name" required>
            <UInput v-model="name" placeholder="you@example.com" icon="i-heroicons-envelope" />
        </UFormGroup>

        <UFormGroup label="craft id" required>
            <ppw-input-craftform v-model="craft" />
        </UFormGroup>
    </ppw-modal>
</template>