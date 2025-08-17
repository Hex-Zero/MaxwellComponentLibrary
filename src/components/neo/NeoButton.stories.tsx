import type { Meta, StoryObj } from '@storybook/react';

import { NeoButton, NeoIconButton } from './NeoButton';

const meta: Meta<typeof NeoButton> = {
  title: 'Neo/NeoButton',
  component: NeoButton,
};
export default meta;

type Story = StoryObj<typeof NeoButton>;

export const Playground: Story = {
  args: { children: 'Neo Button', variant: 'raised', size: 'md', shape: 'rounded', tone: 'light' },
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid gap-6" style={{ background: 'var(--neo-bg)', padding: 32 }}>
      {(['light','dark'] as const).map(tone => (
        <div key={tone} className="flex flex-col gap-4">
          <h4 className="font-semibold text-sm text-slate-600">Tone: {tone}</h4>
          <div className="grid grid-cols-6 gap-4">
            {(['raised','inset','flat'] as const).map(variant => (
              <NeoButton key={variant+tone} variant={variant} shape="square" size="md" tone={tone}>{variant}</NeoButton>
            ))}
            <NeoButton variant="raised" shape="rounded" tone={tone}>rounded</NeoButton>
            <NeoButton variant="raised" shape="pill" tone={tone}>pill</NeoButton>
            <NeoButton variant="raised" shape="circle" aria-label="circle" tone={tone}>○</NeoButton>
            <NeoIconButton variant="raised" tone={tone} label="icon">★</NeoIconButton>
            <NeoButton variant="inset" shape="circle" size="lg" aria-pressed tone={tone}>⬤</NeoButton>
            <NeoButton variant="raised" shape="pill" disabled tone={tone}>disabled</NeoButton>
          </div>
        </div>
      ))}
    </div>
  )
};
