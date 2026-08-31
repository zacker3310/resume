# resume

Zac Acker's professional profile, transcribed from LinkedIn on 2026-08-30.

Next.js 16 (App Router, Turbopack) + Tailwind 4. Static, no data fetching.
Styled with the acker.cloud design system: neutral grey base, signal red
accent, dark only.

## Commands

```sh
pnpm dev              # http://localhost:3000
pnpm build            # contrast gate, then next build
pnpm typecheck
pnpm check:contrast   # WCAG ratios for every pair the page uses
```

## Contrast gate

`scripts/contrast.mjs` measures every foreground/background pair against 4.5:1
for text and 3:1 for a graphic, and it runs before `next build`. A ramp that
drops below AA fails the build rather than shipping.

Two values deviate from `references/tokens.md` in the acker-design skill,
both because the measured numbers forced it:

- `--accent` `#C0392B` is 3.20:1 on the base. It clears the graphic threshold
  but not the text one, so it is used for rules, borders and focus rings only.
  Red text uses `--accent-text` `#E8695C` at 5.48:1.
- The reference's primary button (accent background, `--bg-base` text)
  measures 3.39:1 and fails. Button text is `--text-primary` at 4.77:1.

The focus ring is doubled (`--base` inner ring, then accent) so the accent
always sits against the page background. A single ring measures 2.85:1 on a
raised card.

## Content

`lib/profile.ts` holds everything. Role descriptions are Zac's own wording,
kept verbatim. Update that file, not the page.

There is no About section because the LinkedIn profile does not have one.
