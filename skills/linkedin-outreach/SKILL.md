---
name: linkedin-outreach
description: Drafts short LinkedIn connection or outreach messages for recruiters, hiring managers, peers, and interviewers using the visible job or company context. Use when the user wants to write a LinkedIn message, connect with a recruiter, or reach out to someone about a job opportunity.
author: surfmind
metadata:
  icon: MessageCircle
  tags:
    - career
    - writing
---

# Linkedin Outreach

Draft a short career outreach message from the selected text, visible page, job description, company page, person profile, or user request, and present it in chat for copy-paste. Work only from the user's supplied background, target role, proof points, and relationship to the recipient — use a concrete proof point only if they gave it to you, never invent numbers or qualifications. Avoid generic enthusiasm, phone numbers, and pressure; never lead with "please refer me" to a peer. Adapted from [santifer/career-ops](https://github.com/santifer/career-ops/tree/main) `contacto` mode.

1. Identify the contact type — **recruiter** (talent acquisition, sourcer, HR), **hiring manager** (leads or owns the team), **peer** (similar role, collaborator, possible referral path), or **interviewer** (already scheduled or named in the process). If it's unclear, draft by likely type and say what would improve personalization.
2. Build the message on the three-sentence framework for that contact type:
   - **Recruiter:** Fit (the direct match — role, relevant experience, location, or availability), Proof (data that answers a screening question before they ask it), CTA (offer to share the CV if it aligns).
   - **Hiring manager:** Hook (a specific challenge their team faces, drawn from the posting, blog, or news), Proof (the user's strongest relevant quantified achievement), CTA (ask how the team is approaching that challenge).
   - **Peer:** Interest (a genuine reference to their work — a post, talk, or project), Connection (something the user is doing in the same space, not a job pitch), CTA (invite their take on a shared topic). Don't ask for a job or referral; it happens naturally if the conversation flows.
   - **Interviewer:** Research (a reference to their work or trajectory), Context (a light tie to the user's experience), CTA (look forward to the scheduled conversation). Keep it light, never eager.
3. Keep the message under 300 characters unless the user asks for a longer note, and include one alternate version with a different angle when the context supports it.

Return **Contact type**, **Primary message**, **Alternative**, and **Why this works**. If the visible page doesn't show enough detail, keep the message honest and ask for the missing detail that would make it stronger.

## Example

Context (a recruiter's profile + the user's note):

> Sarah Lin, Senior Recruiter at Northwind, posted a Backend Engineer role (Go, distributed systems, remote US). My note: 6 yrs backend, built a payments service handling 2k req/s in Go, open to remote.

Output:

> **Contact type:** Recruiter
>
> **Primary message:** Hi Sarah — saw the Backend Engineer opening at Northwind. I've spent 6 years in Go backend, most recently building a payments service handling 2k req/s. Remote works well for me. Happy to send my CV if it looks like a fit.
>
> **Alternative:** Hi Sarah — the Northwind Backend Engineer role caught my eye. Distributed systems in Go is exactly my lane (payments service at 2k req/s). Open to remote — would love to learn more.
>
> **Why this works:** Leads with the direct fit and a concrete throughput number that pre-answers a screening question, then a low-pressure CTA. Both stay under 300 characters.
