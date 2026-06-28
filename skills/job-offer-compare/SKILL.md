---
name: job-offer-compare
description: Compares two or more job postings, offers, or listings side by side and ranks them on a weighted scorecard covering fit, level, compensation, benefits, growth, remote quality, company signals, and time to offer. Use when the user asks to compare job offers, weigh salary and benefits across listings, decide which job to take, or evaluate competing opportunities.
metadata:
  author: surfmind
  icon: Scale
  tags:
    - career
    - research
    - productivity
---

# Job Offer Compare

Compare and rank multiple job postings or offers as a career decision aid, working from open tabs, pasted descriptions, URLs, selected text, or roles reviewed earlier in the conversation. Score only from the user's stated background and facts visible on the page or from cited search — never invent experience, metrics, salary, titles, or company facts, and preserve names, numbers, dates, titles, links, technologies, and user constraints exactly. Use web search or browser tools when current compensation, company news, layoffs, hiring freezes, or posting liveness matter. Do not submit applications or claim a posting is fake; present the scores and let the user decide. Adapted from [santifer/career-ops](https://github.com/santifer/career-ops/tree/main) `ofertas` mode.

1. Gather the postings. If fewer than two are in context, ask the user to paste, open, or name the roles to compare.
2. For each posting, confirm it looks active (a real job description and a working apply path) and capture a one-line legitimacy read. Flag any posting that looks expired, redirected, or thin.
3. Score every posting 1-5 on each dimension of the matrix below. Mark estimated scores as estimates and label search-derived claims with sources when tools are available.
4. Compute a weighted total per posting and rank them.
5. Recommend an order to pursue, factoring time-to-offer speed and any hard blockers, and name the single highest-leverage next action.

| Dimension                 | Weight | 1-5 scale                                                   |
| ------------------------- | ------ | ----------------------------------------------------------- |
| Goal alignment            | 25%    | 5 = exact target role, 1 = unrelated                        |
| Background match          | 15%    | 5 = 90%+ match, 1 = under 40% match                         |
| Level                     | 15%    | 5 = staff+, 4 = senior, 3 = mid-senior, 2 = mid, 1 = junior |
| Estimated compensation    | 10%    | 5 = top quartile, 1 = below market                          |
| Growth trajectory         | 10%    | 5 = clear path to next level, 1 = dead end                  |
| Remote quality            | 5%     | 5 = full remote, 1 = onsite only                            |
| Company reputation        | 5%     | 5 = top employer, 1 = red flags                             |
| Tech or tooling modernity | 5%     | 5 = current stack, 1 = legacy                               |
| Time-to-offer speed       | 5%     | 5 = fast process, 1 = six months or more                    |
| Cultural signals          | 5%     | 5 = builder culture, 1 = bureaucratic                       |

Return these sections: **Comparison scorecard** — one row per posting with per-dimension scores and the weighted total; **Ranking** — ordered, with the deciding factors named for the top choice; **Legitimacy notes** — the one-line read per posting, with any caveats; and **Recommendation** — which to pursue first and why, plus the next action. If the user provides no background, score what the postings reveal on their own and list the profile details needed for a sharper ranking.

## Example

Two roles in context (the user wants to know which to chase first):

> **A — Senior Backend Engineer · Northwind** (remote, posted 2 days ago, $190k). **B — Staff Platform Engineer · Acme** (hybrid 3 days/wk, posted 5 weeks ago, no salary listed). User's note: 7 yrs backend, wants to reach staff level, prefers remote.

Comparison:

> **Comparison scorecard:**
>
> | Posting       | Goal | Bg  | Level | Comp      | Growth | Remote | Rep | Tech | Speed | Culture | **Total** |
> | ------------- | ---- | --- | ----- | --------- | ------ | ------ | --- | ---- | ----- | ------- | --------- |
> | A — Northwind | 4    | 5   | 4     | 5 _(est)_ | 3      | 5      | 4   | 4    | 5     | 4       | **4.25**  |
> | B — Acme      | 5    | 4   | 5     | 3 _(est)_ | 5      | 2      | 4   | 4    | 2     | 4       | **4.10**  |
>
> **Ranking:** 1) Northwind, 2) Acme. Northwind edges ahead on compensation visibility, full remote, and a faster process; Acme wins on level and growth but loses on the hybrid requirement and a 5-week-old posting.
>
> **Legitimacy notes:** Northwind — high confidence, recent post with an active apply path and transparent salary. Acme — proceed with caution, posting is 5 weeks old with no salary listed; confirm it's still open.
>
> **Recommendation:** Pursue Northwind first — it matches your remote preference and moves fast. Apply to Acme in parallel only after confirming the role is live and asking the recruiter for the band, since the staff level fits your goal. Next action: send the Northwind application today.
