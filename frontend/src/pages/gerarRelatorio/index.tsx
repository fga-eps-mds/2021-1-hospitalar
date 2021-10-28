import React, { useContext, useState } from 'react'

import AuthContext from '../../context/auth'
import { Button } from '../../components/GlobalComponents/Inputs/Button'
import { Header } from '../../components/GlobalComponents/Header'
import { TextField } from '../../components/GlobalComponents/Inputs/TextField'
import { Typography } from '@material-ui/core'
import { generatePDF } from '../../api'
import { useHistory } from 'react-router-dom'
import { useStyles } from './styles'

export function GerarRelatorio(): React.ReactElement {
  const classes = useStyles()
  const context = useContext(AuthContext)
  const history = useHistory()

  const [codigo, setCodigo] = useState('')

  const handleGeneratePDF = () => {
    if (codigo !== '' && context.token) {
      generatePDF(codigo, context.token)
    }
  }

  const handlePreVisualizar = () => {
    history.push('PreVisualizar')
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
      <div className={classes.barraDois}>
        <Typography className={classes.nomeTrab}>FAMil</Typography>
      </div>
      <div className={classes.barraTres}>
        <Typography className={classes.textoMeio}>
          Ferramenta de acreditação militar
        </Typography>
      </div>

      <div className={classes.barraQuatro}>
        <Typography className={classes.tituloEntradaCodigo}>GERAR RELATÓRIO</Typography>
        <TextField
          onChange={(e) => {
            e.preventDefault()
            setCodigo(e.target.value)
          }}
          value={codigo}
          name='codigo'
          variant='outlined'
          className={classes.entradaCodigo}
          label='Digite o código'
        />
        <div className={classes.botoes}>
          <Button onClick={handlePreVisualizar} className={classes.btnUm}>
            Pré-Visualizar
          </Button>
          <Button onClick={handleGeneratePDF} className={classes.btnDois}>
            BAIXAR (.PDF)
          </Button>
        </div>
      </div>
    </>
  )
}
