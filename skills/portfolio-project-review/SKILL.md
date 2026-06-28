---
name: portfolio-project-review
description: Evaluates whether a portfolio project, side project, or resume project idea is worth building to land a target role, scoring role signal, uniqueness, demo ability, metrics, time to a working version, and interview-story potential. Use when the user asks if a project idea is worth building, wants to evaluate side projects for a job search, or wants to pick a project that signals to hiring managers.
metadata:
  author: surfmind
  icon: Rocket
  tags:
    - career
    - productivity
    - learning
---

# Portfolio Project Review

Evaluate a portfolio project as a career decision aid: should the user build it, and if so, how. Work from whatever the user provides — a repo, project page, ideas list, hackathon brief, selected text, or an idea typed in chat — plus their target role, background, and available time. Judge against the user's actual target role, not novelty for its own sake; a clever project that signals nothing for the role they want is still a weak fit. Use web search or browser tools to check how common a project type is or what a target role values. Adapted from [santifer/career-ops](https://github.com/santifer/career-ops/tree/main) `project` mode.

1. Confirm the project and the target role. If the target role or direction is unclear, ask for it, since the strongest dimension depends on what the project is meant to signal.
2. Score the project 1-5 on each dimension of the weighted matrix below, using only what the user described and what is visible or cited. If a dimension cannot be measured, score it honestly and say why.

   | Dimension                 | Weight | 5 =                                                                                      | 1 =                              |
   | ------------------------- | ------ | ---------------------------------------------------------------------------------------- | -------------------------------- |
   | Signal for target roles   | 25%    | Directly demonstrates a skill the target role requires                                   | Unrelated to the role            |
   | Uniqueness                | 20%    | Few people have built this                                                               | Very common, done often          |
   | Demo ability              | 20%    | Live demo a reviewer grasps in two minutes                                               | Code only, nothing to show       |
   | Metrics potential         | 15%    | Clear metrics are possible, such as latency, cost, accuracy, or another concrete measure | No measurable outcome            |
   | Time to a working version | 10%    | About one week                                                                           | Three months or more             |
   | Interview-story potential | 10%    | A rich story with real trade-offs                                                        | Implementation with no narrative |

3. Compute the weighted total and give a verdict: **Build** with a plan, **Skip** with why and what to do instead, or **Pivot to [alternative]** — a more impactful variant of the same idea.
4. For a Build verdict, give an 80/20 plan: week 1 ships a working version with one core metric, week 2 adds polish and the interview pack.
5. Specify the interview pack so the project actually helps in interviews: a one-pager (what it is, architecture, metrics, how it was evaluated), a demo (live URL or a two-minute walkthrough), and a short postmortem (what worked, what did not, what you would change).

Return these sections: **Project snapshot** (what it is and the target role it serves), **Scorecard** (the six dimensions with scores and the weighted total), **Verdict** (Build, Skip, or Pivot with the deciding reason), **Plan** (the 80/20 weekly milestones when the verdict is Build), and **Interview pack** (the one-pager, demo, and postmortem the finished project needs). Respond in the same language as the user's request.

## Example

Project idea (typed in chat):

> "I want to build a to-do list app in React for my portfolio. I'm targeting backend / ML engineer roles, junior level, and I have about two weeks."

Review:

> **Project snapshot:** A React to-do list app, aimed at junior backend/ML engineer roles, two-week budget.
>
> **Scorecard:**
>
> | Dimension                 | Weight | Score                                               |
> | ------------------------- | ------ | --------------------------------------------------- |
> | Signal for target roles   | 25%    | 1 — a CRUD frontend says little about backend or ML |
> | Uniqueness                | 20%    | 1 — the most common beginner project                |
> | Demo ability              | 20%    | 4 — easy to show                                    |
> | Metrics potential         | 15%    | 1 — no measurable outcome                           |
> | Time to a working version | 10%    | 5 — under a week                                    |
> | Interview-story potential | 10%    | 1 — no real trade-offs                              |
> | **Weighted total**        |        | **2.0**                                             |
>
> **Verdict:** Pivot to a small ML-serving API. Same two weeks, but it signals directly to the roles you want.
>
> **Plan:** Week 1 — ship an FastAPI endpoint serving a Hugging Face model, measure p95 latency and cost per 1k requests. Week 2 — add caching, a load-test chart, and the interview pack.
>
> **Interview pack:** One-pager on the architecture and latency/cost numbers, a live demo URL, and a postmortem on what the caching layer changed.
