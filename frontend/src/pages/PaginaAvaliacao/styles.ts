import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  /* background geral */
  backgroundAvaliacao: {
    borderRadius: '12px',
    marginTop: '3%',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '3%',
    backgroundColor: '#D6F0C8',
    border: '6px solid #175215',
  },
  /* texto da data */
  textData: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#D6F0C8',
    fontFamily: 'OpenSans',
    color: '#175215',
    marginTop: '2%',
    marginLeft: '4%',
    fontSize: '20px',
  },

  /* styles do nome do hospital */
  textNomeResp: {
    backgroundColor: '#D6F0C8',
    textAlign: 'center',
    marginTop: '1%',
    fontFamily: 'OpenSans',
    fontWeight: 'bold',
    color: '#175215',
    fontSize: '35px',
  },

  /* label da nome */
  textNomeLabel: {
    marginLeft: '1%',
    fontWeight: 'bold',
    fontSize: '20px',
  },
  /* texto da id */
  idAvaliacao: {
    marginLeft: '1%',
    fontSize: '20px',
  },
  /* styles para as informações do id do hospital */
  textInfoHosp: {
    display: 'flex',
    backgroundColor: '#D6F0C8',
    fontFamily: 'OpenSans',
    color: '#175215',
    marginTop: '2%',
    marginLeft: '3%',
    fontSize: '20px',
  },
  /* texto da sigla */
  textSigla: {
    display: 'flex',
    backgroundColor: '#D6F0C8',
    fontFamily: 'OpenSans',
    color: '#175215',
    marginTop: '2%',
    marginLeft: '3%',
    fontSize: '20px',
  },
  /* texto da label da sigla */
  textSiglaLabel: {
    marginLeft: '1%',
    fontWeight: 'bold',
    fontSize: '20px',
  },
  /* texto da sigla do hospital */
  textSiglaResp: {
    marginLeft: '1%',
    marginRight: '1%',
    fontSize: '20px',
  },

  /* texto da lista de responsaveis */
  textResponsavel: {
    display: 'flex',
    backgroundColor: '#D6F0C8',
    fontFamily: 'OpenSans',
    color: '#175215',
    marginTop: '2%',
    marginLeft: '3%',
    fontSize: '20px',
  },
  /* styles da label de responsaveis */
  textResponsavelLabel: {
    marginLeft: '1%',
    fontWeight: 'bold',
    fontSize: '20px',
  },

  /* texto da label de responsaveis */
  textResponsavelResp: {
    marginLeft: '1%',
    fontSize: '20px',
  },

  /* titulo de editar avaliação */
  titleEditarAvaliacao: {
    textAlign: 'center',
    marginTop: '1%',
    fontFamily: 'OpenSans',
    fontWeight: 'bold',
    color: '#175215',
    fontSize: '35px',
  },

  /* style dos botoes */
  gridButton: {
    justifyContent: 'center',
    display: 'flex',
    marginTop: '2%',
    marginBottom: '2%',
    backgroundColor: '#D6F0C8',
    color: '#FFFFF2',
    fontWeight: 'bold',
    fontFamily: 'OpenSans',
  },

  /* style do botão de adicionar */
  addButton: {
    marginTop: '1%',
    marginBottom: '1%',
    padding: '1%',
  },

  salveBotton: {
    padding: '1%',
    marginRight: '2%',
    border: '3.5px solid #175215',
  },

  /* style botão de adicionar */
  titleSection: {
    fontWeight: 'bold',
    fontSize: '17.5px',
  },
}))
