import { Button, Grid } from '@material-ui/core'

import React from 'react'
import { Usuario } from '../../types/Usuario'
import { useStyles } from './styles'

type Props = {
  user: Usuario
}

export function UsuarioGerenciador({ user }: Props): React.ReactElement {
  const classes = useStyles()
  return (
    <>
      <Grid container className={classes.container}>
        <Grid container className={classes.inf}>
          <Grid item>
            <h3> Nome: {user.nome} </h3>
            <h3> Função: {user.funcao}</h3>
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
