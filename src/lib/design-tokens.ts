/**
 * 色の定義。昼（紙）と夜（墨）で同じ役割の色を一つずつ持つ。
 * MUI のテーマ（src/theme.ts）とデザインページ（/design）はここを参照する。
 * Tailwind / shadcn 用の CSS 変数は src/app/globals.css の :root と .dark に同じ値を書いているので、
 * 変えるときは両方を揃える。
 */

export type ColorToken = {
  /** CSS 変数名（globals.css） */
  variable: string;
  name: string;
  day: string;
  night: string;
};

export const colorTokens: ColorToken[] = [
  {
    variable: "--background",
    name: "Background",
    day: "#ECE8DF",
    night: "#0A0908",
  },
  {
    variable: "--foreground",
    name: "Foreground",
    day: "#1B1917",
    night: "#E8E3D8",
  },
  {
    variable: "--card",
    name: "Card",
    day: "#F2EFE7",
    night: "#151311",
  },
  {
    variable: "--muted",
    name: "Muted",
    day: "#E2DDD2",
    night: "#1F1C1A",
  },
  {
    variable: "--muted-foreground",
    name: "Muted foreground",
    day: "#6B665E",
    night: "#9A948A",
  },
  {
    variable: "--vermilion",
    name: "Vermilion",
    day: "#D23C28",
    night: "#E5533C",
  },
];

const token = (variable: string) => {
  const found = colorTokens.find((t) => t.variable === variable);
  if (!found) throw new Error(`unknown color token: ${variable}`);
  return found;
};

export const palette = {
  background: token("--background"),
  foreground: token("--foreground"),
  card: token("--card"),
  muted: token("--muted"),
  mutedForeground: token("--muted-foreground"),
  vermilion: token("--vermilion"),
};

/** #RRGGBB を rgba() に変換する */
export function withAlpha(hex: string, alpha: number) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
}
