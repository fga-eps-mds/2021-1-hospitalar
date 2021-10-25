import { makeStyles } from '@material-ui/core'

// eslint-disable-next-line no-unused-vars
export const useStyles = makeStyles((theme) => ({
  designNumber: {
    fontFamily: 'OpenSans',
    color: '#000000',
    textAlign: 'center',
    fontSize: '20px',
  },
  configTextFieldName: {
    width: 340,
  },
  configPunctuation: {
    width: 40,
  },
  configComentary: {
    width: 340,
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
