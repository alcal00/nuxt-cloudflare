<script setup lang="ts">
import 'deep-chat'

const initialMessages = ref([
    { role: 'user', text: 'Hey, how could you help me?' },
    { role: 'ai', text: 'Ask any question about your document' },
])

</script>

<template>
    <div class="flex-row ">
        <UAlert icon="ic:round-notification-important" color="primary" variant="solid" title="Work in progress!"
            description="This feature is not available yet, please contact the support to get access to the preview version."
            class="mb-5" />
        <div class="w-100">
            <!-- style="border-radius: 10px; width: 70vw; height: calc(100vh - 70px); padding-top: 10px" -->
            <deep-chat style="width: 70vw; height: 50vh"
                :demo="true" :textInput="{ placeholder: { text: 'Query your document!' } }"
                :initialMessages="initialMessages" />
        </div>
    </div>
</template>
