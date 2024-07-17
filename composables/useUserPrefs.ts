/*

composable to get user settings

see /debug/userprefs

goals:
* [x] composable to read/write
* [ ] call pp API
* [ ] store in S3 session
* [x] debounce write
* [ ] debounce watch/refresh
* [ ] topicSave(), no watch
* [ ] no refresh(), use realtime
* [ ] typed
* [ ] split : survey, signatureAccounts, storageAccounts, aiAccounts, featureFlags
* [ ] docs /docs/dev
* 

cf :
* https://supabase.com/docs/guides/auth/managing-user-data
* https://supabase.com/docs/guides/realtime/channels
* https://supabase.com/docs/guides/database/json

*/


import { useToggle } from '@vueuse/core'
import type { RealtimeChannel } from '@supabase/supabase-js'



//TODO: move to models
export declare interface SurveyPref {
  gouts: string[],
  couleurs: string[],
  secteurs: string[],
  message?: string,
  show: boolean,
}

const default_SurveyPref: SurveyPref = {
  gouts: [],
  couleurs: [],
  secteurs: [],
  show: true,
}


//TODO: move to models
export declare interface PanelPref {
  //id: string,
  order: number,
  show: boolean,
}


//TODO: move to models
export declare interface PanelsPref {
  welcome: PanelPref,
  survey: PanelPref,
  check_stats: PanelPref,
  craft_stats: PanelPref,
}

const default_PanelsPref: PanelsPref = {
  welcome: {
    order: 1,
    show: true,
  },
  survey: {
    order: 2,
    show: true,
  },
  check_stats: {
    order: 3,
    show: true,
  },
  craft_stats: {
    order: 4,
    show: true,
  },
}


//TODO: move to models
export declare interface FeatureFlagsPref {
  debug: boolean,
  documents: boolean,
  delegation: boolean,
  ai: boolean,
  psc_cmd: boolean,
  ref2: boolean,
}

const default_FeatureFlagsPref: FeatureFlagsPref = {
  debug: false,
  documents: false,
  delegation: false,
  ai: false,
  psc_cmd: false,
  ref2: false,
}

