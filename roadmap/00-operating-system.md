# The Operating System: How to Run 1,150 Hours in 17 Weeks

The content changes week to week; this system does not. Treat it like infrastructure — you don't renegotiate it daily, you just run it.

**Core design constraints:**

- 12 hours/day is only sustainable if ~4 of those hours are *low-cognitive-load* hours (review, reading, writing, admin). Nobody does 12 hours of deep work. People who claim to are counting badly.
- **The honest accounting:** the template below schedules ~78 hrs/week. Budget **72 real** — slippage, life admin (~5 hrs/week of errands and appointments exists whether you plan it or not), and debugging overruns are absorbed by buffers, not by sleep. Every month file in this repo is scoped to **~288 real hours**, and each week names its cut line so slippage degrades the plan instead of cascading.
- Building > reading. Program-wide split: **50% build, 25% read/watch, 15% review/retention, 10% write/publish.** The retention and publishing machinery (§3, §7) lives *inside* those percentages — Anki, lab notebook, Feynman docs, and the blog cost ~12 hrs/week and are already counted.
- One rest half-day per week is non-negotiable. 6.5 hard days beats 7 sloppy days every week of a 17-week run.

---

## 1. The Daily Template

Six days a week (Mon–Sat). Times are anchors — shift the whole grid to your chronotype, but keep the block structure and order.

| Time | Block | Hours | Mode |
|---|---|---|---|
| 07:00–07:45 | Wake, light, food, no screens | — | — |
| 07:45–08:15 | **Anki + yesterday's lab notebook re-read** | 0.5 | Review |
| 08:15–11:15 | **Deep Work 1: BUILD** (hardest coding/math of the day) | 3.0 | Build |
| 11:15–11:45 | Walk outside. No phone. | — | — |
| 11:45–13:15 | **Deep Work 2: BUILD continuation or problem sets** | 1.5 | Build |
| 13:15–14:15 | Lunch + full disconnect | — | — |
| 14:15–16:15 | **Deep Work 3: STUDY** (courses, textbooks, lectures — active, with notes) | 2.0 | Read |
| 16:15–17:15 | **Exercise** (lift or run, 45 min + shower) | — | — |
| 17:15–18:45 | **Paper block** (reading + paper notes; see §4) | 1.5 | Read |
| 18:45–19:30 | Dinner | — | — |
| 19:30–21:00 | **Second build block: light implementation, debugging, experiments you can babysit** | 1.5 | Build |
| 21:00–22:00 | **Closing hour: lab notebook entry, Feynman writing, Anki card creation, plan tomorrow** | 1.0 | Review/Write |
| 22:00–22:30 | Shutdown ritual, no screens after | — | — |
| 23:00–07:00 | **Sleep: 8 hours, fixed window** | — | — |

**Daily totals: 6.0 build / 3.5 read / 1.5 review-write / 1.0 closing = 12.0 hours.**

### Rules that make this survivable

- **The morning build block is sacred.** No email, no X, no "quick check" before 11:15. Your best 3 hours go to the hardest thing. Every day. This block alone is ~330 hours over the program — it's where you become good.
- **Never study new material after 21:00.** Evening cognition is for consolidation (writing, cards, planning), not acquisition. Violating this is the #1 way people silently burn out.
- **Sleep is a hard constraint, not a variable.** 8 hours, same window every night. The moment you trade sleep for study hours, your effective learning rate drops below what 10 well-slept hours would give you. No exception clause. Not even "the training run is almost done."
- **Exercise is inside the schedule, not after it.** 45 min, 6 days/week, at the 16:15 slot precisely because that's the circadian trough — you'd be useless at a desk then anyway.
- **Caffeine cutoff 14:00**, given the 23:00 sleep anchor.
- **Phone lives in another room during all deep-work blocks.** Use a site blocker scheduled automatically for 08:15–13:15.
- **Plan tomorrow tonight.** Last 10 minutes of the closing hour: write ONE build objective and ONE study objective for tomorrow. Never open the laptop at 08:15 wondering what to do.

### Long-running training jobs

Kick off training runs at the *end* of a block (11:15, 13:15, 18:45), never the start — babysitting a progress bar is not deep work. Check runs only at block boundaries. Use W&B alerts instead of watching dashboards. **Shut rented GPU boxes down before you sit down to debug** — idle A100s are how a $100 budget becomes $300.

---

## 2. Weekly Cadence

