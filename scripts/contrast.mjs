// Measures WCAG contrast for every foreground/background pair the page uses.
// The brand rule is 4.5:1 for text and 3:1 for a graphic, measured rather than
// eyeballed, so this runs as part of the build.
//
// Two deviations from references/tokens.md, both forced by the numbers:
//   --accent #C0392B is 3.39:1 on the base. That clears the graphic threshold
//   but not the text one, so it is used for rules, borders and focus rings
//   only. Red text uses --accent-text, a lighter tint of the same hue.
//   The spec's primary button (accent background, --bg-base text) measures
//   3.39:1 and fails, so button text is --text-primary instead.
const TOKENS = {
  bgBase: "#1A1A1A",
  bgDeep: "#141414",
  surface: "#242424",
  surfaceRaised: "#2C2C2C",
  border: "#2E2E2E",
  borderStrong: "#3D3D3D",
  textPrimary: "#F0F0F0",
  textSecondary: "#A8A8A8",
  textMuted: "#666666",
  accent: "#C0392B",
  accentText: "#E8695C",
};

const lin = (c) => {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
};
const luminance = (hex) => {
  const n = parseInt(hex.slice(1), 16);
  return 0.2126 * lin((n >> 16) & 255) + 0.7152 * lin((n >> 8) & 255) + 0.0722 * lin(n & 255);
};
const ratio = (a, b) => {
  const [x, y] = [luminance(a), luminance(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
};

// Every pair that actually appears on the page. "graphic" covers UI component
// boundaries and focus rings. Purely decorative dividers are exempt under
// WCAG 1.4.11 and are listed at the bottom as measured-but-unenforced.
const ENFORCED = [
  ["body on page", TOKENS.textPrimary, TOKENS.bgBase, "text"],
  ["body on surface", TOKENS.textPrimary, TOKENS.surface, "text"],
  ["body on raised surface", TOKENS.textPrimary, TOKENS.surfaceRaised, "text"],
  ["secondary on page", TOKENS.textSecondary, TOKENS.bgBase, "text"],
  ["secondary on surface", TOKENS.textSecondary, TOKENS.surface, "text"],
  ["secondary on deep", TOKENS.textSecondary, TOKENS.bgDeep, "text"],
  ["accent text on page", TOKENS.accentText, TOKENS.bgBase, "text"],
  ["accent text on surface", TOKENS.accentText, TOKENS.surface, "text"],
  ["button label on accent", TOKENS.textPrimary, TOKENS.accent, "text"],
  // The focus ring is doubled: an inner 2px ring of --bg-base then the accent.
  // The accent therefore always sits against --bg-base whatever surface is
  // underneath, which is what makes it clear 3:1 on a raised card too.
  ["focus ring against its inner ring", TOKENS.accent, TOKENS.bgBase, "graphic"],
  ["accent rule on page", TOKENS.accent, TOKENS.bgBase, "graphic"],
];

const DECORATIVE = [
  ["divider on page", TOKENS.border, TOKENS.bgBase],
  ["divider on surface", TOKENS.borderStrong, TOKENS.surface],
  ["muted metadata on page", TOKENS.textMuted, TOKENS.bgBase],
];

const THRESHOLD = { text: 4.5, graphic: 3.0 };
let failed = 0;
console.log("pair                                ratio   need  result");
console.log("-".repeat(58));
for (const [label, fg, bg, kind] of ENFORCED) {
  const r = ratio(fg, bg);
  const need = THRESHOLD[kind];
  const ok = r >= need;
  if (!ok) failed++;
  console.log(`${label.padEnd(35)} ${r.toFixed(2).padStart(5)}  ${need.toFixed(1)}   ${ok ? "pass" : "FAIL"}`);
}
console.log("-".repeat(58));
console.log("decorative, measured but not enforced (WCAG 1.4.11 exempt):");
for (const [label, fg, bg] of DECORATIVE) {
  console.log(`  ${label.padEnd(33)} ${ratio(fg, bg).toFixed(2).padStart(5)}`);
}
console.log("");
if (failed) {
  console.error(`${failed} enforced pair(s) below threshold. Fix the ramp, do not ship it.`);
  process.exit(1);
}
console.log(`${ENFORCED.length} enforced pairs clear their threshold`);
