import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import type { ButtonProps } from './types';

const meta: Meta<ButtonProps> = {
  title: 'Components/Button/States',
  component: Button,
  args: { variant: 'primary' },
};
export default meta;

type Story = StoryObj<ButtonProps>;

export const Loading: Story = { args: { loading: true, children: 'Loading...' } };
export const LoadingSkeleton: Story = {
  args: {
    loading: true,
    loadingStyle: 'skeleton',
    children: 'Loading',
    variant: 'secondary',
    size: 'lg',
  },
};
export const LoadingProgress: Story = {
  args: {
    loading: true,
    loadingStyle: 'progress',
    progress: 0.6,
    children: 'Uploading',
    variant: 'primary',
  },
};
export const Toggle: Story = { args: { children: 'Toggle', variant: 'soft', pressed: true } };
export const Elevated: Story = {
  args: { children: 'Elevated', elevated: true, variant: 'secondary' },
};
export const ConfirmDestructive: Story = {
  args: { children: 'Delete', variant: 'danger', requireConfirm: true, confirmLabel: 'Sure?' },
};
