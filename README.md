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
    
    const {background, foreground, border, gradient } = colors;
    const {from, to} = gradient:
```
all data returned are oklch color strings

## Features

- Deterministic per-string colors
- OKLCH color space
- Light / Dark mode
- WCAG AA contrast correction
- No dependencies