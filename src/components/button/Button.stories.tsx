import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Button } from './Button';
import type { ButtonProps } from './types';
void React;
const meta: Meta<ButtonProps> = { title: 'Components/Button', component: Button, args: { children: 'Click me', variant: 'primary', size: 'md' }, parameters: { controls: { expanded: true } }, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<ButtonProps>;
export const Primary: Story = { args: { variant: 'primary', children: 'Primary Button' }, parameters: { docs: { story: { height: '72px' } } } };
export const Secondary: Story = { args: { variant: 'secondary', children: 'Secondary Button' } };
export const Ghost: Story = { args: { variant: 'ghost', children: 'Ghost Button' } };
export const Danger: Story = { args: { variant: 'danger', children: 'Delete' } };
export const Success: Story = { args: { variant: 'success', children: 'Success' } };
export const Outline: Story = { args: { variant: 'outline', children: 'Outline' } };
export const Soft: Story = { args: { variant: 'soft', children: 'Soft' } };
export const Neo: Story = { args: { children: 'Neo Surface', variant: 'neo', shape: 'pill' } };

export const Playground: Story = { args: { children: 'Playground' } };
