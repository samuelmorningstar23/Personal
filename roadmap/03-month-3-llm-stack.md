# Month 3 — The Modern LLM Stack (Weeks 9–12 · Sep 14 – Oct 11)

**Prerequisite state:** `gpt-from-zero` done and understood line-by-line; PyTorch fluency; papers read with notes. This month you stop reimplementing history and start operating the modern stack: pretrain, post-train, evaluate, retrieve, agentify, serve.
**Budget:** ~300 real hours (~75/week): ~40 build / ~21 read / ~14 debugging+writeup slack. If a week runs over, cut reading, never building.
**Compute (honest version):** **cap $200 this month** — the "<$100" fantasy dies on instance idle time, persistent storage, API calls for data generation, and the LLM-judge eval. Rules: **shut the box down before you debug**; pre-download datasets and request gated models in the *prior* week's evenings (better: prefer ungated **Qwen** and skip the approval wait); first use of any platform (RunPod/Lambda/Modal) costs half a day of onboarding — it's budgeted below.
**The trough warning:** Weeks 9–10 are statistically where motivation craters in a program like this. It's expected, it's temporary, the system carries you (operating system §5).

---

## Flagship: `smolchat` — a chat model you built end-to-end

Pretrain a base model → SFT it into a chat model → DPO it against preference data → evaluate with a harness you wrote → serve it, benchmarked. "I trained, aligned, evaluated, and served a model myself" is a sentence very few people can say honestly.

**⚠ The one architectural decision that makes or breaks the month, made now, in Week 9:** SmolChat is built to a **standard HF-compatible config (GPT-2 or Llama class)** so it loads natively in `transformers`, `lm-evaluation-harness`, and vLLM. A bespoke architecture silently costs 1–2 days of wrapper-writing in Week 11 and may make vLLM serving flatly impossible.

**Minimum viable DoD (protects the artifact if a week slips):**
1. A base model (~50–125M params) you pretrained yourself, with a loss curve and a val loss you can defend against Chinchilla token-budget arithmetic.
2. An SFT checkpoint that **follows chat format and simple in-domain instructions** (an honest bar — see data note below), and a DPO checkpoint beating SFT at **≥60% win-rate, reported with a bootstrap CI**, on your own 100-prompt judged eval.
3. The eval table: lm-evaluation-harness + custom suite, base vs SFT vs DPO.

**Full DoD adds:** FastAPI endpoint with your own KV cache + the same model under vLLM, with a throughput/latency comparison table; a live Gradio Space demo; a stranger-reproducible README + 2–3 page writeup.

**Data reality check:** the default pretraining mix is **FineWeb-Edu sample (or a FineWeb-Edu/TinyStories mix)** — a TinyStories-only base speaks children's-story English and will disappoint after SFT no matter what you do. Fallback if your base is too weak: run the SFT/DPO pipeline on **SmolLM2-135M-base** and report both. The *relative* DPO win is measurable either way; don't let a weak base kill the month.

---

## Week 9 (Sep 14–20): Pretraining at Small Scale + the HF Ecosystem

**Objectives:** run a real pretraining job end to end; choose model size/token budget on purpose (not vibes); build a data pipeline you've actually filtered yourself; get fluent in `datasets`/`tokenizers`/`transformers`/Hub.

**Resources (core):**
- **Karpathy, *Let's reproduce GPT-2 (124M)*** (4 hrs, at 1.25×, coding along) + the **build-nanogpt** repo. The best pretraining resource in existence.
- **Chinchilla** — redo the ~20 tokens/param arithmetic *for your model size* (your Week 8 first pass makes this fast).
- **TinyStories paper** (Eldan & Li 2023) — why small models can work; informs the data mix.
- **HF LLM course** (hf.co/learn): tokenizers + datasets + transformers chapters only; skim what you know.
- **HF blog, *FineWeb: decanting the web*** — read alongside the data-pipeline day below.
- *(CS336 note: Stanford's CS336 assignment 1 covers similar ground with more scaffolding — it's the university-shaped **alternative** to this week, not an addition. Pick one path. See the resource stack.)*

**Build (~38 hrs):**
1. **Mon:** platform onboarding (RunPod/Lambda: SSH, storage, data movement) — the budgeted half-day tax — plus tokenizer training with HF `tokenizers` (you built the algorithm; now use the production tool) and a streaming, packed `datasets` pipeline.
2. **Tue — the data-engineering day (new, and it matters):** take a *raw* Common Crawl/C4 slice and build a mini-pipeline: heuristic quality filters, MinHash dedup, language ID, and a **contamination check against your own eval set**. Train-on-filtered vs. train-on-raw at small scale; measure the val-loss delta. Data curation is the most underrated skill in the field — one day of doing beats a month of reading about it.
3. **Wed–Sat:** **pretrain the SmolChat base** (~50–125M, HF-class config) on a rented A100: bf16, `torch.compile`, cosine + warmup, grad accumulation, W&B. LR sweep on a small proxy first. **Budget for two failed runs — that's where the learning is; a failed run is tuition, not scope-panic.**
4. **Sun:** push model + tokenizer to the Hub with a real model card. Write the scaling note: was your size Chinchilla-optimal? What changes with 10× compute?

