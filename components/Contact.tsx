import { site } from "@/content/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl scroll-mt-24 px-5 py-20 sm:px-8"
    >
      <div className="max-w-2xl">
        <h2
          className="font-[family-name:var(--font-display)] text-3xl tracking-tight text-foreground sm:text-4xl"
          style={{ fontWeight: 700 }}
        >
          Contact
        </h2>
        <p className="mt-3 text-muted">
          Want to talk about a project, hobby collab, or opportunity? Reach out.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${site.links.email}`}
          className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
        >
          Email me
        </a>
        <a
          href={site.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/40"
        >
          GitHub
        </a>
        <a
          href={site.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/40"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
