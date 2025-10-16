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

interface IconSet {
  name: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const arrowIcons: IconSet[] = [
  {
    name: 'Tabler Icons',
    leftIcon: <IconArrowLeft />,
    rightIcon: <IconArrowRight />,
  },
  {
    name: 'Hero Icons',
    leftIcon: <ArrowLeftIcon />,
    rightIcon: <ArrowRightIcon />,
  },
  {
    name: 'Font Awesome React',
    leftIcon: <FontAwesomeIcon icon={faArrowLeft} />,
    rightIcon: <FontAwesomeIcon icon={faArrowRight} />,
  },
  {
    name: 'Lucide Icons',
    leftIcon: <ArrowLeft />,
    rightIcon: <ArrowRight />,
  },
  {
    name: 'Ant Design (React Icons)',
    leftIcon: <AiOutlineArrowLeft />,
    rightIcon: <AiOutlineArrowRight />,
  },
]

const circleIcons = [
  {
    name: 'Tabler Icons',
    leftIcon: <IconCircleChevronLeft />,
    rightIcon: <IconCircleChevronRight />,
  },
  {
    name: 'Hero Icons',
    leftIcon: <ArrowLeftCircleIcon />,
    rightIcon: <ArrowRightCircleIcon />,
  },
  {
    name: 'Font Awesome React',
    leftIcon: <FontAwesomeIcon icon={faCircleArrowLeft} />,
    rightIcon: <FontAwesomeIcon icon={faCircleArrowRight} />,
  },
  {
    name: 'Lucide Icons',
    leftIcon: <CircleArrowLeft />,
    rightIcon: <CircleArrowRight />,
  },
]

const leftIcons = [
  {
    name: 'Tabler Icons',
    leftIcon: <IconCircleChevronRight />,
  },
  {
    name: 'Hero Icons',
    leftIcon: <ArrowRightCircleIcon />,
  },
  {
    name: 'Font Awesome React',
    leftIcon: <FontAwesomeIcon icon={faCircleArrowRight} />,
  },
  {
    name: 'Lucide Icons',
    leftIcon: <CircleArrowRight />,
  },
]

const rightIcons = [
  {
    name: 'Tabler Icons',
    rightIcon: <IconArrowRight />,
  },
  {
    name: 'Hero Icons',
    rightIcon: <ArrowRightIcon />,
  },
  {
    name: 'Font Awesome React',
    rightIcon: <FontAwesomeIcon icon={faArrowRight} />,
  },
  {
    name: 'Lucide Icons',
    rightIcon: <ArrowRight />,
  },
  {
    name: 'Ant Design (React Icons)',
    rightIcon: <AiOutlineArrowRight />,
  },
]

const rightCircleIcons = [
  {
    name: 'Tabler Icons',
    rightIcon: <IconCircleChevronRight />,
  },
  {
    name: 'Hero Icons',
    rightIcon: <ArrowRightCircleIcon />,
  },
  {
    name: 'Font Awesome React',
    rightIcon: <FontAwesomeIcon icon={faCircleArrowRight} />,
  },
  {
    name: 'Lucide Icons',
    rightIcon: <CircleArrowRight />,
  },
]

const sets: IconSet[][] = [
  arrowIcons,
  circleIcons,
  leftIcons,
  rightIcons,
  rightCircleIcons,
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
          <div key={size}>
            {sets.map((set, setIndex) => (
              <div
                key={setIndex}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '10px',
                }}
              >
                {set.map((icon, iconIndex) => (
                  <Button
                    key={iconIndex}
                    size={size}
                    slotStart={icon.leftIcon}
                    slotEnd={icon.rightIcon}
                    title={icon.name}
                  >
                    Button
                  </Button>
                ))}
                <Button size={size}>Button</Button>
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  ),
}
