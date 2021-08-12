import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from '@material-ui/core'
import { theme } from './theme'
import { Routes } from './routes'
import ReactDOM from 'react-dom'
import React from 'react'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
