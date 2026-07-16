# Month 1 — Foundations Rebuilt Properly (Weeks 1–4 · Jul 20 – Aug 16)

**Budget:** ~300 real hours (~75/week — see the operating system's hard-mode accounting). Split: ~50% build, ~27% read, ~14% pen-and-paper + review, ~9% publish.
**Non-negotiable habit:** every formula you read, you implement or derive by hand within 24 hours.
**Coursera note:** deliberately almost unused this month — video courses are too slow for your capacity, and building beats watching. One fallback exception in Week 1.

---

## Flagship: `tinystack`

One public repo containing your own ML stack built from nothing but numpy — a math/linalg toolkit, the classical ML canon, a tensor-valued autograd engine, an MLP library on top of it, and a PyTorch training harness that reproduces everything.

**Minimum viable DoD (a slipped week degrades to this, not to nothing):**
- Autograd engine passes numerical gradient checks and matches `torch.autograd` (**float64, rel. error < 1e-6** — in float32 use 1e-4; the 1e-6 float32 bar fails spuriously).
- An MLP on your engine trains MNIST to **≥97.5%** with your own training loop, mini-batching, Adam, LR decay.
- The 5 core classical algorithms within **2% of sklearn** on standard benchmarks, results table in the README.

**Full DoD adds:**
- PyTorch harness (config-driven, checkpointing, W&B, mixed precision) reproducing MNIST + CIFAR-10 (MLP ≥60% or basic convnet ≥75%).
- README derivations of backprop, the logistic-regression gradient, and the gradient-boosting update — from memory.
- `pytest` suite + **GitHub Actions CI (pytest + ruff) + pre-commit** — this CI template is inherited by every later repo; four green-CI repos is a stronger hiring signal than one.

---

## Week 1 (Jul 20–26): Math for ML, Used in Anger

A week of content honestly scoped — the math-rehab trap is doing a semester's exercises in a week. **Core is the milestone check, nothing more.**

**Objectives:** matrix fluency (rank, projections, eigendecomposition, SVD — geometrically and in ML terms); gradients of vector/matrix expressions (the exact skill backprop needs); probability rebuilt (Bayes, expectation, Gaussians, MLE); entropy/cross-entropy/KL and why cross-entropy is *the* loss.

**Resources (core):**
- **3Blue1Brown, *Essence of Linear Algebra*** (full playlist ~3 hrs at 1.5×) — watch *before* reading, not after.
- ***Mathematics for Machine Learning*** (Deisenroth et al., free at mml-book.github.io): **Ch. 2, 5, 6 + a skim of Ch. 4.** Exercises: a **curated ~15-problem subset** (the ones touching projections, gradients, MLE), not every problem — Ch. 5's full exercise set alone would eat three days.
- **Parr & Howard, *The Matrix Calculus You Need For Deep Learning*** (explained.ai) — **entirely, on paper. This is the week's non-negotiable core.**
- **Chris Olah, *Visual Information Theory*** (colah.github.io).
- *Optional:* MacKay Ch. 2 if information theory grabs you. *Fallback:* Imperial's Coursera linear-algebra course at 1.5× only if MML Ch. 2 is a wall.

**Build — `tinystack/mathlib`:**
- From scratch in numpy (basic ops only; `np.linalg` only to verify): Gram-Schmidt/QR, power iteration, **PCA via your own eigendecomposition**, **SVD image compression** (rank 5/20/50, plot reconstruction error), least squares via normal equations *and* gradient descent.
- A **numerical gradient checker** (central differences, float64) — production quality; Week 3 depends on it.
- MLE for a Gaussian; entropy/CE/KL between empirical distributions. *Naive Bayes spam classifier: 2-hour timebox or skip.*
- Pen-and-paper: normal equations, **softmax + cross-entropy gradient (∂L/∂logits = p − y — cold, no reference)**, Gaussian MLE.

**Cut line:** if behind Thursday — cut MacKay, Naive Bayes, and the Ch. 4 skim. Never cut Parr & Howard or the gradient checker.

> **Milestone (end of Week 1):** SVD image compression from scratch in under an hour; softmax+CE gradient derived on a whiteboard with no reference. Either fails → one extra day on Parr & Howard before Week 2.

---

## Week 2 (Jul 27 – Aug 2): Classical ML from Scratch

**Objectives:** implement the classical canon in numpy; internalize bias-variance and regularization by *observing* them in your own code; learn what data leakage looks like from the inside; run your first statistical significance test; read your first real papers.

**Resources (core):**
- **Stanford CS229 main lecture notes** (cs229.stanford.edu/main_notes.pdf): supervised learning, generative learning, kernels (conceptual), EM. Read notes, skip videos.
- ***Elements of Statistical Learning***: Ch. 9.2 (trees), 10.1–10.10 (boosting) — read *after* your first implementation, not before.
- **Papers:** Breiman *Random Forests* (2001); Chen & Guestrin *XGBoost* (2016). Half-page note each.

**Build — `tinystack/classical` (~60% of the week is coding):**

*Core five, each validated against sklearn:*
1. Linear + ridge regression (closed form and SGD) — California Housing.
2. Logistic regression with L2, gradient derived by hand first — breast cancer.
3. Decision tree (CART, gini + entropy, **classification only** — regression trees add a day for little learning).
4. **Gradient boosting** — trees on residuals/negative gradients, shrinkage, early stopping. The crown jewel. Bar: **within 2% of sklearn's `GradientBoostingClassifier` on a clean benchmark** (breast cancer / covertype subset). *Not* "beat XGBoost on Kaggle" — that's a hyperparameter fight, not a learning objective.
5. k-means with k-means++ init.

*Half-day wrapper:* random forest (bagging + feature subsampling over your tree). *Optional stretch:* linear SVM via hinge-loss SGD; GMM with EM. Cut both without guilt — the concepts are in CS229 notes.

*The three labs that separate you from tutorial-land:*
- **Messy-data lab (1 day):** take one algorithm to a *raw* Kaggle tabular dataset — missing values, categorical encoding, feature engineering, pandas fluency. All-sklearn-clean data for 16 weeks is how people ship leakage in production.
- **Leakage lab (half day):** deliberately build target leakage and preprocessing-before-split; watch cross-validation lie to you. You never forget a leak you built yourself.
- **Statistics lab (half day):** bootstrap + permutation tests on your own model comparisons — "is this 0.4% CV improvement real?" Every eval number you publish from Week 11 onward carries a CI; the habit starts here.
- Plus: your own k-fold CV utility; bias-variance experiment (train/val error vs. tree depth and polynomial degree).

**Cut line:** cut SVM, GMM, and the RF wrapper. Never cut gradient boosting, the leakage lab, or the stats lab.

> **Milestone (end of Week 2):** your GBM within 2% of sklearn on a held-out benchmark; you can explain precisely why boosting reduces bias while bagging reduces variance; given two CV scores, you can say whether the difference is significant and show the bootstrap.

---

## Week 3 (Aug 3–9): Optimization, Neural Nets & Backprop from Scratch

The month's crown jewel and its most common overrun. Weeks 1–2 were pre-cut to protect it — if it takes 8–9 days, let it.

**Objectives:** build a working reverse-mode autodiff engine; understand backprop deeply enough to reinvent it; SGD/momentum/Adam, schedules, initialization — implemented, not read about.

**Resources (core):**
- **Karpathy, *building micrograd*** (Zero to Hero, 2h25m). Watch, then **rebuild micrograd from memory with the video closed** — the rebuild is the exercise.
- **CS231n notes** (cs231n.github.io): *Backprop Intuitions*, *Optimization*, *Neural Nets 1–2* (activations, init, losses). (*Neural Nets 3* — babysitting training — is Week 4's read.)
- **Karpathy, *Yes you should understand backprop*** (blog).
- **Paper:** Kingma & Ba, *Adam* (2015) — read once, implement from the pseudocode alone. (It does not reappear in Month 2; one honest read now.)

**Build — `tinystack/autograd` + `tinystack/nn`:**
1. Scalar autograd (micrograd-class): `Value`, topological sort, backward; tiny MLP on two-moons.
2. **Tensor upgrade (the real work):** `Tensor` wrapping numpy — matmul, **broadcasting (getting its gradient right is where everyone bleeds — budget for it)**, ReLU/tanh, softmax, log, sum/mean, cross-entropy. Every op's backward verified with the Week 1 checker, **in float64, rel. error < 1e-6**.
3. `nn` layer: Linear, MLP container, SGD/Momentum/Adam, step + cosine schedules, He/Xavier init, minibatch loader.
4. **Train MNIST to ≥97.5% on nothing but your own stack.**
5. *The optimizer/init ablation grid ({SGD, momentum, Adam} × {good, bad init} × 3 LRs) moves to Week 4's ship days — don't run it now.*

**Cut line:** cut dropout/L2 extras and the ablation grid. Never cut the tensor engine or the MNIST run.

> **Milestone (end of Week 3):** engine matches `torch.autograd` on 20+ ops (float64, <1e-6); MNIST ≥97.5% on your own stack; you can write the backward pass for a broadcasted matmul on paper.

---

## Week 4 (Aug 10–16): PyTorch Fluency + Training Craft — SHIP WEEK

Mon–Thu new material; Fri–Sun ship, rep, publish. (Ship-week rules: operating system §2.)

**Objectives:** map everything from Week 3 onto PyTorch's abstractions; build the training harness you'll use for three months; learn to read a sick training run.

**Resources (core):**
- **Jeremy Howard, *What is torch.nn really?*** (pytorch.org/tutorials) — builds `nn.Module` up from raw tensors, exactly mirroring your Week 3 arc. Type every line.
- **Karpathy, *makemore Part 3: Activations & Gradients, BatchNorm*** — the single best hour on training dynamics. **Skip Parts 1–2** (bigram/MLP are redundant after your engine); read Bengio et al. 2003 (*A Neural Probabilistic Language Model*) alongside instead — it plants Month 2's seed.
- **Karpathy, *A Recipe for Training Neural Networks*** (2019). Read twice this week; it becomes your pre-flight checklist file in Week 8. Read *CS231n Neural Nets 3* with it.

**Build (Mon–Thu) — `tinystack/torch`:**
1. Port the Week 3 MNIST MLP to PyTorch; verify results match your engine. Implement one custom `torch.autograd.Function` to close the loop.
2. **The harness:** YAML/argparse config, seeded reproducibility, checkpoint/resume, **W&B logging (learn it now; mandatory on every run from Week 5)**, `torch.amp` mixed precision, grad clipping, schedulers, proper `Dataset`/`DataLoader`.
3. **CIFAR-10 through the harness:** MLP ≥60%, then a 4–6 layer convnet ≥75% — treat `nn.Conv2d` as a black box (CNN theory is Week 5); the point is training craft: overfit a single batch first, LR-find, read curves per the Recipe.
4. Reproduce makemore-Part-3's diagnostic plots (activation histograms, gradient/update ratios) on your own MLP.
5. **CI:** add GitHub Actions (pytest + ruff) + pre-commit to tinystack (~2 hrs). Save as a template repo.

**Ship days (Fri–Sun):**
- Run the Week 3 ablation grid through the harness; write up which configs failed and why.
- **Timed rep #1 (closed book): complete PyTorch training loop — model, data, AMP, logging, eval — from an empty file in under 30 minutes. Do it twice.**
- Ship `tinystack`: tests green, CI green, README with benchmark tables + derivations. Public.
- Sunday: monthly-review blog post with real numbers.

> **Month 1 exit gate:** (a) engine matches PyTorch to float64-1e-6 and trained MNIST ≥97.5%; (b) the 30-minute blank-file training loop rep, passed; (c) shown a pathological loss curve or activation histogram, you name 2 likely causes and fixes. **If (a) or (b) fails, delay Month 2 by 2–3 days and fix it — everything downstream stands on this.**

---

## Rules for the month

- **No sklearn except as a grading oracle.** No reference implementations — struggle, then peek at *one function*, close the tab, rewrite from memory.
- **Overfit a single batch before every real training run.**
- **Anki daily (~20 min):** every derivation, every "why" (why cross-entropy, why He init, why Adam's bias correction). Month 3 you will thank yourself.
- **Skip entirely this month:** measure theory, convex-optimization proofs, kernel theory beyond CS229's treatment, anything CNN/RNN/transformer. It's all coming — resist.
