import { createGlobalStyle } from 'styled-components'

import { FONT_FAMILY, defaultColor } from 'smarthr-ui'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${defaultColor.BACKGROUND};
    height: 100%;
    font-family: ${FONT_FAMILY};
    color: ${defaultColor.TEXT_BLACK};
  }
`
