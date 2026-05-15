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
      category: 'Live · built from zero',
      title: 'Trade-Calendar',
      role: 'I built and shipped the whole thing — design, build, launch',
      stack: ['Live in production', '3 languages', 'Secure login'],
      image: 'assets/images/work/trade-calendar.webp',
      bullets: [
        'A real product people use every day, online at trade-calendar.com',
        'Sign-up, secure accounts and a clean dashboard — all working',
        'Available in 3 languages with a light and dark mode',
        'From idea to live product, start to finish',
      ],
      quote: 'Not a demo. A product in real use.',
      cta: 'See it live →',
      ctaHref: 'https://trade-calendar.com',
    },
    {
      category: 'Live · 5 years running',
      title: 'Exploriando',
      role: 'Built it from zero and still run it',
      stack: ['Live in production', 'Multi-language', 'Online payments'],
      image: 'assets/images/work/exploriando.webp',
      bullets: [
        'A real travel brand I built and have kept online for 5 years',
        'Sells a digital product and handles payments end to end',
        'Proof I build things that keep working, not just launch',
      ],
      quote: 'I build things the way I build my own — to last.',
      cta: 'Visit exploriando.page →',
      ctaHref: 'https://exploriando.page',
    },
    {
      category: 'In progress',
      title: 'Latina Connection',
      role: 'In build right now',
      stack: ['In progress'],
      bullets: [
        'A community platform currently in the works',
        'Building it the same way: clear scope, shipped properly',
        'Take a peek at where it is today',
      ],
      cta: 'Take a peek →',
      ctaHref: 'http://latinaconnection.info/',
    },
  ],
};
