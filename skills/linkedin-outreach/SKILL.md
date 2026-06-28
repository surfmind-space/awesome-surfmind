---
name: linkedin-outreach
description: Drafts short LinkedIn connection or outreach messages for recruiters, hiring managers, peers, and interviewers using the visible job or company context.
metadata:
  author: surfmind
  icon: MessageCircle
  tags:
    - career
    - writing
    - marketing
---

# Linkedin Outreach

Draft short career outreach messages for LinkedIn or similar professional networks. Adapted from the `contacto` mode in `santifer/career-ops`, with SurfMind browser context and copy-paste output.

## Inputs To Inspect

- The selected text, visible page, job description, company page, person profile, or user request.
- The user's provided background, target role, relevant proof points, and relationship to the recipient.
- Current company or team context when search or visible pages are available.

## How To Work

1. Identify the contact type:
   - **Recruiter:** talent acquisition, sourcer, recruiter, HR.
   - **Hiring manager:** leads or owns the team.
   - **Peer:** similar role, potential referral path, collaborator.
   - **Interviewer:** already scheduled or named in the process.
2. If the target person is unclear, draft by contact type and say what would improve personalization.
3. Build the message on the three-sentence framework for that contact type:
   - **Recruiter:** Fit (the direct match: role, relevant experience, location, or availability), Proof (data that answers a screening question before they ask it), CTA (offer to share the CV if it aligns).
   - **Hiring manager:** Hook (a specific challenge their team faces, drawn from the posting, blog, or news), Proof (the user's strongest relevant quantified achievement), CTA (ask how the team is approaching that challenge).
   - **Peer:** Interest (a genuine reference to their work, such as a post, talk, or project), Connection (something the user is doing in the same space, not a job pitch), CTA (invite their take on a shared topic). Do not ask for a job or a referral; the referral happens naturally if the conversation flows.
   - **Interviewer:** Research (a reference to their work or trajectory), Context (a light tie to the user's experience), CTA (look forward to the scheduled conversation). Keep it light, never eager.
4. Write a message under 300 characters unless the user asks for a longer note.
5. Include one alternate version with a different angle when the context supports it.

## Output Format

Return:

- **Contact type**
- **Primary message**
- **Alternative**
- **Why this works**

## Message Rules

- No phone number.
- No generic enthusiasm.
- No pressure, begging, or "please refer me" as the first move to a peer.
- Use a concrete proof point only if the user supplied it.
- If the visible page does not show enough detail, keep the message honest and ask for the missing detail that would make it stronger.
