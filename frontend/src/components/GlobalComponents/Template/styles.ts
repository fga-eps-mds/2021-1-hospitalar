import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  divBackground: {
    backgroundColor: '#fefef4',
    width: '100%',
    height: '100%',
  },
  contentBox: {
    maxWidth: '60vw',
    border: `3px solid ${theme.palette.primary.main}`,
    borderRadius: '8px',
    backgroundColor: '#d5eec9',
    marginTop: '15px',
    minHeight: '350px',
  },
  famil: {
    color: `${theme.palette.primary.main}`,
    textDecoration: 'underline',
    textDecorationThickness: '4px',
  },
}))
