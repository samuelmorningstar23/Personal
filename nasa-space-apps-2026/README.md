# NASA Space Apps Challenge 2026 — "Flame in Freefall" brief for Team Codeblooded (Amaravati)

Compiled 1 Nov 2026 from the official Space Apps site, NASA pages and the NASA Physical Sciences Informatics (PSI) repository.
Everything below is public information. Where something is unverified or not yet published it is marked as such.

Contents of this folder:

| File | What it is |
|---|---|
| `README.md` | This brief |
| `psi_api.py` | Tiny Python client for the PSI JSON endpoints (search, record, file tree, signed download URL) |
| `data/psi_combustion_investigations.json` / `.csv` | All 24 Combustion Science investigations in PSI, with objectives, approach, hardware, keywords and links |

---

## 1. The hackathon at a glance

| Item | Detail |
|---|---|
| Event | 2026 NASA International Space Apps Challenge, theme **"The Next Frontier"** |
| Hackathon dates | **Sat 14 – Sun 15 November 2026** |
| Project submission window | Opens **14 Nov 9:00 AM local**, closes **15 Nov 11:59 PM local** (deadline tied to your Local Event's time) |
| Challenges | 14 official challenges written by NASA and partner-agency experts |
| Space Agency Partners | 17 (ISRO is one of them, alongside ESA, JAXA, CSA, UKSA, KASA, MBRSC, etc.) |
| Scale | 450+ Local Events plus the virtual Universal Event; 11,638 teams listed on Find-a-Team as of 1 Nov |
| Team size | 1–6 for Local Event teams (2–6 for Universal). Recommended 4–5. One team, one challenge per person. |
| Cost | Free. Report anyone asking for money to info@spaceappschallenge.org |
| Terminology | The 2026 FAQ says "Super Intelligence (SI)" replaces "Artificial Intelligence (AI)" in official wording (citing a 29 Sep 2026 US Executive Order). The challenge title uses "SI-Powered". Every submission must describe how SI/AI tools were used. |

### Official timeline

| Date | Milestone |
|---|---|
| 26 Aug 2026 | Registration opened (stays open through 15 Nov) |
| 17 Sep 2026 | Challenge summaries published; team formation opened |
| 28 Oct 2026 | Full challenge statements published |
| 3 Nov 2026 | **Space Apps Connect** (official chat platform) opens, incl. Find-a-Team channel; closes when hackathon ends |
| **13 Nov 2026** | **Challenge Resources tab goes live**, plus the Project Submission Guide, Judging & Awards Guide and Global Offers |
| 14–15 Nov 2026 | Hackathon. No project work may start before 14 Nov 9:00 AM local. |
| 30 Nov 2026 | Participant survey due |
| Dec 2026 | Global Nominees, Global Finalists and Honorable Mentions announced |
| Jan 2027 | Global Winners announced |

Key official links:
- 2026 hub: https://www.spaceappschallenge.org/2026/
- Challenges: https://www.spaceappschallenge.org/2026/challenges/
- Participant FAQs: https://www.spaceappschallenge.org/resources/participant-faqs/
- Team Formation Guide: https://www.spaceappschallenge.org/resources/team-formation-guide/
- Awards: https://www.spaceappschallenge.org/awards/
- Legal / Participant Terms: https://www.spaceappschallenge.org/legal/
- Space Agency Partners: https://www.spaceappschallenge.org/2026/space-agency-partners/
- Announcement blog: https://www.spaceappschallenge.org/blog/explore-the-next-frontier-at-the-2026-nasa-space-apps-challenge/

---

## 2. Our team and local event

### Team Codeblooded
- Team page: **https://www.spaceappschallenge.org/2026/find-a-team/code-blooded2/** (listed under the Amaravati event's Teams tab).
- The slug ends in `2`, which means another team already took `code-blooded`. Make sure teammates join *this* page.
- Team details (members, chosen challenge, bio) were not visible without logging in, so I could not confirm the challenge is set. **Action:** Team Owner → team page → About → Edit Details → confirm challenge = *Flame in Freefall*. The owner can change the challenge any time up to the end of the hackathon.
- All members must be registered for the **same** Local Event (Amaravati) to be eligible for awards.
- Fill in the **Team Contact Information** field (only members can see it) so everyone can reach each other.

### Amaravati Local Event
- Page: https://www.spaceappschallenge.org/2026/local-events/amaravati/
- Tagline: "Build Beyond Boundaries". Amaravati, Andhra Pradesh, India. **14–15 Nov 2026**.
- Format: **In-person only.**
- Local Lead (official): **Shivansh Shukla**. A LinkedIn listing also names Deepthi Godavarthi as a lead and VIT-AP University as the host; the official page does not yet confirm a host or venue, so treat that as unverified.
- **Venue: not yet announced.** The page explicitly asks participants not to travel until it is posted. Watch the event page and your registered email.
- Registration: official site registration is mandatory; a separate local form may follow later (fill it only after official registration). Participation is free.
- Expected schedule (not yet confirmed): check-in → welcome/orientation → challenge exploration → team formation → hacking + mentor sessions → project submission → presentations → judging and recognition → closing.
- Teams registered at Amaravati as of 1 Nov: **41**.
- Note: Amaravati is organised by a local volunteer team, not by Unique World Robotics (UWR), which runs 20 other Indian/European events (spaceappsindia.com). UWR's bootcamps are for their own locations.

---

## 3. The challenge: Flame in Freefall — SI-Powered Fire Safety Insights from Microgravity Combustion Data

Official page: https://www.spaceappschallenge.org/2026/challenges/flame-in-freefall/
Teams on this challenge as of 1 Nov: **780** (out of 11,638 total), so expect lots of competition on the same dataset.

### Summary (official)
NASA has decades of microgravity flame and fire experiments, and the body of results is now large enough that it is hard to find, compare and interpret. The challenge: **build an interactive, SI-powered web dashboard that summarises, ranks and interprets NASA's microgravity combustion investigations to deliver fire-safety insights for human space exploration** (Moon, Mars and beyond).

### Background (official, condensed)
- **Why it matters:** Artemis II's commander reported a smoke alarm ~80,000 miles from Earth; Apollo 13 survived an oxygen-tank explosion; Mir survived an oxygen-generator fire; the Apollo 1 crew died in a 1967 pre-launch fire in an oxygen-filled cabin.
- **Physics:** With no buoyancy, hot gases do not rise. A candle flame becomes a dim spherical blue flame fed only by diffusion.
- **NASA's three fire-safety pillars and the experiments behind them:**
  - *Prevention* (ignition control + material selection by flammability limits; oxygen concentration and airflow matter): **BASS, BASS-II**, **Saffire-I/II/III**.
  - *Detection*: **SAME, SAME-R** (smoke aerosol measurement).
  - *Suppression*: **FLEX** (diluting the atmosphere with CO2 and helium).
- Planned Moon Base and pressurised rover atmospheres will have **higher O2 and lower pressure** than Earth's, which makes materials more flammable.

### Objectives (official)
Data lives in NASA's **Physical Science Informatics (PSI)** database, which is public but hard to search and compare. The dashboard should let users:
1. **Find** investigations relevant to habitable crew environments (spacecraft, stations, lunar/Martian surface bases, pressurised rovers).
2. **Extract data** for predictive modelling of flammability and fire scenarios.
3. **Identify research** that informs next-generation fire-safety controls and equipment.

Optional: show how PSI data applies to fire safety **on Earth** (fine-water-mist extinguishers first developed for ISS, NASA-derived smoke detection, firefighter protective clothing and air tanks).

Out of scope: rocket/propellant fire safety (not in PSI; engine combustion is essentially gravity-independent).

### Potential considerations (official)
- **Audience:** professors, graduate and undergraduate students, aerospace researchers and engineers.
- **Attributes worth surfacing per investigation:** experimental objectives; fuels (sample/burner shape and size); test conditions (O2 concentration, airflow speed); which variables changed vs stayed fixed across tests; sensors/measurement types; similarities and differences between investigations.
- **Other PSI investigations to consider:** **DAFT / DAFT-2** (re-used the SAME smoke-detection instrument to detect dust); **BRE** (Burning Rate Emulator, part of ACME: material flammability in still atmospheres via a gaseous burner); other PSI combustion investigations may be indirectly relevant.
- **Hardware groupings** (useful for comparison features):
  - **ACME** – six gaseous-fuel experiments, one modular hardware set in the **Combustion Integrated Rack (CIR)**.
  - **Liquid droplets** – FLEX, FLEX-2, CFI on the **Multi-user Droplet Combustion Apparatus (MDCA)** in the CIR.
  - **Solid + gaseous fuels** – BASS, BASS-II, SPICE, SLICE in the **Microgravity Science Glovebox (MSG)** using the fan-driven flow duct built for SPICE.
- **Oxygen context:** spacesuits run 100% O2 at 4.3 psi (Earth sea level 14.7 psi); crews pre-breathe pure O2 to avoid decompression sickness. Moon Base / rovers expected at **≥30% O2 and ≤10.2 psi**, i.e. 40%+ more oxygen than Earth air. Highest-O2 microgravity tests: **CFI-G (ACME)**, with up to 85% O2 flowing from a spherical burner into a fuel/N2 atmosphere ("inside-out" flame).
- **Partial gravity:** PSI has **no partial-gravity combustion data yet**. Future sources: **LUCI** (lunar-g on a spinning New Shepard flight) and **FM2** (Flammability of Materials on the Moon, CLPS lander). ACME **E-FIELD Flames** mimics partial gravity with electric fields acting on flame ions. Microgravity + 1-g results can bound intermediate-gravity behaviour.
- **Data sources:** "the Resources tab on the challenge page" — **currently says "Resources will be available on Friday, November 13."** Re-check that tab on 13 Nov; the list below is what the statement itself points to.

---

## 4. Data and resources you can use today

### 4.1 PSI — the primary dataset (public, no login)
- Portal: https://psi.nasa.gov/ → search: https://psi.nasa.gov/physci/repo/search?q=combustion&data_source=psi&data_type=investigation
- PSI database tutorial (PDF): https://assets.science.nasa.gov/content/dam/science/bps/bps-general/bps-data_osdr_psi/Complete_PSI_Database_Guide.pdf
- PSI history / BPS data overview: https://science.nasa.gov/biological-physical/data/
- Citation rule: NASA requires citing each investigation by its DOI ("Cite this Investigation" on each record). Licence seen on BASS-II and FLEX: **CC0-1.0**.
- Size: **133 investigations total**, **24 in Combustion Science** (plus PSI-179 "Aerosol Sampling Experiment" under Soft Matter, which matches smoke/aerosol keywords).

**JSON endpoints the PSI web app uses** (all verified working on 1 Nov; see `psi_api.py`):

| Purpose | Request |
|---|---|
| Search / list investigations | `GET https://psi.nasa.gov/geode-py/ws/repo/search?term=<q>&source=psi&type=investigation&size=500&from=0&sort=Public%20Release%20Date&order=desc` → Elasticsearch-style `hits.hits[]._source` with fields `Accession, Title, Acronym, Research Area, SubResearch Area, Project Type, Objectives, Approach, Hypothesis, Keywords, Experiment Hardware, Flight Platform, Related Investigations, Publication Title, Publication Author List, Research Impacts/Earth Benefits, Investigation Start/End Date, Public Release Date, Person, Thumbnail` |
| Filter vocabularies | `GET https://psi.nasa.gov/geode-py/ws/repo/filter-options` |
| Full record | `GET https://psi.nasa.gov/geode-py/ws/repo/investigations/PSI-25` → `objective, approach, hypothesis, researchImpacts, doi, licenseIdentifier, experimentHardware, experimentalTable, publications[] (with DOIs), contacts[], totalFileSize, version` |
| File tree | `POST https://psi.nasa.gov/geode-py/ws/files/v2` body `{"folder":"PSI-25/","fileType":"study","studyId":"PSI-25","version":4,"obfuscationcode":""}` |
| Signed download URL | `GET https://psi.nasa.gov/geode-py/ws/studies/PSI-25/download?file=PSI-25_Experimental%20table_BASS-II.csv&version=1&redirect=false` → returns a short-lived S3 URL |

What a record looks like (BASS-II, PSI-25): DOI 10.60555/4qc4-de67, 255.77 GB total, folders *Investigation Metadata, Engineering Documents, Raw Data (per PI: Bhattacharjee, Ferkul, Fernandez-Pello, Miller, Olson, T'ien), Reference Data, Science Documents (test matrices, SRD, ReadMe), Reports (summary report PDF), Representative Images, Experimental table*. The **Experimental table CSV has 130 test rows** with columns: PI, Test #, Date, GMT, Sample #, Fuel Sample Material, Flow restrictor, Fan display, Air display, Radiometer gain, Total Frames Shot, calibrated initial/final O2 %, initial/final CO2 %, initial/final CO ppm. FLEX (PSI-69) has 923 GB of files and 51 linked publications. The small files (experimental tables, ReadMe, test matrices, summary reports) are what a dashboard needs; you do not need the raw video.

**The 24 PSI Combustion Science investigations** (full fields in `data/`):

| ID | Acronym | Title | Type | Sub-area | Hardware |
|---|---|---|---|---|---|
| [PSI-10](https://psi.nasa.gov/physci/repo/data/investigations/PSI-10) | ACME/Flame Design | ACME / Flame Design | Microgravity | Flames of gaseous fuels | ACME in CIR |
| [PSI-20](https://psi.nasa.gov/physci/repo/data/investigations/PSI-20) | ACME BRE | ACME – Burning Rate Emulator | Microgravity | Flames of gaseous fuels (fire prevention) | ACME in CIR |
| [PSI-21](https://psi.nasa.gov/physci/repo/data/investigations/PSI-21) | ACME CLD Flame | ACME / Coflow Laminar Diffusion Flame | Microgravity | Flames of gaseous fuel | ACME in CIR |
| [PSI-22](https://psi.nasa.gov/physci/repo/data/investigations/PSI-22) | ACME E-FIELD Flames | ACME – Electric-Field Effects on Laminar Diffusion Flames | Microgravity | Laminar flames | ACME in CIR |
| [PSI-23](https://psi.nasa.gov/physci/repo/data/investigations/PSI-23) | ACME s-Flame | ACME – Structure and Response of Spherical Diffusion Flames | Microgravity | Flames of gaseous fuels | ACME in CIR |
| [PSI-25](https://psi.nasa.gov/physci/repo/data/investigations/PSI-25) | BASS-II | Burning and Suppression of Solids – II | Microgravity | Spacecraft Fire Safety | MSG flow duct |
| [PSI-26](https://psi.nasa.gov/physci/repo/data/investigations/PSI-26) | BASS | Burning and Suppression of Solids | Microgravity | Spacecraft Fire Safety | MSG flow duct |
| [PSI-39](https://psi.nasa.gov/physci/repo/data/investigations/PSI-39) | CFI | Cool Flames Investigation | Microgravity | Droplets | MDCA in CIR |
| [PSI-47](https://psi.nasa.gov/physci/repo/data/investigations/PSI-47) | DAFT / DAFT-2 | Dust and Aerosol Measurement Feasibility Test | Microgravity | Spacecraft Fire Safety | TSI P-Trak |
| [PSI-60](https://psi.nasa.gov/physci/repo/data/investigations/PSI-60) | — | Computational and Experimental Analysis of SPICE Data Sets | Ground | Gaseous | — |
| [PSI-62](https://psi.nasa.gov/physci/repo/data/investigations/PSI-62) | — | Concurrent Flame Spread Modeling (FGM) vs BASS experiments | Ground | Spacecraft Fire Safety | — |
| [PSI-68](https://psi.nasa.gov/physci/repo/data/investigations/PSI-68) | FLEX-2 | Flame Extinguishment Experiment – 2 | Microgravity | Spacecraft Fire Safety | MDCA in CIR |
| [PSI-69](https://psi.nasa.gov/physci/repo/data/investigations/PSI-69) | FLEX | Flame Extinguishment Experiment | Microgravity | Spacecraft Fire Safety | MDCA in CIR |
| [PSI-98](https://psi.nasa.gov/physci/repo/data/investigations/PSI-98) | SAFFIRE-I | Spacecraft Fire Safety Experiment-I | Microgravity | Spacecraft fire, smoke distribution | Cygnus enclosure |
| [PSI-99](https://psi.nasa.gov/physci/repo/data/investigations/PSI-99) | SAFFIRE-II | Spacecraft Fire Experiment-II | Microgravity | Surface combustion | Cygnus enclosure |
| [PSI-100](https://psi.nasa.gov/physci/repo/data/investigations/PSI-100) | SAFFIRE-III | Spacecraft Fire Experiment-III | Microgravity | Spacecraft Fire Safety | Cygnus enclosure |
| [PSI-101](https://psi.nasa.gov/physci/repo/data/investigations/PSI-101) | SAME-R | Smoke Aerosol Measurement Experiment – Reflight | Microgravity | Spacecraft Fire Safety | MSG |
| [PSI-102](https://psi.nasa.gov/physci/repo/data/investigations/PSI-102) | SAME | Smoke and Aerosol Measurement Experiment | Microgravity | Spacecraft Fire Safety | MSG |
| [PSI-106](https://psi.nasa.gov/physci/repo/data/investigations/PSI-106) | SLICE | Structure and Liftoff In Combustion Experiment | Microgravity | — | MSG flow duct |
| [PSI-107](https://psi.nasa.gov/physci/repo/data/investigations/PSI-107) | SPICE | Smoke Point In Co-flow Experiment | Microgravity | Fire Safety | MSG flow duct |
| [PSI-115](https://psi.nasa.gov/physci/repo/data/investigations/PSI-115) | — | SAME data for modelling smoke generation in microgravity | Ground | Smoke aerosol simulation | — |
| [PSI-117](https://psi.nasa.gov/physci/repo/data/investigations/PSI-117) | — | Thermo-convective perturbation of cool flames (CFD on FLEX data) | Ground | Droplet | — |
| [PSI-142](https://psi.nasa.gov/physci/repo/data/investigations/PSI-142) | — | Cool-flame transitions at radiation/stretch extinction (FLEX data) | Ground | Spacecraft Fire Safety | PI lab |
| [PSI-159](https://psi.nasa.gov/physci/repo/data/investigations/PSI-159) | ACME CFI-G | ACME / Cool Flames Investigation with Gases | Microgravity | Flames of gaseous fuels | ACME in CIR |

"Related Investigations" links in the records already form a graph (e.g. Saffire-I → Saffire-II, -III, BASS; DAFT → SAME; ground CFD studies → the flight data they reuse). That is a ready-made "similar investigations" feature.

Not in PSI (yet) but part of the story: **SoFIE** (Solid Fuel Ignition and Extinction, currently flying in the CIR: RTDFS, NCA, GEL, MIST, plus SIBAL-fabric work), **FLARE** (JAXA-led reduced-g flammability-limit correlation), **LUCI** (lunar-g flights on New Shepard, 2025), **FM2** (first combustion experiment on another planetary body, CLPS CP-21 lander, planned late 2026), **Saffire-IV/V/VI** (results so far on NTRS, not in PSI).

### 4.2 NASA background pages and fact sheets
- NASA Glenn Combustion Science hub (current + archived experiments, CIR, MDCA): https://www.nasa.gov/glenn/glenn-expertise-space-exploration/physical-sciences-program/combustion-science/
- Fact-sheet PDFs: [BASS](https://www.nasa.gov/wp-content/uploads/2025/07/burning-and-suppression-of-solids-bass.pdf) · [Saffire](https://www.nasa.gov/wp-content/uploads/2025/07/spacecraft-fire-safety-demonstration-saffire.pdf) · [SAME](https://www.nasa.gov/wp-content/uploads/2025/07/smoke-aerosol-measurement-experiment-same.pdf) · [FLEX](https://www.nasa.gov/wp-content/uploads/2025/07/flame-extinguishment-experiment-flex.pdf) · [ACME](https://www.nasa.gov/wp-content/uploads/2025/07/advanced-combustion-via-microgravity-experiments-acme.pdf) · [SLICE](https://www.nasa.gov/wp-content/uploads/2025/07/structure-liftoff-in-combustion-experiment-slice.pdf)
- FM2: https://www.nasa.gov/glenn/glenn-expertise-space-exploration/physical-sciences-program/combustion-science/flammability-of-materials-on-the-moon-fm2/
- SoFIE: https://www.nasa.gov/glenn/glenn-expertise-space-exploration/physical-sciences-program/combustion-science/solid-fuel-ignition-and-extinction-sofie/
- FLARE: https://www.nasa.gov/glenn/glenn-expertise-space-exploration/physical-sciences-program/combustion-science/flammability-limits-at-reduced-g-experiment-flare/
- ACME mission page (lists the five/six experiments): https://science.nasa.gov/mission/acme
- Fluids & Combustion Facility / CIR: https://www1.grc.nasa.gov/space/iss-research/iss-fcf/cir/acme/ and https://www.nasa.gov/glenn/glenn-expertise-space-exploration/physical-sciences-program/fluids-combustion-facility/
- MDCA: https://www.nasa.gov/glenn/glenn-expertise-space-exploration/physical-sciences-program/combustion-science/multi-user-droplet-combustion-apparatus-mdca/
- BPS Combustion Science focus area (with a long publication list): https://science.nasa.gov/biological-physical/focus-areas/combustion-science/
- NASA Space Station Research Explorer (per-experiment pages, publications): https://www.nasa.gov/mission/station/research-explorer/
- Microgravity Analytics Tool (PSI-funded beta by G-SPACE): https://science.nasa.gov/physical-sciences-informatics-psi/microgravity-analytics-tool/
- Open Science Data Repository (sister repo to PSI): https://osdr.nasa.gov/

### 4.3 Literature via the NTRS API (public JSON)
- `GET https://ntrs.nasa.gov/api/citations/search?q=microgravity%20combustion%20spacecraft%20fire%20safety&page.size=25` → 109 hits on 1 Nov; each result has `id`, `title`, abstract, authors, and `downloads` with PDF links at `https://ntrs.nasa.gov/api/citations/<id>/downloads/<file>`.
- Useful records: LUCI results ([NTRS 20250010653](https://ntrs.nasa.gov/citations/20250010653)), FM2 LPSC 2026 abstract ([NTRS 20260000646](https://ntrs.nasa.gov/api/citations/20260000646/downloads/Ferkul-Lunar%20and%20Planetary%20Science%20Conference%202026.pdf)), Saffire IV–V ([NTRS 20210017780](https://ntrs.nasa.gov/citations/20210017780)), Saffire VI ([NTRS 20240002981](https://ntrs.nasa.gov/citations/20240002981)), BASS-II overview ([NTRS 20210011385](https://ntrs.nasa.gov/citations/20210011385)).
- NASA-STD-6001 (the 1-g material flammability screening standard every experiment compares against) is the reference point for "does microgravity make this material more dangerous?".

### 4.4 What is still to come
- **13 Nov:** official Resources tab on the challenge page, Project Submission Guide, Judging & Awards Guide, Global Offers (free credits/tools from Global Collaborators: GoDaddy, Google, Meteomatics, Microsoft, Miro).
- **3 Nov:** Space Apps Connect opens; NASA subject-matter experts answer challenge/data questions there during the week before and during the hackathon.

---

## 5. How you will be judged

Local judges score first; each Local Event sends **Global Nominees**; NASA and partner SMEs pick **Global Finalists** and **Honorable Mentions**; an executive committee picks **10 Global Winners**, one per award.

**The five criteria** (named in the official Project Submission Guide; definitions below are the wording used on prior-year official pages, so confirm against the 2026 Judging & Awards Guide on 13 Nov):
1. **Impact** – How much impact (quality and quantity) can the project have? Big problem or little problem? Will it inspire or help many people?
2. **Creativity** – How innovative is the approach? New, or an incremental improvement on something existing?
3. **Validity** – Is it scientifically valid? Will it do what it says? Could it work in the real world?
4. **Relevance** – Does it respond to the challenge statement? Is it a complete solution? Does it use NASA (or other open) data?
5. **Presentation** – How well does the team tell the story: the challenge, the solution, and why it matters?

**The 10 Global Awards:** Best Use of Science · Best Use of Data · Best Use of Technology · Galactic Impact · Best Mission Concept · Most Inspirational · Best Use of Storytelling · Global Connection · Art & Technology · Local Impact.
For this challenge the natural targets are **Best Use of Data** and **Best Use of Science**; 2025's Best Use of Science winner was a "Space Biology Knowledge Engine" built on NASA's OSDR, which is the closest analogue to this challenge.

**Submission essentials (from the FAQ/Team Guide; details land 13 Nov):** submit through the **Project tab on the team page** before your Local Event's deadline; complete all required fields; include a project demo and a final project link; **describe how SI/AI tools were used**; use open data and cite it (PSI DOIs). Participants under 18 must not appear in demos. Certificates appear on each profile after submission.

---

## 6. Practical notes for the build

- The challenge is explicit about the product: an **interactive web dashboard** that *summarises, ranks and interprets* investigations. Search + filter + compare + "why this matters for a Moon base" explanations map directly onto the stated objectives.
- Cheap, high-value features from the data above: filter by **environment relevance** (habitat / rover / suit O2 levels vs the O2 % tested), by **hardware family** (CIR-ACME, CIR-MDCA, MSG duct, Cygnus), by **fire-safety pillar** (prevention / detection / suppression), and a **related-investigations graph** from PSI's own links.
- Pre-stage the small PSI files (experimental tables, test matrices, ReadMe, summary reports) and the record JSON; do not plan on downloading the raw video (BASS-II 256 GB, FLEX 924 GB).
- Partial gravity is a stated gap: a "what we can and cannot say about lunar gravity" panel bounded by 1-g and 0-g data, pointing at LUCI/FM2, speaks straight to the statement.
- Ground CFD studies (PSI-60, -62, -115, -117, -142) reuse the flight data; they are good evidence for the "extract data for predictive modelling" objective.
- No work on the project before 14 Nov 9:00 AM local. Reading, planning and learning the data are allowed; building is not.

---

## 7. Public repos from other teams on this challenge (for awareness only)
Found via web search; some are early-stage. Do not copy; use them to see what the crowd is converging on.
- https://github.com/Faruk042/NASA_Flame_In_Freefall_2026
- https://github.com/nergisRahimzade/NASA-Space-Apps-Challenges-2026---Flame-in-Freefall
- https://github.com/samuelakosaonyejekwe/flame-in-freefall
- https://github.com/ngu-ming-henn/Nasa-Space-Apps-Sarawak (BASS-II 129-test dashboard, Streamlit)
- https://github.com/Tarek-Ahmed303/flame-in-freefall

---

## 9. Existing dashboards of this kind (surveyed 1 Nov 2026)

### 9.1 NASA's own tools, i.e. the baseline the challenge says is "hard to find, compare and interpret"
| Tool | What it does | Why it matters to us |
|---|---|---|
| [PSI Data Repository](https://psi.nasa.gov/physci/repo/) | Keyword search, research-area filters, per-investigation pages with an experimental-table viewer, file browser and publication list | This *is* the thing to improve on. It has no cross-investigation comparison, no ranking, no interpretation, no habitat context. |
| [Microgravity Analytics Tool / ATOM](https://science.nasa.gov/physical-sciences-informatics-psi/microgravity-analytics-tool/) by G-SPACE (NASA PSI ROSES grant, beta, login at atom.g-space.com) | Image/video analytics on PSI data: "Delta-to-Gravity" space-vs-Earth comparison, automated video segmentation, side-by-side and time-lapse analysis ([NASA feature](https://science.nasa.gov/biological-physical/making-space-science-data-smarter-inside-the-microgravity-analytics-tool/)) | Closest NASA-funded "AI on PSI" product. It is about pixels, not about summarising or ranking investigations, so it does not cover this challenge. |
| [OSDR Visualization Portal](https://visualization.osdr.nasa.gov/) | NASA's biology-side dashboards: multi-study visualisation portal, RadLab, Environmental Data App, data APIs | Shows what NASA itself considers a "data dashboard". Nothing equivalent exists for PSI physical sciences. |
| [Space Station Research Explorer](https://www.nasa.gov/mission/station/research-explorer/) | Per-experiment pages: objectives, operations, publications, related experiments | Good secondary source for descriptions and publication lists. |

Bottom line: there is **no NASA dashboard that summarises, ranks or interprets the combustion investigations**. The gap in the challenge statement is real.

### 9.2 The closest judged precedent: 2025 "Build a Space Biology Knowledge Engine"
Same shape of challenge (608 NASA bioscience publications, "use AI, knowledge graphs and/or other tools" to build a dashboard; audiences: scientists, managers, mission architects). What NASA rewarded:

| Team / result | What they built | AI approach |
|---|---|---|
| **SpaceGenes+**, Berlin: *Best Use of Science* (Global Winner) ([project](https://www.spaceappschallenge.org/2025/find-a-team/spacegenes/?tab=project)) | Dashboard of "synergy genes" from GeneLab OSD-288 | No ML model. A transparent synergy formula in Python/Pandas, no-code dashboard (Bolt, Framer); LLMs used for copy, logic review and prototyping, all disclosed. |
| **Memora Lab**, Lima: *Global Finalist* ([project](https://www.spaceappschallenge.org/2025/find-a-team/astro-alpaca/?tab=project), [code](https://github.com/orgs/MemoraLab/repositories)) | Paper explorer, analytics dashboard, research map, comparative analysis | Chatbot that answers with **cited sources**, 3D knowledge graph of authors and topics. |
| **!DS "Space Biology Knowledge Explorer"**, Seoul: *Honorable Mention* ([project](https://www.spaceappschallenge.org/2025/find-a-team/ds/?tab=project)) | Role-based views (Scientist / Program Manager / Mission Architect): Search, **Gap Finder** heatmaps, Knowledge Graph (Cytoscape), **Consensus analysis** (forest plots), Insights | LLM **structured extraction** of organisms, exposures, phenotypes, outcomes **with provenance to the source paper**; 3-tier PDF/XML parsing for 100% coverage. |
| **NyanGer "BioSearchX"**, Turin: *Honorable Mention* ([project](https://www.spaceappschallenge.org/2025/find-a-team/nyanger/?tab=project)) | Research assistant: Q&A, summaries, auto-generated follow-up questions and charts, knowledge graph of agreement/disagreement | Gemini on Vertex AI with citations. |
| Community: [Biotessera](https://github.com/vero-code/biotessera), [space-biology-engine](https://github.com/ShreyashTelang/space-biology-engine) (Streamlit), [Bader-Aljaberi](https://github.com/Bader-Aljaberi/NASA-Space-Apps-Hackathon-Project) | Typical open-source entries | RAG chat + knowledge graph over the 608 papers. |

Pattern worth copying: **structured extraction with provenance → role-based views → gap/consensus analysis → cited Q&A**, with every AI output labelled. The winner was the most *scientifically honest* entry, not the flashiest.

### 9.3 Live "Flame in Freefall" prototypes from other 2026 teams (checked 1 Nov; all unofficial)
| Prototype | Data | "SI" layer | Notes |
|---|---|---|---|
| **Sarawak team** (ngu-ming-henn), [live](https://nasa-space-apps-sarawak.streamlit.app/), [repo](https://github.com/ngu-ming-henn/Nasa-Space-Apps-Sarawak) | BASS-II PSI-25 experimental table (129 rows, checksum-verified), FLEX PSI-69 (274 tests), MaCFP PMMA ground burns (54) | scikit-learn Ridge (FLEX burn-rate K), logistic regression (extinction, AUC 0.79), small NN; leakage-audited 5×5 CV | Most complete so far: Evidence Explorer with **material ranking by CO** (PMMA slab 372 ppm vs thin film 45 ppm), crew-safety takeaways each tagged *measured / model / simulated*, 2D physics sandbox, provenance audit, EN/中文. Sleeps on Streamlit Cloud; takes ~1 min to wake. |
| **FLEX extinction predictor** (shaharia179), [live](https://flame-in-freefall-xxjhcu8eymmkafnbgtgjuq.streamlit.app/), [repo](https://github.com/shaharia179/flame-in-freefall) | 276 FLEX droplet tests from NASA/TP-2015-216046 Table IX | Logistic + ridge models; "survival map" of P(extinction) over O₂ × CO₂; extinction AUC 0.85 | Single-dataset what-if tool. Says it was built with Claude as a coding assistant. |
| **"Flame in Freefall" prototype** (rahulshingha313-gif), [live](https://nasa-five-rose.vercel.app/), [repo](https://github.com/rahulshingha313-gif/Nasa) | Hand-curated cards for BASS, BASS-II, ACME, FLEX from NTRS reports | Rule-based "Flame AI" over the curated set (explicitly not an LLM) | Has the right *information architecture*: Explore → Compare 2–3 experiments → Fire-safety insight cards with NASA citations → "Data unavailable" labels → Sources page. Thin on data. |
| **CinderLens** (meherabmehu), [live](https://flame-on-cinderlens.vercel.app), [repo](https://github.com/meherabmehu/Flame_On) | 26 **invented** demo records | None | Nice compare-with-tolerance UX that can abstain, but no NASA data yet. |
| **FlameAtlas** (benzene09), [repo](https://github.com/benzene09/Nasa-Space-App-Challenge-2k26---Fire-atlas) | Dummy data | Planned: `/risk`, `/rank`, `/gaps`, `/ask` FastAPI endpoints, GP gap-filler, SHAP, "FireGPT" chat | React/three.js, kids mode, games. No live URL. |
| **Faruk042**, [repo](https://github.com/Faruk042/NASA_Flame_In_Freefall_2026) | 673 NTRS papers, user-supplied PSI CSVs, NASA-STD-6001B | Offline BM25 + MMR extractive summaries; optional Gemini | Desktop (CustomTkinter) + Streamlit; Turkish README; no live demo. |
| Tarek-Ahmed303 "PyroNova", samuelakosaonyejekwe | | | Repos returned 404 on 1 Nov (renamed or removed). |

What the field looks like: everyone starts from the **BASS-II and FLEX experimental tables**, "AI" is mostly small scikit-learn models or a rule-based chatbot, and **nobody has yet covered the whole PSI combustion catalogue (24 investigations) with LLM-structured extraction, environment-relevance ranking and cited interpretation.** That lane is open, and it is exactly what the statement asks for.

---

## 10. How we deliver the "SI-powered" part

**What "SI" means here.** The official FAQ says "Super Intelligence (SI)" replaces "Artificial Intelligence (AI)" in 2026 Space Apps wording, that SI tools (LLMs, assistants, code and image generators) are allowed, and that **every submission must describe how SI tools were used**. So "SI-powered dashboard" = an AI/LLM-powered dashboard plus a disclosure paragraph. Nothing more exotic.

**Design principle:** numbers come from NASA data and deterministic code; words come from the LLM; every word carries a source. That is what wins *Validity* and *Best Use of Data*.

### Layer 0: Data (no LLM)
Pull the 24 PSI combustion records via the JSON API (`psi_api.py`), plus each investigation's experimental-table CSV, ReadMe, test matrices and summary-report PDF, plus publication DOIs and NTRS abstracts. Cache everything as JSON in the repo so the demo runs **offline at the venue**.

### Layer 1: Structured extraction (LLM, run once, offline)
For each investigation (and each experimental-table schema) extract one fixed JSON record: objectives · fire-safety pillar (prevention / detection / suppression) · fuel type and form · hardware (CIR-ACME, CIR-MDCA, MSG duct, Cygnus) · variables varied vs fixed · O₂ range · pressure range · flow range · gravity level · sensors and measurements · habitat-relevance tags (spacecraft, station, lunar base, rover, suit) · key findings as **verbatim quotes with file + page** · stated limitations.
- Use **structured outputs** (a strict JSON schema) so the UI never parses prose, and keep provenance fields mandatory.
- Model: `claude-opus-5-5` for the 24 investigation records and their report PDFs (quality matters, volume is small); `claude-haiku-5-5` to tag the few hundred NTRS abstracts.
- Run it through the **Message Batches API** (half price, finishes within the hour). Rough budget: 24 records × ~75K input tokens ≈ 2M tokens ≈ $8 at Opus 5.5 list price, ~$4 batched. Cheap.
- Store the extraction JSON in the repo and expose it in the UI ("show the evidence record"). Auditable AI is the whole pitch.

### Layer 2: Ranking (deterministic score, LLM-explained)
Define 4–5 **scenarios** straight from the statement: Moon base / pressurised rover (≥30% O₂, ≤10.2 psi), ISS-like cabin (21%, 14.7 psi), EVA suit (100% O₂, 4.3 psi), Mars transit, Earth fire safety. Score each investigation per scenario from the extracted fields (O₂ overlap, pressure overlap, gravity level, fuel class, pillar, data richness). The score is a transparent formula shown in the UI; the LLM writes the one-paragraph "why it ranks here", citing the record. This is the "ranks" verb in the challenge title, done in a way a judge can check.

### Layer 3: Interpretation and Q&A (LLM at runtime)
- **Ask**: retrieval over the extraction records plus report excerpts, answered with the API's **citations** feature so the UI shows the exact cited text, PSI ID and DOI. Hard rule in the prompt: if it is not in the corpus, say so (e.g. "PSI has no partial-gravity combustion data; see LUCI/FM2").
- **Compare**: pick 2–3 investigations → the LLM produces a similarities/differences table from the structured fields (this is literally a "potential consideration" in the statement).
- **Explain for audience**: same facts rendered for professor / student / engineer (role views, as the 2025 winners did).
- Put the static corpus first in the prompt and use **prompt caching** so each question costs cents and answers in a few seconds; the default `fallbacks: "default"` setting keeps a rare safety refusal from breaking the demo.

### Layer 4: Optional predictive hooks
FLEX extinction / burn-rate regressions and BASS-II CO-by-material rankings already exist in other teams' demos. Include them only if time allows, labelled "experimental, ISS droplet tests only". The LLM never predicts physics.

### Guardrails that map to the judging criteria
- Source chip on every sentence (Validity, Relevance). "SI-generated" badge on every interpretation (Presentation, honesty).
- A 20–30 question **eval set** checked against the PSI documents before the demo; show the pass rate on an "About the SI" page.
- One paragraph of SI-use disclosure drafted on day 1, not at 11 pm on day 2.
- Everything precomputed is committed; the live LLM is used for Q&A and compare only, with a cached fallback answer set if the venue Wi-Fi dies.

### Suggested stack and 2-day split (code starts 14 Nov 9:00 AM, not before)
- Backend: Python + FastAPI + Anthropic SDK; frontend: React (or Streamlit if the team is Python-only); data in JSON files.
- **Day 1 AM**: PSI pull, cache, extraction batch submitted. **Day 1 PM**: UI skeleton (Explore / Rank / Compare / Ask), scenario scoring. **Day 2 AM**: Ask + Compare wired, citations rendering, eval. **Day 2 PM**: polish, 30-second demo video, project page, submit by the Amaravati deadline.

Model IDs and list prices used above (Anthropic API, Nov 2026): `claude-opus-5-5` $4 / $20 per MTok in/out · `claude-sonnet-5-5` $2 / $10 · `claude-haiku-5-5` $0.10 / $0.50 · batches at 50%.

---

## 11. Caveats
- The Space Apps site refused direct requests from this environment, so its pages were read through a rendering proxy on 1 Nov 2026; counts (teams, events) are as of that date.
- The challenge's Resources tab is empty until 13 Nov; Section 4 is my reconstruction from the statement plus NASA sources, not the official list.
- Team page details and the Amaravati venue were not publicly visible; verify both when logged in.
