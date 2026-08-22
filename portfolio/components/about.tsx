import { hobbies, profile } from "@/lib/profile";

export function About() {
  return (
    <section id="about" className="border-t border-line bg-ink">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="font-mono text-[11px] tracking-[0.32em] text-copper uppercase">
            About
          </p>
          <h2 className="mt-3 font-serif text-4xl text-fog sm:text-5xl">
            How things work
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-mist">
            {profile.bio}
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-mist">
            Software development student at {profile.school}. Building at the
            seam of full-stack apps, microcontrollers, and AI — then taking it
            back to the trail.
          </p>
        </div>
        <ul className="space-y-8 border-l border-line pl-6 sm:pl-8">
          {hobbies.map((hobby) => (
            <li key={hobby.label}>
              <p className="font-mono text-[11px] tracking-[0.22em] text-phosphor uppercase">
                {hobby.label}
              </p>
              <p className="mt-2 text-sm leading-6 text-mist">{hobby.copy}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
