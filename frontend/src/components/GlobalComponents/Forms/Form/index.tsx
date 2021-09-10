import React from 'react'
import { useStyles } from './styles'

type Props = {
  children?: React.ReactNode
}

export function Form({ children }: Props): React.ReactElement {
  const classes = useStyles()
  return <form className={classes.root}>{children}</form>
}
