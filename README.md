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

```typescript
import { generateBadgeColors } from "oklch-badge-colors";
import * as React from "react";
import { useTheme } from "#/components/theme-provider";
import { Badge } from "#/components/ui/badge";

interface DynamicBadgeProps {
	children: string;
	className?: string;
}

export function DynamicBadge({ children, className }: DynamicBadgeProps) {
	const { resolvedTheme } = useTheme();

	const colors = React.useMemo(
		() =>
			generateBadgeColors(children, {
				mode: resolvedTheme,
				contrast: 4.5,
			}),
		[children, resolvedTheme],
	);

	return (
		<Badge
			className={className}
			style={{
				background: `linear-gradient(135deg, ${colors.gradient.from}, ${colors.gradient.to})`,
				color: colors.foreground,
				borderColor: colors.border,
				transition:
					"background 200ms cubic-bezier(0.4, 0, 0.2, 1), color 200ms cubic-bezier(0.4, 0, 0.2, 1), border-color 200ms cubic-bezier(0.4, 0, 0.2, 1)",
			}}
		>
			{children}
		</Badge>
	);
}


```



## Features

- Deterministic per-string colors
- OKLCH color space
- Light / Dark mode
- WCAG AA contrast correction
- No dependencies
