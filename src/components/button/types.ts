import React from 'react';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'danger'
  | 'success'
  | 'outline'
  | 'soft';
export type ButtonSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonShape = 'rounded' | 'pill' | 'square';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  shape?: ButtonShape;
  neo?: boolean;
  asLink?: boolean;
  href?: string; // if provided renders an anchor element
  iconOnly?: boolean; // renders only an icon (uses leftIcon)
  pressed?: boolean; // controlled pressed / toggle state
  elevated?: boolean; // apply elevation shadow treatment
  loadingStyle?: 'spinner' | 'skeleton' | 'progress';
  progress?: number; // 0..1 when loadingStyle = progress
  requireConfirm?: boolean; // two-step confirmation (destructive)
  confirmLabel?: string; // label shown on 2nd click (default: Confirm)
  confirmTimeout?: number; // ms before reset (default 4000)
  onConfirm?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>; // fires on confirmed click
}
