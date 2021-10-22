import { Grid } from '@material-ui/core'
import React from 'react'

/**
 * Um componente funcional React compatível com React Hooks.
 * Siga o padrão descrito no markdown do frontend.
 *
 * @returns JSX.Element
 * @see https://pt-br.reactjs.org/docs/hooks-reference.html#basic-hooks
 */
export function Gerenciador(): React.ReactElement {
  /**
   * A página foi criada utilizando a ferramenta de layout responsivo do material-ui
   * @see https://material-ui.com/components/grid/
   */
  return (
    <>
      <Grid item>
        <h1> Hello World</h1>
      </Grid>
    </>
  )
}
