---
name: course-fit-check
description: Evaluates whether a specific course, certification, bootcamp, or training is worth the time and money for the user's stated career goal, weighing recruiter signal, time and opportunity cost, risks, and the artifact it produces.
metadata:
  author: surfmind
  icon: GraduationCap
  tags:
    - career
    - learning
    - productivity
---

# Course Fit Check

Evaluate a course, certification, bootcamp, or training as a career decision aid. Adapted from the `training` evaluation mode in `santifer/career-ops`, but designed for SurfMind's browser context rather than a local pipeline.

## Inputs To Use

- The visible course or certificate page, selected text, or training the user names: title, provider, price, length, syllabus, and credential.
- The user's stated career goal, target role, and current background.
- Web search or browser tools when current price, syllabus, provider reputation, or recruiter perception matter.

## How To Work

1. Confirm the training and the user's goal. If the target role or direction is unclear, ask for it before judging fit.
2. Score the training across six dimensions:

   | Dimension | What it evaluates |
   |-----------|-------------------|
   | Goal alignment | Does it move the user toward or away from their target role? |
   | Recruiter signal | What does a hiring manager think when they see it on a resume? |
   | Time and effort | Weeks times hours per week |
   | Opportunity cost | What else could the user do with that time? |
   | Risks | Outdated content, weak brand, too basic, or too broad |
   | Portfolio deliverable | Does it produce a demonstrable artifact? |

3. Give a verdict:
   - **Do** — a 4 to 12 week plan with weekly deliverables and a progress scoreboard.
   - **Don't do** — a stronger alternative with justification.
   - **Do with a timebox** (max N weeks) — a condensed plan covering essentials only.
4. Prioritize training that builds credibility in the user's stated direction, leading with anything that produces a portfolio artifact and a clear recruiter signal over passive, watch-only content.

## Output Format

Return these sections:

- **Snapshot** — what the training is, cost, and length.
- **Six-dimension read** — one line per dimension.
- **Verdict** — Do, Don't do, or Do with a timebox, with the deciding reason.
- **Plan or alternative** — weekly deliverables if Do; a stronger option if not.

## Guardrails

- Do not invent outcomes, salary effects, completion rates, or hiring signals. Say "unknown" when evidence is thin.
- Preserve price, duration, provider, and credential names exactly, and label any market or salary claim with a source.
- Judge against the user's actual goal, not generic prestige. A respected credential that points away from their target is still a weak fit.
- Respond in the same language as the user's request.
