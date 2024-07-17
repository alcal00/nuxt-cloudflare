// TODO: move to paxpar-schemas

export interface userData { email: string; }

export interface UserProperties {
    name: string;
    data: userData;
}

export interface Template {
    id: string,
    name: string,
}

export interface TemplateSet {
    id: string,
    desc: string,
    templates?: Template[]
}

export interface Build {
    _trigger: number;
    template_sets: object;
}

export interface Form {
    _trigger: number;
    _build: Build;
}

export interface CraftFormRef {
    craft_id: string
    form: Form
    // default values of the form
    // usefull to avoid error in form who access deep non-existant values
    default: object
    craft_info: object
    schema: object
}


export interface WizardMessages {
    step_input?: string
    step_check?: string
    step_finalize?: string
    step_drop_file?: string
}

export interface Wizard {
    messages?: WizardMessages
}

export interface CraftInfo {
    id: string
    craft_schema: object
    checklist?: string
    image?: string
    image2?: string
    step_check
    name: string
    desc?: string
    wizard?: Wizard
    template_sets: TemplateSet[]
    dropfile_webcam?: boolean
}
