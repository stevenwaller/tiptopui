import React from 'react'
import classNames from 'classnames'

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
      className={classNames(
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
