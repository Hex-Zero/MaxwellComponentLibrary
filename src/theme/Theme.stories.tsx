import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { appleLight, appleDark, themedWithNeo, ThemeWithNeo } from './index';

const ColorBlock: React.FC<{ name: string; value: string }> = ({ name, value }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: 12 }}>
    <div style={{ width: 64, height: 40, borderRadius: 6, background: value, border: '1px solid #e0e0e0' }} />
    <span style={{ marginTop: 4 }}>{name}</span>
    <code style={{ fontSize: 10 }}>{value}</code>
  </div>
);

const meta: Meta = {
  title: 'Foundation/Theme',
  parameters: { controls: { disabled: true } },
};
export default meta;

type Story = StoryObj;

export const Palette: Story = {
  render: () => {
    const light = themedWithNeo(appleLight);
    const dark = themedWithNeo(appleDark);
  const show = (t: ThemeWithNeo, label: string) => (
      <div key={label} style={{ padding: '1rem', background: t.colors.background, color: t.colors.textPrimary, borderRadius: 12 }}>
        <h3 style={{ marginTop: 0 }}>{label}</h3>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          {Object.entries(t.colors).slice(0, 12).map(([n, v]) => (
            <ColorBlock key={n} name={n} value={String(v)} />
          ))}
        </div>
        <div style={{ marginTop: 24 }}>
          <h4>Neomorphic Surface</h4>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <div style={{ padding: 24 }}>{/* spacer */}</div>
            <div style={{ padding: 24 }}>{/* spacer */}</div>
            <div style={{ padding: 24 }}>{/* spacer */}</div>
            <div style={{ padding: 24 }}>{/* spacer */}</div>
          </div>
        </div>
      </div>
    );
    return (
      <div style={{ display: 'grid', gap: 24 }}>
        {show(light, 'Apple Light')}
        {show(dark, 'Apple Dark')}
      </div>
    );
  },
};
