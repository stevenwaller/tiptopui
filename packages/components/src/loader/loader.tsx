import { forwardRef, CSSProperties } from 'react'
import cx from 'clsx'

import './loader.css'

export type LoaderParts = 'root' | 'shape'

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  color?: 'light' | 'dark'
  size?: 'small' | 'medium' | 'large' | 'extra-large'
  classNames?: {
    [key in LoaderParts]?: string
  }
  styles?: {
    [key in LoaderParts]?: CSSProperties
  }
  props?: {
    [key in LoaderParts]?: {
      [key: string]: string
    }
  }
}

export const Loader = forwardRef<HTMLDivElement, LoaderProps>(
  (
    {
      className,
      color = 'dark',
      size = 'medium',
      classNames,
      styles,
      props,
      ...restProps
    },
    ref,
  ) => {
    return (
      <div
        className={cx(
          'tipTop-Loader-root',
          `tipTop-Loader-root--${size}`,
          `tipTop-Loader-root--${color}`,
          classNames?.root,
          className,
        )}
        ref={ref}
        style={styles?.root}
        {...restProps}
        {...props?.root}
      >
        <div
          className={cx('tipTop-Loader-shape', classNames?.shape)}
          style={styles?.shape}
          {...props?.shape}
        />
      </div>
    )
  },
)

Loader.displayName = 'Loader'
