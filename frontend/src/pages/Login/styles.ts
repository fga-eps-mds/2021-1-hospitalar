import { makeStyles } from "@material-ui/core";
import { displayPartsToString } from "typescript";

export const useStyles = makeStyles((theme) => ({

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