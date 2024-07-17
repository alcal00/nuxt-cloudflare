<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
    text?: string | number
}>()


const option_checked = ref(false)

const TIP_MARKER = '??:'
/*
Return the text part (withou th tooltip text if defined)
*/
const item_text = computed(() => {
    var text = ""
    if (props.text) {
        text = props.text.toString().split(TIP_MARKER)[0]
    }
    return text
})

/*
Return the tooltip text if defined
Undefined if there is not tooltup text
*/
const item_tip = computed(() => {
    if (props.text) {
        const items = props.text.toString().split(TIP_MARKER)
        if (items.length > 1) {
            return items[1]
        }
    }
})

const text_size = computed(() => {
    var size = 'text-2xl'
    if (props.text) {
        size = props.text.toString().split(TIP_MARKER)[0].length > 3 ? 'text-sm' : 'text-2xl'
    }
    return size
})


const is_yes = computed(() => {
    return ['✅', 'V', 'v', 'yes', 'oui'].includes(item_text.value)
})
const is_no = computed(() => {
    return ['❌', 'X', 'x', 'no', 'non'].includes(item_text.value)
})
const is_inf = computed(() => {
    return ['∞', '+oo', 'inf'].includes(item_text.value)
})
const get_option = computed(() => {
    const matches = item_text.value.match(/\:opt\:([^\:]*)\:([^\:]*)\:([^\:]*)/)
    if (matches) {
        return [{
            code: matches[1],
            price: matches[2],
            lib: matches[3],
        }]
    }
    return []
})
const is_option = computed(() => {
    const matches = item_text.value.match(/\:opt\:([^\:]*)\:([^\:]*)\:([^\:]*)/)
    if (matches) {
        const option_code = matches[1]
        const option_price = matches[2]
        const option_lib = matches[3]
    }
    return false
})

</script>


<template>
    <p :class="text_size" class="flex items-center text-gray-400">
        <template v-if="is_yes">
            <!-- stroke="#00aa00" -->
            <Icon name="mdi:check-circle-outline" size="32" class="text-green-600" />
        </template>
        <template v-else-if="is_no">
            <!-- stroke="#888888" -->
            <Icon name="mdi:cancel" size="32" class="text-red-600" />
        </template>
        <template v-else-if="is_inf">

            <Icon name="mdi:infinity" size="32" class="text-green-600" />
        </template>
        <template v-else-if="get_option.length > 0">
            <span @click="option_checked = !option_checked">
                <template v-for="option in get_option">
                    <!--
                    <Icon v-if="option_checked" name="mdi:check-circle-outline" size="32" />
                    <Icon v-if="!option_checked" name="mdi:cancel" size="32" />
                    -->
                    <input type="checkbox" v-model="option_checked" class="checkbox" />
                    {{ option.lib }} +{{ option.price }}€
                </template>
            </span>
        </template>
        <template v-else>
            {{ item_text }}
        </template>
        <!-- tool tip -->
    <div v-if="item_tip" :data-tip="item_tip" class="tooltip tooltip-top ml-2">
        <Icon name="mdi:tooltip-text-outline" size="18" />
    </div>
    </p>
</template>
