import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import type { ButtonProps } from './types';

const meta: Meta<ButtonProps> = {
  title: 'Components/Button/Sizes',
  component: Button,
  args: { variant: 'primary', children: 'Size' },
};
export default meta;

type Story = StoryObj<ButtonProps>;

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', maxWidth: 420 }}>
      {(['2xs', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map((s) => (
        <Button key={s} {...args} size={s}>
          {s.toUpperCase()}
        </Button>
      ))}
    </div>
  ),
};
