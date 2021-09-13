  
import { Grid } from '@material-ui/core'
import React from 'react'
import { Header } from '../../components/GlobalComponents/Header'

/**
 * Um componente funcional React compatível com React Hooks.
 * Siga o padrão descrito no markdown do frontend.
 *
 * @returns JSX.Element
 * @see https://pt-br.reactjs.org/docs/hooks-reference.html#basic-hooks
 */
export const Home: React.FC = () => {
  /**
   * A página foi criada utilizando a ferramenta de layout responsivo do material-ui
   * @see https://material-ui.com/components/grid/
   */
  return (
    <Grid container direction='column' spacing={2}>
      <Grid item>
        <Header title='Home Page' />
      </Grid>
    </Grid>
  )
}