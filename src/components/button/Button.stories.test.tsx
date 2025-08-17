import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { appleLight, themedWithNeo } from '../../theme';

import { Button } from './Button';

test('Primary Button story renders with correct text', () => {
  const theme = themedWithNeo(appleLight);
  render(
    <ThemeProvider theme={theme}>
      <Button variant="primary">Primary Button</Button>
    </ThemeProvider>,
  );
  expect(screen.getByRole('button', { name: /primary button/i })).toBeInTheDocument();
});
