<template>
    <div class="flex-row">
        <UAlert icon="ic:round-notification-important" color="primary" variant="solid" title="Work in progress!"
            description="This feature is not available yet, please contact the support to get access to the preview version." />

        <div class="w-100 h-96 m-5 z-0">
            <LMap ref="map" :zoom="zoom" :center="[47.21322, -1.559482]" class="z-0">
                <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
                    layer-type="base" name="OpenStreetMap" class="z-0" />
            </LMap>
        </div>
    </div>
</template>

<script setup lang="ts">
const zoom = ref(6)
</script>

<style>
body {
    margin: 0;
}
</style>
