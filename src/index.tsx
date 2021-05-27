import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, createTheme } from 'smarthr-ui'

import { App } from './App'

const theme = createTheme({})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
