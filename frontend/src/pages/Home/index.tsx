import { Button } from '../../components/GlobalComponents/Inputs/Button'
import { Grid } from '@material-ui/core'
import { Header } from '../../components/GlobalComponents/Header'
import React from 'react'
import { useHistory } from 'react-router-dom'

/**
 * Um componente funcional React compatível com React Hooks.
 * Siga o padrão descrito no markdown do frontend.
 *
 * @returns JSX.Element
 * @see https://pt-br.reactjs.org/docs/hooks-reference.html#basic-hooks
 */
export function Home(): React.ReactElement {
  const history = useHistory()
  /**
   * A página foi criada utilizando a ferramenta de layout responsivo do material-ui
   * @see https://material-ui.com/components/grid/
   */
  return (
    <Grid container direction='column' spacing={2}>
      <Grid item>
        <Header title='Home Page' />
      </Grid>
      <Grid item>
        <Button onClick={() => history.push('relatorio')}>Página gerar relatorio</Button>
      </Grid>
      <Grid item>
        <Button onClick={() => history.push('NovaAvaliacao')}>
          Página nova avaliação
        </Button>
      </Grid>
    </Grid>
  )
}
