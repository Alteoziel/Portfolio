import type { Project } from "@/lib/github";
import { profile } from "@/lib/profile";

function formatUpdated(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(new Date(iso));
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-6 flex flex-wrap gap-4">
      {project.homepage ? (
        <a
          href={project.homepage}
          className="font-mono text-[11px] tracking-[0.18em] text-phosphor uppercase transition-colors hover:text-fog"
          rel="noreferrer"
          target="_blank"
        >
          Live demo →
        </a>
      ) : null}
      {project.url ? (
        <a
          href={project.url}
          className="font-mono text-[11px] tracking-[0.18em] text-copper uppercase transition-colors hover:text-fog"
          rel="noreferrer"
          target="_blank"
        >
          GitHub →
        </a>
      ) : null}
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  if (tags.length === 0) return null;
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="border border-line px-2 py-1 font-mono text-[10px] tracking-[0.16em] text-mist uppercase"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

export function Projects({ projects }: { projects: Project[] }) {
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <section id="work" className="border-t border-line bg-ink-2">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <p className="font-mono text-[11px] tracking-[0.32em] text-copper uppercase">
          Selected work
        </p>
        <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-xl font-serif text-4xl text-fog sm:text-5xl">
            Apps and projects
          </h2>
          <a
            href={profile.github}
            className="font-mono text-[11px] tracking-[0.18em] text-mist uppercase transition-colors hover:text-phosphor"
            rel="noreferrer"
            target="_blank"
          >
            All repositories →
          </a>
        </div>

        <div className="mt-12 grid gap-4">
          {featured.map((project) => (
            <article
              key={project.repo}
              className="border border-line bg-panel/60 p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <p className="font-mono text-[11px] tracking-[0.22em] text-phosphor uppercase">
                  Featured
                </p>
                <p className="font-mono text-[11px] tracking-[0.16em] text-mist uppercase">
                  Updated {formatUpdated(project.pushedAt)}
                </p>
              </div>
              <h3 className="mt-4 font-serif text-3xl text-fog sm:text-4xl">
                {project.title}
              </h3>
              <p className="mt-4 max-w-3xl text-base leading-7 text-mist sm:text-lg">
                {project.description}
              </p>
              <Tags tags={project.tags} />
              <ProjectLinks project={project} />
            </article>
          ))}
        </div>

        {rest.length > 0 ? (
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {rest.map((project) => (
              <article
                key={project.repo}
                className="flex flex-col border border-line bg-ink/40 p-6"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serif text-2xl text-fog">
                    {project.title}
                  </h3>
                  <p className="shrink-0 font-mono text-[10px] tracking-[0.14em] text-mist uppercase">
                    {formatUpdated(project.pushedAt)}
                  </p>
                </div>
                <p className="mt-3 flex-1 text-sm leading-6 text-mist">
                  {project.description}
                </p>
                <Tags tags={project.tags} />
                <ProjectLinks project={project} />
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
