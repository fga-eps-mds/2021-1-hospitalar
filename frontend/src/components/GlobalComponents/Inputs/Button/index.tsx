import React from 'react'
import { Button as MuiButton, ButtonProps } from '@material-ui/core'
import { useStyles } from './styles'

type Props = ButtonProps & {
  variant?: string
  size?: string
  color?: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>, checked?: boolean) => void
}

export const Button: React.FC<Props> = ({
  variant,
  size,
  color,
  onClick,
  children,
  ...rest
}) => {
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
