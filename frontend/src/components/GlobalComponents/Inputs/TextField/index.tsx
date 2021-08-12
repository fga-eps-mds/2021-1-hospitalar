import React from 'react'
import { TextField as MuiTextField, TextFieldProps } from '@material-ui/core'

type Props = TextFieldProps & {
  name: string
  label: string
  value: string
  color?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>, checked?: boolean) => void
}

export const TextField: React.FC<Props> = ({
  name,
  label,
  value,
  color,
  onChange,
  ...rest
}) => {
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
