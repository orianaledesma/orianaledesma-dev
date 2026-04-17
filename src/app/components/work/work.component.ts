import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { HeroVariant } from '../hero/hero.component';

type CaseStatus = 'live' | 'nda' | 'in-progress';

interface CaseStudy {
  category:     string;
  title:        string;
  description:  string;
  stack:        string[];
  status:       CaseStatus;
  actionTag:    string;
  link?:        string;
  image?:       string;
  brandedBg?:   string;
  brandedText?: string;
}

interface WorkContent {
  label:    string;
  headline: string;
  cases:    CaseStudy[];
}

const CASES: CaseStudy[] = [
  {
    category:    'Travel-Tech · Angular',
    title:       'Exploriando',
    description: 'Travel brand built from zero — Angular, UGC, community of 10K+ Spanish speakers.',
    stack:       ['Angular', 'TypeScript', 'SCSS', 'Netlify'],
    status:      'live',
    actionTag:   'Live project →',
    link:        'https://exploriando.page',
    image:       'assets/images/work/exploriando.png',
  },
  {
    category:    'Fintech · Angular Senior',
    title:       'Naranja X',
    description: 'Frontend development for one of Argentina\'s largest fintechs. Angular at scale, production-grade.',
    stack:       ['Angular', 'NgRx', 'RxJS', 'Design System'],
    status:      'nda',
    actionTag:   'NDA · Code private',
    brandedBg:   '#FF6B00',
    brandedText: 'Naranja X',
  },
  {
    category:    'Portfolio · Angular',
    title:       'Jewelry Brand',
    description: 'Coming soon.',
    stack:       ['Angular', 'SCSS', 'Vercel'],
    status:      'in-progress',
    actionTag:   'In progress',
  },
  {
    category:    'Portfolio · Angular',
    title:       'Dance Artist',
    description: 'Coming soon.',
    stack:       ['Angular', 'Calendly API', 'SCSS'],
    status:      'in-progress',
    actionTag:   'In progress',
  },
];

const WORK_CONTENT: Record<HeroVariant, WorkContent> = {
  technical: { label: 'Selected work',  headline: 'Projects that ship',                      cases: CASES },
  brand:     { label: 'Selected work',  headline: 'Projects that ship',                      cases: CASES },
  narrative: { label: 'Selected Work',  headline: 'Real projects. Real stack. Real results.', cases: CASES },
};

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkComponent {
  variant = input<HeroVariant>('technical');

  content = computed(() => WORK_CONTENT[this.variant()]);
}
