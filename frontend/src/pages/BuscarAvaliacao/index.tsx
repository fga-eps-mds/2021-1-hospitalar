import { Box, Button, Grid } from '@material-ui/core'
import { CONFIG, api } from '../../api'
import React, { useContext, useState } from 'react'

import AuthContext from '../../context/auth'
import { Header } from '../../components/GlobalComponents/Header'
import { SearchRounded } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'
import { useStyles } from './styles'

export function BuscarAvaliacao(): React.ReactElement {
  const classes = useStyles()
  const history = useHistory()
  const context = useContext(AuthContext)
  const [codigo, setCodigo] = useState('')

  const buscarAvaliacao = () => {
    api
      .post('avaliacao/confereAvaliacao/', { codigo }, CONFIG(context.token))
      .then(() => history.push(`/avaliacao/${codigo}`))
      .catch((error) => {
        alert(`Essa avaliação não existe... \nlog: ${error}`)
      })
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
          onChange={(event) => setCodigo(event.target.value)}
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
