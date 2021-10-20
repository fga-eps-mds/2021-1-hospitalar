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
export function Gerenciador(): React.ReactElement {
  const history = useHistory()

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
              <Grid item>
                <Button onClick={() => alert("Usuarios")}>
                  Usuarios
                </Button>
              </Grid>

              <Grid item>
                <Button onClick={() => alert("Avaliacoes")}>
                  Avaliacoes
                </Button>
              </Grid>
            </Grid>
        </Grid>
    </>

  )
}
