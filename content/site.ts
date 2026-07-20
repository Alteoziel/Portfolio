/**
 * ============================================================
 * YOUR TURN — personalize this file
 * ============================================================
 * Replace the placeholder strings below with your real info.
 * The rest of the site reads from this object — you should not
 * need to hunt through components just to change copy or links.
 *
 * Done looks like:
 * - name / tagline / bio sound like you
 * - github, linkedin, email are real URLs/addresses
 * - hobbies describe interests you actually have
 * - projects can stay as placeholders until you have real ones
 * ============================================================
 */

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  href: string;
  /** Optional path under /public, e.g. "/projects/my-app.png" */
  image?: string;
};

export type Hobby = {
  title: string;
  blurb: string;
};

export const site = {
  name: "Your Name",
  tagline: "Builder of things · curious about everything",
  bio: "Replace this with a short bio. Mention what you like building, what you are learning, and a hobby or two so visitors get a sense of you beyond a resume.",
  location: "Somewhere on Earth",

  links: {
    github: "https://github.com/your-username",
    linkedin: "https://www.linkedin.com/in/your-username",
    email: "you@example.com",
    /** Put a PDF at public/resume.pdf, or point this at an external URL */
    resume: "/resume.pdf",
  },

  projects: [
    {
      title: "Placeholder Project One",
      blurb:
        "Short description of what you built and why it mattered. Swap this when you have a real hobby project ready.",
      tags: ["React", "TypeScript"],
      href: "https://github.com/your-username",
    },
    {
      title: "Placeholder Project Two",
      blurb:
        "Another stand-in. Keep blurbs to 1–2 sentences so the grid stays scannable.",
      tags: ["Next.js", "Tailwind"],
      href: "https://github.com/your-username",
    },
    {
      title: "Placeholder Project Three",
      blurb:
        "Optional third card. Delete this object if you only want two for now.",
      tags: ["Hobby"],
      href: "https://github.com/your-username",
    },
  ] satisfies Project[],

  hobbies: [
    {
      title: "Hobby one",
      blurb: "A sentence about something you enjoy outside of coding.",
    },
    {
      title: "Hobby two",
      blurb: "Another interest — music, climbing, photography, games, etc.",
    },
  ] satisfies Hobby[],
} as const;
