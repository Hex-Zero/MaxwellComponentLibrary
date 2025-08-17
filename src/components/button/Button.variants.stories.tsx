import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import type { ButtonProps } from './types';

const meta: Meta<ButtonProps> = {
  title: 'Components/Button/Variants',
  component: Button,
};
export default meta;

type Story = StoryObj<ButtonProps>;

export const AllVariants: Story = {
  render: () => {
    const variants: ButtonProps['variant'][] = [
      'primary',
      'secondary',
      'ghost',
      'danger',
      'success',
      'outline',
      'soft',
      'neo',
    ];
    return (
      <div
        style={{
          display: 'grid',
          gap: '0.5rem',
          gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))',
          maxWidth: 640,
        }}
      >
        {variants.map((v) => (
          <Button key={v} variant={v}>
            {v}
          </Button>
        ))}
      </div>
    );
  },
};
