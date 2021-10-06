/* eslint-disable react/self-closing-comp */

import { Grid, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'

import { Button } from '../../components/GlobalComponents/Inputs/Button'
import { Header } from '../../components/GlobalComponents/Header'
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

  function addNovoItem() {
    setItem([
      ...itens,
      {
        n: 4,
        nsp: 'O NSP promove ações para a gestão do risco assistencial na instituição.',
      },
    ])
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

      <Grid className={classes.tituloEditar}>EDITAR SEÇÃO DA AVALIAÇÃO</Grid>

      {/* corpo */}
      <Grid className={classes.backgroundAvaliacao}>
        <Grid className={classes.gridField}>
          <TextField
            className={classes.textFieldDesign}
            label='Pesquisar'
            variant='outlined'
            color='primary'
            focused
          />
        </Grid>

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

        <Grid className={classes.tabelaGeral}>
          <Grid className={classes.GeralNumero}>
            <Grid className={classes.textNumerobordasuperior}>Nº</Grid>
          </Grid>

          <Grid className={classes.GeralTexto}>
            <Grid className={classes.TextoEscrito}>
              Núcleo de Segurança do Paciente (Núcleo de Segurança do Paciente (NSP))
            </Grid>
          </Grid>

          <Grid className={classes.GeralTexto}>
            <Grid className={classes.IconeEditar}>...</Grid>
          </Grid>

          <Grid className={classes.GeralTexto}>
            <Grid className={classes.IconeLixeira}>...</Grid>
          </Grid>
        </Grid>
        <div className={classes.itensTabela}>
          {itens.map((item) => (
            <p>
              {item.n} {item.nsp}
            </p>
          ))}
          <Button
            className={classes.botaoAdd}
            size='medium'
            onClick={() => addNovoItem()}
          >
            Adicionar Item
          </Button>
        </div>
      </Grid>
    </Grid>
  )
}
