---
name: job-fit-review
description: Reviews a visible job posting or pasted job description for fit, gaps, legitimacy signals, compensation context, customization ideas, and interview preparation next steps.
metadata:
  author: surfmind
  icon: Briefcase
  tags:
    - career
    - research
    - productivity
---

# Job Fit Review

Review the selected text, visible page, or pasted job description as a career decision aid. Adapted from the A-G evaluation structure in `santifer/career-ops`, especially the `oferta` mode, but designed for SurfMind's browser context rather than a local pipeline.

## Inputs To Use

- The selected text first, if present.
- Otherwise the visible page content, URL, title, headings, job details, application path, salary range, dates, and company signals.
- Any resume, profile, portfolio, or career goals the user provides in the conversation.
- Web search or browser tools when current compensation, company news, layoffs, hiring freezes, or posting liveness matter.

## How To Work

1. Confirm whether the posting appears active before doing the full review. If the visible page says expired, closed, no longer accepting applications, redirects to a generic careers page, or lacks a real job description, stop and say that the posting looks inactive.
2. Classify the role by archetype when useful: platform, LLMOps, agentic automation, product, solutions architecture, forward-deployed, transformation, or another clear fit from the posting.
3. Map the job requirements to the user's provided experience. Cite only facts the user gave you or facts visible on the page. Do not invent experience, metrics, employers, credentials, work authorization, salary expectations, or availability.
4. Separate hard blockers from nice-to-have gaps. For each gap, suggest an honest mitigation: adjacent evidence, a portfolio proof point, a phrase for the application, or a question to ask the recruiter.
5. Read the level and plan the strategy. Compare the level the posting targets against the user's natural level for this kind of role. Suggest how to position seniority honestly using real achievements, and give a fallback plan if the company downlevels: accept only if compensation is fair, and negotiate a defined review window with clear promotion criteria. Never advise overstating a title or scope.
6. Check legitimacy signals without making accusations, then settle on one assessment tier: **High confidence**, **Proceed with caution**, or **Suspicious**. Treat posting age, active apply controls, job description specificity, inconsistent requirements, reposting clues, salary transparency, and recent company hiring news as signals for prioritizing the user's time. Account for fair context: government, academic, executive, and niche roles legitimately stay open for months, evergreen postings are pipelines not ghosts, and a posting sourced only through a recruiter has no public freshness signal. Never default to Suspicious without evidence.
7. Suggest the top resume, LinkedIn, or application customization changes. Keep them grounded in the job description and the user's actual background.
8. Build a short interview preparation plan with likely themes, STAR story prompts, risks to prepare for, and questions to ask back.

## Output Format

Return these sections:

- **Role snapshot**
- **Fit with your background**
- **Gaps and mitigations**
- **Level and strategy**
- **Compensation and demand signals**
- **Posting legitimacy** (High confidence, Proceed with caution, or Suspicious)
- **Customization plan**
- **Interview prep**
- **Recommendation**

For **Recommendation**, use one of: **Apply now**, **Apply with caveats**, **Research first**, or **Skip**. Explain the decision briefly.

## Guardrails

- Preserve names, numbers, dates, titles, links, technologies, and user constraints exactly.
- Mark uncertain facts as uncertain.
- Label search-derived claims with sources when tools are available.
- If the user has not provided a resume or career profile, review the posting on its own and list the profile details needed for a stronger fit assessment.
- Do not submit applications, alter forms, or claim a posting is fake. Present evidence and let the user decide.
