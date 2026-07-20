import { site } from "@/content/site";

/**
 * ============================================================
 * YOUR TURN — build this About section
 * ============================================================
 * Goal: practice writing a real React component with JSX + Tailwind.
 *
 * Suggested structure:
 * 1. A <section id="about"> wrapper
 * 2. A heading (e.g. "About")
 * 3. A short paragraph using `site.bio`
 * 4. Optional: show `site.location` or a line about what you like building
 *
 * Tips:
 * - Import is already done: `site` comes from `@/content/site`
 * - Match nearby sections: max-w-5xl, px-5 / sm:px-8, generous vertical padding
 * - Use font-[family-name:var(--font-display)] for the heading
 * - text-muted for supporting copy, text-foreground for main text
 *
 * Done looks like: visitors can read who you are without seeing this TODO box.
 * Delete this comment block when you are finished.
 * ============================================================
 */
export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-5xl scroll-mt-24 px-5 py-20 sm:px-8"
    >
      <div className="rounded-lg border border-dashed border-accent/40 bg-accent/5 px-5 py-8 sm:px-8">
        <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-accent">
          YOUR TURN · About.tsx
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          Replace this placeholder with your About layout. Use{" "}
          <code className="rounded bg-foreground/5 px-1 py-0.5 text-foreground">
            site.bio
          </code>
          ,{" "}
          <code className="rounded bg-foreground/5 px-1 py-0.5 text-foreground">
            site.name
          </code>
          , and anything else you want from{" "}
          <code className="rounded bg-foreground/5 px-1 py-0.5 text-foreground">
            content/site.ts
          </code>
          . Right now the bio on file starts with: “{site.bio.slice(0, 72)}…”
        </p>
      </div>
    </section>
  );
}
