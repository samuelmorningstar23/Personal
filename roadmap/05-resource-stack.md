# The Resource Stack — Tiered and Honest

The draft version of this list was a second, parallel curriculum: "every chapter of Raschka," "CS336 assignments 1–3," "Huyen cover to cover" — 300+ phantom hours scheduled nowhere. The fix is three tiers. **Tier A appears in a month file by week. Tier B is consulted, never read linearly. Tier C is explicitly after November 15.** If a resource tempts you mid-program and it's not Tier A, it's procrastination wearing a lab coat.

Ground rule: **build > watch > read.** You have intermediate Python/ML — anything re-teaching sklearn is dead weight.

---

## Tier A — Scheduled (appears in a month file)

### Books

| Book | Scheduled use |
|---|---|
| **Mathematics for Machine Learning** (Deisenroth et al., free) | Week 1: Ch. 2, 5, 6 + Ch. 4 skim, ~15 curated exercises. Not one page more. |
| **Sutton & Barto, *Reinforcement Learning*** (free) | Week 10: Ch. 13 skim (DPO grounding). Week 13: Ch. 3, 4, 6, 13. |
| **Chip Huyen, *AI Engineering*** (O'Reilly 2025) | Week 11: Ch. 3–4 (evals), Ch. 6 (RAG/agents). Rest → Tier B. |
| **Raschka, *Build a Large Language Model (From Scratch)*** | **Fallback path only:** if Week 7's blank-file rebuild keeps failing, Ch. 2–4 provide scaffolding; if Weeks 9–10 stall, Ch. 5–7. It *replaces* the Karpathy path when invoked — never runs alongside it. |

### Courses & lecture series

| Resource | Scheduled use |
|---|---|
| **Karpathy, *Neural Networks: Zero to Hero*** | The program spine. Week 3: micrograd. Week 4: makemore Part 3 (Parts 1–2 cut — redundant after your own engine). Week 7: build-GPT + tokenizer videos. Week 9: reproduce-GPT-2. Budget 3× video length, always. |
| **CS231n** (notes + 2017 lectures 5, 9; Assignment 2 conv/BN numpy sections) | Weeks 3–5. Notes split: backprop/optimization/NN-1-2 in Week 3, NN-3 in Week 4, conv module in Week 5 — no overlap. |
| **CS224n** (Winter 2023, lectures 5–7 only) | Week 6. |
| **Spinning Up in Deep RL** | Week 10 (Part 3 preview), Week 13 (Parts 1–3 + algorithm docs as specs). |
| **ARENA Chapter 1** (arena.education) | Week 15: 1.1 half-day timebox, 1.2 in full, 1.3 toy-model exercises only. **Optional: apply to the ARENA 9.0 cohort in Week 11 — the deadline won't wait for Week 15.** |
| **HF LLM course** (tokenizers/datasets/transformers chapters) | Week 9, fast. |
| **GPU MODE lectures 1–3, 14** + OpenAI Triton tutorials | Week 14. |
| **3Blue1Brown, *Essence of Linear Algebra*** | Week 1, before MML, at meals. |

**The CS336 decision (Stanford, *Language Modeling from Scratch* — lectures on YouTube, assignments public):** it is genuinely the strongest university course for this goal, and it is also 150+ hours of assignments that would double-book Weeks 7–9. **Ruling: it's the university-shaped alternative path, not an addition.** If you prefer graded problem sets to self-scoped builds, swap assignment 1 for the Week 7+9 builds and assignment 2 for Week 14's Triton work. Pick one path per week; running both is how the plan dies. Its lectures are Tier B reference for data curation and scaling.

### The paper canon (all scheduled in month files)

**Month 1–2 (foundations → scaling):** Keshav *How to Read a Paper* · Breiman *Random Forests* · *XGBoost* · Kingma & Ba *Adam* (once, Week 3) · AlexNet · ResNet · BatchNorm · Seq2Seq · Bahdanau · *Attention Is All You Need* · GPT-2 · BERT (skim) · GPT-3 · Chinchilla (first pass Wk 8, arithmetic redo Wk 9) · AdamW (skim) · Bengio 2003 (with makemore).

**Month 3 (the modern stack):** TinyStories · FineWeb (blog) · InstructGPT · DPO · LoRA · QLoRA · Zephyr · MT-Bench/LLM-judge · Lost in the Middle · Contextual Retrieval (blog) · *Building Effective Agents* (blog) · ReAct · OWASP LLM Top 10 + Willison on prompt injection · Transformer Inference Arithmetic (blog) · PagedAttention/vLLM · AWQ §3.

**Month 4 (frontier):** PPO · GAE · DQN · *The 37 Implementation Details of PPO* · *Let's Verify Step by Step* · DeepSeek-R1 · *Go Brrr From First Principles* (blog) · FlashAttention · ZeRO (skim) · *Mathematical Framework for Transformer Circuits* · Induction Heads · *Toy Models of Superposition* · *Towards Monosemanticity* (skim) · Nanda et al. grokking · Power et al. (skim) · the 4 safety reads (Ngo et al., Anthropic Core Views, Sleeper Agents, Alignment Faking).

**Read-if-lineage-reading-pulls-you (Stage 3 triage, not scheduled):** Kaplan scaling laws · LLaMA · Llama 3 Herd · RoFormer (it's the Week 8 exit-gate test paper) · Mixtral · Constitutional AI · Christiano 2017 · Tülu 3 · DeepSeek-V3 report.

---

## Tier B — Reference (consult on demand; reading linearly is a violation)

- **Understanding Deep Learning** (Prince, free at udlbook.github.io) — the backing textbook when a Karpathy-path concept needs rigor: init/regularization (ch. 7–9), transformers (ch. 12). Ch. 17–18 activate only for the Week 17 diffusion sprint. Reading it cover-to-cover is a post-program luxury, not a Week 5 activity.
- **Goodfellow, *Deep Learning*** — pre-transformer; Ch. 5–8 only when UDL leaves you wanting more optimization theory.
- **Designing Machine Learning Systems** (Huyen 2022) — Ch. 3–4, 7–9 when a production question arises; heavily superseded by *AI Engineering*.
- **Elements of Statistical Learning** — Week 2's trees/boosting chapters are scheduled; everything else is lookup.
- **CS229 main notes** — Week 2 scheduled sections; the rest is the best free classical-ML reference in existence.
- **The RLHF Book** (Lambert, rlhfbook.com) — Week 10 chapters scheduled; the rest as post-training reference.
- **PMPP** (Hwu/Kirk/El Hajj) — Week 14 skims ch. 1–6 as lecture support; it is not a book you "do" in four months.
- **nanoGPT / build-nanogpt / nanochat / minbpe / CleanRL / TRL+PEFT docs / Ultra-Scale Playbook** — read-the-source references at their scheduled moments and whenever stuck.

## Tier C — Post-program (after Nov 15, written down so they stop haunting you)

- **Raschka, *Build a Reasoning Model (From Scratch)*** — Week 13's GRPO days cover the core hands-on; the book is the deep follow-up.
- **fast.ai Part 2** (diffusion from the foundations) — if generative images become your thing.
- **UDL cover-to-cover**, CS285 (deep RL properly), full CS336 if you took the Karpathy path, ARENA chapters 2–3.
- **Karpathy's LLM101n** — unreleased as of mid-2026; nanochat is the substitute capstone scaffold if you want a fifth project.

---

## Coursera Plus: the blunt verdict

Nearly worthless for this plan — the 2026 alpha is in free university courses and hands-on repos. **Skip:** ML Specialization (below you), NLP Specialization (pre-LLM era), Generative AI with LLMs (2023 survey), MLOps/GANs specializations (dated/museum), Imperial's math specialization (MML book + 3B1B beat it).

**IBM AI Engineering Professional Certificate — investigated (July 2026) and skipped.** 13 courses, ~168 hrs. Courses 1–5 (~93 hrs, sklearn/Keras/TF/intro-PyTorch) re-teach what Weeks 1–4 build from scratch at far greater depth — and two of them are Keras/TensorFlow, which this plan explicitly avoids. The GenAI track (courses 7–13, ~60 hrs) covers the same headings as Weeks 7–12 (transformers, LoRA/QLoRA, instruction tuning, RLHF-PPO, DPO, RAG, LangChain agents) but as 30–90-minute fill-in-the-blank cloud notebooks; completion-based reviewers call the RL/preference material rushed and surface-level, no GRPO, agents are 2023-era LangChain (which we deliberately learn *without*). Practitioner consensus on the credential itself: thin signal, "projects > certificates" — and this plan produces six defended repos. Its 168 hours = 2.3 weeks of our budget. *Only salvage:* course 11's guided DPO/RLHF-PPO labs as an optional 1–2 hr sanity-check *after* the Week 10 from-scratch implementations, and the standalone "Generative AI Engineering with LLMs Specialization" (= courses 7–13) as a post-program credential if an employer ever demands paper. **Two defensible uses:** Imperial linear algebra at 1.5× as the Week 1 *fallback ramp* if MML Ch. 2 is a wall; DLS Courses 1–2 certificates if you want the one Coursera credential hiring managers recognize — value it at exactly that. DeepLearning.AI's genuinely current material (agents/evals short courses) is free on deeplearning.ai, not Coursera — 1-hour appetizers only.

## Tooling to master (scheduled implicitly throughout)

- **Daily drivers:** PyTorch (autograd internals → `torch.compile` → profiler → DDP/FSDP), HF ecosystem (`transformers`/`datasets`/`tokenizers`/`peft`/`trl` + Hub), Weights & Biases (every run from Week 5), vLLM, lm-evaluation-harness + Inspect, pytest + ruff + uv + pre-commit + GitHub Actions (from Week 4), Linux/SSH/tmux on rented boxes, cheap-GPU fluency (Kaggle/Colab; RunPod/Lambda/Modal — renting an A100 for $2/hr and not wasting it is a core skill).
- **Working knowledge:** Triton (Week 14), FastAPI + Gradio (Weeks 12), Docker basics (Week 14), raw Anthropic/OpenAI SDKs — tool use, structured outputs, streaming, caching (Week 12), TransformerLens (Week 15), DuckDB + SQL (Weeks 5–6).
- **Deliberately skip:** LangChain chain abstractions (build your first agent with raw API calls + a while loop; LangGraph/Pydantic AI only if a job demands it), TensorFlow/Keras (do not touch in 2026), Kubeflow/TFX/Spark, no-code AI tooling.

## Community & signal (from the operating system §7)

- **Join and participate:** EleutherAI Discord (a free PhD seminar in #research), GPU MODE Discord (systems credibility), HF Discord (a merged `transformers`/`trl` PR outranks any certificate), r/LocalLLaMA (noisy ground truth). One live reading group from Week 5; one cold email/week from Week 8.
- **Subscribe to five, ignore the rest:** Interconnects (Lambert — post-training analysis, directly feeds Months 3–4), Ahead of AI (Raschka), AI News (smol.ai — the 10-minute firehose replacement), Latent Space (the AI-engineering job market's house organ), and Lilian Weng's Lil'Log + Chip Huyen's blog as textbook back-catalogs.
- **Skip:** hype digests, Medium listicles, YouTube "AI news," paid bootcamps reselling the free material above.
