import React from 'react';

// lightweight classnames combiner (avoids external dep)
function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}

export type NeoVariant = 'raised' | 'inset' | 'flat';
export type NeoShape = 'square' | 'rounded' | 'pill' | 'circle';
export type NeoSize = 'sm' | 'md' | 'lg';
export type NeoTone = 'light' | 'dark';

export interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: NeoVariant;
  shape?: NeoShape;
  size?: NeoSize;
  tone?: NeoTone;
  disabled?: boolean;
}

// Class maps
const base = 'inline-flex items-center justify-center select-none font-medium transition ease-out duration-200 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[--neo-bg]';

const sizeMap: Record<NeoSize, string> = {
  sm: 'text-sm h-8 px-3',
  md: 'text-base h-10 px-4',
  lg: 'text-lg h-12 px-6',
};

const radiusMap: Record<NeoShape, string> = {
  square: 'rounded-[6px]',
  rounded: 'rounded-[20px]',
  pill: 'rounded-full',
  circle: 'rounded-full aspect-square',
};

// Shadow presets (light tone)
const raisedShadow = 'shadow-[8px_8px_16px_rgba(190,199,216,0.9),_-8px_-8px_16px_#fff]';
const raisedShadowHover = 'hover:shadow-[10px_10px_20px_rgba(190,199,216,0.9),_-10px_-10px_20px_#fff] hover:-translate-y-px';
const insetShadow = 'shadow-[inset_8px_8px_16px_rgba(190,199,216,0.9),_inset_-8px_-8px_16px_#fff]';
const insetShadowHover = 'hover:shadow-[inset_10px_10px_20px_rgba(190,199,216,0.9),_inset_-10px_-10px_20px_#fff]';

// Dark tone swaps light/dark shadow hues; we simulate by inverting positions
const darkRaised = 'shadow-[8px_8px_16px_rgba(0,0,0,0.55),_-8px_-8px_16px_rgba(255,255,255,0.15)]';
const darkRaisedHover = 'hover:shadow-[10px_10px_20px_rgba(0,0,0,0.55),_-10px_-10px_20px_rgba(255,255,255,0.15)] hover:-translate-y-px';
const darkInset = 'shadow-[inset_8px_8px_16px_rgba(0,0,0,0.55),_inset_-8px_-8px_16px_rgba(255,255,255,0.15)]';
const darkInsetHover = 'hover:shadow-[inset_10px_10px_20px_rgba(0,0,0,0.55),_inset_-10px_-10px_20px_rgba(255,255,255,0.15)]';

const gradient = 'bg-[linear-gradient(145deg,rgba(255,255,255,0.65),rgba(220,226,238,0.35))]';
const radial = 'bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.6),transparent_60%)]';

const toneBase: Record<NeoTone, string> = {
  light: 'text-[#4b5563] bg-[--neo-bg]',
  dark: 'text-white bg-[#364152]',
};

const variantMap = (tone: NeoTone, v: NeoVariant) => {
  const isDark = tone === 'dark';
  if (v === 'flat') return cx(gradient, radial, 'shadow-none');
  if (v === 'raised') return cx(gradient, radial, isDark ? darkRaised : raisedShadow, isDark ? darkRaisedHover : raisedShadowHover);
  // inset
  return cx(gradient, radial, isDark ? darkInset : insetShadow, isDark ? darkInsetHover : insetShadowHover);
};

export const NeoButton: React.FC<NeoButtonProps> = ({
  variant = 'raised',
  shape = 'rounded',
  size = 'md',
  tone = 'light',
  disabled,
  className,
  children,
  ...rest
}) => {
  const classes = cx(
    base,
    sizeMap[size],
    radiusMap[shape],
    toneBase[tone],
    variantMap(tone, variant),
    !disabled && 'active:shadow-[inset_8px_8px_16px_rgba(190,199,216,0.9),_inset_-8px_-8px_16px_#fff] active:translate-y-[1px]',
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    'will-change-transform shadow transition-transform',
    className,
  );
  return (
    <button
      type={rest.type || 'button'}
      aria-disabled={disabled || undefined}
      disabled={disabled}
      aria-pressed={variant === 'inset' ? true : undefined}
      className={classes}
      {...rest}
    >
      {children}
    </button>
  );
};

export interface NeoIconButtonProps extends Omit<NeoButtonProps, 'children' | 'shape'> {
  label: string;
  children: React.ReactNode; // icon
}

export const NeoIconButton: React.FC<NeoIconButtonProps> = ({ label, children, ...rest }) => (
  <NeoButton aria-label={label} shape="circle" {...rest}>{children}</NeoButton>
);
