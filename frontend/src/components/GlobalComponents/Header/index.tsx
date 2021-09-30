import { AppBar, Drawer, IconButton, Toolbar } from '@material-ui/core'
import React, { useState } from 'react'

import { AccountCircleRounded as AccIcon } from '@material-ui/icons'
import { Button } from '../Inputs/Button'
import { HeaderLink } from '../../../types/HeaderLink'
import Logo from '../../../assets/logo-2021-v2.png'
import { useHistory } from 'react-router-dom'
import { useStyles } from './styles'

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
    <Drawer anchor='left' open={openDrawer} onClose={() => handleOpenDrawer()}>
      <div className={classes.linksContainerDrawer}>
        {links.map((link) => (
          <Button onClick={() => history.push(link.link)}>{link.texto}</Button>
        ))}
      </div>
    </Drawer>
  )

  return (
    <AppBar position='static' color='secondary' className={classes.container}>
      <Toolbar>
        <img alt='Logo FAMil' src={Logo} className={classes.imgLogo} />

        <IconButton color='inherit' edge='start' onClick={() => handleOpenDrawer()}>
          <AccIcon className={classes.imgUser} />
        </IconButton>

        <div className={classes.linksContainer}>
          {links.map((link) => (
            <Button
              variant='text'
              color='inherit'
              onClick={() => history.push(link.link)}
            >
              {link.texto}
            </Button>
          ))}
        </div>
      </Toolbar>

      {drawer()}
    </AppBar>
  )
}
