import {
    AccountCircleRounded as AccIcon,
    MenuRounded as MenuIcon,
} from '@material-ui/icons'
import { AppBar, Box, Container, Drawer, IconButton, Toolbar } from '@material-ui/core'
import React, { useState } from 'react'
  
import { HeaderLink } from '../../../types/HeaderLink'
import Logo from '../../../assets/logo-2021-v2.png'
import { useHistory } from 'react-router-dom'
import { useStyles } from './styles'
  
// import userlogo from '../../../assets/user_header_icon.png'
  
type Props = {
    links: HeaderLink[]
}
  
export function MPHeader(): React.ReactElement {
    const classes = useStyles()
    const history = useHistory()
  
    const [openDrawer, setOpenDrawer] = useState(false)
  
    const handleOpenDrawer = () => {
      setOpenDrawer(!openDrawer)
    }
  
  
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