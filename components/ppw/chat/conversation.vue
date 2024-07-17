<script setup lang="ts">
import { useTimeoutFn } from '@vueuse/core'
import { timeline } from 'motion'
import { type Conversation, type ConversationItem, type ConversationProp } from '~~/models/actor'

const props = withDefaults(defineProps<{
    conversation: ConversationProp
    animate?: boolean
    right?: boolean
    animate_period?: number // seconds between chat sentences
}>(), {
    animate: false,
    right: false,
    animate_period: 1.0,
})

const itemRefs = ref([])

/*
const conversation_lines = [
    {
        // - alice: "Hello, my name is Alice"
        actor: "peggy",
        msg: "Hello, my name is Alice",
    }, {
        // - bob: "Hello, my name is Bob"
        actor: "zina",
        msg: "Hello, my name is Bob",
    }, {
        // - alice: "How do you do ?"
        actor: "peggy",
        msg: "How do you do ?",
    }, {
        // - bob: "Fine, and you ?"
        actor: "zina",
        msg: "Fine, and you ?",
    }, {
        // - alice: ":-)"
        actor: "peggy",
        msg: ":-)",
    },
]
*/
const conversation_lines: Ref<Conversation> = computed(() => {
    const lines: Conversation = []
    /*
    props.conversation
    .split(':', 1).pop()
    */
    var lastActor
    // if props right, start conv at right/end
    // we set to the opposite so it is switch on first sentence accordingly
    var pos = props.right ? 'start' : 'end'
    for (var line of props.conversation) {
        //console.log(line)
        const actor = Object.keys(line)[0]
        // on actor switch ... switch side
        if (lastActor !== actor) {
            pos = pos == 'start' ? 'end' : 'start'
        }
        lines.push({
            actor,
            msg: line[actor],
            pos,
        })
        lastActor = actor
    }
    return lines
})

//watch(props.conversation, async (value, oldValue) => {
//    console.log('xxxxxx watch conversation', value)
//
//})
function doAnimate() {
    //console.log('onMounted ...')
    if (props.animate === true) {
        // we need a timeout since motion will truncate last items
        const { isPending, start, stop } = useTimeoutFn(() => {
            //console.log('xxx', itemRefs.value)
            const timelineItems = []

            for (const item of itemRefs.value) {
                //timelineItems.push([item, { backgroundColor: 'transparent' }, { duration: 0 }])
                timelineItems.push([item, { opacity: 0 }, { duration: 0 }])
            }
            for (const item of itemRefs.value) {
                //timelineItems.push([item, { backgroundColor: '#FF0000' }, { duration: 1.0, easing: 'linear' }])
                timelineItems.push([item, { opacity: 1 }, { duration: props.animate_period, easing: 'linear' }])
            }
            //console.log({timelineItems})
            //TODO: global/ref timeline ??
            const tl = timeline(timelineItems)
        }, 100)
    }
}

watch(
    () => props.conversation,
    () => {
        //console.log('xxxxxx watch conversation')
        doAnimate()
    }
)

onMounted(() => {
    doAnimate()
    //console.log('cccr', $slots.default)
})
</script>

<template>
    <div v-for="(conversation_line, index) in conversation_lines" ref="itemRefs">
        <div class="chat" :class="conversation_line.pos == 'start' ? 'chat-start' : 'chat-end'">
            <div class="chat-image avatar">
                <ppw-chat-actor :name="conversation_line.actor" hidename size="8" />
            </div>
            <div class="chat-bubble">{{ conversation_line.msg }}</div>
        </div>
    </div>
</template>