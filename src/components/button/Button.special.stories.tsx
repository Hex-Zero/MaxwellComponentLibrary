import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import type { ButtonProps } from './types';

const meta: Meta<ButtonProps> = {
  title: 'Components/Button/Special',
  component: Button,
};
export default meta;

type Story = StoryObj<ButtonProps>;

export const WithIcons: Story = {
  args: {
    leftIcon: (
      <span role="img" aria-label="sparkle">
        ✨
      </span>
    ),
    rightIcon: <span aria-hidden>➡️</span>,
    children: 'Magic',
  },
};
export const IconOnly: Story = {
  args: {
    leftIcon: <span aria-hidden>🔔</span>,
    children: 'Notifications',
    iconOnly: true,
    variant: 'primary',
  },
};
export const AsLink: Story = {
  args: {
    asLink: true,
    href: 'https://example.com',
    children: 'External Link',
    variant: 'outline',
  },
};
