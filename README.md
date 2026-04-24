# oklch-badge-colors

Deterministic OKLCH color generation for badges, with dark mode and WCAG contrast correction.

## Install

```bash
npm install oklch-badge-colors
```

## Use

```typescript
import { generateBadgeColors } from "oklch-badge-colors";

const colors = generateBadgeColors("VEND001", {
  mode: "dark",
  contrast: 4.5,
});

const { background, foreground, border, gradient } = colors;
const { from, to } = gradient;
```

all data returned are oklch color strings

```typescript
console.log(background); // oklch(28% 0.16 68)
console.log(foreground); // oklch(96% 0.02 68)
console.log(border); // oklch(38% 0.136 68)
console.log(from); // oklch(34% 0.16 68)
console.log(to); // oklch(20% 0.16 82)
```

with this package you can create colorful badges based on the content of the badge.

![example](./example.png)

## Features

- Deterministic per-string colors
- OKLCH color space
- Light / Dark mode
- WCAG AA contrast correction
- No dependencies
