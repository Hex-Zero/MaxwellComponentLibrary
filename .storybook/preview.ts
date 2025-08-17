import type { Preview } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { appleLight, appleDark, themedWithNeo } from '../src/theme';
import '../src/styles.css';

const preview: Preview = {
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
  },
  parameters: {
    layout: 'centered',
    docs: {
      story: {
        inline: true,
        height: '72px',
      },
    },
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
    themes: {
      default: 'Light',
      list: [
        { name: 'Light', class: 'theme-light', color: '#ffffff' },
        { name: 'Dark', class: 'theme-dark', color: '#111827' },
      ],
    },
  },
  decorators: [
    // Tight wrapper to keep stories compact in both Canvas & Docs
    (Story) =>
      React.createElement(
        'div',
        { style: { display: 'inline-block', padding: 12 } },
        React.createElement(Story, null),
      ),
    (Story: React.ComponentType, ctx: { globals: Record<string, unknown>; viewMode?: string }) => {
      const sel = ctx.globals.themeMode as string;
      const isDark = sel.includes('dark');
      const base = isDark ? appleDark : appleLight;
  const theme = themedWithNeo(base);
  const background = theme.colors.background;
      const isDocs = ctx.viewMode === 'docs';
      // Apply body class for external theming hooks
      if (typeof document !== 'undefined') {
        const body = document.body;
  const classes = ['theme-light', 'theme-dark'];
        classes.forEach((c) => body.classList.remove(c));
  const cls = sel === 'light' ? 'theme-light' : 'theme-dark';
        body.classList.add(cls);
      }
      return React.createElement(
        ThemeProvider,
        { theme },
        React.createElement(
          'div',
          {
            style: {
              background,
              color: theme.colors.textPrimary,
              // Only force full viewport height in canvas mode; keep docs inline stories compact
              minHeight: isDocs ? undefined : '100vh',
              padding: isDocs ? 0 : '1rem',
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
