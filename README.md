# Portfolio

Personal portfolio built with **Next.js (React)** and **Tailwind CSS**, meant to be hosted on **Vercel**.

This project is set up so you can learn by building the important pieces yourself, while scaffolding and repetitive layout are already in place.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build check
npm run lint    # eslint
```

## YOUR TURN checklist

Do these yourself — they are the parts you can honestly say you built.

### 1. Personalize your content

Edit [`content/site.ts`](content/site.ts):

- [ ] `name`, `tagline`, `bio`, `location`
- [ ] `links.github`, `links.linkedin`, `links.email`
- [ ] Drop your PDF at [`public/resume.pdf`](public/resume.pdf) (see “Resume PDF” below)
- [ ] `hobbies` copy
- [ ] `projects` — keep placeholders until you have real hobby projects

**Done looks like:** the hero, hobbies, and links show *your* info, not “Your Name”.

### 2. Build the About section

Edit [`components/About.tsx`](components/About.tsx):

- [ ] Replace the dashed “YOUR TURN” placeholder with a real About layout
- [ ] Use `site.bio` (and anything else you want from `site`)
- [ ] Match the site spacing / typography used in nearby sections

**Done looks like:** visitors can read who you are; the green TODO box is gone.

### 3. Build the project card

Edit [`components/ProjectCard.tsx`](components/ProjectCard.tsx):

- [ ] Render `project.title`, `project.blurb`, `project.tags`, and `project.href`
- [ ] Make the card a clear clickable project link
- [ ] Keep styling simple and consistent with the rest of the page

The list wrapper in [`components/Projects.tsx`](components/Projects.tsx) is already wired — you only need the card.

**Done looks like:** the Projects grid shows your cards, not TODO stubs.

### 4. Build the resume PDF viewer

Edit [`components/ResumeViewer.tsx`](components/ResumeViewer.tsx):

- [ ] Drop your real PDF at `public/resume.pdf` (placeholder is fine while coding)
- [ ] Implement `Document` + `Page` from `react-pdf` following the file’s comment checklist
- [ ] Confirm `/resume` shows page canvases (no browser PDF toolbar)

The route shell (`app/resume/page.tsx`), download button, and `ResumeViewerLoader` (client-only load) are already wired — you own the viewer.

**Done looks like:** green YOUR TURN box is gone; your resume pages render cleanly.

### 5. Deploy on Vercel (you own this step)

1. Push this branch / merge to GitHub (`alteoziel/portfolio`).
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import this repo.
3. Leave the defaults (Next.js is detected automatically) → **Deploy**.
4. Open the live URL and confirm the site loads.

**Done looks like:** you have a public URL you can put on your resume / LinkedIn.

## What the agent already built

- Next.js App Router + Tailwind setup
- Shared layout, fonts (Syne + IBM Plex Sans), CSS variables, atmosphere background
- Header, Hero, Projects list wrapper, Hobbies, Links, Contact, Footer
- Content model in `content/site.ts` with placeholders
- `/resume` route shell + download button + client-only loader
- Guided starters for `About.tsx`, `ProjectCard.tsx`, and `ResumeViewer.tsx` (not finished implementations)
- `react-pdf` dependency installed (you still write the viewer)

## Project map

| Path | Role |
|---|---|
| `content/site.ts` | **Your** content hub |
| `components/About.tsx` | **Your** hand-built section |
| `components/ProjectCard.tsx` | **Your** hand-built card |
| `components/ResumeViewer.tsx` | **Your** hand-built PDF viewer |
| `components/ResumeViewerLoader.tsx` | Client-only loader for the viewer (`ssr: false`) |
| `components/Projects.tsx` | List that maps `site.projects` → `ProjectCard` |
| `app/page.tsx` | Assembles all sections |
| `app/resume/page.tsx` | Resume route shell (Header, Download, loader) |
| `app/globals.css` | Design tokens + light motion + `.resume-page` styles |

## Resume PDF — mental model (interview prep)

**Problem:** iframe/`<embed>` show the browser’s PDF UI (toolbar, weird chrome).

**Approach:**

1. Put the file in `public/` → Next serves it at `/resume.pdf` (static asset, no API).
2. On `/resume`, render pages with **pdf.js** (via `react-pdf`) onto canvases.
3. Keep a normal `<a download>` for people who want the raw PDF.

**Why client-only?** pdf.js needs the DOM/canvas/workers. `ResumeViewerLoader` uses `next/dynamic` with `ssr: false` so Next doesn’t try to run that on the server.

**Your job:** implement `ResumeViewer.tsx`. Say the soundbite in that file’s comment block out loud until it feels natural.

## Adding a real project later

1. Add an object to `site.projects` in `content/site.ts`.
2. Optionally drop a screenshot in `public/projects/` and set `image`.
3. Push — Vercel redeploys.

## Stack

- React + Next.js
- Tailwind CSS v4
- TypeScript
- Hosting: Vercel (recommended over GitHub Pages for this stack)
