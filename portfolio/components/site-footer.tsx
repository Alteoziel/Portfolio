import { profile } from "@/lib/profile";

const contacts = [
  { href: `mailto:${profile.email}`, label: profile.email },
  { href: profile.github, label: "GitHub", external: true },
  { href: profile.linkedin, label: "LinkedIn", external: true },
  { href: profile.phoneHref, label: profile.phone },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-line bg-ink-2">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 sm:px-8 sm:py-20 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-mono text-[11px] tracking-[0.32em] text-copper uppercase">
            Contact
          </p>
          <h2 className="mt-3 max-w-md font-serif text-4xl text-fog sm:text-5xl">
            Say hello
          </h2>
          <p className="mt-4 max-w-md text-mist">
            Open to collaboration, interesting problems, and a good trail
            recommendation.
          </p>
        </div>
        <ul className="flex flex-col gap-3">
          {contacts.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-mono text-sm tracking-[0.08em] text-fog transition-colors hover:text-phosphor"
                {...(item.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-6 py-6 font-mono text-[10px] tracking-[0.16em] text-mist uppercase sm:px-8">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
