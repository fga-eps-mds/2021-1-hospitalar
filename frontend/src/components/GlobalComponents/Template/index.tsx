import { Grid, Typography } from '@material-ui/core'

import { Header } from '../Header'
import React from 'react'
import { useStyles } from './styles'

type PropsTemplate = {
  children: React.ReactNode
}

export function Template({ children }: PropsTemplate): React.ReactElement {
  const classes = useStyles()
  return (
    <Grid
      container
      spacing={1}
      className={classes.divBackground}
      alignItems='center'
      direction='column'
    >
      <Header
        links={[
          { texto: 'Home', link: '/' },
          { texto: 'Nova Avaliação', link: '/NovaAvaliacao' },
          { texto: 'Avaliações', link: '/avaliacao' },
          { texto: 'Relatórios', link: '/relatorio' },
        ]}
      />

      <Typography className={classes.famil} variant='h2'>
        FAMil
      </Typography>

      <Grid container item className={classes.contentBox}>
        {children}
      </Grid>
    </Grid>
  )
}
