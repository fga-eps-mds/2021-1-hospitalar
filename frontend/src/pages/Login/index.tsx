import { Grid, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

import { Button } from '../../components/GlobalComponents/Inputs/Button'
import { api } from '../../api'
import logo from '../../assets/logo_cover.png'
import { useStyles } from './styles'

export function Login(): React.ReactElement {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [usuario, setUsuario] = useState({
    name: '',
    email: '',
    tipo: '',
    funcao: '',
    organizacao: '',
  })

  const classes = useStyles()

  let status = true

  //  function loginApi(){
  //  useEffect(() => {
  //  teste()
  //  }, [])

  function emailEsenhaExiste() {
    if (email && senha) {
      status = true
    } else {
      status = false
    }
  }

  function verifica() {
    emailEsenhaExiste()
    if (status === true) {
      if (email.match(/@/) && email.match(/.com/)) {
        status = true
      } else {
        status = false
      }
    } else {
      status = false
    }
  }

  function handleSubmit() {
    verifica()
    if (status === true) {
      api
        .post('authenticate', {
          email,
          password: senha,
        })
        .then((response) => setUsuario(response.data.user))
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err))
    }
  }

  useEffect(() => {
    console.log(`Bem-Vindo ${usuario.name}`)
  }, [usuario])

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

          <div className={classes.line}></div>
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
              <TextField
                label='Email'
                className={classes.emailText}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label='Senha'
                type='password'
                className={classes.senhaText}
                onChange={(e) => setSenha(e.target.value)}
              />
              <Button onClick={() => handleSubmit()}> ENTRAR </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
