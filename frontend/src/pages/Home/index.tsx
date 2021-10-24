import React, { useContext, useEffect } from 'react'

import AuthContext from '../../context/auth'
import { Button } from '../../components/GlobalComponents/Inputs/Button'
import { Grid } from '@material-ui/core'
import { MPHeader } from '../../components/GlobalComponents/MPHeader'
import { authApi } from '../../api'
import { useHistory } from 'react-router-dom'
import { useStyles } from './styles'

/**
 * Um componente funcional React compatível com React Hooks.
 * Siga o padrão descrito no markdown do frontend.
 *
 * @returns JSX.Element
 * @see https://pt-br.reactjs.org/docs/hooks-reference.html#basic-hooks
 */
export function Home(): React.ReactElement {
  const history = useHistory()
  const classes = useStyles()
  const context = useContext(AuthContext)

  async function handleTeste() {
    try {
      const response = await authApi.get('user/', {
        headers: {
          Authorization: `Token ${context.token}`,
        },
      })

      if (response.data.admin === true) {
        history.push('/gerenciador')
      } else {
        alert('Você não tem permissão para entrar')
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function handleLogout() {
    await context.logout()
    history.replace('/')
  }

  return (
    <>
      <Grid container direction='column' spacing={2}>
        <Grid item>
          <MPHeader />
        </Grid>
      </Grid>
      <Grid container direction='column' className={classes.centralizar} spacing={1}>
        <Grid item>
          <Button
            variant='contained'
            className={classes.botao}
            onClick={() => history.push('NovaAvaliacao')}
          >
            Nova Avaliação
          </Button>
        </Grid>

        <Grid item>
          <Button
            variant='contained'
            className={classes.botao}
            onClick={() => history.push('avaliacao')}
          >
            Avaliações
          </Button>
        </Grid>

        <Grid item>
          <Button
            variant='contained'
            className={classes.botao}
            onClick={() => history.push('relatorio')}
          >
            Relatório
          </Button>
        </Grid>

        <Grid item>
          <Button
            variant='contained'
            className={classes.botao}
            // onClick={() => history.push('gerenciador')}
            onClick={() => handleTeste()}
          >
            Gerenciador
          </Button>
        </Grid>

        <Grid item>
          <Button
            variant='contained'
            className={classes.botao}
            // onClick={() => history.push('gerenciador')}
            onClick={() => handleLogout()}
          >
            Deslogar
          </Button>
        </Grid>
      </Grid>
    </>
  )
}
