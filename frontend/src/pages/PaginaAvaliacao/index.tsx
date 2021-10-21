import { Box, Button, Grid, IconButton, Tab, Tabs } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

import { AddCircleRounded } from '@material-ui/icons'
import { Avaliacao } from '../../types/Avaliacao'
import { Header } from '../../components/GlobalComponents/Header'
import { TabelaSecoes } from '../../components/PaginaAvaliacaoComponents/TabelaSecoes'
import { api } from '../../api'
import { useParams } from 'react-router-dom'
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

  /**
   *  Função para ter o "get" do banco de dados
   */
  const bancoGet = () => {
    api
      .get<Avaliacao>(`avaliacao/${idAvaliacao}/`)

      .then(({ data }) => setAvaliacao(data))
      // eslint-disable-next-line no-console
      .catch(console.log)
  }
  /**
   * Constante para mudar de seção
   */
  const mudarSecao = (numeroSecao: number) => {
    setIdSecao(numeroSecao)
  }

  /**
   * useEffect para pegar os dados do banco
   */
  useEffect(() => {
    bancoGet()
  }, [])

  const handleAdd = () => {
    console.log('Teste')
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

      {/* Título */}
      <Grid className={classes.titleEditarAvaliacao}>PREENCHIMENTO DA AVALIAÇÃO</Grid>
      <Grid className={classes.backgroundAvaliacao}>
        {/* corpo */}
        <Grid className={classes.textData}>
          {/* data */}
          {avaliacao.data && new Date(avaliacao.data).toLocaleDateString('pt-BR')}
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
                {avaliacao.secoes.map((value, index) => (
                  <Tab label={`Seção ${index + 1}`} />
                ))}
              </Tabs>
            </Box>
          </Grid>
          {/* Botão de adicionar */}
          <Grid className={classes.addBotton}>
            <Button
              color='inherit'
              variant='outlined'
              startIcon={<AddCircleRounded />}
              onClick={handleAdd}
            >
              Adicionar
            </Button>
          </Grid>
          {/* a própria tabela */}
          <TabelaSecoes secao={avaliacao.secoes[idSecao]} />
        </Grid>
      </Grid>
    </Grid>
  )
}
