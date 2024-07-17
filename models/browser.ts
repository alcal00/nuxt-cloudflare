
export declare interface BrowserFilter {
  name: string
  icon?: string
}


export declare interface ActionItem {
  name: string
  url?: string
  icon?: string
}


//TODO: useless ?
export declare interface GalleryItem {
  show?: true
  enabled?: true
  published?: true
  published_order?: 300
  lab?: false
  private?: []
  actions?: ActionItem[]
}


//TODO: reduce this interface, move most of them in GalleryItem
export declare interface BrowserItem {
  id: string
  type: string,
  name: string
  $schema?: string
  desc?: string
  image?: string
  image2?: string
  icon?: string
  tags?: string[]
  version?: string
  author?: string
  gallery?: GalleryItem
  item_url?: string
}
