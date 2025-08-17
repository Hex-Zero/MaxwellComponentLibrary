import React from 'react';
import { ThemeProvider } from 'styled-components';
import { appleLight, appleDark, themedWithNeo } from '../src/theme';
import '../src/styles.css';
import '../src/styles/neo.css';

const preview = {
  globalTypes: {
    themeMode: {
      name: 'Theme',
      description: 'Global theme mode',
      defaultValue: 'light',
      toolbar: {
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
    neo: {
      name: 'Neo',
      description: 'Enable neomorphic surface mixin',
      defaultValue: false,
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: false, title: 'Flat' },
          { value: true, title: 'Neo' },
        ],
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story: any, ctx: any) => {
      const mode = ctx.globals.themeMode === 'dark' ? 'dark' : 'light';
      const base = mode === 'dark' ? appleDark : appleLight;
      const theme = themedWithNeo(base);
      return React.createElement(
        ThemeProvider,
        { theme },
        React.createElement(
          'div',
          {
            style: {
              background: theme.colors.background,
              color: theme.colors.textPrimary,
              minHeight: '100vh',
              padding: '1rem',
              transition: 'background 0.3s ease',
            },
          },
          React.createElement(Story, null),
        ),
      );
    },
  ],
};

export default preview;
