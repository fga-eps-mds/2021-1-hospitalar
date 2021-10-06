import { CenterFocusStrong } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core'
import { sortAndDeduplicateDiagnostics } from 'typescript'

export const useStyles = makeStyles((theme) => ({
  title: {
    width: '80%',
  },

  botaovoltar: {
    height: '20px',
    marginTop: '400px',
  },

  backgroundAvaliacao: {
    paddingBottom: '5%',
    borderRadius: '12px',
    marginBottom: '10%',
    marginTop: '3%',
    marginLeft: '5%',
    marginRight: '5%',
    backgroundColor: '#fffff2',
    border: '6px solid #175215',
  },

  tituloEditar: {
    textAlign: 'center',
    marginTop: '1%',
    fontFamily: 'OpenSans',
    fontWeight: 'bold',
    color: '#175215',
    fontSize: '35px',
  },

  gridField: {
    display: 'flex',
    marginTop: '5%',
    marginLeft: '4.8%',
    marginRight: '1%',
  },

  textFieldDesign: {
    display: 'flex',
    width: '400px',
    borderRadius: '12px',
  },

  gridbotao: {
    display: 'flex',
    marginTop: '2%',
    marginLeft: '3.8%',
    marginRight: '2%',
  },

  botaodesign: {
    display: 'flex',
    marginLeft: '1%',
    marginRight: '1%',
    backgroundColor: '#2b7b24',
    width: '100px',
    borderRadius: '12px',
  },

  botaoAdd: {
    display: 'flex',
    marginTop: '5%',
    marginLeft: '85%',
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

  IconeEditar: {
    fontWeight: 'bold',
    backgroundColor: '#f7f7e8',
    border: '1px solid #000000',
    marginRight: '1%',
    width: '100%',
  },

  IconeLixeira: {
    fontWeight: 'bold',
    backgroundColor: '#f7f7e8',
    border: '1px solid #000000',
    marginRight: '1%',
    width: '100%',
  },

  itensTabela: {
    fontFamily: 'OpenSans',
    color: '#175215',
    marginTop: '2%',
    marginLeft: '5.4%',
  },

  tabelaGeral: {
    display: 'flex',
  },
}))