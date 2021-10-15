import { DesktopDatePicker, LocalizationProvider } from '@material-ui/pickers'

import AdapterDateFns from '@material-ui/pickers/adapter/date-fns'
import React from 'react'
import { TextField } from '@material-ui/core'
import { useStyles } from './styles'

type Props = {
  data: Date | null
  setData: (date: Date | null) => void
}

export function DatePicker({ data, setData }: Props): React.ReactElement {
  const classes = useStyles()

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        inputFormat='dd/MM/yyyy'
        value={data}
        onChange={setData}
        renderInput={(params) => (
          <TextField className={classes.inputText} variant='standard' {...params} />
        )}
      />
    </LocalizationProvider>
  )
}
