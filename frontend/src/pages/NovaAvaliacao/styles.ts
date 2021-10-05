import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
  },
  title: {
    textTransform: 'uppercase',
    textAlign: 'center',
    color: `${theme.palette.secondary.main}`,
    fontWeight: 800,
  },
  titleContainer: {
    width: 'auto',
  },
  helpIcon: {
    position: 'relative',
    left: '57%',
    bottom: '22%',
  },
  formContainer: {
    width: '62vw',
  },
  avaliadorTitle: {
    textTransform: 'uppercase',
    backgroundColor: `${theme.palette.primary.main}`,
    color: 'white',
    fontWeight: 800,
    textAlign: 'center',
    margin: 0,
  },
}))