- **Mon–Fri:** the full 12-hour template. ~60 hours.
- **Saturday:** template, but the afternoon STUDY block becomes a **catch-up/buffer block** — finish the week's unfinished build work, clear the paper backlog, or (from Week 12) do interview prep. ~12 hours.
- **Sunday:** half day, ~6 hours, morning only. Weekly total: **~78 scheduled → budget 72 real.** The buffer absorbs slippage so it never cascades into next week.

### The Sunday protocol (6 hours, morning only)

| Time | Activity |
|---|---|
| 08:00–08:30 | Anki only (reviews never skip, even on rest days) |
| 08:30–10:00 | **Weekly review:** re-read all 6 lab-notebook entries. Write a half-page week summary: built, learned, confused-by, would-redo. |
| 10:00–11:30 | **Publish:** finish and ship the weekly blog post (§7). |
| 11:30–13:00 | **Plan next week:** the build milestone, the 3–5 papers, the course targets — written as concrete deliverables ("attention forward matches PyTorch to 1e-5", not "understand attention"). |
| 13:00–14:00 | **Metrics check:** hours by category, Anki retention, burnout checklist (§5), budget spent. |

**Sunday afternoon and evening: completely off.** Leave the house. See humans. This is the mechanism that makes Monday's deep-work block possible for 17 consecutive weeks.

### Ship weeks (4, 8, 12, 16)

The last week of each month is a **ship week**, and it resolves the classic conflict between "consolidation" and "crunch" by making shipping *be* the consolidation:

