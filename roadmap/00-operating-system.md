# The Operating System — Hard Mode: ~1,300 Hours in 17 Weeks

Seven days a week. No off days. This is the athlete's version: every rule that existed for comfort is gone; every rule that remains is here because removing it measurably reduces output. Mamba mentality is not "grind blindly" — it's obsessive deliberate practice, studying the film, and treating your own performance as data. Elite training programs are periodized on purpose: intensity is the weapon, telemetry is the sight. You don't skip the measurement and call it toughness.

**Core design constraints:**

- **The accounting:** Mon–Sat run the full 12-hour template (72 hrs); Sunday is a 9-hour deload day (below). ~81 scheduled hrs/week → budget **~75 real** after slippage and life admin. Program total: **~1,250–1,300 real hours.** Month files are scoped to ~300 real hours each.
- Building > reading. Program-wide split: **50% build, 27% read/watch, 14% review/retention, 9% write/publish.** If your weekly log shows reading above 35%, you are procrastinating with input.
- 12 deep hours/day is only possible because ~4 of them are low-cognitive-load (review, papers, writing). Structure is what lets you sustain what others can't.

---

## 1. The Daily Template (Mon–Sat)

Times are anchors — shift the grid to your chronotype, keep the block structure and order.

| Time | Block | Hours | Mode |
|---|---|---|---|
| 06:30–07:15 | Wake, light, food, no screens | — | — |
| 07:15–07:45 | **Anki + yesterday's lab-notebook re-read** | 0.5 | Review |
| 07:45–10:45 | **Deep Work 1: BUILD** (hardest problem of the day) | 3.0 | Build |
| 10:45–11:15 | Walk outside. No phone. | — | — |
| 11:15–13:00 | **Deep Work 2: BUILD continuation / problem sets** | 1.75 | Build |
| 13:00–13:45 | Lunch, full disconnect | — | — |
| 13:45–16:00 | **Deep Work 3: STUDY** (courses, textbooks — active, with notes) | 2.25 | Read |
| 16:00–17:00 | **Training** (lift or run, 45 min + shower) | — | — |
| 17:00–18:45 | **Paper block** (reading + paper notes; §4) | 1.75 | Read |
| 18:45–19:30 | Dinner | — | — |
| 19:30–21:15 | **Build block 2: implementation, debugging, babysittable experiments** | 1.75 | Build |
| 21:15–22:15 | **Closing hour: lab notebook, Feynman writing, Anki cards, tomorrow's plan** | 1.0 | Review/Write |
| 22:15–23:00 | Shutdown ritual, no screens after | — | — |
| 23:30–06:30 | **Sleep: 7 hours, fixed window** | — | — |

**Daily totals: 6.5 build / 4.0 read / 1.5 review-write = 12.0 hours.**

### The rules that produce output

- **The morning build block is sacred.** Nothing touches 07:45–10:45. No email, no X, no "quick check." Your best three hours go to the hardest thing, every day — ~350 hours over the program. This block is where you become good.
- **Sleep: 7 hours, 23:30–06:30, fixed.** Here is the deal, stated once, as physics rather than parenting: memory consolidation — the process that converts today's 12 hours into permanent skill — happens *during sleep*. The fixed window is non-negotiable because *variable* sleep destroys consolidation even at the same average duration. The 7-vs-8 question we settle with data, not doctrine: if the telemetry (§5) shows Anki retention sliding below 85% or morning-block start latency climbing for two consecutive weeks, you run one week at 7.5–8 and compare throughput. If the numbers say 7 works for you, 7 stands. You are the experiment; instrument it.
- **Never acquire new material after the closing hour begins.** Late-evening cognition is for consolidation (writing, cards, planning). Violating this trades tomorrow's best hours for tonight's worst.
- **Training stays.** 45 min/day at the circadian trough — you'd be useless at a desk at 16:00 anyway, and the physical base is what carries a 7-day cognitive load. No athlete skips the weight room to watch more film.
- **Caffeine cutoff 14:00**, given the 23:30 anchor.
- **Phone in another room during every deep-work block.** Site blocker auto-scheduled 07:45–13:00.
- **Plan tomorrow tonight.** Last 10 minutes: ONE build objective, ONE study objective. Never open the laptop wondering what to do.

