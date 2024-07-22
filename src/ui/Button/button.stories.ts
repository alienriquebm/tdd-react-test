import type { Meta, StoryObj } from '@storybook/react';
import Button from './button';

const meta: Meta<typeof Button> = {
  title: 'Design System/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultPrimary: Story = {
  args: {
    children: 'Click me',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Click me',
    variant: 'secondary',
  },
};

export const DisabledPrimary: Story = {
  args: {
    children: 'Click me',
    disabled: true,
  },
};

export const DisabledSecondary: Story = {
  args: {
    children: 'Click me',
    disabled: true,
    variant: 'secondary',
  },
};
