
export interface Transpose {
  color?: Array<Map<string, string>>
  logo?: Array<Map<string, string>>
  text?: Array<Map<string, string>>
}

export interface TransposeSpot {
  color?: string
  logo?: string
  text?: string
}

export interface StageInfo {
  nodes: HTMLElement[]
}

export interface PageInfo {
  rect: SVGRectElement
  stages: StageInfo[]
}

export interface DeckInfo {
  node: HTMLElement
  pages: PageInfo[]
}
