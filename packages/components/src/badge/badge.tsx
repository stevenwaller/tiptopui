import { forwardRef, CSSProperties } from 'react'
import cx from 'clsx'

import { MarginProps } from '../types'

import './badge.css'

export type BadgeParts =
  | 'root'
  | 'children'
  | 'slot'
  | 'slotStart'
  | 'slotEnd'

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    MarginProps {
  slotStart?: React.ReactNode | string
  slotEnd?: React.ReactNode | string
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
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  shape?: 'round' | 'pill' | 'circle' | 'square'
  fixedRatio?: boolean
  showOutline?: boolean
  position?:
    | 'top'
    | 'top-right'
    | 'right'
    | 'bottom-right'
    | 'bottom'
    | 'bottom-left'
    | 'left'
    | 'top-left'
  children?: React.ReactNode
  classNames?: {
    [key in BadgeParts]?: string
  }
  style?: CSSProperties
  styles?: {
    [key in BadgeParts]?: CSSProperties
  }
  props?: {
    [key in BadgeParts]?: {
      [key: string]: string
    }
  }
}

/**
 * Badge component that can display icons, numbers, text, or just a shape with color.
 * Supports positioning, various appearances, and slot-based content.
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'primary',
      appearance = 'solid',
      size = 'md',
      shape = 'pill',
      showOutline,
      fixedRatio,
      position,
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
              'tipTop-Badge-slot',
              'tipTop-Badge-slot--start',
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
              'tipTop-Badge-slot',
              'tipTop-Badge-slot--end',
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

    const renderChildren = () => {
      if (children) {
        return (
          <span
            className={cx('tipTop-Badge-children', classNames?.children)}
            style={styles?.children}
            {...props?.children}
          >
            {children}
          </span>
        )
      }
    }

    return (
      <span
        className={cx(
          'tipTop-Badge',
          `tipTop-Badge--${appearance}`,
          `tipTop-Badge--${variant}`,
          `tipTop-Badge--${size}`,
          `tipTop-Badge--${shape}`,
          position && `tipTop-Badge--position-${position}`,
          showOutline && 'tipTop-Badge--showOutline',
          (fixedRatio || shape === 'circle') && 'tipTop-Badge--fixedRatio',
          !children && !slotStart && !slotEnd && 'tipTop-Badge--empty',
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
        {renderChildren()}
        {renderSlotEnd()}
      </span>
    )
  },
)

Badge.displayName = 'Badge'
