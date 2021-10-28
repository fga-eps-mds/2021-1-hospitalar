import {
  AddCircleRounded,
  CheckCircleOutlineRounded,
  DeleteRounded,
} from '@material-ui/icons'
import { Avaliacao, Secao, Subtopico } from '../../types/Avaliacao'
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Tooltip,
  Typography,
} from '@material-ui/core'
import { CONFIG, api, authApi } from '../../api'
import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import AuthContext from '../../context/auth'
import { Header } from '../../components/GlobalComponents/Header'
import { TabelaSecoes } from '../../components/PaginaAvaliacaoComponents/TabelaSecoes'
import { Usuario } from '../../types/Usuario'
import axios from 'axios'
import { useStyles } from './styles'

/**
 *[tipagem] Transformando codigo em um tipo para ser um argumento
 */
type Props = {
  codigo: string
}

export function PaginaAvaliacao(): React.ReactElement {
  /**
   * Criando constantes (respectivamente)
   *  classes pega o styles.ts
   *  useState substitui o uso de class component para criar uma variavel de estado-idSeção é criado para trocar de seção
   *  transforma codigo em paramentro
   *  history é usado para trocar de página
   *  context é um hook para saber o tipo do usuario
   *
   *  idSeção é usado como constante para identificar seção
   *  open é usada nos Dialogs para fechar ou abrir janelas de confirmação de ações
   *  transforma idAvaliacao em paramentro
   */
  const classes = useStyles()
  const history = useHistory()
  const context = useContext(AuthContext)

  const [idSecao, setIdSecao] = useState(0)
  const [open, setOpen] = React.useState(false)
  const { codigo } = useParams<Props>()

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
   * e uma para edição
   */
  const [avaliacao, setAvaliacao] = useState<Avaliacao>(avaliacaoNula)
  const [avaliadores, setAvaliadores] = useState<Usuario[]>([])
  const [isEditableArray, setIsEditableArray] = useState<boolean[]>([])
  const [loading, setLoading] = useState(true)

  /**
   *  Função para ter o "get" do banco de dados
   */
  const bancoGet = async () => {
    const response = await api
      .post<Avaliacao>(`avaliacao/get_by_code/`, { codigo }, CONFIG(context.token))

      // eslint-disable-next-line no-console
      .catch(console.log)

    if (response) {
      setIsEditableArray(response.data.secoes[idSecao].subtopicos.map(() => false))
      setAvaliacao(response.data)
      return response.data
    }
    return null
  }

  /**
   * Constante para mudar de seção
   */
  const mudarSecao = (numeroSecao: number) => {
    setIdSecao(numeroSecao)
    setIsEditableArray(avaliacao.secoes[idSecao].subtopicos.map(() => false))
  }
  /**
   * Função usada no botão de adicionar linha para adicionar um subtópico à seção
   */
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
  /**
   * função usada no botão de Salvar que salva a avaliação e mandar para a home
   */
  const salvarAvaliacao = () => {
    alert('A avaliação foi salva.')
    history.push('/Home')
  }
  /**
   * função usada para abrir uma janela para confirmar o delete do tópico
   */
  const handleClickOpen = () => {
    setOpen(true)
  }
  /**
   * função usada para fechar uma janela para confirmar o delete do tópico
   */
  const handleClose = () => {
    setOpen(false)
  }

  /**
   * função usada para cancelar a ediçao de um subtopico
   */
  const cancelarEdicao = () => {
    const aux = avaliacao
    aux.secoes[idSecao].subtopicos = aux.secoes[idSecao].subtopicos.filter(
      (value) => value.id !== undefined
    )
    setAvaliacao(aux)
    setIsEditableArray(aux.secoes[idSecao].subtopicos.map(() => false))
  }
  /**
   * função que atualiza o banco de dados
   */
  const handleUpdateDB = (subtopico: Subtopico) => {
    const aux = avaliacao

    aux.secoes[idSecao].subtopicos = aux.secoes[idSecao].subtopicos.map((value) => {
      if (value.id === subtopico.id) {
        return subtopico
      }
      return value
    })

    api
      .put(`avaliacao/${avaliacao.id}/`, aux, CONFIG(context.token))
      .then(bancoGet)
      // eslint-disable-next-line no-console
      .catch(console.log)
  }
  /**
   * função usada para remover/deletar subtopico da avaliação
   */
  const removerSubtopico = (idEscolhido: number) => {
    const aux = avaliacao
    aux.secoes[idSecao].subtopicos = aux.secoes[idSecao].subtopicos.filter(
      (value) => value.id !== idEscolhido
    )

    setAvaliacao(aux)
    setIsEditableArray(aux.secoes[idSecao].subtopicos.map(() => false))
    api
      .put(`avaliacao/${avaliacao.id}/`, aux, CONFIG(context.token))
      .then(() => {
        history.go(0)
      })
      // eslint-disable-next-line no-console
      .catch(console.log)
  }
  /**
   * função para adicionar seção à avaliação
   */
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
    api
      .put(`avaliacao/${aux.id}/`, aux, CONFIG(context.token))
      .then(bancoGet)
      // eslint-disable-next-line no-console
      .catch(console.log)
  }
  /**
   * função para remover seçõa de avaliação
   */
  const removerSecao = () => {
    const aux = avaliacao
    if (aux.secoes.length === 1) {
      alert('A avaliação deve possuir ao menos uma seção!')
      return
    }
    aux.secoes = aux.secoes.filter((_, index) => index !== idSecao)
    setIdSecao(0)
    api
      .put(`avaliacao/${aux.id}/`, aux, CONFIG(context.token))
      .then(bancoGet)
      // eslint-disable-next-line no-console
      .catch(console.log)
  }

  const getAvaliadores = async (avaliacaoRecebida: Avaliacao) => {
    const idsAvaliadoresString = avaliacaoRecebida.idsAvaliadores
    const idsAvaliadores = idsAvaliadoresString.split(',')
    const avaliadoresRecebidos = await axios.all(
      idsAvaliadores.map((id) =>
        authApi
          .get(`user/${id}/`, CONFIG(context.token))
          .then(({ data }) => data)
          // eslint-disable-next-line no-console
          .catch(console.log)
      )
    )
    setAvaliadores(avaliadoresRecebidos)
  }

  /**
   * useEffect para pegar os dados do banco
   */
  useEffect(() => {
    const gambiarra = async () => {
      const avaliacaoRecebida = await bancoGet()
      if (avaliacaoRecebida) {
        getAvaliadores(avaliacaoRecebida)
      }
      setLoading(false)
      return 'gambiarra'
    }
    gambiarra()
  }, [])

  /**
   * A página foi criada utilizando a ferramenta de layout responsivo do material-ui
   * @see https://material-ui.com/components/grid/
   */
  return loading ? (
    <CircularProgress />
  ) : (
    <Grid>
      <Grid item>
        {/* cabeçalho */}
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
          {/* botão de salvar avaliação */}
          <Grid className={classes.gridButtonSalvar}>
            <Tooltip title='Salvar alterações e retornar' placement='top'>
              <Button
                className={classes.salveBotton}
                variant='contained'
                startIcon={<CheckCircleOutlineRounded />}
                onClick={salvarAvaliacao}
              >
                Salvar
              </Button>
            </Tooltip>
          </Grid>
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
          <Grid className={classes.textResponsavelResp}>
            {avaliadores.map((val, index) => (
              <Grid key={index}>{val.nome}</Grid>
            ))}
          </Grid>
        </Grid>
        {/* Tabela e seus componentes */}
        <Grid>
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
                  <Tab key={index} label={`Seção ${index + 1}`} />
                ))}
              </Tabs>
            </Box>
          </Grid>
          {/* botão para adicionar seção */}
          <Grid item container alignItems='center' direction='row'>
            <Grid>
              <Tooltip title='Adicionar seção' placement='top'>
                <IconButton color='primary' onClick={adicionarSecao}>
                  <AddCircleRounded />
                </IconButton>
              </Tooltip>
            </Grid>
            {/* botão para remover seção */}
            <Tooltip title='Excluir seção atual' placement='top'>
              <IconButton color='primary' onClick={handleClickOpen}>
                <DeleteRounded />
              </IconButton>
            </Tooltip>
            {/* caixa de dialogo na qual pergunta se deseja confirmar ou não a exclusão da seção */}
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby='alert-dialog-title'
              aria-describedby='alert-dialog-description'
            >
              <DialogTitle className={classes.textDialogTitle} id='alert-dialog-title'>
                Você deseja excluir a atual seção?
              </DialogTitle>
              <DialogContent>
                <DialogContentText
                  className={classes.textDialogBox}
                  id='alert-dialog-description'
                >
                  Apagando a seção você perderá todas as notas e comentários atribuídos
                  para cada requisito.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  className={classes.dialogCancelDesign}
                  variant='outlined'
                  onClick={handleClose}
                >
                  Cancelar
                </Button>
                <Button
                  className={classes.dialogConfirmDesign}
                  variant='outlined'
                  onClick={() => {
                    removerSecao()
                    handleClose()
                  }}
                  autoFocus
                >
                  Confirmar
                </Button>
              </DialogActions>
            </Dialog>
            {/* título da seção */}
            <Grid>
              <Typography className={classes.titleSection}>
                {avaliacao.secoes[idSecao].topico}
              </Typography>
            </Grid>
          </Grid>
          {/* a própria tabela */}
          {avaliacao.secoes.map((value, index) =>
            index === idSecao ? (
              <TabelaSecoes
                key={index}
                secao={value}
                isEditableArray={isEditableArray}
                handleUpdateDB={handleUpdateDB}
                removerSubtopico={removerSubtopico}
                cancelarEdicao={cancelarEdicao}
              />
            ) : null
          )}
        </Grid>
        {/* Botão de adicionar subtopico */}
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
