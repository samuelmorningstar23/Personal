# Month 2 — Deep Learning for Real (Weeks 5–8 · Aug 17 – Sep 13)

**Theme:** stop consuming, start engineering. By the end of Week 8 you will have written every line of a working GPT, trained it on real data, and be able to diagnose a sick run from its loss curve.
**Budget:** ~300 real hours (~75/week): ~38 build / ~19 lectures+reading / ~10 papers / ~8 review+publish. The operating-system machinery (Anki, notebook, blog) lives inside those numbers.
**Compute:** budget **$25–50 of rented GPU this month** for the Week 8 ablation suite — free tiers alone won't cover it (math below). Size *every* run to fit a 12-hour Kaggle session with checkpoint/resume; free Colab does not survive overnight.
**Paper protocol:** Keshav's *How to Read a Paper* on Day 1 of Week 5, then the Stage-2 protocol (operating system §4). Every paper: half-page note — contribution, key figure redrawn, "what would I ablate?", one thing you don't believe.
**Community:** join one live reading group this week (EleutherAI Discord or a paper club) and attend weekly from now on.

---

## Flagship: `gpt-from-zero` — a decoder-only GPT where you wrote every line

Built across Weeks 7–8, one public repo.

**Minimum viable DoD:**
1. Every module handwritten: attention, multi-head wiring, MLP block, LayerNorm, embeddings, init, sampling (temperature + top-k). Only torch primitives allowed — zero `nn.MultiheadAttention` / `nn.Transformer` / HuggingFace.
2. Your own **byte-level BPE tokenizer** (minbpe-class), vocab 4k–8k, passing round-trip property tests. (*Byte-level* — `decode(encode(s)) == s` over random unicode fails by construction on char-level BPE and will burn a day of confused debugging.)
3. A ~15–25M-param model trained on TinyStories with val loss **within 10% of a reference nanoGPT run at the identical (reduced) config/data/token budget** — run the reference yourself; that comparison is the honesty check.
4. Samples that are coherent multi-sentence stories, judged against a written 5-point checklist, not vibes.
5. One-command reproducibility + the Month-1 CI template + a W&B project with every run tracked (config, commit, seed).

**Full DoD adds:** the 6-ablation table with written predictions vs. outcomes (one ablation at 3 seeds), the sabotage post-mortem, and a ~1,500-word README writeup ("five things that broke and how I found them").

---

## Week 5 (Aug 17–23): CNNs and Vision Fundamentals

**Objectives:** conv + pooling forward/backward from scratch with passing gradient checks; BatchNorm internals (train vs. eval, running stats); the architecture lineage cold (AlexNet → VGG → ResNet, and *why* each step); one competitive classifier trained with real discipline.

**Resources (core):**
- **CS231n notes** (the conv-networks module + anything from Neural Nets 1–3 you haven't finished — Month 1 covered backprop/optimization; don't re-read those) + **2017 lectures 5, 9 only** (CNNs; architectures).
- **CS231n Assignment 2 — conv and BatchNorm numpy sections only.** Skip A2's PyTorch section (your Week 4 harness already covers it). Honest cost of the full assignment is 30–40 hrs; the two numpy sections are the 15-hr core that matters.
- **Papers:** ① AlexNet (Krizhevsky 2012), ② ResNet (He 2015), ③ BatchNorm (Ioffe & Szegedy 2015).

**Build:**
- A2 conv + BatchNorm sections, all gradient checks passing (`rel_error < 1e-6` in float64).
- **Hand-write ResNet-18 in PyTorch** (no `torchvision.models`) → CIFAR-10 to **≥92%** (93%+ is stretch, not the bar — the last point costs 5–15 full training runs of tuning). Getting 88→92 teaches augmentation, weight decay, cosine schedules better than any lecture. **W&B on every run from this week — no more spreadsheets.**
- **SQL (evenings, ~3 hrs):** SQLBolt end to end. It's a hiring screen; nobody schedules it, so we do.

