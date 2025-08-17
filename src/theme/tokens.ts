// Design tokens for the Maxwell Component Library
// Structured for easy export to CSS variables or usage in styled-components theme.

export const colors = {
  primary: '#2563eb',
  primaryHover: '#1d4ed8',
  primaryActive: '#1e40af',
  secondary: '#f3f4f6',
  secondaryHover: '#e5e7eb',
  secondaryActive: '#d1d5db',
  ghost: 'transparent',
  ghostHover: 'rgba(37,99,235,0.1)',
  focusRing: '#3b82f6',
  border: '#d1d5db',
  textPrimary: '#111827',
  textInverse: '#ffffff',
  danger: '#dc2626',
  warning: '#d97706',
  success: '#059669',
  info: '#0284c7',
  background: '#ffffff',
  backgroundAlt: '#f9fafb',
  overlay: 'rgba(0,0,0,0.5)',
};

export const spacing = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  '2xl': 32,
  '3xl': 48,
};

export const radii = {
  none: 0,
  sm: 2,
  md: 4,
  lg: 8,
  pill: 9999,
  full: 99999,
};

export const typography = {
  fontFamily: `system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`,
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
  },
  lineHeight: {
    tight: 1.1,
    snug: 1.25,
    normal: 1.5,
    relaxed: 1.7,
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
};

export const elevation = {
  none: 'none',
  xs: '0 1px 2px rgba(0,0,0,0.08)',
  sm: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.06)',
  md: '0 4px 6px -1px rgba(0,0,0,0.10), 0 2px 4px -2px rgba(0,0,0,0.06)',
  lg: '0 10px 15px -3px rgba(0,0,0,0.10), 0 4px 6px -4px rgba(0,0,0,0.05)',
  xl: '0 20px 25px -5px rgba(0,0,0,0.10), 0 10px 10px -5px rgba(0,0,0,0.04)',
};

export const transitions = {
  fast: '120ms ease-in-out',
  base: '200ms ease-in-out',
  slow: '320ms ease-in-out',
};

export const zIndices = {
  hide: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  overlay: 1200,
  modal: 1300,
  popover: 1400,
  toast: 1500,
  tooltip: 1600,
};

export const opacities = {
  disabled: 0.4,
  muted: 0.7,
  overlay: 0.5,
};

export const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const shadows = elevation; // alias

export const durations = {
  instant: 0,
  fast: 120,
  base: 200,
  slow: 320,
};

export const borderWidths = {
  none: 0,
  hairline: 1,
  thin: 2,
  thick: 4,
};

export const focus = {
  ring: `0 0 0 3px ${colors.focusRing}`,
};

export const tokens = {
  colors,
  spacing,
  radii,
  typography,
  elevation,
  transitions,
  zIndices,
  opacities,
  breakpoints,
  shadows,
  durations,
  borderWidths,
  focus,
};

export type Tokens = typeof tokens;
