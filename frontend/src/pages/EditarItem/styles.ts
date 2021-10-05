import { CenterFocusStrong } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core'
import { sortAndDeduplicateDiagnostics } from 'typescript'

export const useStyles = makeStyles((theme) => ({
  title: {
    width: '80%',
  },
  text: {
    backgroundColor: '#D6F0C8',
    textAlign: 'center',
    fontFamily: 'OpenSans',
    color: '#175215',
  },
  form: {
    margin: 'auto',
    marginTop: '40px',
    width: '35%',
    backgroundColor: theme.palette.primary.main,
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
    height: '20px',
    marginTop: '400px',
  },

  backgroundAvaliacao: {
    paddingBottom: '10%',
    borderRadius: '12px',
    marginBottom: '20%',
    marginTop: '5%',
    marginLeft: '10%',
    marginRight: '10%',
    backgroundColor: '#D6F0C8',
    border: '6px solid #175215',
  },

  tituloEditar: {
    backgroundColor: '#D6F0C8',
    textAlign: 'center',
    marginTop: '1%',
    fontFamily: 'OpenSans',
    fontWeight: 'bold',
    color: '#175215',
    fontSize: '35px',
  },

  textData: {
    backgroundColor: '#D6F0C8',
    fontFamily: 'OpenSans',
    color: '#175215',
    marginTop: '2%',
    marginLeft: '3%',
  },

  textInfoHosp: {
    display: 'flex',
    backgroundColor: '#D6F0C8',
    fontFamily: 'OpenSans',
    color: '#175215',
    marginTop: '2%',
    marginLeft: '3%',
  },

  textNomeLabel: {
    marginLeft: '1%',
    fontWeight: 'bold',
  },

  textNomeResp: {
    marginLeft: '1%',
  },

  textSiglaLabel: {
    marginLeft: '60%',
    fontWeight: 'bold',
  },

  textSiglaResp: {
    marginLeft: '1%',
    marginRight: '1%',
  },

  textResponsavel: {
    display: 'flex',
    backgroundColor: '#D6F0C8',
    fontFamily: 'OpenSans',
    color: '#175215',
    marginTop: '2%',
    marginLeft: '3%',
  },

  textResponsavelLabel: {
    marginLeft: '1%',
    fontWeight: 'bold',
  },

  textResponsavelResp: {
    marginLeft: '1%',
  },

  gridbotao: {
    display: 'flex',
    marginTop: '5%',
    marginLeft: '2.8%',
    marginRight: '1%',
  },

  botaodesign: {
    display: 'flex',
    marginTop: '5%',
    marginLeft: '1%',
    marginRight: '1%',
    backgroundColor: '#2b7b24',
    width: '100px',
    borderRadius: '12px',
  },

  botaoAdd: {
    display: 'flex',
    marginTop: '5%',
    marginLeft: '90%',
    marginRight: '1%',
    backgroundColor: '#2b7b24',
    width: '100px',
    borderRadius: '12px',
  },

  GeralNumero: {
    fontFamily: 'OpenSans',
    color: '#175215',
    marginTop: '2%',
    marginLeft: '5%',
  },

  textNumerobordasuperior: {
    fontWeight: 'bold',
    backgroundColor: '#f7f7e8',
    border: '1px solid #000000',
    textAlign: 'center',
    marginLeft: '1%',
    borderRadius: '5px 0px 0px 0px',
  },

  textNumero3bordainferior: {
    fontWeight: 'bold',
    backgroundColor: '#f7f7e8',
    border: '1px solid #000000',
    textAlign: 'center',
    marginLeft: '1%',
    borderRadius: '0px 0px 0px 5px',
  },

  textNumero2: {
    fontWeight: 'bold',
    backgroundColor: '#f7f7e8',
    border: '1px solid #000000',
    textAlign: 'center',
    marginLeft: '1%',
  },

  GeralTexto: {
    fontFamily: 'OpenSans',
    color: '#175215',
    marginTop: '2%',
    textAlign: 'center',
  },

  TextoEscrito: {
    fontWeight: 'bold',
    backgroundColor: '#f7f7e8',
    border: '1px solid #000000',
    marginRight: '1%',
    width: '100%',
  },

  TextoEscritoBordaSuperior: {
    fontWeight: 'bold',
    backgroundColor: '#f7f7e8',
    border: '1px solid #000000',
    marginRight: '1%',
    width: '100%',
    borderRadius: '0px 5px 0px 0px',
  },

  TextoEscritoBordaInferior: {
    fontWeight: 'bold',
    backgroundColor: '#f7f7e8',
    border: '1px solid #000000',
    marginRight: '1%',
    width: '100%',
    borderRadius: '0px 0px 5px 0px',
  },

  tabelaGeral: {
    display: 'flex',
  },
}))
