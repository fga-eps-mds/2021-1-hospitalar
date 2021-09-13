import { Grid, Typography } from '@material-ui/core'
import React, { useState } from 'react'

import { Button } from '../../components/GlobalComponents/Inputs/Button'
import { Header } from '../../components/GlobalComponents/Header'
import { TextField } from '../../components/GlobalComponents/Inputs/TextField'
import { useStyles } from './styles'

export function GenerateReport(): React.ReactElement {
  const classes = useStyles()

  const testHospitalNames = ['#hospital1', '#hospital2', '#hospital3']

  const [selectedHospitalName, setSelectedHospitalName] = useState('')
  const [code, setCode] = useState('')

  const getHospitalName = (hospitalCode: string) => {
    const index = testHospitalNames.indexOf(hospitalCode)

    if (index > -1) {
      setSelectedHospitalName(testHospitalNames[index])
    } else {
      setSelectedHospitalName('')
    }
  }

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    setCode(e.target.value)

    getHospitalName(e.target.value)
  }

  const handleSubmit = () => {
    if (code !== '' && code.charAt(0) === '#') {
      getHospitalName(code)
    }
  }

  const generateForm = () => (
    <>
      {/* Dois Grids, o primeiro é um texto e o segundo 
      é um formulário com dois textFields e um botão */}
      <Grid item>
        <Typography variant='h3'>Gerar Relatório</Typography>
      </Grid>
      <Grid item container direction='column' alignItems='center' spacing={1}>
        <Grid item>
          <TextField
            name='Código'
            value={code}
            label='Código'
            onChange={handleCodeChange}
            variant='outlined'
          />
        </Grid>
        <Grid item>
          <TextField
            disabled
            name='Código'
            value=''
            label={selectedHospitalName}
            onChange={() => {}}
            variant='outlined'
          />
        </Grid>
        <Grid item>
          <Button onClick={handleSubmit}>Baixar (.pdf)</Button>
        </Grid>
      </Grid>
    </>
  )

  const generateInfoBox = () => {
    const paragrafos = [
      {
        id: 1,
        titulo: 'Demonstração de Gráfico',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec eleifend arcu.' +
          ' Duis blandit condimentum mattis. Suspendisse eu tortor ut nibh posuere pharetra eget' +
          'et sapien. Aliquam a massa aliquam, varius libero vitae, accumsan mauris. Pellentesque' +
          'habitant morbi tristique senectus et netus et malesuada fames.',
      },
      {
        id: 2,
        titulo: 'Legendas',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec eleifend arcu.' +
          ' Duis blandit condimentum mattis. Suspendisse eu tortor ut nibh posuere pharetra eget' +
          'et sapien. Aliquam a massa aliquam, varius libero vitae, accumsan mauris. Pellentesque' +
          'habitant morbi tristique senectus et netus et malesuada fames.',
      },
      {
        id: 3,
        titulo: 'Referências',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec eleifend arcu.' +
          ' Duis blandit condimentum mattis. Suspendisse eu tortor ut nibh posuere pharetra eget' +
          'et sapien. Aliquam a massa aliquam, varius libero vitae, accumsan mauris. Pellentesque' +
          'habitant morbi tristique senectus et netus et malesuada fames.',
      },
    ]
    return (
      <>
        {/* Título com borda... Contém três grids, o da esquerda e direita são espaçadores 
    e o do meio é o texto */}
        <Grid item container>
          <Grid item xs={1} />
          <Grid item container xs={10} justifyContent='center' className={classes.title}>
            <Grid item>
              <Typography variant='h4'>Descrição de Relatório</Typography>
            </Grid>
          </Grid>
          <Grid item xs={1} />
        </Grid>
        {/* Parágrafos... Cada parágrafo tem três grids, o da esquerda e direita são espaçadores 
    e o do meio é o texto com um título */}
        {paragrafos.map((paragrafo) => (
          <Grid key={paragrafo.id} item container>
            <Grid item xs={1} />
            <Grid item container direction='column' xs={10} spacing={2}>
              <Grid item>
                <Typography variant='h5' align='center'>
                  {paragrafo.titulo}
                </Typography>
              </Grid>
              <Grid item>
                <Typography align='justify'>{paragrafo.texto}</Typography>
              </Grid>
            </Grid>
            <Grid item xs={1} />
          </Grid>
        ))}
      </>
    )
  }

  return (
    <Grid container direction='column' spacing={6}>
      {/* Header */}
      <Grid item>
        <Header title='Relatório' />
      </Grid>
      {/* Tres Grids ocupam o tamanho total horizontal da tela, 
      o da esquerda e direita são transparentes 
      e o do meio é um quadrado verde com o Formulário */}
      <Grid item container>
        <Grid item xs={false} sm={4} />
        <Grid
          item
          container
          xs={12}
          sm={4}
          direction='column'
          className={classes.form}
          alignItems='center'
          spacing={2}
        >
          {generateForm()}
        </Grid>
        <Grid item xs={false} sm={4} />
      </Grid>
      {/* Três Grids, o da esquerda e direita são espaçadores e 
      o do meio é um quadrado amarelo com texto */}
      <Grid item container>
        <Grid item xs={false} sm={1} />
        <Grid
          item
          container
          xs={false}
          sm={10}
          direction='column'
          className={classes.textContainer}
          alignItems='center'
          spacing={2}
        >
          {generateInfoBox()}
        </Grid>
        <Grid item xs={false} sm={1} />
      </Grid>
    </Grid>
  )
}