- **Mon–Thu:** the week's remaining new material, front-loaded.
- **Fri–Sun:** zero new material. Ship the flagship (README, tests, reproducibility), run the **closed-book self-exams** (the timed reps in each month's milestone gate — "GPT from a blank file in <2 hrs" only becomes true through scheduled repetitions, and this is where they live), rewrite your weakest Feynman docs, and absorb the month's overflow.
- A slipped week burns ship-week buffer, not next month's Week 1. **Week 17 is the program-level reserve** — it is real, planned slack, not a hidden extension.

---

## 3. Retention Machinery

Three interlocking systems. Each feeds the next.

### 3a. Anki policy (30 min/day, hard cap)

- **New cards: max 15/day.** More and reviews compound to 45+ min/day by week 6 and you'll rage-quit the deck. 15/day × ~100 study days ≈ 1,500 cards — plenty.
- **What earns a card:** definitions you'll reuse (KL divergence, LayerNorm formula), magic numbers (Adam defaults, Chinchilla ratio, attention FLOPs), "why" questions ("why scale by 1/√d_k?"), API gotchas that burned you twice, derivation *steps* (not whole derivations).
- **What never earns a card:** anything derivable in <30 seconds, paper trivia, code you can look up, anything not yet understood. Anki is for retention, not learning.
- **Cards are written only in the 21:00 closing hour** — from your notes, with a day-old brain. Cards written in the moment of learning are badly formed.
- **Prune ruthlessly:** any card failed 4+ times gets rewritten or deleted. It's a bad card, not a bad brain.

### 3b. Feynman writeups (3×/week, ~45 min each, inside the closing hour)

Any concept you'll build on for more than a week gets a one-page doc, plain language, **written closed-book**, explaining it to yourself-from-3-months-ago. Backprop, attention, KV cache, PPO — whatever the week's spine concept is.

Protocol: write closed-book → open the source → mark every gap in red → rewrite only the red parts. The red marks are your actual knowledge state. The best of these become blog posts with ~1 hour of polish — that pipeline is deliberate.

### 3c. Lab notebook (20 min/day, sacred)

One append-only file per week. Every day, in the closing hour:

1. **What I attempted** (the plan from last night)
2. **What actually happened** (exact error messages, loss curves, wrong turns)
3. **What I now believe and why** ("LR 3e-4 diverged at step 2k; 1e-4 stable; suspect warmup too short")
4. **Open questions** (these seed tomorrow's plan)
5. **Hours by category** (30 seconds; feeds the Sunday metrics check)

This is the single highest-leverage habit in the system. It converts flailing into experiments, makes debugging cumulative instead of amnesiac, and by Week 8 it's the raw material proving — to you, the internet, and hiring managers — that you did the work. A bad entry ("everything broke, details tomorrow") still counts; a missing entry does not.

---

## 4. Reading Papers Efficiently, by Stage

The 17:15–18:45 block daily. The failure mode at every stage is reading too many papers too shallowly. Volume targets are *ceilings*.

**Read Keshav's "How to Read a Paper" (2007, 10 pages) on Day 1 of Week 5, before the paper volume ramps.**

### Stage 1 (Weeks 1–4): architecture literacy — 2–3 papers/week, all classics

- **Pass 1 (15 min):** title, abstract, figures, conclusion → 3 sentences: what problem, what trick, what result.
- **Pass 2 (60–90 min):** full read, skip proofs, reproduce key equations by hand.
- **Pass 3 (only the week's spine paper):** implement the core idea. One paper implemented > five read.
- Do not read anything published in the last 12 months yet. You lack the filter.

### Stage 2 (Weeks 5–10): depth — 3–4 papers/week, one adversarially

- Pass 2 now includes: **write down the paper's weakness before reading its limitations section**, then compare.
- One paper/week gets the **adversarial treatment**: read abstract + method, stop, spend 20 minutes predicting the experiments and results, then check. This trains research taste faster than anything else.
- Read *for your project*: when a build hits a wall, the paper queue reorders around the wall. Need-driven reading has ~5× retention.
- Start the 10-min/day arXiv-abstract radar (alphaXiv / HF daily papers) — skimming, not reading.

### Stage 3 (Weeks 11–17): like a researcher — 5–8 papers/week, most in 15 minutes

- **Triage is the skill.** 15-minute pass on everything; ~1–2/week earn Pass 2; ~1 per two weeks earns implementation.
- Read in **lineages**, not singletons: RLHF → DPO → GRPO → current, 5–6 papers of one thread in one week. Lineage reading is where "understanding the field" comes from.
- For every deep read: *what would I do next if this were my project?* Then compare against the actual follow-up literature.
- "Papers I owe a real read" list capped at 10. Over 10, delete from the bottom.

**All stages:** every paper gets an entry in `papers.md` — 3 sentences minimum, even for skips. Zero-note reading is entertainment.

---

## 5. Burnout: Detection and Recovery

At 72 hrs/week, burnout is the default outcome unless actively managed, and you will not notice it from the inside — so detection is checklist-based, not vibes-based.

### The Sunday checklist (score each 0/1)

1. Sleep onset >30 min, or waking unrested before the alarm, 3+ nights
2. Morning build block took >20 min to actually start, 3+ days
3. Skipped exercise 3+ times
4. Anki skipped 2+ days
5. Lab-notebook entries getting hollow ("worked on stuff")
6. Irritability at trivial things that you noticed yourself
7. "I'm behind" thought daily despite meeting the plan
8. Dreading Monday specifically
9. Reading hours creeping above build hours (avoidance disguised as diligence)
10. Zero moments of genuine fun in the material all week

- **0–2: green.** Continue.
- **3–4: yellow.** Next week: cut to 10 hrs/day (drop the 19:30 block), one extra full rest evening, fix the flagged item. Do NOT cut exercise or sleep to "catch up" — those are the treatment.
- **5+: red.** Two full days off, immediately, mid-week if necessary. No study, no guilt. Restart at 8 hrs/day for one week before ramping. Two lost days now prevents three lost weeks later.

### Structural rules (always on)

- Sleep and exercise are load-bearing, never the flex variable.
- One activity per week that has nothing to do with AI and involves other humans.
- Finish the day's plan early → **stop early**. Banking rest compounds; banking extra hours doesn't.
- **Week 9–10 is statistically where motivation craters** in programs like this. Expect the trough, name it when it arrives, let the system carry you on discipline for 7–10 days. Pre-write a note to yourself in Week 2, to be opened in Week 10.

---

## 6. Stuck vs. Stalled

Being stuck is where learning happens; being *stalled* is where time dies.

- **Stuck (push through):** you can name the specific thing you don't understand, you have untried hypotheses, and each day's notebook entry shows a *different* failure than yesterday's.
- **Stalled (intervene):** same failure 3 days running, can't articulate the next attempt, or you're avoiding the project by "reading around it."

### The escalation ladder (in order, no skipping)

1. **90-minute rule:** stuck 90 min → write the problem as a question you'd post publicly. ~40% of the time this solves it.
2. **Overnight rule:** still stuck at day's end → write the state precisely, sleep, attack in tomorrow's morning block. Never grind past 21:00 on a stuck thing.
3. **Shrink rule (day 2):** build the smallest version that isolates the failure — tiny model, tiny data, single batch, CPU. If you can't make the problem small, *that* is the real gap.
4. **Ask rule (day 3):** post the well-formed question (EleutherAI / GPU MODE Discord, project servers). Ego is not part of this program. Elite engineers ask embarrassing questions fast.
5. **Decision point (day 5 of a stalled milestone):** the checklist below.

### The day-5 checklist

**Abandon/descope if 2+ are true:** the blocker is incidental to the learning goal (driver hell, broken dependency); success would prove something already demonstrated; a descoped version teaches 80% of the same thing; you're staying only for sunk cost ("knowing what I know now, would I start this today?").

**Push through if 2+ are true:** the blocker IS the learning objective (backprop won't converge because you don't fully get backprop — that's the curriculum, don't route around it); it's known-solvable with your resources and you're within a week of the milestone; the struggle is producing dense notebook entries.

**Abandoning is not deleting.** Write a one-page post-mortem, commit the code as-is with the post-mortem as README, publish it if honest (failure writeups outperform success writeups). Then descope to a smaller version of the *same* goal — never a shiny new direction. **Hard cap: never 2+ abandons in a row without a Sunday session fixing how you scope.**

---

## 7. Public Accountability: GitHub, Blog, X, Community

Publishing is inside the hours (~10%), because a public record is half the point: it forces real understanding, builds the network that produces opportunities, and *is* the portfolio.

### GitHub — daily

- **Push every working day.** "Commit-worthy by 21:00" forces daily concreteness. Ugly WIP commits are fine.
- One pinned repo per major project (6 by November). Each gets a real README: what it is, what it demonstrates, a result, what's next. Budget 2 hours on the README at project completion — the README is what humans read.
- **From Week 4: every repo carries the CI template** (GitHub Actions: pytest + ruff, pre-commit hooks). Four green-CI repos beat one.

### Blog — weekly

- **One post per Sunday, 17 straight Sundays, zero exceptions.** The streak is the mechanism. **Escape valve for crunch weeks (pre-authorized, not cheating): a Feynman doc posted verbatim is a legal entry.**
- 3 weeks out of 4, the post is a polished Feynman doc or project writeup (~1.5 hrs). Every 4th Sunday: monthly review with real numbers — hours, shipped, failed, next month.
- Platform: whatever is zero-friction (GitHub Pages/Quarto or Substack). Never spend more than one evening on blog infrastructure.
- **Week 1: announce the whole program publicly.** "~1,150 hours in 17 weeks, here's the plan, I'll report weekly." Public pre-commitment with a visible schedule is the strongest accountability device a solo learner has.

### X — daily exhaust

- One post per working day, ≤10 min, drawn from the lab notebook: today's bug, a loss curve, a one-tweet Feynman explanation. Exhaust from real work, never a separate product.
- Posting happens in the closing hour only; consumption capped at the 10-min arXiv-radar slot. Follow ~50 researchers whose work you're studying; reply substantively when you have something real. Done for 17 weeks, that is how a network forms.

### Community — active, not just lurking

- **Week 5:** join one live reading group (EleutherAI or a paper-club Discord) and attend weekly.
- **Week 8 onward:** one cold email or DM per week to an author whose work you reproduced — with your reproduction attached. This is how mentorship actually starts.
- Post your Week 8 / 12 / 16 flagship writeups into the relevant Discords for technical feedback, not just onto your blog.

---

## The One-Page Contract

Print, sign, put above the desk:

1. 8 hours sleep, fixed window. 45 min exercise, 6 days. Never traded for study hours.
2. Hardest work first: 08:15–11:15 build block, phone elsewhere, every day.
3. 50% of hours to building. Reading past 35% is procrastination.
4. Anki (≤15 new/day), lab notebook, tomorrow's plan — every closing hour.
5. Sunday afternoon off. Fully. Every week.
6. Stuck 90 min → write it up. Stalled 5 days → checklist. Never 3 abandons in a row.
7. Blog ships every Sunday for 17 Sundays. Feynman-doc-verbatim is legal on crunch weeks.
8. Burnout checklist every Sunday; yellow cuts hours immediately, red means 2 days off immediately.
9. Ship weeks: nothing new after Thursday. Reps, refactor, publish.
10. When the Week-10 trough hits: it's expected, it's temporary, the system carries you.

The person who runs this system at 85% for 17 weeks beats the person who runs a "perfect" 14-hour plan for 3 weeks and flames out. Sustainability is not the compromise — it's the strategy.
