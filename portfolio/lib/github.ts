export type Project = {
  repo: string;
  title: string;
  description: string;
  url: string | null;
  homepage: string | null;
  language: string | null;
  tags: string[];
  featured: boolean;
  pushedAt: string;
};

type Overlay = {
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
  hide?: boolean;
  homepage?: string;
  /** Private repos: show live demo only, no public GitHub link. */
  hideGithub?: boolean;
};

type GithubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  fork: boolean;
  archived: boolean;
  pushed_at: string;
  topics?: string[];
};

const GITHUB_USER = "Alteoziel";

/** Copy and ranking that GitHub's empty descriptions don't provide. */
const overlays: Record<string, Overlay> = {
  "Budget-App": {
    title: "Alte' Budgeting",
    description:
      "Mobile-first personal budgeting PWA inspired by YNAB. Multi-budget sharing, percentage-based category assignment, Plaid bank sync, YNAB CSV import, passkeys, and an installable offline shell on Next.js and Supabase.",
    tags: ["TypeScript", "Next.js", "Supabase", "Plaid", "PWA"],
    featured: true,
    homepage: "https://budget-app-mauve-five.vercel.app",
  },
  "Kami-No-Ko": {
    title: "Kami-No-Ko",
    description:
      "Japanese study PWA for playlist quizzes, focused reading and speaking drills, speech transcription grading, and whole-page book translation — built for practice that sticks.",
    tags: ["TypeScript", "Vite", "PWA", "Speech"],
    featured: true,
    homepage: "https://kami-no-ko.vercel.app",
    hideGithub: true,
  },
  UnlockStyleEscapeRooms: {
    title: "Unlock Style Escape Rooms",
    description:
      "Browser app for Unlock-style escape room card games. Original rooms, installable shell, and a door-to-door flow for playing through each scenario.",
    tags: ["TypeScript", "Next.js", "Games", "PWA"],
    featured: true,
    homepage: "https://unlockstyleescaperooms.vercel.app",
    hideGithub: true,
  },
  OnceItWorks: {
    title: "OnceItWorks",
    description:
      "Marketplace for software specs with a decision date. Browse, attach interest without a charge, then pay on the builder's checkout when you choose — the platform never holds money.",
    tags: ["TypeScript", "Next.js", "Marketplace"],
    featured: true,
    homepage: "https://once-it-works.vercel.app",
    hideGithub: true,
  },
  "Shadow-AI-Gateway": {
    title: "Shadow AI Gateway",
    description: "",
    tags: [],
    hide: true,
  },
  "Project-Omnis-AuraHUD.Life-Aura-AI-": {
    title: "AuraHUD / Project Omnis",
    description: "",
    tags: [],
    hide: true,
  },
  Schoolwork: {
    title: "Schoolwork",
    description:
      "Python coursework from Southern Utah University — the algorithms and assignments sitting under the rest of the stack.",
    tags: ["Python"],
  },
  Portfolio: {
    title: "Portfolio",
    description: "This site.",
    tags: [],
    hide: true,
  },
};

/** Always-available cards, including private apps the public GitHub API omits. */
const fallbackRepos: GithubRepo[] = [
  {
    name: "Budget-App",
    description: null,
    html_url: "https://github.com/Alteoziel/Budget-App",
    homepage: "https://budget-app-mauve-five.vercel.app",
    language: "TypeScript",
    fork: false,
    archived: false,
    pushed_at: "2026-08-21T15:28:23Z",
  },
  {
    name: "Kami-No-Ko",
    description: null,
    html_url: "https://github.com/Alteoziel/Kami-No-Ko",
    homepage: "https://kami-no-ko.vercel.app",
    language: "TypeScript",
    fork: false,
    archived: false,
    pushed_at: "2026-09-11T18:25:14Z",
  },
  {
    name: "UnlockStyleEscapeRooms",
    description: null,
    html_url: "https://github.com/Alteoziel/UnlockStyleEscapeRooms",
    homepage: "https://unlockstyleescaperooms.vercel.app",
    language: "TypeScript",
    fork: false,
    archived: false,
    pushed_at: "2026-10-21T22:36:09Z",
  },
  {
    name: "OnceItWorks",
    description: null,
    html_url: "https://github.com/Alteoziel/OnceItWorks",
    homepage: "https://once-it-works.vercel.app",
    language: "TypeScript",
    fork: false,
    archived: false,
    pushed_at: "2026-11-04T21:06:11Z",
  },
  {
    name: "Schoolwork",
    description: null,
    html_url: "https://github.com/Alteoziel/Schoolwork",
    homepage: null,
    language: "Python",
    fork: false,
    archived: false,
    pushed_at: "2026-03-16T14:16:19Z",
  },
];

function toProject(repo: GithubRepo): Project | null {
  const overlay = overlays[repo.name];
  if (overlay?.hide) return null;

  const title = overlay?.title ?? repo.name.replace(/-/g, " ");
  const description =
    overlay?.description ??
    repo.description ??
    "A project on GitHub.";
  const tags =
    overlay?.tags ??
    (repo.topics && repo.topics.length > 0
      ? repo.topics
      : repo.language
        ? [repo.language]
        : []);
  const homepage =
    overlay?.homepage ??
    (repo.homepage && repo.homepage.trim().length > 0
      ? repo.homepage
      : null);

  return {
    repo: repo.name,
    title,
    description,
    url: overlay?.hideGithub ? null : repo.html_url,
    homepage,
    language: repo.language,
    tags,
    featured: overlay?.featured ?? false,
    pushedAt: repo.pushed_at,
  };
}

async function fetchGithubRepos(): Promise<GithubRepo[] | null> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "User-Agent": "aedin-richardson-portfolio",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`,
      {
        headers,
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) return null;
    return (await response.json()) as GithubRepo[];
  } catch {
    return null;
  }
}

export async function getProjects(): Promise<Project[]> {
  const repos = (await fetchGithubRepos()) ?? fallbackRepos;

  const projects = repos
    .filter((repo) => !repo.fork && !repo.archived)
    .map(toProject)
    .filter((project): project is Project => project !== null);

  const seen = new Set(projects.map((project) => project.repo));
  for (const fallback of fallbackRepos) {
    if (seen.has(fallback.name)) continue;
    const extra = toProject(fallback);
    if (extra) projects.push(extra);
  }

  return projects.sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return Date.parse(b.pushedAt) - Date.parse(a.pushedAt);
  });
}
