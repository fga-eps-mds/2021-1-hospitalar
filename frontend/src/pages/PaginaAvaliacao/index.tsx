import { Box, Grid, Typography } from '@material-ui/core'

import { Button } from '../../components/GlobalComponents/Inputs/Button'
import { Form } from '../../components/GlobalComponents/Forms/Form'
import { Header } from '../../components/GlobalComponents/Header'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useStyles } from './styles'

export function PaginaAvaliacao(): React.ReactElement {
  const classes = useStyles()

  /**
   * Vai fazer a transição de páginas para a próxima página
   * É necessario inicializar o history.
   */
  const history = useHistory()

  const voltar = () => {
    console.log('voltando')
  }

  /**
   * A página foi criada utilizando a ferramenta de layout responsivo do material-ui
   * @see https://material-ui.com/components/grid/
   */
  return (
    <Grid>
      <Grid container direction='column' spacing={2}>
        <Grid item>
          <Header title='Nova avaliação' />
        </Grid>
      </Grid>

      <Box>
        <Grid
          container
          direction='column'
          justifyContent='flex-start'
          alignItems='center'
        >
          <Box mb='30px'>
            <Typography variant='h3' align='center'>
              Nova Avaliação
            </Typography>
          </Box>
          <Grid container direction='column' spacing={2} alignItems='center' id='grid2'>
            <Button size='small' onClick={voltar} className={classes.botaovoltar}>
              voltar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  )
}
