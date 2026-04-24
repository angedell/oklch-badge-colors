export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function oklch(l: number, c: number, h: number) {
  return `oklch(${l}% ${c} ${h})`;
}

export function contrastRatio(l1: number, l2: number) {
  const a = (l1 / 100 + 0.05);
  const b = (l2 / 100 + 0.05);
  return a > b ? a / b : b / a;
}

export function ensureContrast(bgL: number, textL: number, ratio: number) {
  let adjusted = textL;
  let safety = 0;

  while (contrastRatio(bgL, adjusted) < ratio && safety < 50) {
    adjusted += adjusted > bgL ? 2 : -2;
    adjusted = clamp(adjusted, 8, 96);
    safety++;
  }

  return adjusted;
}
