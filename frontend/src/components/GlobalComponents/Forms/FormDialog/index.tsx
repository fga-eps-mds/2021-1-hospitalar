import { Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core'

import { Button } from '../../Inputs/Button'
import React from 'react'

type Props = {
  title: string
  item: any
  toggle: () => void
  handleSubmit: (item: any) => void
  children?: React.ReactNode
}

export function FormDialog({ title, toggle, handleSubmit, item, children }: Props) {
  return (
    <Dialog open onClose={toggle}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button color='default' onClick={toggle}>
          Cancel
        </Button>
        <Button onClick={() => handleSubmit(item)}>Submit</Button>
      </DialogActions>
    </Dialog>
  )
}
