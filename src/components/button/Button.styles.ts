import styled, { css } from 'styled-components';

import type { ThemeWithNeo } from '../../theme';

import type { ButtonProps, ButtonSize, ButtonVariant, ButtonShape } from './types.js';

export const sizeStyles: Record<ButtonSize, ReturnType<typeof css>> = {
  xs: css`font-size: 12px; padding: 2px 8px;`,
  sm: css`font-size: 14px; padding: 4px 12px;`,
  md: css`font-size: 16px; padding: 8px 16px;`,
  lg: css`font-size: 18px; padding: 12px 20px;`,
};

export const variantStyles = (t: ThemeWithNeo, v: ButtonVariant) => {
  const c = t.colors;
  const base = css`color: ${c.textPrimary};`;
  switch (v) {
    case 'primary':
      return css`${base} background:${c.primary}; color:${c.textInverse}; &:hover{background:${c.primaryHover}} &:active{background:${c.primaryActive}}`;
    case 'secondary':
      return css`${base} background:${c.secondary}; &:hover{background:${c.secondaryHover}} &:active{background:${c.secondaryActive}}`;
    case 'ghost':
      return css`${base} background:transparent; &:hover{background:${c.ghostHover}}`;
    case 'danger':
      return css`${base} background:${c.danger}; color:${c.textInverse}; &:hover{filter:brightness(0.9)};`;
    case 'success':
      return css`${base} background:${c.success}; color:${c.textInverse}; &:hover{filter:brightness(0.9)};`;
    case 'outline':
      return css`${base} background:transparent; border:1px solid ${c.border}; &:hover{background:${c.backgroundAlt}}`;
    case 'soft':
      return css`${base} background:linear-gradient(145deg, ${c.backgroundAlt}, ${c.background}); border:1px solid ${c.border};`;
    default:
      return base;
  }
};

export const shapeStyles: Record<ButtonShape, ReturnType<typeof css>> = {
  rounded: css`border-radius: 8px;`,
  pill: css`border-radius: 9999px;`,
  square: css`border-radius: 4px;`,
};

export const StyledButton = styled.button<Required<Pick<ButtonProps, 'fullWidth' | 'size' | 'variant' | 'shape'>> & Pick<ButtonProps,'neo'>>`
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
  ${(p) => p.neo && (p.theme as ThemeWithNeo).mixins.neoSurface && (p.theme as ThemeWithNeo).mixins.neoSurface()};
  transition: transform ${(p) => p.theme.transitions.fast}, box-shadow ${(p) => p.theme.transitions.base};
  &:active { transform: translateY(1px); }
  &:disabled { opacity: ${(p) => p.theme.opacities.disabled}; cursor: not-allowed; }
  &:focus-visible { ${(p) => p.theme.mixins.focusRing()} }
`;

export const LoadingSpinner = styled.span`
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  display: inline-block;
  animation: spin 0.6s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`;
