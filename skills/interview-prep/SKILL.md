---
name: interview-prep
description: Prepares for a specific company and role by mapping likely interview rounds, audience-specific questions, proof points, STAR story gaps, and questions to ask back. Use when the user mentions interview prep, preparing for a job interview, a mock interview, behavioral questions, or practicing for an upcoming round.
author: surfmind
metadata:
  icon: Target
  tags:
    - career
    - research
    - learning
---

# Interview Prep

Prepare the user for an interview at a specific company and role using their selected text, the visible page, a pasted job description, or details they provide. Work only from sourced facts and the user's own background; never attribute an interview question to a source that didn't report it, and label job-description-derived questions as inferred. Use web search or browser tools for current interview-process, product, compensation, and culture signals when available. Adapted from [santifer/career-ops](https://github.com/santifer/career-ops/tree/main) `interview-prep` and `deep` modes.

1. Confirm the company and role. If either is missing, ask before producing a full prep pack.
2. Map the likely rounds and their audiences — recruiter screen, hiring manager, peer or technical panel, and mixed panels. See [references/audience-playbook.md](references/audience-playbook.md) for each audience's focus and question bank. If the schedule is unknown, say so and give the likely audiences separately.
3. Map likely questions to STAR or STAR+R story prompts and draft result first answer outlines from the user's real background only. See [references/star-framework.md](references/star-framework.md) for the outline order, headline building, and gap handling. If they haven't supplied enough stories, flag the missing topics and ask for one detail at a time.
4. Suggest technical or case prep grounded in the job description, company materials, or reported process, and include questions to ask back that reference the role, team, product, or company.
5. Coach disclosure per audience: lead with what lands for each interviewer while staying consistent on comp, timeline, and motivation. The per audience strategy, compensation deflection phrasing, and honesty guardrails live in [references/audience-playbook.md](references/audience-playbook.md).

Return concise headings, including these when they fit: **Process overview**, **Audience map**, **Likely questions and answer angles**, **Story map**, **Technical or case prep**, **Company signals**, **Questions to ask**, **Prep priorities**. Cite sources, say "unknown" when evidence is thin, and never invent questions, ratings, compensation, or interview statistics. Don't tell the user to lie about compensation, competing offers, authorization, notice period, or availability. If they give an interview date, add a short countdown based prep plan.

## References

- [references/audience-playbook.md](references/audience-playbook.md) — per audience focus, question banks, disclosure strategy, comp deflection, and honesty guardrails. Read when mapping rounds (step 2) or coaching disclosure (step 5).
- [references/star-framework.md](references/star-framework.md) — STAR and STAR+R outlines, result first ordering, building a headline from one number, and story gap handling. Read when drafting answer angles (step 3).

## Example

Request (job description on screen + a note):

> Senior Product Manager at Northwind. Recruiter phone screen next week, then a hiring-manager round. JD stresses 0→1 launches and cross-functional leadership. My note: I led a payments launch but haven't written it up.

Prep:

> **Audience map**
>
> - Recruiter screen: motivation, timeline, location and comp fit — lead with why Northwind.
> - Hiring manager: scope and first-90-days plan; tie your payments launch to their 0→1 mandate.
>
> **Likely questions and answer angles**
>
> - "Walk me through a 0→1 product you launched." _(inferred from the job description)_ → STAR on the payments launch, result first.
>
> **Story map**
>
> - Missing detail: your payments launch has no outcome yet. What was the result — adoption, revenue, time-to-ship? Share one number and I'll build the headline.
>
> **Questions to ask**
>
> - "What does the first 0→1 win look like for this role over the next two quarters?"
>
> _Expect a comp question on the recruiter call — if you don't have a competing offer, defer: "I'm calibrating to market for this level; can you share the band?"_
