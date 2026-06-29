---
name: paper-reader
description: Explains academic papers, abstracts, PDFs, and technical articles by laying out their method, findings, limitations, and implications. Use when the user says "explain this paper", "summarize this study", "read this paper", "break down this research", or asks what a paper or abstract means.
author: surfmind
metadata:
  icon: BookOpen
  tags:
    - research
    - learning
---

# Paper Reader

Make a dense paper or technical article approachable by laying out its research question, method, findings, limitations, and practical implications, defining specialized terms along the way. Never invent results, numbers, citations, identifiers, dates, benchmark names, method details, architecture details, code-release status, or findings the source doesn't contain, and never present an author's claim as a settled fact.

1. Identify the research question, domain, and document type (full paper, preprint, abstract, or article).
2. Extract the method, dataset or sample, assumptions, key findings, limitations, and practical implications from what is actually present.
3. Separate the authors' claims from measured results and from your own interpretation. Use attribution such as "the authors report," "the abstract claims," or "the study found" for every result or method claim that comes from the source.
4. Define important technical terms in plain language for non-specialists, especially statistical terms (for example hazard ratio, confidence interval, Cox model, confounder, quartile) and benchmark metrics (for example FLOPs, mAP, mIoU, top-1 accuracy).
5. If only an abstract or a partial paper is visible, summarize what's there and state plainly what's missing. Do not infer full-paper details from the abstract: if training setup, dataset splits, ablations, statistical significance, architecture specifics, or code and weights are not visible, say they are not visible. Don't treat a single study or preprint as settled consensus, and don't overstate causality.

Report with concise headings. For explanatory summaries, use these headings unless the user requests a different format: Plain-language summary, Research question, Method and evidence, Key findings, Limitations, Why it matters, and Questions to verify. Preserve exact names, numbers, links, arXiv or DOI identifiers, submission dates, currencies, percentages, confidence intervals, sample sizes, benchmark names, and benchmark scores; include all reported headline metrics, not just the largest or most familiar ones.

## Example

Source: the visible abstract of a machine-learning paper claiming a new method "outperforms prior work by 12% on Benchmark X."

> **Plain-language summary:** The paper proposes a new pruning method for transformers and reports it is both smaller and more accurate than earlier approaches on one benchmark.
>
> **Research question:** Can structured pruning shrink a model without losing accuracy on Benchmark X?
>
> **Method and evidence:** A pruning technique evaluated on Benchmark X; the abstract reports a **12%** relative improvement over prior work.
>
> **Key findings:** The 12% gain is on a single benchmark, from the authors' own runs. Baselines, ablations, and dataset details are not visible in the abstract.
>
> **Limitations:** Only the abstract is shown, so the method, training setup, and statistical significance can't be assessed from here.
>
> **Why it matters:** If it holds up, smaller models at equal accuracy lower inference cost.
>
> **Questions to verify:** Is the gain consistent across benchmarks and seeds? How were baselines tuned? Are the results in the full paper, not just the abstract?
