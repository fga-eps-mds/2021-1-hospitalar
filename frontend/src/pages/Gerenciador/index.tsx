import { CONFIG, authApi } from '../../api'
import { Grid, TextField } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'

import AuthContext from '../../context/auth'
import { Button } from '../../components/GlobalComponents/Inputs/Button'
import { Header } from '../../components/GlobalComponents/Header'
import { SearchRounded } from '@material-ui/icons'
import { Usuario } from '../../types/Usuario'
import { UsuarioGerenciador } from '../../components/UsuarioGerenciador'
import { useStyles } from './styles'

/**
 * Um componente funcional React compatível com React Hooks.
 * Siga o padrão descrito no markdown do frontend.
 *
 * @returns JSX.Element
 * @see https://pt-br.reactjs.org/docs/hooks-reference.html#basic-hooks
 */
export function Gerenciador(): React.ReactElement {
  const [toggleState, setToggleState] = useState(1)
  const classes = useStyles()
  const context = useContext(AuthContext)

  const [users, setUsers] = useState<Usuario[]>([])

  useEffect(() => {
    authApi
      .get<Usuario[]>('user_list/', CONFIG(context.token))
      .then(({ data }) => setUsers(data))
      // eslint-disable-next-line no-console
      .catch(console.log)
  }, [])

  /**
   * A página foi criada utilizando a ferramenta de layout responsivo do material-ui
   * @see https://material-ui.com/components/grid/
   */
  return (
    <>
      <Grid container>
        <Grid container>
          <Header
            links={[
              { texto: 'Home', link: '/Home' },
              { texto: 'Nova Avaliação', link: '/NovaAvaliacao' },
              { texto: 'Avaliações', link: '/avaliacao' },
              { texto: 'Relatórios', link: '/relatorio' },
            ]}
          />
        </Grid>

        <Grid container>
          <Grid container justifyContent='space-between'>
            <Grid item>
              <Button
                variant='text'
                className={classes.botao}
                onClick={() => setToggleState(1)}
              >
                Usuários
              </Button>

              <Button
                variant='text'
                className={classes.botao}
                onClick={() => {
                  setToggleState(2)
                }}
              >
                Avaliações
              </Button>
            </Grid>

            <Grid item className={classes.input}>
              <TextField variant='standard' />
              <SearchRounded className={classes.icon} />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          className={toggleState === 1 ? classes.teste1 : classes.teste}
          direction='row'
          alignItems='center'
          justifyContent='center'
        >
          {users.map((user) => (
            <UsuarioGerenciador user={user} />
          ))}
        </Grid>

        <Grid container className={toggleState === 2 ? classes.teste2 : classes.teste}>
          <h1> Avaliações </h1>
        </Grid>
      </Grid>
    </>
  )
}
