// Utility functions for computing accessible text color based on WCAG contrast
// Chooses between light (textInverse) and dark (textPrimary) tones.

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const h = hex.replace('#', '');
  if (![3, 6].includes(h.length)) return null;
  const full = h.length === 3 ? h.split('').map(c => c + c).join('') : h;
  const int = parseInt(full, 16);
  return { r: (int >> 16) & 255, g: (int >> 8) & 255, b: int & 255 };
}

function relativeLuminance({ r, g, b }: { r: number; g: number; b: number }): number {
  const toLin = (c: number) => {
    const srgb = c / 255;
    return srgb <= 0.03928 ? srgb / 12.92 : Math.pow((srgb + 0.055) / 1.055, 2.4);
  };
  const R = toLin(r); const G = toLin(g); const B = toLin(b);
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

function contrastRatio(l1: number, l2: number): number {
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

export function getAccessibleTextColor(bg: string, prefer?: { light?: string; dark?: string }): string {
  if (!bg || bg.startsWith('linear') || bg === 'transparent') return prefer?.dark || '#111827';
  const rgb = hexToRgb(bg);
  if (!rgb) return prefer?.dark || '#111827';
  const lumBg = relativeLuminance(rgb);
  const contrastBlack = contrastRatio(lumBg, 0);
  const contrastWhite = contrastRatio(lumBg, 1);
  if (contrastBlack === contrastWhite) return (prefer?.dark || '#111827');
  return contrastBlack > contrastWhite ? (prefer?.dark || '#111827') : (prefer?.light || '#FFFFFF');
}

export interface MinimalThemeForContrast { colors?: { textInverse?: string; textPrimary?: string } }

export function getAccessiblePair(bg: string, theme: MinimalThemeForContrast) {
  return getAccessibleTextColor(bg, { light: theme?.colors?.textInverse, dark: theme?.colors?.textPrimary });
}
