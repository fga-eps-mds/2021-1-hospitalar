import { Grid, TextField, Typography} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import { Button } from '../../components/GlobalComponents/Inputs/Button'
import React, { useState, useEffect, useContext } from 'react'
import logo from '../../assets/logo_cover.png'
import { useHistory } from 'react-router-dom'
import { useStyles } from './styles'
import { api } from '../../api'
import AuthContext from '../../context/auth'

export function Login(): React.ReactElement {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erroStatus, setErroStatus] = useState(false)
  const [usuario, setUsuario] = useState({
    name: '',
    email: '',
    tipo: '',
    funcao: '',
    organizacao: '',
  })

  const loginData = useContext(AuthContext)

  // console.log(signed)
  const history = useHistory()

  const classes = useStyles()

  let status = true

  //  function loginApi(){
  //  useEffect(() => {
  //  teste()
  //  }, [])

  function emailEsenhaExiste() {
    if (email && senha) {
      status = true
      setErroStatus(false)
    } else {
      status = false
      setErroStatus(true)
    }
  }

  function verifica() {
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

  function handleSubmit() {
    verifica()
    if (status === true) {
      loginData.signIn(email, senha)
    } else {
      status = false
      setErroStatus(true)
       alert('Dados inválidos, tente novamente')
    }
  }

  useEffect(() => {
    if (loginData.user !== null) history.push('/home')
  }, [loginData])

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
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label='Senha'
                error={erroStatus}
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
