import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    container: {
        width: '22vw',
        height: '21vh',
        border: `6px solid ${theme.palette.primary.main}`,
        borderRadius: '10px',
        backgroundColor: '#D6F0C8',
        margin: '2%',
        [theme.breakpoints.down('sm')]: {
            width: '32vw',
            height: '30vh',
        }
    },
    inf: {
        paddingLeft: '0.5vw',
    },
    btnContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    }
}))