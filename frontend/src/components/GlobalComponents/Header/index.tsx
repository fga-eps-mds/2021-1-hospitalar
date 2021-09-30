import {
  AccountCircleRounded as AccIcon,
  MenuRounded as MenuIcon,
} from '@material-ui/icons'
import { AppBar, IconButton, Toolbar, Typography, Box, Button } from '@material-ui/core'

import React from 'react'
import { useStyles } from './styles'

type Props = {
  title: string
}

export function Header({ title }: Props): React.ReactElement {
  const classes = useStyles()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div'>
            News
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