### Long-running training jobs

Kick off runs at block *ends* (10:45, 13:00, 18:45), never starts — babysitting a progress bar is not deep work. Check at block boundaries only; W&B alerts, not dashboards. **Shut rented GPU boxes down before you sit down to debug.**

---

## 2. Weekly Cadence — 7 Days, Periodized

- **Mon–Sat:** the full 12-hour template. 72 hours.
- **Sunday: the deload day, ~9 hours.** Not a day off — a different *kind* of day. Athletes don't skip Sunday; they train light and study film. Morning: the review/publish/plan protocol below (6 hrs). Afternoon: a 3-hour **light-intensity input block** — lecture backlog at 1.5×, paper triage, Anki debt, code cleanup, reading ahead. **No hard building on Sunday afternoon** — hard problems started at hour 78 of the week produce garbage code you'll rewrite Monday anyway; that's not softness, it's defect-rate management. **Hard stop at ~17:30.** The evening is the week's single deload window — the periodization that makes Monday's 07:45 block sharp for 17 consecutive weeks.

### The Sunday protocol (morning, 6 hrs)

| Time | Activity |
|---|---|
| 08:00–08:30 | Anki (reviews never skip) |
| 08:30–10:00 | **Weekly film session:** re-read all 7 lab-notebook entries. Half-page summary: built, learned, confused-by, would-redo. This is studying your own game tape. |
| 10:00–11:30 | **Publish:** ship the weekly blog post (§7). |
| 11:30–13:00 | **Plan next week:** build milestone, 3–5 papers, course targets — as concrete deliverables ("attention forward matches PyTorch to 1e-5"), never intentions ("understand attention"). |
| 13:00–14:00 | **Telemetry check (§5):** hours by category, Anki retention %, readiness checklist, budget spent. |

### Ship weeks (4, 8, 12, 16)

The last week of each month: **Mon–Thu** the remaining new material, front-loaded. **Fri–Sun** zero new material — ship the flagship (README, tests, reproducibility), run the **closed-book timed self-exams** (the milestone reps: "GPT from a blank file in <2 hrs" becomes true through scheduled repetitions, and this is where they live), rewrite the weakest Feynman docs, absorb the month's overflow. A slipped week burns ship-week buffer, not next month's Week 1. **Week 17 is the program-level reserve** — planned slack, not a hidden extension.

---

## 3. Retention Machinery

The 12 hours are the input. These three systems are what make them permanent. Skipping them to "save time" is spending 12 hours to keep 6.

### 3a. Anki (30 min/day, hard cap)

- **≤15 new cards/day.** More and reviews compound past 45 min/day by Week 6. 15/day × ~115 study days ≈ 1,700 cards.
- **Earns a card:** reusable definitions (KL divergence, LayerNorm), magic numbers (Adam defaults, Chinchilla ratio), "why" questions ("why 1/√d_k?"), API gotchas that burned you twice, derivation *steps*.
- **Never earns a card:** anything derivable in <30 s, paper trivia, code you can look up, anything not yet understood.
- Cards written **only in the closing hour**, from notes, with a day-old brain. Any card failed 4+ times gets rewritten or deleted — bad card, not bad brain.
- **Retention % is a primary telemetry input.** Below 85% for two weeks = the system is overdriven; see §5.

### 3b. Feynman writeups (3×/week, ~45 min, inside the closing hour)

Any concept you'll build on for more than a week gets one page, plain language, **closed-book**, explaining it to yourself-from-3-months-ago. Protocol: write closed-book → open the source → mark every gap in red → rewrite only the red. The red marks are your actual knowledge state. Best ones become blog posts with an hour of polish.

### 3c. Lab notebook (20 min/day, sacred)

