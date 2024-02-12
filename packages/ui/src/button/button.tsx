import classNames from 'classnames'

import './button.css'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function Button({ className, children, ...restProps }: ButtonProps): JSX.Element {
  return (
    <button type='button' className={classNames('tiptopui-Button', className)} {...restProps}>
      Before {children} After
    </button>
  )
}

Button.displayName = 'Button'
