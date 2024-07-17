// TODO: move to paxpar-schemas

export declare interface ChecklistResultNode {
  id?: string,
  name?: string,
  status?: string,
  icon?: string,
  children?: ChecklistResultNodes,
  props?: Map<string, any>,
  view?: string,
  factice?: string,
  desc?: string,
  content?: string,
}

export declare interface ChecklistResultNodes extends Array<ChecklistResultNode>{}


export declare enum Status {
    OK = 'OK',
    KO = 'KO',
    WARNING = 'WARNING',
    INFO = 'INFO',
}

export declare interface ChecklistStatusIconTheme {
  icon: string,
  hue: number,
}

export type ChecklistIconThemeStatus = {
  [key in Status]: ChecklistStatusIconTheme
}

export declare interface ChecklistIconTheme {
  icon_default: string,
  icon_size: string,
  status: ChecklistIconThemeStatus,
}

export declare interface IconTheme {
  checklist: ChecklistIconTheme,
}

export declare interface ViewMode {
  title: string,
  icon:  string,
  factice?: boolean,
}
