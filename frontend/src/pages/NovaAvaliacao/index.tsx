import { DatePicker, LocalizationProvider } from '@material-ui/pickers'
import { FormGroup, Grid, IconButton, Typography } from '@material-ui/core'
import React, { useState } from 'react'

import Autocomplete from '@material-ui/lab/Autocomplete'
import { Button } from '../../components/GlobalComponents/Inputs/Button'
import DateFnsAdapter from '@material-ui/pickers/adapter/date-fns'
import { Form } from '../../components/GlobalComponents/Forms/Form'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import Logo from '../../assets/logo-2021-v2.png'
import { Template } from '../../components/GlobalComponents/Template'
import TextField from '@material-ui/core/TextField'
import { useStyles } from './styles'

export function NovaAvaliacao(): React.ReactElement {
  const classes = useStyles()

  const [value, setValue] = useState<Date | null>(new Date())

  const generateForm = () => {
    const users = [
      { name: 'User 1', id: 1994 },
      { name: 'User 2', id: 1972 },
    ]

    return (
      <FormGroup>
        <Grid
          container
          direction='row'
          spacing={2}
          justifyContent='space-between'
          alignContent='center'
          className={classes.formContainer}
          xs={12}
        >
          <Grid item container direction='column' xs={12} md={6} lg={4}>
            <Typography className={classes.avaliadorTitle}> Avaliadores </Typography>
            <Autocomplete
              multiple
              id='tags-standard'
              options={users}
              getOptionLabel={(option: any) => option.name}
              renderInput={(params: any) => (
                <TextField
                  className={classes.inputText}
                  {...params}
                  variant='standard'
                  label='Escolha os Avaliadores'
                  placeholder='Avaliadores'
                />
              )}
            />
            <Button
              onClick={() => null}
              color='secondary'
              className={classes.generateBtn}
            >
              GERAR
            </Button>
          </Grid>
          <Grid item direction='column' xs={12} md={6} lg={4} alignItems='center'>
            <Grid>
              <Typography className={classes.avaliadorTitle}> Hospital </Typography>
              <TextField
                className={classes.inputText}
                variant='standard'
                label='Digite o Hospital'
                placeholder='Nome'
              />
            </Grid>
            <Grid>
              <Typography className={classes.avaliadorTitle}> Sigla </Typography>
              <TextField
                className={classes.inputText}
                variant='standard'
                label='Digite a Sigla do Hospital'
                placeholder='Sigla'
              />
            </Grid>
            <Grid>
              <Typography className={classes.avaliadorTitle}> Data </Typography>
              <LocalizationProvider dateAdapter={DateFnsAdapter}>
                <DatePicker
                  label='Basic example'
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                  renderInput={(params: any) => (
                    <TextField
                      className={classes.inputText}
                      {...params}
                      variant='standard'
                      label='Data da Avaliação'
                      placeholder='Data'
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
          <Grid
            item
            direction='column'
            xs={12}
            md={6}
            lg={4}
            justifyContent='space-evenly'
          >
            <Grid>
              <img alt='Logo FAMil' src={Logo} className={classes.imgLogo} />
            </Grid>
            <Grid>
              <Typography className={classes.avaliadorTitle}> Código </Typography>
              <TextField
                className={classes.inputText}
                variant='standard'
                label='Código da Avaliação'
                placeholder='Código'
              />
            </Grid>
          </Grid>
          <Grid item container direction='row' xs={12} justifyContent='center'>
            <Button
              onClick={() => null}
              color='secondary'
              className={classes.generateBtn2}
              size='large'
            >
              GERAR
            </Button>
          </Grid>
        </Grid>
      </FormGroup>
    )
  }

  return (
    <Template>
      <Grid
        container
        direction='column'
        alignItems='flex-start'
        className={classes.container}
      >
        <Grid
          item
          container
          direction='row'
          className={classes.titleContainer}
          justifyContent='space-between'
        >
          <Grid item xs={6} md={8} lg={8} alignItems='center' direction='row'>
            <Typography variant='h5' className={classes.title}>
              {' '}
              Gerar Novo Relatório{' '}
            </Typography>
          </Grid>
          <IconButton color='secondary' edge='start' className={classes.helpIcon}>
            <HelpOutlineIcon fontSize='large' />
          </IconButton>
        </Grid>
        <Form>{generateForm()}</Form>
      </Grid>
    </Template>
  )
}
