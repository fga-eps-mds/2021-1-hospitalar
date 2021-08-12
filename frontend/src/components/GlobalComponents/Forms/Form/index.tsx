import React from 'react'
import { useStyles } from './styles'

type Props = {}

export const Form: React.FC<Props> = ({ children }) => {
  const classes = useStyles()
  return <form className={classes.root}>{children}</form>
}
