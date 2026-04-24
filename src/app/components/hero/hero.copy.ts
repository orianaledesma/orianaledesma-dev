export interface HeroCopy {
  badge: string;
  h1: string;
  subheadline: string;
  tagline: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export const HERO_COPY: HeroCopy = {
  badge: 'EU-based · 3 spots open for Q2 2026',

  h1: 'Landing pages that turn traffic into clients. Built in 14 days.',

  // V1 — directa, menciona el doble perfil sin forzarlo
  subheadline:
    'Frontend engineer + travel creator. I build conversion-first sites for creators, founders and small SaaS across the EU and LATAM.',

  // V2 — más compacta, el "and" final le da ritmo
  // subheadline:
  //   'I build conversion-first sites for creators, founders and small SaaS — EU-based, shipped fast.',

  tagline: 'Booking projects until June 15 — shipping before Q3',

  ctaPrimary: 'See plans & pricing',
  ctaSecondary: 'Short intro call (20 min)',
};
