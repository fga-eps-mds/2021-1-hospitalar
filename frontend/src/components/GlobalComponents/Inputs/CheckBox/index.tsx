import {
  CheckboxProps,
  FormControlLabel,
  Checkbox as MuiCheckBox,
} from '@material-ui/core'

import React from 'react'

type Props = CheckboxProps & {
  name: string
  label: string
  value: boolean
  color?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>, checked?: boolean) => void
}

export function CheckBox({
  name,
  label,
  value,
  color,
  onChange,
}: Props): React.ReactElement {
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
