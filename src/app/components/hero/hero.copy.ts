export interface HeroCopy {
  badge: string;
  h1: string;
  subheadline: string;
  tagline: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export const HERO_COPY: HeroCopy = {
  badge: 'EU-based · Now booking small-business projects',

  h1: "You don't need a big agency. You need a site that works.",

  subheadline:
    'I help small companies look as solid online as they are in person. Fast to launch, easy to maintain, fair price.',

  // Price micro-trust line, rendered below the CTA
  tagline: '€800–2,000 · no surprise invoices',

  ctaPrimary: 'Book a 20-min call',
  ctaSecondary: 'See recent work',
};
