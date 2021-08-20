import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core'
import { Button } from '../../Inputs/Button'

type Props = {
  title: string
  item: any
  toggle: () => void
  handleSubmit: (item: any) => void
}

export const FormDialog: React.FC<Props> = ({
  title,
  toggle,
  handleSubmit,
  item,
  children,
}) => {
  return (
    <Dialog open={true} onClose={toggle}>
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
