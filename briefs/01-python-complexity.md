# Brief 01 — Python complexity + arrays (Phase 1)

**Status: LOCKED** until Phase 0 exit criteria are done.  
**Track:** Python labs only (pause portfolio feature work while this is active)  
**Budget:** several 3–5 hour sessions — do not rush all problems in one week

You write every solution and every test. No starter solution files on purpose.

## Unlock gate

Only start when Phase 0 checkboxes in [briefs/00-create-next-home.md](00-create-next-home.md) are done.

## Goal

Build recall of **time/space complexity** and **array / search / sort basics**, with pytest as your safety net.

## Setup (once)

From repo root (or inside the lab folders):

1. Create a virtualenv however you like (example):

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install pytest
```

2. You may add a tiny `labs/python/requirements.txt` with `pytest` when you want — you create it.
3. Work in:
   - [labs/python/01-complexity/](../labs/python/01-complexity/)
   - [labs/python/02-arrays/](../labs/python/02-arrays/)

## Part A — Complexity (folder `01-complexity`)

Create `notes.md` yourself. In your own words, define and give one example each:

- Big-O (worst case intuition)
- Time vs space
- O(1), O(log n), O(n), O(n log n), O(n²) — when you’ve seen each

Then implement **at least 4** tiny experiments (scripts or functions + tests), for example:

1. Count operations in a single loop vs nested loops on the same `n`
2. Append to a list in a loop vs building a string with `+=` in a loop (observe growth; discuss space/time)
3. Binary search vs linear search on a sorted list (you implement both)
4. What happens to time when input size doubles for your O(n) and O(n²) snippets

Mark Big-O on each function in a one-line comment *after* you understand it — not before.

## Part B — Arrays, searching, sorting intro (`02-arrays`)

Implement **at least 6** problems yourself (names are prompts; look up the classic statement if needed, then close the tab and code):

1. Find max / min in a list
2. Reverse a list in place
3. Remove duplicates from a sorted list (or return unique count)
4. Two-sum style: given array + target, return two indices (hash map or brute force first — note the complexity difference)
5. Binary search on a sorted array
6. Implement insertion sort *or* merge sort (pick one; understand it cold)

For each problem create:

- `something.py` with your solution
- `test_something.py` with pytest cases (empty, one element, typical, edge)

Optional stretch (still Phase 1, only if energy remains): matrix cell sum, or a simple string frequency count — still explained in notes.

## Part C — Explain in your own words

In `labs/python/01-complexity/notes.md` and/or `labs/python/02-arrays/notes.md`:

- For each solved problem: 3–5 sentences — approach, complexity, one mistake you made

## Definition of done (Phase 1 exit)

- [ ] `notes.md` covers Big-O basics in your words
- [ ] ≥4 complexity experiments with tests or clear runnable scripts
- [ ] ≥6 array/search/sort problems with pytest
- [ ] **8–10 problems total** each explained in your own words
- [ ] You can rewrite binary search from memory in one sitting

When done, update [WEEKLY.md](../WEEKLY.md) and ask the coach to unlock Phase 2 (patterns).

## Out of scope

- The 14 patterns folder (`03-patterns`) — Phase 2
- FastAPI, Docker, SQL, C++, Ruby
- Copying full solutions from LeetCode discuss into the repo

## When stuck

Attempt 20–30 minutes → write the failing idea in `WEEKLY.md` → ask the coach for a hint (not a full paste) unless you explicitly request a worked example after trying.
