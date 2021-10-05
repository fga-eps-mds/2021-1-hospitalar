import { FormGroup, Grid, IconButton, Typography } from '@material-ui/core'

import Autocomplete from '@material-ui/lab/Autocomplete'
import { Form } from '../../components/GlobalComponents/Forms/Form'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import React from 'react'
import { Template } from '../../components/GlobalComponents/Template'
import TextField from '@material-ui/core/TextField'
import { useStyles } from './styles'

export function NovaAvaliacao(): React.ReactElement {
  const classes = useStyles()

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
          className={classes.formContainer}
        >
          <Grid item container direction='column' xs={1} md={4}>
            <Typography className={classes.avaliadorTitle}> Avaliadores </Typography>
            <Autocomplete
              multiple
              id='tags-standard'
              options={users}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant='standard'
                  label='Escolha os Avaliadores'
                  placeholder='Favorites'
                />
              )}
            />
          </Grid>
          <Grid item direction='column' xs={4}>
            Test
          </Grid>
          <Grid item direction='column' xs={4}>
            Teste
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
        alignItems='center'
        className={classes.container}
      >
        <Grid item container direction='row' className={classes.titleContainer}>
          <Typography variant='h5' className={classes.title}>
            {' '}
            Gerar Novo Relatório{' '}
          </Typography>
          <IconButton color='secondary' edge='start' className={classes.helpIcon}>
            <HelpOutlineIcon fontSize='large' />
          </IconButton>
        </Grid>
        <Form>{generateForm()}</Form>
      </Grid>
    </Template>
  )
}
