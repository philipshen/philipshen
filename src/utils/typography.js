import Typography from 'typography'
import Color from '../styles/color'

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.1,
  headerColor: Color.dark_text,
  bodyColor: Color.dark_text,
  headerFontFamily: [
    "futura",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "sans-serif"
  ],
  bodyFontFamily: [
    "Helvetica Neue",
    "Helvetica",
    "Open Sans",
    "Spectral"
  ],
  overrideStyles: ({ rhythm, scale }, options) => ({
  })
})

export const scale = typography.scale
export const rhythm = typography.rhythm
export default typography