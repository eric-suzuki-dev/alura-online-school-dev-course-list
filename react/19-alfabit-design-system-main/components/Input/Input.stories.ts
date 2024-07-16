import { Meta, StoryObj} from '@storybook/react'

import Input, { InputProps } from './Input'

const meta: Meta<InputProps> = {
  title: 'Molecules/Input',
  component: Input,
  argTypes: {}
}

export default meta

export const Primary: StoryObj<InputProps> = {
  args: {
    value: 'Input',
  }
}

export const Disabled: StoryObj<InputProps> = {
  args: {
    value: 'Input',
    disabled: true
  }
}