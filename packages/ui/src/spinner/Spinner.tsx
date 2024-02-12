import React from 'react'
import classNames from 'classnames'

import './spinner.css'

interface IProps {
  className?: string
  color?: 'light' | 'dark'
  size?: 'small' | 'medium' | 'large' | 'extra-large'
}

const Spinner = ({ className, color = 'dark', size = 'medium', ...restProps }: IProps) => {
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

export default Spinner
