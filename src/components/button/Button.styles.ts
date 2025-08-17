/* eslint-disable max-lines */
import styled, { css } from 'styled-components';

import type { ThemeWithNeo } from '../../theme';

// eslint-disable-next-line import/order
import { getAccessiblePair } from './colorUtils';

import type { ButtonProps, ButtonSize, ButtonVariant, ButtonShape } from './types.js';

export const sizeStyles: Record<ButtonSize, ReturnType<typeof css>> = {
  '2xs': css`
    font-size: 10px;
    padding: 2px 6px;
  `,
  xs: css`
    font-size: 12px;
    padding: 2px 8px;
  `,
  sm: css`
    font-size: 14px;
    padding: 4px 12px;
  `,
  md: css`
    font-size: 16px;
    padding: 8px 16px;
  `,
  lg: css`
    font-size: 18px;
    padding: 12px 20px;
  `,
  xl: css`
    font-size: 20px;
    padding: 14px 28px;
  `,
};

export const variantStyles = (t: ThemeWithNeo, v: ButtonVariant) => {
  const c = t.colors;
  const base = css`
    color: ${c.textPrimary};
  `;
  const dynamic = (bg: string, styles: string) => {
    const txt = getAccessiblePair(bg, t);
    return css`
      ${base} background:${bg};
      color: ${txt};
      ${styles}
    `;
  };
  switch (v) {
    case 'primary':
      return css`
        ${dynamic(
          c.primary,
          `&:hover{background:${c.primaryHover}} &:active{background:${c.primaryActive}}`,
        )}
      `;
    case 'secondary':
      return css`
        ${dynamic(
          c.secondary,
          `&:hover{background:${c.secondaryHover}} &:active{background:${c.secondaryActive}}`,
        )}
      `;
    case 'ghost':
      return css`
        ${base} background:transparent;
        &:hover {
          background: ${c.ghostHover};
        }
      `;
    case 'danger':
      return css`
        ${dynamic(c.danger, `&:hover{filter:brightness(0.9)}`)}
      `;
    case 'success':
      return css`
        ${dynamic(c.success, `&:hover{filter:brightness(0.9)}`)}
      `;
    case 'outline':
      return css`
        ${base} background:transparent;
        border: 1px solid ${c.border};
        &:hover {
          background: ${c.backgroundAlt};
        }
      `;
    case 'soft': {
      // Use first stop to derive accessible text color
      const bg = c.backgroundAlt;
      const txt = getAccessiblePair(bg, t);
      return css`
        ${base} background:linear-gradient(145deg, ${c.backgroundAlt}, ${c.background});
        border: 1px solid ${c.border};
        color: ${txt};
      `;
    }
    case 'neo': {
      // Neomorphic style using theme neoSurface mixin
      const neoBase = t.mixins.neoSurface ? t.mixins.neoSurface({ radius: 8 }) : css``;
      return css`
        ${base} background:${c.background};
        ${neoBase};
      `;
    }
    default:
      return base;
  }
};

export const shapeStyles: Record<ButtonShape, ReturnType<typeof css>> = {
  rounded: css`
    border-radius: 8px;
  `,
  pill: css`
    border-radius: 9999px;
  `,
  square: css`
    border-radius: 4px;
  `,
};

export const StyledButton = styled.button<
  Required<Pick<ButtonProps, 'fullWidth' | 'size' | 'variant' | 'shape'>>
>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  user-select: none;
  line-height: 1.2;
  ${(p) => sizeStyles[p.size]};
  ${(p) => variantStyles(p.theme as ThemeWithNeo, p.variant)};
  ${(p) => shapeStyles[p.shape]};
  width: ${(p) => (p.fullWidth ? '100%' : 'auto')};
  ${(p) =>
    p.variant === 'neo' &&
    (p.theme as ThemeWithNeo).mixins.neoSurface &&
    (p.theme as ThemeWithNeo).mixins.neoSurface({ radius: p.shape === 'pill' ? 9999 : 8 })};
  transition:
    transform ${(p) => p.theme.transitions.fast},
    box-shadow ${(p) => p.theme.transitions.base},
    background ${(p) => p.theme.transitions.fast},
    color ${(p) => p.theme.transitions.fast};
  &:active {
    transform: translateY(1px);
  }
  &[data-elevated='true'] {
    box-shadow: ${(p) => p.theme.elevation.md};
  }
  &[aria-pressed='true'] {
    filter: brightness(0.95);
  }
  &:disabled,
  &[aria-disabled='true'] {
    opacity: ${(p) => p.theme.opacities.disabled};
    cursor: not-allowed;
    box-shadow: none;
  }
  & .btn-label {
    display: inline-flex;
    align-items: center;
  }
  &[aria-busy='true'] {
    pointer-events: none;
  }
  /* icon-only adjustment */
  &[aria-label][role='button'],
  &[aria-label]:not(:has(.btn-label)) {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  &:focus-visible {
    ${(p) => p.theme.mixins.focusRing()}
  }
`;

export const LoadingSpinner = styled.span`
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  display: inline-block;
  animation: spin 0.6s linear infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
