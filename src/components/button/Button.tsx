import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  fullWidth?: boolean;
}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'mxl-btn-primary',
  secondary: 'mxl-btn-secondary',
  ghost: 'mxl-btn-ghost',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  fullWidth = false,
  ...rest
}) => {
  const variantClass = variantClasses[variant];
  const widthClass = fullWidth ? 'w-full justify-center' : '';
  return (
    <button
      className={`${variantClass} inline-flex items-center gap-2 ${widthClass} ${className}`.trim()}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
