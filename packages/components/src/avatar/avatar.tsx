import cx from 'clsx'

import './avatar.css'

export interface AvatarProps
  extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export function Avatar({
  className,
  children,
  ...restProps
}: AvatarProps): JSX.Element {
  return (
    <div
      className={cx('tiptopui-Avatar', className)}
      {...restProps}
    >
      {children}
    </div>
  )
}

Avatar.displayName = 'Avatar'
