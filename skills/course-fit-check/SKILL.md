---
name: course-fit-check
description: Evaluates whether a specific course, certification, bootcamp, or training is worth the time and money for the user's stated career goal, weighing recruiter signal, time and opportunity cost, risks, and the artifact it produces. Use when the user asks whether a course, certification, bootcamp, or training is worth it, or when evaluating training ROI against a career goal.
author: surfmind
metadata:
  icon: GraduationCap
  tags:
    - career
    - learning
    - productivity
---

# Course Fit Check

Evaluate a course, certification, bootcamp, or training as a career decision aid, working from the visible page, selected text, or the training the user names — its title, provider, price, length, syllabus, and credential — plus the user's stated goal, target role, and background. Use web search or browser tools when current price, syllabus, provider reputation, or recruiter perception matter. If the target role or direction is unclear, ask for it before judging fit. Adapted from [santifer/career-ops](https://github.com/santifer/career-ops/tree/main) `training` mode.

1. Score the training across six dimensions: **goal alignment** (does it move toward the target role?), **recruiter signal** (what a hiring manager thinks seeing it on a resume), **time and effort** (weeks times hours per week), **opportunity cost** (what else that time could buy), **risks** (outdated content, weak brand, too basic, or too broad), and **portfolio deliverable** (does it produce a demonstrable artifact?).
2. Give a verdict: **Do** — a 4 to 12 week plan with weekly deliverables and a progress scoreboard; **Don't do** — a stronger alternative with justification; or **Do with a timebox** (max N weeks) — a condensed plan covering essentials only.
3. Prioritize training that builds credibility in the user's stated direction, leading with anything that produces a portfolio artifact and a clear recruiter signal over passive, watch-only content.

Return these sections: **Snapshot** (what it is, cost, length), **Six-dimension read** (one line per dimension), **Verdict** (with the deciding reason), and **Plan or alternative** (weekly deliverables if Do; a stronger option if not). Do not invent outcomes, salary effects, completion rates, or hiring signals — say "unknown" when evidence is thin. Preserve price, duration, provider, and credential names exactly, and label any market or salary claim with a source. Judge against the user's actual goal, not generic prestige: a respected credential that points away from their target is still a weak fit. Respond in the same language as the user's request.

## Example

Request (a course page on screen + a note):

> AWS Certified Solutions Architect – Associate · $150 exam, ~8 weeks of study. My note: I'm a frontend dev trying to move into platform/infra roles.

Review:

> **Snapshot:** AWS SAA-Associate cert, $150 exam plus ~8 weeks self-study (est. 6 hrs/week).
>
> **Six-dimension read:**
>
> - Goal alignment: strong — infra/platform roles routinely list AWS fluency.
> - Recruiter signal: positive and widely recognized for cloud roles.
> - Time and effort: ~48 hours over 8 weeks, manageable alongside a job.
> - Opportunity cost: moderate — competes with shipping a real infra project.
> - Risks: exam-prep knowledge can stay shallow without hands-on work.
> - Portfolio deliverable: none by default — the cert alone isn't a demonstrable artifact.
>
> **Verdict:** Do with a timebox (8 weeks). It signals the right direction, but the cert alone won't prove you can build.
>
> **Plan or alternative:** Pair the study with one deliverable — deploy a small app on AWS (VPC, ECS or Lambda, IaC via Terraform) and write it up. Weeks 1–6 study by domain; weeks 7–8 build and document the project so you finish with both the credential and a portfolio proof point.
