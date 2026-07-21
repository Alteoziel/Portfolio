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
  name: "Aedin Richardson",
  tagline: "Code. Circuits. AI.",
  bio: "Full-stack developer building at the intersection of intelligent software, microcontrollers, and AI. Driven by a lifelong curiosity for how things work—from early game dev to modern robotics—I love solving complex problems and collaborating with great people. Outside of tech, you'll usually find me out on the trail, spending time with family, or playing board games.",
  location: "Cedar City, Utah",

  links: {
    github: "https://github.com/Alteoziel",
    /**
     * External links need the protocol (`https://`).
     * Without it, the browser treats the string as a path on YOUR site:
     *   "www.linkedin.com/..."  →  yoursite.com/www.linkedin.com/...
     */
    linkedin: "https://www.linkedin.com/in/aedin-richardson",
    email: "aedinrichardson@gmail.com",
    /** Put a PDF at public/resume.pdf, or point this at an external URL */
    resume: "/aedin_richardson_resume.pdf",
  },

  projects: [
        {
      title: '"Shadow AI" Gateway',
      blurb: "Pre-flight security proxy for LLM traffic — intercepts prompts before they leave the network so PII and secrets never reach public AI APIs.",
      tags: ["Python", "FastAPI", "Security"],
      href: "https://github.com/Alteoziel/Shadow-AI-Gateway",
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
      title: "Mountain Biking",
      blurb: "If you see me riding a bike, it either means I'm commuting around town or I'm on a trail enjoying the weather and nature with someone not too far behind me.",
    },
    {
      title: "Board games and video games",
      blurb: "Almost every day you can find me hanging out with my wife or a friend playing a game of any type.",
    },
    {
      title: "Engineering",
      blurb: "I love learning how the world works and not a day goes by that I'm not spending at least a couple hours trying to design a solution to a problem that's been bugging me, building an animatronic, or exploring the limits of AI.",
    },
  ] satisfies Hobby[],
} as const;
