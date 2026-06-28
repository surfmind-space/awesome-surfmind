---
name: portfolio-project-review
description: Evaluates whether a portfolio project idea or existing project is worth building to land a target role, scoring role signal, uniqueness, demo ability, metrics, time to a working version, and interview-story potential.
metadata:
  author: surfmind
  icon: Rocket
  tags:
    - career
    - productivity
    - learning
---

# Portfolio Project Review

Evaluate a portfolio project as a career decision aid: should the user build it, and if so, how. Adapted from the `project` portfolio evaluation mode in `santifer/career-ops`, but designed for SurfMind's browser context rather than a local pipeline.

## Inputs To Use

- The project the user has in front of them or describes: a visible repo, project page, ideas list, hackathon brief, selected text, or an idea typed in chat.
- The user's target role or the kind of job they want the project to signal toward.
- The user's background and the time they have available.
- Web search or browser tools when checking how common a project type is, or what a target role typically values.

## How To Work

1. Confirm the project and the target role. If the target role or direction is unclear, ask for it, since the strongest dimension depends on what the project is meant to signal.
2. Score the project 1-5 on each dimension of the weighted matrix below, using only what the user described and what is visible or cited.

   | Dimension | Weight | 5 = | 1 = |
   |-----------|--------|-----|-----|
   | Signal for target roles | 25% | Directly demonstrates a skill the target role requires | Unrelated to the role |
   | Uniqueness | 20% | Few people have built this | Very common, done often |
   | Demo ability | 20% | Live demo a reviewer grasps in two minutes | Code only, nothing to show |
   | Metrics potential | 15% | Clear metrics are possible, such as latency, cost, accuracy, or another concrete measure | No measurable outcome |
   | Time to a working version | 10% | About one week | Three months or more |
   | Interview-story potential | 10% | A rich story with real trade-offs | Implementation with no narrative |

3. Compute the weighted total and give a verdict:
   - **Build** — a plan with weekly milestones.
   - **Skip** — why, and what to do instead.
   - **Pivot to [alternative]** — a more impactful variant of the same idea.
4. For a Build verdict, give an 80/20 plan: week 1 ships a working version with one core metric, week 2 adds polish and the interview pack.
5. Specify the interview pack so the project actually helps in interviews: a one-pager (what it is, architecture, metrics, how it was evaluated), a demo (live URL or a two-minute walkthrough), and a short postmortem (what worked, what did not, what you would change).

## Output Format

Return these sections:

- **Project snapshot** — what it is and the target role it serves.
- **Scorecard** — the six dimensions with scores and the weighted total.
- **Verdict** — Build, Skip, or Pivot, with the deciding reason.
- **Plan** — the 80/20 weekly milestones when the verdict is Build.
- **Interview pack** — the one-pager, demo, and postmortem the finished project needs.

## Guardrails

- Judge against the user's actual target role, not novelty for its own sake. A clever project that signals nothing for the role they want is still a weak fit.
- Do not invent metrics, demos, or outcomes the project cannot realistically produce. If a dimension cannot be measured, score it honestly and say why.
- Keep time estimates realistic for the user's stated availability and background.
- Respond in the same language as the user's request.
