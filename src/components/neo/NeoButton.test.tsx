import { render } from '@testing-library/react';

import { NeoButton } from './NeoButton';

describe('NeoButton class mapping', () => {
  test('applies size, shape and variant classes', () => {
    const { getByRole } = render(<NeoButton variant="raised" size="lg" shape="pill">Test</NeoButton>);
    const btn = getByRole('button');
    expect(btn.className).toMatch(/h-12/); // lg height
    expect(btn.className).toMatch(/rounded-full/); // pill
    expect(btn.className).toMatch(/shadow-\[/); // has shadow
  });

  test('inset variant sets aria-pressed', () => {
    const { getByRole } = render(<NeoButton variant="inset">In</NeoButton>);
    const btn = getByRole('button');
    expect(btn.getAttribute('aria-pressed')).toBe('true');
  });

  test('disabled state', () => {
    const { getByRole } = render(<NeoButton disabled>Dis</NeoButton>);
    const btn = getByRole('button');
    expect(btn).toBeDisabled();
    expect(btn.className).toMatch(/opacity-50/);
  });
});
