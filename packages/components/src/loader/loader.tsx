import { forwardRef, CSSProperties } from 'react'
import cx from 'clsx'

import './loader.css'

export type LoaderParts = 'root' | 'shape'

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: 'light' | 'dark'
  size?: 'small' | 'medium' | 'large' | 'extra-large'
  className?: string
  classNames?: {
    [key in LoaderParts]?: string
  }
  mt?: string
  mb?: string
  ms?: string
  me?: string
  style?: CSSProperties
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
      mt,
      mb,
      ms,
      me,
      style,
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
        style={{
          ...(mt && { marginBlockStart: mt }),
          ...(mb && { marginBlockEnd: mb }),
          ...(ms && { marginInlineStart: ms }),
          ...(me && { marginInlineEnd: me }),
          ...style,
          ...styles?.root,
        }}
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
