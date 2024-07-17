import { type SignatureProviders, type SignatureProvider, type SignatureAccounts, type SignatureAccount } from '~~/models/signature'



export const PROVIDERS:SignatureProviders = [
  {
    id: 'CMD',
    name: 'Chave Móvel Digital',
    icon: 'fa6-solid:file-signature',
    component: 'ppw-sign-cmd-form',

  },{
    id: 'Chambersign',
    name: 'Chambersign',
    icon: 'akar-icons:hand',
    component: 'ppw-sign-chambersign-form',
  },{
    id: 'LexPersona',
    name: 'LexPersona',
  },{
    id: 'LuxTrust',
    name: 'LuxTrust',
  },{
    id: 'YouSign',
    name: 'YouSign',
  },
]


export const ACCOUNTS: SignatureAccounts = [
  {
    id: 'Chave Ph',
    provider_id: 'CMD',
    name: 'Chave Móvel Digital Philippe',
    icon: 'fa6-solid:file-signature',
    conf: {
      mobile: "+33 607650693",
    }
  },{
    id: 'Chave Pr',
    provider_id: 'CMD',
    name: 'Chave Móvel Digital Françoise',
    icon: 'fa6-solid:file-signature',
    conf: {
      mobile: "+33 608233547",
    }
  }, {
    id: 'Chambersign',
    provider_id: 'Chambersign',
    name: 'Chambersign',
    icon: 'akar-icons:hand',
  },
]


export function providersMap(): Map<string, SignatureProvider> {
  const map = new Map<string, SignatureProvider>();
  PROVIDERS.forEach(obj => {
    map.set(obj.id, obj);
  });
  return map;
}