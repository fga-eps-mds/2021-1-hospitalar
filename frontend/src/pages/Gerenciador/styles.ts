import { makeStyles } from '@material-ui/core'

/**
 * Estilização dessa página.
 * é bem parecido com CSS
 *
 * Para usar importe essa constante e atribua o objeto useStyles numa constante chamada classes
 * ex:
 *  const classes = useStyles()
 *
 * @see https://material-ui.com/styles/api/#makestyles-styles-options-hook
 */
// eslint-disable-next-line no-unused-vars
export const useStyles = makeStyles((theme) => ({
  botao: {
    margin: '0px',
  },
  teste: {
    display: ' none' 
  },
  teste1: { 
    backgroundColor: 'whrite' 
  },
  teste2: { 
    backgroundColor: 'red' 
  },
  input: {
    paddingLeft: '20px',
    paddingRight: '20px',
    marginTop: '5px',
    marginBottom: '5px',
  },
  icon: {
    height: '30px',
  },
}))
