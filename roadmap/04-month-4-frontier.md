# Month 4 — Frontier + Proof of Skill (Weeks 13–17 · Oct 12 – Nov 15)

**Premise:** you can already build and train a GPT, run finetuning/DPO, and ship eval'd LLM systems. This month converts competence into *evidence*. Every week produces a public artifact.
**Budget:** ~300 real hours across Weeks 13–16, plus **Week 17 — the program's explicit reserve** (overflow, applications, optional stretch). Weekly split: ~40 build / ~21 read / ~14 write+publish+interview-prep.
**Job-market motion (already running):** 2 hrs/week interview prep since Week 12; **applications start Week 14** — pipelines take 3–6 weeks and Week 17 is interview week.

**Flagship (announced now, executed Weeks 15–16):** full reproduction of **"Progress Measures for Grokking via Mechanistic Interpretability" (Nanda et al., ICLR 2023)** — train a transformer on modular addition until it groks, then reverse-engineer the Fourier-based algorithm it learned and reproduce the paper's progress measures. The ideal capstone: a real paper reproduction, real interpretability rigor, runs on a single GPU in hours, and almost nobody on the market has done it end-to-end.

---

## Week 13 (Oct 12–18): RL From Scratch → the Reasoning Era

The draft plan's most predictable stall was "REINFORCE + DQN + PPO + Atari in one week" — from-scratch PPO is the canonical debugging sinkhole (silent failures, discovered after multi-hour runs). The scope below is the honest version, and it funds the topic the old plan missed entirely: **GRPO/RLVR, the defining post-training technique of the current era.**

**Objectives:** MDPs, value functions, policy-gradient theorem well enough to derive REINFORCE on paper; why vanilla PG is high-variance and how GAE + PPO's clipped objective fix it; the gap between paper pseudocode and the 37 tricks that make it work; **PPO→RLHF→GRPO as one continuous story.**

