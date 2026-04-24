export interface ServiceCardCopy {
  label: string;
  title: string;
  price: string;
  for: string;
  features: string[];
  cta: string;
}

export interface ServicesCopy {
  h2: string;
  sub: string;
  cards: ServiceCardCopy[];
}

export const SERVICES_COPY: ServicesCopy = {
  h2: 'Three ways to work together',
  sub: 'Fixed scope. Fixed price. No "it depends".',

  cards: [
    {
      label: 'MOST REQUESTED',
      title: 'The Creator Landing',
      price: 'From €1,200 · 14 days',
      for: 'Creators, coaches, infoproducers launching a product, course or waitlist.',
      features: [
        '1 high-converting landing page (Next.js or Astro)',
        'Payment / waitlist / booking integration (Stripe, Hotmart, Calendly)',
        'Mobile-first, <2s load, SEO-ready',
        'Analytics + 1 A/B test after launch',
      ],
      cta: 'Start my landing →',
    },
    {
      label: 'FOR TEAMS',
      title: 'Frontend Engineering on Demand',
      price: '€70/hr · monthly retainer from €2,400',
      for: 'SaaS teams of 2–20 that need senior frontend without the hiring overhead.',
      features: [
        'Angular, Next.js, React (5 years in production)',
        'Component systems, performance audits, migrations',
        'EU timezone, async-first, Slack/Linear/GitHub',
        'Code reviews included',
      ],
      cta: 'Request a scoping call →',
    },
    {
      label: 'NICHE',
      title: 'Travel-Tech Site + Content Kit',
      price: 'From €1,800 · 3–4 weeks',
      for: 'Boutique hotels, tour operators and travel brands that want a site built by someone who has actually stayed in them.',
      features: [
        'Booking-ready site (multilingual EN/ES)',
        '5 reels + 15 photos shot on location (optional)',
        '48h turnaround on content edits',
      ],
      cta: 'Tell me about your property →',
    },
  ],
};
