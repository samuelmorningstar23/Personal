# Progress Tracker

Update every Sunday during the metrics check. A bad entry counts; a missing entry does not.

## Week-by-week

| Wk | Dates | Theme | Blog shipped | Hours (B/R/Rv/P) | Telemetry score | Notes |
|----|-------|-------|:---:|---|:---:|---|
| 1 | Jul 20–26 | Math in anger | ☐ | | | |
| 2 | Jul 27–Aug 2 | Classical ML from scratch | ☐ | | | |
| 3 | Aug 3–9 | Autograd + backprop | ☐ | | | |
| 4 | Aug 10–16 | PyTorch + harness · **SHIP tinystack** | ☐ | | | |
| 5 | Aug 17–23 | CNNs | ☐ | | | |
| 6 | Aug 24–30 | Sequences → attention | ☐ | | | |
| 7 | Aug 31–Sep 6 | **GPT from scratch** | ☐ | | | |
| 8 | Sep 7–13 | Training dynamics · **SHIP gpt-from-zero** | ☐ | | | |
| 9 | Sep 14–20 | Pretraining + data | ☐ | | | |
| 10 | Sep 21–27 | SFT / LoRA / DPO | ☐ | | | |
| 11 | Sep 28–Oct 4 | Evals + RAG | ☐ | | | |
| 12 | Oct 5–11 | Agents + inference · **SHIP smolchat** | ☐ | | | |
| 13 | Oct 12–18 | RL → GRPO | ☐ | | | |
| 14 | Oct 19–25 | GPU & systems | ☐ | | | |
| 15 | Oct 26–Nov 1 | Mech interp + safety | ☐ | | | |
| 16 | Nov 2–8 | **SHIP grokking-repro** + portfolio | ☐ | | | |
| 17 | Nov 9–15 | Reserve · arc post · interviews | ☐ | | | |

Hours legend: B = build, R = read/watch, Rv = review/retention, P = publish. Weekly target ≈ 38/20/10/7 of ~75 real.

## Milestone gates (closed-book, timed where stated)

- ☐ **Wk 1:** SVD image compression from scratch <1 hr; softmax+CE gradient cold on a whiteboard
- ☐ **Wk 2:** GBM within 2% of sklearn; boosting-vs-bagging explained precisely; bootstrap test run on own results
- ☐ **Wk 3:** autograd matches PyTorch (float64, <1e-6, 20+ ops); MNIST ≥97.5% on own stack
- ☐ **Wk 4 GATE + rep:** PyTorch training loop from blank file <30 min (×2) — *Month 2 blocked until passed*
- ☐ **Wk 5:** conv backward derived + passing checks; handwritten ResNet-18 ≥92% CIFAR-10
- ☐ **Wk 7:** GPT from blank file <2 hrs (rep 1)
- ☐ **Wk 8 GATE:** broken-run diagnosis from curves alone; unseen paper (RoPE) → summary + implementation <150 lines; GPT rep 2
- ☐ **Wk 10:** any base model → chat-tuned DPO'd variant on one GPU; DPO derivation (book open)
- ☐ **Wk 11:** retrieval provably beats naive baseline; 3 LLM-judge failure modes + mitigations; every number has a CI
- ☐ **Wk 12 GATE:** inference arithmetic for own model; KV-cache speedup shown; agent ≥7/10 + injection-resistant; GPT rep 3
- ☐ **Wk 13:** PPO clipping / GAE λ / PPO-vs-RLHF-vs-GRPO explained; DPO derivation closed-book
- ☐ **Wk 14:** fused softmax within ~20% of PyTorch; FlashAttention at whiteboard; DDP + FSDP run for real
- ☐ **Wk 16 GATE:** stranger reproduces grokking figures in one command; 10-min whiteboard talk on the circuit; PPO from blank file <2 hrs

## Flagships

| Artifact | MVD | Full DoD | Public URL |
|---|:---:|:---:|---|
| `tinystack` | ☐ | ☐ | |
| `gpt-from-zero` | ☐ | ☐ | |
| `smolchat` | ☐ | ☐ | |
| `rl-from-scratch` | ☐ | ☐ | |
| `gpu-notes` | ☐ | ☐ | |
| `grokking-repro` | ☐ | ☐ | |
| Portfolio site | ☐ | ☐ | |

## Budget (cap ≈ $400 total)

| Month | Cap | Spent | Notes |
|---|---|---|---|
| 2 | $50 | | Wk 8 ablations |
| 3 | $200 | | A100 pretraining, QLoRA, API for data gen + judge |
| 4 | $50–100 | | GRPO runs, misc |

## Standing habits checklist (spot-check monthly)

- ☐ Anki daily, ≤15 new/day · ☐ Lab notebook every working day · ☐ 3 Feynman docs/week
- ☐ Push to GitHub every working day · ☐ X post daily from the notebook · ☐ Reading group weekly (from Wk 5)
- ☐ Cold email weekly (from Wk 8) · ☐ Interview prep 2 hrs/wk (from Wk 12) · ☐ Applications out (from Wk 14)
