# Brief 00 — Create the Next.js home (Phase 0)

**Status: ACTIVE**  
**Track:** Portfolio only (no Python labs this week)  
**Budget:** one 3–5 hour session (or two shorter ones if needed)

You build this. The coach does not generate `page.tsx` for you.

## Goal

A live, minimal portfolio home that feels like *you*, built by *you*, inside `portfolio/`.

## Before you code

1. Skim [PROFILE.md](../PROFILE.md) for name, tagline, bio, links.
2. Confirm Node.js is installed (`node -v`). If not, install a current LTS.
3. Read [CURRICULUM.md](../CURRICULUM.md) Phase 0 exit criteria once.

## Steps (do in order)

### 1. Scaffold the app yourself

From the **repo root**:

```bash
npx create-next-app@latest portfolio
```

When prompted, prefer roughly:

- TypeScript: yes
- ESLint: yes
- Tailwind CSS: yes
- App Router: yes
- (other defaults are fine)

If `portfolio/` already has a `README.md` / `.gitkeep`, create the app in a temp folder and move files in, or remove only `.gitkeep` after the scaffold lands. Keep this brief’s sibling docs (`PROFILE.md`, etc.) at the repo root.

### 2. Read the real Next.js docs in your install

This repo’s Next version may differ from blog posts. Inside `portfolio/` after install:

- Open `node_modules/next/dist/docs/` (see root [AGENTS.md](../AGENTS.md))
- Read enough to know where `app/page.tsx` and `app/layout.tsx` live

### 3. Build a brand-first first viewport only

In the first screenful, include **only**:

1. Your **name** as a hero-level brand signal (not just tiny nav text)
2. **One** headline
3. **One** short supporting sentence
4. **One** CTA group (e.g. GitHub / LinkedIn / email — use full `https://` URLs)
5. **One** dominant full-bleed visual (image or atmospheric background — edge to edge)

**Do not** put in the first viewport: project grids, stats, hobby lists, cards, schedule snippets, or secondary marketing blocks. You can add an About/projects section *below* the fold later — not required for Phase 0 exit.

Design notes (keep it simple, avoid generic AI-default looks):

- Pick expressive fonts (not Inter/Roboto/Arial/system as the whole identity)
- Use CSS variables for a clear color direction
- Avoid purple-on-white clichés, warm cream + terracotta clichés, and dense newspaper layouts

Copy source: [PROFILE.md](../PROFILE.md).

### 4. Run locally and fix what breaks

```bash
cd portfolio
npm run dev
```

Open the local URL. Adjust until the first viewport matches the rules above.

### 5. Deploy once

1. Commit your `portfolio/` work on a branch and push.
2. Import the repo (or the `portfolio/` app root) on [vercel.com](https://vercel.com).
3. If the app is in a subdirectory, set the Vercel **Root Directory** to `portfolio`.
4. Paste the live URL into [WEEKLY.md](../WEEKLY.md).

### 6. Recall check (required)

Close the editor. On paper or in `WEEKLY.md`, answer without looking:

- Where does the home page file live?
- How did you set the brand / headline / CTAs?
- What would you change first if you started from an empty `page.tsx` tomorrow?

Next session: recreate the layout from a blank `page.tsx` once. If you can, Phase 0 is done.

## Definition of done (stop when checked)

- [ ] `create-next-app` run by you into `portfolio/`
- [ ] First viewport = brand + one headline + one sentence + one CTA group + full-bleed visual
- [ ] No project/stats/card clutter in the first viewport
- [ ] Deployed; live URL in `WEEKLY.md`
- [ ] Recall check written; you can recreate from blank `page.tsx`

## Out of scope for this brief

- Python labs, Docker, CI, FastAPI, project grids, perfect pixel polish
- Asking the coach to generate the whole page for you

## When stuck

Try 20–30 minutes, note what you tried in `WEEKLY.md`, then ask the coach a **specific** question (error message, file path, what you expected vs what happened).
