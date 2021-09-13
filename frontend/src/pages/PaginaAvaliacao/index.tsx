import { Box, Grid, Typography } from '@material-ui/core'
import React, { useState } from 'react'

import { Button } from '../../components/GlobalComponents/Inputs/Button'
import { Form } from '../../components/GlobalComponents/Forms/Form'
import { Header } from '../../components/GlobalComponents/Header'
import { TextField } from '../../components/GlobalComponents/Inputs/TextField'
import { useHistory } from 'react-router-dom'
import { useStyles } from './styles'

export function PaginaAvaliacao(): React.ReactElement {
  /**
   * A página foi criada utilizando a ferramenta de layout responsivo do material-ui
   * @see https://material-ui.com/components/grid/
   */

  const classes = useStyles()

  const history = useHistory()

  /**
   * Vai fazer a transição de páginas para a próxima página
   * É necessario inicializar o history.
   */

  const handleClickNovaPagina = () => {
    history.push('/NovaAvaliacao/Adicao')
  }

  const voltar = () => {
    console.log('voltando')
  }

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
          <Form>
            <Grid container direction='column' spacing={2} alignItems='center' id='grid'>
              <Button size='medium' onClick={handleClickNovaPagina}>
                Adicionar avaliação
              </Button>
            </Grid>
          </Form>
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
