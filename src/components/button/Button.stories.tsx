import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Button } from './Button';
import type { ButtonProps } from './types';

// React referenced to ensure availability if classic runtime is used
void React;
const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  args: { children: 'Click me', variant: 'primary', size: 'md' },
  parameters: { controls: { expanded: true } },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = { args: { variant: 'primary', children: 'Primary Button' } };
export const Secondary: Story = { args: { variant: 'secondary', children: 'Secondary Button' } };
export const Ghost: Story = { args: { variant: 'ghost', children: 'Ghost Button' } };
export const Danger: Story = { args: { variant: 'danger', children: 'Delete' } };
export const Success: Story = { args: { variant: 'success', children: 'Success' } };
export const Outline: Story = { args: { variant: 'outline', children: 'Outline' } };
export const Soft: Story = { args: { variant: 'soft', children: 'Soft' } };

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
      {(['xs', 'sm', 'md', 'lg'] as const).map((s) => (
        <Button key={s} {...args} size={s}>
          {s.toUpperCase()}
        </Button>
      ))}
    </div>
  ),
};

export const Shapes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
      {(['rounded', 'pill', 'square'] as const).map((sh) => (
        <Button key={sh} {...args} shape={sh}>
          {sh}
        </Button>
      ))}
    </div>
  ),
};

export const WithIcons: Story = {
  args: {
    leftIcon: <span role="img" aria-label="sparkle">✨</span>,
    rightIcon: <span aria-hidden>➡️</span>,
    children: 'Magic',
  },
};

export const Loading: Story = { args: { loading: true, children: 'Loading...' } };

export const Neo: Story = {
  args: { neo: true, children: 'Neo Surface', variant: 'soft', shape: 'pill' },
};

export const Playground: Story = { args: { children: 'Playground' } };
