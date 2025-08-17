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
export * from './color';
export * from './spacing';
export * from './typography';
export * from './elevation';
export * from './layout';
export * from './motion';
export * from './focus';
export * from './mixins';
