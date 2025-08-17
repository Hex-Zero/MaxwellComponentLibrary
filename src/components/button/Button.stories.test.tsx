import { render, screen } from '@testing-library/react';

import { Button } from './Button';

test('Primary Button story renders with correct text', () => {
  render(<Button variant="primary">Primary Button</Button>);
  expect(screen.getByRole('button', { name: /primary button/i })).toBeInTheDocument();
});
