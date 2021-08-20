import { Grid } from '@material-ui/core'
import React from 'react'
import { Header } from '../../components/GlobalComponents/Header'

export const Home: React.FC = () => {
  return (
    <Grid container direction='column' spacing={2}>
      <Grid item>
        <Header title='Home Page' />
      </Grid>
    </Grid>
  )
}
