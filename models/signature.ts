// TODO: move to paxpar-schemas

export enum ProvidersCode {
  CMD = 'CMD',
  Chambersign = 'Chambersign',
  LexPersona = 'LexPersona',
  LuxTrust = 'LuxTrust',
  YouSign = 'YouSign',
}


export interface SignatureProvider {
  id: string
  name: string
  icon?: string
  data?: object
  component?: string
}


export interface SignatureAccount {
  id: string
  provider_id: string
  name: string
  icon?: string
  conf?: object
}


export interface SignatureProviders extends Array<SignatureProvider> { }
export interface SignatureAccounts extends Array<SignatureAccount> { }
