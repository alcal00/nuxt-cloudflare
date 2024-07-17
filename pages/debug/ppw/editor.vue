<script setup lang="ts">

function handleEditorChange(source) {
    console.log('Editor content changed:', source);
}

</script>
  

<template>
    <div>
        <ppw-editor v-model="code" />
        
        <UDivider />
        <ppw-playground-md></ppw-playground-md>

        <UDivider />
        <ppw-playground-md></ppw-playground-md>

        <UDivider />
        <ppw-playground-checklist-result key="k1"></ppw-playground-checklist-result>

        <UDivider />
        <ppw-playground-checklist-result key="k2"></ppw-playground-checklist-result>

    </div>

</template>
  
  