import Link from "next/link";
import { site } from "@/content/site";

const homeNav = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#hobbies", label: "Hobbies" },
  { href: "/#links", label: "Links" },
  { href: "/#contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-5 py-3 sm:gap-4 sm:px-8">
        <Link
          href="/#top"
          className="shrink-0 font-[family-name:var(--font-display)] text-sm tracking-tight text-foreground transition-colors hover:text-accent sm:text-base"
          style={{ fontWeight: 700 }}
        >
          {site.name}
        </Link>
        <nav
          aria-label="Primary"
          className="-mx-1 flex items-center gap-0.5 overflow-x-auto px-1 sm:gap-1"
        >
          {homeNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative shrink-0 px-2.5 py-2 text-sm text-muted transition-colors hover:text-foreground sm:px-3"
            >
              {item.label}
              <span className="absolute inset-x-2.5 bottom-1 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100 sm:inset-x-3" />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
