import { Box, Grid, Typography } from '@material-ui/core'
import React, { useState } from 'react'

import { Button } from '../../components/GlobalComponents/Inputs/Button'
import { Form } from '../../components/GlobalComponents/Forms/Form'
import { Header } from '../../components/GlobalComponents/Header'
import { TextField } from '../../components/GlobalComponents/Inputs/TextField'
import { useHistory } from 'react-router-dom'
import { useStyles } from './styles'

export function PaginaAddItem(): React.ReactElement {
  /**
   * A página foi criada utilizando a ferramenta de layout responsivo do material-ui
   * @see https://material-ui.com/components/grid/
   */

  const classes = useStyles()

  const history = useHistory()

  /**
   * Vai fazer a transição de páginas para a página anterior
   * É necessario inicializar o history.
   */

  const handleBackPage = () => {
    history.goBack()
  }

  const handleClick = () => {
    console.log('teste')
  }

  const voltar = () => {
    console.log('voltando')
  }
  return (
    <Grid>
      <Grid container direction='column' spacing={2}>
        <Grid item>
          <Header title='testando-adicao' />
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
              Testando
            </Typography>
          </Box>
          <Form>
            <Grid container direction='column' spacing={2} alignItems='center' id='grid'>
              <Button size='medium' onClick={handleClick}>
                Adicionar avaliação
              </Button>
            </Grid>
          </Form>
          <Grid container direction='column' spacing={2} alignItems='center' id='grid2'>
            <Button size='small' onClick={handleBackPage} className={classes.botaovoltar}>
              voltar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  )
}
