import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  iconSpace: {
    position: 'absolute',
    right: '1vw',
    marginTop: '1.2vh',
  },
  iconPerfil: {
    maxHeight: '7vh',
  },
  barraTopo: {
    height: '10vh',
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    marginTop: '0vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnHome0: {
    backgroundColor: 'none',
    width: '10vw',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Open Sans',
  },
  btnHome1: {
    backgroundColor: 'none',
    width: '10vw',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Open Sans',
  },
  btnHome2: {
    backgroundColor: 'none',
    width: '10vw',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Open Sans',
  },
  btnHome3: {
    backgroundColor: 'none',
    width: '10vw',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Open Sans',
  },
  tituloBarraTopo: {
    color: 'white',
    textAlign: 'center',
    verticalAlign: 'middle',
    marginTop: '3vh',
  },
  imagem: {
    height: '15vh',
  },
}))
