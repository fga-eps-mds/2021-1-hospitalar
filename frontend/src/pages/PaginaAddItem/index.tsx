import { Box, Grid, Typography } from '@material-ui/core'
import React, { useState } from 'react'

import { Button } from '../../components/GlobalComponents/Inputs/Button'
import { ColetaDados } from '../../types/ColetaDados'
import { Gerenciamento } from '../../components/Gerenciamento'
import { Header } from '../../components/GlobalComponents/Header'
import { TextField } from '../../components/GlobalComponents/Inputs/TextField'
import { useHistory } from 'react-router-dom'
import { useStyles } from './styles'

export function PaginaAddItem(): React.ReactElement {
  /**
   * classes usa o styles.ts
   */
  const classes = useStyles()

  /**
   * Vai fazer a transição de páginas para a página anterior
   * É necessario inicializar o history.
   */
  const history = useHistory()

  /**
   * Criando constantes (respectivamente)
   *  useState substitui o uso de class component para criar uma variavel de estado para
   *  Qualificacao, Avaliacao, Pontuacao, Comentarios, status e uma lista
   */
  const [digitacaoQualificacao, setDigitacaoQualificacao] = useState('')
  const [digitacaoAvaliacao, setDigitacaoAvaliacao] = useState('')
  const [digitacaoPontuacao, setDigitacaoPontuacao] = useState('')
  const [digitacaoComentarios, setDigitacaoComentarios] = useState('')
  const [digitacaoStatus, setDigitacaoStatus] = useState('')
  const [lista, setLista] = useState<ColetaDados[]>([])

  const getDados = (DadosCode: string) => {
    const ListaDeDados: string[] = []
    const index = ListaDeDados.indexOf(DadosCode)
    if (index > -1) {
      console.log(ListaDeDados[index])
    }
  }

  const handleAdd = (): void => {
    const novoNumero: number = Math.floor(Math.random() * 100000)
    const novoIndice = novoNumero.toString()
    const newItem = {
      OBindice: novoIndice,
      OBqualificacao: digitacaoQualificacao,
      OBavaliacao: digitacaoAvaliacao,
      OBpontuacao: digitacaoPontuacao,
      OBcomentario: digitacaoComentarios,
      OBstatus: digitacaoStatus,
    }

    setLista([...lista, newItem])

    setDigitacaoAvaliacao('')
    setDigitacaoComentarios('')

    setDigitacaoPontuacao('')
    setDigitacaoQualificacao('')
    setDigitacaoStatus('')
  }

  const deleteLista = (variavel: string): void => {
    setLista(lista.filter((indice) => indice.OBindice !== variavel))
  }

  const handleCodeChangeQualificao = (e: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setDigitacaoQualificacao(e.target.value)
    getDados(e.target.value.toString())
  }

  const handleCodeChangeAvaliacao = (e: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setDigitacaoAvaliacao(e.target.value)
    getDados(e.target.value.toString())
  }

  const handleCodeChangePontuacao = (e: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setDigitacaoPontuacao(e.target.value)
    getDados(e.target.value.toString())
  }

  const handleCodeChangeComentarios = (e: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setDigitacaoComentarios(e.target.value)
    getDados(e.target.value.toString())
  }

  const handleCodeChangeStatus = (e: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setDigitacaoStatus(e.target.value)
    getDados(e.target.value.toString())
  }

  const handleBackPage = () => {
    history.goBack()
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

      <Box>
        <Grid
          container
          direction='column'
          justifyContent='flex-start'
          alignItems='center'
        >
          <Box mb='30px'>
            <Typography variant='h3' align='center'>
              Adição de ítens
            </Typography>
          </Box>

          <Grid container direction='row' spacing={2} alignItems='center' id='grid3'>
            <TextField
              name='Qualificação'
              value={digitacaoQualificacao}
              label='Qualificação'
              onChange={handleCodeChangeQualificao}
              id='standard-basic'
              variant='outlined'
              className={classes.texto_qualificacao}
            />{' '}
            <TextField
              name='Avaliacao'
              value={digitacaoAvaliacao}
              label='Avaliação'
              onChange={handleCodeChangeAvaliacao}
              id='standard-basic'
              variant='outlined'
              className={classes.texto_qualificacao}
            />{' '}
            <TextField
              name='Pontuação'
              value={digitacaoPontuacao}
              label='Pontuação'
              onChange={handleCodeChangePontuacao}
              id='standard-basic'
              variant='outlined'
              className={classes.texto_qualificacao}
            />{' '}
            <TextField
              name='Comentarios'
              value={digitacaoComentarios}
              label='Comentários'
              onChange={handleCodeChangeComentarios}
              id='standard-basic'
              variant='outlined'
              className={classes.texto_qualificacao}
            />{' '}
            <TextField
              name='Status'
              value={digitacaoStatus}
              label='Status'
              onChange={handleCodeChangeStatus}
              id='standard-basic'
              variant='outlined'
              className={classes.texto_qualificacao}
            />{' '}
          </Grid>

          <Grid container direction='column' spacing={2} alignItems='center' id='grid2'>
            <Button size='medium' onClick={handleAdd} className={classes.botaovoltar}>
              Adicionar ítem
            </Button>

            <Button size='medium' onClick={handleBackPage}>
              voltar
            </Button>
          </Grid>

          <Grid>
            {lista.map((item: ColetaDados, key: number) => (
              <Gerenciamento key={key} lista={item} deleteLista={deleteLista} />
            ))}
          </Grid>
        </Grid>
      </Box>
    </Grid>
  )
}
