import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from './dropdown';
import DropdownItem from './dropdown-item';

const meta: Meta<typeof Dropdown> = {
  title: 'Design System/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <DropdownItem>Chocolate</DropdownItem>,
    label: 'Test Label',
    description: 'This is a description',
  },
};

export const Disabled: Story = {
  args: {
    children: <DropdownItem>Chocolate</DropdownItem>,
    label: 'Test Label',
    description: 'This is a description',
    disabled: true,
  },
};
