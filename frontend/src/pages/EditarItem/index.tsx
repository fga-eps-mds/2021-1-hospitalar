/* eslint-disable react/self-closing-comp */

import { Grid, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'

import { Button } from '../../components/GlobalComponents/Inputs/Button'
import { Header } from '../../components/GlobalComponents/Header'
import MaterialTable from 'material-table'
import { useHistory } from 'react-router-dom'
import { useStyles } from './styles'

export function EditarItem(): React.ReactElement {
  const classes = useStyles()

  /*
   * Vai fazer a transição de páginas para a próxima página
   * É necessario inicializar o history.
   */

  const history = useHistory()

  const voltar = () => {
    console.log('voltando')
  }
  const funcBotao = () => {
    console.log('testebotao')
  }

  const [itens, setItem] = useState([
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
  ])

  const columns = [
    { title: 'N°', field: 'n' },
    {
      title: 'NSP',
      field: 'nsp',
      sorting: false,
      textAlign: 'left',
    },
  ]

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

      <Grid className={classes.tituloEditar}>EDITAR SEÇÃO DA AVALIAÇÃO</Grid>

      {/* corpo */}
      <Grid className={classes.backgroundAvaliacao}>
        <Grid className='App'>
          <Grid className={classes.gridbotao}>
            <Button className={classes.botaodesign} size='medium' onClick={funcBotao}>
              A
            </Button>
            <Button className={classes.botaodesign} size='medium' onClick={funcBotao}>
              B
            </Button>
            <Button className={classes.botaodesign} size='medium' onClick={funcBotao}>
              C
            </Button>
            <Button className={classes.botaodesign} size='medium' onClick={funcBotao}>
              D
            </Button>
            <Button className={classes.botaodesign} size='medium' onClick={funcBotao}>
              E
            </Button>
            <Button className={classes.botaodesign} size='medium' onClick={funcBotao}>
              F
            </Button>
          </Grid>
          <MaterialTable
            columns={columns}
            data={itens}
            title='Subtópicos'
            editable={{
              onRowAdd: (newRow) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    setItem([...itens, newRow])
                    resolve()
                  }, 500)
                }),
              onRowUpdate: (newRow, oldRow) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const updatedData = [...itens]
                    updatedData[oldRow.tableData.id] = newRow
                    setItem(updatedData)
                    resolve()
                  }, 500)
                }),
              onRowDelete: (selectedRow) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const updatedData = [...itens]
                    updatedData.splice(selectedRow.tableData.id, 1)
                    setItem(updatedData)
                    resolve()
                  }, 1000)
                }),
            }}
            options={{
              searchFieldAlignment: 'left',
              searchFieldVariant: 'outlined',
              pageSizeOptions: [4, 5, 10, 20, 50, 100],
              pageSize: 4,
              actionsColumnIndex: -1,
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
