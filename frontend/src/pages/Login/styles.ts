import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  login: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
    },
    height: '60vh',
    width: '55vw',
    border: `6px solid ${theme.palette.primary.main}`,
    borderRadius: '10px',
    backgroundColor: '#D6F0C8',
  },
  image: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  container: {
    height: '100%',
    position: 'fixed',
  },
  titleContainer: {
    paddingBottom: '50px',
    backgroundColor: '#FFFEF2',
    color: theme.palette.primary.main,
  },
  line: {
    width: '11vw',
    marginBottom: '1vw',
    height: '0px',
    border: `2px solid ${theme.palette.primary.main}`,
  },
  loginContainer: {
    minHeight: '100vh',
    backgroundColor: '#FFFEF2',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  loginText: {
    paddingBottom: '50px',
  },
  emailText: {
    width: '18vw',
    paddingBottom: '20px',
  },
  senhaText: {
    width: '18vw',
    paddingBottom: '30px',
  },
}))
