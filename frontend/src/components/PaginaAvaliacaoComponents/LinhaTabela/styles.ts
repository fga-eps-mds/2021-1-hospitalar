import { makeStyles } from '@material-ui/core'

// eslint-disable-next-line no-unused-vars
export const useStyles = makeStyles((theme) => ({
  /* style do Numero(ID) do subtopico */
  designNumber: {
    fontFamily: 'OpenSans',
    color: '#000000',
    textAlign: 'center',
    fontSize: '20px',
  },
  /* texfield do nome */
  configTextFieldName: {
    width: 340,
  },
  /* textfield da pontuação */
  configPunctuation: {
    width: 40,
  },
  /* textfield do comentario */
  configComentary: {
    width: 340,
  },
  /* design da caixa de dialogo */
  designDialog: {
    border: '6px solid #175215',
  },
  /* titulo da caixa de dialogo */
  textDialogTitle: {
    fontFamily: 'OpenSans',
  },
  /* texto da caixa de dialogo */
  textDialogBox: {
    fontFamily: 'OpenSans',
    fontSize: '19px',
  },

  /* botao de cancelar da caixa de dialogo */
  dialogCancelDesign: {
    fontFamily: 'OpenSans',
    '&:hover': {
      background: '#B72C2C',
    },
  },
  /* botao de confirmação da caixa de dialogo */
  dialogConfirmDesign: {
    fontFamily: 'OpenSans',
    '&:hover': {
      background: '#65B639',
    },
  },
}))
