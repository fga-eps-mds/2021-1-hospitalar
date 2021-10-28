import React from "react";
import { Grid , Button } from '@material-ui/core'
import { useStyles } from './styles'

export function UsuarioGerenciador(): React.ReactElement {
    const classes = useStyles()
    return(
        <>
            <Grid container className={classes.container}>
                <Grid container className={classes.inf}>
                    <Grid item>
                        <h3> Nome: Gabriel </h3>
                        <h3> Função: Avaliador </h3>
                    </Grid>
                </Grid>

                <Grid container className={classes.btnContainer}>
                    <Grid item>
                        <Button onClick={() => alert('Editado')}> Editar </Button>
                    </Grid>

                    <Grid item> 
                        <Button onClick={() => alert('Excluido')}> Excluir </Button>
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}