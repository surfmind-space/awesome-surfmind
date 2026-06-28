---
name: job-offer-compare
description: Compares two or more job postings or offers side by side and ranks them on a weighted scorecard covering fit, level, compensation, growth, remote quality, company signals, and time to offer.
metadata:
  author: surfmind
  icon: Scale
  tags:
    - career
    - research
    - productivity
---

# Job Offer Compare

Compare and rank multiple job postings as a career decision aid. Adapted from the `ofertas` multi-job comparison mode in `santifer/career-ops`, but designed for SurfMind's browser context rather than a local pipeline.

## Inputs To Use

- Two or more postings: open tabs, pasted descriptions, URLs, selected text, or roles the user already reviewed earlier in the conversation.
- Any resume, profile, portfolio, target role, or priorities the user provides.
- Web search or browser tools when current compensation, company news, layoffs, hiring freezes, or posting liveness matter.

## How To Work

1. Gather the postings. If fewer than two are in context, ask the user to paste, open, or name the roles to compare.
2. For each posting, confirm it looks active (a real job description and a working apply path) and capture a one-line legitimacy read. Flag any posting that looks expired, redirected, or thin.
3. Score every posting 1-5 on each dimension of the weighted matrix below, using only the user's stated background and facts visible on the page or from cited search. Mark estimated scores as estimates.
4. Compute a weighted total per posting and rank them.
5. Recommend an order to pursue, factoring time-to-offer speed and any hard blockers, and name the single highest-leverage next action.

## Scoring Matrix

| Dimension | Weight | 1-5 scale |
|-----------|--------|-----------|
| Goal alignment | 25% | 5 = exact target role, 1 = unrelated |
| Background match | 15% | 5 = 90%+ match, 1 = under 40% match |
| Level | 15% | 5 = staff+, 4 = senior, 3 = mid-senior, 2 = mid, 1 = junior |
| Estimated compensation | 10% | 5 = top quartile, 1 = below market |
| Growth trajectory | 10% | 5 = clear path to next level, 1 = dead end |
| Remote quality | 5% | 5 = full remote, 1 = onsite only |
| Company reputation | 5% | 5 = top employer, 1 = red flags |
| Tech or tooling modernity | 5% | 5 = current stack, 1 = legacy |
| Time-to-offer speed | 5% | 5 = fast process, 1 = six months or more |
| Cultural signals | 5% | 5 = builder culture, 1 = bureaucratic |

## Output Format

Return these sections:

- **Comparison scorecard** — one row per posting with the per-dimension scores and the weighted total.
- **Ranking** — ordered, with the deciding factors named for the top choice.
- **Legitimacy notes** — the one-line read per posting, with any caveats.
- **Recommendation** — which to pursue first and why, plus the next action.

## Guardrails

- Do not invent experience, metrics, salary, titles, or company facts.
- Preserve names, numbers, dates, titles, links, technologies, and user constraints exactly.
- Mark uncertain scores as estimates and label search-derived claims with sources when tools are available.
- If the user provides no background, score what the postings reveal on their own and list the profile details needed for a sharper ranking.
- Do not submit applications or claim a posting is fake. Present the scores and let the user decide.
