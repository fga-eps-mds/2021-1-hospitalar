import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    padding: 0,
  },
  title: {
    textTransform: 'uppercase',
    textAlign: 'center',
    marginLeft: '15vw',
    color: `${theme.palette.secondary.main}`,
    fontWeight: 800,
  },
  titleContainer: {
    width: '100%',
  },
  helpIcon: {
    position: 'relative',
    bottom: '2vh',
  },
  formContainer: {
    width: '60vw',
  },
  avaliadorTitle: {
    textTransform: 'uppercase',
    backgroundColor: `${theme.palette.secondary.main}`,
    color: 'white',
    fontWeight: 800,
    textAlign: 'center',
    margin: 0,
  },
  inputText: {
    fontSize: '5px',
  },
  imgLogo: {
    height: 100,
    width: 90,
    margin: 'auto',
    display: 'None',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      marginBottom: '11.7vh',
    },
  },
  generateBtn: {
    textTransform: 'uppercase',
    borderRadius: '15px',
    fontWeight: 800,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
      top: '12vh',
    },
    [theme.breakpoints.down('md')]: {
      display: 'None',
    },
  },
  generateBtn2: {
    textTransform: 'uppercase',
    borderRadius: '15px',
    fontWeight: 800,
    display: 'None',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      width: '40vw',
    },
  },
}))
