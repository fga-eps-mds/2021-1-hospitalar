import { AddCircle, CheckBox, CheckBoxOutlineBlank } from '@material-ui/icons'
import { Box, Grid, Tab, Tabs } from '@material-ui/core'
import React, { forwardRef, useEffect, useState } from 'react'

import { Avaliacao } from '../../types/Avaliacao'
import { Header } from '../../components/GlobalComponents/Header'
import MaterialTable from 'material-table'
import { api } from '../../api'
import { useParams } from 'react-router-dom'
import { useStyles } from './styles'

type Props = {
  idAvaliacao: string
}

export function PaginaAvaliacao(): React.ReactElement {
  const [idSecao, setIdSecao] = useState(0)
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
            nome: '',
            status: 'NA',
            comentario: '',
            pontuacao: 0,
          },
        ],
      },
    ],
    configuracao: {
      id: 0,
      NV1: 0,
      NV2: 0,
      NV3: 0,
    },
  }
  const [avaliacao, setAvaliacao] = useState<Avaliacao>(avaliacaoNula)
  const classes = useStyles()

  /*
   *  Função para ter o "get" do banco de dados
   */
  const bancoGet = () => {
    api
      .get<Avaliacao>(`avaliacao/${idAvaliacao}/`)

      .then(({ data }) => setAvaliacao(data))
      // eslint-disable-next-line no-console
      .catch(console.log)
    console.log('GET')
  }
  const bancoPut = () => {
    api.put<Avaliacao, Avaliacao>(`avaliacao/${idAvaliacao}/`, avaliacao)
    console.log('PUT')
  }

  useEffect(() => {
    bancoGet()
  }, [])

  const never: 'never' = 'never'
  const center: 'center' = 'center'
  const justify: 'justify' = 'justify'
  const boolean: 'boolean' = 'boolean'

  /*
   *  Declaração do título do material table
   */
  const [state] = React.useState({
    columns: [
      {
        title: 'Nº',
        field: 'id',
        editable: never,
        maxWidth: 55,
      },
      {
        title: 'Requisitos em análise',
        field: 'nome',
        maxWidth: 400,
        align: justify,
      },
      {
        title: 'C',
        field: 'conforme',
        type: boolean,
        maxWidth: 68,
        sorting: false,
        align: center,
      },
      {
        title: 'PC',
        field: 'parcialConforme',
        type: boolean,
        maxWidth: 68,
        sorting: false,
        align: center,
      },
      {
        title: 'NC',
        field: 'naoConforme',
        type: boolean,
        maxWidth: 68,
        sorting: false,
        align: center,
      },
      {
        title: 'NA',
        field: 'naoAplicavel',
        type: boolean,
        maxWidth: 68,
        sorting: false,
        align: center,
      },
      {
        title: 'PT',
        field: 'pontuacao',
        maxWidth: 68,
        sorting: false,
        align: center,
      },
      {
        title: 'Comentário',
        field: 'comentario',
        align: justify,
        maxWidth: 400,
      },
    ],
  })

  /*
   *  Função para paginação, alternado o valor de IdSecao = 0
   */
  const funcBotaoA = () => {
    setIdSecao(0)
  }
  /*
   *  Função para paginação, alternado o valor de IdSecao = 1
   */
  const funcBotaoB = () => {
    setIdSecao(1)
  }
  /*
   *  Função para paginação, alternado o valor de IdSecao = 2
   */
  const funcBotaoC = () => {
    setIdSecao(3)
  }
  /*
   *  Função para paginação, alternado o valor de IdSecao = 4
   */
  const funcBotaoD = () => {
    setIdSecao(4)
  }
  /*
   *  Função para paginação, alternado o valor de IdSecao = 5
   */
  const funcBotaoE = () => {
    setIdSecao(5)
  }
  /*
   *  Função para paginação, alternado o valor de IdSecao = 6
   */
  const funcBotaoF = () => {
    setIdSecao(6)
  }
  /*
   *  Função para paginação, alternado o valor de IdSecao = 7
   */
  const funcBotaoG = () => {
    setIdSecao(7)
  }

  /*
   *  Interação do botão
   */
  const [value, setValue] = React.useState(0)

  const handleChange = (newValue: number) => {
    setValue(newValue)
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
                value={value}
                onChange={(_, newValue) => handleChange(newValue)}
                variant='scrollable'
                scrollButtons='auto'
                aria-label='scrollable auto tabs example'
              >
                <Tab label='Seção A' onClick={funcBotaoA} />
                <Tab label='Seção B' onClick={funcBotaoB} />
                <Tab label='Seção C' onClick={funcBotaoC} />
                <Tab label='Seção D' onClick={funcBotaoD} />
                <Tab label='Seção E' onClick={funcBotaoE} />
                <Tab label='Seção F' onClick={funcBotaoF} />
                <Tab label='Seção G' onClick={funcBotaoG} />
              </Tabs>
            </Box>
          </Grid>

          <MaterialTable
            title='Subtópicos'
            columns={state.columns}
            data={avaliacao.secoes[idSecao].subtopicos}
            editable={{
              onRowAdd: (newData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve(null)
                    avaliacao.secoes[idSecao].subtopicos.push(newData)
                    bancoPut()
                    setTimeout(() => {
                      bancoGet()
                    }, 1000)
                  }, 1000)
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve(null)
                    if (oldData) {
                      const data = avaliacao.secoes[idSecao].subtopicos
                      data[data.indexOf(oldData)] = newData
                      bancoPut()
                      setTimeout(() => {
                        bancoGet()
                      }, 1000)
                    }
                  }, 1000)
                }),
            }}
            options={{
              searchFieldAlignment: 'left',
              actionsColumnIndex: -1,
              pageSizeOptions: [2, 5, 10, 20, 25, 50, 100],
              pageSize: 20,
              headerStyle: {
                backgroundColor: '#175215',
                color: '#FFFFFF',
                fontFamily: 'OpenSans',
                fontSize: '23px',
                textAlign: 'center',
              },
            }}
            style={{
              backgroundColor: '#FFFFF2',
              color: '#175215',
              fontSize: '20px',
            }}
            actions={[
              {
                icon: 'refresh',
                iconProps: { color: 'secondary' },
                tooltip: 'Atualizar',
                isFreeAction: true,
                onClick: () => bancoGet(),
              },
            ]}
            localization={{
              header: {
                actions: 'Ações',
              },
              toolbar: {
                searchPlaceholder: 'Pesquisar',
              },
              body: {
                addTooltip: 'Adicionar',
                editTooltip: 'Editar',
                deleteTooltip: 'Deletar',
                editRow: { deleteText: 'Tem certeza que deseja excluir essa linha?' },
              },
              pagination: {
                labelRowsSelect: 'itens',
                firstTooltip: 'Primeira Página',
                previousTooltip: 'Página Anterior',
                labelDisplayedRows: '{from}-{to} de {count}',
                nextTooltip: 'Próxima Página',
                lastTooltip: 'Última Página',
              },
            }}
            icons={{
              Add: React.forwardRef((props, ref) => (
                <AddCircle style={{ color: '#2B7B24 ' }} {...props} ref={ref} />
              )),
              Check: forwardRef((props, ref) => <CheckBox {...props} ref={ref} />),
              ThirdStateCheck: forwardRef((props, ref) => (
                <CheckBoxOutlineBlank {...props} ref={ref} />
              )),
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
