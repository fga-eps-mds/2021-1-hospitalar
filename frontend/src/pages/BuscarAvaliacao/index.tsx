import { Header } from '../../components/GlobalComponents/Header'
import React, { useEffect, useState } from 'react'
import { useStyles } from './styles'
import { SearchRounded } from '@material-ui/icons'
import { Box, Button, Grid, IconButton } from '@material-ui/core'
import { useHistory, useParams } from 'react-router-dom'
import { Avaliacao } from '../../types/Avaliacao'
import { api } from '../../api'

type Props = {
  idAvaliacao: string
}

export function BuscarAvaliacao(): React.ReactElement {
  const classes = useStyles()
  const history = useHistory()
  const [id, setId] = useState('')
  const { idAvaliacao } = useParams<Props>()

  const buscarAvaliacao = () => {
    history.push(`/avaliacao/${id}`)
  }

  return (
    <>
      <div className={classes.barraFundo} />
      <Header
        links={[
          { texto: 'Home', link: '/Home' },
          { texto: 'Nova Avaliação', link: '/NovaAvaliacao' },
          { texto: 'Avaliações', link: '/avaliacao' },
          { texto: 'Relatórios', link: '/relatorio' },
        ]}
      />
      <div className={classes.barraUm} />
      <div className={classes.barraQuatro}>
        <h1 className={classes.tituloEntradaCodigo}>BUSCAR AVALIAÇÃO</h1>
        <input
          className={classes.entradaCodigo}
          onChange={(event) => setId(event.target.value)}
          placeholder='Digite o ID da avaliação'
        />
        <div className={classes.botoes}>
          <Grid>
            <Box textAlign='center'>
              <Button
                className={classes.btnBuscar}
                startIcon={<SearchRounded />}
                onClick={buscarAvaliacao}
              ></Button>
            </Box>
          </Grid>
        </div>
      </div>
    </>
  )
}
