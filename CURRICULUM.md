# Curriculum

Phases unlock in order. Exit criteria must be met before the next phase becomes ACTIVE.

Effort is measured in **sessions**, not calendar promises. At 3–5 hrs/week, expect one brief (or part of a brief) per week.

## Phase overview

| Phase | Status after wipe PR | You build | Exit criteria |
|---|---|---|---|
| **0 — Portfolio home** | **ACTIVE** | Next.js app in `portfolio/`; brand-first home; deploy once | Live URL + you can recreate home from a blank `page.tsx` without looking |
| **1 — Python foundations** | Locked | Complexity notes + arrays/search/sort labs + pytest | 8–10 problems solved and explained in your own words |
| **2 — 14 patterns (core)** | Locked | One LeetCode pattern folder at a time; 2–3 patterns deep before new languages | Per pattern: 3 problems + 5-line “when to use” note |
| **3 — Full-stack slice** | Locked | SQL + FastAPI CRUD + Dockerfile + one CI workflow; link from portfolio | Demo + tests + CI green + short writeup on portfolio |
| **4 — Second backend / TS depth** | Locked | Deeper TypeScript in portfolio; **one** of Django *or* Ruby+Rails | Second project linked; explain request → DB → response cold |
| **Later Atlas** | Locked | Everything else (see below) | Only after Phase 4; still one topic at a time |

## Active right now

→ [briefs/00-create-next-home.md](briefs/00-create-next-home.md)

## Phase details

### Phase 0 — Portfolio home

- App lives in **`portfolio/`** (keeps `labs/` and `projects/` as siblings).
- First viewport only: brand (hero-level), one headline, one short sentence, one CTA group, one dominant full-bleed visual.
- No project grids, stats, cards, or secondary marketing in the first viewport.
- See brief for commands and checkboxes.

### Phase 1 — Python foundations

- Brief: [briefs/01-python-complexity.md](briefs/01-python-complexity.md) (open only after Phase 0 exit).
- Folders: `labs/python/01-complexity/`, `labs/python/02-arrays/`.
- You write solutions and tests; no starter solution files.

### Phase 2 — 14 patterns

Source: [14 Patterns to Ace Any Coding Interview](https://leetcode.com/discuss/post/4039411/14-patterns-to-ace-any-coding-interview-87e6c/).

- Work under `labs/python/03-patterns/` — one pattern subdirectory when unlocked.
- Depth before breadth: finish 2–3 patterns thoroughly before touching a new language for DSA.

### Phase 3 — Full-stack slice

- Unlock `labs/sql/`, `projects/fastapi-lab/`, `infra/`.
- FastAPI first (same language as your DSA practice).
- One Dockerfile + one GitHub Actions workflow for that service.

### Phase 4 — Second backend / TS depth

- Strengthen TypeScript inside the existing portfolio (not a rewrite for its own sake).
- Choose **one**: Django **or** Ruby+Rails under `projects/`.
- Link it from the portfolio when ready (still not crowding the Phase 0 hero).

## Later Atlas (closed)

Looking / reading is fine. **Starting a project is not** until Phase 4 exit.

### Languages & tooling (parked)

- C, C++, C#
- Ruby (+ backend) if you picked Django in Phase 4 (or Django if you picked Ruby)
- Extra CI/CD experiments beyond the one workflow in Phase 3

### DSA / CS topics (parked)

- Matrix, hashing deep-dives, strings advanced
- Linked list / stack / queue / deque beyond pattern needs
- Tree, heap, graph depth
- Greedy, DP depth, Segment Tree, Disjoint Set
- Geometry, succinct data structures, dynamic graphs
- Time travel structures, dynamic optimality, memory hierarchy
- Integers / bitwise deep theory beyond pattern practice

### How to open an Atlas item later

1. Confirm Phase 4 exit criteria are done.
2. Add one line to `WEEKLY.md`: “Unlocking Atlas: \<topic\>”.
3. Ask the coach for a single session-sized brief.
4. One Atlas topic per stretch of sessions — no parallel Atlas projects.
