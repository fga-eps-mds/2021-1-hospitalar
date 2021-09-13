import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  title: {
    width: '80%',
  },
  text: {
    width: '75%',
  },
  form: {
    margin: 'auto',
    marginTop: '40px',
    width: '35%',
    backgroundColor: '#29991a',
    height: '300px',
    borderRadius: '10px',
    paddingTop: '15px',
  },
  textContainer: {
    margin: 'auto',
    width: '80%',
    backgroundColor: '#f7f7e8',
    paddingTop: '25px',
    paddingBottom: '50px',
    borderRadius: '10px',
    marginBottom: '40px',
  },

  botaovoltar: {
    alignItems: 'center',
    marginTop: '50px',
  },

  texto_qualificacao: {
    marginTop: '20px',
    marginLeft: '20px',
  },
}))
