import { TextField as MuiTextField, TextFieldProps } from '@material-ui/core'

import React from 'react'

type Props = TextFieldProps & {
  name: string
  label: string
  value: string
  color?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>, checked?: boolean) => void
}

export function TextField({
  name,
  label,
  value,
  color,
  onChange,
  ...rest
}: Props): React.ReactElement {
  return (
    <MuiTextField
      name={name}
      label={label}
      value={value}
      color={color || 'primary'}
      onChange={onChange}
      {...rest}
    />
  )
}
