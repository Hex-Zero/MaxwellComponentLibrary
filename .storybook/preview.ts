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
          { value: 'neo-light', title: 'Neo Light' },
          { value: 'neo-dark', title: 'Neo Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
    themes: {
      default: 'Light',
      list: [
        { name: 'Light', class: 'theme-light', color: '#ffffff' },
        { name: 'Dark', class: 'theme-dark', color: '#111827' },
        { name: 'Neo Light', class: 'theme-neo-light', color: '#e9edf3' },
        { name: 'Neo Dark', class: 'theme-neo-dark', color: '#1c1f24' },
      ],
    },
  },
  decorators: [
    (Story: any, ctx: any) => {
      const sel = ctx.globals.themeMode as string;
      const isDark = sel.includes('dark');
      const base = isDark ? appleDark : appleLight;
      const neo = sel.startsWith('neo');
      const theme = themedWithNeo(base);
      const background = neo ? 'var(--neo-bg)' : theme.colors.background;
      // Apply body class for external theming hooks
      if (typeof document !== 'undefined') {
        const body = document.body;
        const classes = ['theme-light','theme-dark','theme-neo-light','theme-neo-dark'];
        classes.forEach(c => body.classList.remove(c));
        const cls = sel === 'light' ? 'theme-light' : sel === 'dark' ? 'theme-dark' : sel === 'neo-light' ? 'theme-neo-light' : 'theme-neo-dark';
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