// =========================================================================
// =========================================================================
export async function useUserPrefs() {
  const toast = useMyToast()

  //const isDark = useDark()
  //const isDark = ref(true)
  //const toggleDark = useToggle(isDark)

  /*
  const client = useSupabaseClient()
  
  const realtimeChannel: RealtimeChannel = client.channel('public:collaborators').on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'collaborators' },
      () => refreshCollaborators()
    )
    realtimeChannel.subscribe()
  */


  // =========================================================================
  //const { data: items, pending, error, refresh } = await useLazyAsyncData<SurveyPref>(cacheId(), async () => {
  //const surveyPref = await useLazyAsyncData<SurveyPref>('prefs-survey', async () => {
  const surveyPref = await useAsyncData<SurveyPref>('prefs-survey', async () => {
    console.debug('useUserProfile loading survey ...')
    //return await $ppfetch(props.source)

    try {
      const res = await $ppfetch('/api/prefs/user/survey',
        {
          server: false,
          method: "GET",
        }
      )
      console.debug('res', res)
      toast.success("prefs loaded !")
      return { ...default_SurveyPref, ...res}

    } catch (err) {
      toast.error("Error loading prefs !")
    }
  },
    {
      server: false,
      deep: true,
    }
  )
  const survey = reactive(surveyPref.data)
  //const survey = surveyPref.data
  watch(survey, (value, prevValue) => {
    console.debug("survey changed !!", value)
  })

  async function surveySave() {
    console.debug('surveySave2 ...', survey.value)
    try {
      const res = await $ppfetch('/api/prefs/user/survey',
        {
          server: false,
          method: "POST",
          body: survey.value,
        }
      )
      toast.success("prefs saved !")
    } catch (err) {
      toast.error("Error saving prefs !")
    }
  }

  // =========================================================================
  const panelsPref = await useAsyncData<PanelsPref>('prefs-panel', async () => {
    //console.debug('useUserProfile loading panels ...')
    try {
      const res = await $ppfetch('/api/prefs/user/panels',
        {
          server: false,
          method: "GET",
        }
      )
      //console.debug('panels res', res)
      toast.success("prefs panels loaded !")
      return { ...default_PanelsPref, ...res }
      //return res

    } catch (err) {
      toast.error("Error loading panels prefs !")
    }
  },
    {
      server: false,
      deep: true,
    }
  )
  const panels = reactive(panelsPref.data)
  //watch(panels, (value, prevValue) => {
  //  console.debug("panel changed !!", value)
  //})

  async function panelsSave() {
    //console.debug('panelSave ...', panels.value)
    try {
      const res = await $ppfetch('/api/prefs/user/panels',
        {
          server: false,
          method: "POST",
          body: panels.value,
        }
      )
      toast.success("prefs panel saved !")
    } catch (err) {
      toast.error("Error saving panel prefs !")
    }
  }


  // =========================================================================
  const featureFlagsPref = await useAsyncData<FeatureFlagsPref>('prefs-featureflags', async () => {
    //console.debug('useUserProfile loading featureflags ...')
    try {
      const res = await $ppfetch('/api/prefs/user/featureflags',
        {
          server: false,
          method: "GET",
        }
      )
      //console.debug('panels res', res)
      toast.success("prefs featureflags loaded !")
      return { ...default_FeatureFlagsPref, ...res }
      //return res

    } catch (err) {
      toast.error("Error loading featureFlags prefs !")
    }
  },
  //  {
  //    server: false,
  //    deep: true,
  //  }
  )
  const featureFlags = ref(featureFlagsPref.data)
  //watch(panels, (value, prevValue) => {
  //  console.debug("panel changed !!", value)
  //})

  async function featureFlagsSave() {
    //console.debug('panelSave ...', panels.value)
    try {
      const res = await $ppfetch('/api/prefs/user/featureflags',
        {
          server: false,
          method: "POST",
          body: featureFlags.value,
        }
      )
      toast.success("prefs featureFlags saved !")
    } catch (err) {
      toast.error("Error saving featureFlags prefs !")
    }
  }
  // =========================================================================


  return {
    survey,
    surveyPref,
    surveySave,
    panels,
    panelsPref,
    panelsSave,
    featureFlags,
    featureFlagsPref,
    featureFlagsSave,
  }
}

/*

import { type RealtimeChannel } from '@supabase/supabase-js'
import { type SignatureProvider } from '~~/models/signature'
import { type StorageProvider } from '~~/models/storage'
import { type Prefs } from '~~/models/prefs'

const debug = ref(false) as Ref<boolean>
const signatureProviders = ref([]) as Ref<SignatureProvider[]>
const storageProviders = ref([]) as Ref<StorageProvider[]>
const prefs = ref({}) as Ref<Prefs>


function refreshProfile() {
    console.log('refreshProfile ...')
}

function debugToggle() {
    console.log('debugToggle ...')
    //TODO: database update
    //TODO: update ref
}



  
export async function useProfile() {
    const supabase = useSupabaseClient()

    const realtimeChannel: RealtimeChannel = supabase.channel('public:collaborators').on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'profiles' },
        () => refreshProfile()
    )
    realtimeChannel.subscribe()


    const { data } = await supabase
        .from('profiles')
        .select('debug, storage_providers, signature_providers, prefs')
        .single()

    //console.log({data})
    debug.value = data?.debug || false
    signatureProviders.value = data?.signature_providers || []
    storageProviders.value = data?.storage_providers || []
    prefs.value = data?.prefs || {}


    return {
        debug,
        debugToggle,
        signatureProviders,
        storageProviders,
        prefs,
    }
}

*/