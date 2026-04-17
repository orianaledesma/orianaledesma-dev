import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type HeroVariant = 'technical' | 'narrative' | 'brand';

interface HeroStat {
  value: string;
  label: string;
}

interface HeadlineLine {
  text: string;
  italic?: boolean;
  accent?: boolean;
}

interface HeroContent {
  badge: string;
  headline: HeadlineLine[];
  subheadline: string;
  description?: string;
  ctaPrimary: string;
  ctaSecondary: string;
  stats: HeroStat[];
}

const HERO_CONTENT: Record<HeroVariant, HeroContent> = {
  technical: {
    badge: 'Available · EU Timezone',
    headline: [{ text: 'Angular Senior. Ship-ready.' }],
    subheadline: '5+ years of Angular, from Naranja X fintech to production-grade Travel-Tech.',
    description: 'You need a senior dev who knows the stack, communicates without noise, and doesn\'t need onboarding hand-holding. I\'ve shipped complex Angular applications at one of Argentina\'s largest fintechs — and built my own travel product from zero. I work EU hours. I deliver on scope.',
    ctaPrimary: 'Book a Free Call',
    ctaSecondary: 'View my work →',
    stats: [
      { value: '5+',        label: 'Years in Angular' },
      { value: 'Naranja X', label: 'Fintech experience' },
      { value: 'EU TZ',     label: 'Available overlap' },
    ],
  },
  narrative: {
    badge: 'Now Taking Travel-Tech Projects',
    headline: [{ text: 'Built by someone who actually travels.' }],
    subheadline: 'Angular developer + 40 cities lived = Travel-Tech that works from the guest\'s perspective.',
    description: 'Your guests don\'t need a beautiful website. They need one that converts. I\'ve checked into boutique hotels in 40+ cities, used the booking forms, hit the friction — and left. When I build your site, I\'m not interpreting a brief. I\'ve been your customer.',
    ctaPrimary: 'Book a Free Call',
    ctaSecondary: 'See Exploriando →',
    stats: [
      { value: '40+',         label: 'Cities lived & worked' },
      { value: 'Exploriando', label: 'Travel brand I built' },
      { value: '€0 to live',  label: 'Marketing budget to launch' },
    ],
  },
  brand: {
    badge: 'Available for projects',
    headline: [
      { text: 'Frontend' },
      { text: 'Engineer', italic: true, accent: true },
      { text: '+ Travel-Tech' },
      { text: 'Builder' },
    ],
    subheadline: 'Angular Senior · Exploriando Founder · Based in Kaunas, LT',
    ctaPrimary: 'View services',
    ctaSecondary: 'See my work →',
    stats: [
      { value: '5+',   label: 'Years in Angular' },
      { value: '40+',  label: 'Cities visited' },
      { value: '10K+', label: 'Community' },
    ],
  },
};

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  variant = input<HeroVariant>('technical');

  content = computed(() => HERO_CONTENT[this.variant()]);
}
