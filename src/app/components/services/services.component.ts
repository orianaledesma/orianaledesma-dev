import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { HeroVariant } from '../hero/hero.component';

interface Service {
  icon: string;
  tag: string;
  title: string;
  description: string;
  price?: string;
  features: string[];
  cta: string;
}

interface ServicesContent {
  label: string;
  headline: string;
  services: Service[];
}

const BRAND_SERVICES: Service[] = [
  {
    icon: '⬡',
    tag: 'Development',
    title: 'Angular Engineering',
    description: 'Senior-level Angular development for teams that need someone who ships — not someone who needs onboarding. From architecture decisions to production deploy.',
    features: [
      'Angular 19 + Signal APIs (stable)',
      'TypeScript strict, RxJS, NgRx',
      'REST & GraphQL integration',
      'CI/CD · GitHub Actions → Netlify / Vercel',
    ],
    cta: 'Book a call',
  },
  {
    icon: '✦',
    tag: 'Specialty',
    title: 'Travel-Tech Builds',
    description: 'Digital products for hotels, agencies and tour operators — designed by someone who has been your guest in 40+ cities and left because the booking form was broken.',
    features: [
      'Booking & availability systems',
      'Mobile-first, conversion-focused',
      'Multi-language & currency ready',
      'CMS integration for non-tech teams',
    ],
    cta: 'Book a call',
  },
  {
    icon: '◈',
    tag: 'Content',
    title: 'UGC & Tech Content',
    description: 'Authentic content for travel, tech and lifestyle brands. Shot on location, not in a studio. Real traveler perspective — 40+ cities, 10K+ community built from scratch.',
    features: [
      'Travel & lifestyle UGC',
      'App & SaaS walkthroughs',
      'Reels & TikTok vertical format',
      'Raw files + usage rights included',
    ],
    cta: 'See packages',
  },
];

const SERVICES_CONTENT: Record<HeroVariant, ServicesContent> = {
  technical: {
    label: 'What I do',
    headline: 'Services built for real outcomes',
    services: BRAND_SERVICES,
  },
  brand: {
    label: 'What I do',
    headline: 'Services built for real outcomes',
    services: BRAND_SERVICES,
  },
  narrative: {
    label: 'What I Build',
    headline: 'Three ways to work together.',
    services: [
      {
        icon: '⬡',
        tag: 'Development',
        title: 'Angular Contracts',
        description: 'Senior-level Angular for startups and product teams that need reliable delivery, not supervision. I plug into your stack, communicate in your timezone, and ship.',
        price: '€60–90/hr · Projects from €1,500',
        features: [
          'For: European startups, scale-ups, product teams with 2–8 week needs',
          'Includes: component architecture, performance optimization, code review',
          'Stack: Angular 14+, RxJS, NgRx, TypeScript, REST/GraphQL APIs',
        ],
        cta: 'Check Availability →',
      },
      {
        icon: '✦',
        tag: 'Specialty',
        title: 'Travel-Tech Websites & Systems',
        description: 'Booking flows, hotel websites, and tour platforms — built by a developer who has actually used them as a guest in 40+ cities. The friction points you haven\'t noticed? I have.',
        price: 'From €1,500',
        features: [
          'For: boutique hotels, travel agencies, tour operators',
          'Includes: full site build, booking flow UX, performance & mobile optimization',
          'Differentiator: I\'ve been your guest. I know what kills a conversion.',
        ],
        cta: 'Let\'s Talk Travel-Tech →',
      },
      {
        icon: '◈',
        tag: 'Content',
        title: 'Travel & Lifestyle Content',
        description: 'Authentic video content from someone who actually lives what she films. Not a creator on a press trip — a remote worker who\'s been in your destination for weeks.',
        price: 'From €150',
        features: [
          'For: travel brands, lifestyle products, digital tools for nomads',
          'Includes: raw + edited vertical video, usage rights, 48h turnaround',
          'Style: real, unscripted, conversion-focused — not Instagram fluff',
        ],
        cta: 'See Content Work →',
      },
    ],
  },
};

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
  variant = input<HeroVariant>('technical');

  content = computed(() => SERVICES_CONTENT[this.variant()]);
}
