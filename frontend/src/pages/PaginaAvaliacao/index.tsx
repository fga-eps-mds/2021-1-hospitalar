/* eslint-disable react/self-closing-comp */

import { Box, Grid, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

import { Button } from '../../components/GlobalComponents/Inputs/Button'
import { Form } from '../../components/GlobalComponents/Forms/Form'
import { Header } from '../../components/GlobalComponents/Header'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router'
import { useStyles } from './styles'
import { Avaliacao } from '../../types/Avaliacao'
import { api } from '../../api'

type Props = {
  idAvaliacao: string
}

export function PaginaAvaliacao(): React.ReactElement {
  const { idAvaliacao } = useParams<Props>()
  const avaliacaoNula: Avaliacao = {
    id: 0,
    codigo: '',
    nomeHospital: '',
    idsAvaliadores: '',
    data: new Date().toISOString(),
    secoes: [
      {
        id: 0,
        topico: '',
        subtopicos: [
          {
            id: 0,
            secao: 0,
            nome: '',
            status: '',
            comentario: '',
            pontuacao: 0,
          },
        ],
        avaliacao: 0,
      },
    ],
  }
  const [avaliacao, setAvaliacao] = useState<Avaliacao>(avaliacaoNula)
  const classes = useStyles()
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

  const handleSubmmit = () => {
    console.log(idAvaliacao)
    api
      .get<Avaliacao>(`avaliacao/${idAvaliacao}`)

      .then(({ data }) => {
        setAvaliacao(data)
        console.log(data)
      })
      // eslint-disable-next-line no-console
      .catch(console.log)
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
        <Grid className={classes.textData}>
          {new Date(avaliacao.data).toLocaleDateString('pt-BR')}
        </Grid>
        <Grid className={classes.idAvaliacao}>
          {/* Aqui vai ser retornado o ID_Avaliacao guardado no banco de dados */}
        </Grid>
        <Grid className={classes.textInfoHosp}>
          <Grid className={classes.textNomeLabel}>Nome do Hospital:</Grid>
          <Grid className={classes.textNomeResp}>
            {avaliacao.nomeHospital.split(',')[0]}
          </Grid>
          <Grid className={classes.textSiglaLabel}>Sigla:</Grid>
          <Grid className={classes.textSiglaResp}>
            {avaliacao.nomeHospital.split(',')[1]}
          </Grid>
        </Grid>
        <Grid className={classes.textResponsavel}>
          <Grid className={classes.textResponsavelLabel}>Responsáveis:</Grid>
          <Grid className={classes.textResponsavelResp}>{avaliacao.idsAvaliadores}</Grid>
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
