import cx from 'clsx'

import './avatar.css'

export interface AvatarProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function Avatar({
  className,
  children,
  ...restProps
}: AvatarProps): JSX.Element {
  return (
    <button
      type='button'
      className={cx('tiptopui-Avatar', className)}
      {...restProps}
    >
      {children}
    </button>
  )
}

Avatar.displayName = 'Avatar'