**Cut line:** shrink the model/token budget before cutting the data-engineering day.

---

## Week 10 (Sep 21–27): Post-Training — SFT, LoRA/QLoRA, RLHF & DPO

**Objectives:** the full alignment pipeline (base → SFT → preference optimization) and why each stage exists; RLHF conceptually, DPO mechanically; finetune a 7B on one GPU with QLoRA knowing what every knob does.

**Resources (core, in order):**
- **Day 1, first 4 hours — policy-gradient grounding pulled forward:** Spinning Up *Part 3: Intro to Policy Optimization* + Sutton & Barto Ch. 13 (skim). Without this, Thursday's DPO derivation is symbol-pushing over an objective you don't understand. (Full RL arrives Week 13; this is the trailer.)
- **InstructGPT** (Ouyang 2022) — the founding document of post-training. Full read.
- **Nathan Lambert, *The RLHF Book*** (rlhfbook.com): instruction tuning, reward models, DPO/direct alignment, PPO overview chapters. The one authoritative treatment; skip everything else on RLHF.
- **DPO** (Rafailov 2023) — **derive Eq. 7 from the KL-constrained RLHF objective on paper, with the book open.** (The *closed-book* version of this derivation is a Week 13 exit check, after PPO makes it mean something.)
- **LoRA** (Hu 2021) + **QLoRA** (Dettmers 2023 — NF4, double quantization, paged optimizers) + **Raschka's LoRA practical-tips post** (rank/alpha/target-module choices).
- **Zephyr** (Tunstall 2023) — the practical SFT+DPO recipe you'll copy. TRL + PEFT docs, one honest 2-hr pass.

