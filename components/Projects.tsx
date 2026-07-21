import { site } from "@/content/site";
import { ProjectCard } from "@/components/ProjectCard";

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl scroll-mt-24 px-5 py-20 sm:px-8"
    >
      <div className="max-w-2xl">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-700 tracking-tight text-foreground sm:text-4xl"
          style={{ fontWeight: 700 }}
        >
          Projects
        </h2>
        <p className="mt-3 text-muted">
          Hobby builds and experiments. Edit the list in{" "}
          <code className="rounded bg-foreground/5 px-1.5 py-0.5 text-sm text-foreground">
            content/site.ts
          </code>
          .
        </p>
      </div>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {site.projects.map((project) => (
          <li key={project.title}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
