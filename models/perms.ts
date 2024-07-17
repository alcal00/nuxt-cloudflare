// TODO: move to paxpar-schemas

export declare interface Plan {
  product_name: string,
  renews_at: string,
  roles: string[],
}


//TODO: deprecate in favor of new DomainPerms
export declare interface DomainPerms {
  plans: Plan[],
}

//TODO: new DomainPerms
//export declare type PlanDict = {
//  [key: string]: Plan;
//}
//export declare type DomainPerms {
//  plans: PlanDict,
//}


export declare type UserMetadataPP = {
  [key: string]: DomainPerms;
}

//TODO: need rework
export declare interface PlansRef {
  version: string,
  date: string,
  domains: UserMetadataPP,
}
