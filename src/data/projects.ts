export type Palette = 'coral' | 'blue' | 'green';

export interface Project {
  slug: string;
  title: string;
  eyebrow: string;
  category: string;
  year: string;
  duration: string;
  role: string;
  team: string;
  platform: string;
  palette: Palette;
  summary: string;
  challenge: string;
  contribution: string;
  insight: string;
  direction: string;
  validation: string;
  outcome: string;
  reflection: string;
  outcomes: string[];
  tags: string[];
  confidentialityNote?: string;
}

export const projects: Project[] = [
  {
    slug: 'care-pathway',
    title: 'Care, after the appointment',
    eyebrow: 'CarePath · Patient experience',
    category: 'Service design',
    year: '2024',
    duration: '12 weeks',
    role: 'Lead product designer',
    team: 'PM, 2 engineers, clinical advisor',
    platform: 'Responsive web',
    palette: 'coral',
    summary: 'Making the uncertain hours after a visit feel more legible, supported, and human.',
    challenge: 'People left appointments with scattered instructions, unclear next steps, and a growing list of questions. The care team needed a clearer handoff without adding operational load.',
    contribution: 'I shaped the end-to-end experience: interview guide, journey map, content hierarchy, interaction model, prototype, and usability studies.',
    insight: 'The problem was not a lack of information. It was a lack of confidence. People needed one calm place that answered “what now?” in the order their care was likely to unfold.',
    direction: 'I designed a time-aware care timeline, a short list of actions for today, and a secure way to surface questions before they became calls. Language was written with the clinical advisor to be precise without feeling clinical.',
    validation: 'Five moderated sessions showed that participants could find urgent guidance and understand the next action without facilitator support. The team iterated on urgency labels and reduced the first screen to the essentials.',
    outcome: 'The redesigned handoff was approved for a pilot. Quantitative results are pending pilot completion; feedback from evaluators centred on the feeling of calm and orientation.',
    reflection: 'I would bring caregivers into the research earlier next time. Their information needs were distinct from the person receiving care, especially around coordinating practical follow-up.',
    outcomes: ['Pilot-ready care handoff', 'Clearer next-step hierarchy', 'Outcome metrics pending approval'],
    tags: ['Research', 'Information architecture', 'Content design'],
    confidentialityNote: 'Illustrative case study. Details have been adapted to protect confidential work.',
  },
  {
    slug: 'merchant-onboarding',
    title: 'A welcome that keeps momentum',
    eyebrow: 'Counterpart · Merchant onboarding',
    category: 'Product design',
    year: '2024',
    duration: '10 weeks',
    role: 'Product designer',
    team: 'PM, 3 engineers, operations lead',
    platform: 'Web app',
    palette: 'blue',
    summary: 'Turning a high-stakes setup process into a guided, confidence-building first session.',
    challenge: 'New merchants were asked to complete several linked tasks before they could accept payments. Progress was invisible, terminology was unfamiliar, and incomplete setups created avoidable support work.',
    contribution: 'I audited the existing flow, interviewed new merchants and support staff, mapped dependencies, designed the experience, and worked with engineering through release planning.',
    insight: 'Merchants did not think in product settings. They thought in readiness: “Can I start selling?” Reframing the work around moments of readiness gave the flow a clearer narrative and a better place for help.',
    direction: 'The resulting experience grouped tasks by intent, surfaced only the next meaningful action, and made requirements visible before a merchant hit a blocker. A lightweight setup guide stayed available without taking over the screen.',
    validation: 'Concept testing with six merchants clarified which labels made financial setup feel approachable. We simplified technical language, added examples at decision points, and tuned the progress feedback with operations.',
    outcome: 'The team shipped the guided setup foundation in phases. Reliable conversion and support metrics will be added when the approved reporting period is complete.',
    reflection: 'The most valuable decision was reducing what we showed, not adding more guidance. The right moment and amount of information mattered more than a comprehensive checklist.',
    outcomes: ['Guided setup foundation shipped', 'Reduced cognitive load', 'Reporting period in progress'],
    tags: ['Journey mapping', 'Interaction design', 'Usability testing'],
    confidentialityNote: 'Illustrative case study. Names, details, and visuals are placeholders for approved material.',
  },
  {
    slug: 'operations-console',
    title: 'Clarity for the people behind the scenes',
    eyebrow: 'Relay · Support operations',
    category: 'Systems design',
    year: '2023',
    duration: '14 weeks',
    role: 'Senior product designer',
    team: 'PM, 4 engineers, 8 support specialists',
    platform: 'Desktop web app',
    palette: 'green',
    summary: 'Helping support specialists resolve complex exceptions without losing the thread.',
    challenge: 'Support specialists navigated several systems to understand a customer issue. Context was fragmented, repeatable steps varied by person, and handoffs made it difficult to see what had already happened.',
    contribution: 'I facilitated workflow mapping, created a shared information model, prototyped the console, defined reusable patterns, and partnered with engineers on staged delivery.',
    insight: 'An exception is rarely a single event. It is a story assembled across time. The console needed to make that story visible before asking the specialist to decide what to do next.',
    direction: 'I organised the work area around an event timeline, a persistent customer summary, and an action panel tied to the current state. Reusable status patterns made uncertainty and ownership explicit.',
    validation: 'Scenario-based sessions with specialists exposed where the timeline lacked decision context. We introduced visible sources, improved the handoff note pattern, and revised the action hierarchy before implementation.',
    outcome: 'The team adopted the pattern library for the first release train. Service metrics are intentionally omitted here until they are approved for publication.',
    reflection: 'Designing for expert users is an exercise in respecting speed without hiding complexity. The interface should not pretend the work is simple; it should make the complexity navigable.',
    outcomes: ['Shared workspace model', 'Reusable operational patterns', 'Metrics withheld pending approval'],
    tags: ['Service blueprint', 'Design systems', 'Enterprise UX'],
    confidentialityNote: 'Illustrative case study. Project information has been intentionally generalised.',
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
