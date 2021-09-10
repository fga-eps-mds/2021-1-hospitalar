import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    form: {
        '& .MuiFormControl-root': {
            margin: theme.spacing(1), 
        }
    },
    button: {
        margin: theme.spacing(1),
        width: '50%',
        backgroundColor: '#ade489',
        '&:hover': {
            backgroundColor: '#f7f7e8',
        }
    },
}))