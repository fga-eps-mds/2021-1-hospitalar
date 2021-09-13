import { ButtonProps, Button as MuiButton } from '@material-ui/core'

import React from 'react'
import { useStyles } from './styles'

type Props = ButtonProps & {
  variant?: string
  size?: string
  color?: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>, checked?: boolean) => void
  children?: React.ReactNode
}

export function Button({
  variant,
  size,
  color,
  onClick,
  children,
  ...rest
}: Props): React.ReactElement {
  const classes = useStyles()
  return (
    <MuiButton
      variant={variant || 'contained'}
      size={size || 'large'}
      color={color || 'primary'}
      onClick={onClick}
      classes={{ root: classes.root, label: classes.label }}
      {...rest}
    >
      {children}
    </MuiButton>
  )
}
