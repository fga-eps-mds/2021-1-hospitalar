import { AppBar, IconButton, Toolbar } from '@material-ui/core'

import { AccountCircleRounded as AccIcon } from '@material-ui/icons'
import Logo from '../../../assets/logo-2021-v2.png'
import React from 'react'
import { useStyles } from './styles'

export function MPHeader(): React.ReactElement {
  const classes = useStyles()

  return (
    <AppBar position='static' color='secondary' className={classes.container}>
      <Toolbar>
        {/* Esse é o logo principal. */}
        <img alt='Logo FAMil' src={Logo} className={classes.imgLogo} />

        {/* Aqui são criados os botões do header. 
            Eles somem quando a tela é pequena demais */}
        <div className={classes.linksContainer}>.</div>

        {/* Aqui é o ícone do usuário. Ele some quando a tela é pequena */}
        <IconButton color='inherit' edge='start' className={classes.fullScreen}>
          <AccIcon className={classes.imgUser} />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
