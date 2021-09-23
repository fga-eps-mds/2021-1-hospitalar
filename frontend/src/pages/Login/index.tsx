import React from 'react'
import { Button } from '../../components/GlobalComponents/Inputs/Button'
import {Grid, Typography , TextField} from '@material-ui/core'
import { useStyles } from './styles'
import { useHistory } from 'react-router-dom'



export function Login(): React.ReactElement {

  const history = useHistory()

  const classes = useStyles()

  return(
    <>

    <Grid
      container
      style={{
        height: '100%',
        position: 'fixed'
      }}
    >

      <Grid 
        container
        justifyContent='center'
        alignItems='center'
        direction='column'
        style={{
          paddingBottom: '50px',
          backgroundColor: '#FFFEF2',
          color: '#175215',
        }}
      >
        
        <Typography variant='h1'> FAMiL </Typography>

        <Grid
          item
          style={{
            width: '11vw',
            marginBottom: '1vw',
            height: '0px',
            border: '2px solid #175215',
          }}
        >
          .
        </Grid>

        <Typography variant='h5'> Ferramenta de Acreditação Militar </Typography>

      </Grid>
      <Grid 
        container
        alignItems="center"
        direction="column"
        style={{ minHeight: "100vh" , backgroundColor: '#FFFEF2'}}
      >
      
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          style={{
            height: '60vh',
            width: '55vw',
            border: '6px solid #175215',
            borderRadius: '10px',
            backgroundColor: "#D6F0C8"
          }}
          className={classes.login}
          

        >

          <Grid>
            <img 
            className={classes.image}

            src='https://raw.githubusercontent.com/fga-eps-mds/2021-1-hospitalar/main/docs/_media/logo_cover.png' alt='logo'
            />
          </Grid>

          <Grid
            style={{
              display:"flex",
              flexDirection:"column",
            }}
          >
            <Typography variant="h4" style={{paddingBottom: '50px'}}> LOGIN </Typography>
            <TextField label="Email" style={{ width: '18vw', paddingBottom: '20px'}}/>
            <TextField label="Senha" type='password' style={{ width: '18vw' , paddingBottom: '30px'}}/>
            <Button onClick={() => history.push('Home')}> ENTRAR </Button>
          </Grid>
          
        </Grid>

      </Grid>

    </Grid>
    </>
  )
}