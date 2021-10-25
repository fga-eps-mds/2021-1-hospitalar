import { TextField as MuiTextField, TextFieldProps } from '@material-ui/core'

import React from 'react'
import { withStyles } from '@material-ui/core/styles'

type Props = TextFieldProps & {
  name: string
  label: string
  value: string
  color?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>, checked?: boolean) => void
}

const DarkerDisabledTextField = withStyles({
  root: {
    marginRight: 8,
    '& .MuiInputBase-root.Mui-disabled': {
      color: '#000000', // (default alpha is 0.38)
    },
  },
})(MuiTextField)

export function TextField({
  name,
  label,
  value,
  color,
  onChange,
  ...rest
}: Props): React.ReactElement {
  return (
    <DarkerDisabledTextField
      name={name}
      label={label}
      value={value}
      color={color || 'primary'}
      onChange={onChange}
      {...rest}
    />
  )
}
