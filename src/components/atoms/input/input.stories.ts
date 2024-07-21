import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Input } from './input';
import { InputProps } from './input.type';

const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<InputProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Input",
    value: "Input"
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Input",
    value: "Input",
  },
};