**Cut line:** cut lecture 9 and the 93% chase. Never cut the conv backward pass or ResNet-18.
**Stretch:** fine-tune your ResNet on Imagenette; or a half-day `timm` ViT fine-tune for breadth.

> **Milestone (end of Week 5):** conv backward derived on a whiteboard and passing checks in numpy; handwritten ResNet-18 ≥92% on CIFAR-10; a two-minute no-notes explanation of why residual connections let you train 100+ layers.

---

## Week 6 (Aug 24–30): Sequence Models → Attention

**Objectives:** RNN/LSTM cells by hand; where vanishing/exploding gradients come from *in the math*; encoder-decoder and its bottleneck; Bahdanau attention as differentiable content-based lookup — the single idea the rest of your career sits on.

**Resources (core):**
- **Day 1 blog pair:** Karpathy *The Unreasonable Effectiveness of RNNs* + Olah *Understanding LSTMs*; then read `min-char-rnn.py` (112 lines) until nothing is mysterious.
- **CS224n (Winter 2023) lectures 5, 6, 7 only** (RNNs/LMs; LSTMs+seq2seq; attention).
- **Papers:** ④ Seq2Seq (Sutskever 2014), ⑤ Bahdanau attention (2015).

**Build:**
1. **Char-level LSTM from scratch** (~15 hrs): the cell equations yourself in PyTorch (no `nn.LSTM`), manual unrolling, Tiny Shakespeare. Keep the checkpoint — you'll compare against your Week 7 GPT.
2. **Seq2seq + Bahdanau attention on date normalization** ("March 5th, 2021" → "2021-03-05") — small, fast, and the attention heatmaps are unambiguous. **Required output: saved attention-alignment heatmaps.** Watching the model learn alignment is the point of the week. (*English→French translation is stretch, not core.*)
3. One page: "Three things attention fixes that recurrence can't." Your Week 7 scaffolding.
4. **SQL (evenings, ~4 hrs, finish):** DuckDB over real parquet — an HF dataset or your W&B run export. Ad-hoc analytics on your own experiments is the habit.

**Cut line:** cut translation and lecture 7. Never cut the LSTM cell or the attention heatmaps.

---

## Week 7 (Aug 31 – Sep 6): The Transformer, Built Completely From Scratch

The most important week of the four months. Protect it. If you're behind entering it, cut Week 6's stretch — never this.

**Objectives:** scaled dot-product attention, multi-head, causal masking, positional embeddings, pre-LN blocks, full decoder-only GPT — **from memory, not transcription**; BPE deeply (and where weird LLM failures — arithmetic, spelling, non-English — come from); read the Transformer paper as a spec you've already implemented.

**Resources (core):**
- **Karpathy, *Let's build GPT: from scratch, in code, spelled out***. Active watching: pause, predict the next line, type everything.
- **nanoGPT repo** — after yours works, read every line of `model.py`/`train.py` and diff against your choices.
- **Karpathy, *Let's build the GPT Tokenizer*** + **minbpe** repo — watch, then implement yours before reading his.
- ***The Annotated Transformer*** (Harvard NLP) — one read for the encoder-decoder contrast; don't reimplement.
- **Papers:** ⑥ *Attention Is All You Need* (read AFTER your implementation works — it will feel like documentation), ⑦ GPT-2, ⑧ BERT (skim, encoder/masked-LM contrast only).
- **Structured fallback:** if the blank-file rebuild keeps failing, switch to Raschka's *Build a Large Language Model (From Scratch)* Ch. 2–4 as a more scaffolded path, then return. It's the fallback, not an addition.

**Build — flagship begins:**
1. **Days 1–3:** build char-level GPT on Shakespeare along with the video. Then **delete it and rebuild from a blank file, no references. Repeat until you can.**
2. **Days 4–5:** your own **byte-level BPE tokenizer** — train/encode/decode, special tokens, vocab 4k–8k, round-trip property tests over random unicode.
3. **Days 6–7:** swap in your tokenizer, point at **TinyStories**, first real run — **sized to a 12-hr Kaggle session with checkpoint/resume** (no overnight-Colab fantasies).

