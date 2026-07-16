# Glossary — Every Term and Abbreviation in This Plan, in Plain Language

Organized by where you'll first meet each term. Skim now; return whenever the roadmap says something opaque.

---

## Study-system terms (the operating system)

| Term | Meaning |
|---|---|
| **Anki** | A free flashcard app built on **spaced repetition**: it re-shows each card at growing intervals, timed to just before you'd forget it (day 1, day 3, day 8, day 20…). Reviewing at that moment is the most efficient known way to make something permanent. In this plan you write ≤15 new cards a day (formulas, "why" questions, gotchas) and review ~30 min every morning. Website: apps.ankiweb.net. |
| **Feynman technique** | Named after physicist Richard Feynman: to test whether you understand something, **explain it in plain language, from memory, as if teaching a beginner**. Wherever your explanation goes vague or you reach for jargon, you've found a gap. The plan's version: write a one-page explanation *closed-book*, then open the source and mark every gap in red, then rewrite only the red parts. |
| **Spaced repetition** | The learning-science principle behind Anki (above): reviews spaced out over increasing intervals beat cramming by a wide margin for long-term retention. |
| **Lab notebook** | A daily append-only log of what you attempted, what actually happened (exact errors, loss curves), what you now believe, and open questions. Scientists keep them so debugging is cumulative instead of amnesiac. |
| **Deep work** | Long, uninterrupted, full-concentration blocks on hard problems (term popularized by Cal Newport). The opposite of working with a phone nearby. |
| **Chronotype** | Your natural body-clock preference (morning person vs night owl). The daily template's clock times can shift to match yours; the block *order* cannot. |
| **Ship week** | The last week of each month (4, 8, 12, 16): no new material after Thursday; Friday–Sunday you finish and publish ("ship") the month's project, run self-exams, and absorb overflow. |
| **Rubber-duck writeup** | Explaining your bug out loud (traditionally to a rubber duck on your desk) or in writing. The act of articulating it precisely solves it surprisingly often — the plan's 90-minute rule uses this. |
| **Timebox** | A hard time limit on a task ("2-hour timebox"): when the time is up, you stop regardless of completion. Prevents rabbit holes. |
| **Yak-shaving** | The chain of tedious setup tasks standing between you and the real work (installing drivers, fixing configs, SSH keys). The plan budgets for it explicitly so it doesn't silently eat build hours. |
| **Cut line** | Each week's pre-written decision: "if behind by Thursday, cut X and Y; never cut Z." Made in advance so fatigue never chooses what gets dropped. |
| **Core / Stretch** | Core = must be done for the week to count. Stretch = only if genuinely ahead of schedule. |
| **DoD — Definition of Done** | The explicit checklist a project must satisfy to count as finished. Prevents both quitting early and endless polishing. |
| **MVD — Minimum Viable DoD** | The reduced checklist a project degrades to if a week slips — so a bad week produces a smaller finished artifact instead of an abandoned one. |
| **Cold email** | An unsolicited (but specific and substantive) email to a researcher whose work you reproduced. With your reproduction attached, it's how mentorship and opportunities actually start. |
| **Post-mortem** | A short honest writeup after a failed/abandoned project: what was attempted, why it stalled, what was learned. |

## Math & classical ML (Weeks 1–2)

