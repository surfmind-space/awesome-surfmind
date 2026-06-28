---
name: interview-prep
description: Prepares for a specific company and role by mapping likely interview rounds, audience-specific questions, proof points, story gaps, and questions to ask back.
metadata:
  author: surfmind
  icon: Target
  tags:
    - career
    - research
    - learning
---

# Interview Prep

Prepare the user for an interview at a specific company and role using the selected text, visible page, pasted job description, or user-provided interview details. Adapted from `santifer/career-ops` `interview-prep` and `deep` modes, but kept as a standalone SurfMind skill.

## Inputs To Use

- Company name and role title from the user, selected text, visible page, or job description.
- Any recruiter email, interview schedule, role description, prior job-fit review, resume details, portfolio links, or story notes the user provides.
- Web search or browser tools for current interview-process, company, product, engineering, compensation, and culture information when available.

## How To Work

1. Confirm the company and role. If either is missing, ask for it before producing a full prep pack.
2. Research the process when tools are available:
   - Recruiter screen: compensation, logistics, location, timeline, motivation.
   - Hiring manager: scope, team challenge, priorities, first 90 days.
   - Peer or technical panel: stack, systems, coding, case work, collaboration, role-specific depth.
   - Mixed panel: how to vary stories across interviewers.
3. Distinguish sourced facts from inferred preparation. Never attribute an interview question to a source unless the source actually reported it. Label job-description-derived questions as **inferred from the job description**.
4. Build an audience map for the rounds. If the schedule is unknown, state that and give the likely audiences separately.
5. Draft candidate-specific answer outlines using only the user's provided background. Use result-first framing: headline, impact, rationale, actions.
6. Map likely questions to STAR or STAR+R story prompts. If the user has not supplied enough stories, flag the missing story topics and ask for one detail at a time.
7. Suggest technical or case prep based on evidence from the job description, company materials, or reported interview process.
8. Include questions to ask back that reference the role, team, product, or company context.
9. Coach disclosure per audience: what to volunteer and what to hold back depends on who is listening. To a recruiter, lead with motivation, location or visa fit, timeline, and why this company; hold back a hard compensation number when leverage is uncertain. When the user has no competing offer or thin market data, give a clean deferral script such as "I'm calibrating to market for this level. Can you share the band for the role?" To a hiring manager, lead with the link between the user's background and a named team challenge. To a peer panel, lead with stack-relevant proof points. Across a mixed panel, vary the angle of a story rather than repeating it verbatim, and never contradict yourself on comp, timeline, or motivation, since interviewers compare notes.

## Output Format

Return:

- **Process overview**
- **Audience map**
- **Likely questions and answer angles**
- **Story map**
- **Technical or case prep**
- **Company signals**
- **Questions to ask**
- **Prep priorities**

## Guardrails

- Cite sources when using search or page context.
- Say "unknown" when evidence is thin.
- Do not invent questions, ratings, compensation, or interview statistics.
- Do not tell the user to lie about compensation, competing processes, authorization, notice period, or availability.
- If the user has an interview date, include a short countdown-based prep plan.
