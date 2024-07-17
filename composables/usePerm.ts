/*
usePerm composable
*/
//import { type User } from "@supabase/gotrue-js";

import type { UserMetadataPP } from "~~/models/perms";

const publicRoutes = [
  '/blog',
  '/confirm',
  '/en',
  '/fr',
  '/login',
  '/pricing_old',
  '/pricing',
  '/pt',
]

// RULES order is important
// first match
// sort more specific first, more general last
//TODO: not sure if order is important
// no trailing slash in path
const rulesCommon = [
  {
    path: "/document",
    permission: "DOCUMENTS",
  },
  {
    path: "/documents",
    permission: "DOCUMENTS",
  },
  {
    path: "/docs/user",
    permission: "FRONT_CONTENT_DOCS_USER",
  },
  {
    path: "/docs/author",
    permission: "FRONT_CONTENT_DOCS_AUTHOR",
  },
  {
    path: "/debug",
    permission: "DEBUG",
  },
  {
    path: "/docs/dev",
    permission: "FRONT_CONTENT_DOCS_DEV",
  },
  {
    path: "/docs/host",
    permission: "FRONT_CONTENT_DOCS_HOST",
  },
  {
    path: "/docs/team",
    permission: "DEV",
  },
  {
    path: "/gallery",
    permission: "GALLERY",
  },
  {
    path: "/craft",
    permission: "CRAFT_FILL",
  },
  {
    path: "/shortcut",
    permission: "CRAFT_FILL",
  },
  {
    path: "/docs",
    permission: "AUTHENTICATED",
  },
  {
    path: "/home",
    permission: "HOME",
  },
  {
    path: "/logout",
    permission: "AUTHENTICATED",
  },
  {
    path: "/settings",
    permission: "AUTHENTICATED",
  },
  {
    path: "/check",
    permission: "AUTHENTICATED",
  },
  {
    path: "/console",
    permission: "AUTHENTICATED",
  },
]


function permissionsGranted(perms1: string[], perms2: string[]): boolean {
  /*
  Check that all perm in perms1 is in perms2
  */
  const res = perms1.every((perm) => {
    return perms2.includes(perm);
  });
  //console.log({ perms1, perms2, res })
  return res;
}


function rolesFromPermissionsTree(permissionsTree: UserMetadataPP): string[] {
  const permissions = []
  //console.debug({ permissionsTree })

  for (const [_, domainPerms] of Object.entries(permissionsTree)) {
    //console.debug({ domainPerms })
    for (const plan of (domainPerms?.plans || [])) {
      //console.debug({ plan })
      for (const role of plan.roles) {
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

export const usePerm = () => {
  /* get permissions of the current logged user
or default non-logged user persmissions
*/
  const user = useSupabaseUser()
  //console.log('ddddd', user)
  //const tokenPerms = user.value?.user_metadata?.permissions || []
  const permissionsTree = (user.value?.user_metadata?.pp || {}) as UserMetadataPP
  const permissions = rolesFromPermissionsTree(permissionsTree)

  // if user is authenticated, add the perm AUTHENTICATED
  if (user.value) {
    permissions.push("AUTHENTICATED")
  } else {
    permissions.push("ANON")
  }


  //TODO: deprecate
  function permissionsPathGet(path: string): string[] {
    /* get permissions required for the given path
    additive : several rules can match
    */

    const perm1 = permissionsPathGetFromRules(path, rulesCommon);

    // merge with custom rules
    const appConfig = useAppConfig();
    //console.log('appConfig.paxpar.permission', appConfig.paxpar?.permission)

    const perm2 = permissionsPathGetFromRules(
      path,
      appConfig.paxpar?.permission || [],
    );

    const res = perm1.concat(perm2);
    return res;
  }

  //TODO: deprecate
  function permissionsPathGetFromRules(
    path: string,
    rules: Array<any>,
  ): string[] {
    /* get permissions required for the given path
    additive : several rules can match
    */
    const res: string[] = [];
    for (const rule of rules) {
      //console.log({ rule })
      if (path.startsWith(rule.path + "/") || (path === rule.path)) {
        res.push(rule.permission);
        //console.log(`${rule.path} in ${path}`)
      }
    }
    //console.log({ res })
    return res
  }


  function hasPermissions(perms: string[]) {
    return permissionsGranted(perms, permissions)
  }


  // return true if the given path is authorized
  // 
  function pathAuthorized(path: string): boolean {
    if ((path === '/') || (path === '')) {
      return true
    }
    for (const route of publicRoutes) {
      //console.log({ rule })
      if (path.startsWith(route + "/") || (path === route)) {
        return true
      }
    }


    for (const rule of rulesCommon) {
      //console.log({ rule })
      if (path.startsWith(rule.path + "/") || (path === rule.path)) {
        //console.debug(rule)
        return permissions.includes(rule.permission)
      }
    }
    return false
  }

  // get the relative URL for a role documentation
  function roleDocUrl(role: string): string {
    return `/docs/ref/roles/${role}`.toLowerCase()
  }

  // get path from permission
  function pathFromRole(role: string): string {
    for (const rule of rulesCommon) {
      //console.debug(rule.permission, role)
      if (rule.permission === role) {
        return rule.path
      }
    }
    return ""
  }

  return {
    permissions,
    permissionsTree,
    hasPermissions,
    permissionsPathGet,
    permissionsPathGetFromRules,
    rulesCommon,
    permissionsGranted,
    pathAuthorized,
    roleDocUrl,
    pathFromRole,
    rolesFromPermissionsTree,
  }
}
