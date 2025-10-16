import type { Meta, StoryObj } from '@storybook/react'

import { Badge, BadgeProps } from '@tiptopui/components'

const appearances: BadgeProps['appearance'][] = [
  'solid',
  'faded',
  'outline',
  'ghost',
  'text',
]
const variants: BadgeProps['variant'][] = [
  'primary',
  'secondary',
  'neutral',
  'danger',
  'warning',
  'success',
  'dark',
  'light',
]

const sizes: BadgeProps['size'][] = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
]

const meta: Meta<typeof Badge> = {
  component: Badge,
}

export default meta
type Story = StoryObj<typeof Badge>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <div>
      {appearances.map((appearance) => (
        <>
          <h4>{appearance}</h4>
          <div
            key={appearance}
            style={{ display: 'flex', marginBottom: '10px' }}
          >
            {variants.map((variant) => (
              <Badge
                key={variant}
                appearance={appearance}
                variant={variant}
                style={{ marginRight: '10px' }}
              >
                {variant}
              </Badge>
            ))}
          </div>
        </>
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {sizes.map((size) => (
        <>
          <h3>{size}</h3>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <Badge isNumeric size={size}>
              5
            </Badge>
            <Badge variant='danger' isNumeric size={size}>
              99+
            </Badge>
            <Badge variant='success' isNumeric size={size}>
              12
            </Badge>
            <Badge variant='warning' isNumeric size={size}>
              1
            </Badge>
            <Badge variant='dark' isNumeric size={size}>
              100
            </Badge>
            <Badge variant='light' isNumeric size={size}>
              1,100
            </Badge>
          </div>
        </>
      ))}
    </div>
  ),
}
