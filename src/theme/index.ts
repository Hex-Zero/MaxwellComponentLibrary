import { css } from 'styled-components';

import { colors } from './color';
import { elevation } from './elevation';
import { focus } from './focus';
import { radii, borderWidths, zIndices, breakpoints } from './layout';
import { createMixins } from './mixins';
import { transitions, durations, opacities } from './motion';
import { spacing } from './spacing';
import { typography } from './typography';

const baseTheme = {
  colors,
  spacing,
  typography,
  elevation,
  radii,
  borderWidths,
  zIndices,
  breakpoints,
  transitions,
  durations,
  opacities,
  focus,
};
export type ThemeWithoutMixins = typeof baseTheme;
export interface Theme extends ThemeWithoutMixins {
  mixins: ReturnType<typeof createMixins>;
}
export const theme: Theme = { ...baseTheme, mixins: createMixins(baseTheme as Theme) } as Theme;

// Apple-inspired subtle grayscale palette + accent (using existing primary for accent)
export const appleLight = {
  ...theme,
  colors: {
    ...theme.colors,
    background: '#f5f5f7', // Apple site light gray
    backgroundAlt: '#ffffff',
    textPrimary: '#1d1d1f',
    border: '#d2d2d7',
  },
} as Theme;

export const appleDark = {
  ...theme,
  colors: {
    ...theme.colors,
    background: '#000000',
    backgroundAlt: '#1d1d1f',
    textPrimary: '#f5f5f7',
    border: '#2c2c2e',
  },
} as Theme;

// Neomorphic surfaces helper (light mode focused) producing raised or inset style
export const neoSurface = (
  t: Theme,
  opts: { inset?: boolean; radius?: number; color?: string; distance?: number; blur?: number } = {},
) => {
  const {
    inset = false,
    radius = t.radii.lg,
    color = t.colors.background,
    distance = 6,
    blur = 12,
  } = opts;
  const shadowColorLight = 'rgba(255,255,255,0.8)';
  const shadowColorDark = 'rgba(0,0,0,0.15)';
  const dir = inset ? 'inset' : '';
  return css`
    background: ${color};
    border-radius: ${radius}px;
    box-shadow:
      ${dir} ${distance}px ${distance}px ${blur}px ${shadowColorDark},
      ${dir} -${distance}px -${distance}px ${blur}px ${shadowColorLight};
  `;
};

// Extend existing mixins with neo
export type NeoMixin = (o?: Parameters<typeof neoSurface>[1]) => ReturnType<typeof neoSurface>;
export type ThemeWithNeo = Theme & { mixins: Theme['mixins'] & { neoSurface: NeoMixin } };
export const themedWithNeo = (t: Theme): ThemeWithNeo => {
  const base: Theme = t; // explicit
  return {
    ...base,
    mixins: {
      ...base.mixins,
      neoSurface: (o?: Parameters<typeof neoSurface>[1]) => neoSurface(base, o),
    },
  };
};
export * from './color';
export * from './spacing';
export * from './typography';
export * from './elevation';
export * from './layout';
export * from './motion';
export * from './focus';
export * from './mixins';
