import { forwardRef, CSSProperties } from 'react'
import cx from 'clsx'

import './button.css'

export type ButtonParts = 'root' | 'children' | 'slotStart' | 'slotEnd'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
 * - loading state
 *   - spinner
 *   - text
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
  ({ className, props, classNames, styles, slotStart, slotEnd, children, ...restProps }, ref) => {
    return (
      <button
        className={cx('tipTop-Button-root', className, classNames?.root)}
        ref={ref}
        style={styles?.root}
        {...restProps}
        {...props?.root}
      >
        <span
          className={cx('tipTop-Button-slot', 'tipTop-Button-slotStart', classNames?.slotStart)}
          style={styles?.slotStart}
          {...props?.slotStart}
        >
          {slotStart}
        </span>
        <span
          className={cx('tipTop-Button-children', classNames?.children)}
          style={styles?.children}
          {...props?.children}
        >
          {children}
        </span>
        <span
          className={cx('tipTop-Button-slot', 'tipTop-Button-slotEnd', classNames?.slotEnd)}
          style={styles?.slotEnd}
          {...props?.slotEnd}
        >
          {slotEnd}
        </span>
      </button>
    )
  },
)

Button.displayName = 'Button'
