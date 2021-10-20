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

    centralizar: {
        alignItems: 'center',  
        height: '50vh',
        width: '100%',
        justifyContent: 'center',

    },

    botao: {
        width: '15vw',
        textTransform: 'none',
    }
}))
