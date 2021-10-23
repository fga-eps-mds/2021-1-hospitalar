import {
  AddCircleRounded,
  CheckCircleOutlineRounded,
  DeleteRounded,
} from '@material-ui/icons'
import { Avaliacao, Secao, Subtopico } from '../../types/Avaliacao'
import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { Header } from '../../components/GlobalComponents/Header'
import { TabelaSecoes } from '../../components/PaginaAvaliacaoComponents/TabelaSecoes'
import { api } from '../../api'
import { useStyles } from './styles'

/**
 *[tipagem] Transformando idAvaliacao em um tipo para ser um argumento
 */
type Props = {
  idAvaliacao: string
}

export function PaginaAvaliacao(): React.ReactElement {
  /**
   * Criando constantes (respectivamente)
   *  classes pega o styles.ts
   *  useState substitui o uso de class component para criar uma variavel de estado-idSeção é criado para trocar de seção
   *  transforma idAvaliacao em paramentro
   */
  const classes = useStyles()
  const history = useHistory()
  const [idSecao, setIdSecao] = useState(0)
  const { idAvaliacao } = useParams<Props>()

  /**
   * Constroi um "objeto" do tipo Avaliação com todos os itens nulos
   */
  const avaliacaoNula: Avaliacao = {
    id: 0,
    codigo: '',
    nomeHospital: '',
    idsAvaliadores: '',
    configuracao: {},
    data: new Date().toISOString(),
    secoes: [
      {
        id: 0,
        topico: '',
        subtopicos: [],
      },
    ],
  }
  /**
   * Cria uma variável de estado de avaliações
   */
  const [avaliacao, setAvaliacao] = useState<Avaliacao>(avaliacaoNula)
  const [isEditableArray, setIsEditableArray] = useState<boolean[]>([])

  /**
   *  Função para ter o "get" do banco de dados
   */
  const bancoGet = () => {
    api
      .get<Avaliacao>(`avaliacao/${idAvaliacao}/`)

      .then(({ data }) => {
        setIsEditableArray(data.secoes[idSecao].subtopicos.map(() => false))
        setAvaliacao(data)
      })
      // eslint-disable-next-line no-console
      .catch(console.log)
  }
  /**
   * Constante para mudar de seção
   */
  const mudarSecao = (numeroSecao: number) => {
    setIdSecao(numeroSecao)
    setIsEditableArray(avaliacao.secoes[idSecao].subtopicos.map(() => false))
  }

  const adicionarSubtopico = () => {
    const aux = avaliacao
    aux.secoes[idSecao].subtopicos.push({
      nome: '',
      status: 'NA',
      comentario: '',
      pontuacao: 0,
    })
    setAvaliacao(aux)
    setIsEditableArray([...isEditableArray, true])
  }

  const salvarAvaliacao = () => {
    alert('A avaliação foi salva.')
    history.push('/Home')
  }

  const cancelarEdicao = () => {
    const aux = avaliacao
    aux.secoes[idSecao].subtopicos = aux.secoes[idSecao].subtopicos.filter(
      (value) => value.id !== undefined
    )
    setAvaliacao(aux)
    setIsEditableArray(aux.secoes[idSecao].subtopicos.map(() => false))
  }

  const handleUpdateDB = (subtopico: Subtopico) => {
    const aux = avaliacao

    aux.secoes[idSecao].subtopicos = aux.secoes[idSecao].subtopicos.map((value) => {
      if (value.id === subtopico.id) {
        return subtopico
      }
      return value
    })

    // eslint-disable-next-line no-console
    api.put(`avaliacao/${idAvaliacao}/`, aux).then(bancoGet).catch(console.log)
  }

  const removerSubtopico = (idEscolhido: number) => {
    const aux = avaliacao
    aux.secoes[idSecao].subtopicos = aux.secoes[idSecao].subtopicos.filter(
      (value) => value.id !== idEscolhido
    )

    setAvaliacao(aux)
    setIsEditableArray(aux.secoes[idSecao].subtopicos.map(() => false))
    // eslint-disable-next-line no-console
    api.put(`avaliacao/${idAvaliacao}/`, aux).then(bancoGet).catch(console.log)
  }

  const adicionarSecao = () => {
    const aux = avaliacao
    const novaSecao: Secao = {
      topico: '',
      subtopicos: [
        {
          nome: '',
          status: 'NA',
          comentario: '',
          pontuacao: 0,
        },
      ],
    }
    aux.secoes.push(novaSecao)
    api.put(`avaliacao/${aux.id}/`, aux).then(bancoGet).catch(console.log)
  }

  const removerSecao = () => {
    const aux = avaliacao
    if (aux.secoes.length === 1) {
      alert('A avaliação deve possuir ao menos uma seção!')
      return
    }
    aux.secoes = aux.secoes.filter((_, index) => index !== idSecao)
    setIdSecao(0)
    api.put(`avaliacao/${aux.id}/`, aux).then(bancoGet).catch(console.log)
  }

  /**
   * useEffect para pegar os dados do banco
   */
  useEffect(() => {
    bancoGet()
  }, [])

  /**
   * A página foi criada utilizando a ferramenta de layout responsivo do material-ui
   * @see https://material-ui.com/components/grid/
   */
  return (
    <Grid>
      <Grid item>
        <Header
          links={[
            { texto: 'Home', link: '/home' },
            { texto: 'Nova Avaliação', link: '/NovaAvaliacao' },
            { texto: 'Avaliações', link: '/avaliacao' },
            { texto: 'Relatórios', link: '/relatorio' },
          ]}
        />
      </Grid>
      {/* Título */}
      <Grid className={classes.titleEditarAvaliacao}>PREENCHIMENTO DA AVALIAÇÃO</Grid>
      <Grid className={classes.backgroundAvaliacao}>
        {/* corpo */}
        <Grid className={classes.textData}>
          {/* data */}
          {avaliacao.data && new Date(avaliacao.data).toLocaleDateString('pt-BR')}
          <Button
            className={classes.salveBotton}
            color='inherit'
            variant='outlined'
            startIcon={<CheckCircleOutlineRounded />}
            onClick={salvarAvaliacao}
          >
            Salvar
          </Button>
        </Grid>
        <Grid className={classes.textNomeResp}>
          {/* Nome do hospital */}
          {avaliacao.nomeHospital.split(',')[0]}
        </Grid>
        <Grid className={classes.textInfoHosp}>
          {/* label e id do avaliação */}
          <Grid className={classes.textNomeLabel}>ID:</Grid>
          <Grid className={classes.idAvaliacao}>{avaliacao.codigo}</Grid>
        </Grid>
        <Grid className={classes.textSigla}>
          {/* sigla do hospital */}
          <Grid className={classes.textSiglaLabel}>Sigla:</Grid>
          <Grid className={classes.textSiglaResp}>
            {avaliacao.nomeHospital.split(',')[1]}
          </Grid>
        </Grid>
        <Grid className={classes.textResponsavel}>
          {/* lista de responsaveis */}
          <Grid className={classes.textResponsavelLabel}>Responsáveis:</Grid>
          <Grid className={classes.textResponsavelResp}>{avaliacao.idsAvaliadores}</Grid>
        </Grid>
        {/* Tabela e seus componentes */}
        <Grid className='App'>
          {/* botões para mudar de seção */}
          <Grid className={classes.gridButton}>
            <Box sx={{ maxWidth: '80%', bgcolor: '#175215', borderRadius: '12px 12px' }}>
              <Tabs
                value={idSecao}
                onChange={(_, newValue) => mudarSecao(newValue)}
                variant='scrollable'
                scrollButtons='auto'
                aria-label='scrollable auto tabs example'
              >
                {avaliacao.secoes.map((_, index) => (
                  <Tab label={`Seção ${index + 1}`} />
                ))}
              </Tabs>
            </Box>
          </Grid>
          <Grid item container alignItems='center' direction='row'>
            <IconButton color='primary' onClick={adicionarSecao}>
              <AddCircleRounded />
            </IconButton>
            <IconButton color='primary' onClick={removerSecao}>
              <DeleteRounded />
            </IconButton>
            <Typography className={classes.titleSection}>
              {avaliacao.secoes[idSecao].topico}
            </Typography>
          </Grid>
          {/* a própria tabela */}
          {avaliacao.secoes.map((value, index) =>
            index === idSecao ? (
              <TabelaSecoes
                secao={value}
                isEditableArray={isEditableArray}
                handleUpdateDB={handleUpdateDB}
                removerSubtopico={removerSubtopico}
                cancelarEdicao={cancelarEdicao}
              />
            ) : null
          )}
        </Grid>
        {/* Botão de adicionar */}
        <Grid>
          <Box textAlign='center'>
            <Button
              className={classes.addButton}
              color='primary'
              variant='contained'
              startIcon={<AddCircleRounded />}
              onClick={adicionarSubtopico}
            >
              Adicionar Linha
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  )
}