Daily, in the closing hour: (1) what I attempted, (2) what actually happened — exact errors, loss curves, wrong turns, (3) what I now believe and why, (4) open questions, (5) hours by category. This is the film you study Sunday morning. It converts flailing into experiments and debugging from amnesiac to cumulative. A bad entry counts; a missing entry does not.

---

## 4. Reading Papers Efficiently, by Stage

The 17:00–18:45 block. The failure mode at every stage is too many papers, too shallow. Volume targets are ceilings.

**Read Keshav's "How to Read a Paper" (2007) on Day 1 of Week 5.**

### Stage 1 (Weeks 1–4): 2–3 classics/week
Pass 1 (15 min): abstract, figures, conclusion → 3 sentences. Pass 2 (60–90 min): full read, key equations reproduced by hand. Pass 3 (spine paper only): implement the core idea. Nothing from the last 12 months yet — you lack the filter.

### Stage 2 (Weeks 5–10): 3–4/week, one adversarially
Write the paper's weakness down *before* reading its limitations section, then compare. One paper/week: read abstract + method, stop, spend 20 minutes predicting the experiments, then check — this trains research taste faster than anything else. Read for your project: need-driven reading has ~5× retention. Start the 10-min/day arXiv-radar skim.

### Stage 3 (Weeks 11–17): 5–8/week, most in 15 minutes
Triage is the skill. ~1–2/week earn Pass 2; ~1 per two weeks earns implementation. Read in **lineages** (RLHF → DPO → GRPO → current), 5–6 of one thread in one week. For every deep read: *what would I do next if this were mine?* — then check the actual follow-up literature. Owe-a-real-read list capped at 10.

**All stages:** every paper gets 3+ sentences in `papers.md`, even skips. Zero-note reading is entertainment.

---

## 5. Readiness Telemetry

This is not a wellness section. It's the same instrumentation every elite program runs: you cannot feel cognitive decline from the inside — your judgment degrades *first*, which is exactly why the check is a checklist and not a feeling. An athlete who hides an injury from the trainer isn't tough; he's a liability to the mission. The mission here is 17 weeks of compounding output, and overreach without detection is how week 11 quietly produces less than week 3.

### The Sunday checklist (score 0/1 each)

1. Sleep onset >30 min, or waking unrested, 3+ nights this week
2. Morning build block took >20 min to actually start, 3+ days
3. Skipped training 3+ times
4. Anki skipped 2+ days, or retention <85%
5. Lab-notebook entries hollow ("worked on stuff")
6. Irritability at trivial things, self-noticed
7. "I'm behind" daily despite meeting the plan
8. Dreading the morning block specifically
9. Reading hours creeping above build hours (avoidance disguised as diligence)
10. Zero moments of genuine interest in the material all week

**0–2: green.** Full send.
**3–4: yellow — forced deload week:** drop the 19:30 block (10.5 hr days), fix the flagged item. Not negotiable, not a moral judgment: yellow means output-per-hour is already falling and the cheapest fix is one lighter week now.
**5+: red — 2 full days off immediately,** then one week at 8 hrs/day before ramping. Two days now versus three weeks later is not a close call. This is the same logic as pulling a player before the hamstring tears.

**Structural, always on:** if you finish the day's plan early, stop early — banked recovery compounds, banked extra hours don't. And know this in advance: **weeks 9–10 are the statistical trough** where motivation craters in every program of this shape. It's expected, it's temporary, the system carries you through on discipline. Pre-write the note to yourself in Week 2; open it in Week 10.

---

## 6. Stuck vs. Stalled

Stuck is where learning happens; stalled is where time dies.

- **Stuck (push through):** you can name the specific unknown, you have untried hypotheses, each day's notebook shows a *different* failure.
- **Stalled (intervene):** same failure 3 days running, no articulable next attempt, or "reading around" the project.

### Escalation ladder (in order, no skipping)

