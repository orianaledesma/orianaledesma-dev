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
  /** Screenshot mobile opcional — se usa vía <picture> en viewports chicos. */
  imageMobile?: string;
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
      category: 'Client work · live',
      title: 'Rima Berg',
      role: 'Designed and built it for a jewellery brand in Kaunas',
      stack: ['Live in production', 'Bilingual EN / LT', 'SEO-ready & responsive'],
      image: 'assets/images/work/rimaberg_dk.jpeg',
      imageMobile: 'assets/images/work/rimaberg_mb.jpeg',
      bullets: [
        'An elegant bilingual (EN/LT) catalogue for a real jewellery brand',
        'Designed to show each piece beautifully and turn visits into enquiries',
        'Fast, responsive and SEO-ready — online at rimaberg.com',
      ],
      quote: "A brand's vitrine, crafted to feel as refined as the pieces.",
      cta: 'Visit rimaberg.com →',
      ctaHref: 'https://rimaberg.com',
    },
    {
      category: 'Live · built from zero',
      title: 'Latina Connection',
      role: 'Brand, site and launch — all of it mine',
      image: 'assets/images/work/latina-connection.webp',
      stack: ['Live in production', 'Prerendered for SEO', 'WCAG AA'],
      bullets: [
        'A course brand I built end to end, online at latinaconnection.info',
        'Pages ship as real HTML, so Google reads the content and not an empty shell',
        'An interactive piece on the page shows what the course teaches before you buy',
      ],
      quote: 'The product and its storefront, built by the same hands.',
      cta: 'Visit latinaconnection.info →',
      ctaHref: 'https://latinaconnection.info',
    },
  ],
};
