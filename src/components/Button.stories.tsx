import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  args: { children: 'Click me' },
  parameters: { controls: { expanded: true } },
};
export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = { args: { variant: 'primary', children: 'Primary Button' } };
export const Secondary: Story = { args: { variant: 'secondary', children: 'Secondary Button' } };
export const Ghost: Story = { args: { variant: 'ghost', children: 'Ghost Button' } };
