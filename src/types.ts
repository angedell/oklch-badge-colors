export type ColorMode = 'light' | 'dark';

export interface GenerateOptions {
  mode?: ColorMode;
  seedOffset?: number;
  contrast?: number;
}

export interface BadgeColors {
  background: string;
  foreground: string;
  border: string;
  gradient: {
    from: string;
    to: string;
  };
}
