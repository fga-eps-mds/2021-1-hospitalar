import { Box, Grid, Tab, Tabs } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../api'
import { Header } from '../../components/GlobalComponents/Header'
import { TabelaSecoes } from '../../components/PaginaAvaliacaoComponents/TabelaSecoes'
import { Avaliacao } from '../../types/Avaliacao'
import { useStyles } from './styles'

type Props = {
  idAvaliacao: string
}

export function PaginaAvaliacao(): React.ReactElement {
  const classes = useStyles()
  const [idSecao, setIdSecao] = useState(0)
  const { idAvaliacao } = useParams<Props>()

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
  const [avaliacao, setAvaliacao] = useState<Avaliacao>(avaliacaoNula)

  /*
   *  Função para ter o "get" do banco de dados
   */
  const bancoGet = () => {
    api
      .get<Avaliacao>(`avaliacao/${idAvaliacao}/`)

      .then(({ data }) => setAvaliacao(data))
      // eslint-disable-next-line no-console
      .catch(console.log)
  }

  const mudarSecao = (numeroSecao: number) => {
    setIdSecao(numeroSecao)
  }

  useEffect(() => {
    bancoGet()
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

      <Grid className={classes.titleEditarAvaliacao}>PREENCHIMENTO DA AVALIAÇÃO</Grid>
      <Grid className={classes.backgroundAvaliacao}>
        {/* corpo */}
        <Grid className={classes.textData}>
          {avaliacao.data && new Date(avaliacao.data).toLocaleDateString('pt-BR')}
        </Grid>
        <Grid className={classes.textNomeResp}>
          {avaliacao.nomeHospital.split(',')[0]}
        </Grid>
        <Grid className={classes.textInfoHosp}>
          <Grid className={classes.textNomeLabel}>ID:</Grid>
          <Grid className={classes.idAvaliacao}>{avaliacao.codigo}</Grid>
        </Grid>
        <Grid className={classes.textSigla}>
          <Grid className={classes.textSiglaLabel}>Sigla:</Grid>
          <Grid className={classes.textSiglaResp}>
            {avaliacao.nomeHospital.split(',')[1]}
          </Grid>
        </Grid>
        <Grid className={classes.textResponsavel}>
          <Grid className={classes.textResponsavelLabel}>Responsáveis:</Grid>
          <Grid className={classes.textResponsavelResp}>{avaliacao.idsAvaliadores}</Grid>
        </Grid>
        {/* corpo */}
        <Grid className='App'>
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
          <TabelaSecoes secao={avaliacao.secoes[idSecao]} />
        </Grid>
      </Grid>
    </Grid>
  )
}
