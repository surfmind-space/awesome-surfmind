---
name: cover-letter-builder
description: Builds a tailored cover letter from a job description and the user's background — researches the company, mirrors keywords, handles gaps, and drafts an approval-ready letter. Use when the user wants help writing a cover letter or application letter, or applying for a job or position.
metadata:
  author: surfmind
  icon: Mail
  tags:
    - career
    - writing
---

# Cover Letter Builder

Create a tailored cover letter from the selected text, visible page, or pasted job description, and draft it in chat for review. Before drafting, confirm a real job description is present — a role title, a company name, and responsibilities or requirements. If it is missing, ask the user to paste the posting or open it. Use only achievements and facts the user has supplied; never invent numbers, employers, or qualifications, and keep the letter specific to this company and role rather than generic filler. Adapted from [santifer/career-ops](https://github.com/santifer/career-ops/tree/main) `cover` mode.

1. Parse the job description: exact role title, company, location, top competencies, mission language, start-date signals, language requirements, domain, and tone.
2. Research the company when current context would materially improve the letter — summarize what it appears to be building, prioritizing, or struggling with — and ask the user to confirm or correct the synthesis before using it.
3. Extract 8-10 phrases to mirror: ATS-critical terms (titles, tools, methods, domain terms) and human trust signals (verbs, product nouns, team framing, outcome language from the posting).
4. Identify gaps only when visible from the user's background — domain mismatch, language requirement, start date, title mismatch, relocation, authorization — and ask how they want to handle any real one before writing.
5. If not already clear, ask the four drafting inputs: why this role or company, what problem they would help solve, how they would approach it, and the desired tone (formal, direct, conversational, or mirror the posting). If no achievements are available, ask for 3-5 proof points first.
6. Draft the letter: candidate header (when provided), role and company line, optional greeting, a two-sentence opening, one profile paragraph, four to five achievement bullets when there are enough proof points, a short "problems I will solve" paragraph, and a close that acknowledges any confirmed gap.

Write in active voice and keep every major claim backed by a number, system, product, customer, team, or stated requirement. Mirror the job's vocabulary but not its structure — use each keyword once, placed in the opening, profile paragraph, achievements, and problems paragraph, and keep the personal "why this role" angle and the close in the user's own words. Avoid filler like "excited to apply", "passionate about", "perfect fit", "proven track record", "leverage", "synergy", and "cutting-edge". List any keyword you cannot include honestly after the draft. Return **Research and angle**, **Keywords to mirror**, **Questions before drafting** (when needed), then the **Draft cover letter** once you have enough to write.

## Example

Job description (excerpt):

> **Customer Success Manager — Northwind (remote, US)**. Own onboarding and retention for SMB accounts. You'll reduce churn, run QBRs, and partner with Product on the roadmap. Experience with HubSpot and SQL a plus.

User background:

> CSM at Acme, 2022–present. Cut SMB churn from 9% to 5% in a year. Ran 40+ QBRs. Comfortable in HubSpot; learning SQL.

Output:

> **Research and angle:** Northwind sells SMB-focused SaaS and is pushing on retention — lead with the churn turnaround. _Confirm this read before I use it._
>
> **Keywords to mirror:** onboarding, retention, churn, QBRs, SMB accounts, HubSpot, partner with Product.
>
> **Questions before drafting:** Why Northwind specifically, and what tone do you want — direct or conversational?
>
> **Draft cover letter:**
>
> Dear Hiring Team,
>
> I cut SMB churn from 9% to 5% in a year at Acme, and I'd like to do the same for Northwind's accounts. As a CSM owning onboarding and retention, I ran 40+ QBRs and worked alongside Product to close the gaps those calls surfaced...
>
> _SQL is listed as a plus — your background says "learning," so I framed it honestly rather than claiming proficiency._
