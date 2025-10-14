import { forwardRef, CSSProperties } from 'react'
import cx from 'clsx'

import { MarginProps } from '../types'
import { Loader } from '../loader/loader'

import './button.css'

export type ButtonParts =
  | 'root'
  | 'children'
  | 'slot'
  | 'slotStart'
  | 'slotEnd'
  | 'loader'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, MarginProps {
  slotStart?: React.ReactNode | string
  slotEnd?: React.ReactNode | string
  loading?: boolean
  variant?:
    | 'primary'
    | 'secondary'
    | 'neutral'
    | 'danger'
    | 'warning'
    | 'success'
    | 'light'
    | 'dark'
  appearance?: 'solid' | 'faded' | 'outline' | 'ghost' | 'text'
  size?: 'xs' | 'sm' | 'normal' | 'md' | 'lg' | 'xl'
  shape?: 'round' | 'pill' | 'circle' | 'square'
  fullWidth?: boolean
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around'
  children: React.ReactNode
  classNames?: {
    [key in ButtonParts]?: string
  }
  style?: CSSProperties
  styles?: {
    [key in ButtonParts]?: CSSProperties
  }
  props?: {
    [key in ButtonParts]?: {
      [key: string]: string
    }
  }
}
/**
 * TODO
 * - inverted
 * - focus state
 * - active state
 * - dropdown
 * - button group
 *   - attached or not
 * - ellipsizeText
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      loading,
      variant = 'primary',
      appearance = 'solid',
      size = 'normal',
      shape = 'rounded',
      fullWidth = false,
      justify = 'center',
      slotStart,
      slotEnd,
      className,
      props,
      classNames,
      mt,
      mb,
      ms,
      me,
      style,
      styles,
      children,
      ...restProps
    },
    ref,
  ) => {
    const renderSlotStart = () => {
      if (slotStart) {
        return (
          <span
            className={cx(
              'tipTop-Button-slot',
              'tipTop-Button-slotStart',
              classNames?.slot,
              classNames?.slotStart,
            )}
            style={styles?.slotStart}
            {...props?.slotStart}
          >
            {slotStart}
          </span>
        )
      }
    }

    const renderSlotEnd = () => {
      if (slotEnd) {
        return (
          <span
            className={cx(
              'tipTop-Button-slot',
              'tipTop-Button-slotEnd',
              classNames?.slot,
              classNames?.slotEnd,
            )}
            style={styles?.slotEnd}
            {...props?.slotEnd}
          >
            {slotEnd}
          </span>
        )
      }
    }

    const renderLoader = () => {
      if (loading) {
        return (
          <Loader
            className={cx('tipTop-Button-loader', classNames?.loader)}
            size='small'
            color='light'
            style={styles?.loader}
            props={props?.loader}
          />
        )
      }
    }

    return (
      <button
        className={cx(
          'tipTop-Button',
          `tipTop-Button--${appearance}`,
          `tipTop-Button--${variant}`,
          `tipTop-Button--${size}`,
          `tipTop-Button--${shape}`,
          justify && `tipTop-Button--justify-${justify}`,
          loading && 'tipTop-Button--loading',
          fullWidth && 'tipTop-Button--fullWidth',
          className,
          classNames?.root,
        )}
        ref={ref}
        style={{
          ...(mt && { marginBlockStart: `var(--tipTop__space--${mt})` }),
          ...(mb && { marginBlockEnd: `var(--tipTop__space--${mb})` }),
          ...(ms && { marginInlineStart: `var(--tipTop__space--${ms})` }),
          ...(me && { marginInlineEnd: `var(--tipTop__space--${me})` }),
          ...style,
          ...styles?.root,
        }}
        {...restProps}
        {...props?.root}
      >
        {renderSlotStart()}
        <span
          className={cx('tipTop-Button-children', classNames?.children)}
          style={styles?.children}
          {...props?.children}
        >
          {children}
        </span>
        {renderSlotEnd()}
        {renderLoader()}
      </button>
    )
  },
)

Button.displayName = 'Button'
