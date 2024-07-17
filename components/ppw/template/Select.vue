<script setup lang="ts">
import { type TemplateSet } from '~~/models/craftform'
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';



const props = withDefaults(defineProps<{
    template_set: TemplateSet,
}>(), {
    //items: () => []
    template_set: () => ({
        id: "dddaa",
        desc: "",
        templates: [],
    })
})

const selected = ref(undefined)
//let selectedItem = ref(props.items[0])
const show_button = ref(false)
//TODO: create a real useCraftform() composable
//const craftform_store = useCraftform()


onMounted(async () => {
    //console.log('mounted select template...')
    // set initial selected template
    //TODO: use composable
    //selected.value = craftform_store.templateSets[props.template_set.id]
    selected.value = 'N/A'
})


function gradient(item) {
    // return gradient def if item is selected or not
    return selected.value === item.id ? "to bottom, #26c6da20, #26c6daaa" : ""
}

function selectTemplate(item) {
    // Select template (set vuex and local selected value)
    //console.log('selectTemplate ...')
    selected.value = item.id
    /*
    this.templateSet({
        template_set_id: this.template_set.id,
        template_id: item.id,
    })
    */
}

</script>


<template>

    <div>
        <h2>{{ template_set.desc }}</h2>

        <!--<vue-json-pretty :data="template_set"></vue-json-pretty>-->
        <div>
            <div v-for="item in template_set.templates" :key="item.id" cols="12" sm="6" md="4" lg="3">
                <div @click="selectTemplate(item)" :dark="selected === item.id">
                    <img src="https://findicons.com/files/icons/1714/dropline_neu/128/text_x_generic.png"
                        :lazy-src="`https://upload.wikimedia.org/wikipedia/commons/archive/3/39/20070424005738%21Blank-document.svg`"
                        contain :aspect-ratio="21 / 29.7" class="grey lighten-2" :gradient="gradient(item)" />
                    <!--
                    <template v-slot:placeholder>
                        <div class="fill-height ma-0" align="center" justify="center">
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </div>
                    </template>
                    -->
                    <h1>{{ item.name }}</h1>

                    <div v-if="show_button">
                        <button icon>
                            <img href="mdi-heart" />
                        </button>

                        <button icon>
                            <img href="mdi-bookmark" />
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>
