---
name: job-fit-review
description: Reviews a job posting or pasted job description for fit, gaps, legitimacy signals, compensation context, resume customization, and interview prep. Use when the user shares a job posting, job listing, job ad, or job description and wants help deciding whether to apply, evaluating the role, or checking if a job is legit.
author: surfmind
metadata:
  icon: Briefcase
  tags:
    - career
    - research
    - productivity
---

# Job Fit Review

Review the selected text, visible page, or pasted job description as a career decision aid. Work only from what the user gave you or what's visible on the page — don't invent experience, metrics, employers, credentials, work authorization, salary expectations, or availability, and don't submit applications, alter forms, or declare a posting fake; present evidence and let the user decide. Use web search or browser tools when current compensation, company news, layoffs, hiring freezes, or posting liveness matter. Adapted from [santifer/career-ops](https://github.com/santifer/career-ops/tree/main) `oferta` mode.

1. Confirm the posting appears active before the full review. If the page says expired, closed, no longer accepting applications, redirects to a generic careers page, or lacks a real job description, stop and say the posting looks inactive.
2. Classify the role by archetype when useful (platform, LLMOps, agentic automation, product, solutions architecture, forward-deployed, transformation, or another clear fit), then map the posting's requirements to the user's provided experience.
3. Separate hard blockers from nice-to-have gaps. For each gap, suggest an honest mitigation: adjacent evidence, a portfolio proof point, a phrase for the application, or a question for the recruiter.
4. Read the level and plan strategy. Compare the posting's target level against the user's natural level; position seniority honestly with real achievements, and if the company downlevels, advise accepting only when compensation is fair and negotiating a defined review window with clear promotion criteria. Never advise overstating a title or scope.
5. Check legitimacy signals without making accusations, then settle on one tier — High confidence, Proceed with caution, or Suspicious. Weigh posting age, active apply controls, description specificity, inconsistent requirements, reposting clues, salary transparency, and recent hiring news. Account for fair context: government, academic, executive, and niche roles legitimately stay open for months; evergreen postings are pipelines, not ghosts; a recruiter-only posting has no public freshness signal. Never default to Suspicious without evidence.
6. Suggest the top resume, LinkedIn, or application customizations, grounded in the job description and the user's actual background, then build a short interview prep plan: likely themes, STAR story prompts, risks to prepare for, and questions to ask back.

Return these sections when they fit: **Role snapshot**, **Fit with your background**, **Gaps and mitigations**, **Level and strategy**, **Compensation and demand signals**, **Posting legitimacy** (High confidence, Proceed with caution, or Suspicious), **Customization plan**, **Interview prep**, and **Recommendation**. End on exactly one recommendation — **Apply now**, **Apply with caveats**, **Research first**, or **Skip** — explained briefly. Preserve names, numbers, dates, titles, links, and technologies exactly; mark uncertain facts as uncertain and label search-derived claims with sources. If the user hasn't shared a resume or career profile, review the posting on its own and list the profile details needed for a stronger assessment.

## Example

Posting (a visible job page):

> Senior ML Platform Engineer · Acme AI · "Build and scale our LLM serving infrastructure." Requires 5+ yrs backend, Kubernetes, and production LLM/inference experience. Salary $180k–$220k. Posted 3 days ago, "Apply" button active. User's note: 6 yrs backend + Kubernetes, but only hobby LLM projects.

Review:

> **Role snapshot:** Senior LLMOps/platform role at Acme AI focused on LLM serving infrastructure; $180k–$220k, posted 3 days ago with an active apply path.
>
> **Fit with your background:** Strong on the core — 6 yrs backend and Kubernetes clear the bar. Production LLM/inference experience is the open question.
>
> **Gaps and mitigations:** Production LLM experience is a nice-to-have gap here, not a hard blocker. Lead with a hobby inference project as a portfolio proof point, frame the Kubernetes depth as the transferable foundation, and ask the recruiter how much prior LLM-serving exposure they expect.
>
> **Posting legitimacy:** High confidence — recent post, active apply control, specific description, and a transparent salary range.
>
> **Recommendation:** Apply with caveats. The infrastructure fit is strong; close the LLM gap with a concrete project link and a question to the recruiter before investing heavily.
