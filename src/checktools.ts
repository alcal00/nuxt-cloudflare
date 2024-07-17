import { type IconTheme } from "~~/models/checklist"


//import '~~/tokens.config'
//import theme from '~~/tokens.config'
export const theme: IconTheme = {
  checklist: {
    icon_default: "codicon:symbol-field",
    icon_size: "32",
    status: {
      OK: {
        icon: "mdi:shield-check",
        hue: 120,
      },
      KO: {
        icon: "mdi:shield-alert",
        hue: 0,
      },
      WARNING: {
        icon: "mdi:alert",
        hue: 39,
      },
      INFO: {
        icon: "mdi:information",
        hue: 240,
      },
    },
  },
}



// cf https://www.w3schools.com/css/css_colors_hsl.asp
// cf https://mika-s.github.io/javascript/colors/hsl/2017/12/05/generating-random-colors-in-javascript.html
export function statusColor(color: number, expanded: boolean): string {
  if (expanded) {
    return `hsla(${color},20%,50%,0.2)`
  } else {
    return `hsla(${color},70%,50%,0.9)`
  }
}