> **Milestone (end of Week 7):** from an empty file, no references, a working GPT training on Shakespeare in under 2 hours — including why logits scale by 1/√d_k, what breaks without the causal mask, and why pre-LN beats post-LN. (This rep is re-run in Weeks 8 and 12 — fluency comes from repetition, and the reps are scheduled.)

---

## Week 8 (Sep 7–13): Training Dynamics + Experiment Rigor — SHIP WEEK

Mon–Thu: dynamics + ablations. Fri–Sun: ship the flagship, run the reps, publish.

**Objectives:** diagnose training pathologies from evidence; init/normalization/warmup/clipping/AMP understood *by breaking each one deliberately*; run experiments like a researcher — seeded, tracked, ablated, uncertainty-quantified.

**Resources (core):**
- **Re-apply makemore-Part-3's diagnostics to your GPT** (activation histograms, gradient/update ratios) — you watched it in Week 4; don't re-watch, re-derive.
- **Karpathy's *Recipe*** → convert into your own `TRAINING_CHECKLIST.md` (you read it twice in Week 4; now it becomes infrastructure).
- **Papers:** ⑨ GPT-3 (Brown 2020 — scaling + in-context learning; skip the eval appendix), ⑩ Chinchilla (Hoffmann 2022 — first pass; you'll redo its arithmetic for your own model in Week 9), AdamW skim (Loshchilov & Hutter). *(Adam itself was read once, Week 3.)*

**Build (Mon–Thu):**
- **The 6-ablation suite on your GPT** — (a) no LayerNorm, (b) no residuals, (c) default init vs GPT-2 init, (d) no warmup, (e) SGD vs AdamW, (f) vocab 512 vs 8192. **Run all ablations at a ~10× reduced token budget** — you're comparing curves, not shipping checkpoints; this is scientifically fine and it's what makes the suite affordable (full-budget ablations ≈ 40–60 T4-hours, over every free quota — this is what the $25–50 is for). For each: prediction written down *before* the run.
- **One ablation at 3 seeds, spread reported.** Single-seed deltas on small models are noise; learn that now, cheaply.
- **The sabotage exercise (best hour of the month):** write 3 configs, each hiding one bug — LR 10× too high, off-by-one causal mask, tokenizer train/val leak. Wait two days. Diagnose your own crime scenes from the W&B dashboards alone.

**Ship days (Fri–Sun):**
- Ship `gpt-from-zero` (full DoD above). Post the writeup to the reading-group Discord for technical feedback, not just the blog.
- **Timed rep #2: GPT from a blank file, under 2 hours, closed book.**
- **Cold-email habit starts:** one email/DM per week to an author whose work you touched, reproduction attached. Continues to Week 17.

> **Month 2 exit gate:** given a loss curve + activation stats from a broken run — nothing else — you name 2–3 ranked hypotheses and the cheapest experiment to distinguish them. And: take a paper you've never seen (*RoFormer/RoPE*, Su 2021 — test yourself on it), read in 90 minutes, half-page summary, core idea implemented into your GPT in <150 lines.

---

## Month 2 paper list (in order)

| # | Week | Paper |
|---|---|---|
| 0 | 5 | Keshav — *How to Read a Paper* (method) |
| 1–3 | 5 | AlexNet · ResNet · BatchNorm |
| 4–5 | 6 | Seq2Seq · Bahdanau attention |
| 6–8 | 7 | Attention Is All You Need · GPT-2 · BERT (skim) |
| 9–10 | 8 | GPT-3 · Chinchilla (+AdamW skim) |

Ordering logic: vision papers while building CNNs, attention papers *after* implementing attention, scaling papers once you've personally paid for compute. Papers read after implementation stick; papers read before slide off.