1. **90-minute rule:** write the problem as a question you'd post publicly. ~40% solve rate.
2. **Overnight rule:** write the exact state, sleep, attack in tomorrow's morning block. Never grind past the closing hour on a stuck thing — that's ego, and it costs tomorrow's best block.
3. **Shrink rule (day 2):** smallest version that isolates the failure — tiny model, single batch, CPU. Can't make it small = the real gap is understanding the system.
4. **Ask rule (day 3):** post the well-formed question (EleutherAI / GPU MODE Discord). Asking fast is what strong engineers do; the question is itself an artifact of understanding.
5. **Day-5 decision:** checklist below.

### Day-5 checklist

**Descope if 2+:** blocker is incidental to the learning goal (driver hell, broken dependency); success would only re-prove something already demonstrated; a smaller version teaches 80%; you're staying on sunk cost. **Push if 2+:** the blocker IS the objective (backprop won't converge because you don't fully get backprop — that's the curriculum); known-solvable with your resources and within a week; the struggle produces dense notebook entries.

**Descoping is not deleting:** one-page post-mortem, commit as-is with the post-mortem as README, publish it (failure writeups outperform success writeups), replace with a smaller version of the *same* goal. **Never 2+ abandons in a row without a Sunday session fixing how you scope.**

---

## 7. The Public Record: GitHub, Blog, X, Network

Publishing is inside the hours (~9%) because the public record is half the point: it forces real understanding, and it *is* the portfolio. This section is not social — every item here is instrumental.

### GitHub — daily
Push every working day; "commit-worthy by 21:15" forces daily concreteness. Six pinned repos by November, each with a real README (what it demonstrates, a result, what's next — 2 hrs at project completion). Every repo carries the Week-4 CI template.

### Blog — weekly
**One post per Sunday, 17 straight, zero exceptions.** The streak is the mechanism. Crunch-week escape valve (pre-authorized): a Feynman doc posted verbatim is a legal entry. Every 4th Sunday: the monthly review with real numbers. Platform: zero-friction (GitHub Pages or Substack); never more than one evening on blog infrastructure. **Week 1: announce the program publicly — "~1,300 hours in 17 weeks, here's the plan, I'll report weekly."** Public pre-commitment with a visible schedule is the strongest accountability device a solo operator has.

### X — daily exhaust
One post per working day, ≤10 min, from the lab notebook: today's bug, a loss curve, a one-tweet Feynman. Posting in the closing hour only; consumption capped at the 10-min arXiv radar. Follow ~50 researchers whose work you're studying; reply substantively when you have something real. Seventeen weeks of that is how a network forms.

### Network — deliberately instrumental
Week 5: one live reading group, attended weekly (a free seminar + unblocking channel). Week 8 onward: one cold email/week to an author whose work you reproduced, reproduction attached — this is how doors open. Post the Week 8/12/16 flagship writeups into the relevant Discords for technical feedback. Every contact here has a purpose: faster unblocking, sharper feedback, and the referral graph that turns a portfolio into interviews.

---

## The One-Page Contract — Hard Mode

Print, sign, above the desk:

1. 7 hours sleep, 23:30–06:30, **fixed**. Consistency is the non-negotiable; duration answers to telemetry.
2. 45 min training, 7 days. The body carries the brain.
3. Hardest work first: 07:45–10:45, phone elsewhere, every day including Sunday's film session.
4. 50% of hours to building. Reading past 35% is procrastination.
5. Anki ≤15 new/day, lab notebook, tomorrow's plan — every closing hour, no exceptions.
6. Sunday: film, publish, plan, light input. No hard building. Hard stop ~17:30.
7. Stuck 90 min → write it up. Stalled 5 days → checklist. Never 3 abandons in a row.
8. Blog ships every Sunday for 17 Sundays.
9. Telemetry every Sunday. Yellow = forced deload. Red = 2 days out. No hiding injuries from the trainer.
10. Ship weeks: nothing new after Thursday — reps, refactor, publish. Weeks 9–10 trough: expected, temporary, carried by the system.

Intensity wins the day. The system wins the seventeen weeks. You need both.
