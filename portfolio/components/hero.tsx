import { CircuitField } from "@/components/circuit-field";
import { profile } from "@/lib/profile";

const ctas = [
  { href: profile.github, label: "GitHub", external: true },
  { href: profile.linkedin, label: "LinkedIn", external: true },
  { href: `mailto:${profile.email}`, label: "Email", external: false },
  { href: "#work", label: "Work", external: false },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-svh flex-col justify-end overflow-hidden"
    >
      <CircuitField />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-28 sm:px-8 sm:pb-24">
        <p className="font-mono text-[11px] tracking-[0.32em] text-copper uppercase">
          {profile.location}
        </p>
        <h1 className="mt-5 max-w-4xl font-serif text-[clamp(3.4rem,12vw,8.5rem)] leading-[0.9] text-fog">
          {profile.name}
        </h1>
        <p className="mt-8 font-mono text-sm tracking-[0.28em] text-phosphor uppercase sm:text-base">
          {profile.tagline}
        </p>
        <p className="mt-5 max-w-xl text-lg leading-8 text-mist sm:text-xl">
          {profile.headline}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          {ctas.map((cta) => (
            <a
              key={cta.label}
              href={cta.href}
              className="inline-flex items-center border border-line bg-ink/50 px-4 py-2 font-mono text-[11px] tracking-[0.2em] text-fog uppercase backdrop-blur-sm transition-colors hover:border-phosphor hover:text-phosphor"
              {...(cta.external
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
            >
              {cta.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