**Resources (core):**
- **Spinning Up in Deep RL:** Parts 1–3 on Day 1 (Part 3 is a re-read from Week 10 — it'll land differently now); then the VPG/PPO algorithm docs as specs while you implement. Don't copy their code.
- **Sutton & Barto** Ch. 3, 4, 6, 13 only. It's a career, not a week.
- **CleanRL** — reference *after* your version works or you're stuck >2 hrs.
- **Papers:** PPO (Schulman 2017), GAE (Schulman 2015), DQN (Mnih 2015 — read only, see below). Then: **Let's Verify Step by Step** (2023), **DeepSeek-R1** (2025) — read R1 *after* your GRPO run so the method section reads as documentation.
- **Huang et al., *The 37 Implementation Details of PPO*** — read *after* your PPO trains poorly, not before. The struggle is the lesson.
- *Setup tax (budgeted): Gymnasium Box2D needs swig; do the install dance Monday evening, not mid-flow.*

**Build — `rl-from-scratch` (Mon–Fri):**
1. **REINFORCE from scratch → CartPole-v1.**
2. **PPO from scratch** — GAE, vectorized envs, clipping, advantage normalization → CartPole, then **LunarLander-v3**. This is the week's spine; when it trains poorly (it will), that's when the 37-details post gets read.
3. **DQN: read and run CleanRL's `dqn.py`, annotate every line.** The concepts (replay, target networks) transfer; the replay-buffer debugging hours don't justify from-scratch on this timeline. *Atari-Pong-from-pixels: stretch only, CleanRL open as reference — free-tier Colab won't hold overnight runs anyway.*

**Build — GRPO/RLVR (Sat–Sun, ~2 days):**
4. **Derive GRPO as a simplification of PPO** (drop the value network, group-relative advantages) — one page, from the PPO objective you now own.
5. **Run RLVR on a verifiable task:** TRL's `GRPOTrainer` on GSM8K-subset/arithmetic with your SmolChat-SFT (or Qwen2.5-0.5B), reward = answer-checker. Small, but you'll have *run* the R1-era training loop, not just read about it.
6. **Closed-book DPO derivation** — the Week 10 exit check comes due: derive DPO from the KL-constrained objective, no book. It means something now.

**Cut line:** cut Atari and shrink GRPO to the derivation + a smoke-test run. Never cut from-scratch PPO or the GRPO derivation.

> **Milestone (end of Week 13):** you can explain (a) why the clipped surrogate exists, (b) what GAE's λ trades off, (c) exactly how PPO-for-Atari differs from PPO-in-RLHF, and (d) what GRPO removes from PPO and why that's affordable when rewards are verifiable. The blank-file PPO rep is scheduled for Week 16's ship days.

---

## Week 14 (Oct 19–25): GPU & Systems Literacy

**Objectives:** a real mental model of the GPU (SMs, warps, HBM vs SRAM, memory- vs compute-bound, arithmetic intensity); FlashAttention's tiling + online softmax at a whiteboard — why it's exact and why the win is IO, not FLOPs; working Triton kernels; DDP/ZeRO/FSDP understood and *run*.

**Resources (core):**
- **Horace He, *Making Deep Learning Go Brrrr From First Principles*** — first, twice. The best systems mental model in existence.
- **GPU MODE lectures 1–3 + 14** (profiling; PMPP ch. 1–5; Triton), with PMPP ch. 1–6 skimmed as support, not ground.
- **OpenAI Triton tutorials** (vector add, fused softmax, matmul) — type them out.
- **FlashAttention** (Dao 2022) §1–3, until you can re-derive the online-softmax rescaling on paper.
- **HF Ultra-Scale Playbook** — DP/ZeRO/FSDP/TP sections only. ZeRO paper skim for the memory math.

**Build:**
1. **Mon–Tue:** profile `gpt-from-zero` with `torch.profiler` + memory snapshots → annotated trace: where does time actually go? Triton: vector-add → fused softmax, benchmarked properly (warmup, CUDA events) vs eager and `torch.compile`.
2. **Wed:** Triton matmul with tiling; **attention three ways** — naive PyTorch, your own tiled Triton attention (educational — it doesn't need to win), `F.scaled_dot_product_attention` — memory + speed across sequence lengths.
3. **Thu–Fri:** **"Make my GPT go brrr" speedrun:** AMP → `torch.compile` → flash attention → fused optimizer → tuned grad accumulation; measure tokens/sec after each rung; publish the ladder table.
4. **Fri–Sat:** **real DDP then FSDP on Kaggle's free 2× T4** (`torchrun`) — verify sharding with memory stats. *Budget a half-day of NCCL/torchrun yak-shaving; it's part of the education.* **Docker (2 hrs):** containerize the Week 12 vLLM endpoint — minimum viable Docker literacy, scheduled.
5. **Sun:** blog post: *"Making My GPT 3× Faster: a profiling story"* — with the ladder table. **Portfolio-site skeleton (2 hrs):** one page, GitHub Pages, no framework — built now so Week 16 fills it instead of building it. **First job applications go out.**

**Cut line:** cut the Triton matmul (keep vector-add + softmax) and Docker; never cut the profiling trace or the speedrun ladder.

> **Milestone (end of Week 14):** fused-softmax kernel within ~20% of PyTorch's; FlashAttention explained without notes, including why attention is memory-bound; ZeRO stages 1/2/3 — what each shards, when FSDP beats DDP — and you've *run* both.

---

## Week 15 (Oct 26 – Nov 1): Mechanistic Interpretability + Safety Literacy

**Objectives:** the circuits-era vocabulary (residual stream as the central object, QK/OV circuits, heads as additive components, superposition, features vs neurons); TransformerLens fluency (patching, hooks, logit attribution, ablations); a known result reproduced before hunting your own; genuine safety literacy — enough to hold a serious opinion.

**Resources (core, honestly scoped — the draft's "ARENA 1.1–1.3 in four days" was two weeks of material):**
- **ARENA Chapter 1:** **[1.1] Transformer-from-scratch as onboarding only — hard timebox: half a day** (you've built GPT three times; this is TransformerLens orientation, not learning). **[1.2] Intro to Mech Interp (induction heads) — in full; this is the week's spine.** **[1.3] Superposition: the toy-model exercises only** — full SAE training is stretch, not core.
- **Papers, in order:** *A Mathematical Framework for Transformer Circuits* (Elhage 2021); *In-context Learning and Induction Heads* (Olsson 2022, §1–3); *Toy Models of Superposition* (Elhage 2022, §1–3 + the interactive figures); *Towards Monosemanticity* (Bricken 2023, skim — you need the SAE concept, not every dashboard).
- **Flagship deep-read (Day 5):** Nanda et al. 2023 + Power et al. 2022 (*Grokking*, skim).
- **Safety literacy (~8 hrs, evening paper blocks):** Ngo, Chan & Mindermann *The Alignment Problem from a DL Perspective*; Anthropic's *Core Views on AI Safety*; *Sleeper Agents* (Hubinger 2024); *Alignment Faking* (Greenblatt 2024). Four items, no more. Write the 1,500-word synthesis *this week* while it's fresh — it becomes a section of the Week 17 arc post.

**Build:**
1. **Mon–Thu:** ARENA 1.2 exercises, all code typed into your own repo; finish with a from-scratch **replication of the induction-head phase change on a 2-layer attention-only model you train yourself.**
2. **Fri–Sun — flagship phase 1:** train the grokking transformer (1-layer, modular addition mod 113, full-batch AdamW, high weight decay — spec in the paper's appendix). Reproduce the headline curve: train accuracy hits 100% early; test accuracy snaps up thousands of epochs later. Iterate until the phase transition is clean. (Genuinely cheap compute — protect this, it gates Week 16.)

**Cut line:** cut 1.3 entirely and the SAE stretch. Never cut the induction-head replication or the grokking run.
**Stretch:** train a small SAE on your GPT's MLP activations; document 5 interpretable features.

---

## Week 16 (Nov 2–8): Flagship Reproduction + Portfolio — SHIP WEEK

**Objectives:** execute a full mechanistic analysis independently — from "the model groks" to "here is the exact algorithm in the weights, with evidence"; learn what reproduction rigor means (seeds, configs, one-command repro, honest deviations); package four months into a 10-minute-evaluable portfolio.

**Resources:** the Nanda et al. official repo — consulted *only* when stuck >3 hrs on one analysis, every consultation logged in the README ("what I couldn't get without the reference"). Neel Nanda's grokking blog post for the Fourier intuition; his research-writeup post as the writeup template.

**Build (Mon–Thu):**
1. **Reverse-engineer the circuit:** Fourier analysis of the embedding matrix (concentration on ~5 key frequencies); verify heads/MLP compute the trig identity (product-to-sum); ablate non-key frequencies, show accuracy survives.
2. **Reproduce the progress measures:** restricted loss and excluded loss; recreate the central figure showing memorization → circuit formation → cleanup — the "sudden" grok is continuous underneath.
3. **One honest extension** (pick one, small): different modulus, seed-stability, or weight-decay ablation. Report the result even if boring — this section is what separates you from tutorial-followers.

**Ship days (Fri–Sun):**
- Flagship repo polished: `python train.py && python analyze.py` reproduces every figure; configs, seeds, CI smoke test, MIT license, "deviations from the paper" section.
- **Blog post: "I Reproduced Grokking and Reverse-Engineered the Circuit"** — figures, failures, the extension.
- **Portfolio site filled** (skeleton from Week 14): six pinned repos, three best posts, W&B reports, 3-sentence bio.
- **Timed reps, final round:** PPO from blank file <2 hrs; training-loop and GPT reps spot-checked.
- 10-minute video walkthrough of the flagship (unlisted YouTube, linked from the repo) — hiring managers watch these.

**Cut order if the week compresses:** extension → video → (arc post is already Week 17's). **Never cut reproducibility or the honest-deviations section.** A smaller claim fully verified beats a bigger claim half-shown — that is the researcher's signal you're sending.

> **Milestone (end of Week 16):** a stranger clones the flagship and reproduces the grokking curve + key-frequency figure with one command; you can give a 10-minute whiteboard talk on the learned algorithm and the three phases; your portfolio URL fits in one line of a cold email and survives 10 minutes of hostile skimming.

---

## Week 17 (Nov 9–15): The Reserve Week

This week is **planned slack, declared up front** — the single largest realism reserve in the program. It is not a hidden extension for new curriculum. Priority order:

1. **Finish anything that slipped.** Every month's cut line dumped its overflow here. Clear it.
2. **The arc post:** *"What ~1,300 Hours in 17 Weeks Taught Me About How LLMs Actually Work"* — folding in the Week 15 safety synthesis. This is the post that travels.
3. **Applications + interviews at full volume** (pipelines opened Week 14 start converting around now). ML system design reps, behavioral stories from the lab notebook — you have 17 weeks of receipts.
4. **Only if genuinely clear — the stretch modules, in value order:**
   - **Diffusion sprint (2 days):** UDL Ch. 17–18 + DDPM paper + train DDPM on MNIST (~200 lines). Also your only exposure to variational inference/ELBO — a real math gap worth closing.
   - **Mini-CLIP (2–3 days):** contrastive vision+text encoders on Flickr8k; zero-shot classification working; then read LLaVA — the projection layer will feel obvious. (Moved here from Week 12, where it had one impossible Saturday.)
   - **One evening:** run Whisper end to end — speech is otherwise an explicit, acknowledged cut.

---

## Flagship: Definition of Done

**Minimum viable DoD:** grokking reproduced from your own training code (curves + seeds + configs committed); Fourier circuit analysis with ablation evidence; restricted/excluded-loss progress measures recreating the paper's phase decomposition; one-command repro + honest-deviations README.

**Full DoD adds:** the extension with an honest result; CI smoke test; published blog post + portfolio link + video walkthrough.

## Explicit, written-down cuts (so they're decisions, not accidents)

- **Speech/audio:** cut, except the optional Whisper evening. **Full CUDA C++:** cut — Triton is the 80/20. **Kubeflow/Spark-class MLOps:** cut — wrong four months. **GANs/flows:** museum exhibits. **Raschka's *Build a Reasoning Model*, UDL ch. 13+, fast.ai Part 2:** post-program reading list (see resource stack) — Week 13's GRPO days cover the reasoning era's core hands-on.
