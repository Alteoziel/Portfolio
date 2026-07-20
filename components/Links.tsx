import { site } from "@/content/site";

const items = [
  {
    label: "Resume",
    href: site.links.resume,
    description: "PDF or external resume link",
  },
  {
    label: "GitHub",
    href: site.links.github,
    description: "Code, experiments, and open work",
  },
  {
    label: "LinkedIn",
    href: site.links.linkedin,
    description: "Experience and professional profile",
  },
] as const;

export function Links() {
  return (
    <section
      id="links"
      className="mx-auto max-w-5xl scroll-mt-24 px-5 py-20 sm:px-8"
    >
      <div className="max-w-2xl">
        <h2
          className="font-[family-name:var(--font-display)] text-3xl tracking-tight text-foreground sm:text-4xl"
          style={{ fontWeight: 700 }}
        >
          Resume & links
        </h2>
        <p className="mt-3 text-muted">
          Quick paths to the rest of my trail online.
        </p>
      </div>

      <ul className="mt-10 divide-y divide-border border-y border-border">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="group flex flex-col gap-1 py-5 transition-colors sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <span
                className="font-[family-name:var(--font-display)] text-xl text-foreground transition-colors group-hover:text-accent"
                style={{ fontWeight: 600 }}
              >
                {item.label}
              </span>
              <span className="text-sm text-muted sm:text-right">
                {item.description}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
