<script setup lang="ts">
import type { PlansRef, UserMetadataPP, DomainPerms } from '~/models/perms';


const toast = useMyToast()
const { rolesFromPermissionsTree, roleDocUrl } = usePerm()

//TODO: move to supabase client
const url = "https://cgsszvazemkfneqlgpkb.supabase.co/functions/v1/plans"

const domain = ref()
const domainDef = ref<DomainPerms>()


// =========================================================================
const { data, refresh } = await useAsyncData<PlansRef>('plans', async () => {
    //console.debug('useUserProfile loading featureflags ...')
    try {
        //TODO: use basic $fetch()
        const res = await $ppfetch(url,
            {
                server: false,
                method: "GET",
            }
        )
        //console.debug('panels res', res)
        toast.success("plans loaded !")
        return res

    } catch (err) {
        toast.error("Error loading plans !")
    } rolesFromPermissionsTree
},
    //  {
    //    server: false,
    //    deep: true,
    //  }
)

const domains = computed(() => {
    return Object.keys(data.value?.domains || {})
})


function isRoleInPlan(domain: string, plan: string, role: string): boolean {
    const plans = domainDef.value?.plans || {}

    if (!(plan in plans)) {
        return false
    }
    if (!plans[plan].includes(role)) {
        return false
    }
    return true
}


//TOOD: move to perms.ts
function rolesFromPermissionsTree2(permissionsTree: UserMetadataPP): string[] {
    const permissions = []
    //console.debug({ permissionsTree })

    for (const [_, domainPerms] of Object.entries(permissionsTree)) {
        const plans = domainPerms?.plans || {}
        //console.debug({ plans })

        //for (const plan of (domainPerms?.plans || {})) {
        for (const [_, plan] of Object.entries(plans)) {

            //console.debug({ plan })
            //for (const role of plan.roles) {
            for (const role of plan) {
                //console.debug({ role })

                //console.debug("role", role)
                if (!permissions.includes(role)) {
                    permissions.push(role)
                }
            }
        }
    }
    return permissions
}


//TOOD: move to perms.ts
function plansFromPermissionsTree(permissionsTree: UserMetadataPP): string[] {
    const allPlans = []
    //console.debug({ permissionsTree })

    for (const [_, domainPerms] of Object.entries(permissionsTree)) {
        const plans = domainPerms?.plans || {}
        //console.debug({ plans })

        //for (const plan of (domainPerms?.plans || {})) {
        for (const [planId, _] of Object.entries(plans)) {

            //console.debug("role", role)
            if (!allPlans.includes(planId)) {
                allPlans.push(planId)
            }
        }
    }
    return allPlans
}



const roles = computed(() => {
    return rolesFromPermissionsTree2(data.value?.domains || {})
})


const plans = computed(() => {
    return plansFromPermissionsTree(data.value?.domains || {})
})


watch(data, async (newValue, oldValue) => {
    const domains = Object.entries(newValue?.domains || {})
    if (domains.length > 0) {
        domain.value = domains[0][0]
        domainDef.value = domains[0][1]
        console.debug(`loading domain ${domain.value}`)
    }
})


onMounted(() => {

})
</script>

<template>
    <!--
    <h1>ROLES MATRIX XXXXX</h1>
    <UButton @click="refresh" label="refresh" />
    <p />
    Role2 : {{ roles }}
    <p />
    plans : {{ plans }}
    <p />
-->
    <p />
    Domains : {{ domains }}
    <table>
        <thead>
            <td></td>
            <td v-for="plan in plans" class="[writing-mode:vertical-lr]">{{ plan }}</td>
        </thead>

        <tbody v-for="role in roles">
            <td>
                <NuxtLink :to="roleDocUrl(role)">{{ role }}</NuxtLink>
            </td>
            <td v-for="plan in plans">
                <UIcon :name="isRoleInPlan(domain, plan, role) ? 'mdi:check-bold' : ''" />

            </td>
        </tbody>
    </table>
    <!--
    <pre>{{ data }}</pre>
    -->
</template>