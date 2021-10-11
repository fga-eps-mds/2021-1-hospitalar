/* eslint-disable react/self-closing-comp */

import React, { useEffect, useState } from 'react'

import { Avaliacao } from '../../types/Avaliacao'
import { Button } from '../../components/GlobalComponents/Inputs/Button'
import { Grid } from '@material-ui/core'
import { Header } from '../../components/GlobalComponents/Header'
import MaterialTable from 'material-table'
import { api } from '../../api'
import { useParams } from 'react-router-dom'
import { useStyles } from './styles'

type Props = {
  idAvaliacao: string
}

export function EditarItem(): React.ReactElement {
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

  const funcBotao = () => {
    console.log('testebotao')
  }

  const handleSubmmit = () => {
    api
      .get<Avaliacao>(`http://127.0.0.1:8000/api/avaliacao/${idAvaliacao}/`)

      .then(({ data }) => setAvaliacao(data))
      // eslint-disable-next-line no-console
      .catch(console.log)
  }

  useEffect(() => {
    handleSubmmit()
  }, [])

  const never: 'never' = 'never'

  const [state, setState] = React.useState({
    columns: [
      {
        title: 'Nº',
        field: 'id',
        editable: never,
      },
      {
        title: 'Teste',
        field: 'nome',
      },
    ],
  })

  function refreshPage() {
    window.location.reload()
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
            <Button className={classes.designButton} size='medium' onClick={funcBotao}>
              A
            </Button>
            <Button className={classes.designButton} size='medium' onClick={funcBotao}>
              B
            </Button>
            <Button className={classes.designButton} size='medium' onClick={funcBotao}>
              C
            </Button>
            <Button className={classes.designButton} size='medium' onClick={funcBotao}>
              D
            </Button>
            <Button className={classes.designButton} size='medium' onClick={funcBotao}>
              E
            </Button>
            <Button className={classes.designButton} size='medium' onClick={funcBotao}>
              F
            </Button>
          </Grid>
          <MaterialTable
            title='Subtópicos'
            columns={state.columns}
            data={avaliacao.secoes[0].subtopicos}
            editable={{
              onRowAdd: (newData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve(null)
                    avaliacao.secoes[0].subtopicos.push(newData)
                    api.put<Avaliacao, Avaliacao>(
                      `http://127.0.0.1:8000/api/avaliacao/${idAvaliacao}/`,
                      avaliacao
                    )
                    refreshPage()
                  }, 500)
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve(null)
                    if (oldData) {
                      const data = avaliacao.secoes[0].subtopicos
                      data[data.indexOf(oldData)] = newData
                      api.put<Avaliacao, Avaliacao>(
                        `http://127.0.0.1:8000/api/avaliacao/${idAvaliacao}/`,
                        avaliacao
                      )
                      refreshPage()
                    }
                  }, 500)
                }),
              onRowDelete: (oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve(null)
                    const data = avaliacao.secoes[0].subtopicos
                    data.splice(data.indexOf(oldData), 1)
                    api.put<Avaliacao, Avaliacao>(
                      `http://127.0.0.1:8000/api/avaliacao/${idAvaliacao}/`,
                      avaliacao
                    )
                    refreshPage()
                  }, 500)
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
