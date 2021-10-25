import { AuthProvider } from './context/auth'
import React from 'react'
import ReactDOM from 'react-dom'
import { Routes } from './routes'
import { ThemeProvider } from '@material-ui/core'
import reportWebVitals from './reportWebVitals'
import { theme } from './theme'

ReactDOM.render(
  <AuthProvider>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </React.StrictMode>
  </AuthProvider>,

  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
