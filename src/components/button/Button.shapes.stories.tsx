import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import type { ButtonProps } from './types';

const meta: Meta<ButtonProps> = {
  title: 'Components/Button/Shapes',
  component: Button,
  args: { variant: 'primary', children: 'Shape' },
};
export default meta;

type Story = StoryObj<ButtonProps>;

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
