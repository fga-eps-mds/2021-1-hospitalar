import { makeStyles } from "@material-ui/core";
import { displayPartsToString } from "typescript";

export const useStyles = makeStyles((theme) => ({

    teste1: {
        height: '60vh',
        width: '55vw',
        border: '2px solid #175215',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'column wrap',
    },
    login: {
        [theme.breakpoints.down('sm')]: {
            display:"flex",
            justifyContent: 'center',
        }
    },
    image: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    }
}))