| Term | Meaning |
|---|---|
| **SVD — Singular Value Decomposition** | A way of factoring any matrix into rotation × stretching × rotation. Reveals the "important directions" in data; powers compression and dimensionality reduction. |
| **PCA — Principal Component Analysis** | Finding the few directions along which data varies most, so you can describe high-dimensional data with a handful of numbers. Built on eigendecomposition/SVD. |
| **Eigendecomposition** | Breaking a matrix into its characteristic directions (eigenvectors) and how strongly it stretches along each (eigenvalues). |
| **MLE — Maximum Likelihood Estimation** | Choosing model parameters that make the observed data most probable. The statistical foundation under most loss functions. |
| **Entropy** | A measure of uncertainty/surprise in a probability distribution, in bits. |
| **Cross-entropy** | Measures how badly a predicted probability distribution matches the true one. *The* standard loss function for classification and language models. |
| **KL divergence — Kullback-Leibler divergence** | The "distance" (asymmetric) between two probability distributions. Appears everywhere: losses, RLHF penalties, DPO's derivation. |
| **Softmax** | The function that turns a vector of raw scores into probabilities that sum to 1. The last step of nearly every classifier and language model. |
| **Logits** | The raw, pre-softmax scores a model outputs. |
| **Gradient** | The vector of "how much does the loss change if I nudge each parameter" — the direction of steepest ascent. Training = repeatedly stepping against it. |
| **SGD — Stochastic Gradient Descent** | Updating parameters using the gradient computed on a small random batch of data rather than the full dataset. The workhorse of all deep learning. |
| **Adam / AdamW** | The most-used optimizer: SGD plus per-parameter adaptive step sizes and momentum. AdamW is the corrected version that handles weight decay properly. |
| **LR — Learning Rate** | The step size of each gradient update. The single most important hyperparameter. |
| **Regularization / L2 / weight decay** | Penalties that discourage a model from becoming too complex, to reduce overfitting. |
| **Bias–variance tradeoff** | Underfitting (too simple, misses the pattern — bias) vs overfitting (memorizes noise — variance). The central tension of classical ML. |
| **CV — Cross-Validation (k-fold)** | Splitting data into k parts and training/testing k times, each part taking a turn as the test set, for an honest performance estimate. |
| **CART — Classification And Regression Trees** | The standard decision-tree algorithm: repeatedly split data on the feature/threshold that best separates the classes. |
| **Gini / entropy splits** | The two standard criteria a decision tree uses to score how good a split is. |
| **Random forest** | Many decision trees, each trained on a random subset of data and features, voting together. Reduces variance. |
| **Bagging** | "Bootstrap aggregating" — training many models on random resamples of the data and averaging them. |
| **GBM — Gradient Boosting (Machine)** | Building trees *sequentially*, each new tree correcting the errors (residuals) of the ones before. XGBoost is its famous fast implementation. Reduces bias. |
| **SVM — Support Vector Machine** | A classifier that finds the maximum-margin boundary between classes. **Hinge loss** is its loss function. |
| **k-means / k-means++** | Clustering: assign points to the nearest of k centers, move centers to the mean, repeat. k-means++ is the smart initialization. |
| **GMM — Gaussian Mixture Model** | Modeling data as a blend of several Gaussian (bell-curve) clusters, with soft membership. |
| **EM — Expectation-Maximization** | The alternating algorithm that fits models with hidden variables (like GMMs): guess the hidden assignments, refit, repeat. |
| **Naive Bayes** | A simple probabilistic classifier assuming features are independent. Fast, surprisingly effective baseline. |
| **Data leakage** | When information from the test set (or the future) sneaks into training, making results look better than reality. The classic silent killer of ML projects. |
| **Bootstrap** | Estimating uncertainty by resampling your data with replacement many times and recomputing the metric. Gives you a confidence interval without math assumptions. |
| **Permutation test** | Testing if a difference is real by shuffling labels many times and seeing how often chance alone produces a difference that big. |
| **CI — Confidence Interval** | The range a measured number plausibly lies in ("60% ± 10"). A win-rate without one is marketing, not measurement. ⚠ *In this plan "CI" also means Continuous Integration (see engineering section) — context disambiguates.* |
| **MNIST / CIFAR-10** | Standard benchmark datasets: 28×28 handwritten digits (MNIST) and 32×32 color images in 10 classes (CIFAR-10). |

## Neural networks & training (Weeks 3–8)

