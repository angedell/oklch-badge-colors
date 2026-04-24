import { hashString } from './hashString';
import { clamp, oklch, ensureContrast } from './utils';
import type { BadgeColors, GenerateOptions } from './types';

export function generateBadgeColors(
  label: string,
  options?: GenerateOptions
): BadgeColors {
  const mode = options?.mode ?? 'light';
  const contrast = options?.contrast ?? 4.5;
  const seed = hashString(label) + (options?.seedOffset ?? 0);

  const hue = seed % 360;

  const baseL = mode === 'light' ? 72 : 28;
  const rawTextL = mode === 'light' ? 18 : 88;

  const chroma = clamp(0.12 + (seed % 20) / 200, 0.1, 0.18);
  const textL = ensureContrast(baseL, rawTextL, contrast);

  return {
    background: oklch(baseL, chroma, hue),
    foreground: oklch(textL, 0.02, hue),
    border: oklch(
      clamp(baseL - (mode === 'light' ? 10 : -10), 10, 90),
      chroma * 0.85,
      hue
    ),
    gradient: {
      from: oklch(clamp(baseL + 6, 10, 90), chroma, hue),
      to: oklch(clamp(baseL - 8, 10, 90), chroma, (hue + 14) % 360)
    }
  };
}
