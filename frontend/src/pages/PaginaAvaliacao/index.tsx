import {
  AddCircleRounded,
  CheckCircleOutlineRounded,
  DeleteRounded,
} from '@material-ui/icons'
import { Avaliacao, Secao, Subtopico } from '../../types/Avaliacao'
import {
  Box,
  Button,
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
  idCodigo: string
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
  const [open, setOpen] = React.useState(false)
  const { idCodigo } = useParams<Props>()

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
  const [isEditableArray, setIsEditableArray] = useState<boolean[]>([])

  /**
   *  Função para ter o "get" do banco de dados
   */
  const bancoGet = () => {
    api
      .get<Avaliacao>(`avaliacao/${idCodigo}/`)

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
   * função usada no botão de Salvar que salva a avaliação e manda para a home
   */
  const salvarAvaliacao = () => {
    alert('A avaliação foi salva.')
    history.push('/Home')
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

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

    // eslint-disable-next-line no-console
    api.put(`avaliacao/${idCodigo}/`, aux).then(bancoGet).catch(console.log)
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
    // eslint-disable-next-line no-console
    api.put(`avaliacao/${idCodigo}/`, aux).then(bancoGet).catch(console.log)
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
    api.put(`avaliacao/${aux.id}/`, aux).then(bancoGet).catch(console.log)
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
    api.put(`avaliacao/${aux.id}/`, aux).then(bancoGet).catch(console.log)
    setOpen(false)
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
            {avaliacao.idsAvaliadores.split(',').map((val) => (
              <Grid>{val}</Grid>
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
                  <Tab label={`Seção ${index + 1}`} />
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
                  onClick={removerSecao}
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
