import type { Project } from "@/content/site";

type ProjectCardProps = {
  project: Project;
};

/**
 * Maps one `project` from content/site.ts → a clickable card.
 *
 * Why blurbs were missing before: this file used to be a YOUR TURN stub that
 * only printed instructional text. The blurb lived in site.ts the whole time —
 * the UI just never rendered `{project.blurb}`.
 *
 * Interview soundbite:
 *   “Projects.tsx maps over site.projects and passes each item into ProjectCard.
 *    The card reads title, blurb, tags, and href from that prop and links out.”
 */
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.href}
      target={project.href.startsWith("http") ? "_blank" : undefined}
      rel={
        project.href.startsWith("http") ? "noopener noreferrer" : undefined
      }
      className="group flex h-full flex-col rounded-lg border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-accent/30"
    >
      <h3
        className="font-[family-name:var(--font-display)] text-lg text-foreground transition-colors group-hover:text-accent"
        style={{ fontWeight: 600 }}
      >
        {project.title}
      </h3>

      {/* This is the line that surfaces your site.ts blurb on the page */}
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {project.blurb}
      </p>

      {project.tags.length > 0 ? (
        <p className="mt-4 text-xs text-muted">
          {project.tags.join(" · ")}
        </p>
      ) : null}

      <span className="mt-4 text-sm font-medium text-accent underline-offset-4 group-hover:underline">
        View project
      </span>
    </a>
  );
}
