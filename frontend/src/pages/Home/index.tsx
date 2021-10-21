import { Button } from '../../components/GlobalComponents/Inputs/Button'
import { Grid } from '@material-ui/core'
import { MPHeader } from '../../components/GlobalComponents/MPHeader'
import React , {  useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useStyles } from './styles'
import AuthContext from '../../context/auth'

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
  const {user} = useContext(AuthContext)
  
 
  // console.log(loginData.user)
  
  useEffect(() => {
    console.log('confia no pai',user)
  }, [user])
  /**
   * A página foi criada utilizando a ferramenta de layout responsivo do material-ui
   * @see https://material-ui.com/components/grid/
   */
  return (
    <><Grid container direction='column' spacing={2}>
      <Grid item>
        <MPHeader />
      </Grid>

    </Grid>
    <Grid container direction='column' className={classes.centralizar} spacing={1} >
        <Grid item>
          <Button variant="contained" className={classes.botao} onClick={() => history.push('NovaAvaliacao')}>
            Nova Avaliação
          </Button>
        </Grid>


        <Grid item>
          <Button variant="contained" className={classes.botao} onClick={() => history.push('avaliacao')}>
            Avaliações
          </Button>
        </Grid>


        <Grid item>
          <Button variant="contained" className={classes.botao} onClick={() => history.push('relatorio')}>
            Relatório
          </Button>
        </Grid>

        <Grid item>
          <Button variant="contained" className={classes.botao} onClick={() => history.push('gerenciador')}>
            Gerenciador
          </Button>
        </Grid>
      </Grid></>

  )
}
