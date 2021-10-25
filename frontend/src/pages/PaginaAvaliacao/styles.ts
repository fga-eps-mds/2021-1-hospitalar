import { makeStyles } from '@material-ui/core'

// eslint-disable-next-line no-unused-vars
export const useStyles = makeStyles((theme) => ({
  /* background geral */
  backgroundAvaliacao: {
    backgroundColor: '#D6F0C8',
    borderRadius: '12px',
    marginTop: '3%',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '3%',
    border: '6px solid #175215',
  },
  /* texto da data */
  textData: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'OpenSans',
    color: '#000000',
    marginTop: '2%',
    marginLeft: '4%',
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

  /* styles do nome do hospital */
  textNomeResp: {
    textAlign: 'center',
    marginTop: '2%',
    marginBottom: '2%',
    fontFamily: 'OpenSans',
    fontWeight: 'bold',
    color: '#000000',
    fontSize: '50px',
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
    fontFamily: 'OpenSans',
    color: '#000000',
    marginTop: '2%',
    marginLeft: '3%',
    fontSize: '20px',
  },
  /* texto da sigla */
  textSigla: {
    display: 'flex',
    fontFamily: 'OpenSans',
    color: '#000000',
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
    fontFamily: 'OpenSans',
    color: '#000000',
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

  /* style dos botoes */
  gridButton: {
    justifyContent: 'center',
    display: 'flex',
    marginTop: '2%',
    marginBottom: '2%',
    marginLeft: '1%',
    color: '#FFFFF2',
    fontWeight: 'bold',
    fontFamily: 'OpenSans',
  },

  /* style do titulo da seção */
  titleSection: {
    fontWeight: 'bold',
    fontSize: '17.5px',
  },

  /* style dos botoes */
  gridButtonSalvar: {
    marginRight: '2%',
    color: '#175215',
  },

  /* style do botão de salvar avaliação */
  salveBotton: {
    fontFamily: 'OpenSans',

    borderRadius: '12px',
    cursor: 'pointer',
    backgroundColor: '#ADFF98',
    fontWeight: 'bold',
    '&:hover': {
      background: '#E4FFDD',
    },
    fontSize: '20px',
  },

  /* style do botão de adicionar subtopico */
  addButton: {
    borderRadius: '12px',
    marginTop: '1%',
    marginBottom: '1%',
    padding: '1%',
  },

  designDialog: {
    border: '6px solid #175215',
  },

  textDialogTitle: {
    fontFamily: 'OpenSans',
  },

  textDialogBox: {
    fontFamily: 'OpenSans',
    fontSize: '19px',
  },

  /* style do botão de adicionar subtopico */
  dialogCancelDesign: {
    fontFamily: 'OpenSans',
    '&:hover': {
      background: '#B72C2C',
    },
  },

  dialogConfirmDesign: {
    fontFamily: 'OpenSans',
    '&:hover': {
      background: '#65B639',
    },
  },
}))
