<template>
    <div class="flex-row ">
        <UAlert icon="ic:round-notification-important" color="primary" variant="solid" title="Work in progress!"
            description="This feature is not available yet, please contact the support to get access to the preview version." />
        <div class="w-100">
            <deep-chat :demo="true" :textInput="{ placeholder: { text: 'Welcome to the demo!' } }"
                :initialMessages="initialMessages" />
        </div>

    </div>

</template>

<script setup lang="ts">
import 'deep-chat';

const initialMessages= ref([
                { role: 'user', text: 'Hey, how are you today?' },
                { role: 'ai', text: 'I am doing very well!' },
            ])
</script>
