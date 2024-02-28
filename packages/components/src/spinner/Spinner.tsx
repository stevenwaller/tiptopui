import React from 'react'
import cx from 'clsx'

import './spinner.css'

export interface SpinnerProps {
  className?: string
  color?: 'light' | 'dark'
  size?: 'small' | 'medium' | 'large' | 'extra-large'
}

export const Spinner = ({
  className,
  color = 'dark',
  size = 'medium',
  ...restProps
}: SpinnerProps) => {
  return (
    <div
      className={cx(
        'tiptopui-Spinner',
        `tiptopui-Spinner--${size}`,
        `tiptopui-Spinner--${color}`,
        className,
      )}
      {...restProps}
    >
      <div />
    </div>
  )
}
