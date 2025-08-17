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

export const Primary: Story = { args: { variant: 'primary', children: 'Primary Button', neo: true } };
export const Secondary: Story = { args: { variant: 'secondary', children: 'Secondary Button', neo: true } };
export const Ghost: Story = { args: { variant: 'ghost', children: 'Ghost Button', neo: true } };
export const Danger: Story = { args: { variant: 'danger', children: 'Delete', neo: true } };
export const Success: Story = { args: { variant: 'success', children: 'Success', neo: true } };
export const Outline: Story = { args: { variant: 'outline', children: 'Outline', neo: true } };
export const Soft: Story = { args: { variant: 'soft', children: 'Soft', neo: true } };

export const Sizes: Story = {
  render: (args) => (
  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', maxWidth: 420 }}>
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
  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', maxWidth: 420 }}>
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

export const Neo: Story = { args: { neo: true, children: 'Neo Surface', variant: 'soft', shape: 'pill' } };

export const AllVariants: Story = {
  args: { neo: true },
  render: (args) => {
    const variants: ButtonProps['variant'][] = ['primary','secondary','ghost','danger','success','outline','soft'];
    return (
      <div style={{ display: 'grid', gap: '0.5rem', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', maxWidth: 560 }}>
        {variants.map(v => (
          <Button key={v} variant={v} neo={args.neo}>{v}</Button>
        ))}
      </div>
    );
  },
};

export const IconOnly: Story = {
  args: { leftIcon: <span aria-hidden>🔔</span>, children: 'Notifications', iconOnly: true, variant: 'primary', neo: true },
};

export const AsLink: Story = {
  args: { asLink: true, href: 'https://example.com', children: 'External Link', variant: 'outline' },
};

export const Elevated: Story = { args: { children: 'Elevated', elevated: true, variant: 'secondary' } };

export const Toggle: Story = {
  args: { children: 'Toggle', variant: 'soft', pressed: true },
};

export const LoadingSkeleton: Story = { args: { loading: true, loadingStyle: 'skeleton', children: 'Loading', variant: 'secondary', size: 'lg' } };

export const LoadingProgress: Story = { args: { loading: true, loadingStyle: 'progress', progress: 0.6, children: 'Uploading', variant: 'primary' } };

export const ConfirmDestructive: Story = { args: { children: 'Delete', variant: 'danger', requireConfirm: true, confirmLabel: 'Sure?', neo: false } };

export const NewSizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
      {(['2xs','xs','sm','md','lg','xl'] as const).map(s => (
        <Button key={s} {...args} size={s}>{s}</Button>
      ))}
    </div>
  ),
  args: { variant: 'outline' },
};

export const Playground: Story = { args: { children: 'Playground' } };
