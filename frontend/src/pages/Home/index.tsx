import { Button } from '../../components/GlobalComponents/Inputs/Button'
import { Grid } from '@material-ui/core'
import { Header } from '../../components/GlobalComponents/Header'
import React from 'react'
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
  /**
   * A página foi criada utilizando a ferramenta de layout responsivo do material-ui
   * @see https://material-ui.com/components/grid/
   */
  return (
    <><Grid container direction='column' spacing={2}>
      <Grid item>
        <Header
          links={[
            { texto: 'Home', link: '/' },
            { texto: 'Nova Avaliação', link: '/NovaAvaliacao' },
            { texto: 'Avaliações', link: '/avaliacao' },
            { texto: 'Relatórios', link: '/relatorio' },
          ]} />
      </Grid>

    </Grid>
    <Grid container direction='column' className={classes.centralizar} spacing={1} >
        <Grid item>
          <Button onClick={() => history.push('relatorio')}>Página gerar relatorio</Button>
        </Grid>
        <Grid item>
          <Button onClick={() => history.push('NovaAvaliacao')}>
            Página nova avaliação
          </Button>
        </Grid>
      </Grid></>

  )
}
