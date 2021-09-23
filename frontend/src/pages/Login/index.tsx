import { Grid, TextField, Typography } from '@material-ui/core'

import { Button } from '../../components/GlobalComponents/Inputs/Button'
import React from 'react'
import logo from '../../assets/logo_cover.png'
import { useHistory } from 'react-router-dom'
import { useStyles } from './styles'

export function Login(): React.ReactElement {
  const history = useHistory()

  const classes = useStyles()

  return (
    <>
      <Grid container className={classes.container}>
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          direction='column'
          className={classes.titleContainer}
        >
          <Typography variant='h1'> FAMiL </Typography>

          <Grid item className={classes.line}>
            .
          </Grid>
          <Typography variant='h5'> Ferramenta de Acreditação Militar </Typography>
        </Grid>
        <Grid
          container
          alignItems='center'
          direction='column'
          className={classes.loginContainer}
        >
          <Grid
            container
            direction='row'
            justifyContent='space-around'
            alignItems='center'
            className={classes.login}
          >
            <Grid>
              <img className={classes.image} src={logo} alt='logo' />
            </Grid>
            <Grid className={classes.formContainer}>
              <Typography variant='h4' className={classes.loginText}>
                {' '}
                LOGIN{' '}
              </Typography>
              <TextField label='Email' className={classes.emailText} />
              <TextField label='Senha' type='password' className={classes.senhaText} />
              <Button onClick={() => history.push('Home')}> ENTRAR </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
