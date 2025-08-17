import { css } from 'styled-components';

import type { Theme } from './index';

export const space = (theme: Theme, key: keyof Theme['spacing'] | number) => {
  if (typeof key === 'number') return `${key}px`;
  return `${theme.spacing[key]}px`;
};

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const focusRing = (theme: Theme) => css`
  outline: none;
  box-shadow: ${theme.focus.ring};
`;

export const buttonReset = css`
  appearance: none;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
`;

export const interactive = (
  theme: Theme,
  baseColor: string,
  hoverColor: string,
  activeColor?: string,
) => css`
  background: ${baseColor};
  transition: background ${theme.transitions.base};
  &:hover {
    background: ${hoverColor};
  }
  &:active {
    background: ${activeColor || hoverColor};
  }
  &:focus-visible {
    ${focusRing(theme)}
  }
  &:disabled {
    opacity: ${theme.opacities.disabled};
    cursor: not-allowed;
  }
`;

export const elevationLayer = (theme: Theme, level: keyof Theme['elevation']) => css`
  box-shadow: ${theme.elevation[level]};
`;

export const textStyle = (
  theme: Theme,
  size: keyof Theme['typography']['fontSize'],
  weight: keyof Theme['typography']['fontWeight'] = 'regular',
  lineHeight: keyof Theme['typography']['lineHeight'] = 'normal',
) => css`
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.fontSize[size]}px;
  font-weight: ${theme.typography.fontWeight[weight]};
  line-height: ${theme.typography.lineHeight[lineHeight]};
`;

export const hideVisually = css`
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
  border: 0;
  padding: 0;
  margin: -1px;
`;

type Interpolation = ReturnType<typeof css> | string | number;
type MediaFn = (content: Interpolation) => ReturnType<typeof css>;
export const media = (theme: Theme) => {
  const queries = {} as Record<keyof Theme['breakpoints'], MediaFn>;
  (Object.keys(theme.breakpoints) as Array<keyof Theme['breakpoints']>).forEach((bp) => {
    const px = theme.breakpoints[bp];
    queries[bp] = (content: Interpolation) => css`
      @media (min-width: ${px}px) {
        ${content}
      }
    `;
  });
  return queries;
};

export const createMixins = (theme: Theme) => ({
  space: (key: keyof Theme['spacing'] | number) => space(theme, key),
  focusRing: () => focusRing(theme),
  interactive: (base: string, hover: string, active?: string) =>
    interactive(theme, base, hover, active),
  elevation: (level: keyof Theme['elevation']) => elevationLayer(theme, level),
  text: (
    size: keyof Theme['typography']['fontSize'],
    weight?: keyof Theme['typography']['fontWeight'],
    lineHeight?: keyof Theme['typography']['lineHeight'],
  ) => textStyle(theme, size, weight, lineHeight),
  media: media(theme),
  flexCenter,
  buttonReset,
  hideVisually,
});

export type Mixins = ReturnType<typeof createMixins>;
