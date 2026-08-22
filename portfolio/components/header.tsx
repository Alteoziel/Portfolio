import { profile } from "@/lib/profile";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-8">
        <a
          href="#top"
          className="font-mono text-[11px] tracking-[0.28em] text-phosphor uppercase"
        >
          AR
        </a>
        <nav aria-label="Primary" className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] tracking-[0.18em] text-mist uppercase transition-colors hover:text-fog"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.github}
            className="hidden font-mono text-[11px] tracking-[0.18em] text-copper uppercase transition-colors hover:text-fog sm:inline"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
