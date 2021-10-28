import {
  AccountCircleRounded as AccIcon,
  MenuRounded as MenuIcon,
} from '@material-ui/icons'
import { AppBar, Box, Drawer, IconButton, Toolbar } from '@material-ui/core'
import React, { useState } from 'react'

import { Button } from '../Inputs/Button'
import { HeaderLink } from '../../../types/HeaderLink'
import Logo from '../../../assets/logo-2021-v2.png'
import { useHistory } from 'react-router-dom'
import { useStyles } from './styles'

// import userlogo from '../../../assets/user_header_icon.png'

type Props = {
  links: HeaderLink[]
}

export function Header({ links }: Props): React.ReactElement {
  const classes = useStyles()
  const history = useHistory()

  const [openDrawer, setOpenDrawer] = useState(false)

  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer)
  }

  const drawer = () => (
    <Drawer
      anchor='left'
      open={openDrawer}
      onClose={() => handleOpenDrawer()}
      classes={{ paper: classes.drawer }}
    >
      <div className={classes.linksContainerDrawer}>
        {links.map((link, idx) => (
          <Button key={idx} onClick={() => history.push(link.link)}>
            {link.texto}
          </Button>
        ))}
      </div>
    </Drawer>
  )

  return (
    <AppBar position='static' color='secondary' className={classes.container}>
      <Toolbar>
        {/* Esse é o logo principal. */}
        <img alt='Logo FAMil' src={Logo} className={classes.imgLogo} />

        {/* Aqui são criados os botões do header. 
        Eles somem quando a tela é pequena demais */}
        <div className={classes.linksContainer}>
          <Button
            variant='text'
            color='inherit'
            className={classes.headButton}
            onClick={() => history.push(links[0].link)}
          >
            {links[0].texto}
          </Button>

          <Button
            variant='text'
            color='inherit'
            className={classes.headButton}
            onClick={() => history.push(links[1].link)}
          >
            {links[1].texto}
          </Button>

          <Box className={classes.buttonSpace} />

          <Button
            variant='text'
            color='inherit'
            className={classes.headButton}
            onClick={() => history.push(links[2].link)}
          >
            {links[2].texto}
          </Button>

          <Button
            variant='text'
            color='inherit'
            className={classes.headButton}
            onClick={() => history.push(links[3].link)}
          >
            {links[3].texto}
          </Button>
        </div>

        {/* Aqui é o ícone do usuário. Ele some quando a tela é pequena */}
        <IconButton color='inherit' edge='start' className={classes.fullScreen}>
          <AccIcon className={classes.imgUser} />
        </IconButton>

        {/* Aqui é um ícone de menu que aparece quando a tela é pequena */}
        <IconButton
          color='inherit'
          edge='start'
          onClick={() => handleOpenDrawer()}
          className={classes.mobileScreen}
        >
          <MenuIcon className={classes.imgUser} />
        </IconButton>
      </Toolbar>

      {drawer()}
    </AppBar>
  )
}
