import { CenterFocusStrong } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core'
import { sortAndDeduplicateDiagnostics } from 'typescript'

export const useStyles = makeStyles((theme) => ({
  backgroundAvaliacao: {
    borderRadius: '12px',
    marginBottom: '3%',
    marginTop: '3%',
    marginLeft: '5%',
    marginRight: '5%',
    backgroundColor: '#D6F0C8',
    border: '6px solid #175215',
  },

  titleEditarSecao: {
    textAlign: 'center',
    marginTop: '1%',
    fontFamily: 'OpenSans',
    fontWeight: 'bold',
    color: '#175215',
    fontSize: '35px',
  },

  gridButton: {
    justifyContent: 'center',
    display: 'flex',
    marginTop: '2%',
    marginBottom: '2%',
    backgroundColor: '#D6F0C8',
    color: '#FFFFF2',
    fontWeight: 'bold',
    fontFamily: 'sanserif',
  },

  designButton: {
    display: 'flex',
    marginLeft: '1%',
    marginRight: '1%',
    backgroundColor: '#2b7b24',
    width: '100px',
    borderRadius: '12px',
  },

  gridTable: {
    display: 'flex',
    marginTop: '2%',
    marginLeft: '3.8%',
    marginRight: '2%',
  },
}))