| Term | Meaning |
|---|---|
| **MLP — Multi-Layer Perceptron** | The plainest neural network: stacked layers of linear transforms + nonlinearities. |
| **Backprop — Backpropagation** | The algorithm that computes every parameter's gradient efficiently by applying the chain rule backward through the network. The engine of all deep learning. |
| **Autograd / autodiff — automatic differentiation** | Software that records the operations you run and computes gradients automatically (what PyTorch does; what you build from scratch in Week 3). |
| **micrograd / makemore / nanoGPT / minbpe** | Andrej Karpathy's small teaching repos: a tiny autograd engine, a character-level language-model series, a minimal GPT training codebase, and a minimal tokenizer. |
| **ReLU / tanh** | Activation functions — the nonlinearities between layers. "Dead ReLUs" are neurons stuck outputting zero. |
| **He / Xavier initialization** | Formulas for choosing initial random weights at the right scale so signals neither explode nor vanish through depth. |
| **BatchNorm / LayerNorm** | Layers that re-standardize activations mid-network so training stays stable. BatchNorm normalizes across the batch (vision); LayerNorm across features (transformers). |
| **Broadcasting** | Numpy/PyTorch's rules for automatically stretching arrays of different shapes to match in arithmetic. Its *gradient* is the classic from-scratch-autograd trap. |
| **Loss curve** | The plot of training/validation loss over time. Reading its pathologies (spikes, plateaus, divergence) is a core diagnostic skill. |
| **Overfit a single batch** | The standard sanity test: your model must be able to memorize 32 examples (loss ≈ 0). If it can't, the code is broken. |
| **CNN — Convolutional Neural Network** | Networks whose layers slide small filters across images, exploiting locality. The backbone of computer vision. |
| **im2col** | An implementation trick that unrolls image patches into a matrix so convolution becomes fast matrix multiplication. |
| **ResNet / residual (skip) connections** | Adding each layer's input directly to its output (`x + f(x)`), letting very deep networks train. The "residual stream" idea also underpins transformer interpretability. |
| **Data augmentation** | Random crops/flips/etc. applied to training images so the model sees more variety. |
| **RNN / LSTM** | Recurrent networks process sequences one step at a time with a hidden memory. **LSTM** (Long Short-Term Memory) adds gates that fix the vanishing-gradient problem. |
| **Vanishing/exploding gradients** | In deep or recurrent nets, gradients can shrink to nothing or blow up as they propagate — the historical obstacle to depth. |
| **Seq2seq / encoder-decoder** | One network encodes an input sequence into a representation; another decodes it into an output sequence (e.g., translation). |
| **Attention** | The mechanism letting a model look back at *all* previous positions and weight them by relevance — differentiable content-based lookup. **Bahdanau attention** was its first form. |
| **Transformer** | The architecture built entirely from attention + MLP blocks (no recurrence), from "Attention Is All You Need" (2017). Basis of all modern LLMs. |
| **Multi-head attention** | Running several attention operations in parallel so the model attends to different things simultaneously. |
| **Causal mask** | The trick that prevents a language model from peeking at future tokens during training. |
| **Pre-LN / post-LN** | Where LayerNorm sits relative to each block. Pre-LN trains more stably; it's the modern default. |
| **Positional embeddings / RoPE** | How transformers know token *order* (attention alone is order-blind). RoPE (rotary position embedding) is the modern standard. |
| **GPT — Generative Pre-trained Transformer** | A decoder-only transformer trained to predict the next token. The architecture you build from a blank file in Week 7. |
| **BERT** | The encoder-only counterpart (predicts masked-out words, used for understanding tasks, not generation). Read for contrast. |
| **Token / tokenizer** | Models don't read letters; text is chopped into subword chunks (tokens) from a fixed vocabulary. The tokenizer does the chopping. |
| **BPE — Byte-Pair Encoding** | The standard tokenizer-training algorithm: start from bytes, repeatedly merge the most frequent pair. "Byte-level" means it starts from raw bytes so *any* string round-trips. |
| **TinyStories** | A dataset of simple children's stories — small enough that a small model trained on it produces coherent text on a hobby budget. |
| **Warmup / cosine schedule** | Learning-rate recipes: ramp up gently at the start (warmup), then decay along a cosine curve. |
| **Gradient clipping** | Capping gradient magnitude each step so one bad batch can't blow up training. |
| **AMP / mixed precision (`torch.amp`, bf16)** | Doing most math in 16-bit floats for ~2× speed/memory while keeping numerically-sensitive parts in 32-bit. bf16 is the preferred 16-bit format. |
| **Checkpointing** | Saving model + optimizer state during training so a crashed or interrupted run resumes instead of restarting. |
| **W&B — Weights & Biases** | The standard experiment-tracking service: every run's config, code version, seed, and live loss curves in one dashboard (wandb.ai). |
| **Seed / seeded reproducibility** | Fixing the random-number generator's starting point so a run is exactly repeatable. |
| **Ablation** | Removing or changing one component at a time (no LayerNorm, no warmup…) to measure what each part actually contributes. How researchers establish causality. |
| **Hyperparameters** | The knobs you set rather than learn: LR, batch size, model width/depth, etc. |
| **Scaling laws / Chinchilla** | Empirical laws showing loss falls predictably with model size, data, and compute. The Chinchilla paper's rule of thumb: ~20 training tokens per model parameter. |

## The LLM stack (Weeks 9–12)

