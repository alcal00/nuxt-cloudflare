<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core'

const { survey, surveySave, surveyPref } = await useUserPrefs()

const DEBOUNCE_SAVE_PERIOD = 4000


const items = [{
    type: 'profile',
    label: 'Infos personnelles',
    title: 'Vos informations personnelles',
    icon: 'i-heroicons-information-circle',
    description: 'Indiquez vos informations personnelles qui seront utilisées pour vous indenfider',
}, {
    type: 'choices',
    id: 'gouts',
    label: 'Goûts',
    title: 'Quels sont vos goûts ?',
    icon: 'i-heroicons-arrow-down-tray',
    description: 'Veuillez indiquer un ou plusieurs goûts que vous préférez ...',
    choices: ['poire', 'pomme', 'cerise', 'noix'],
}, {
    type: 'choices',
    id: 'couleurs',
    label: 'Couleurs',
    title: 'Quels sont vos couleurs ?',
    icon: 'i-heroicons-eye-dropper',
    description: 'Veuillez indiquer une ou plusieurs couleurs que vous préférez ...',
    choices: ['bleu', 'vert', 'jaune', 'rouge'],
}, {
    type: 'choices',
    id: 'secteurs',
    label: 'Secteurs',
    title: 'Sélectionner ce sur quoi vous souhaitez vous concentrer ?',
    icon: 'i-heroicons-eye-dropper',
    description: 'Aidez-nous à créer la meilleure expérience pour vous.',
    choices: [
        'Vérification',
        'Génération',
        'Délégation',
        'Personnalisation',
    ],
}, {
    type: 'end',
    label: 'Merci',
    title: 'Merci pour ces informations',
    icon: 'i-heroicons-information-circle',
    description: 'Ces informations nous serviront à vos proposer un contenu adapté.',
},
]


function isSelectedChoice(item: string, choice: string): boolean {
    if (!(item in survey.value)) {
        return false
    }
    return (survey.value[item].indexOf(choice) > -1)
}


const surveySaveDebounced = useDebounceFn(async () => {
    await surveySave()
}, DEBOUNCE_SAVE_PERIOD)


async function toggleChoice(item: string, choice: string) {
    if (!(item in survey.value)) {
        survey.value[item] = []
    }
    const index = survey.value[item].indexOf(choice)
    if (index >= 0) {
        const x = survey.value[item].splice(index, 1)
    } else {
        survey.value[item].push(choice)
    }
    await surveySaveDebounced()
}

async function done() {
    await surveySave()
}

</script>


<template>
    <UDashboardCard title="Questionnaire ....">
        <UTabs :items="items" class="w-full">
            <template #default="{ item, index, selected }">
                <div class="flex items-center gap-2 relative truncate">
                    <UIcon :name="item.icon" class="w-4 h-4 flex-shrink-0" />

                    <span class="truncate">{{ index + 1 }}. {{ item.label }}</span>

                    <span v-if="selected"
                        class="absolute -right-4 w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400" />
                </div>
            </template>

            <template #item="{ item }">
                <ULandingCTA :title="item.title" :description="item.description" card>

                    <template v-if="item.type === 'profile'">
                        <div>
                            <UFormGroup label="Email" help="We will never share your email with anyone else.">
                                <UInput placeholder="you@example.com" icon="i-heroicons-envelope" />
                            </UFormGroup>
                            <UFormGroup label="Email" help="We will never share your email with anyone else.">
                                <UInput placeholder="you@example.com" icon="i-heroicons-envelope" />
                            </UFormGroup>
                            <UFormGroup label="Email" help="We will never share your email with anyone else.">
                                <UInput placeholder="you@example.com" icon="i-heroicons-envelope" />
                            </UFormGroup>
                        </div>
                    </template>
                    <template v-else-if="item.type === 'choices'">
                        <div>
                            <template v-for="choice in item.choices">
                                <UButton @click="toggleChoice(item?.id, choice)" color="primary"
                                    :variant="isSelectedChoice(item?.id, choice) ? 'solid' : 'outline'"
                                    class="m-2 px-4 py-2">{{
                                        choice }}</UButton>
                            </template>
                            <p />
                            <UButton @click="surveyPref.refresh()" color="primary" label="refresh" />
                        </div>
                    </template>
                    <template v-else-if="item.type === 'end'">
                        <div>
                            <UFormGroup label="Message"
                                description="Write here an extra message you would like to pass to the paxpar team">
                                <UTextarea autoresize placeholder="Your message ..." v-model="survey.message" />
                            </UFormGroup>

                            <UButton @click="done()" color="primary" label="Done" />

                            <UCheckbox v-model="survey.show" label="Show next time"
                                help="Show this survey in my home dashboard." />

                        </div>
                    </template>
                    <template v-else>
                        unknown type : {{ item.type }}
                        {{ item }}
                    </template>
                </ULandingCTA>
            </template>
        </UTabs>
        <!--<pre>{{ survey }}</pre>-->

    </UDashboardCard>
</template>