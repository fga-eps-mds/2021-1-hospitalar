import { Grid, TextField, Typography } from '@material-ui/core'
import React, { useContext, useState } from 'react'

import AuthContext from '../../context/auth'
import { Button } from '../../components/GlobalComponents/Inputs/Button'
import logo from '../../assets/logo_cover.png'
import { useHistory } from 'react-router-dom'
import { useStyles } from './styles'

export function Login(): React.ReactElement {
  const classes = useStyles()
  const loginData = useContext(AuthContext)
  const history = useHistory()

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erroStatus, setErroStatus] = useState(false)

  let status = true

  const emailEsenhaExiste = () => {
    if (email && senha) {
      status = true
      setErroStatus(false)
    } else {
      status = false
      setErroStatus(true)
    }
  }

  const verifica = () => {
    emailEsenhaExiste()
    if (status === true) {
      if (email.match(/@/) && email.match(/.com/)) {
        status = true
        setErroStatus(false)
      } else {
        status = false
        setErroStatus(true)
      }
    } else {
      status = false
      setErroStatus(true)
    }
  }

  const handleSubmit = async () => {
    verifica()
    if (status === true) {
      await loginData.logIn(email, senha)
      history.push('/home')
    } else {
      status = false
      setErroStatus(true)
      alert('Dados inválidos, tente novamente')
    }
  }

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
                error={erroStatus}
                className={classes.emailText}
                onChange={(e) => {
                  e.preventDefault()
                  setEmail(e.target.value)
                }}
              />
              <TextField
                label='Senha'
                error={erroStatus}
                type='password'
                className={classes.senhaText}
                onChange={(e) => {
                  e.preventDefault()
                  setSenha(e.target.value)
                }}
              />
              <Button onClick={handleSubmit}> ENTRAR </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
