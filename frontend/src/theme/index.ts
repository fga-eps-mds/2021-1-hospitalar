import { createTheme } from '@material-ui/core/styles'

/**
 * Tema usado no aplicativo.
 * Foi ativado na página index.tsx
 *
 * @see https://material-ui.com/customization/theming/#api
 */
export const theme = createTheme({
  palette: {
    primary: {
      main: '#175215',
    },
    secondary: {
      main: '#2b7b24',
    },
  },
  typography: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 15,
  },
})


