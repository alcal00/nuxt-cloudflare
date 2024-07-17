<script setup lang="ts">
import type { UserMetadataPP } from '~~/models/perms.ts'
import { useDebounceFn } from '@vueuse/core'
import { useTimeAgo, useNow } from '@vueuse/core'
import { formatTimeAgo } from '@vueuse/core'
import { useIntervalFn } from '@vueuse/core'

const { permissions, roleDocUrl, pathFromRole } = usePerm()
const user = useSupabaseUser()
const supabase = useSupabaseClient()
const session = useSupabaseSession()

const { featureFlags, featureFlagsPref, featureFlagsSave } = await useUserPrefs()


const runtimeConfig = useRuntimeConfig()
const routes = runtimeConfig.public.publicRoutes
//console.log({ runtimeConfig })

const plansAccordionItems = () => {
  const user_metadata_pp = user.value?.user_metadata?.pp as UserMetadataPP
  //console.debug({ user_metadata_pp })

  return Object.entries(user_metadata_pp || {}).map(domain => {
    //console.debug(x)
    return {
      label: `Domain ${domain[0]}`,
      slot: 'plans',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      plans: (domain[1]?.plans || []).map(plan => {
        return {
          label: `Plan ${plan?.product_name} (expires on ${plan?.renews_at})`,
          slot: 'roles',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          roles: plan?.roles?.map(r => {
            return {
              label: `Role ${r}`,
              role: r,
              domain: domain[0],
              path: pathFromRole(r),
              //slot: 'roles',
              //content: 'Lorem ipsum dolor sit amet, consectetur 
            }
          })
        }
      }),
    }
  })
}

const DEBOUNCE_SAVE_PERIOD = 4000

const featureFlagsSaveDebounced = useDebounceFn(async () => {
  await featureFlagsSave()
}, DEBOUNCE_SAVE_PERIOD)

async function onChange() {
  // Do something with data
  //console.log("change", state)
  await featureFlagsSaveDebounced()
}


const refreshTokenPending = ref(false)
const rebuildTokenPending = ref(false)

const tokenExpireAt = ref()
const tokenExpireSecs = ref(0)
// interval to update token expiry countdown since useTimeAgo() is weird (or broken ??)
const { pause, resume, isActive } = useIntervalFn(async () => {  
  if (tokenExpireSecs.value <= 0) {
    const { data, error } = await supabase.auth.getSession()
    tokenExpireAt.value = data.session.expires_at
  }
  tokenExpireSecs.value = Math.round(tokenExpireAt.value - (Date.now() /
    1000))
})

// https://supabase.com/docs/reference/javascript/auth-onauthstatechange?example=listen-to-auth-changes
async function refreshToken() {
  refreshTokenPending.value = true
  //console.debug('refresh token ...')
  const { data, error } = await supabase.auth.refreshSession()
  const { session, user } = data
  tokenExpireAt.value = session.expires_at
  refreshTokenPending.value = false
}


async function refreshPerms() {
  rebuildTokenPending.value = true
  // cf https://supabase.com/docs/reference/javascript/functions-invoke?example=basic-invocation
  const { data, error } = await supabase.functions.invoke('perm-rebuild')
  //console.log('perm-rebuild', { data, error })
  await refreshToken()
  //TODO: how to update permissions display ?? (usePerm is not reactive enough !)
  rebuildTokenPending.value = false
}

onMounted(async () => {
  //const { data } = await supabase.auth.getUser()
  //console.debug("getUser", data.user.email)
})
</script>

<template>
  <UDashboardPanelContent class="pb-24" grow>
    <ClientOnly>
      <UDashboardSection title="Feature Flags" description="Enable new cutting edge features" orientation="horizontal">
        <UCard :ui="{ body: { base: 'divide-y divide-gray-200 dark:divide-gray-800 gap-4 flex flex-col' } }">
          <UFormGroup v-for="(field, key, index) in featureFlags" :key="key" :name="key" :label="key"
            class="flex items-center justify-between pt-4 first:pt-0 gap-2" :ui="{ container: 'flex' }">
            <UToggle v-model="featureFlags[key]" size="md" @update:model-value="onChange" />
          </UFormGroup>

        </UCard>
      </UDashboardSection>

      <UDashboardSection title="Permissions" description="Flatten list of your persmissions" orientation="horizontal">
        <div>
          <UButton v-for="perm in permissions" icon="mdi:account-check" :label="perm" :to="roleDocUrl(perm)"
            target="_blank" class="m-2" />
        </div>
      </UDashboardSection>


      <UDashboardSection title="Domain / Plan / Roles" description="Your roles per plan per domain"
        orientation="horizontal">
        <UAccordion :items="plansAccordionItems()" multiple default-open>
          <template #plans="{ item }">
            <!-- <p>plans : {{ item.plans }}</p> -->
            <UAccordion :items="item.plans" multiple default-open class="pl-8">
              <template #roles="{ item }">
                <!-- <p>roles : {{ item.roles }}</p> -->
                <UAccordion :items="item.roles" multiple class="pl-8">
                  <template #item="{ item }">
                    <template v-if="item.path">
                      path linked
                      <UButton :to="item.path" :label="item.path" class="mx-2" />
                      <UButton :to="`https://${item.domain}${item.path}`" :label="`https://${item.domain}${item.path}`"
                        class="mx-2" />
                    </template>
                    <template v-else>No linked path !!</template>
                  </template>
                </UAccordion>

              </template>
            </UAccordion>
          </template>
        </UAccordion>
      </UDashboardSection>


      <UDashboardSection title="JWT Tokens" description="Your security tokens" orientation="horizontal">

        <UCard :ui="{ body: { base: 'divide-y divide-gray-200 dark:divide-gray-800 gap-4 flex flex-col' } }">
          <UFormGroup name="rgpd1" label="Refresh token" description="Refresh the JWT token"
            class="flex items-center justify-between pt-4 first:pt-0 gap-2" :ui="{ container: 'flex' }">
            <p class="mr-3">expire in {{ tokenExpireSecs }}s</p>
            <UButton @click="refreshToken" :loading="refreshTokenPending" label="refresh" />
          </UFormGroup>
          <UFormGroup name="rgpd1" label="Rebuild token" description="Rebuild the JWT token payload and refresh it"
            class="flex items-center justify-between pt-4 first:pt-0 gap-2" :ui="{ container: 'flex' }">
            <UButton @click="refreshPerms" :loading="rebuildTokenPending" label=" rebuild" />
          </UFormGroup>

        </UCard>
      </UDashboardSection>



      <UDashboardSection title="Public routes"
        description="Routes that are authorized for everyone, including non-authenticated users">
        <p>front public routes :</p>
        <ul class="menu bg-base-200 w-56 rounded-box">
          <li v-for="route in routes">
            <a>
              <icon name="mdi:road-variant" />
              {{ route }}
            </a>
          </li>
        </ul>
      </UDashboardSection>

      <UDashboardSection title="Supabase user" description="Full user payload">
        <pre>{{ user }}</pre>
      </UDashboardSection>

    </ClientOnly>
  </UDashboardPanelContent>
</template>
