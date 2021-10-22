import { Button } from '../../components/GlobalComponents/Inputs/Button'
import { Grid } from '@material-ui/core'
import { MPHeader } from '../../components/GlobalComponents/MPHeader'
import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useStyles } from './styles'
import AuthContext from '../../context/auth'
import { authApi } from '../../api'

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
  const { user, token, logout } = useContext(AuthContext)
  const [teste, setTeste] = useState<any>()

  // console.log(loginData.user)

  // useEffect(() => {
  //  const teste = user
  //  const teste2 = token
  //  console.log(teste)
  //  console.log(token)
  // }, [user])

  async function handleTeste() {
    try {
      const response = await authApi.get('user/', {
        headers: {
          Authorization: `Token ${token}`,
        },
      })

      if(response.data.admin === true) history.push('/gerenciador')

      // console.log(response.data.admin)
    } catch (error) {
      console.error(error)
    }
  }

  //  async function handleLogout() {
    //  try {
      //  const response = await authApi.get('logout')// , {
          // headers: {
            // Authorization: `Token ${token}`,
          // },
        // })

      //  if(response.data !== null) history.push('/')
  
     // } catch (error) {
      //  console.error(error)
     // }
    // }

  function handleLogout() {
    logout()
    if (user === null) history.push('/')
  }

  /**
   * A página foi criada utilizando a ferramenta de layout responsivo do material-ui
   * @see https://material-ui.com/components/grid/
   */
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
