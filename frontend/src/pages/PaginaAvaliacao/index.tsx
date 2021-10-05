/* eslint-disable react/self-closing-comp */

import { Box, Grid, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

import { Button } from '../../components/GlobalComponents/Inputs/Button'
import { Form } from '../../components/GlobalComponents/Forms/Form'
import { Header } from '../../components/GlobalComponents/Header'
import { avaliacao } from '../../api'
import { useHistory } from 'react-router-dom'
import { useStyles } from './styles'

export function PaginaAvaliacao(): React.ReactElement {
  const classes = useStyles()
  const [data, setData] = useState<any>('')
  /**
   * Vai fazer a transição de páginas para a próxima página
   * É necessario inicializar o history.
   */
  const history = useHistory()

  const voltar = () => {
    console.log('voltando')
  }
  const funcBotao = () => {
    console.log('testebotao')
  }

  const handleSubmmit = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/avaliacao/')
    setData(await response.json())
  }

  useEffect(() => {
    handleSubmmit()
  }, [])
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
          <Header
            links={[
              { texto: 'Home', link: '/' },
              { texto: 'Nova Avaliação', link: '/NovaAvaliacao' },
              { texto: 'Avaliações', link: '/avaliacao' },
              { texto: 'Relatórios', link: '/relatorio' },
            ]}
          />
        </Grid>
      </Grid>

      {/* corpo */}
      <Grid className={classes.backgroundAvaliacao}>
        <Grid className={classes.textData}>dd/mm/aaaa</Grid>
        <Grid className={classes.idAvaliacao}>
          Id_Avaliacao
          {/* Aqui vai ser retornado o ID_Avaliacao guardado no banco de dados */}
        </Grid>
        <Grid className={classes.textInfoHosp}>
          <Grid className={classes.textNomeLabel}>Nome do Hospital:</Grid>
          <Grid className={classes.textNomeResp}>Nome do Hospital</Grid>
          <Grid className={classes.textSiglaLabel}>Sigla:</Grid>
          <Grid className={classes.textSiglaResp}>Sigla</Grid>
        </Grid>
        <Grid className={classes.textResponsavel}>
          <Grid className={classes.textResponsavelLabel}>Responsáveis:</Grid>
          <Grid className={classes.textResponsavelResp}>Lista de responsáveis</Grid>
        </Grid>
        <Grid className={classes.gridbotao}>
          <Button className={classes.botaodesign} size='medium' onClick={handleSubmmit}>
            A
          </Button>
          <Button className={classes.botaodesign} size='medium' onClick={funcBotao}>
            B
          </Button>
          <Button className={classes.botaodesign} size='medium' onClick={funcBotao}>
            C
          </Button>
          <Button className={classes.botaodesign} size='medium' onClick={funcBotao}>
            D
          </Button>
          <Button className={classes.botaodesign} size='medium' onClick={funcBotao}>
            E
          </Button>
          <Button className={classes.botaodesign} size='medium' onClick={funcBotao}>
            F
          </Button>
        </Grid>

        <Grid className={classes.tabelaGeral}>
          <Grid className={classes.GeralNumero}>
            <Grid className={classes.textNumerobordasuperior}>Nº</Grid>
            <Grid className={classes.textNumero2}>1</Grid>
            <Grid className={classes.textNumero2}>2</Grid>
            <Grid className={classes.textNumero2}>3</Grid>
            <Grid className={classes.textNumero3bordainferior}>4</Grid>
          </Grid>

          <Grid className={classes.GeralTexto}>
            <Grid className={classes.TextoEscrito}>
              Núcleo de Segurança do Paciente (NSP)
            </Grid>
            <Grid className={classes.TextoEscrito}>
              O PSP está disponível para todos...
            </Grid>
            <Grid className={classes.TextoEscrito}>
              O serviço de saúde possui Plano de...
            </Grid>
            <Grid className={classes.TextoEscrito}>Total</Grid>
            <Grid className={classes.TextoEscrito}>Percentual</Grid>
          </Grid>

          <Grid className={classes.GeralTexto}>
            <Grid className={classes.TextoEscrito}>C</Grid>
            <Grid className={classes.TextoEscrito}>-</Grid>
            <Grid className={classes.TextoEscrito}>-</Grid>
            <Grid className={classes.TextoEscrito}>-</Grid>
            <Grid className={classes.TextoEscrito}>-</Grid>
          </Grid>

          <Grid className={classes.GeralTexto}>
            <Grid className={classes.TextoEscrito}>PC</Grid>
            <Grid className={classes.TextoEscrito}>-</Grid>
            <Grid className={classes.TextoEscrito}>-</Grid>
            <Grid className={classes.TextoEscrito}>-</Grid>
            <Grid className={classes.TextoEscrito}>-</Grid>
          </Grid>

          <Grid className={classes.GeralTexto}>
            <Grid className={classes.TextoEscrito}>NC</Grid>
            <Grid className={classes.TextoEscrito}>-</Grid>
            <Grid className={classes.TextoEscrito}>-</Grid>
            <Grid className={classes.TextoEscrito}>-</Grid>
            <Grid className={classes.TextoEscrito}>-</Grid>
          </Grid>

          <Grid className={classes.GeralTexto}>
            <Grid className={classes.TextoEscrito}>NA</Grid>
            <Grid className={classes.TextoEscrito}>-</Grid>
            <Grid className={classes.TextoEscrito}>-</Grid>
            <Grid className={classes.TextoEscrito}>-</Grid>
            <Grid className={classes.TextoEscrito}>-</Grid>
          </Grid>

          <Grid className={classes.GeralTexto}>
            <Grid className={classes.TextoEscrito}>PT</Grid>
            <Grid className={classes.TextoEscrito}>-</Grid>
            <Grid className={classes.TextoEscrito}>-</Grid>
            <Grid className={classes.TextoEscrito}>-</Grid>
            <Grid className={classes.TextoEscrito}>-</Grid>
          </Grid>

          <Grid className={classes.GeralTexto}>
            <Grid className={classes.TextoEscritoBordaSuperior}>Comentários</Grid>
            <Grid className={classes.TextoEscrito}>-</Grid>
            <Grid className={classes.TextoEscrito}>
              Lorem ipsum dolor sit amet, consectetur...
            </Grid>
            <Grid className={classes.TextoEscrito}>-</Grid>
            <Grid className={classes.TextoEscritoBordaInferior}>-</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
