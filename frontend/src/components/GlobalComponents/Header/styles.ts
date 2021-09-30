import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: '8vh',
  },
  imgLogo: {
    height: 100,
    width: 90,
    position: 'absolute',
    top: 2,
    left: 0,
    right: 0,
    margin: 'auto',
  },
  imgUser: {
    height: 30,
    width: 30,
    [theme.breakpoints.up('sm')]: {
      height: 50,
      width: 50,
      position: 'absolute',
    },
  },
  linksContainer: {
    display: 'none',
    paddingLeft: '10vh',
    paddingRight: '10vh',

    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flex: 1,
      justifyContent: 'space-between',
    },
  },
  drawer: {
    background: theme.palette.secondary.main,
  },
  linksContainerDrawer: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '1vh',
    paddingRight: '1vh',
  },
  fullScreen: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  mobileScreen: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}))
