// TODO: move to paxpar-schemas

export declare interface Checkout {
  label: string,
  monthly: string,
  yearly: string,
}


export declare interface Plan {
  id: string,
  title: string,
  description: string,
  price_msg: string, 
  badge?: object,
  price_per_month?: number,
  price_per_year?: number,
  price_per_month_discount?: number,
  price_per_year_discount?: number,
  button_url?: string,
  button?: string,
  footer?: string,
  features: string[],
  checkout?: Checkout,
}

//export declare interface Item {
//  section: string,
//  item: string,
//  free: string,
//  name: string,
//}

export declare interface Section {
  name: string,
  toggle: boolean,
  items: object[],
}

export declare interface Pricing {
  plans: Plan[],
  plansPT: Plan[],
  plansEN: Plan[],
  sections: Section[],
}

