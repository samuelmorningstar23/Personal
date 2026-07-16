# AI Mastery — The 4-Month Plan

**Mission:** go from intermediate Python/ML + undergrad math to elite AI engineer/researcher in 17 weeks.
**Dates:** Monday **July 20 → Sunday November 15, 2026** (16 curriculum weeks + 1 reserve week).
**The honest hour math (hard mode):** 7 days/week — Mon–Sat at 12 hrs, Sunday as a 9-hour deload/film day. ~81 scheduled hrs/week; budget **~75 real** after slippage and life-tax. That is **~1,250–1,300 real hours**, and every week below is scoped to that number.

This plan was built by drafting each month independently, then adversarially attacking the draft for gaps and unrealistic pacing, then rebuilding it with every fix applied. What survives is scoped to reality.

---

## The plan at a glance

| Weeks | Dates | Theme | Flagship artifact |
|---|---|---|---|
| 1–4 | Jul 20 – Aug 16 | **Foundations rebuilt properly** — math in anger, classical ML from scratch, autograd + backprop from scratch, PyTorch fluency | **`tinystack`** — your own ML stack in numpy + a professional PyTorch training harness |
| 5–8 | Aug 17 – Sep 13 | **Deep learning for real** — CNNs, sequence models, attention, GPT built from a blank file, training dynamics & experiment rigor | **`gpt-from-zero`** — a GPT where you wrote every line, with tokenizer, ablation suite, W&B rigor |
| 9–12 | Sep 14 – Oct 11 | **The modern LLM stack** — pretraining, SFT, LoRA/DPO, evals, RAG, agents, inference optimization | **`smolchat`** — a chat model you pretrained, aligned, evaluated, and served yourself |
| 13–16 | Oct 12 – Nov 8 | **Frontier + proof of skill** — RL from scratch + GRPO, GPU/systems, mechanistic interpretability, paper reproduction | **`grokking-repro`** — full reproduction of Nanda et al.'s grokking interpretability paper |
| 17 | Nov 9 – 15 | **Reserve week** — overflow, portfolio polish, applications, optional stretch modules | The arc blog post + a portfolio that survives hostile skimming |

Six public artifacts by November: `tinystack`, `gpt-from-zero`, `smolchat`, `rl-from-scratch`, `gpu-notes`, `grokking-repro` — plus 17 straight weekly blog posts and a one-page portfolio site.

## How to navigate this repo

| File | What it is |
|---|---|
| [`roadmap/00-operating-system.md`](roadmap/00-operating-system.md) | The study system (hard mode): 7-day daily template, retention machinery, readiness telemetry, publishing cadence. **Read first.** |
| [`roadmap/01-month-1-foundations.md`](roadmap/01-month-1-foundations.md) | Weeks 1–4, day-level detail |
| [`roadmap/02-month-2-deep-learning.md`](roadmap/02-month-2-deep-learning.md) | Weeks 5–8 |
| [`roadmap/03-month-3-llm-stack.md`](roadmap/03-month-3-llm-stack.md) | Weeks 9–12 |
| [`roadmap/04-month-4-frontier.md`](roadmap/04-month-4-frontier.md) | Weeks 13–17 |
| [`roadmap/05-resource-stack.md`](roadmap/05-resource-stack.md) | Every book/course/paper, tiered: scheduled vs. reference vs. post-program |
| [`PROGRESS.md`](PROGRESS.md) | The weekly tracker — check boxes, log hours, run the Sunday telemetry check |
| [`GLOSSARY.md`](GLOSSARY.md) | Every term and abbreviation in the plan, in plain language — consult whenever anything reads opaque |

## The ten hard rules

1. **7 hours sleep, 23:30–06:30, fixed window. 45 min training, 7 days/week.** Consistency is the non-negotiable; sleep *duration* answers to telemetry (retention %, block-start latency), not to doctrine — and not to bravado either.
2. **Hardest work first:** the 07:45–10:45 build block is sacred. Phone in another room. Every day.
3. **50% of hours go to building.** If weekly reading exceeds 35%, you are procrastinating with input.
4. **Every formula you read, you implement or derive by hand within 24 hours.**
5. **Overfit a single batch before every real training run.** If loss won't hit ~0 on 32 examples, your code is broken, not your hyperparameters.
6. **Everything gets an eval.** From Week 11 on, no artifact ships without a number attached — with a confidence interval.
7. **One resource per topic.** Hunting for alternatives is procrastination wearing a lab coat.
8. **Blog ships every Sunday for 17 straight Sundays.** On crunch weeks, a Feynman doc posted verbatim counts.
9. **Ship weeks (4, 8, 12, 16): nothing new after Thursday.** Friday–Sunday is shipping, closed-book self-exams, and absorbing overflow — this is where learning becomes permanent.
10. **Stuck 90 min → write it up. Stalled 5 days → run the abandon/descope checklist. Never 3 abandons in a row.**

## Budget

- **Compute + API: ~$300–400 total** (Month 2: ~$25–50; Month 3: ~$200 cap; Month 4: ~$50). Rules: size every run to a 12-hr Kaggle session with checkpoint/resume; **shut the rented box down before you debug**; first use of any new platform costs half a day — budget it.
- **Everything else is free:** the best AI curriculum in 2026 costs $0. Your Coursera Plus is nearly irrelevant (see the resource stack for the blunt breakdown).

## What "done" looks like on November 15

- You can write a GPT, a training loop, and PPO from a blank file, closed-book, in under 2 hours each — because you've done the timed reps.
- You have trained, aligned, evaluated, and served a language model end-to-end yourself, and can defend every number in its eval table.
- You have reproduced a real research paper and reverse-engineered a learned algorithm from a model's weights.
- A stranger can clone any of your six repos and reproduce your results with one command.
- Your portfolio fits in one line of a cold email and survives 10 minutes of hostile skimming by a research-lab hiring manager.
