import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonProps } from '@tiptopui/components'
import { IconArrowRight } from '@tabler/icons-react'

const appearances: ButtonProps['appearance'][] = [
  'solid',
  'faded',
  'outline',
  'ghost',
  'text',
]
const variants: ButtonProps['variant'][] = [
  'primary',
  'secondary',
  'neutral',
  'danger',
  'warning',
  'success',
  'dark',
  'light',
]

const sizes: ButtonProps['size'][] = ['xs', 'sm', 'normal', 'md', 'lg', 'xl']

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

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
              <Button
                key={variant}
                appearance={appearance}
                variant={variant}
                style={{ marginRight: '10px' }}
                slotEnd={<IconArrowRight />}
              >
                {variant}
              </Button>
            ))}
          </div>
        </>
      ))}
    </div>
  ),
}

export const withIcons: Story = {
  render: () => <Button slotEnd={<IconArrowRight />}>With icon</Button>,
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h3>Button Sizes with Icons</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {sizes.map((size) => (
          <div
            key={size}
            style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
          >
            <Button
              size={size}
              slotStart={
                <IconArrowRight style={{ transform: 'rotate(180deg)' }} />
              }
              slotEnd={<IconArrowRight />}
              variant='primary'
              appearance='solid'
            >
              Button {size?.toUpperCase() || 'DEFAULT'}
            </Button>
          </div>
        ))}
      </div>
    </div>
  ),
}
