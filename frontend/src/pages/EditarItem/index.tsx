/* eslint-disable react/self-closing-comp */

import { Button } from '../../components/GlobalComponents/Inputs/Button'
import { Grid } from '@material-ui/core'
import { Header } from '../../components/GlobalComponents/Header'
import MaterialTable from 'material-table'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useStyles } from './styles'

export function EditarItem(): React.ReactElement {
  const classes = useStyles()

  /*
   * Vai fazer a transição de páginas para a próxima página
   * É necessario inicializar o history.
   */

  const history = useHistory()

  const funcBotao = () => {
    console.log('testeBotao')
  }

  const tabelaEstadoInicial = {
    columns: [
      {
        title: 'Nº',
        field: 'n',
      },
      {
        title: 'Núcleo de Segurança do Paciente (NSP)',
        field: 'nsp',
      },
    ],
    data: [
      {
        n: 1,
        nsp: 'O serviço de saúde possui Núcleo de Segurança do Paciente (NSP) nomeado pela direção da OMS.',
      },
      {
        n: 2,
        nsp: 'Há um profissional responsável pelo NSP com suas atribuições estabelecidas.',
      },
      {
        n: 3,
        nsp: 'A direção do serviço de saúde disponibiliza pessoal, ...',
      },
    ],
  }

  const [state, setState] = React.useState(tabelaEstadoInicial)

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
            data={state.data}
            editable={{
              onRowAdd: (newData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve(null)
                    setState((prevState) => {
                      const data = [...prevState.data]
                      data.push(newData)
                      return { ...prevState, data }
                    })
                  }, 500)
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve(null)
                    if (oldData) {
                      setState((prevState) => {
                        const data = [...prevState.data]
                        data[data.indexOf(oldData)] = newData
                        return { ...prevState, data }
                      })
                    }
                  }, 500)
                }),
              onRowDelete: (oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve(null)
                    setState((prevState) => {
                      const data = [...prevState.data]
                      data.splice(data.indexOf(oldData), 1)
                      return { ...prevState, data }
                    })
                  }, 500)
                }),
            }}
            options={{
              searchFieldAlignment: 'left',
              headerStyle: {
                backgroundColor: '#175215',
                color: '#FFFFFF',
                fontFamily: 'OpenSans',
                fontSize: '23px',
              },
            }}
            style={{
              backgroundColor: '#FFFFF2',
              color: '#000000',
              fontSize: '20px',
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
