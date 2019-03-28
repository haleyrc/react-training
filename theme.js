import { syntaxHighlighterPrism } from "mdx-deck/themes"

const theme = {
  font: "Roboto, sans-serif",
  monospace: "Fira Mono",
  colors: {
    background: "#eee"
  },
  pre: {
    fontSize: "24px"
  }
}

export const combinedThemes = [syntaxHighlighterPrism, theme]
export default theme
