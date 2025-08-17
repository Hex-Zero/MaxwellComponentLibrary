import React from 'react';

import { StyledButton, LoadingSpinner } from './Button.styles';
import type { ButtonProps } from './types';

type ClickEl = HTMLButtonElement | HTMLAnchorElement;
type ClickEvt = React.MouseEvent<ClickEl>;
function useConfirm(
  requireConfirm: boolean | undefined,
  confirmTimeout: number,
  onConfirm?: React.MouseEventHandler<ClickEl>,
) {
  const [confirming, setConfirming] = React.useState(false);
  React.useEffect(() => {
    if (!confirming) return;
    const id = setTimeout(() => setConfirming(false), confirmTimeout);
    return () => clearTimeout(id);
  }, [confirming, confirmTimeout]);
  const wrapClick = (handler?: React.MouseEventHandler<ClickEl>) => (e: ClickEvt) => {
    if (requireConfirm && !confirming) {
      e.preventDefault();
      setConfirming(true);
      return;
    }
    if (requireConfirm && confirming && onConfirm) onConfirm(e);
    if (handler && (!requireConfirm || confirming)) handler(e);
    if (confirming) setConfirming(false);
  };
  return { confirming, wrapClick } as const;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  leftIcon,
  rightIcon,
  shape = 'rounded',
  neo = false,
  asLink = false,
  href,
  iconOnly = false,
  pressed,
  elevated = false,
  loadingStyle = 'spinner',
  progress,
  requireConfirm = false,
  confirmLabel = 'Confirm',
  confirmTimeout = 4000,
  onConfirm,
  children,
  disabled,
  ...rest
}) => {
  const isDisabled = disabled || loading;
  const Tag: 'a' | 'button' = href || asLink ? 'a' : 'button';
  const ariaPressed = typeof pressed === 'boolean' ? pressed : undefined;
  const showLeft = !loading && leftIcon && (iconOnly || leftIcon);
  const showRight = !loading && rightIcon && !iconOnly;
  const accessibleLabel =
    iconOnly && leftIcon && typeof children === 'string'
      ? { 'aria-label': children, title: children }
      : {};

  const { confirming, wrapClick } = useConfirm(requireConfirm, confirmTimeout, onConfirm);
  const handleClick = wrapClick(isDisabled ? undefined : rest.onClick);

  const loadingNode =
    loading && loadingStyle === 'spinner' ? <LoadingSpinner aria-hidden="true" /> : null;
  const skeleton = loading && loadingStyle === 'skeleton';
  const showProgress = loading && loadingStyle === 'progress' && typeof progress === 'number';

  return (
    <StyledButton
      as={Tag}
      href={Tag === 'a' ? href : undefined}
      role={Tag === 'a' ? 'button' : undefined}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      disabled={Tag !== 'a' ? isDisabled : undefined}
      aria-disabled={Tag === 'a' ? isDisabled : undefined}
      shape={shape}
      neo={neo}
      data-elevated={elevated ? 'true' : undefined}
      aria-busy={loading || undefined}
      aria-pressed={ariaPressed}
      {...accessibleLabel}
      onClick={handleClick}
      data-loading-style={loadingStyle}
      data-skeleton={skeleton || undefined}
      data-confirming={confirming || undefined}
      {...rest}
    >
      {loadingNode}
      {skeleton && <span className="btn-skeleton" aria-hidden="true" />}
      {showLeft}
      {!iconOnly && !skeleton && (
        <span className="btn-label">{confirming ? confirmLabel : children}</span>
      )}
      {showRight}
      {showProgress && (
        <span className="btn-progress" aria-hidden="true">
          <span
            className="bar"
            style={{ transform: `scaleX(${Math.min(Math.max(progress ?? 0, 0), 1)})` }}
          />
        </span>
      )}
    </StyledButton>
  );
};
