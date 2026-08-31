# resume — retired

This repository is decommissioned. Its content and its one piece of build
tooling live in [`acker-cloud`](https://github.com/zacker3310/acker-cloud),
and the site it produced is now a route on the main one:

**https://acker.cloud/resume**

## Where everything went

| What was here | Where it is now |
|---|---|
| `lib/profile.ts` — the LinkedIn transcription | `src/content/data/resume.json`, verbatim |
| `app/page.tsx` — the profile page | `src/app/resume/page.tsx`, rebuilt in the acker.cloud design system |
| `app/globals.css` print rules | the print block in `src/app/styles.css` |
| the doubled focus ring | `src/app/globals.css`, now applied site-wide |
| `scripts/contrast.mjs` — the WCAG gate | `scripts/contrast.mjs`, extended from one dark ramp to both themes and still blocking `build` |

Nothing was dropped. The role descriptions are still Zac's own wording, kept
verbatim, and the résumé is now validated by zod on the same terms as the
rest of the site's content.

The contrast gate earned its move: run against acker.cloud's existing ramp it
found three real AA failures — a text token at 3.0:1, accent text at 3.81:1 on
raised surfaces, and a focus ring at 2.85:1 — all fixed in the ramp rather
than by deleting the pairs that produced them.

## History

The full history of this repo is intact; only the working tree was cleared.
`git log` still has the original build, and `git show 4f84194` has the site as
it shipped.
