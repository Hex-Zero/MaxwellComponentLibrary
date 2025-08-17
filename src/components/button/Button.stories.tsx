import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Button } from './Button';
import type { ButtonProps } from './types';
void React;
const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  args: { children: 'Click me', variant: 'primary', size: 'md' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary','secondary','ghost','danger','success','outline','soft','neo'],
    },
    size: { control: 'select', options: ['2xs','xs','sm','md','lg','xl'] },
    shape: { control: 'inline-radio', options: ['rounded','pill','square'] },
    loadingStyle: { control: 'radio', options: ['spinner','skeleton','progress'] },
    progress: { control: { type: 'range', min:0, max:1, step:0.05 } },
    requireConfirm: { control: 'boolean' },
    elevated: { control: 'boolean' },
    iconOnly: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
  parameters: { controls: { expanded: true } },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<ButtonProps>;
export const Primary: Story = {
  args: { variant: 'primary', children: 'Primary Button' },
  parameters: { docs: { story: { height: '72px' } } },
};
export const Secondary: Story = { args: { variant: 'secondary', children: 'Secondary Button' } };
export const Ghost: Story = { args: { variant: 'ghost', children: 'Ghost Button' } };
export const Danger: Story = { args: { variant: 'danger', children: 'Delete' } };
export const Success: Story = { args: { variant: 'success', children: 'Success' } };
export const Outline: Story = { args: { variant: 'outline', children: 'Outline' } };
export const Soft: Story = { args: { variant: 'soft', children: 'Soft' } };

export const Playground: Story = { args: { children: 'Playground' } };
