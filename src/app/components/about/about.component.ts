import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { HeroVariant } from '../hero/hero.component';

interface RoleCard {
  title: string;
  tags:  string;
  stat:  string;
}

interface AboutContent {
  headline:  string;
  bio:       string[];
  roles?:    RoleCard[];
  location?: string;
  skills:    string[];
  facts:     { value: string; label: string }[];
}

const ABOUT_CONTENT: Record<HeroVariant, AboutContent> = {
  technical: {
    headline: "Dev who actually travels.\nTraveler who actually ships.",
    bio: [
      'I\'m Oriana Ledesma — Angular Senior Developer with 5+ years shipping production applications. Before going independent, I built at Naranja X, one of Argentina\'s leading fintechs, where scale isn\'t optional and clean architecture is the baseline.',
      'I also founded Exploriando — a travel brand built with Angular, grown to 10K+ community. That product is proof the stack works. I work with EU and global teams, EU timezone, in English.',
    ],
    skills: ['Angular 19', 'TypeScript', 'RxJS', 'NgRx', 'SCSS', 'REST APIs', 'Git / GitHub', 'Netlify', 'Vercel', 'Figma'],
    facts: [
      { value: '5+',   label: 'Years in Angular' },
      { value: '40+',  label: 'Cities lived' },
      { value: '10K+', label: 'Community built' },
    ],
  },
  brand: {
    headline: "Dev who actually travels.\nTraveler who actually ships.",
    bio: [
      'I\'m Oriana Ledesma — Angular Senior Developer with 5+ years shipping production applications. Before going independent, I built at Naranja X, one of Argentina\'s leading fintechs, where scale isn\'t optional and clean architecture is the baseline.',
      'I also founded Exploriando — a travel brand built with Angular, grown to 10K+ community. That product is proof the stack works. I work with EU and global teams, EU timezone, in English.',
    ],
    skills: ['Angular 19', 'TypeScript', 'RxJS', 'NgRx', 'SCSS', 'REST APIs', 'Git / GitHub', 'Netlify', 'Vercel', 'Figma'],
    facts: [
      { value: '5+',   label: 'Years in Angular' },
      { value: '40+',  label: 'Cities lived' },
      { value: '10K+', label: 'Community built' },
    ],
  },
  narrative: {
    headline: "The developer who's also been your customer.",
    bio: [
      'I\'m Oriana Ledesma — Angular Senior Developer with 5+ years building production applications, including at Naranja X, one of Argentina\'s largest fintechs. I work with Angular 19, TypeScript, RxJS, NgRx, and REST APIs daily — not as a checklist, but as the actual stack I\'ve shipped real products with. I work EU timezone, communicate in English, and don\'t need hand-holding to deliver.',
      'I founded Exploriando — a travel brand I built myself with Angular — and grew it by actually living it across 40+ cities. Every booking flow I\'ve designed, I\'ve used as a guest first. Every hotel site I\'ve built, I\'ve navigated as a customer who almost left. That context doesn\'t come from research. It comes from having been on the other side of the screen.',
    ],
    roles: [
      {
        title: 'The Engineer',
        tags:  'Angular 19 · TypeScript · RxJS · NgRx · REST APIs · SCSS',
        stat:  '5+ years shipping production code — fintech scale, travel-tech precision.',
      },
      {
        title: 'The Creator',
        tags:  'Founder of Exploriando, built with Angular from day one.',
        stat:  '8,000+ followers across Instagram, YouTube, TikTok & Facebook — and growing.',
      },
    ],
    location: '📍 Based in Kaunas, Lithuania · EU Timezone',
    skills: [],
    facts:  [],
  },
};

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  variant = input<HeroVariant>('technical');

  content = computed(() => ABOUT_CONTENT[this.variant()]);
}
