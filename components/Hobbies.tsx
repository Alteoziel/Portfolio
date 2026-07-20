import { site } from "@/content/site";

export function Hobbies() {
  return (
    <section
      id="hobbies"
      className="mx-auto max-w-5xl scroll-mt-24 px-5 py-20 sm:px-8"
    >
      <div className="max-w-2xl">
        <h2
          className="font-[family-name:var(--font-display)] text-3xl tracking-tight text-foreground sm:text-4xl"
          style={{ fontWeight: 700 }}
        >
          Beyond code
        </h2>
        <p className="mt-3 text-muted">
          A few things I care about outside of shipping projects.
        </p>
      </div>

      <ul className="mt-10 grid gap-8 sm:grid-cols-2">
        {site.hobbies.map((hobby) => (
          <li key={hobby.title} className="border-t border-border pt-5">
            <h3
              className="font-[family-name:var(--font-display)] text-xl text-foreground"
              style={{ fontWeight: 600 }}
            >
              {hobby.title}
            </h3>
            <p className="mt-2 text-muted">{hobby.blurb}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
