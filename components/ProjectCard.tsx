import type { Project } from "@/content/site";

type ProjectCardProps = {
  project: Project;
};

/**
 * ============================================================
 * YOUR TURN — build this ProjectCard
 * ============================================================
 * Goal: map project data → UI (title, blurb, tags, link).
 *
 * You receive one `project` prop with:
 * - project.title
 * - project.blurb
 * - project.tags (string[])
 * - project.href
 * - project.image? (optional — skip until you have screenshots)
 *
 * Suggested structure:
 * 1. An <article> or <a href={project.href}> wrapper (cards are OK here —
 *    this is an interactive project link)
 * 2. Title + blurb
 * 3. A row of tags (map over project.tags)
 * 4. A “View project” affordance
 *
 * Styling ideas that match the site:
 * - border border-border, rounded-lg, bg-surface, padding
 * - hover: -translate-y-0.5 + border-accent/30 transition
 * - tags as small text with muted color (avoid pill spam)
 *
 * Done looks like: Projects section shows your cards, not this TODO box.
 * Delete this comment block when you are finished.
 * ============================================================
 */
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-dashed border-accent/40 bg-accent/5 p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-accent">
        YOUR TURN · ProjectCard.tsx
      </p>
      <p className="mt-2 font-[family-name:var(--font-display)] text-lg font-semibold text-foreground">
        {project.title}
      </p>
      <p className="mt-2 text-sm text-muted">
        Implement the card UI for this project. Props are already wired — use{" "}
        <code className="rounded bg-foreground/5 px-1 py-0.5 text-foreground">
          project.blurb
        </code>
        ,{" "}
        <code className="rounded bg-foreground/5 px-1 py-0.5 text-foreground">
          project.tags
        </code>
        , and{" "}
        <code className="rounded bg-foreground/5 px-1 py-0.5 text-foreground">
          project.href
        </code>
        .
      </p>
    </article>
  );
}
