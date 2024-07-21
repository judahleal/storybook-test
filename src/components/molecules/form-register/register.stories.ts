import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Register } from './register';
import { RegisterFormProps } from './register.type';

const meta = {
  title: 'Example/Form',
  component: Register,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<RegisterFormProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Name",
    email: "E-mail"
  },
};
