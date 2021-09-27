import { makeStyles } from '@material-ui/core'

/**
 * Utilizo do tema para atribuir as cores corretas
 */
export const useStyles = makeStyles((theme) => ({
  title: {
    borderStyle: 'solid',
    borderWidth: '3px',
    borderRadius: '5px',
    borderColor: theme.palette.primary.main,
  },
  form: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '10px',
  },
  textContainer: {
    backgroundColor: '#f7f7e8',
    paddingTop: '25px',
    paddingBottom: '50px',
    borderRadius: '10px',
    marginTop: '150px',
  },
}))
