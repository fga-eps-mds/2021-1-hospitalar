import AcUnitIcon from '@material-ui/icons/AcUnit'
import React from 'react'
import { useStyles } from './styles'

export function PaginaChecklist(): React.ReactElement {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <AcUnitIcon />
    </div>
  )
}
