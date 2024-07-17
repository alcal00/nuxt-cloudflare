<script setup lang="ts">
import { type ItemPDF } from "~~/types/pdf_showcase.types"
import { expandPath } from "~~/src/reftools"

const backend = useBackend()


const props = withDefaults(defineProps<{
    href: string
    download_on_click?: boolean
    name?: string
    strip_extension?: boolean
    virtual?: boolean
    icon?: string
}>(), {
    download_on_click: true,
    strip_extension: false,
    virtual: false,
    icon: "cib:adobe-acrobat-reader",
})

//const shortName = computed(() => props.href.split('/').pop())
const shortName = computed(() => {
    const filename = (props.name || props.href).split('/').pop() || ""
    if (props.strip_extension === true) {
        let split = filename.split('.')
        split.pop();
        return split.join(".")
    } else {
        return filename
    }
})

const expandedHref = computed(() => {
  // Expand the given url with paxpar API backend
  return expandPath(props.href, backend)
})

</script>


<template>
    <component :is="download_on_click?'a':'span'" :href="expandedHref" target="_blank">
        <div class="m-2 w-36 text-center text-xs">
            <div class="w-full relative file" :class="{ virtual: virtual }">
                <UIcon name="ic:twotone-insert-drive-file" size=96 />
                <div class="absolute inset-x-0 top-10 ">
                    <UIcon :name="icon" size=32 />
                </div>
                <slot />
            </div>
            <p>{{ shortName }}</p>
        </div>
    </component>
</template>

<style scoped>
.file:hover {
    filter: drop-shadow(0 0 2em #1b26f7);
}

.virtual {
    background-color: chocolate;
}

</style>
