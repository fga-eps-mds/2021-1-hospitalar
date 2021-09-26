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
        {' '}
        {/* cabeçalho */}
        <Grid item>
          <Header title='Preenchimento da avaliação' />
        </Grid>
      </Grid>

      {/* corpo */}
      <Grid className={classes.backgroundAvaliacao}>
        <Grid className={classes.textData}>dd/mm/aaaa</Grid>
        <Grid className={classes.idAvaliacao}>
          ID_AVALIAÇÃO
          {/* Aqui vai ser retornado o ID_Avaliacao guardado no banco de dados */}
        </Grid>
        <Grid className={classes.textInfoHosp}>
          <Grid className={classes.textNomeLabel}>Nome do Hospital:</Grid>
          <Grid className={classes.textNomeResp}>Nome do Hospital</Grid>
          <Grid className={classes.textSiglaLabel}>Sigla:</Grid>
          <Grid className={classes.textSiglaResp}>Sigla</Grid>
        </Grid>
        <Grid className={classes.textResponsavel}>
          <Grid className={classes.textResponsavelLabel}>Responsáveis</Grid>
          <Grid className={classes.textResponsavelResp}>Lista de responsáveis</Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
