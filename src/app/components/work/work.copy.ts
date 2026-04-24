export interface CaseStudyCopy {
  category: string;
  title: string;
  role: string;
  stack: string[];
  bullets: string[];
  quote?: string;
  cta?: string;
  ctaHref?: string;
  placeholder?: boolean;
  image?: string;
  brandedBg?: string;
}

export interface WorkCopy {
  h2: string;
  cases: CaseStudyCopy[];
}

export const WORK_COPY: WorkCopy = {
  h2: 'Case studies',

  cases: [
    {
      category: 'Travel-Tech · Angular',
      title: 'Exploriando',
      role: 'Founder · Designer · Developer · Creator',
      stack: ['Angular', 'SSR', 'i18n', 'Stripe'],
      image: 'assets/images/work/exploriando.webp',
      bullets: [
        '2,000+ community members across LATAM',
        '40+ countries documented, 5 years bootstrapped',
        '€9 digital product + brand collab funnel live',
        'Built solo, shipped in public',
      ],
      quote: "I build products with a founder's mindset — because I am one.",
      cta: 'Visit exploriando.page →',
      ctaHref: 'https://exploriando.page',
    },
    {
      category: 'Fintech · Angular',
      title: 'Naranja X',
      role: 'Senior Frontend Engineer',
      stack: ['Angular', 'Design System', 'Micro-frontends'],
      brandedBg: '#FF6B00',
      bullets: [
        'Fintech serving 5M+ users in LATAM',
        'Migrated legacy modules to shared design system',
        'Shipped features across 4 product verticals',
      ],
    },
    {
      category: 'Enterprise Travel · Angular',
      title: 'Cocha',
      role: 'Frontend Engineer (contract)',
      stack: ['Angular', 'NgRx', 'REST APIs'],
      brandedBg: '#006B7D',
      bullets: [
        "One of LATAM's largest corporate travel platforms",
        'Built booking UIs for flights and hotels — search result cards, reservation flows, authorization screens',
        'B2B apps used daily by travel agents to manage corporate trips, supplier quotes and travel budgets',
        'Angular + NgRx across multiple integrated vertical apps',
      ],
    },
    {
      category: 'Available now',
      title: '[Your project here]',
      role: '',
      stack: [],
      bullets: ['Currently booking 3 spots for Q2 2026.'],
      cta: 'Apply for a slot →',
      placeholder: true,
    },
  ],
};
