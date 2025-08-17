import React from 'react';

import { StyledButton, LoadingSpinner } from './Button.styles';
import type { ButtonProps } from './types';

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
  children,
  disabled,
  ...rest
}) => {
  const content = (
    <>
      {loading && <LoadingSpinner aria-hidden="true" />}
      {!loading && leftIcon}
      <span>{children}</span>
      {!loading && rightIcon}
    </>
  );
  return (
  <StyledButton
      as={asLink ? 'a' : 'button'}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled || loading}
      shape={shape}
      neo={neo}
      aria-busy={loading || undefined}
      {...rest}
    >
      {content}
    </StyledButton>
  );
};

export default Button;
