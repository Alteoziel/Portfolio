import { site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[min(92vh,880px)] flex-col justify-end overflow-hidden px-5 pb-16 pt-24 sm:px-8 sm:pb-24"
    >
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
        style={{ animation: "soft-glow 8s ease-in-out infinite" }}
      />

      <div className="relative mx-auto w-full max-w-5xl">
        <p className="animate-fade-up font-[family-name:var(--font-display)] text-5xl font-800 tracking-tight text-foreground sm:text-7xl md:text-8xl"
          style={{ fontWeight: 800 }}
        >
          {site.name}
        </p>
        <p className="animate-fade-up-delay mt-5 max-w-xl text-lg text-muted sm:text-xl">
          {site.tagline}
        </p>
        <div className="animate-fade-up-delay-2 mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="rounded-md border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/40"
          >
            Contact
          </a>
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-2 text-sm text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            GitHub
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-2 text-sm text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
