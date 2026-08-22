export type Project = {
  repo: string;
  title: string;
  description: string;
  url: string;
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
  "Shadow-AI-Gateway": {
    title: "Shadow AI Gateway",
    description:
      "Pre-flight security proxy for LLM traffic. Intercepts prompts before they leave the network so PII and secrets never reach public AI APIs. FastAPI gateway with OpenAI and Anthropic adapters, rate limiting, and PR governance.",
    tags: ["Python", "FastAPI", "Security", "Docker"],
    featured: true,
    homepage: "https://shadow-ai-gateway.vercel.app",
  },
  "Project-Omnis-AuraHUD.Life-Aura-AI-": {
    title: "AuraHUD / Project Omnis",
    description:
      "Voice-first everyday life OS: one HUD, one shared database, AI as an invisible router instead of a chatbox over fifteen mini-apps. Architecture, security model, and quality gates for Life Aura.",
    tags: ["Python", "TypeScript", "AI", "Architecture"],
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
    name: "Shadow-AI-Gateway",
    description: null,
    html_url: "https://github.com/Alteoziel/Shadow-AI-Gateway",
    homepage: "https://shadow-ai-gateway.vercel.app",
    language: "Python",
    fork: false,
    archived: false,
    pushed_at: "2026-08-20T00:38:48Z",
  },
  {
    name: "Project-Omnis-AuraHUD.Life-Aura-AI-",
    description: null,
    html_url:
      "https://github.com/Alteoziel/Project-Omnis-AuraHUD.Life-Aura-AI-",
    homepage: null,
    language: "Python",
    fork: false,
    archived: false,
    pushed_at: "2026-08-22T00:45:50Z",
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
    url: repo.html_url,
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
