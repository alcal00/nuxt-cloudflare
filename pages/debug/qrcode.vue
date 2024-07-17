<script setup lang="ts">
import { ref } from 'vue'
import { useQRCode } from '@vueuse/integrations/useQRCode'

const text = ref('text-to-encode')
const qrcode = useQRCode(text, {
    errorCorrectionLevel: 'L',
    margin: 3,
})

</script>

<template>
    <div>
        <h1>shortcut</h1>
        <ul>
            <li>
                <ULink to="https://vueuse.org/integrations/useQRCode/">vueUse useQRCode</ULink>
            </li>
            <li>
                <ULink to="https://github.com/soldair/node-qrcode">node-qrcode</ULink>
            </li>
        </ul>
        <p />
        <input v-model="text" type="text" />
        <img :src="qrcode" alt="QR Code" />
    </div>
</template>