| Term | Meaning |
|---|---|
| **LLM — Large Language Model** | A large transformer trained on huge text corpora to predict the next token — GPT-4/Claude/Llama-class systems. |
| **Pretraining** | The first, expensive stage: training on raw internet-scale text for general language ability. Produces a **base model**. |
| **HF — Hugging Face** | The ecosystem/company hosting models and datasets (the **Hub**) and the standard libraries: `transformers`, `datasets`, `tokenizers`, `peft`, `trl`. |
| **FineWeb-Edu / C4 / Common Crawl** | Public web-scrape text corpora used for pretraining. FineWeb-Edu is a quality-filtered educational subset. |
| **MinHash dedup** | An efficient technique for finding and removing near-duplicate documents in a corpus. Duplicates hurt model quality. |
| **Contamination** | When benchmark/eval questions accidentally appear in training data, inflating scores dishonestly. |
| **SFT — Supervised Fine-Tuning** | Stage two: training the base model on instruction→response examples so it behaves like an assistant instead of an autocomplete. |
| **Chat template** | The special formatting (role markers, separators) that turns a conversation into the token sequence a chat model expects. |
| **LoRA — Low-Rank Adaptation** | Fine-tuning by adding tiny trainable matrices beside the frozen original weights — a few million trainable parameters instead of billions. **QLoRA** = LoRA on a 4-bit-quantized model, letting a 7B model fine-tune on one consumer GPU. |
| **PEFT — Parameter-Efficient Fine-Tuning** | The umbrella term (and HF library) for methods like LoRA. |
| **RLHF — Reinforcement Learning from Human Feedback** | Stage three (classic form): train a **reward model (RM)** on human preference comparisons, then optimize the LLM against it with PPO. What made ChatGPT-class assistants possible. |
| **DPO — Direct Preference Optimization** | The simpler modern alternative: a clever loss that gets the RLHF result directly from preference pairs — no reward model, no RL loop. You derive and implement it in Week 10. |
| **Preference pairs / UltraFeedback** | Data of the form "for this prompt, response A beats response B." UltraFeedback is a standard public preference dataset; smoltalk/oasst2 are public chat/SFT datasets. |
| **TRL** | HF's "Transformer Reinforcement Learning" library: ready-made `SFTTrainer`, `DPOTrainer`, `GRPOTrainer`. |
| **Eval / benchmark** | Any systematic measurement of model quality. Standard public benchmarks: **MMLU** (multi-subject knowledge), **GSM8K** (grade-school math), **HellaSwag** (commonsense completion), etc. **lm-evaluation-harness** is the standard tool that runs them; **Inspect** is the UK AI Safety Institute's framework for building custom evals. |
| **LLM-as-judge** | Using a strong LLM to grade another model's outputs. Powerful but biased (favors verbosity, position, itself) — which is why you calibrate it against your own hand labels. |
| **Win-rate** | In pairwise evals: how often model A's answer beats model B's. |
| **RAG — Retrieval-Augmented Generation** | Instead of hoping the model memorized facts, search a document collection first and paste the best chunks into the prompt. Chunking → embeddings → search → answer. |
| **Embeddings** | Vectors representing meaning: similar texts get nearby vectors, so semantic search becomes nearest-neighbor lookup. (bge/gte are standard open embedding models; `sentence-transformers` the library.) |
| **FAISS** | A fast similarity-search index for millions of embedding vectors. |
| **BM25** | The classic keyword-relevance scoring formula. "**Hybrid search**" = BM25 + embeddings combined (via **RRF**, reciprocal rank fusion). |
| **Cross-encoder reranking** | A second, more careful model re-scores the top search hits for a final ordering. |
| **recall@5 / MRR** | Retrieval metrics: was the right document in the top 5? (recall@5); how high did it rank on average? (MRR — mean reciprocal rank). |
| **Agent / tool use** | An LLM in a loop that can call tools (search, code execution), observe results, and decide next steps until the task is done. **ReAct** is the foundational reason-then-act loop pattern. |
| **Prompt injection** | The attack where malicious instructions hidden in content an LLM reads (a webpage, a retrieved doc) hijack its behavior. **OWASP LLM Top 10** is the standard list of LLM security risks. |
| **Sandbox** | An isolated, restricted environment for running untrusted code (like your agent's Python tool) so mistakes can't touch the real system. |
| **KV cache — Key-Value cache** | During generation, storing each token's attention keys/values so they aren't recomputed for every new token — the reason generation is fast, and a big memory consumer. |
| **Memory-bandwidth-bound vs compute-bound** | Whether speed is limited by moving data to the chip or by arithmetic itself. LLM generation is bandwidth-bound — the insight behind most inference optimization. |
| **Quantization / AWQ** | Storing weights in 4–8 bits instead of 16 to shrink memory and speed inference, at small quality cost. AWQ is one popular method. |
| **vLLM / PagedAttention** | The standard open-source high-throughput LLM server; PagedAttention is its core trick (managing KV-cache memory like an OS manages RAM pages). |
| **p50/p95 latency / throughput** | Serving metrics: median and 95th-percentile response times; tokens served per second. |
| **FastAPI / Gradio** | Python tools for serving: FastAPI builds web APIs; Gradio builds instant demo UIs (hostable free as HF **Spaces**). |
| **MCP — Model Context Protocol** | An open standard for connecting AI assistants to tools and data sources in a uniform way. |
| **Gated model** | A model (e.g., Llama) requiring a license-acceptance/approval step before download — hence the plan's preference for ungated Qwen. |
| **A100 / T4** | NVIDIA datacenter GPUs. A100 = serious training card you rent (~$1.50–2/hr); T4 = the free-tier Kaggle/Colab card. |

## RL, systems & interpretability (Weeks 13–17)

| Term | Meaning |
|---|---|
| **RL — Reinforcement Learning** | Learning by trial and error from rewards rather than labeled examples: an agent acts in an environment and improves its policy. |
| **MDP — Markov Decision Process** | RL's mathematical setting: states, actions, rewards, transitions. |
| **Policy / value function** | The policy is what the agent does; a value function estimates how much future reward a state (or action) is worth. |
| **Policy gradient / REINFORCE** | Improving the policy by directly nudging action probabilities in proportion to the rewards they led to. REINFORCE is the simplest version. |
| **PPO — Proximal Policy Optimization** | The workhorse RL algorithm: policy gradients with a "clipped" update that prevents destructively large steps. Also the classic RLHF optimizer. |
| **GAE — Generalized Advantage Estimation** | A variance-reduction technique for policy gradients; its λ knob trades bias against variance. |
| **DQN — Deep Q-Network** | Value-based RL (learn action values, pick the best) with replay buffers and target networks. You read/run it rather than build it. |
| **GRPO — Group Relative Policy Optimization** | The DeepSeek-R1-era simplification of PPO: drop the value network, compute advantages relative to a *group* of sampled answers. The current standard for reasoning training. |
| **RLVR — RL with Verifiable Rewards** | Training with rewards from an automatic checker (is the math answer right? does the code pass tests?) instead of a learned reward model. |
| **Gymnasium / CartPole / LunarLander** | The standard RL environment library and its classic beginner tasks (balance a pole; land a spacecraft). |
| **CleanRL / Spinning Up** | Single-file reference RL implementations (CleanRL) and OpenAI's written RL curriculum (Spinning Up). |
| **GPU / CUDA / kernel** | The Graphics Processing Unit does deep learning's parallel math; CUDA is NVIDIA's programming platform for it; a "kernel" is one GPU program (e.g., one matmul). |
| **SM / warp / HBM / SRAM** | GPU anatomy: Streaming Multiprocessors (the compute cores), warps (groups of 32 threads executing together), HBM (big-but-slow main GPU memory), SRAM (tiny-but-fast on-chip memory). |
| **Arithmetic intensity / kernel fusion** | Math-per-byte-moved (predicts memory- vs compute-bound); fusing several operations into one kernel to avoid round-trips to slow memory. |
| **Triton** | A Python-like language for writing fast GPU kernels without raw CUDA C++. The practical 80/20. |
| **FlashAttention / online softmax** | The famous algorithm computing exact attention in fast on-chip memory via tiling; online softmax is the running-rescale trick that makes it work. The canonical "hardware-aware beats clever math" lesson. |
| **`torch.compile` / profiler** | PyTorch's JIT compiler (fuses ops for speed) and its tool for measuring where time is actually spent. |
| **DDP — Distributed Data Parallel** | Multi-GPU training where each GPU holds a full model copy and they average gradients. |
| **FSDP / ZeRO** | Sharded training for models too big for one GPU: parameters, gradients, and optimizer state are split across GPUs (ZeRO stages 1/2/3 shard progressively more; FSDP is PyTorch's implementation). |
| **NCCL / torchrun** | NVIDIA's GPU-to-GPU communication library, and PyTorch's launcher for multi-GPU jobs. |
| **Mech interp — Mechanistic interpretability** | Reverse-engineering the actual algorithms inside a trained network's weights — neuroscience for neural nets. |
| **Residual stream** | The interp-era view of a transformer: a central information highway that every attention head and MLP reads from and writes (adds) to. |
| **QK / OV circuits** | The decomposition of an attention head into "where do I look?" (query-key) and "what do I copy?" (output-value). |
| **Induction heads** | The famous circuit that finds an earlier occurrence of the current pattern and predicts what followed it — a mechanism behind in-context learning, and the classic first replication. |
| **Superposition** | Networks packing more concepts than they have neurons by sharing dimensions — why individual neurons are usually uninterpretable. |
| **SAE — Sparse Autoencoder** | The interp tool that unpacks superposition into cleaner, more interpretable "features." |
| **TransformerLens** | The standard Python library for interp research: hooks into every internal activation of a GPT. |
| **ARENA** | A free, exercises-first alignment/interpretability curriculum (arena.education) — the best hands-on interp on-ramp; also runs in-person cohorts. |
| **Activation patching / logit lens** | Core interp techniques: swap internal activations between two runs to localize where a behavior lives; read intermediate layers as if they were final predictions. |
| **Grokking** | The strange phenomenon where a model memorizes training data early, then — thousands of steps later — suddenly *generalizes*. Your capstone reproduces the paper that explained one case mechanistically. |
| **Fourier analysis (in the capstone)** | Decomposing signals into sine/cosine components. The grokking paper's discovery: the network learned to do modular addition *with trigonometry*. |
| **Alignment / AI safety** | The research field asking how to make powerful AI systems reliably do what we intend — the subject of Week 15's reading list. |
| **Diffusion / DDPM / ELBO / VAE** | Image-generation models that learn to reverse gradual noising (DDPM = the foundational paper). VAEs and the ELBO are the variational-inference math behind them. Week 17 stretch. |
| **CLIP / ViT / LLaVA** | Multimodal vision: ViT = transformer on image patches; CLIP = matching images and captions in a shared embedding space; LLaVA = bolting a vision encoder onto an LLM. Week 17 stretch. |
| **Whisper** | OpenAI's open speech-to-text model — the one-evening hedge on audio. |

## Engineering & tooling (throughout)

| Term | Meaning |
|---|---|
| **CI — Continuous Integration** | Automation (here **GitHub Actions**) that runs your tests and lint checks on every push. "Green CI" = the badge showing everything passes. ⚠ *Distinct from CI = confidence interval above.* |
| **pytest / ruff / pre-commit / uv** | The Python hygiene stack: test runner; fast linter/formatter; hooks that check code before each commit; fast package manager. |
| **Repo / README** | A Git project and its front-page document — the thing humans actually read; budget real time on it. |
| **Property test / round-trip test** | Testing a *law* over random inputs rather than single examples — e.g., `decode(encode(s)) == s` for every random string. |
| **Smoke test** | A minimal "does it run at all?" test — what your CI runs on the big training repos. |
| **YAML / config-driven** | Human-readable config files; "config-driven" code takes all its settings from them, making every experiment recordable and repeatable. |
| **SQL / DuckDB / parquet** | The universal database query language; a fast in-process analytics engine; the standard columnar data-file format. The Weeks 5–6 evening module. |
| **Docker / containerize** | Packaging an app with its entire environment into a portable container that runs identically anywhere. |
| **SSH / tmux** | Secure remote-shell access to rented GPU boxes; a terminal multiplexer that keeps your session (and training run) alive after you disconnect. |
| **API / SDK** | A service's programmatic interface (how your agent calls Claude/GPT); the code library for accessing it. |
| **Colab / Kaggle / RunPod / Lambda / Modal** | Free notebook GPUs (Colab, Kaggle — the ~12-hr session limits shape this plan) and by-the-hour GPU rental services for real training runs. |
| **Egress** | Moving data *out* of a cloud service (e.g., downloading checkpoints off a rented box) — costs time and sometimes money; plan for it. |
| **Quota** | The usage cap on free tiers (e.g., Kaggle's ~30 GPU-hrs/week) — the constraint the compute plan is built around. |

---

*If a term isn't here, it will be defined where it's used in the month files — and if it isn't, that's a bug: add it when you look it up. Maintaining this glossary is itself an Anki-card factory.*