**Build (~38 hrs):**
1. **LoRA from scratch** (~150 lines): wrap your model's linears; verify gradients only reach A/B; verify merged weights match. *Then* switch to PEFT.
2. **SFT SmolChat** on quality-filtered smoltalk/oasst2 with TRL's `SFTTrainer` + a chat template you define. Honest bar: chat format + simple in-domain instruction following.
3. **DPO loss from scratch** (~50 lines), verified against TRL's on a batch. Then DPO SmolChat on binarized UltraFeedback (or pairs you generate).
4. **QLoRA a real model:** **Qwen2.5-7B** (ungated — no approval wait) on a domain dataset you assemble (turn a textbook/docs corpus into 1–2k instruction pairs with a strong API model — this is a real API cost; it's inside the $200). Rank/LR ablation, ≥4 short runs, comparison table.

**Cut line:** drop the QLoRA ablation to 2 runs; never drop the from-scratch LoRA or DPO-loss implementations.

> **Milestone (end of Week 10):** given any open base model and a 24 GB GPU, you can produce a chat-tuned, DPO'd variant and explain every line of the TRL config; you can reproduce the DPO derivation with the book open and defend what the β temperature does.

---

## Week 11 (Sep 28 – Oct 4): Evaluation + RAG Done Properly

Eval skill is the scarcest commodity in the 2026 job market. This week is a differentiator — treat it that way.

**Objectives:** run benchmarks correctly and know why they're gameable; build custom evals; LLM-as-judge with its biases measured, not assumed; retrieval that provably beats naive cosine top-k.

**Resources (core):**
- **Hamel Husain, *Your AI Product Needs Evals*** — internalize the error-analysis-first workflow.
- **MT-Bench / LLM-as-judge paper** (Zheng 2023) — §3 on judge biases, twice.
- **Chip Huyen, *AI Engineering*** Ch. 3–4 (evaluation), Ch. 6 (RAG & agents). *(These chapters are the scheduled read; the rest of the book is reference — see resource stack.)*
- **Lost in the Middle** (Liu 2023) + **Anthropic's Contextual Retrieval post** + BEIR skim (how retrieval is measured).

**Build (~38 hrs):**
1. **Benchmarks (Mon–Tue):** lm-evaluation-harness on SmolChat base/SFT/DPO (hellaswag, arc_easy, winogrande — small-model-appropriate) and the QLoRA 7B (MMLU, GSM8K). Works natively because Week 9 chose an HF-class architecture. Include a **benchmark-contamination** discussion — you built the checker in Week 9.
2. **Custom eval (Tue–Wed):** 100-prompt instruction-following eval, LLM judge, pairwise, position-swapped, rubric-anchored. **Calibrate: hand-label 30 pairs; report judge–human agreement before trusting it.** **Every number ships with a bootstrap CI** — a 60% win-rate on 100 prompts carries a ±10-point interval, and reporting it without one is the difference between measurement and marketing. (Week 2's stats lab pays off here.)
3. **Half-day: port the custom eval to Inspect** (UK AISI's framework) — a hireable skill almost nobody has.
4. **RAG from scratch (Thu–Sun) — no LangChain/LlamaIndex:** ~500+ docs you care about → chunking → embeddings (bge/gte) → FAISS → **hybrid search** (BM25 + dense, reciprocal-rank fusion) → **cross-encoder reranking**. A 50-question eval set with gold chunks; **recall@5 and MRR** for naive vs hybrid vs hybrid+rerank; then generation with citations, faithfulness judged by your calibrated judge.
5. *(~2 hrs, optional but time-boxed: apply to ARENA 9.0 — the Oct–Nov London cohort lands in your Month 4 and would be a career accelerant; the application costs an evening, the deadline won't wait for Week 15.)*

**Cut line:** cut the Inspect port and BEIR; never cut judge calibration or the CIs.

> **Milestone (end of Week 11):** you can take any corpus and beat naive retrieval by a measurable recall@5 margin and say which component bought what; you can name three LLM-judge failure modes and show how your harness mitigates each; no number you report is naked of its CI.

---

## Week 12 (Oct 5–11): Agents + Inference Optimization — SHIP WEEK

Mon–Thu new material, Fri–Sun ship. This was the most overstuffed week in the draft plan; the cuts are already made — multimodal moved to Week 17, AWQ demoted to a read. What remains is core.

**Objectives:** an agent loop from raw API calls; agent *security* (your agent is an attack surface); inference arithmetic — why decoding is memory-bandwidth-bound, what the KV cache costs, what PagedAttention buys.

**Resources (core):**
- **Anthropic, *Building Effective Agents*** — read first, before any agent code. Workflows vs agents; simple beats clever.
- **ReAct** (Yao 2022).
- **Simon Willison's prompt-injection series + OWASP LLM Top 10** — the security read, paired with the red-team build below.
- **kipply, *Transformer Inference Arithmetic*** — work every calculation with your own model's dimensions.
- **vLLM/PagedAttention paper** (Kwon 2023). *AWQ (Lin 2023): §3 read only — running quantization is cut; understanding it is not.*

**Build (Mon–Thu):**
1. **Agent from scratch (Mon–Tue):** raw Anthropic/OpenAI API, no frameworks — 3 tools (web search, sandboxed Python subprocess, your Week 11 RAG index), your own loop: schemas, parsing, execution, feedback, max-turn termination, error recovery. Then a **10-task eval** (task success rate) — agents without evals are demos.
2. **Red-team your own agent (Wed morning):** plant injections in a retrieved doc and a fetched page; measure rogue-tool-call rate; **add 2–3 injection tasks to the eval permanently**; harden the sandbox (no network, timeouts). You built the attack surface — now attack it. *(Optional 2 hrs: expose the RAG index as an MCP server.)*
3. **Inference (Wed–Thu):** **KV cache in your own GPT's `generate()`**, benchmarked vs cache-free across sequence lengths, memory cost per token stated in bytes. Serve SmolChat + the 7B under **vLLM**; async load-test script; throughput + p50/p95 latency table vs vanilla `generate()`.

**Ship days (Fri–Sun):**
- Assemble the flagship: eval + serving tables, README, writeup. **Sunday: SmolChat on a Gradio Space (~3 hrs)** — a live demo out-signals a repo link.
- **Timed rep #3: GPT from blank file <2 hrs** (last rehearsal; it should feel easy now).
- Post the writeup to the community for feedback. Ship it.
- **Job-market motion starts now (2 hrs, Saturday buffer):** ML system-design + coding-interview reps, weekly from here — pipelines take 3–6 weeks, so waiting for Week 16 means missing the window.

> **Month 3 exit gate:** (a) explain, with arithmetic for your 7B, why generation is memory-bandwidth-bound and what batch size makes vLLM compute-bound; (b) your KV cache shows the expected speedup; (c) your agent passes ≥7/10 tasks *and resists your planted injections*, and you can articulate when you would **not** build an agent.

---

## Operating rules for the month

- **50% code, enforced.** A day of all-reading is followed by a day of all-building.
- **One resource per topic.** The lists above are already the cut.
- **Everything gets an eval — with a CI.** No artifact ships without a number attached from here on.
- **Daily lab notes in the repo** (`notes/`): raw material for Month 4's portfolio.
- Sunday afternoons are light-input only, hard stop ~17:30 (operating system §2). Week 9's debugging will test you; a fried brain reads loss curves badly — that's a throughput fact, not a comfort rule.
