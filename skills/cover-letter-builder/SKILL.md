---
name: cover-letter-builder
description: Builds a tailored cover letter from a visible job description and user-provided background, with research, keywords, gap handling, and an approval-ready draft.
metadata:
  author: surfmind
  icon: Mail
  tags:
    - career
    - writing
    - marketing
---

# Cover Letter Builder

Create a tailored cover letter from the selected text, visible page, or pasted job description. Adapted from `santifer/career-ops` `cover` mode while keeping the output browser-native and reviewable in chat.

## Mandatory Gate

Before drafting, confirm that a real job description is present. A valid job description includes a role title, a company name, and responsibilities or requirements. If it is missing, ask the user to paste the job description or open the posting.

## Inputs To Use

- The visible job description or selected job text.
- Company page context, product page context, or recent company information from search when available.
- The user's resume, profile, achievements, writing preferences, and constraints from the conversation.
- Any specific angle the user wants to emphasize.

## How To Work

1. Parse the job description: exact role title, company, location, top competencies, mission language, start date signals, language requirements, domain, and tone.
2. Research the company when current context would materially improve the letter. Summarize what the company appears to be building, prioritizing, or struggling with. Ask the user to correct or confirm the synthesis before using it.
3. Extract 8-10 phrases from the job description:
   - **ATS-critical:** titles, tools, methods, domain terms.
   - **Human trust signals:** verbs, product nouns, team framing, and outcome language from the posting.
4. Identify profile gaps only when they are visible from the user's supplied background: domain mismatch, language requirement, start date, title mismatch, relocation, or authorization. Ask how the user wants to handle any real gap before writing.
5. Ask for the four drafting inputs if they are not already clear:
   - Why this role or company?
   - What problem would the user help solve?
   - How would they approach it?
   - Desired tone: formal, direct, conversational, or mirror the job description.
6. Select only real achievements the user provided. Preserve exact numbers and claims. If no achievements are available, ask for 3-5 proof points before drafting.
7. Draft the letter in chat for review. Keep it specific to the company and role. Do not generate generic filler.

## Draft Structure

Use:

- Candidate header if the user provided those details.
- Role and company line.
- Optional greeting.
- Two-sentence opening.
- One profile paragraph.
- Four to five achievement bullets when the user supplied enough proof points.
- A short "problems I will solve" paragraph.
- Closing with any confirmed gap acknowledgment.

## Writing Rules

- Use active voice.
- Avoid generic phrases like "I am excited to apply", "passionate about", "perfect fit", "proven track record", "leverage", "synergy", and "cutting-edge".
- Keep claims concrete: a number, system, product, customer, team, or visible job requirement should support each major claim.
- Mirror the job's vocabulary, not its structure. Use each keyword once, never repeated for density.
- Apply mirrored keywords to the opening, the profile paragraph, the vocabulary around achievements, and the problems paragraph. Keep them out of the personal "why this role" angle and the closing, which stay in the user's own words.
- If a keyword cannot be included honestly, list it after the draft for manual review.

## Output Format

Return **Research and angle**, **Keywords to mirror**, **Questions before drafting** when needed, then **Draft cover letter** once the user has provided enough information.
