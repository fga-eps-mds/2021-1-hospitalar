import {
  AccountCircleRounded as AccIcon,
  MenuRounded as MenuIcon,
} from '@material-ui/icons'
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'

import React from 'react'
import { useStyles } from './styles'

type Props = {
  title: string
}

export function Header({ title }: Props): React.ReactElement {
  const classes = useStyles()

  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton edge='start' color='inherit'>
          <MenuIcon />
        </IconButton>
        <Typography className={classes.typography}>{title}</Typography>
        <IconButton edge='end' color='inherit'>
          <AccIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
