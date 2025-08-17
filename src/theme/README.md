# Theme System

This directory defines strongly-typed design tokens and mixins for **styled-components** usage.

## Usage

```tsx
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../theme';

const Card = styled.div`
  ${({ theme }) => theme.mixins.elevation('sm')};
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.mixins.space('lg')};
  border-radius: ${({ theme }) => theme.radii.md}px;
`;

export function Example() {
  return (
    <ThemeProvider theme={theme}>
      <Card>Example</Card>
    </ThemeProvider>
  );
}
```

## Tokens

- Color, spacing, typography, elevation, layout (radii, borders, z-index, breakpoints), motion (transitions, durations, opacity), focus styles

## Mixins

- `space(key|number)` – consistent spacing
- `focusRing()` – standardized focus outline
- `interactive(base, hover, active?)` – background + focus + disabled styles
- `elevation(level)` – shadow layer
- `text(size, weight?, lineHeight?)` – typography shorthand
- `media.{bp}(css)` – breakpoint media queries
- `flexCenter` – flexbox centering
- `buttonReset` – strip native button styles
- `hideVisually` – accessibility helper for visually hidden content
