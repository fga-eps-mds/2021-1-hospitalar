import {
  Checkbox as MuiCheckBox,
  FormControlLabel,
  CheckboxProps,
} from '@material-ui/core'
import React from 'react'

type Props = CheckboxProps & {
  name: string
  label: string
  value: boolean
  color?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>, checked?: boolean) => void
}

export const CheckBox: React.FC<Props> = ({ name, label, value, color, onChange }) => {
  return (
    <FormControlLabel
      control={
        <MuiCheckBox
          name={name}
          checked={value}
          color={color || 'primary'}
          onChange={onChange}
        />
      }
      label={label}
    />
  )
}
