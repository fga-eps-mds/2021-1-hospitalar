import { Button } from '../../components/GlobalComponents/Inputs/Button'
import { Grid } from '@material-ui/core'
import { Header } from '../../components/GlobalComponents/Header'
import React , { useState , useEffect , useContext } from 'react'
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
export function Gerenciador(): React.ReactElement {
  const [toggleState, setToggleState] = useState(1);


  const history = useHistory()
  const classes = useStyles()


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
                <Button className={classes.botao} onClick={() => setToggleState(1)}>
                  Usuarios
                </Button>
              </Grid>


              <Grid item>
                <Button className={classes.botao} onClick={() => {setToggleState(2)} }>
                  Avaliacoes
                </Button>
              </Grid>
            </Grid>


            <Grid container className={toggleState === 1 ? classes.teste1 : classes.teste}>
              <h1>Conteúdo 1</h1>
            </Grid>

            <Grid container className={toggleState === 2 ? classes.teste2 : classes.teste}>
              <h1> Conteúdo 2</h1>
            </Grid>
        </Grid>
    </>

  )
}
