import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonProps } from '@tiptopui/components'
import {
  IconArrowRight,
  IconArrowLeft,
  IconCircleChevronRight,
  IconCircleChevronLeft,
} from '@tabler/icons-react'
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faArrowRight,
  faCircleArrowLeft,
  faCircleArrowRight,
} from '@fortawesome/free-solid-svg-icons'
import {
  ArrowRight,
  ArrowLeft,
  CircleArrowRight,
  CircleArrowLeft,
} from 'lucide-react'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

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

const sizes: ButtonProps['size'][] = [
  '2xs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
]

const icons = [
  {
    name: 'Tabler Icons',
    sets: [
      { leftIcon: <IconArrowLeft />, rightIcon: <IconArrowRight /> },
      {
        leftIcon: <IconCircleChevronLeft />,
        rightIcon: <IconCircleChevronRight />,
      },
    ],
  },
  {
    name: 'Hero Icons',
    sets: [
      { leftIcon: <ArrowLeftIcon />, rightIcon: <ArrowRightIcon /> },
      {
        leftIcon: <ArrowLeftCircleIcon />,
        rightIcon: <ArrowRightCircleIcon />,
      },
    ],
  },
  {
    name: 'Font Awesome React',
    sets: [
      {
        leftIcon: <FontAwesomeIcon icon={faArrowLeft} />,
        rightIcon: <FontAwesomeIcon icon={faArrowRight} />,
      },
      {
        leftIcon: <FontAwesomeIcon icon={faCircleArrowLeft} />,
        rightIcon: <FontAwesomeIcon icon={faCircleArrowRight} />,
      },
    ],
  },
  {
    name: 'Lucide Icons',
    sets: [
      { leftIcon: <ArrowLeft />, rightIcon: <ArrowRight /> },
      { leftIcon: <CircleArrowLeft />, rightIcon: <CircleArrowRight /> },
    ],
  },
  {
    name: 'Ant Design (React Icons)',
    sets: [
      {
        leftIcon: <AiOutlineArrowLeft />,
        rightIcon: <AiOutlineArrowRight />,
      },
    ],
  },
]

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
      {sizes.map((size) => (
        <>
          <h3>{size}</h3>
          <div
            key={size}
            style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
          >
            {icons.map((icon) =>
              icon.sets.map((set, index) => (
                <Button
                  key={index}
                  size={size}
                  slotStart={set.leftIcon}
                  slotEnd={set.rightIcon}
                  title={icon.name}
                >
                  Button
                </Button>
              )),
            )}
            <Button
              size={size}
              slotStart={<i className='fa fa-arrow-left'></i>}
              slotEnd={<i className='fa fa-arrow-right'></i>}
              title='Font Awesome Web Font'
            >
              Button
            </Button>
            <Button
              size={size}
              slotStart={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18'
                  />
                </svg>
              }
              slotEnd={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
                  />
                </svg>
              }
              title='SVG'
            >
              Button
            </Button>
            <Button size={size}>Button</Button>
          </div>
        </>
      ))}
    </div>
  ),
}
