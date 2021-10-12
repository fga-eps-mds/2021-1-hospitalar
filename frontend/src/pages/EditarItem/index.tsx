/* eslint-disable react/self-closing-comp */

import { Box, Grid, Tab, Tabs } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

import { Avaliacao } from '../../types/Avaliacao'
import { Button } from '../../components/GlobalComponents/Inputs/Button'
import { Header } from '../../components/GlobalComponents/Header'
import MaterialTable from 'material-table'
import { api } from '../../api'
import { useParams } from 'react-router-dom'
import { useStyles } from './styles'

type Props = {
  idAvaliacao: string
}

export function EditarItem(): React.ReactElement {
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
            nome: 'testando',
            status: '',
            comentario: '',
            pontuacao: 0,
          },
          {
            id: 0,
            nome: 'testando2',
            status: '',
            comentario: '',
            pontuacao: 0,
          },
        ],
      },
    ],
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

  /*
   *  Declaração do título do material table
   */
  const [state] = React.useState({
    columns: [
      {
        title: 'Nº',
        field: 'id',
        editable: never,
      },
      {
        title: 'Requisitos em análise',
        field: 'nome',
      },
    ],
  })

  /*
   *  Função para recarregar a página
   */
  function refreshPage() {
    window.location.reload()
  }

  /*
   *  Função para paginação, alternado o valor de secao
   */
  const funcBotaoA = () => {
    setIdSecao(0)
  }
  const funcBotao = () => {
    setIdSecao(1)
  }

  const [value, setValue] = React.useState(0)

  const handleChange = (newValue: number) => {
    setValue(newValue)
  }

  /*
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
              { texto: 'Home', link: '/Home' },
              { texto: 'Nova Avaliação', link: '/NovaAvaliacao' },
              { texto: 'Avaliações', link: '/avaliacao' },
              { texto: 'Relatórios', link: '/relatorio' },
            ]}
          />
        </Grid>
      </Grid>

      <Grid className={classes.titleEditarSecao}>EDITAR SEÇÃO DA AVALIAÇÃO</Grid>

      {/* corpo */}
      <Grid className={classes.backgroundAvaliacao}>
        <Grid className='App'>
          <Grid className={classes.gridButton}>
            <Box sx={{ maxWidth: 1000, bgcolor: '#175215' }}>
              <Tabs
                value={value}
                onChange={(_, newValue) => handleChange(newValue)}
                variant='scrollable'
                scrollButtons='auto'
                aria-label='scrollable auto tabs example'
              >
                <Tab label='Seção A' onClick={funcBotaoA} />
                <Tab label='Seção B' onClick={funcBotao} />
                <Tab label='Seção C' />
                <Tab label='Seção D' />
                <Tab label='Seção E' />
                <Tab label='Seção F' />
                <Tab label='Seção G' />
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
                  }, 100)
                  setTimeout(() => {
                    bancoGet()
                  }, 100)
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve(null)
                    if (oldData) {
                      const data = avaliacao.secoes[idSecao].subtopicos
                      data[data.indexOf(oldData)] = newData
                      bancoPut()
                    }
                  }, 100)
                  setTimeout(() => {
                    bancoGet()
                  }, 100)
                }),
              onRowDelete: (oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve(null)
                    const data = avaliacao.secoes[idSecao].subtopicos
                    data.splice(data.indexOf(oldData), 1)
                    bancoPut()
                  }, 100)
                  setTimeout(() => {
                    bancoGet()
                  }, 100)
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
                tooltip: 'Refresh Data',
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
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
