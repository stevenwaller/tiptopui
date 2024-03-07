import { forwardRef, CSSProperties } from 'react'
import cx from 'clsx'

import { Loader } from '../loader/loader'

import './button.css'

export type ButtonParts =
  | 'root'
  | 'children'
  | 'slot'
  | 'slotStart'
  | 'slotEnd'
  | 'loader'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  slotStart?: React.ReactNode | string
  slotEnd?: React.ReactNode | string
  classNames?: {
    [key in ButtonParts]?: string
  }
  styles?: {
    [key in ButtonParts]?: CSSProperties
  }
  props?: {
    [key in ButtonParts]?: {
      [key: string]: string
    }
  }
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
}
/**
 * TODO
 * - solidity/variant/appearance/style/fill:
 *   - solid
 *   - flat/soft/faded
 *   - outline/bordered
 *   - ghost/light/plain/clear (background on hover)
 *   - transparent (no background on hover)
 *   - text/link (no background no padding)
 * - variant/color/status: primary, secondary, tertiary, danger, warning, success, info, light, dark, link
 * - inverted
 * - shape: pill, round, circle, square
 * - size: xs, sm, md, lg, xl
 * - full width
 * - disabled state
 * - focus state
 * - hover state
 * - active state
 * - icons
 * - dropdown
 * - justify: start, center, space-between, end
 * - button group
 *   - attached or not
 * - ellipsizeText
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      props,
      classNames,
      styles,
      slotStart,
      slotEnd,
      children,
      loading,
      variant = 'primary',
      appearance = 'solid',
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
          'tipTop-Button-root',
          `tipTop-Button-root--${appearance}`,
          `tipTop-Button-root--${variant}`,
          loading && 'tipTop-Button-root--loading',
          className,
          classNames?.root,
        )}
        ref={ref}
        style={styles?.root}
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
