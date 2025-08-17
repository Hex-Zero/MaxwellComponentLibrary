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
Primary.play = async ({ canvasElement }) => {
  // Example interaction: ensure button is in the document
  const button = canvasElement.querySelector('button');
  if (!button) throw new Error('Button not found in Primary story');
};
export const Secondary: Story = { args: { variant: 'secondary', children: 'Secondary Button' } };
export const Ghost: Story = { args: { variant: 'ghost', children: 'Ghost Button' } };
